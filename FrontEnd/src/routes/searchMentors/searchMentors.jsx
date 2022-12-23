import React from "react";
import {
  Card,
  Container,
  FormGroup,
  FormLabel,
  FormSelect,
  Stack,
} from "react-bootstrap";
import { useSelector } from "react-redux";
import FormRange from "react-bootstrap/esm/FormRange";
import MentorCard from "../../components/mantor/mentorCard";
import "./searchMentors.scss";

export const SearchMentors = () => {
  const mentors = useSelector((state) => state.mentor.mentors);
  console.log(mentors?.data?.[0]);

  return (
    <div className="search-mentors">
      <Container>
        <Card className="border">
          <Card.Body className="d-flex justify-content-between p-4">
            <Stack direction="horizontal" gap={4}>
              <FormSelect size="lg">
                <option>1-on-1 Session</option>
                <option>Group Sessions</option>
              </FormSelect>
              <div>
                <div className="fw-bold">{`$0-$10000`}</div>
                <FormRange />
                <span className="lower-range"></span>
                <div className="small d-flex justify-content-between">
                  <div>0</div>
                  <div>10000</div>
                </div>
              </div>
              <FormSelect>
                <option>Time</option>
                <option>Morning (6 AM to 12 PM)</option>
                <option>Afternoon (12PM - 5 PM)</option>
                <option>Evening (5PM - 10PM)</option>
              </FormSelect>
            </Stack>
            <div className="d-flex justify-content-center align-items-center">
              <FormGroup className="d-flex" controlId="formPlaintextEmail">
                <FormLabel column className="text-nowrap">
                  Sort By: &nbsp;
                </FormLabel>
                <FormSelect>
                  <option>Recommended</option>
                  <option>Rating</option>
                  <option>Experience</option>
                  <option>Sessions</option>
                  <option>Price</option>
                </FormSelect>
              </FormGroup>
            </div>
          </Card.Body>
        </Card>
        <div className="mt-5">
          <h5 className="fw-bold">5 Results</h5>
          <div className="py-4">
            <Stack gap={3}>
              {mentors?.data?.length ? (
                mentors?.data?.map((item) => (
                  <MentorCard key={item.userId} item={item} />
                ))
              ) : (
                <Card className="border">
                  <Card.Body>
                    <Card.Title>No Mentors are available.</Card.Title>
                  </Card.Body>
                </Card>
              )}
            </Stack>
          </div>
        </div>
      </Container>
    </div>
  );
};
