import React, {useEffect, useState,Fragment} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useFormik } from 'formik';
import {  useHistory } from "react-router-dom";
// react plugin used to create DropdownMenu for selecting items



// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  FormGroup,
  Input,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import ProductPageHeader from "components/Headers/ProductPageHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";
import styled from "styled-components";

// carousel items


function EventDetail() {
  let [otherevents, setOtherevents] = useState([]);
  let [event, setEvent] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/event/${id}`)
      .then(response => setEvent(response.data));
      other();
  }, []);

  const other = () => {
    axios
      .get("http://localhost:3001/event/allevents")
      .then(response => setOtherevents(response.data));
  }
  const history = useHistory();
  const comments = () => {
    history.push('/comments/'+ id);
  }

  const { id } = useParams();
  const [showForm, setShowForm] = useState(false);
    const showFormm = () => {
        setShowForm(!showForm);
        console.log(event.rate.length)
      }
      const formik = useFormik({
        initialValues: {
          comment: ''
        }
        ,
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      let gmail = localStorage.getItem("googleemail")
      let remail = localStorage.getItem("email")
      const rateobject = {
        email : remail || gmail,
        comment:formik.values.comment,
      }
      const rating = () => {
        axios.post(`http://localhost:3001/event/Comment/${id}`, rateobject)
            console.log(rateobject)
      }


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("product-page");
    return function cleanup() {
      document.body.classList.remove("product-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <ProductPageHeader />
      <div className="main">
        <div className="section">
          <Container>
            <Row className="title-row">
              <Col md="2">
                <h4 className="shop">Details</h4>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="pull-right">
                  <Button color="link" onClick={comments}>
                  <i class="fa fa-comment"></i> {event.rate?.length} Comments
                  </Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md="7" sm="6">
                <div className="ml-auto mr-auto" id="carousel">
                  <Card className="page-carousel">
                   <div><img src={event.imgUrl} alt="Event"/></div>
                  </Card>
                </div>
                {/* end carousel */}
              </Col>
              <Col md="5" sm="6">
                <h2>{event.summary}</h2>
                <h4 className="price">
                  <strong><i className="fa fa-map-marker mr-4"></i>{event.location}</strong>
                </h4>
                <hr />
                <p>
                  {event.description}
                </p>
                <To>
                <span className="label label-default shipping">
                <i className="fa fa-calendar mr-1" /> From
                </span>
                <div>{(new Date(event.dateTime).toDateString())} {(new Date(event.dateTime).getUTCHours()+1)}:{(new Date(event.dateTime).getMinutes())}:{(new Date(event.dateTime).getSeconds())}</div>
                </To>
                <To>
                <span className="label label-default shipping ">
                <i className="fa fa-calendar mr-1" /> To
                </span>
                <div>{(new Date(event.enddateTime).toDateString())} {(new Date(event.enddateTime).getUTCHours()+1)}:{(new Date(event.enddateTime).getMinutes())}:{(new Date(event.enddateTime).getSeconds())}</div>
                </To>
                <hr />
                <Organizer>
                <span className="label label-default shipping ">
               <strong><i class="fa fa-user"></i> Organizer</strong> 
                </span>
                <div>{event.organizer?.email}</div>
                </Organizer>
                <Row>
                  <Col className="offset-md-5" md="7" sm="8">
                    <Button block className="btn-round mt-4" color="danger" onClick={showFormm}>
                      Comment  <i class="fa fa-comment"></i>
                    </Button>
                    {showForm && (
                      <Fragment>
                        <Ipn>
       <FormGroup>
       <Input
         id="comment"
         className="textarea-limited"
         name="comment"
         style={{'width':'200px'}}
         type="textarea"
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
                    </Ipn>
                    </Fragment>
    
   )}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark">
          <Container>
            <Row>
              <Col md="12">
                <h4>Other events</h4>
                <br />
              </Col>
              {otherevents.slice(0,3).map((eventt)=>(
              <Col md="4" sm="4">
                <Card className="card-product card-plain">
                  <div className="card-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="img-rounded img-responsive"
                        src={eventt.imgUrl}
                      />
                    </a>
                    <CardBody>
                      <div className="card-description">
                        <CardTitle tag="h5">
                          {eventt.summary}
                        </CardTitle>
                        <p className="card-description">{(new Date(eventt.dateTime).toDateString())} {(new Date(eventt.dateTime).getUTCHours()+1)}:{(new Date(eventt.dateTime).getMinutes())}:{(new Date(eventt.dateTime).getSeconds())}</p>
                      </div>
                      <div className="actions">
                        <h5 className="text-white"><strong><i className="fa fa-map-marker mr-1"></i>{eventt.location}</strong></h5>
                      </div>
                    </CardBody>
                  </div>
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
const To = styled.div`
margin-top:9px;
`
const Organizer = styled.div`
margin: auto;
width: 60%;
`
const Ipn = styled.div`
margin-top:20px;
`
export default EventDetail;
