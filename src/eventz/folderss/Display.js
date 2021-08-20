import React, { useState, useEffect } from "react";
import DangerNavbar from "components/Navbars/DangerNavbar";
import axios from "axios";
import { useFormik } from 'formik';
import {  useHistory } from "react-router-dom";




// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Container,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";
import FooterBlack from "components/Footers/FooterBlack";
import styled from "styled-components";

// core components

function Display() {
    let [events, setEvents] = useState([]);
    const history = useHistory();
    const comment = (id) => {
      history.push('/eventdetail/'+ id);
    }
    const [showForm, setShowForm] = useState(false);
    const showFormm = () => {
        setShowForm(!showForm);
      }
    //eslint-disable-next-line
  const [activePill, setActivePill] = React.useState("1");
  const formik = useFormik({
    initialValues: {
      comment: ''
    }
    ,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  const rateobject = {
    email : "rayen.mechergui@esprit.tn",
    comment:formik.values.comment,
  }
  const rating = (id) => {
    axios.post(`http://localhost:3001/event/Comment/${id}`, rateobject)
        console.log(rateobject)
  }
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
              {events.map((event,index)=>(
              <Col md="4">
                <Card
                  key={index}
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
                    <Button
                      className="btn-round ml-2"
                      color="danger"
                      onClick={()=>{comment(event._id)}}
                    >
                      Comment
                    </Button>
                    {showForm && (
       <Comment>
       <FormGroup>
       <Input
         id="comment"
         name="comment"
         type="text"
         {...formik.getFieldProps('comment')}
       />
     </FormGroup>
     <Button
                      className="btn-round"
                      color="danger"
                      onClick={()=>rating(event._id)}
                    >
                     <i class="fa fa-comment"></i>
                    </Button>
     </Comment>
    
   )}
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
const Comment = styled.div`
margin-top:13px;
`

export default Display;