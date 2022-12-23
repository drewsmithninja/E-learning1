import React from "react";
import { Card, Col, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const MentorCard = ({ item }) => {
  return (
    <Card className="border">
      <Card.Body className="p-4">
        <Row>
          <Col>
            <Stack direction="horizontal" gap={3}>
              <Image
                roundedCircle
                width={84}
                height={84}
                src={item.profilePicture}
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
                      {/* $50/Hr. */}
                      <div className="fw-bold text-primary">
                        ${item?.price}/Hr.
                      </div>
                    </div>
                  )}
                </Stack>
                <p className="border">
                  <span className="fw-bold small">{item?.jobTitle},</span> 6+
                  yrs experience
                </p>
              </Stack>
            </Stack>
          </Col>
          <Col md="auto">
            <Stack>Hello</Stack>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MentorCard;
