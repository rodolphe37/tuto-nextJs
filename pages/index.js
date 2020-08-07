import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import { Button, Container, Row, Col, Carousel } from 'reactstrap';
import Typed from 'react-typed';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.roles = ['Thérapeute', 'Lapidaire', 'Developpeur', 'Hilot Massage', 'React.js', 'Node.js'];
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <BaseLayout className="cover" {...this.props.auth}>
        <div className="main-section">
          <div className="background-image">
            <img src="/images/background-index.png" alt="background" />
          </div>

          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper`}>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2> Full Stack Web Developer </h2>
                        <div className="hero-section-content-intro">
                          Jetez un œil à mon portfolio et à mon historique de travail.
                        </div>
                      </div>
                      <img className="image" src="/images/section-1.png" alt="section" />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && <span> <b> {user.name} </b> </span>}
                    Bienvenue sur le Site de Rodolphe Augusto
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={60}
                  backSpeed={60}
                  strings={this.roles}
                  backDelay={1000}
                  loopCount={0}
                  showCursor
                  className="self-typed"
                  cursorChar="|"
                />
                <div className="hero-welcome-bio">
                  <h1>
                    Visitez mon Univers.
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </BaseLayout>
    )
  }
}



export default Index;
