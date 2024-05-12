import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function Tour(props) {
  return (
    <Row className="g-3 justify-content-center align-items-center">
      <Col style={{ margin: "20px" }}>
        <Link
          style={{ fontSize: "25px", color: "white", textDecoration: "none" }}
          to={`/city/${props.id}`}
        >
          <Card
            style={{ width: "500px", backgroundColor: "grey" }}
            key={props.id}
          >
            <Card.Img
              variant="top"
              src={props.city_image}
              style={{ height: "250px", width: "450px", margin: "20px" }}
            />
            <Card.Body>
              <center>
                <Card.Title style={{ color: "#FFFFFF", fontSize: "30px" }}>
                  {" "}
                  {props.city_name}{" "}
                </Card.Title>
              </center>
              <Card.Text></Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Col>
    </Row>
  );
}

export default Tour;
