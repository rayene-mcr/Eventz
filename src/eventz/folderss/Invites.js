import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useFormik } from 'formik';
import {  useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// reactstrap components
import {
  Button,
  Form,
  Input,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import DangerNavbar from "components/Navbars/DangerNavbar.js";
import FooterWhite from "components/Footers/FooterWhite.js";

function Invite() {
  let email = localStorage.getItem("email")
    let [invites, setInvites] = useState([]);
    useEffect(() => {
        axios
          .get(`http://localhost:3001/event/mail/${email}`)
          .then(response => setInvites(response.data));
      }, []);
  let name = localStorage.getItem("name")
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("search-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("search-page");
    };
  });
  const copy = (email) => {
    navigator.clipboard.writeText(email)
  }

  return (
    <>
      <DangerNavbar />
      <ToastContainer/>
      <div className="wrapper">
        <div className="main">
          <div className="section section-white section-search">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6" xs="12">

                  <h6 className="text-muted">
                    Welcome {name} 
                  </h6>
                  <h4 className="text-muted">
                  {invites.length == 0 ? "You don't have any invites for your events" : "Here's a list of your pending invites"}
                  </h4>
                  <ul className="list-unstyled follows">
                  {invites?.map((invite, index)=>(
                    <>
                                            {invite.PendingInvites?.map((evnn,ind)=>(
                    <li>
                      <Row>
                        <Col md="2" xs="3">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={
                              require("assets/img/faces/electronic-request-message-concept-flat-600w-794025517.jpg")
                                .default
                            }
                          />
                        </Col>
                        <Col className="description" md="6" xs="4">
                          <h5>
                            {invite.summary} <br />
                            <small key={ind} id="myInput">
                             {evnn.email}
                            </small>
                          </h5>
                        </Col>
                        <Col md="2" xs="2">
                          <Button
                            className="btn-just-icon btn-round btn-tooltip"
                            color="danger"
                            id="tooltip565993392"
                            outline
                            onClick={()=>copy(evnn.email) && console.log(`${evnn.email} has been copied`)}
                          >
                            <i className="fa fa-plus" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip565993392"
                          >
                            Copy 
                          </UncontrolledTooltip>
                        </Col>
                      </Row>
                    </li>
                                                                        ))}
                                                                        </>
                     ))}
                  </ul>
                  <div className="text-missing">
                    <h5 className="text-muted">
                      
                    </h5>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}

export default Invite;
