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

var textArray = [
    "orange",
    "green",
    "blue"
];

var randomNumber 

var randow=textArray[randomNumber];
// core components

function ListProp() {
    let [prop, setProp] = useState([]);
    //eslint-disable-next-line
  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  //eslint-disable-next-line
  const [pillActive, setPillActive] = React.useState("personal");
  useEffect(() => {
    axios
      .get("http://localhost:3001/prop/")
      .then(response => setProp(response.data));
  }, []);
  
  const list = (eventId) => {
    if (prop.length > 0) {
     
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
                Here you can finds ideas and plans for your weekend 
                <div class="info info-horizontal"><div class="icon icon-warning"><i class="nc-icon nc-glasses-2"></i></div><div class="description"><h4 class="info-title">New Ideas</h4><p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p></div></div>
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
              {prop.map((event)=>(
              
                

                   
                  
              <Col md="4">

                <Card
             
                  className="card-pricing"
                  
                  style={{
                   backgroundColor: event.color
                   
                      
                   // backgroundImage: `url(${event.imgUrl})`
                  }}
                >
                  <CardBody>
                    <h6 className="card-category">{event.titre}</h6>
                    <CardTitle tag="h1">
                      <small><i class="nc-icon nc-sound-wave"></i></small>
                       {event.cates} <small></small>
                      <small><i class="nc-icon nc-sound-wave"></i></small>
                    </CardTitle>
                    <ul>
                      <li>
                        <b>Description</b> {event.description}
                      </li>
                      <li>
                        <b>From</b> {(new Date(event.from).toDateString())} 
                      </li>
                      <li>
                        <b>To</b> {(new Date(event.to).toDateString())} 
                      </li>
                     
                    
                       
                    </ul>
                    <Button
                      className="btn-round"
                      color="danger"
                      href="#pablo"
                     // onClick={()=>{list(event.eventId)}}
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

export default ListProp;