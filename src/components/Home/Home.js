import React, {Component} from 'react'
import moonlight from "./moonlight.jpg";
import selfie from "./selfie.jpg";
import { Col, Container, Image, Row } from 'react-bootstrap';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div style={{ 
          position: "relative",
          width: "100%", 
          minHeight: "100vh", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-start",
          
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundImage: `url(${moonlight})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          opacity: 0.7,
          zIndex: -1
        }} />
        <Container className='mt-3'>
          <Row classname='fluid-md bg-dark text-white' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'relative', borderRadius: '15px', padding: '2rem', alignItems: 'center'}}>
            <Col>
              <Image src={selfie} fluid className="w-80 selfie-image" alt='Selfie' />
            </Col>
            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{fontSize: '2.0vw', zIndex: 1, textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>Daniel Walley is a musician, web developer, and communications specialist living and working in the Washington D.C. area. A ten year veteran of the US Air Force Band, Daniel has performed thousands of concerts at venues such as Arlington National Cemetery, The Kennedy Center for the Performing Arts, Consitution Hall and many more. Transitioning to civilian life, Daniel has found his calling as a front end developer using the latest methods to improve website functionality and presentation.  </p>
            </Col>
          </Row>
        </Container>
      
      </div>
    
    )
  }
}
