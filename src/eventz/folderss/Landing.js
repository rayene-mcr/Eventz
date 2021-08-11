import DangerNavbar from "components/Navbars/DangerNavbar";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import {  useHistory } from "react-router-dom";



// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import FooterBlack from "components/Footers/FooterBlack";

// core components

function Landing() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    handleList();
}, []);
  var gapi = window.gapi
  var Client_ID = "720449294882-k03u773ucgfcl7hcrn1nd78g5ut67ii7.apps.googleusercontent.com"
  var API_KEY = "AIzaSyDvIGZPlt8bAq2g-Ziq326z8k32kx0dWBI"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  const history = useHistory();
  const updt = (id) => {
    history.push('/update/'+ id);
  }
  const handleList = () => {
    gapi.load('client:auth2', () => {
      console.log('loaded client')  
      
      gapi.client.init({
        apiKey : API_KEY,
        clientId : Client_ID,
        discoveryDocs : DISCOVERY_DOCS,
        scope : SCOPES,
      })
      gapi.client.load('calendar','v3', ()=> console.log('c est bon'))
      gapi.auth2.getAuthInstance().signIn()
      .then(()=>{
       console.log("Initialisée")
       gapi.client.calendar.events.list({
        calendarId: 'primary',
    timeMin: (new Date()).toISOString(),
    maxResults: 50,
    singleEvents: true,
        orderBy: 'startTime'
        
        
      }).then(response =>{
        const events = response.result.items
        console.log('EVENTS', events)
        if (events.length > 0) {
          setEvents(events);
        }
      })
        
      })
      }) 

    } 
   
   

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
            {events?.map((event)=>(
              <Col md="3">
               
                <Card className="card-pricing">
                  <CardBody>
                    <h6 className="card-category text-success">
                      {event.summary}
                    </h6>
                    <CardTitle tag="h1"><i className="fa fa-map-marker mr-4"></i>{event.location}</CardTitle>
                    <ul>
                    <li>
                    <i className="fa fa-clipboard mr-1"></i>
                        {event.description}
                      </li>
                      <li>
                        <i className="fa fa-calendar mr-1" />
                        From : {(new Date(event.start.dateTime).toDateString())} {(new Date(event.start.dateTime).getUTCHours()+1)}:{(new Date(event.start.dateTime).getMinutes())}:{(new Date(event.start.dateTime).getSeconds())}
                        
                        
                      </li>
                      <li>
                        <i className="fa fa-calendar mr-1" />
                        To : {(new Date(event.end.dateTime).toDateString())} {(new Date(event.end.dateTime).getUTCHours()+1)}:{(new Date(event.end.dateTime).getMinutes())}:{(new Date(event.end.dateTime).getSeconds())}
                      </li>
                    </ul>
                    <Button
                      className="btn-round"
                      color="success"
                      href="#pablo"
                      outline
                    >
                      Participate
                    </Button>
                    <Button
                      className="btn-round ml-1"
                      color="success"
                      outline
                      onClick={()=>{updt(event.id)}}
                    >
                      Edit
                    </Button>
                  </CardBody>
                </Card>
            
              </Col>
              
              ))}
             
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 4 ********* */}
      </div>
    </>
  );
}

export default Landing;
