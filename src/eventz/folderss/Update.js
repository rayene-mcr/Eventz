import React , {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";

function Update() {
    const [events, setEvents] = useState(null);
    const { id } = useParams();
    const formik = useFormik({
        initialValues: {
          summary: '',
          location:'',
          enddate:'',
          endtime:'',
          description:'',
          date: ""
        }
        ,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    var gapi = window.gapi
    var Client_ID = "720449294882-k03u773ucgfcl7hcrn1nd78g5ut67ii7.apps.googleusercontent.com"
    var API_KEY = "AIzaSyDvIGZPlt8bAq2g-Ziq326z8k32kx0dWBI"
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
    var SCOPES = "https://www.googleapis.com/auth/calendar.events"
    const update = (idd) => {
            idd = id;
        var event = gapi.client.calendar.events.get({"calendarId": 'primary', "eventId": idd});
        
    console.log(id);
    // Example showing a change in the location
    event.summary = formik.values.summary;
    event.location = formik.values.location;
    event.description = formik.values.description;
    
    var request = gapi.client.calendar.events.patch({
        'calendarId': 'primary',
        'eventId': id,
        'resource': event
    });
    
    request.execute(function (event) {
        console.log(event);
    });
      }
      const upda = (idd) => {
        idd = id;
    var event = gapi.client.calendar.events.get({"calendarId": 'primary', "eventId": idd });
console.log(id);
var request = gapi.client.calendar.events.get({
    'calendarId': 'primary',
    'eventId': id,
    'resource': event
});

request.execute(function (event) {
    console.log(event);
    formik.setValues({summary: event.summary, description: event.description,location: event.location, date: event.date});
});


  }
  useEffect(() => {
    upda();
 }, []);

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
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    document.body.classList.add("full-screen");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("register-page");
      document.body.classList.remove("full-screen");
    };
  });
  return (
    <>
      <ColorNavbar />
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/soroush-karimi.jpg").default +
              ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-umbrella" />
                  </div>
                  <div className="description">
                    <h3>We've got you covered</h3>
                    <p>
                      Larger, yet dramatically thinner. More powerful, but
                      remarkably power efficient. Everything you need in a
                      single case.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-map-signs" />
                  </div>
                  <div className="description">
                    <h3>Clear Directions</h3>
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon">
                    <i className="fa fa-user-secret" />
                  </div>
                  <div className="description">
                    <h3>We value your privacy</h3>
                    <p>
                      Completely secure application , your data is safe and no one can access it
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <Card className="card-register">
                  <CardTitle className="text-center" tag="h3">
                    Update {formik.values.summary}
                  </CardTitle>
                  <div className="social">
                    <Button className="btn-just-icon mr-1" color="facebook">
                      <i className="fa fa-facebook" />
                    </Button>
                    <Button className="btn-just-icon mr-1" color="google">
                      <i className="fa fa-google" />
                    </Button>
                    <Button className="btn-just-icon" color="twitter">
                      <i className="fa fa-twitter" />
                    </Button>
                  </div>
                  <div className="division">
                    <div className="line l" />
                    <span>or</span>
                    <div className="line r" />
                  </div>
                  <Form className="register-form">
                  <form onSubmit={formik.handleSubmit}>
                  <FormGroup>
                    <h6>
                      Name <span className="icon-danger">*</span>
                    </h6>
                 
                    <Input
                      id="summary"
                      name="summary"
                      type="text"
                      {...formik.getFieldProps('summary')}
                    />
                  </FormGroup>
                  <FormGroup>
                    <h6>
                      Location <span className="icon-danger">*</span>
                    </h6>
                    <Input
                      id="location"
                      name="location"
                      type="text"
                      {...formik.getFieldProps('location')}
                    />
                  </FormGroup>
                  <Row className="price-row">
                    <Col md="6">
                      <h6>
                        FROM <span className="icon-danger">*</span>
                      </h6>
                      <InputGroup className="border-input">
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          data-date-format="YYYY MM DD"
                          {...formik.getFieldProps('date')}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                      
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <h6>TIME</h6>
                      <InputGroup className="border-input">
                        <Input
                          id="starttime"
                          name="starttime"
                          type="time"
                          step="1"
                          {...formik.getFieldProps('starttime')}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText></InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                  <Row className="price-row">
                    <Col md="6">
                      <h6>
                        TO <span className="icon-danger">*</span>
                      </h6>
                      <InputGroup className="border-input">
                        <Input
                          id="enddate"
                          name="enddate"
                          type="date"
                          data-date-format="YYYY MM DD"
                          {...formik.getFieldProps('enddate')}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText>
                          </InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                    <Col md="6">
                      <h6>TIME</h6>
                      <InputGroup className="border-input">
                        <Input
                          id="endtime"
                          name="endtime"
                          type="time"
                          step="1"
                          {...formik.getFieldProps('endtime')}
                        />
                        <InputGroupAddon addonType="append">
                          <InputGroupText></InputGroupText>
                        </InputGroupAddon>
                      </InputGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <h6>Description</h6>
                    <Input
                      className="textarea-limited"
                      id="description"
                      name="description"
                      {...formik.getFieldProps('description')}
                      type="textarea"
                    />
                  </FormGroup>
                  </form>
                  <div class="text-center">
                    <button type="button" class="btn btn-secondary" onClick={update}>Update</button>
                    </div>
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="demo-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Rayen / Wael
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Update;
