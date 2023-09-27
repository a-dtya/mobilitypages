import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import producthunt from '../images/product-hunt.avif'
import mobpages from '../images/mob-pages.png'
import linkedin from '../images/linkedin.png'
import substack from '../images/substack.png'
import producthunt1 from '../images/producthunt.avif'
export default function Footer() {
    const handleProductHunt = ()=>{
        window.open("https://www.producthunt.com/products/mobility-pages?utm_source=badge-follow&utm_medium=badge&utm_souce=badge-mobility-pages",
        "_blank"
        )
    }
   const handleLinkd = ()=>{
    window.open("https://www.linkedin.com/company/mobility-pages/",
    "_blank"
    )
   }
   const handleSubstack = ()=>{
    window.open("https://mobilitypages.substack.com",
    "_blank"
    )
   }
  return (
    <>
        <Container style={{height:'40vh',padding:'0'}}>
            <Row className='d-flex align-items-center w-100'>
           
                <Col className='d-flex align-items-center justify-content-center'>
                <img
                  src={mobpages}
                  alt='mobpages'
                  style={{ height: 'auto', width: '11rem', marginTop: '0.6rem', cursor: 'pointer' }}
                />
                </Col>
            </Row>
            <Row >
                <Col className='d-flex justify-content-center align-items-center mt-5'>
                <img
                        src={producthunt1}
                        alt='producthunt1'
                        style={{height:'auto',width:'2.5rem',marginRight:'1.2rem',cursor:'pointer'}}
                        onClick={handleProductHunt}
                    />
                    <img
                        src={linkedin}
                        alt='linkedin'
                        style={{height:'auto',width:'2.5rem',marginRight:'1.2rem',cursor:'pointer'}}
                        onClick={handleLinkd}
                    />
                    <img
                        src={substack}
                        alt='substack'
                        style={{height:'auto',width:'2.5rem',cursor:'pointer'}}
                        onClick={handleSubstack}
                    />
                </Col>
            </Row>
            <Row className='mt-5'>
                <h6 className='text-center' style={{fontWeight:'lighter'}}>
                © 2022 Mobility Pages. All rights reserved.</h6>

            </Row>

        </Container>
    </>
  )
}
