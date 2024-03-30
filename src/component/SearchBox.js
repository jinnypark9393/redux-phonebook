import React, { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const searchByName = (event) => {
    event.preventDefault();
    // keyword 상태값을 페이로드로 전달
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
    console.log("검색 키워드", keyword);
    console.log("onSubmit Event");
  };
  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row className="search-area">
        <div className="search-title">Search</div>
        <Col lg={10}>
          {/* setKeyword로 keyword 상태값 검색어로 변경 */}
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button className="search-button" type="submit">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
