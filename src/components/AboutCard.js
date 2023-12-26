import React from "react";
import Card from "react-bootstrap/Card";
import { CiPaperplane } from "react-icons/ci";


function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi , I am <span className="purple">Chattarin Sayumporn </span>
            from <span className="purple"> Bangkok, Thailand.</span>
            <br />
            I am currently studying at Rangsit University.
            <br />
            I am studying in the College of Engineering, majoring in Computer Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <CiPaperplane /> Watching ANY tv series,movies that I find interesting
            </li>
            <li className="about-activity">
              <CiPaperplane /> Listen to a podcast
            </li>
            <li className="about-activity">
              <CiPaperplane /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Self love is the best love."{" "}
          </p>
          <footer className="blockquote-footer">Chattarin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;