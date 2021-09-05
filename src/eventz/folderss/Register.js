import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { useFormik } from 'formik';
import * as Yup from 'yup';

// reactstrap components
import {
  Button,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";




function Register() {
  const history = useHistory();
  


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
  const formik = useFormik({
    initialValues: {
    title: "",
    price: 0,
    }
    }); 
  return (
    <>
     <ColorNavbar/>
      <div className="wrapper">
        <div
          className="page-header"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/rawpixel-com.jpg").default +
              ")",
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto" lg="6" md="6" sm="7" xs="12">
                <div className="info info-horizontal">
                  <div className="icon">
                  <i class="fa fa-user-plus"></i>
                  </div>
                  <div className="description">
                    <h3>Join the family now</h3>
                    <p>
                      Complete all required fields and join us right now !.
                      Start managing your events and dig deep in a world full of fun and 
                      exciting content.
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="mr-auto" lg="6" md="6" sm="5" xs="12">
                <Card className="card-register">
                  <CardTitle className="text-center" tag="h3">
                    Register
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
                  
                 <div className="register">
<Form >
 <FormGroup>
 <Input
 type="text"
 name="displayName"
 placeholder="displayName"
 value={formik.values.displayName}
 onChange={formik.handleChange}
 ></Input>
 </FormGroup>
 <FormGroup>
 <Input
 type="email"
 name="email"
 placeholder="email"
 value={formik.values.email}
 onChange={formik.handleChange}
 ></Input>
 </FormGroup>
 <FormGroup>
 <Input
 type="password"
 name="password"
 placeholder="password"
 value={formik.values.password}
 onChange={formik.handleChange}
 ></Input>
 </FormGroup>
 <FormGroup>
 <Input
 type="password"
 name="passwordCheck"
 placeholder="passwordCheck"
 value={formik.values.passwordCheck}
 onChange={formik.handleChange}
 ></Input>
 </FormGroup>
 <Button >enregistrer</Button>
 </Form>

</div>
                  <div className="login">
                    <p>
                      Already have an account?{" "}
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        Log in
                      </a>
                      .
                    </p>
                  </div>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="demo-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made with{" "}
              <i className="fa fa-heart heart" /> by Rayen / Wael / Wissem 
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;