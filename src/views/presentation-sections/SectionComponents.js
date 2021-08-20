import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={
                  require("assets/img/presentation-page/laptop-basic.png")
                    .default
                }
              />
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/presentation-page/table.jpg").default}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={
                  require("assets/img/presentation-page/share-btn.png").default
                }
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={
                  require("assets/img/presentation-page/coloured-card-with-btn.png")
                    .default
                }
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={
                  require("assets/img/presentation-page/coloured-card.png")
                    .default
                }
              />
              <img
                alt="..."
                className="social-img"
                src={
                  require("assets/img/presentation-page/social-row.png").default
                }
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={
                  require("assets/img/presentation-page/pin-btn.png").default
                }
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">FRIENDLY USER INTERFACE</h3>
              <h6 className="category">The core elements of your website</h6>
              <h5 className="description">
                This website is composed from different friendly User 
                Interfaces where you can Add an event by filling
                all the required fields of a form, See and update
                events that you have added or see all events proposed
                from the whole community.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
