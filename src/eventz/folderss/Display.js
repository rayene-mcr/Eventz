import React, { useState, useEffect } from "react";
import DangerNavbar from "components/Navbars/DangerNavbar";
import axios from "axios";



// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";
import FooterBlack from "components/Footers/FooterBlack";

// core components

function Display() {
    let [events, setEvents] = useState([]);
    //eslint-disable-next-line
  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  //eslint-disable-next-line
  const [pillActive, setPillActive] = React.useState("personal");
  useEffect(() => {
    axios
      .get("http://localhost:3001/event/allevents")
      .then(response => setEvents(response.data));
  }, []);
  
  const list = (eventId) => {
    if (events.length > 0) {
     
        console.log(eventId);
      
    }
  }
  return (
    <>
    <DangerNavbar />
      <div className="section section-pricing cd-section" id="pricing">
        {/* ********* PRICING 1 ********* */}
        {/* ********* END PRICING 1 ********* */}
        {/* ********* PRICING 2 ********* */}
        <div className="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Pick the best plan for you</h2>
                <h5 className="description">
                You have Unlimited list of events that you can participate in.
                </h5>
                <br />
            
                {/* Pill panes */}
                <TabContent activeTab={"pill-" + activePill}>
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                </TabContent>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              {events.map((event)=>(
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage: `url(${event.imgUrl})`
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">{event.summary}</h6>
                    <CardTitle tag="h1">
                      <small><i className="fa fa-map-marker mr-4"></i></small>
                      {event.location} <small></small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>Description</b> {event.description}
                      </li>
                      <li>
                        <b>From</b> {(new Date(event.dateTime).toDateString())} {(new Date(event.dateTime).getUTCHours()+1)}:{(new Date(event.dateTime).getMinutes())}:{(new Date(event.dateTime).getSeconds())}
                      </li>
                      <li>
                        <b>To</b> {(new Date(event.enddateTime).toDateString())} {(new Date(event.enddateTime).getUTCHours()+1)}:{(new Date(event.enddateTime).getMinutes())}:{(new Date(event.enddateTime).getSeconds())}
                      </li>
                     
                      <li> 
                      
                        <b>Organizer</b> {event.organizer?.email}
                    
                      </li>
                       
                    </ul>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                      onClick={()=>{list(event.eventId)}}
                    >
                      Participate
                    </Button>
                  </CardBody>
                </Card>
              </Col>
               ))}
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 2 ********* */}
        {/* ********* PRICING 3 ********* */}
        {/* ********* END PRICING 3 ********* */}
        {/* ********* PRICING 4 ********* */}
        {/* ********* END PRICING 5 ********* */}
      </div>
      <FooterBlack />
    </>
  );
}

export default Display;