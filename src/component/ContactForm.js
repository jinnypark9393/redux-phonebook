import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch()

  // Form의 값은 event를 통해 받을 수 있음
  // const getName = (event) => {
  //   // form에 입력되는 값
  //   // console.log(event.target.value)
  //   setName(event.target.value)
  // }

  const addContact = (event) => {
    event.preventDefault()
    dispatch({type: "ADD_CONTACT", payload: {name, phoneNumber}})
  }

  return (
    <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formContact">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter Phone Number"
          onChange={(event) => {
            setPhoneNumber(event.target.value);
          }}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default ContactForm;
