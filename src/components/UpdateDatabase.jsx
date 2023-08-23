import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Airtable from 'airtable';

const UpdateList = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const apiKey = 'patJcdGr5XWnXB4k2.e74a19afdc28a3eb602497d0a5e161f7a49af7b5723826cc95cab119cddd436c';
        const baseId = 'appTa5taoYxEsedxL';
        const tableName = 'Dummy';
        const pageSize = 100;

        let companiesList = [];
        let offset = null;

        do {
          const response = await axios.get(
            `https://api.airtable.com/v0/${baseId}/${tableName}`,
            {
              params: {
                pageSize,
                offset,
              },
              headers: {
                Authorization: `Bearer ${apiKey}`,
              },
            }
          );

          companiesList.push(
            ...response.data.records.map((record) => {
              const {
                id,
                fields: { Title, Description },
              } = record;

              return {
                id,
                Title,
                Description,
              };
            })
          );

          offset = response.data.offset;
        } while (offset);

        setCompanies(companiesList);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCompaniesData();
  }, []);

  const addCompanyToAirtable = async (company) => {
    try {
      const apiKey = 'patJcdGr5XWnXB4k2.e74a19afdc28a3eb602497d0a5e161f7a49af7b5723826cc95cab119cddd436c';
      const baseId = 'appTa5taoYxEsedxL';
      const tableName = 'Companies';

      const recordData = {
        fields: {
          Title: company.Title,
          Description: company.Description,
        },
      };

      await axios.post(
        `https://api.airtable.com/v0/${baseId}/${tableName}`,
        { records: [recordData] },
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log(`Company "${company.Title}" added to Airtable successfully!`);

      await axios.delete(
        `https://api.airtable.com/v0/${baseId}/Dummy/${company.id}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      setCompanies((prevCompanies) =>
        prevCompanies.filter((prevCompany) => prevCompany.id !== company.id)
      );
    } catch (error) {
      console.error('Error adding data to Airtable:', error);
    }
  };

  const handleAddCompanyClick = async (company, e) => {
    e.preventDefault();
    await addCompanyToAirtable(company);
  };

  return (
    <div className="container" style={{marginTop:'4rem'}}>
      <h2 className=" mb-4">List of Companies</h2>
      <ul className="list-unstyled">
        {companies.map((company) => (
          <li
            key={company.id}
            className="d-flex align-items-center  justify-content-center mb-4 border-bottom pb-2"
          >
            <div className="mr-3">
              <h4>{company.Title}</h4>
              <p>{company.Description}</p>
            </div>
            <button
              className="btn"
              style={{backgroundColor:'#1e6c93',color:'white'}}
              onClick={(e) => handleAddCompanyClick(company, e)}
            >
              Add<span style={{marginLeft:'0.2rem',fontSize:'1.2rem'}}>+</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpdateList;

