import React from 'react';
import { Button, Col, Row, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './EndPage.css';

export default function EndPage() {
  const searchButtonStyle = {
    backgroundColor: 'white',
    borderColor: '#1e6c93',
    color: '#689db6',
    transition: 'background-color 0.3s ease-in-out',
    width: '100%', // Adjusted to full width on smaller screens
    maxWidth: '38rem', // Max width to maintain readability
    borderRadius: '0.2rem',
  };
  const searchButtonStyleHover = {
    backgroundColor: '#d4e3ea',
    borderColor: '#1e6c93',
  };
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/searchdata');
  };

  const handleExplore = () => {
    window.open('https://mobilitypages.substack.com/p/welcome-to-the-mobility-pages-substack', '_blank');
  };

  const handleRequest = () => {
    window.open('https://airtable.com/appwSivizdaLZCckP/shrrGJZdVKKNo2RJ2', '_blank');
  };

  return (
    <>
      <Container style={{ minHeight: '100vh' }}>
        <Row>
          <Col className='mt-5 d-flex w-100 align-items-center justify-content-center'>
            <Button
              className='shadow-button'
              style={searchButtonStyle}
              onClick={handleSearch}
              onMouseEnter={(e) => (e.target.style.backgroundColor = searchButtonStyleHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = searchButtonStyle.backgroundColor)}
            >
              Search Database
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5 d-flex w-100 align-items-center justify-content-center'>
            <div>
              <h1 className='text-center' style={{ color: '#226e93', fontWeight: 'lighter', fontSize: '3rem' }}>
                We are launching a Newsletter!
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='mt-3'>
            <p className='text-center d-flex flex-column fs-5'>
              <span>Find us on Substack where we will be presenting industry insights </span>
              <span>and analysis on the global mobility and automotive markets</span>
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='mt-1 d-flex w-100 align-items-center justify-content-center'>
            <Button
              className='shadow-button'
              style={searchButtonStyle}
              onClick={handleExplore}
              onMouseEnter={(e) => (e.target.style.backgroundColor = searchButtonStyleHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = searchButtonStyle.backgroundColor)}
            >
              Explore Substack
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className='mt-5 d-flex align-items-center justify-content-center'>
            <h1 className='text-center' style={{ color: '#226e93', fontWeight: 'lighter', fontSize: '3rem' }}>
              Interested in getting Full Access to the Database?
            </h1>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex align-items-center justify-content-center'>
            <p className='fs-5 mt-2 text-center'>
              Not happy with the limited view of the information available? Request now to get full access to the database.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className='d-flex justify-content-center align-items-center'>
            <Button
              variant='success'
              className='mt-2'
              onClick={handleRequest}
              style={searchButtonStyle}
              onMouseEnter={(e) => (e.target.style.backgroundColor = searchButtonStyleHover.backgroundColor)}
              onMouseLeave={(e) => (e.target.style.backgroundColor = searchButtonStyle.backgroundColor)}
            >
              Request Access
            </Button>
          </Col>
        </Row>
      </Container>
      <hr className='text-secondary'></hr>
    </>
  );
}

