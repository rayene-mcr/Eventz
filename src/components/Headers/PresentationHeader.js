/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/sections/pk-pro-cover.jpg").default +
              ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="title-brand">
                <h1 className="presentation-title">Eventz</h1>
                <div className="type">TALAN</div>
                <div className="fog-low">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div>
                <div className="fog-low right">
                  <img
                    alt="..."
                    src={require("assets/img/sections/fog-low.png").default}
                  />
                </div>
              </div>
              <h2 className="presentation-subtitle text-center">
                Best application to manage your upcoming events, get some ideas and leave feedback about your experience... 
              </h2>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
