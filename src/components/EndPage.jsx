import React from 'react'
import {Button,Col,Row,Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './EndPage.css'
export default function EndPage() {
    const searchButtonStyle = {
        backgroundColor: 'white',
        borderColor: '#1e6c93',
        color: '#689db6',
        transition: 'background-color 0.3s ease-in-out',
        width: '85%'
    }
    const searchButtonStyleHover={
        backgroundColor: '#d4e3ea',
        borderColor: '#1e6c93'
    }
    const navigate = useNavigate()
    const handleSearch = ()=>{
      navigate("/searchdata")
    }
    const handleExplore = ()=>{
      window.open("https://mobilitypages.substack.com/p/welcome-to-the-mobility-pages-substack",
      "_blank"
      )
    }
    const handleRequest = ()=>{
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScQdK4BffuAgQkC6jF7tNmfFf8GEGTjN7OGKgUtu-DYd_zoNA/viewform",
      "_blank"
      )
    }
  return (
    <>
         
    <Container style={{height:'100vh'}}>
      <Row>
        <Col className='mt-5 d-flex w-100 align-items-center justify-content-center'>
          <Button className='shadow-button' style={{backgroundColor:'#1e6c93', width:'38rem',borderRadius:'0.2rem'}} onClick={handleSearch}>Search Database</Button>
        </Col>
      </Row>
      <Row>
        <Col className='mt-5 d-flex w-100 align-items-center justify-content-center'>
        <div>
          <h1 style={{color:"#226e93",fontWeight:'lighter',fontSize:'3rem'}}>We are launching a </h1>
          <h1 className='text-center' style={{color:'#226e93',fontWeight:'lighter',fontSize:'3rem'}}>NewsLetter!</h1>
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
          <Button className='shadow-button' style={{backgroundColor:'#1e6c93', width:'38rem',borderRadius:'0.2rem'}} onClick={handleExplore}>Explore Substack</Button>
        </Col>
      </Row>    
      <Row>
        <Col className='mt-5 d-flex align-items-center justify-content-center'>
          <h1 style={{color:'#226e93',fontWeight:'lighter',fontSize:'3rem'}}>Interested in getting Full Access to the Database? </h1>
        </Col>
      </Row>
      <Row>
        <Col className='d-flex align-items-center justify-content-center'>
          <p className='fs-5 mt-2'>
            Not happy with the limited view of the information available? Request now to get full access to the database.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center align-items-center">
          <Button variant="success" className="mt-2" 
                onClick={handleRequest}
                style={searchButtonStyle}
                onMouseEnter={(e) => e.target.style.backgroundColor = searchButtonStyleHover.backgroundColor}
                onMouseLeave={(e) => e.target.style.backgroundColor = searchButtonStyle.backgroundColor}>
                Request Access
            </Button>
        </Col>
      </Row>
    </Container>
    <hr className='text-secondary'></hr>
  
    </>
  )
}
