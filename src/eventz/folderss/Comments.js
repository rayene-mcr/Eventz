import React, {useEffect,useState} from "react";
import axios from "axios";
// reactstrap components
import { Badge, Button, Card, Media, Container, Row, Col } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import BlogPostHeader from "components/Headers/BlogPostHeader.js";
import FooterGray from "components/Footers/FooterGray.js";
import FooterBlack from "components/Footers/FooterBlack";
import DangerNavbar from "components/Navbars/DangerNavbar";
import {  useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

function Comments() {
    const { id } = useParams();
    let [event, setEvent] = useState([]);
    useEffect(() => {
      axios
        .get(`http://localhost:3001/event/${id}`)
        .then(response => setEvent(response.data)
       );
    }, []);
 
  
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("blog-post");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("blog-post");
    };
  });
  return (
    <>
      <DangerNavbar />
      <div className="wrapper">
        <div className="main">
          <div className="section section-white">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Container>
                    <Row>
                      <Media>
                        <a
                          className="pull-left"
                        >
                          <div className="avatar big-avatar">
                            <Media
                              alt="..."
                              object
                              src={
                                require("assets/img/faces/kaci-baum-2.jpg")
                                  .default
                              }
                            />
                          </div>
                        </a>
                        <Media body>
                          <Media heading> {event.organizer?.email} </Media>
                          <div className="pull-right">
                          </div>
                          <p>
 {event.description}
                          </p>
                          <p>Don't forget, You're Awesome!</p>
                        </Media>
                      </Media>
                    </Row>
                    <Row>
                      <div className="comments media-area">
                        <h3 className="text-center">Comments</h3>
                        {event.rate?.map((evnn)=>(
                        <Media>
                          <a
                            className="pull-left"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            <div className="avatar">
                              <Media
                                alt="..."
                                object
                                src={
                                  require("assets/img/faces/clem-onojeghuo-3.jpg")
                                    .default
                                }
                              />
                            </div>
                          </a>
                          
                          <Media body>
                            <Media heading tag="h5">
                              {evnn.email}
                            </Media>
                            <div className="pull-right">
                              <h6 className="text-muted">{(new Date(evnn.dateofcomment).toDateString())} {(new Date(evnn.dateofcomment).getUTCHours()+1)}:{(new Date(evnn.dateofcomment).getMinutes())}:{(new Date(evnn.dateofcomment).getSeconds())}</h6>
                              <Button
                                className="btn-link pull-right"
                                color="info"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                <i className="fa fa-reply mr-1" />
                                Reply
                              </Button>
                            </div>
                            <p>
                              {evnn.comment}
                            </p>
                            {/* end media */}
                          </Media>
                        </Media>
                           ))}
                        {/* end media */}
                        {/* end media */}
                      </div>
                    </Row>
                  </Container>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
      <FooterBlack />
    </>
  );
}

export default Comments;
