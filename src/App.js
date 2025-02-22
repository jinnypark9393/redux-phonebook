import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // 1. 왼쪽: 연락처 등록 폼 / 오른쪽: 연락처 리스트, search창
  // 2. 리스트에 유저 이름, 전화번호를 추가할 수 있다.
  // 3. 리스트에 아이템이 몇개 있는지 보여준다.
  // 4. 사용자가 유저를 이름 검색으로 찾을 수 있다.
  return (
    <div className="app">
      <h1 className="title">Phone book</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
