import React from 'react'
import car from '../images/car.png'
import { Container, Row, Col, Button } from 'react-bootstrap';
import HomePageTwo from './HomePageTwo';
import HomePageThree from './HomePageThree';
import EndPage from './EndPage'
import Footer from './Footer'

import { useNavigate } from 'react-router-dom';
export default function HomePage() {
    const searchButtonStyle = {
        backgroundColor: 'white',
        borderColor: '#1e6c93',
        color: '#689db6',
        transition: 'background-color 0.3s ease-in-out'
    }
    const searchButtonStyleHover={
        backgroundColor: '#d4e3ea',
        borderColor: '#1e6c93'
    }
    const navigate  = useNavigate()
    const handleSearchDatabase = ()=>{
      navigate("/searchdata")
    }
    const handleRequestAccess = ()=>{
     window.open("https://docs.google.com/forms/d/e/1FAIpQLScQdK4BffuAgQkC6jF7tNmfFf8GEGTjN7OGKgUtu-DYd_zoNA/viewform",
     "_blank"
     )
    }
  return (
    <>


        <Container fluid style={{height: '100vh', marginTop: '2.5rem'}}>
      <Row>
        {/* Left half: Image */}
        <Col md={6} style={{padding:'4rem'}}>
          <img
            src={car}
            alt="Left Half"
            style={{ width: '100%', height: '100%' }}
          />
        </Col>

        {/* Right half: Content */}
        <Col md={6}>
          <div style={{ padding: '20px' }}>
            {/* Main Heading */}
            <h1 style={{color: '#226393', fontWeight: 'lighter', fontSize:'3.8rem',letterSpacing: '0.1rem'}}>Discover Everyone </h1>
            <h1 style={{color: '#226393', fontWeight: 'lighter', fontSize:'3.8rem',letterSpacing: '0.1rem'}}>Working on </h1>
            <h1 style={{color: '#226393', fontWeight: 'lighter', fontSize:'3.8rem',letterSpacing: '0.1rem'}}>Mobility</h1>

            {/* Paragraphs */}
            <p className='mt-5 ' style={{color: '#282828', fontSize: '1.15rem'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id
              magna et augue tempus vestibulum a a ex. Integer maximus velit
              vel erat feugiat, et mattis justo volutpat.
            </p>
            <p style={{fontWeight: 'light', color: '#56585a',fontSize:'1.15rem'}}>
              Fusce commodo pharetra metus, eu pharetra orci volutpat eget.
              Duis at dui vel mi bibendum ultricies vel nec sapien.
            </p>

            {/* Search Database Button */}
            <Container className='d-flex flex-column'>
            
            <Button variant='outline border'
                style={searchButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = searchButtonStyleHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = searchButtonStyle.backgroundColor}
                onClick={handleSearchDatabase}
            >Search Database</Button>
            

            {/* Request Access Button */}
            <Button className='mt-5' style={{ backgroundColor: '#1e6c93', }} onClick={handleRequestAccess}>
                Request Access
            </Button>
            </Container>
            
          </div>
        </Col>
        </Row>
        </Container>
        <HomePageTwo/>
        <HomePageThree/>
        <EndPage/>
        <Footer/>
        </>
           
  )
}
