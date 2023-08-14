import React, {Component} from 'react'
import moonlight from "../assets/moonlight.jpg";
import selfie from "../assets/selfie.jpg";
import { Col, Container, Image, Row } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div style={{ 
          position: "relative",
          width: "100%", 
          height: "100vh", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center" 
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
        <Container>
          <Row classname='fluid-md bg-dark text-white' style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'relative'}}>
            <Col>
              <Image src={selfie} fluid roundedCircle className="float-left w-75" style={{padding: '2rem'}} alt='Selfie' />
            </Col>
            <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <p style={{fontSize: '1.5rem', zIndex: 1, textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>Daniel Walley is a musician, web developer, and communications specialist living and working in the Washington D.C. area. A ten year veteran of the US Air Force Band, Daniel has performed thousands of concerts at venues such as Arlington National Cemetery, The Kennedy Center for the Performing Arts, Consitution Hall and many more. Transitioning to civilian life, Daniel has found his calling as a front end developer and , using the latest methods to improve website functionality and presentation.  </p>
            </Col>
          </Row>
        </Container>
      
      </div>
    )
  }
}
