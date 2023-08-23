import React from 'react';
import { Modal } from 'react-bootstrap';

const modalStyles = {
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f8f9fa',
  border: 'none',
};

const modalHeaderStyles = {
  backgroundColor: '#226e93',
  color: 'white',
  textAlign: 'center',
  padding: '15px',
};

const modalTitleStyles = {
  fontSize: '24px',
  marginBottom: '10px',
};

const modalBodyStyles = {
  padding: '20px',
};

const modalTextStyles = {
  fontSize: '16px',
  marginBottom: '15px',
};

const modalTagsStyles = {
  display: 'flex',
  flexWrap: 'wrap',
};

const modalTagStyles = {
  backgroundColor: '#226e93',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 10px',
  marginRight: '5px',
  marginBottom: '5px',
  fontSize: '14px',
  fontWeight: 'bold',
};

const linkedinLinkStyles = {
  color: '#226e93',
  textDecoration: 'underline',
};

export default function ModalComponent({ title, desc, cat, loc, linkd }) {
  return (
    <div>
      <Modal size="lg" style={modalStyles}>
        <Modal.Header closeButton style={modalHeaderStyles}>
          <Modal.Title>
            <h2 style={modalTitleStyles}>{title}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalBodyStyles}>
          <p style={modalTextStyles}>{desc}</p>
          <p style={modalTextStyles}>
            <strong>Category:</strong>
            <div style={modalTagsStyles}>
              {cat.map((category, index) => (
                <span key={index} style={modalTagStyles}>
                  {category}
                </span>
              ))}
            </div>
          </p>
          <p style={modalTextStyles}>
            <strong>Location:</strong> {loc}
          </p>
          <p style={modalTextStyles}>
            <strong>LinkedIn:</strong> <a href={linkd} style={linkedinLinkStyles} target="_blank" rel="noopener noreferrer">{linkd}</a>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
