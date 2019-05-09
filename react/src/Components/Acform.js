import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




function Acform() {
  return (
    <div className="App">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 acform">
            <Form>
              <Form.Row>
                <Form.Group controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

              </Form.Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acform;