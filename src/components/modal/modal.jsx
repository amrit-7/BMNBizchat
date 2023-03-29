import React, { useState } from "react";
import { Button, Col, Form, FormLabel, Modal, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Phoneinput from "../../components/phoneinput/phoneInput";
import { useContext } from "react";
import { ModalContext } from "../../context/modal.context";
const AdduserModal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const handleClose = () => setIsOpen(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(false);
    console.log("working");
  };
  return (
    <Modal
      show={isOpen}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Users </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Check
            inline
            label="One by One"
            name="group1"
            type="radio"
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Via Bulk Upload"
            name="group1"
            type="radio"
            id={`inline-radio-2`}
          />
          <Row className="mt-2">
            <Col>
              <FormLabel> Customer 1</FormLabel>
            </Col>
            <Row>
              <Col className="col-6">
                <Form.Control
                  type="text"
                  placeholder="First Name"
                ></Form.Control>
              </Col>
              <Col className="col-6">
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                ></Form.Control>
              </Col>
              <Col className="col-6 mt-2">
                <Form.Control
                  type="email"
                  placeholder="Email ID"
                ></Form.Control>
              </Col>
              <Col className="col-6 mt-2">
                <Phoneinput />
              </Col>
            </Row>
          </Row>
          <Form.Check className="ms-1 mt-2" inline label="WhatsApp Opted in" />
          <Row className="mt-3">
            <Col>
              <Link className="link" to="">
                More ways to add Customers↗
              </Link>
            </Col>
            <Col>
              <Button className="add" type="submit" variant="primary">
                Add Customer
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AdduserModal;
