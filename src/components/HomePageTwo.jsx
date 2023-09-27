import React from 'react';
import mobileye from '../images/mobileye.jpg';
import moovit from '../images/moovit.jpg';
import zoox from '../images/zoox.jpg';

const HomePageTwo = () => {
  return (
    <div className="container mt-5 text-center">
      <h2 style={{ color: '#226393', fontSize: '3rem' }}>Picks of the Week</h2>
      <div className="d-flex justify-content-center fs-4" style={{ margin: '0.5rem 0' }}>
        <p className="text-wrap" style={{ margin: '0', maxWidth: '30rem' }}>Players working on multiple facets of Autonomous Driving.</p>
      </div>
      <div className="d-flex justify-content-center fs-4" style={{ margin: '0.5rem 0' }}>
        <span className="text-wrap" style={{ maxWidth: '30rem' }}>From Vehicle manufacturing to Developer tools like APIs.</span>
      </div>

      <div className="row mt-4">
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="text-white" style={{ height: '18.75rem', maxWidth: 'auto', borderStyle: 'solid', borderColor: 'gray', borderWidth: '0.03rem', backgroundColor: '#fff' }}>
            <img src={mobileye} alt="Mobileye" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <p style={{ fontSize: '1.6rem', color: '#1b4586', fontWeight: 'bold' }}>Mobileye</p>
            <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', marginBottom: '0' }}> Mobileye works on autonomous- </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>driving and driver-assist technologies,  </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}> harnessing expertisein computer vision,</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>machine learning, mapping, and data analysis. </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <div className="text-white" style={{ height: '18.75rem', maxWidth: 'auto', borderStyle: 'solid', borderColor: 'gray', borderWidth: '0.03rem', backgroundColor: '#ebebeb' }}>
            <img src={moovit} alt="Moovit" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
          </div>
          <div>
            <p style={{ fontSize: '1.6rem', color: '#1b4586', fontWeight: 'bold' }}>Moovit</p>
            <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', marginBottom: '0' }}> Mobility as a service company engaged</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>primarily in shared mobility services such</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>as public transit (Buses) and autonomous</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>vehicles. </p>
          </div>
        </div>
        <div className="col-lg-4 col-md- mb-4">
          <div className="text-white" style={{ height: '18.75rem', maxWidth: 'auto', borderStyle: 'solid', borderColor: 'gray', borderWidth: '0.03rem', backgroundColor: 'black' }}>
            <img src={zoox} alt="Zoox" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
          <div>
            <p style={{ fontSize: '1.6rem', color: '#1b4586', fontWeight: 'bold' }} >Zoox</p>
            <p style={{ marginTop: '1.5rem', fontSize: '1.2rem', marginBottom: '0' }}> Zoox will provide mobility-as-a- service</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}> in dense urban environments handling  </p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}> driving,charging, maintenance, and</p>
            <p style={{ fontSize: '1.2rem', marginBottom: '0' }}>upgrades for a fleet of vehicles. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageTwo;
