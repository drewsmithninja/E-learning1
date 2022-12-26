import React from "react";
import { Card, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";

const MentorProfile = ({ item }) => {
  return (
    <div className="mentor-profile">
      <Container>
        <Row>
          <Col lg={8}>
            <Card>
              <Card.Img
                style={{ objectFit: "cover" }}
                variant="top"
                src="../assets/images/bg/05.jpg"
                height={200}
              />
              <Card.Body className="p-4">
                <Stack direction="horizontal" gap={3}>
                  <Image
                    style={{ marginTop: "-80px" }}
                    roundedCircle
                    width={128}
                    height={128}
                    src={"assets/images/avatar/07.jpg"}
                    className="border border-3 border-white"
                  />
                  <Stack gap={2}>
                    <Stack
                      direction="horizontal"
                      gap={2}
                      className="d-flex align-items-start"
                    >
                      <div className="fw-bold">
                        <Link className="text-dark">{`${item?.firstName} ${item?.lastName}`}</Link>
                      </div>
                      {item?.price === 0 ? (
                        <div className="d-flex border border-primary rounded-pill px-3 d-flex align-items-center">
                          <Image
                            style={{ height: "fit-content" }}
                            className="pe-2 py-2"
                            src="../../assets/images/myimages/free.png"
                          />
                          <div className="fw-bold text-primary">Free</div>
                        </div>
                      ) : (
                        <div className="d-flex border border-primary rounded-pill px-3 d-flex align-items-center">
                          <div className="fw-bold text-primary">
                            ${item?.price}/Hr.
                          </div>
                        </div>
                      )}
                    </Stack>
                    <p className="small text-secondary">
                      <span className="fw-bold">{item?.jobTitle},</span> 6+ yrs
                      experience
                    </p>
                    <p
                      className="small text-secondary d-flex align-items-center"
                      style={{ marginTop: "-6px" }}
                    >
                      <FaBriefcase className="text-primary me-1" />
                      {item?.skills?.map((skill, index) => (
                        <span key={skill?.id}>
                          {skill?.name}
                          {index < item?.skills.length - 1 ? (
                            <span className="me-1">,</span>
                          ) : (
                            ""
                          )}
                        </span>
                      ))}
                    </p>
                  </Stack>
                </Stack>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>Hello</Col>
        </Row>
      </Container>
    </div>
  );
};

export default MentorProfile;
