import React from "react";
import '../App.css';
import { Button, Form, Row, Col } from "react-bootstrap";

function Register() {
    return (
        <div className="RegisterForm">

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

                <Form.Group className="mb-3" controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridConfirmPass">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/*
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
    </Row>*/}
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>

    )
}

export default Register;