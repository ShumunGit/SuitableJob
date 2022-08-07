import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import '../App.css';

function Contact() {
    return (
        <div className="ContactForm">
            <Form>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridFname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First name" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="phone" placeholder="Enter Phone" />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridSubject">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter Subject" />

                        <Form.Group as={Col} controlId="formGridSubject">
                            <label for="validationTextarea"></label>
                            <textarea class="form-control" rows="7" placeholder="Write Text" required></textarea>
                        </Form.Group>
                    </Form.Group>
            
                </Row>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default Contact;