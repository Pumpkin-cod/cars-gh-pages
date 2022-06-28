import React from "react";
//import ReactDOM from "react-dom";
import ImageMerc from "../assets/ImageMerc.jpg";
import ImageRed from "../assets/ImageRed.jpg"
import ImageYellow from "../assets/ImageYellow.jpg"
import { Container, Row, Col, Card, Image, Button,} from "react-bootstrap";

export default function Car(){
    return(
        <div>
        <h1 className="text-center text-primary mt-5">THE CAR HUB</h1>
        <Container>
         <Row>
           <Col lg ="4">
            <Card style={{ width: '20rem' }} className="mb-3 mt-5">
            <Image style={{height: '240px'}} 
            src={ImageMerc} 
            className="card-img-top"
            alt="mercedes" 
            fluid />
            <Card.Body>
             <Card.Title>WANT TO BUY A NEW CAR?</Card.Title>
             <Card.Text>
                 Visit our website to view more beautiful cars we have install for you.
             </Card.Text>
            <Button variant="primary" size="lg" className="justify-content-center align-items-center">Lets Go</Button>
        </Card.Body>
     </Card>
           </Col>

           <Col lg="4">
            <Card style={{ width: '20rem' }} className="mb-3 mt-5">
            <Image  
            src={ImageRed} 
            className="card-img-top"
            alt="mercedes" 
            fluid />
            <Card.Body>
             <Card.Title>WANT TO BUY A NEW CAR?</Card.Title>
             <Card.Text>
                 Visit our website to view more beautiful cars we have install for you.
             </Card.Text>
            <Button variant="primary" size="lg" className="justify-content-center align-items-center">Lets Go</Button>
        </Card.Body>
     </Card>
           </Col>
           <Col lg="4">
            <Card style={{ width: '20rem' }} className="mb-3 mt-5">
            <Image  
            src={ImageYellow} 
            className="card-img-top"
            alt="mercedes" 
            fluid />
            <Card.Body>
             <Card.Title>WANT TO BUY A NEW CAR?</Card.Title>
             <Card.Text>
                 Visit our website to view more beautiful cars we have install for you.
             </Card.Text>
            <Button variant="primary" className="justify-content-center align-items-center" size="lg">Lets Go</Button>
        </Card.Body>
     </Card>
           </Col>


         </Row>
        </Container>
        </div>
    )

}