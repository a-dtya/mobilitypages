import React from 'react';
import car from '../images/car.png';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HomePageTwo from './HomePageTwo';
import HomePageThree from './HomePageThree';
import EndPage from './EndPage';
import Footer from './Footer';
import './HomePage.css'
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const searchButtonStyle = {
    backgroundColor: 'white',
    borderColor: '#1e6c93',
    color: '#689db6',
    transition: 'background-color 0.3s ease-in-out',
  };
  const searchButtonStyleHover = {
    backgroundColor: '#d4e3ea',
    borderColor: '#1e6c93',
  };
  const navigate = useNavigate();

  const handleSearchDatabase = () => {
    navigate('/searchdata');
  };

  const handleRequestAccess = () => {
    window.open(
      'https://airtable.com/appwSivizdaLZCckP/shrrGJZdVKKNo2RJ2',
      '_blank'
    );
  };

  return (
    <>
      <Container fluid style={{ marginTop: '2.5rem' }}>
        <Row>
          {/* Left half: Image */}
          <Col md={6} style={{ padding: '4rem' }}>
            <img src={car} alt="Left Half" style={{ width: '100%', height: '100%', maxWidth: '100%' }} />
          </Col>

          {/* Right half: Content */}
          <Col md={6}>
            <div style={{ padding: '20px' }}>
              {/* Main Heading */}
              <div className='heading'>
              <h1
                
              >
                Discover Everyone
              </h1>
              <h1
                
              >
                Working on
              </h1>
              <h1
                
              >
                Mobility
              </h1>
              </div>
              {/* Paragraphs */}
              <p className="mt-3 mt-md-5" style={{ color: '#282828', fontSize: '1.15rem' }}>
                Find more than 500 companies and startups working on services and products focused on Mobility.
              </p>
              <p style={{ fontWeight: 'light', color: '#56585a', fontSize: '1.15rem' }}>
                Use it for Job Discovery, Competitive Analysis, or staying up to date as an enthusiast!
              </p>

              {/* Search Database Button */}
              <Container className="d-flex flex-column mt-4 mt-md-5">
                <Button
                  variant="outline border"
                  style={searchButtonStyle}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = searchButtonStyleHover.backgroundColor)}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = searchButtonStyle.backgroundColor)}
                  onClick={handleSearchDatabase}
                >
                  Search Database
                </Button>

                {/* Request Access Button */}
                <Button className="mt-3 mt-md-5" style={{ backgroundColor: '#1e6c93' }} onClick={handleRequestAccess}>
                  Request Access
                </Button>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
      <HomePageTwo />
      <HomePageThree />
      <EndPage />
      <Footer />
    </>
  );
}
