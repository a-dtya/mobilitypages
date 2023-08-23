import React from 'react';
import dc from '../images/dc.jpg';

const HomePageThree = () => {
  const rectangleStyle = {
    maxWidth: 'auto',
    height: '27.5rem',
    
    
  };

  return (
    <div className="container mt-5 text-center">
      <h2 style={{ color: '#226393', fontSize: '2.8rem' }}>Now, learn about them from our database!</h2>
      <p style={{ marginTop: '2rem', fontSize: '1.14rem', marginBottom: '0' }}>
        All the companies are available on our database categorized based on the products or services they offer,
        the location they are based in,
      </p>
      <p style={{ fontSize: '1.14rem' }}>investors, industry partners and more.</p>
      <div style={rectangleStyle}>
        <img src={dc} alt="dc" style={{height:'100%',width:'100%',objectFit:'contain'}}/>
      </div>
    </div>
  );
};

export default HomePageThree;