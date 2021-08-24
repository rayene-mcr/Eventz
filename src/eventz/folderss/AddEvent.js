import React from "react";
// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterBlack from "components/Footers/FooterBlack.js";
import TagsInput from "components/TagsInput/TagsInput.js";
import ImageUpload from "components/CustomUpload/ImageUpload.js";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import { useState} from "react";
import axios from "axios";
import ReactMapGL, { Marker ,Popup} from 'react-map-gl';


function AddEvent() {
    var gapi = window.gapi
  var Client_ID = "720449294882-k03u773ucgfcl7hcrn1nd78g5ut67ii7.apps.googleusercontent.com"
  var API_KEY = "AIzaSyDvIGZPlt8bAq2g-Ziq326z8k32kx0dWBI"
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
  var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  const [tags, setTags] = React.useState([
    "Minimal",
    " Light",
    " New",
    " Friends",
  ]);
  
  const validate = values => {
    const errors = {};
    if (values.date < (new Date().toISOString())) {
      errors.date = 'You picked an old date';
    } 
    if (values.enddate < values.date) {
      errors.enddate = 'Please verify the date you picked'
    }
  
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      summary: '',
      location:'',
      enddate:'',
      endtime:'',
      description:'',
      date: "",
      lat: null,
      lng : null
    },
    validate,
    validationSchema: Yup.object({
      summary: Yup.string()
        .required('Required'),
      location: Yup.string()
        .required('Required'),
      attendee1: Yup.string().required('Required'),  
      description: Yup.string().required('Required')  
      
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  
  const [categories, setCategories] = React.useState(["Food", " Drink"]);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("add-product");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("add-product");
    };
  });

  const [newPlace, setNewPlace] = useState(null);

  const [viewport, setViewport] = useState({
    width: "20vw",
    height: "40vh",
    latitude: 37.7577,
    longitude: 37,
    zoom: 4
});

  const handleAddClick = (e) => {
    const [longitude, latitude] = e.lngLat;
    console.log(e.lngLat)
    setNewPlace({
      lat: latitude,
      lng: longitude,
    });
  };

   const handleClick = () => {
    gapi.load('client:auth2', () => {
    console.log('loaded client')  
    console.log('value is', formik.values.date);
    gapi.client.init({
      apiKey : API_KEY,
      clientId : Client_ID,
      discoveryDocs : DISCOVERY_DOCS,
      scope : SCOPES,
    })
    gapi.client.load('calendar','v3', ()=> console.log('c est bon'))
    gapi.auth2.getAuthInstance().signIn()
    .then(()=>{
     var event = {
       'summary': formik.values.summary,
       'location': formik.values.location,
       'description': formik.values.description,
       'start': {
         'dateTime': formik.values.date + 'T'+ formik.values.starttime +'+01:00',
         'timeZone': 'UTC'
       },
       'end': {
         'dateTime': formik.values.enddate + 'T'+ formik.values.endtime +'+01:00',
         'timeZone': 'UTC'
       },
       'recurrence': [
         'RRULE:FREQ=DAILY;COUNT=1'
       ],
       'attendees': [
        {'email': formik.values.attendee1},
      ],
       'reminders': {
         'useDefault': false,
         'overrides': [
           {'method': 'email', 'minutes': 10},
           {'method': 'popup', 'minutes': 20}
         ]
       }
     }
     var request = gapi.client.calendar.events.insert({
       calendarId:'primary',
       'resource': event,
       sendNotifications: true,
       sendUpdates:'all',
     })
     let image = ""
      if (formik.values.summary.includes("Footbal")){
        image = "https://d.newsweek.com/en/full/498206/cristiano-ronaldo.webp?w=737&f=54f990da8a1945b4db4b11b1b80864f6"
      } else if  (formik.values.summary.includes("Camping")){
       
            image = "https://ssl.gstatic.com/calendar/images/eventillustrations/v1/img_camping_1x.jpg"
        } else if (formik.values.summary.includes("Dinner")) {
           
            image = "https://ssl.gstatic.com/calendar/images/eventillustrations/v1/img_dinner_1x.jpg"
          
        }else if  (formik.values.summary.includes("Trip")) {
            image = "https://www.moncoyote.com/blog/wp-content/uploads/2018/05/road-trip-camping-car-compressor.jpg"
        } else if (formik.values.summary.includes("Handball")) {
          image = "https://www.leparisien.fr/resizer/k6UoPw6avwx2Mb9txsGq91hHtcI=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/TT4NCOQZP6RKPOOB4PSFIHQDG4.jpg"
        }
        else if (formik.values.summary.includes("Volleyball")) {
          image = "https://image.winudf.com/v2/image/Y29tLmZyZWVoZC52b2xsZXliYWxsd2FsbHBhcGVyc19zY3JlZW5fMl8xNTM2MDQ5NjIwXzAzNA/screen-2.jpg?fakeurl=1&type=.jpg"
        }
        else if (formik.values.summary.includes("Swimming")) {
          image = "https://v1.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-cf401e7/wp-content/uploads/2020/09/beach-photography-featured-1-2048x1363.jpg"
        }
        else if (formik.values.summary.includes("Beach")) {
          image = "https://v1.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/static/optimized/rev-cf401e7/wp-content/uploads/2020/09/beach-photography-featured-1-2048x1363.jpg"
        }
        else if (formik.values.summary.includes("Pool")) {
          image = "https://www.piscinelle.com/upload/piscine-rectangulaire-turbie-12-L.jpg"
        }
        else if (formik.values.summary.includes("Cinema")) {
          image = "https://media.lesechos.com/api/v1/images/view/5fec7da28fe56f03ef360ed9/1280x720-webp/061199132279-web-tete.webp"
        }
        else if (formik.values.summary.includes("Movie")) {
          image = "https://media.lesechos.com/api/v1/images/view/5fec7da28fe56f03ef360ed9/1280x720-webp/061199132279-web-tete.webp"
        }
      
       request.execute(event => {
         window.open(event.htmlLink) 
         const eventobject = {
          imgUrl : image,
          organizer: event.organizer,
          eventId: event.id, 
          summary: formik.values.summary,
          location: formik.values.location,
          description : formik.values.description,
          dateTime: formik.values.date + 'T'+ formik.values.starttime +'+01:00',
          enddateTime: formik.values.enddate + 'T'+ formik.values.endtime +'+01:00',
          attendees: [
           {email: formik.values.attendee1},
         ],
         lat: newPlace.lat,
         lng:newPlace.lng
        }
        axios.post("http://localhost:3001/event/addevent", eventobject)
        console.log(eventobject)
        
         })
    })
    }) 
    
   }
  


  
   
  return (
    <>
      <DangerNavbar />
      <div className="main">
        <div className="section">
          <Container>
            <h3>Add Product</h3>
            <div>
              <Row>
                <Col md="5" sm="5">
                  <h6>Product Image</h6>

                  <div>
                  <ReactMapGL
                      {...viewport}
                      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX}
                      onViewportChange={nextViewport => setViewport(nextViewport)}
                      mapStyle="mapbox://styles/waelbannani/cksq95crz10te18quix081ygw"
                      onDblClick={handleAddClick}
                  />
                  </div>
                  <ImageUpload />
                  <h6>Tags</h6>
                  <div id="tags">
                    <TagsInput
                      onlyUnique
                      onChange={(value) => setTags(value)}
                      tagProps={{
                        className: "react-tagsinput-tag badge-success",
                      }}
                      value={tags}
                    />
                  </div>
                  <h6>Categories</h6>
                  <div id="tags-2">
                    <TagsInput
                      onlyUnique
                      onChange={(value) => setCategories(value)}
                      tagProps={{
                        className: "react-tagsinput-tag badge-success",
                      }}
                      value={categories}
                    />
                  </div>
                  <h6>
                    Format <span className="icon-danger">*</span>
                  </h6>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultValue="option1"
                        id="exampleRadios1"
                        name="exampleRadios"
                        type="radio"
                      />
                      Digital <span className="form-check-sign" />
                    </Label>
                  </div>
                  <div className="form-check-radio">
                    <Label check>
                      <Input
                        defaultChecked
                        defaultValue="option2"
                        id="exampleRadios2"
                        name="exampleRadios"
                        type="radio"
                      />
                      Print <span className="form-check-sign" />
                    </Label>
                  </div>
                  
                </Col>
                <Col md="7" sm="7">
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
                    {formik.touched.summary && formik.errors.summary ? (
         <div style={{color: "#FF0000"}}>{formik.errors.summary}</div>
       ) : null}
                     
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
                       {formik.touched.location && formik.errors.location ? (
         <div style={{color: "#FF0000"}}>{formik.errors.location}</div>
       ) : null}
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
                      {formik.errors.date ? <div style={{color: "#FF0000"}}>{formik.errors.date}</div> : null}
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
                      {formik.errors.enddate ? <div style={{color: "#FF0000"}}>{formik.errors.enddate}</div> : null}
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
                    <h6>
                      Invite people 
                    </h6>
                    <Input
                      id="attendee1"
                      name="attendee1"
                      type="text"
                      {...formik.getFieldProps('attendee1')}
                    />
                  {formik.touched.attendee1 && formik.errors.attendee1 ? (
         <div style={{color: "#FF0000"}}>{formik.errors.attendee1}</div>
       ) : null}
                    </FormGroup>
                  <FormGroup>
                    <h6>Description</h6>
                    <Input
                      className="textarea-limited"
                      id="description"
                      name="description"
                      {...formik.getFieldProps('description')}
                      rows="13"
                      type="textarea"
                    />
                  {formik.touched.description && formik.errors.description ? (
         <div style={{color: "#FF0000"}}>{formik.errors.description}</div>
       ) : null}
                    <h5>
                      <small>
                        <span
                          className="pull-right"
                          id="textarea-limited-message"
                        >
                          150 characters left
                        </span>
                      </small>
                    </h5>
                    
                  </FormGroup>
                  <FormGroup check>
                    <Label check>
                      <Input defaultValue="" type="checkbox" />
                      Display on landing page{" "}
                      <span className="form-check-sign" />
                    </Label>
                    
                  </FormGroup>
                  </form>
                </Col>
              </Row>
              <Row className="buttons-row">
              <div class="col-md-12 text-center">
                    <button type="button" class="btn btn-secondary"disabled={!(formik.isValid && formik.dirty)}  onClick={handleClick}>Save & Publish</button>
                    </div>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <FooterBlack />
    </>
  );
}

export default AddEvent;
