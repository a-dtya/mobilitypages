import React from 'react';
import carr from '../images/carr.jpg';
import job from '../images/job.jpg';
import analysis from '../images/analysis.jpg';
import AboutOne from './AboutOne';
import Footer from './Footer';
import "./About.css"
const About = () => {
  const handleUser = () => {
    window.open('https://www.linkedin.com/in/iamjoelj/', '_blank');
  };

  return (
    <>
      <div className="container mt-5 text-center">
        <h2 style={{ color: '#226e93', fontSize: '4rem', marginTop: '7rem', fontWeight: 'lighter' }}>About</h2>
        <div className="mx-0 p-0">
          <div className='custom-styles'>
          <p className='fs-4 paragraph' style={{ marginTop: '2rem', fontSize: '1.2rem', justifyContent: 'center', marginBottom: '0', wordSpacing: '-0.15rem', textAlign: 'justify' }}>
            Mobility Pages is a directory of startups, companies, and organizations contributing to innovation in the mobility and transportation space.
            The page is managed by <span onClick={handleUser} style={{ textDecoration: 'underline', cursor: 'pointer' }}>Joel Johnson</span>, an automotive engineer and mobility enthusiast.
            Feel free to reach out if you have any specific insights that you'd like to see from Mobility Pages!
          </p>
          </div>
        </div>
       
        
        <h3 style={{ color: '#226e93', fontSize: '1.5rem', marginTop: '5rem', fontWeight: '400', marginBottom: '3rem' }}>Here are some useful ways you could use Mobility Pages.</h3>
        <div className="row mt-4">
          <div className="col-lg-4">
            <div className="text-white" style={{ height: '18.75rem', maxWidth: 'auto', borderStyle: 'solid', borderColor: 'gray', borderWidth: '0.03rem', backgroundColor: '#fff' }}>
              <img src={job} alt="Mobileye" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <div>
                <p style={{ fontSize: '1.3rem', color: '#1b4586', fontWeight: 'bold' }}>Job Search</p>
                <p className='paragraph' style={{ marginTop: '1rem', fontSize: '1.2rem', marginBottom: '0', textAlign: 'justify', wordSpacing: '-0.1rem' }}>
                  Use our database to take you directly to company websites, and discover careers.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-white" style={{ height: '18.75rem', maxWidth: 'auto', borderStyle: 'solid', borderColor: 'gray', borderWidth: '0.03rem', backgroundColor: '#ebebeb' }}>
              <img src={analysis} alt="Moovit" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <div>
                <p style={{ fontSize: '1.3rem', color: '#1b4586', fontWeight: 'bold' }}>Competitive Analysis</p>
                <p className='paragraph' style={{ marginTop: '1rem', fontSize: '1.2rem', marginBottom: '0', textAlign: 'justify', wordSpacing: '-0.1rem' }}>
                  Use the filters and location labels to find direct or indirect competitors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="text-white" style={{ height: '18.75rem', maxWidth: 'auto', borderStyle: 'solid', borderColor: 'gray', borderWidth: '0.03rem', backgroundColor: 'black' }}>
              <img src={carr} alt="Zoox" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
            </div>
            <div className='d-flex flex-column align-items-center justify-content-center'>
              <div>
                <p style={{ fontSize: '1.3rem', color: '#1b4586', fontWeight: 'bold' }}>Enthusiast Hub</p>
                <p className='paragraph' style={{ marginTop: '1rem', fontSize: '1.2rem', marginBottom: '0', textAlign: 'justify', wordSpacing: '-0.1rem' }}>
                  Discover innovation and find new companies you didn’t know about working in the space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutOne />
      <hr className='text-secondary'></hr>
      <Footer />
      
    </>
  );
};

export default About;
