import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import { Row, Col, Container, Button, Spinner } from 'react-bootstrap'; // Import Spinner component
import axios from 'axios';
import Airtable from 'airtable';
import ListComponent from './ListComponent';

export default function CompanyDatabase() {
  const [companies, setCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [listView, setListView] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const view = listView ? 'Grid View' : 'List View';

  // Function to toggle between list and grid view
  const viewChange = (e) => {
    e.preventDefault();
    setListView(!listView);
  };

  useEffect(() => {
    const fetchCompaniesData = async () => {
      try {
        // Replace with your Airtable API key, base ID, and table name
        const apiKey = '';        const baseId = '';       const tableName = 'Companies';
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
        setIsLoading(false); // Data is loaded, set loading state to false
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Set loading state to false in case of an error
      }
    };
    fetchCompaniesData();
  }, []);

  // Function to handle search input
  const handleSearchCompanies = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter companies based on search term
  const filteredCompanies = companies.filter((company) => {
    return company.Title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <>
      {isLoading ? ( // Conditionally render loading component while isLoading is true
        <div style={{ position: 'fixed', top: '0', left: '0', width: '100%', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
          <p style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'bold', color: 'black' }}>Loading...</p>
        </div>
      </div>
      
      ) : (
        <Container className="p-4 mt-5">
          {/* Search input */}
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={searchTerm}
              onChange={handleSearchCompanies}
              placeholder="Search for a company..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append" style={{ height: '2.375rem' }}>
              <span className="input-group-text h-100">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>

          {/* View toggle button */}
          <div style={{ width: '100%' }} className="d-flex justify-content-end">
            <Button
              style={{ backgroundColor: listView ? 'white' : 'black', color: listView ? 'black' : 'white', border: '1px solid black', borderRadius: '20px', padding: '5px 15px', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s, color 0.3s' }}
              variant={listView ? 'light' : 'dark'}
              onClick={(e) => viewChange(e)}
            >
              {view}
            </Button>
          </div>

          {/* Company list or grid */}
          {listView ? (
            <Container className="d-flex flex-column justify-content-center align-items-center">
              <Container className="d-flex flex-column align-items-center p-0">
                {filteredCompanies.map((card) => (
                  <Row className="justify-content-center" key={card.id} style={{ marginBottom: '0.4rem', width: '100%' }}>
                    <ListComponent title={card.Title} desc={card.Description} cat={card.Category} loc={card.Location} linkd={card.LinkedIn} />
                  </Row>
                ))}
              </Container>
            </Container>
          ) : (
            <Container>
              <Row xs={1} sm={1} md={2} lg={3}>
                {filteredCompanies.map((card) => (
                  <Col key={card.id}>
                    <CardComponent imgurl={card.Logo} title={card.Title} url={card.callToActionURL} desc={card.Description} cat={card.Category} loc={card.Location} linkd={card.LinkedIn} />
                  </Col>
                ))}
              </Row>
            </Container>
          )}
        </Container>
      )}
    </>
  );
}
