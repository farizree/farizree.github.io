/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col , UncontrolledTooltip} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import Background from 'assets/img/theme/code4.jpg';

import MyPDF from 'assets/doc/farizresume.pdf';

var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

class Index extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(){
    window.location.href = `mailto:farizree@gmail.com`;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default">
            <section style={ sectionStyle }>
              </section>
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={require("assets/img/theme/fariz.jpg")}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href={MyPDF}
                          id="btnresume"
                          target="_blank"
                          download="farizresume.pdf"
                          size="sm"
                        >
                          My Resume
                        </Button>
                        <UncontrolledTooltip delay={0} target="btnresume">
                          Download my resume!
                        </UncontrolledTooltip>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          id="btnmessage"
                          onClick={this.onClick}
                          size="sm"
                        >
                          Message
                        </Button>
                        <UncontrolledTooltip delay={0} target="btnmessage">
                          Text me!
                        </UncontrolledTooltip>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      <div className="card-profile-stats d-flex justify-content-center">
                      </div>
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Muhammad Fariz Hidayat{" "}
                      <span className="font-weight-light">, 25</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Jakarta, Indonesia
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Software Engineer at Bussan Auto Finance
                    </div>
                    <div>
                      <i className="ni education_hat mr-2" />
                      University of Gunadarma, Bachelor of Computer Science
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                        I am a Software Engineer with strong passion to learn new things. 
                        I am familiar with a few Laravel, Codeigniter and Golang framework (Gin Gonic). 
                        Currently I am interested and learning about iOS Development with Swift. 
                        I enjoy cooking and adventure on my spare time.
                        </p>
                        {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                          Show more
                        </a> */}
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;
