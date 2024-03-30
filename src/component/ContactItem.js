import React from 'react'
import { Row, Col } from "react-bootstrap";

const ContactItem = ({item}) => {
  return (
    <Row>
        <Col lg={3}>
            <img width={100} alt='' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/925px-Unknown_person.jpg'></img>
        </Col>
        <Col lg={9}>
            <h4>{item.name}</h4>
            <div>{item.phoneNumber}</div>
        </Col>
    </Row>
  )
}

export default ContactItem