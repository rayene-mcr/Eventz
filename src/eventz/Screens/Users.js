import React, { useState, useEffect } from "react";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import AboutUsHeader from "components/Headers/AboutUsHeader.js";
import FooterAboutUs from "components/Footers/FooterAboutUs.js";
import DangerNavbar from "components/Navbars/DangerNavbar";
import { ToastContainer, toast } from "react-toastify";
import {  useHistory } from "react-router-dom";
import AdminNavbar from "components/Navbars/AdminNavbar";

function Users() {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
          .get("http://localhost:3001/api/allusers")
          .then(response => setUsers(response.data));
      }, []);
    
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("about-us");
    };
  });
  const history = useHistory()
  const deletevent = (id) => {
    axios.delete(`http://localhost:3001/api/deleteuser/${id}`)
    toast.success("Event successfully deleted")
    history.go(0)
}
  const name = localStorage.getItem("name")
  return (
    <>
      <AdminNavbar />
      <ToastContainer/>
      <div className="main">
        <div className="section">
          <Container>
            <h3 className="title-uppercase">Welcome again {name}</h3>
            <h3 className="title-uppercase">
              List of Eventz users 
              <i className="fa fa-heart heart mr-3 ml-1" />
            </h3>
            <h2 className="text-center creators">SUBSCRIBERS</h2>
            <Row className="coloured-cards">
            {users?.map((user,index)=>(
              <Col md="4" sm="6">
                <div className="card-big-shadow">
                  <Card
                    className="card-just-text mt-6"
                    data-background="color"
                    data-color="blue"
                    data-radius="none"
                  >
                    <CardBody>
                      <h6 className="card-category">{user.name}</h6>
                      <CardTitle tag="h4">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          {user.email}
                        </a>
                      </CardTitle>
                      <p className="card-description">
                      <strong>{user.role}</strong>
                      </p>
                      <p className="card-description">
                      {(new Date(user.createdAt).toDateString())} {(new Date(user.createdAt).getUTCHours()+1)}:{(new Date(user.createdAt).getMinutes())}:{(new Date(user.createdAt).getSeconds())}
                      </p>
                      <button type="button" class="btn btn-lg btn-primary mt-3"  onClick={()=>{deletevent(user._id)}}>Delete</button>
                    </CardBody>
                  </Card>
                  {/* end card */}
                </div>
              </Col>
                ))}
            </Row>
          </Container>
        </div>
      </div>
      <FooterAboutUs />
    </>
  );
}

export default Users;
