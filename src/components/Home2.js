import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../Assets/avatar.svg";

function Home2() {
    return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> THIS WEBPAGE
              </h1>
              <p className="home-about-body">
              This webpage is the midterm project for the CPE499 course, "React Js."
                <br />
                <br />I created this webpage using
                <i>
                  <b className="purple"> React, HTML, Javascript and CSS. </b>
                </i>
                <br />
                <br />
                Finally, this webpage is &nbsp;
                <i>
                  <b className="purple"> just a part </b> of what I am developing for the{" "}
                  <b className="purple">
                  Final project.
                  </b>
                </i>
                
              </p>
            </Col>
            <Col md={4} className="myAvtar">
               <img src={myImg} className="img-fluid" alt="avatar" />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
  export default Home2;
