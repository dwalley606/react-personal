import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
        <footer>
        <Container className="bg-body-tertiary">
          <Row>
            <Col xs={12} md={6}>
              <h5>Contact Me</h5>
              <ul>
                <li>Email: your-email@example.com</li>
                <li>Phone: (123) 456-7890</li>
                <li>Fax: (123) 456-7890</li>
                <li>Address: 123 Main St, City, State</li>
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <h5>Social Media</h5>
              <ul className="list-inline">
                <li className="list-inline-item"><a href="#">Facebook</a></li>
                <li className="list-inline-item"><a href="#">Twitter</a></li>
                <li className="list-inline-item"><a href="#">Instagram</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}