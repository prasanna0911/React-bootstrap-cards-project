
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import image1 from "../images/opprmheimer.jpg";
import image2 from "../images/avengers.jpg";
import image3 from "../images/interstellar.jpg";
import image4 from "../images/batman.jpg";
import "../index.css";

function CardBody() {
  return (
    <Row className="g-4">
      <Col xl={3} lg={3} md={6} xs={12}>
        <Card className="h-100">
          <Card.Img variant="top" src={image1} className="card-img-top" />
          <Card.Body>
            <Card.Title>Oppenheimer(2023)</Card.Title>
            <Card.Text>
              Oppenheimer is a 2023 epic biographical thriller film written,
              directed, and produced by Christopher Nolan. It follows the life
              of J. Robert Oppenheimer, the American theoretical physicist who
              helped develop the first nuclear weapons during World War II.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={3} md={6} xs={12}>
        <Card className="h-100">
          <Card.Img variant="top" src={image2} className="card-img-top" />
          <Card.Body>
            <Card.Title>Avengers Infinity War(2018)</Card.Title>
            <Card.Text>
              In the film, the Avengers and the Guardians of the Galaxy attempt
              to stop Thanos from collecting the six powerful Infinity Stones as
              part of his quest to kill half of all life in the universe.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={3} md={6} xs={12}>
        <Card className="h-100">
          <Card.Img variant="top" src={image3} className="card-img-top" />
          <Card.Body>
            <Card.Title>Intersteller(2014)</Card.Title>
            <Card.Text>
              Interstellar is about Earth's last chance to find a habitable
              planet before a lack of resources causes the human race to go
              extinct.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col xl={3} lg={3} md={6} xs={12}>
        <Card className="h-100">
          <Card.Img variant="top" src={image4} className="card-img-top" />
          <Card.Body>
            <Card.Title>Batman(2022)</Card.Title>
            <Card.Text>
              On Halloween, Gotham City mayor Don Mitchell Jr. is murdered by a
              serial killer calling himself the Riddler. Billionaire Bruce
              Wayne, who has operated for two years as the vigilante Batman,
              investigates alongside the Gotham City Police Department (GCPD).
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default CardBody;
