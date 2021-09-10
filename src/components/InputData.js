import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import './../App.css';
import axios from 'axios';

class Class extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault()
    const name = event.target[0].value
  }
  render() {
  return (
    <Container>
    <Form onSubmit={this.handleSubmit} className="py-3">
        <Row>
        <Col sm="auto">
        <Form.Control
          type="text"
          placeholder="Nama"
          className="bg-light p-2 border-0 my-1 formw"
          ref={node => (this.inputNode = node)}
        />
        </Col>
        <Col sm="auto">
        <Form.Control
          type="text"
          placeholder="No. Absen"
          className="bg-light p-2 border-0 my-1 formw"
          ref={node => (this.inputNode = node)}
        />
        </Col>
        </Row>
        <Button
          variant="primary"
          className="my-2 submit-btn"
          style={{width: "305px"}}
          type="submit"
        >
          Submit
        </Button>
        </Form>

        <center>
          <hr className="w-25"/>
        </center>
    </Container>
  );
  }
}


export default Class;
