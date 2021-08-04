import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function SectionSections() {
  return (
    <>
      <div className="section section-sections section-gray">
        <Container>
          <Col className="ml-auto mr-auto" md="8">
            <div className="section-description text-center">
              <h2 className="title">Sections you will love</h2>
              <h5 className="description">
                Build pages in no time using pre-made sections! We have created
                multiple sections for you to put together and customise into
                pixel perfect example pages. From headers to footers, you will
                be able to choose the best combination for your project.
              </h5>
              <br />
              <Button
                className="btn-rose btn-round"
                color="default"
                href="sections.html"
                target="_blank"
              >
                View All Sections
              </Button>
            </div>
          </Col>
        </Container>
        <Container fluid>
          <div className="section-cols">
            <Container fluid>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-1.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-2.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-3.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/header-4.jpg")
                        .default
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/team-cards-social.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/bg-pricing-card.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/white-pricing-card.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/team-member-card.jpg")
                        .default
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/testimonials-1.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/blog-bg-cards.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/our-products.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/projects-cards.jpg")
                        .default
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/blogpost-cards.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/blogpost-2-cards.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/coloured-picind-card.jpg")
                        .default
                    }
                  />
                </Col>
                <Col md="3">
                  <img
                    alt="..."
                    src={
                      require("assets/img/presentation-page/screenshots/team-3.jpg")
                        .default
                    }
                  />
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </>
  );
}

export default SectionSections;
