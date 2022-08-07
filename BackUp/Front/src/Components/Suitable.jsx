import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import '../App.css';

function SuitableJob() {
    return (
        <div className="SuitableForm">

            <Form>

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

                    <Form.Group as={Col} controlId="formGridfield">
                        <Form.Label>field of work</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridProfession">
                        <Form.Label>jobtitle</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridAvailble">
                        <Form.Check type="checkbox" label="Availble" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridExprience">
                        <Form.Check type="checkbox" label="Exprience" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridSave">
                        <Form.Check type="checkbox" label="Save" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridbutton">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>

                </Row>


            </Form>
        </div>

    )
}

export default SuitableJob;