import React, { useState, useEffect } from "react";
import DangerNavbar from "components/Navbars/DangerNavbar";
import axios from "axios";
import { useFormik } from 'formik';
import {  useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";




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
import AdminNavbar from "components/Navbars/AdminNavbar";



// core components

function Admin() {
    let [events, setEvents] = useState([]);
    const history = useHistory();
    const comment = (id) => {
      history.push('/eventdetail/'+ id);
    }
    let remail = localStorage.getItem("email")
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
  console.log(remail);
  let gmail = localStorage.getItem("googleemail")
  const rateobject = {
    email : gmail ,
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

  const participant = {
    email : remail || gmail,
  }
  const participate = (id,email) => {
    axios.post(`http://localhost:3001/event/Participate/${id}`,participant)
    console.log(email)
        console.log(participant)
        toast.success('Invite has been successfully sent')
  }
  const deletevent = (id) => {
      axios.delete(`http://localhost:3001/event/delete/${id}`)
      toast.success("Event successfully deleted")
      history.go(0)
  }
  let name = localStorage.getItem("name")


  return (
    <>
    <AdminNavbar />
      <div className="section section-pricing cd-section" id="pricing">
        <ToastContainer/>
        <div className="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title">Welcome {name}</h2>
                <h5 className="description">
                Here is the full list of eventz in your application
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
                      color="red"
                      onClick={()=>{deletevent(event._id)}}
                    >
                      Delete
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
      </div>
      <FooterBlack />
    </>
  );
}
const Comment = styled.div`
margin-top:13px;
`

export default Admin;