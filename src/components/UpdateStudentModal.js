import React,{Component} from 'react';
import {Modal, Col, Row, Form, Button} from 'react-bootstrap';
import {FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import { updateStudent } from '../services/StudentService';



const UpdateStudentModal = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        updateStudent(props.student.studentId, e.target)
        .then((result)=>{
            alert(result);
            props.setUpdated(true);
        },
        (error)=>{
            alert("Failed to Update Skill");
        })
    };

    return(
        <div className="container">

            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Skills Information
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="SkillName">
                                    <Form.Label>Skill Name</Form.Label>
                                    <Form.Control type="text" name="SkillName" required defaultValue={props.student.SkillName} placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="StreamName">
                                    <Form.Label>Stream Name</Form.Label>
                                    <Form.Control type="text" name="StreamName" required defaultValue={props.student.StreamName} placeholder="" />
                            </Form.Group>
                            {/* <Form.Group controlId="RegistrationNo">
                                    <Form.Label>Registration No.</Form.Label>
                                    <Form.Control type="text" name="RegistrationNo" required defaultValue={props.student.RegistrationNo} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" name="Email" required defaultValue={props.student.Email} placeholder="" />
                            </Form.Group>
                            <Form.Group controlId="Course">
                                    <Form.Label>Course</Form.Label>
                                    <Form.Control type="text" name="Course" required defaultValue={props.student.Course} placeholder="" />
                            </Form.Group> */}
                            <Form.Group>
                                <p></p>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="danger" type="submit" onClick={props.onHide}>
                        Close
                </Button>

                </Modal.Footer>
            </Modal>
        </div>
    );
};


export default UpdateStudentModal;

