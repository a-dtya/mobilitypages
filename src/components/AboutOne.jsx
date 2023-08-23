import React from 'react'
import {Container,Row,Button} from 'react-bootstrap'
import './EndPage.css'
export default function AboutOne() {
    const handleGet = ()=>{
        window.open("https://drive.google.com/open?id=13iYSMZf8CD3cM83M6GdfhnvLKNI9GEAdLyMtYEEQbP0",
        "_blank"
        )
    }
  return (
    
    <>
        <Container className='mt-5'>
            <Row className='text-center'>
                <h1 style={{fontSize:'2.8rem',fontWeight:'lighter', color:'#226e93',letterSpacing:'0.04rem'}}>Interested in accessing the database</h1>
                <h1 style={{fontSize:'2.8rem',fontWeight:'lighter', color:'#226e93',letterSpacing:'0.04rem'}}> for your project?</h1>
            </Row>
            <Row className='mt-5 d-flex align-items-center justify-content-center'>
                <Button className='shadow-button' style={{width:'46%',backgroundColor:'#1e6c93'}} onClick={handleGet} >
                    Get Started
                </Button>
            </Row>
        </Container>
    </>
  )
}
