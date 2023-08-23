import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import { Row, Col, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import Airtable from 'airtable';
import ListComponent from './ListComponent';

export default function CompanyDatabase() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [listView, setListView] =useState(true)
  const view = listView ? "Grid View" : "List View"
  const buttonStyle = {
    backgroundColor:listView ? 'white' : 'black',
    color: listView ? 'black' : 'white',
    border: '1px solid black',
    borderRadius: '20px',
    padding: '5px 15px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };
  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        const apiKey = 'patJcdGr5XWnXB4k2.e74a19afdc28a3eb602497d0a5e161f7a49af7b5723826cc95cab119cddd436c'; // Replace with your Airtable API key
        const baseId = 'appTa5taoYxEsedxL'; // Replace with your Airtable base ID
        const tableName = 'Companies';
        const pageSize = 100;

        const base = new Airtable({ apiKey }).base(baseId);

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
                fields: {
                  Title,
                  Investors,
                  Location,
                  Category,
                  'Call to Action URL': callToActionURL,
                  Logo,
                  Description,
                  Votes,
                  LinkedIn,
                },
              } = record;
              return {
                id,
                Title,
                Investors,
                Location,
                Category,
                callToActionURL,
                Logo,
                Description,
                Votes,
                LinkedIn,
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

  console.log(companies);

  const handleSearchCompanies = (e) => {
    setSearchTerm(e.target.value);
  };
  const viewChange = (e)=>{
    e.preventDefault()
    setListView(!listView)
  }
  const filteredCompanies = companies.filter((company) => {
    return company.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });
 
  return (
    <>
   
      <Container className='p-4 mt-5' >
      {/* Use Bootstrap classes directly in the input element */}
      <div className='input-group mb-3 ' >
        <input
          type='text'
          className='form-control'
          value={searchTerm}
          onChange={handleSearchCompanies}
          placeholder='Search for a company...'
          aria-label='Search'
          aria-describedby='basic-addon2'
        />
        <div className='input-group-append ' style={{height:'2.375rem'}}>
          <span className='input-group-text h-100' id='basic-addon2'>
          <i className='fas fa-search'></i>
          </span>
        </div>
      </div>
      <div style={{width:'100%'}} className='d-flex justify-content-end'>
        <Button style={{buttonStyle}}
        variant={listView ? 'light' : 'dark'} onClick={(e)=>viewChange(e)}>{view}</Button>
      </div>
      {
        listView ? (
         <Container className='d-flex flex-column justify-content-center align-items-center '>
          <Container  className='d-flex flex-column align-items-center p-0'> 
            {
              filteredCompanies.map((card) => (
                <Row className='justify-content-center' key={card.id} style={{marginBottom:'0.4rem',width:'100%'}}>
                    <ListComponent title={card.Title} desc={card.Description} 
                      cat={card.Category} loc={card.Location} linkd={card.LinkedIn}
                    />
                </Row>
              ))
            }
          </Container>
          </Container>
          
        ) : (
          <Container>
        <Row xs={1} sm={1} md={2} lg={3}>
          {filteredCompanies.map((card) => (
            <Col key={card.id}>
              <CardComponent
                imgurl={card.Logo}  
                title={card.Title}
                url={card.callToActionURL}
                desc={card.Description}
                cat={card.Category}
                loc={card.Location}
                linkd={card.LinkedIn}
              />
            </Col>
          ))}
        </Row>
      </Container>
        )
      }
    </Container>
    
    </>
  );
}
