import React from "react";
import { Button, Card, Col, Image, Row, Stack } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBriefcase } from "react-icons/fa";

const MentorCard = ({ item }) => {
  const [rating, setRating] = useState(item?.rating);

  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index); // value: number, index: number

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
          </Col>
          <Col md="auto">
            <Stack className="d-flex align-items-end">
              <Stack
                gap={1}
                direction="horizontal"
                className="d-flex align-items-center"
              >
                <Rating
                  style={{ marginBottom: "3px" }}
                  onClick={handleRating}
                  onPointerEnter={onPointerEnter}
                  onPointerLeave={onPointerLeave}
                  onPointerMove={onPointerMove}
                  initialValue={rating}
                  allowFraction
                  size={22}
                />
                <h6>{item?.rating}</h6>
                <div className="small">({item?.ratingCount})</div>
              </Stack>
              <Button
                className="rounded-pill px-3 py-1"
                size="sm"
                variant="outline-primary my-3"
              >
                View Profile
              </Button>
            </Stack>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default MentorCard;
