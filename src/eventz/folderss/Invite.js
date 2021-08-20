import FooterBlack from "components/Footers/FooterBlack";
import WhiteNavbar from "components/Navbars/DangerNavbar";
import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  UncontrolledCollapse,
  FormGroup,
  Form,
  Input,
  NavbarBrand,
  Navbar,
  Nav,
  Container,
  Row,
  Col
} from "reactstrap";
import styled from "styled-components";

// core components
const items = [
  {
    src:
      "url(" +
      require("assets/img/sections/section-header-1.jpg").default +
      ")",
    content: (
      <Container>
        <Row>
          <Col className="text-left" md="6">
            <h1 className="title">Eventz</h1>
            <h5>
              Now you have no excuses, it's time to surprise your clients, your
              competitors, and why not, the world. You probably won't have a
              better chance to show off all your potential if it's not by
              designing a website for your own agency or web studio.
            </h5>
            <br />
            <div className="buttons">
              <Button
                className="btn-round"
                color="danger"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                Read More
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-get-pocket" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src:
      "url(" +
      require("assets/img/sections/section-header-2.jpg").default +
      ")",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
            <h1 className="title">Awesome Experiences</h1>
            <h5>
              Now you have no excuses, it's time to surprise your clients, your
              competitors, and why not, the world. You probably won't have a
              better chance to show off all your potential if it's not by
              designing a website for your own agency or web studio.
            </h5>
            <br />
            <h6>Connect with us:</h6>
            <div className="buttons">
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-twitter" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-facebook-square" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-instagram" />
              </Button>
              <Button
                className="btn-neutral btn-just-icon"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-google-plus" />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
  {
    src:
      "url(" +
      require("assets/img/sections/section-header-3.jpg").default +
      ")",
    content: (
      <Container>
        <Row>
          <Col className="ml-auto text-right" md="7">
            <h2 className="title">Premium Offers for Venice</h2>
            <h5>
              Now you have no excuses, it's time to surprise your clients, your
              competitors, and why not, the world. You probably won't have a
              better chance to show off all your potential if it's not by
              designing a website for your own agency or web studio.
            </h5>
            <br />
            <div className="buttons">
              <Button
                className="btn-neutral"
                color="link"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fa fa-share-alt" />
                Share Offer
              </Button>
              <Button
                className="btn-round"
                color="success"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                size="lg"
              >
                <i className="fa fa-shopping-cart" />
                Shop Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
  },
];

function Invite() {
    const [events, setEvents] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const showFormm = () => {
        setShowForm(!showForm);
      }
      const notshowFormm = () => {
        setShowForm(showForm);
      }
    
    const { id } = useParams();
    var gapi = window.gapi
  var Client_ID = "720449294882-k03u773ucgfcl7hcrn1nd78g5ut67ii7.apps.googleusercontent.com"
  var API_KEY = "AIzaSyDvIGZPlt8bAq2g-Ziq326z8k32kx0dWBI"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  const formik = useFormik({
    initialValues: {
      attendees: '',
    }
  });
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
    const attendeess = (idd,attendees) => {
        idd = id;
    var event = gapi.client.calendar.events.get({"calendarId": 'primary', "eventId": id});
    
// Example showing a change in the location
//attendees.push({'email': "rrr@gmail.com"});
var request = gapi.client.calendar.events.get({
    'calendarId': 'primary',
    'eventId': id,
    'resource': event
});
request.execute(function (eventz) {
    console.log(eventz);
    eventz.attendees.push({'email': formik.values.attendees});
    var req = gapi.client.calendar.events.patch({
        'calendarId': 'primary',
        'eventId': id,
        'resource':eventz
    })
    req.execute(function (evn){
        console.log("Patched",evn);
    })

});

showFormm();

  }
      
  return (
    <>
    <WhiteNavbar />

      <div className="section section-header cd-section" id="headers">

        {/* ********* HEADER 2 ********* */}
        <div className="header-2">
          <Navbar className="navbar-transparent navbar-absolute" expand="lg">
            <Container>
              <NavbarBrand className="mb-0" href="www.creative-tim.com">
                Add Attendees
              </NavbarBrand>
              <button
                className="navbar-toggler"
                id="navbarSupportedContent2"
                type="button"
              >
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
                <span className="navbar-toggler-bar" />
              </button>
              <UncontrolledCollapse navbar toggler="#navbarSupportedContent2">
                <Nav className="ml-auto" navbar>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Components
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Tutorial
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                  <Button
                    className="btn-neutral"
                    color="link"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    target="_blank"
                  >
                    <i className="fa fa-facebook" />
                  </Button>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" +
                require("assets/img/sections/header-2.jpg").default +
                ")",
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <Row>
                  <Col className="ml-auto mr-auto text-center" md="8">
                    <h1 className="title">Invite Someone to your event</h1>
                    <h5 className="description">
                      Now you have no excuses, it's time to surprise your
                      clients, your competitors, and why not, the world. You
                      probably won't have a better chance to show off all your
                      potential.
                    </h5>
                    <br />
                  </Col>
                  <Col className="ml-auto mr-auto" md="10">
                    <Card className="card-raised card-form-horizontal no-transition">
                      <CardBody>
                      <form onSubmit={formik.handleSubmit}>
                        <Form action="" method="">
                          <Row>
                            <Col >
                              <FormGroup>
                                <Input
                                   id="attendees"
                                   name="attendees"
                                   type="text"
                                   {...formik.getFieldProps('attendees')}
                                />
                              </FormGroup>
                            </Col>
                            <Col md="3">
                              <Button block color="danger" type="button" onClick={attendeess}>
                              <i className="fa fa-user-plus"></i> Invite
                              </Button>
                              <Another>
                              {showForm && (
       
          <Button block color="danger" type="reset" onClick={ e => formik.resetForm()}>
                              <i className="fa fa-user-plus"></i> Another ? 
                              </Button>
       
      )}
      </Another>
                            </Col>
                          </Row>
                        </Form>
                        </form>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
        {/* ********* END HEADER 2 ********* */}
      </div>
      <FooterBlack />
    </>
  );
}
const Another = styled.div`
margin-top:3px;
`

export default Invite;
