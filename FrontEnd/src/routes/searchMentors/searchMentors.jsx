import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  FormGroup,
  FormLabel,
  FormSelect,
  Stack,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import FormRange from "react-bootstrap/esm/FormRange";
import MentorCard from "../../components/mantor/mentorCard";
import { getMentors } from "../../features/mentor/mentorSlice";

export const SearchMentors = () => {
  const mentors = useSelector((state) => state.mentor.mentors);
  const searchQuery = useSelector((state) => state.mentor.searchQuery);

  const [range, setRange] = useState(5000);
  const [sessionType, setSessionType] = useState(1);
  const [timeRange, setTimeRange] = useState(1);
  const [startTime, setStartTime] = useState("06:00:00");
  const [endTime, setEndTime] = useState("12:00:00");
  const [sortBy, setSortBy] = useState(1);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (timeRange === 1) {
  //     setStartTime("06:00");
  //     setEndTime("12:00");
  //   } else if (timeRange === 2) {
  //     setStartTime("12:00");
  //     setEndTime("17:00");
  //   } else if (timeRange === 3) {
  //     setStartTime("17:00");
  //     setEndTime("22:00");
  //   }
  // }, [timeRange]);

  console.log(startTime, endTime, "start, end");

  const updateResult = async () => {
    const data = {
      searchParam: searchQuery,
      maxPrice: range,
      minPrice: 0,
      session: sessionType === 1 ? "OneToOneSession" : "",
      sortby: sortBy,
      startTime,
      endTime,
    };
    console.log(timeRange, "timeRange");
    console.log(data, "data");
    dispatch(getMentors(data));
  };

  useEffect(() => {
    if (timeRange === 1) {
      setStartTime("06:00:00");
      setEndTime("12:00:00");
    } else if (timeRange === 2) {
      setStartTime("12:00:00");
      setEndTime("17:00:00");
    } else if (timeRange === 3) {
      setStartTime("17:00:00");
      setEndTime("22:00:00");
    }
  }, [timeRange]);

  const onSessionTypeChangeHandler = (e) => {
    console.log(e, "sessionType");
    setSessionType(e);
  };

  const onRangeChangeHandler = (e) => {
    console.log(e, "priceRange");
    setRange(e);
  };

  const onTimeChangeHandler = (e) => {
    console.log(e, "timeRange");
    setTimeRange(e);
  };

  const onSortByChangeHandler = (e) => {
    console.log(e, "sortBy");
    setSortBy(e);
  };

  useEffect(() => {
    updateResult();
  }, [range, sessionType, timeRange, sortBy]);

  return (
    <div className="search-mentors-page">
      <Container>
        <Card className="border text-secondary">
          <Card.Body className="d-flex justify-content-between p-4">
            <Stack direction="horizontal" gap={4}>
              <FormSelect
                value={sessionType}
                onChange={(e) => onSessionTypeChangeHandler(e.target.value)}
              >
                <option value={1}>1-on-1 Session</option>
                <option value={2}>Group Sessions</option>
              </FormSelect>
              <div style={{ minWidth: "200px" }}>
                <div className="fw-bold text-nowrap text-secondary text-center">{`$${range} - $10000`}</div>
                <FormRange
                  onChange={(e) => onRangeChangeHandler(e.target.value)}
                  min={0}
                  value={range}
                  max={10000}
                />
                <div
                  className="small d-flex justify-content-between text-black-50"
                  style={{ marginTop: "-8px" }}
                >
                  <div>0</div>
                  <div>10000</div>
                </div>
              </div>
              <FormSelect
                value={timeRange}
                onChange={(e) => onTimeChangeHandler(e.target.value)}
              >
                <option value={1}>Morning (6 AM to 12 PM)</option>
                <option value={2}>Afternoon (12PM - 5 PM)</option>
                <option value={3}>Evening (5PM - 10PM)</option>
              </FormSelect>
            </Stack>
            <div className="d-flex justify-content-center align-items-center">
              <FormGroup className="d-flex" controlId="formPlaintextEmail">
                <FormLabel column className="text-nowrap">
                  Sort By: &nbsp;
                </FormLabel>
                <FormSelect
                  value={sortBy}
                  onChange={(e) => onSortByChangeHandler(e.target.value)}
                >
                  <option value={1}>Recommended</option>
                  <option value={2}>Rating</option>
                  <option value={3}>Experience</option>
                  <option value={4}>Sessions</option>
                  <option value={5}>Price</option>
                </FormSelect>
              </FormGroup>
            </div>
          </Card.Body>
        </Card>
        <div className="mt-5">
          <h5 className="fw-bold">{mentors?.count ?? 0} Results</h5>
          <div className="py-4">
            <Stack gap={3}>
              {mentors?.data?.length ? (
                mentors?.data?.map((item) => (
                  <MentorCard key={item._id} item={item} />
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
