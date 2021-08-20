import React from "react";
// reactstrap components
import { Button, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import InfoNavbar from "components/Navbars/InfoNavbar.js";
import FooterWhite from "components/Footers/FooterWhite.js";

const MapWrapper = () => {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "44.445248";
    let lng = "26.099672";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 14,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [
            {
              color: "#e9e9e9",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 17,
            },
          ],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 29,
            },
            {
              weight: 0.2,
            },
          ],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 18,
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [
            {
              color: "#f5f5f5",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [
            {
              color: "#dedede",
            },
            {
              lightness: 21,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "on",
            },
            {
              color: "#ffffff",
            },
            {
              lightness: 16,
            },
          ],
        },
        {
          elementType: "labels.text.fill",
          stylers: [
            {
              saturation: 36,
            },
            {
              color: "#333333",
            },
            {
              lightness: 40,
            },
          ],
        },
        {
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [
            {
              color: "#f2f2f2",
            },
            {
              lightness: 19,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 20,
            },
          ],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#fefefe",
            },
            {
              lightness: 17,
            },
            {
              weight: 1.2,
            },
          ],
        },
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Paper Kit PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Paper Kit PRO React</h2>' +
      "<p>A premium Admin for Reactstrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  });
  return (
    <>
      <div ref={mapRef} style={{ height: `100%` }}></div>
    </>
  );
};

function ContactUs() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("contact-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("contact-page");
    };
  });
  return (
    <>
      <InfoNavbar />
      <div className="main">
        <div className="section section-gray">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Get in touch with us</h2>
                <p>
                  Collaboratively administrate empowered markets via
                  plug-and-play networks. Dynamically procrastinate B2C users
                  after installed base benefits. Dramatically visualise customer
                  directed convergence without revolutionary ROI.
                </p>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 className="title">
                  <small>Find us on social networks</small>
                </h3>
                <Button className="btn-just-icon mr-1" color="twitter">
                  <i className="fa fa-twitter" />
                </Button>
                <Button className="btn-just-icon mr-1" color="facebook">
                  <i className="fa fa-facebook" />
                </Button>
                <Button className="btn-just-icon mr-1" color="google">
                  <i className="fa fa-google" />
                </Button>
                <Button className="btn-just-icon mr-1" color="dribbble">
                  <i className="fa fa-dribbble" />
                </Button>
                <Button className="btn-just-icon mr-1" color="instagram">
                  <i className="fa fa-instagram" />
                </Button>
                <Button className="btn-just-icon" color="youtube">
                  <i className="fa fa-youtube" />
                </Button>
              </Col>
            </Row>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h3 className="title">
                  <small>Or drop us a note</small>
                </h3>
                <Form className="contact">
                  <Row>
                    <Col md="6">
                      <Input placeholder="First Name" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Last Name" type="text" />
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <Input placeholder="Email" type="text" />
                    </Col>
                    <Col md="6">
                      <Input placeholder="Subject" type="text" />
                    </Col>
                  </Row>
                  <Input placeholder="Message" rows="7" type="textarea" />
                  <Row>
                    <Col className="ml-auto mr-auto" md="6">
                      <Button block className="btn-round" color="primary">
                        Send
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <h3 className="visit">
                  <small>Or come and visit</small>
                </h3>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="big-map" id="contactUsMap">
        <MapWrapper />
      </div>
      <FooterWhite />
    </>
  );
}

export default ContactUs;
