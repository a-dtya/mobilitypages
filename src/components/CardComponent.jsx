import React,{useState} from 'react'
import {Card,Button,Badge,Modal} from 'react-bootstrap'
import ModalComponent from './ModalComponent'
import producthunt from '../images/product-hunt.avif'
import './CardComponent.css'
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
export default function CardComponent({imgurl,title,url,desc,cat,loc,linkd}) {
    const words = desc!== undefined ? (desc.split(' ')) : [] 
    const logoUrl = imgurl && imgurl.length > 0 ? imgurl[0].url : null;
  // Take the first 12 words and join them back together with a space
  const truncatedText = words.slice(0, 10).join(' ');
  const truncatedCat = cat && cat.length > 4 ? cat.slice(0, 4) : cat
    const randomColor = getRandomColor()
    const [showModal, setShowModal] = useState(false);
    const openModal = (e) => {
        e.preventDefault()
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };
   
  
  return (
    <>{
        showModal ? (
            <Modal show={showModal} onHide={closeModal} size="lg" centered>
      <Modal.Header closeButton className=" text-white" style={{backgroundColor:'#226e93'}}>
        <Modal.Title>
          <h2>{title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <p className="mb-4">
          <strong>Description:</strong> {desc}
        </p>
        <p className="mb-2">
          <strong>Category:</strong>{' '}
          {cat.map((category, index) => (
            <Badge key={index}  className="mx-1 bg-secondary">
              {category}
            </Badge>
          ))}
        </p>
        <p className="mb-2">
          <strong>Location:</strong> {loc}
        </p>
        <p className="mb-0">
          <strong>LinkedIn:</strong>{' '}
          <a href={linkd} target="_blank" rel="noopener noreferrer" style={{color:'#226e93'}}> 
            {linkd}
          </a>
        </p>
      </Modal.Body>
      <Modal.Footer>
       
        <Button style={{backgroundColor:'#226e93'}} onClick={closeModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
 
        ) :
        (
            <div className='p-0 m-0'></div>
        )
    }
    
    <Card style={{ width: '25rem',padding:'0.8rem',minHeight:'42rem',marginTop:'1.2rem' }}>
    
    <div className='d-flex align-items-center justify-content-center'>
      <Card.Img variant="top" src={logoUrl} style={{width:'50%',height:'50%',objectFit:'cover'}} />
    </div>
      <Card.Body className='mt-3'>
        <Card.Title className='fs-6 m-0' >{title}</Card.Title>
        <Card.Text className='cards m-0'>
          url
        </Card.Text>
        <Card.Text className='text-dark m-0'>
          {url}
        </Card.Text>
        <Card.Text className='cards m-0'>
            description
        </Card.Text>
        <Card.Text className='m-0'>
            {truncatedText}{"..."}
        </Card.Text>
        <Card.Text className='cards m-0'>
            category                                        
        </Card.Text>
        <Card.Text className='m-0'>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {
              cat !== undefined ? ( truncatedCat.map((c)=>{
                    return(
                   
                        <div
                  key={c}
                  className="tag"
                  style={{ backgroundColor: getRandomColor(), marginRight: '5px', marginBottom: '5px', display: 'inline-block', padding: '5px 10px', borderRadius: '5px', color: 'white', fontSize: '14px', fontWeight: 'bold' }}
                >
                  {c}
                </div>
                    )
                })
              ) : <p>null</p>
            }
            </div>
        </Card.Text>
        <Card.Text className='cards m-0'>
            location
        </Card.Text>
        <Card.Text style={{color:`${getRandomColor()}`}} className='m-0'>
            {loc}
        </Card.Text>
        <Card.Text className='cards m-0'>
            linkedin
        </Card.Text>
        <Card.Text className='m-0' >
            {linkd}
        </Card.Text>
        <Button style={{backgroundColor:'#226e93',position: 'absolute', bottom: '10px', left: '7%'}}
            onClick={(e)=>openModal(e)} 
        >More Info</Button>
         
      </Card.Body>
      
    </Card>
    </>
  )
}