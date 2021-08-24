/*!

=========================================================
* Paper Kit PRO React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-pro-react
* Copyright 2021 Creative Tim (http://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AddProduct from "views/examples/AddProduct.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ContactUs from "views/examples/ContactUs.js";
import Discover from "views/examples/Discover.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error404 from "views/examples/Error404.js";
import Error422 from "views/examples/Error422.js";
import Error500 from "views/examples/Error500.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import SearchWithSidebar from "views/examples/SearchWithSidebar.js";
import Settings from "views/examples/Settings.js";
import TwitterRedesign from "views/examples/TwitterRedesign.js";
import Welcome from "eventz/folderss/Welcome";
import Landing from "eventz/folderss/Landing";
import AddEvent from "eventz/folderss/AddEvent";
import Display from "eventz/folderss/Display";
import Update from "eventz/folderss/Update";

import CreateProp from "eventz/folderss/AddProp"
import ListProp from "eventz/folderss/ListProp"


import Invite from "eventz/folderss/Invite";
import EventDetail from "eventz/folderss/EventDetails";
import Comments from "eventz/folderss/Comments";
import Map from "eventz/folderss/Map"




// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" render={(props) => <Index {...props} />} />
      <Route
        path="/nucleo-icons"
        render={(props) => <NucleoIcons {...props} />}
      />
      <Route
        path="/welcomee"
        render={(props) => <Welcome {...props} />}
      />
      <Route
        path="/EventMap"
        render={(props) => <Map {...props} />}
      />
       <Route
        path="/ListProp"
        render={(props) => <ListProp {...props} />}
      />
      <Route
        path="/LandingPage"
        render={(props) => <Landing {...props} />}
      />
      <Route
        path="/add-event"
        render={(props) => <AddEvent {...props} />}
      />
      <Route
        path="/add-prop"
        render={(props) => <CreateProp {...props} />}
      />
      <Route
        path="/display"
        render={(props) => <Display {...props} />}
      />
       <Route
        path="/update/:id"
        render={(props) => <Update {...props} />}
      />
      <Route
        path="/invite/:id"
        render={(props) => <Invite {...props} />}
      />
      <Route
        path="/eventdetail/:id"
        render={(props) => <EventDetail {...props} />}
      />
      <Route
        path="/comments/:id"
        render={(props) => <Comments {...props} />}
      />
      <Route path="/sections" render={(props) => <Sections {...props} />} />
      <Route
        path="/presentation"
        render={(props) => <Presentation {...props} />}
      />
      <Route path="/about-us" render={(props) => <AboutUs {...props} />} />
      <Route
        path="/add-product"
        render={(props) => <AddProduct {...props} />}
      />
      <Route path="/blog-post" render={(props) => <BlogPost {...props} />} />
      <Route path="/blog-posts" render={(props) => <BlogPosts {...props} />} />
      <Route path="/contact-us" render={(props) => <ContactUs {...props} />} />
      <Route path="/discover" render={(props) => <Discover {...props} />} />
      <Route path="/e-commerce" render={(props) => <Ecommerce {...props} />} />
      <Route path="/error-404" render={(props) => <Error404 {...props} />} />
      <Route path="/error-422" render={(props) => <Error422 {...props} />} />
      <Route path="/error-500" render={(props) => <Error500 {...props} />} />
      <Route
        path="/landing-page"
        render={(props) => <LandingPage {...props} />}
      />
      <Route path="/login-page" render={(props) => <LoginPage {...props} />} />
      <Route
        path="/product-page"
        render={(props) => <ProductPage {...props} />}
      />
      <Route
        path="/profile-page"
        render={(props) => <ProfilePage {...props} />}
      />
      <Route
        path="/register-page"
        render={(props) => <RegisterPage {...props} />}
      />
      <Route
        path="/search-with-sidebar"
        render={(props) => <SearchWithSidebar {...props} />}
      />
      <Route path="/settings" render={(props) => <Settings {...props} />} />
      <Route
        path="/twitter-redesign"
        render={(props) => <TwitterRedesign {...props} />}
      />
      <Redirect to="/presentation" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
