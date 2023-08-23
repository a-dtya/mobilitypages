import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';

const TForm = ({ company }) => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [resume, setResume] = useState(null);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [showMaxRolesMessage, setShowMaxRolesMessage] = useState(false);
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const config = {
      SecureToken :"1a9ea673-09ef-426a-a3b4-c44dba4de67a",
      To : 'adithyavinodmuffin@gmail.com',
      From : "adithyavinod1943@gmail.com",
      Subject : "This is the subject",
      Body : "And this is the body"
    }
    if(window.Email){
      window.Email.send({
        config
      }).then(()=>alert("Email sent"))
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const handleRoleChange = (selectedOptions) => {
    //selectedOptions is an array
    if (selectedOptions.length <= 3) {
      setSelectedRoles(selectedOptions);
      setShowMaxRolesMessage(false); // Reset the message visibility

      if (selectedOptions.length === 3) {
        setShowMaxRolesMessage(true); // Show the message when 3 roles are selected

        // Start a timer to hide the message after 3 seconds
        setTimeout(() => {
          setShowMaxRolesMessage(false);
        }, 3000);
      }

    }
  };
  
  const formContainerStyle = {
    width: '100%',
    maxWidth: '400px',
    margin: '4rem auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };
  const formTitleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
  };

  const submitButtonStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  };
  const roleOptions = [
    { value: 'role1', label: 'Role 1' },
    { value: 'role2', label: 'Role 2' },
    { value: 'role3', label: 'Role 3' },
    {value:'role4',label:'Role 4'}
    // Add more role options as needed
  ];
  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };
  return (
    <div style={formContainerStyle}>
      <h2 style={formTitleStyle}>Company Information Form</h2>
      <Form onSubmit={handleFormSubmit}>
      <Form.Group controlId="companyName">
          <Form.Label>Company Name:</Form.Label>
          <span style={{ padding: '10px', fontSize: '16px' }}>{company}</span>
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="tel"
            value={phone}
            onChange={handleInputChange(setPhone)}
            required
            style={inputStyle}
          />
        </Form.Group>
        
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="roles">
          <Form.Label>Select Roles (Max 3):</Form.Label>
          <Select
            options={roleOptions}
            value={selectedRoles}
            onChange={handleRoleChange}
            isMulti
          />
          {showMaxRolesMessage && (
            <div style={{ color: 'red', marginBottom: '10px' }}>Max 3 roles allowed!</div>
          )}
        </Form.Group>
        <Form.Group controlId="resume">
          <Form.Label>Upload Resume:</Form.Label>
          <Form.Control
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            required
            style={inputStyle}
          />
        </Form.Group>
        <Button variant="primary" type="submit" style={submitButtonStyle} >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TForm;