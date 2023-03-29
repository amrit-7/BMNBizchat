import React from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  FormLabel,
  Row,
} from "react-bootstrap";
import AdduserModal from "../../components/modal/modal";
import { ButtonTypes } from "../../Utils/buttonTypes";
import { useContext } from "react";
import { ModalContext } from "../../context/modal.context";
import "./alluser.scss";
import { UserTable } from "../../components/userTable/userTable";
const AllUsers = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const handleShow = () => setIsOpen(true);

  return (
    <Container className="mt-2">
      <Row>
        <Col>
          <Row>
            <Col sm={6} md={8}>
              <h4>
                <i className="fa-solid fa-users-between-lines"></i> All Users
              </h4>
            </Col>
            <Col sm={6} md={4}>
              <Button variant="outline-primary">Configue Sediments</Button>
              <Button variant="primary" onClick={handleShow} className="ms-3">
                <i className="fa-solid fa-users"></i> Add Contacts
              </Button>
            </Col>
          </Row>
        </Col>
        <Row className="mt-3">
          <Col sm={12} md={6}>
            <Form.Control placeholder="Search users by name or phone number"></Form.Control>
          </Col>
        </Row>
      </Row>
      <Row className="mt-4">
        <Col className="col-12"></Col>
        {ButtonTypes.map((buttonType) => {
          const { title, id } = buttonType;
          return (
            <Col className="mt-2" key={id}>
              <Button className="buttonGroup" variant="outline-primary  ">
                {title}
              </Button>
            </Col>
          );
        })}
      </Row>
      <Row className="mt-5">
        <Col>
          <input
            className="mt-2 form-check-input"
            id="check"
            type="checkbox"
            value=""
          />
          <FormLabel className="ms-2 form-check-label" for="check">
            Total Users: 10
          </FormLabel>
          <Button className="ms-3" variant="outline-dark">
            <i className="fa-solid fa-bullhorn"></i> Send Notification
          </Button>
          <Button className="ms-2" variant="outline-dark">
            <i className="fa-solid fa-tag"></i> Add Tags
          </Button>
          <Button className="ms-2" variant="outline-dark">
            <i className="fa-solid fa-file-export fa-rotate-270"></i> Export
            Data
          </Button>
          <Button className="ms-2" variant="outline-danger">
            <i className="fa-solid fa-trash"></i> Delete Users
          </Button>
          <DropdownButton
            className="drop"
            variant="outline-dark"
            id="dropdown"
            title={<i className="fa-solid fa-table-columns"></i>}
          >
            <Dropdown.Item href="#">Users</Dropdown.Item>
            <Dropdown.Item href="#">User action</Dropdown.Item>
            <Dropdown.Item href="#">Users new</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row>
        <UserTable />
      </Row>
      {isOpen && <AdduserModal />}
    </Container>
  );
};

export default AllUsers;
