/* eslint-disable max-len */
import React, { Component } from 'react';

import coatOfArm from '../../assets/images/coat-of-arm.png';
import Footer from '../layouts/Footer';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSignin = () => {
    const { history } = this.props;

    history.push('/admin-portal');
  }

  render() {
    return (
      <div className="w-100">
        <div className="banner">
          <div className="login">
            <div className="coat-of-arm">
              <img src={coatOfArm} alt="" />
              <h2>EDO STATE</h2>
              <h4>GOVERNMENT</h4>
            </div>
            <div className="form">
              <div className="login-form-group">
                <input type="email" placeholder="Email Address" />
              </div>
              <div className="login-form-group">
                <input type="password" placeholder="Password" />
              </div>
              <button className="m-b-10" type="button" onClick={this.handleSignin}>LOGIN</button>
              <a href>Forget password?</a>
            </div>
          </div>
        </div>
        <section>
          <div className="intro center-text content">
            <div>
              <p>It is along established fact that a reader will be distracted by the readable content of a page when looking at its layout.The point of using Lorem Ipsum is that it has a more or less normal distribution of letters.</p>
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="row">
              {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }].map((item) => (
                <div className="col-4" key={item.id}>
                  <div className="dept-news">
                    <h4>INTERNAL NEWS</h4>
                    <div className="headline-list">
                      <div className="headline flex m-t-20">
                        <div>
                          <div className="date">
                            <p className="m">JAN</p>
                            <p className="d">13</p>
                          </div>
                        </div>
                        <p className="title">Edo Govt boosts COVID-19 response as Obaseki commissions 4th molecular laboratory</p>
                      </div>
                      <div className="headline flex m-t-20">
                        <div>
                          <div className="date">
                            <p className="m">MAR</p>
                            <p className="d">09</p>
                          </div>
                        </div>
                        <p className="title">Helicopter crash: Obaseki condoles with Sanwo-Olu, Lagos govt over crash</p>
                      </div>
                      <div className="headline flex m-t-20">
                        <div>
                          <div className="date">
                            <p className="m">AUG</p>
                            <p className="d">22</p>
                          </div>
                        </div>
                        <p className="title">Obaseki’s reform: Marine Police base ready, as hope for Benin River Port rises</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="content">
            <div className="row">
              <div className="col-3">
                <div className="bottom">
                  <h2>Vision Statement</h2>
                  <p>To make Edo State an Economic hub and No 1 choice for investors both local and foreign.</p>
                </div>
              </div>
              <div className="col-3">
                <div className="bottom">
                  <h2>Mission Statement</h2>
                  <p>To develop a modern and progressive Edo State where every citizen is empowered with the opportunity to live life in its fullness.</p>
                </div>
              </div>
              <div className="col-3">
                <div className="bottom">
                  <h2>Corporate Strategy</h2>
                  <ol>
                    <li>Social Welfare</li>
                    <li>Institutional Reform</li>
                    <li>Infrastructural Development</li>
                    <li>Environmental Sustainability</li>
                    <li>Economic Revolution</li>
                    <li>Culture & Tourism </li>
                  </ol>
                </div>
              </div>
              <div className="col-3">
                <div className="bottom">
                  <h2>Resource Centre</h2>
                  <ul>
                    <li>edostate.gov.ng</li>
                    <li>godwinobaseki.com</li>
                    <li>edojobs.edostate.gov.ng</li>
                    <li>eirs.org</li>
                    <li>edogis.org</li>
                    <li>Edojudiciary.org</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Home;
