import React, { useState } from "react";
import {
  Container,
  Form,
  InputGroup,
  Nav,
  Button,
  Navbar,
  NavDropdown,
  Row,
  Col,
  Stack,
  Image,
} from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import {
  BsBellFill,
  BsCardText,
  BsChatRightTextFill,
  BsFillCalendarCheckFill,
  BsFillHouseFill,
  BsGearFill,
  BsLifePreserver,
  BsPower,
} from "react-icons/bs";
import { NavLink } from "./navLink";
import userAvatar from "../../assets/images/avatar/07.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMentors, setSearchQuery } from "../../features/mentor/mentorSlice";

const NavLoggedIn = () => {
  const searchQuery = useSelector((state) => state.mentor.searchQuery);
  const dispatch = useDispatch();

  const onSearchHandler = () => {
    const data = {
      searchParam: searchQuery,
      maxPrice: 10000,
      minPrice: 0,
      session: "1-on-1 Session",
      sortby: 1,
      startTime: "12:00:00",
      endTime: "18:30:00",
    };
    dispatch(getMentors(data));
  };

  return (
    <Navbar bg="white" expand="lg" className="sticky-top mb-4">
      <Container>
        <Row className="w-100">
          <Col className="d-flex align-items-center justify-content-center">
            <Navbar.Brand as={Link} className="fs-4">
              ATSPL
            </Navbar.Brand>
            <InputGroup className="my-2 my-lg-0 border rounded-pill border-primary">
              <Form.Control
                size="lg"
                placeholder="What would you like to learn?"
                aria-label="What would you like to learn?"
                aria-describedby="basic-addon2"
                className="rounded-pill rounded-end border border-0"
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                onKeyUp={(e) => {
                  if (e.key === "Enter") onSearchHandler();
                }}
              />
              <Button
                variant="primary"
                className="rounded-pill rounded-start bg-primary"
                onClick={(e) => onSearchHandler(e)}
              >
                <div className="d-flex mx-2">
                  <FaSearch />
                </div>
              </Button>
            </InputGroup>
          </Col>
          <Col className="d-flex align-items-center">
            <Navbar.Collapse id="ATSPL">
              <Nav
                className="ms-auto my-2 my-lg-0 d-flex justify-content-center align-items-center"
                style={{ maxHeight: "100px" }}
              >
                <Stack direction="horizontal" gap={2}>
                  <NavLink icon={<BsFillHouseFill />} label="Home" />
                  <NavLink
                    icon={<BsFillCalendarCheckFill />}
                    label="Sessions"
                  />
                  <NavLink icon={<BsChatRightTextFill />} label="Home" />
                  <NavLink icon={<BsBellFill />} label="Notifications" />
                  <NavLink icon={<BsGearFill />} label="Settings" />
                  <NavDropdown
                    align="end"
                    title={
                      <Image
                        className="rounded"
                        width={40}
                        height={40}
                        src={userAvatar}
                      />
                    }
                  >
                    <NavDropdown.Item href="#action3">
                      <Stack direction="horizontal" gap={2}>
                        <Image
                          width={48}
                          height={48}
                          roundedCircle
                          alt="user-Image"
                          src={userAvatar}
                        />
                        <div>
                          <Link class="h6 fw-bold stretched-link">
                            Sam Lanson
                          </Link>
                          <p class="small m-0">Web Developer</p>
                        </div>
                      </Stack>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Button className="w-100" size="sm">
                        View Profile
                      </Button>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <div className="d-flex align-items-center">
                        <BsGearFill />
                        <div className="px-2">Settings &amp; Privacy</div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <div className="d-flex align-items-center">
                        <BsLifePreserver />
                        <div className="px-2">Support</div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <div className="d-flex align-items-center">
                        <BsCardText />
                        <div className="px-2">Documentation</div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>
                      <div className="d-flex align-items-center">
                        <BsPower />
                        <div className="px-2">Sign Out</div>
                      </div>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Dark Mode"
                      />
                    </NavDropdown.Item>
                  </NavDropdown>
                </Stack>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="ATSPL" />
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavLoggedIn;
