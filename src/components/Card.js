// import info_icon from "../images/info-icon.png";
// import exclusiveicon from "../images/holiday-icon.png";

// function Card(props) {
//   return (
//     <div className="card position-relative">
//       {props.isFirst && (
//         <img
//           src={exclusiveicon}
//           className="position-absolute"
//           style={{ top: "1em", right: "1em" }}
//           alt="exclusive package"
//         />
//       )}
//       <img src={props.src} className="card-img-top" alt={props.alt} />
//       <div className="card-body">
//         <h2 className="card-title text-uppercase text-success fs-4 fw-bolder">
//           {props.title}
//         </h2>
//         <h3 className="card-text fs-5 fw-bold">{props.desc}</h3>
//         <div className="mt-4">
//           <a href="#" className="text-decoration-none text-black">
//             Info{" "}
//             <span>
//               <img src={info_icon} alt="info" />
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import tokyo from "../images/tokyo.jpg";
import london from "../images/london.jpg";
import paris from "../images/paris.jpg";
import newyork from "../images/newyork.jpg";
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
