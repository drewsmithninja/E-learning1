import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BsFillFilterSquareFill, BsFillBriefcaseFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Calendar from "react-calendar";
import userAvatar from "../assets/images/avatar/07.jpg";

const DateTime = () => {
  const [date, setDate] = useState(new Date());
  const [showMenu, setShowMenu] = useState(false);
  return (
    <main>
      <Container>
        <Row className="g-4">
          <Col lg={4}>
            <div className="d-flex align-items-center d-lg-none">
              <Button
                className="border-0 bg-transparent"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasSideNavbar"
                aria-controls="offcanvasSideNavbar"
                onClick={() => {
                  setShowMenu(true);
                }}
              >
                <BsFillFilterSquareFill
                  size={30}
                  style={{ color: "#0f6fec" }}
                />
                <span className="h6 mb-0 fw-bold ms-2 d-lg-none">
                  My profile
                </span>
              </Button>
            </div>
            <nav className="navbar navbar-expand-lg mx-0">
              <div
                className={
                  "offcanvas offcanvas-start" + (showMenu ? " show" : "")
                }
                id="offcanvasSideNavbar"
                style={{ visibility: `${showMenu}?'visible':'hidden'` }}
              >
                <div className="offcanvas-header">
                  <button
                    type="button"
                    className="btn-close text-reset ms-auto"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={() => {
                      setShowMenu(false);
                    }}
                  ></button>
                </div>

                <div className="offcanvas-body d-block px-2 px-lg-0">
                  <div className="card overflow-hidden">
                    <div
                      className="h-50px"
                      style={{
                        backgroundImage: "url(assets/images/bg/01.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                      }}
                    ></div>

                    <div className="card-body pt-0">
                      <div className="text-center">
                        <div className="avatar avatar-lg mt-n5 mb-3">
                          <a href="#!">
                            <img
                              className="avatar-img rounded border border-white border-3"
                              src={userAvatar}
                              alt=""
                            />
                          </a>
                        </div>

                        <h5 className="mb-2">
                          <a href="#!">Sam Lanson </a>
                        </h5>
                        <p className="mb-2">
                          Cloud Architect, 6+ yrs experience
                        </p>
                        <p className="small mb-0">
                          <i className="fa fa-briefcase me-1 text-purple"></i>
                          <BsFillBriefcaseFill
                            size={20}
                            style={{ paddingRight: "5px", color: "#92278f" }}
                          />
                          AWS, Azure, Cloud Computing
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center d-block mt-4">
                        <p>
                          <b>Skills or Topics</b>
                        </p>
                        <p>
                          <small>
                            <select
                              className="form-select choice-select-text-none"
                              data-position="bottom"
                              data-search-enabled="false"
                            >
                              <option value="Cloud Architect">
                                Cloud Architect
                              </option>
                              <option value="Cloud Architect">
                                Backend Development
                              </option>
                              <option value="Cloud Architect">
                                Frontend with Javascript
                              </option>
                              <option value="Cloud Architect">AI/ML</option>
                            </select>
                          </small>
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p>
                          <b>Duration</b>
                        </p>
                        <p className="text-purple">30 Min/Session</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p>
                          <b> Amount:</b>
                        </p>
                        <p className="text-green">
                          <b>$ 100</b>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </Col>
          <Col lg={8} className="vstack gap-4">
            <div className="card h-100">
              <div className="card-header d-sm-flex align-items-center text-center justify-content-sm-between border-0 pb-0">
                <h5 className="h4 card-title mb-0">Select Date & Time</h5>
              </div>
              <Row>
                <Col lg={8} md={8}>
                  <Calendar
                    onChange={setDate}
                    value={date}
                    prev2Label={null}
                    next2Label={null}
                    tileDisabled={({ date, view }) =>
                      date.getDay(0, 1, 2, 3, 4)
                    }
                  />
                </Col>
                <Col className="col-lg-4 col-md-4">
                  <div className="side_button">
                    <p className="text-center">Wednesday, Aug,24</p>
                    <div className="side_time mx-auto">
                      <Link to="#">04:00AM</Link>
                    </div>
                    <div className="side_time mx-auto">
                      <Link to="#">04:30PM</Link>
                    </div>
                    <div className="side_time1">
                      <div className="side_time side_confirm">
                        <Link to="#">05:00PM</Link>
                      </div>
                      <div className="side_time side_confirm_btn">
                        <Link to="/confirmation/">Pay & Book</Link>
                      </div>
                    </div>
                    <div className="side_time mx-auto">
                      <Link to="#">05:30PM</Link>
                    </div>
                    <div className="side_time mx-auto">
                      <Link to="#">06:00PM</Link>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default DateTime;
