import DangerNavbar from "components/Navbars/DangerNavbar";
import React from "react";


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function Landing() {

  return (
    <>
    <DangerNavbar />
      <div className="section section-pricing cd-section" id="pricing">
        
        {/* ********* PRICING 4 ********* */}
        <div className="pricing-4 section section-dark">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                  You have Unlimited list of events that you can participate in.
                </h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">Startup</h6>
                    <CardTitle tag="h1">$0</CardTitle>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Downgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="card-category text-success">
                      Small company
                    </h6>
                    <CardTitle tag="h1">$89</CardTitle>
                    <ul>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      outline
                    >
                      Current plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">
                      Large Company
                    </h6>
                    <CardTitle tag="h1">$189</CardTitle>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Upgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3">
                <Card className="card-pricing card-plain">
                  <CardBody>
                    <h6 className="card-category text-success">Enterprise</h6>
                    <CardTitle tag="h1">$389</CardTitle>
                    <ul className="text-white">
                      <li>
                        <i className="fa fa-check mr-1" />
                        Sharing Tools
                      </li>
                      <li>
                        <i className="fa fa-check mr-1" />
                        Design Tools
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Private Messages
                      </li>
                      <li>
                        <i className="fa fa-times mr-1" />
                        Personal Brand
                      </li>
                    </ul>
                    <Button
                      className="btn-outline-neutral btn-round"
                      color="default"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Upgrade plan
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 4 ********* */}
      </div>
    </>
  );
}

export default Landing;
