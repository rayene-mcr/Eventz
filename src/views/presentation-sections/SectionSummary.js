import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function SectionSummary() {
  return (
    <>
      <div className="section section-dark section-summary">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-layout-11" />
                </div>
                <div className="description">
                  <h4 className="info-title">Rich list of exciting events</h4>
                  <p>
                    You'll find various events that you can participate in with a single button click
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tile-56" />
                </div>
                <div className="description">
                  <h4 className="info-title">Add your personal event</h4>
                  <p>
                    You have the possibility to add an event which will be sent to your google calendar and even add your friends to it
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-paper" />
                </div>
                <div className="description">
                  <h4 className="info-title">Suggest</h4>
                  <p>
                    You can give ideas of some creative events and share it with the whole commmunity
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSummary;
