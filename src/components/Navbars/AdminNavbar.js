import React from "react";
import { Redirect,Link, useHistory, BrowserRouter } from "react-router-dom";


// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
import styled from "styled-components";
import Cookies from "js-cookie";
import { useCookies } from "react-cookie";
// core components

function AdminNavbar() {
let name = localStorage.getItem("name")
let gname = localStorage.getItem("googlename")
let history = useHistory()
    const logout =()=> {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("googlename");
        localStorage.removeItem("googleemail");
        localStorage.removeItem("role");
        history.push("/login")
    }
  const redirect = () => {
    history.push('/display')
  }
  function clearListCookies()
{   
 var cookies = document.cookie.split(";");
 for (var i = 0; i < cookies.length; i++)
  {   
    var spcook =  cookies[i].split("=");
    deleteCookie(spcook[0]);
  }
  function deleteCookie(cookiename)
   {
    var d = new Date();
    d.setDate(d.getDate() - 1);
    var expires = ";expires="+d;
    var name=cookiename;
    //alert(name);
    var value="";
    document.cookie = name + "=" + value + expires + "; path=/acc/html";                    
}

}

  const addredirect = () => {
    clearListCookies()
    history.push('/add-event')
  }
  
  
  
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
    headroom.init();
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" id="navbar-main" color="danger">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand id="navbar-brand" to="/display" tag={Link}>
              Eventz
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
            Eventz
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav onClick={redirect}>
                  All Events
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  My events
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem onClick={addredirect} tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Add
                  </DropdownItem>
                  <DropdownItem to="/LandingPage" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    List
                  </DropdownItem>
                  <DropdownItem to="/invites" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Invites
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Suggest
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/add-prop" tag={Link}>
                    <i className="nc-icon nc-bank" />
                    Add Proposition
                  </DropdownItem>
                  <DropdownItem to="/ListProp" tag={Link}>
                    <i className="nc-icon nc-basket" />
                    List Propositions
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Dashboard
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/adminroute" tag={Link}>
                    <i className="nc-icon nc-bank" />
                    Events
                  </DropdownItem>
                  <DropdownItem to="/users" tag={Link}>
                    <i className="nc-icon nc-basket" />
                    Users
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <Name><strong>{name}</strong></Name>
              <Name><strong>{gname}</strong></Name>
              <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  target="_blank"
                  onClick={logout}
                >
                  <i className="nc-icon nc-cart-simple" /> LOGOUT
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

const Name = styled.div`
margin-top:23px;
margin-right:10px;
color:white;
`

export default AdminNavbar;
