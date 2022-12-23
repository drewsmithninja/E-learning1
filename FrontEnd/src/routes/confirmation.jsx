import React from "react";
import { Container, Card, Image } from "react-bootstrap";
import { BsCalendarCheckFill, BsClock } from "react-icons/bs";
import { Link } from "react-router-dom";
import userAvatar from "../assets/images/avatar/07.jpg";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <Container className="mt-5">
        <div className="row g-4">
          <div className="col-lg-12">
            <Card>
              <div className="card-body confirmation_card">
                <div className="row">
                  <div className="col-lg-6 col-md-12 mx-auto pt-5 pb-5">
                    <Image
                      src={userAvatar}
                      className="d-flex m-auto"
                      alt="profile"
                      style={{ borderRadius: "50%", height: "86px" }}
                    />
                    <h4 className="text-center mt-4 text-green mb-2">
                      Confirmed
                    </h4>
                    <p className="mt-2 text-center">
                      <b>You are scheduled with Sam Lenson</b>
                    </p>

                    <div className="card mt-5">
                      <div className="card-body">
                        <h5 className="red_bullet">
                          <BsCalendarCheckFill />
                          <span className="ms-4">
                            1-on-1 Session on Cloud Computing
                          </span>
                        </h5>
                        <p className="mt-3 text-purple">
                          <BsClock size={18} />
                          <span className="ms-3">
                            15 Dec 2022, 10:30 AM - 11:30 AM (EST)
                          </span>
                        </p>
                      </div>
                    </div>
                    <Link className="btn  btn-primary-soft w-100 mt-4">
                      Continue
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Confirmation;
