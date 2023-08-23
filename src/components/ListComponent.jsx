import React,{useState} from 'react'
import { Modal,Badge,Button } from 'react-bootstrap';
import './ListComponent.css'
export default function ListComponent({title,desc,cat,loc,linkd}) {
    const [lineWidth, setLineWidth] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const openModal = (e) => {
        e.preventDefault()
        setShowModal(true);
      };
    
    const closeModal = () => {
        setShowModal(false);
    };
    const words = desc!== undefined ? (desc.split(' ')) : [] 
    const truncatedText = words.slice(0, 10).join(' ');
    const lineStyle = {
        height: '2px',
        background: 'aquamarine', // Change the line color here
        width: '0',
        transition: 'width 0.2s ease-in-out',
      };
    const headingStyle = {
        cursor: 'pointer',
        textDecoration: 'none',
      };
    const handleHeadingHover = (event) => {
        const width = event.target.offsetWidth;
        setLineWidth(width);
      };
    
      const handleHeadingLeave = () => {
        setLineWidth(0);
      };
      
  return (
    <>
    {
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
    
        <div style={{ width: '40rem', height: '8rem', border: '0.1rem solid #ccc',borderRadius:'0.3rem', padding: '1rem', position: 'relative' }}>
        <div onClick={(e)=>openModal(e)} className='d-flex flex-column justify-content-start align-items-start'>
            <h4  className='smaller-font' style={headingStyle} onMouseEnter={(e)=>handleHeadingHover(e)} onMouseLeave={handleHeadingLeave}>
                {title}
            </h4>
            <div style={{ ...lineStyle, width: lineWidth }}></div>
        </div>    
            <p style={{ marginTop: '0.5rem',color:'#6b7f95' }}>{truncatedText}{"..."}</p>
        </div>

    </>
  )
}
