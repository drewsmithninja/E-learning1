import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row, Stack, Spinner } from "react-bootstrap";
import { FaBriefcase, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMentorProfile } from "../features/mentor/mentorSlice";
import { Rating } from "react-simple-star-rating";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MentorProfile = ({ item }) => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const {mentorProfile, isLoading} = useSelector((state) => state.mentor);
  const [rating, setRating] = useState(5);
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index); // value: number, index: number
  const handleRating = (rate) => {
    console.log("Test");
    // other logic
  };
  const joinDate = new Date(mentorProfile?.createdAt);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getMentorProfile(id));
    }
  }, [id]);

  return (
    <div className="mentor-profile">
      {mentorProfile ? 
       <Container>
            <Row gap={4}>
                { /* Main content START */ }
                <div className="col-lg-8 vstack gap-4">
                    { /* My profile START */ }
                    <div className="card">
                        { /* Cover image */ }
                        <div className="h-200px rounded-top"
                            style={{backgroundImage:"url(../assets/images/bg/05.jpg)", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", height:'200px'}}>
                        </div>
                        { /* Card body START */ }
                        <div className="card-body py-0">
                            <div className="d-sm-flex align-items-start text-center text-sm-start">
                                <div>
                                    { /* Avatar */ }
                                    <div className="avatar avatar-xxl mt-n5 mb-3">
                                        <img className="avatar-img rounded-circle border border-white border-3"
                                            src={mentorProfile?.profilePicture} alt="" width={122} />
                                    </div>
                                </div>
                                <div className="ms-sm-4 mt-sm-3">
                                    { /* Info */ }
                                    <h1 className="mb-0 h5">{`${mentorProfile?.firstName} ${mentorProfile?.lastName}`} </h1>
                                    <p className="small mb-0">Cloud Architect, 6+ yrs experience</p>
                                    <p className="small mb-0"><i className="fa fa-briefcase me-1 text-purple"></i>
                                      {mentorProfile?.skills?.map((item) => {
                                           return <span key={item?._id}>{item?.title} </span> 
                                      })}</p>
                                </div>
                                { /* Button */ }
                                <div className="d-flex mt-3 justify-content-center ms-sm-auto">

                                    <div className="dropdown">
                                        { /* Card share action menu */ }

                                        { /* Card share action dropdown menu */ }
                                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profileAction2">
                                            <li>
                                                <a className="dropdown-item" href="#"> <i
                                                        className="bi bi-bookmark fa-fw pe-2"></i>Share profile in a
                                                    message</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i
                                                        className="bi bi-file-earmark-pdf fa-fw pe-2"></i>Save your profile
                                                    to PDF</a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i
                                                        className="bi bi-lock fa-fw pe-2"></i>Lock profile</a>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#"> <i
                                                        className="bi bi-gear fa-fw pe-2"></i>Profile settings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            { /* List profile */ }
                            <ul className="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                                { /* <li className="list-inline-item"><i className="bi bi-briefcase me-1"></i> Lead Developer</li> */ }
                                <li className="list-inline-item"><i className="bi bi-geo-alt me-1"></i> {mentorProfile?.location}</li>
                                <li className="list-inline-item"><i className="bi bi-calendar2-plus me-1"></i> Joined on {`${joinDate.getDate()} ${joinDate.getMonth()} ${joinDate.getFullYear()}`}</li>
                            </ul>
                        </div>
                        <h5 className="card-title ms-4 mt-3">Profile info</h5>
                        { /* Card body END */ }
                        <div className="card-body">
                            <div className="rounded border px-3 py-2 mb-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5>Overview</h5>

                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. A faucibus nec, nec sit ut
                                    blandit non scelerisque aliquam. Pellentesque feugiat et accumsan odio duis ipsum,
                                    duis platea. Sapien ultrices amet ridiculus fermentum
                                    ullamcorper at purus netus. Ornare tortor sed donec vitae ut sed. Lacinia purus
                                    scelerisque sed molestie. In convallis id aliquam ut sed condimentum. </p>
                            </div>
                            
                        </div>
                    </div>
                    { /* My profile END */ }
                    { /* skills section start here  */ }
                    <div className="col-sm-6 col-lg-12">
                        <div className="card">

                            <div className="card-header d-flex justify-content-between border-0">
                                <h5 className="card-title">I can mentor</h5>

                            </div>

                            <div className="card-body position-relative pt-0">
                                { /* Experience item START */ }
                                {mentorProfile?.skills?.map((item) => {
                                    return   <div className="d-flex justify-content-between" key={item?._id}> 

                                    { /* Info */ }
                                    <div>
                                        <h6 className="card-title mb-0"><a href="#!">{item?.title}</a></h6>
                                    </div>
                                    <Rating
                                        style={{ marginBottom: "5px" }}
                                        onClick={handleRating}
                                        onPointerEnter={onPointerEnter}
                                        onPointerLeave={onPointerLeave}
                                        onPointerMove={onPointerMove}
                                        initialValue={rating}
                                        readonly
                                        allowFraction
                                        size={22}
                                        fillIcon={<FaStar size={18} />}
                                        emptyIcon={<FaStar size={18} />}
                                      />
                                </div>
                                } )}


                            </div>
                            { /* Card body END */ }
                        </div>
                    </div>
                    { /* experience section start  */ }
                    <div className="col-sm-6 col-lg-12">
                        <div className="card">

                            <div className="card-header d-flex justify-content-between border-0">
                                <h5 className="card-title">Experience</h5>

                            </div>
 
                            <div className="card-body position-relative pt-0">
                                { /* Experience item START */ }
                                

                                    { /* Info */ }
                                    
                                      {mentorProfile?.experience?.map((item) => {
                                        return  <div className="d-flex" key={item?._id}>
                                           <div className="mt-4">
                                          <h6 className="card-title mb-1"><a href="#!"> {item?.jobTitle} </a></h6>
                                          <p className="mb-1 "> {item?.companyName}</p>
                                          <p className="mb-1 small">May 2018 - Present </p>
                                          <div className="mt-3">
                                          <p className="mb-0">
                                              Microsoft is a technology company offering transformational products and
                                              solutions in AdTech, MarTech, and deep tech to drive creative, media, data,
                                              and business transformation, helping global businesses become real-time,
                                              disruptive, and thereby achieve
                                              exponential growth. We are a geography agnostic, hybrid work culture, and
                                              agile company.
                                          </p>
                                          </div>
                                          </div>
                                          </div>
                                        })}
                                { /* Experience item END */ }

                            </div>
                            { /* Card body END */ }
                        </div>
                    </div>

                    { /* education section start  */ }

                    <div className="col-sm-6 col-lg-12">
                        <div className="card">
                            { /* Card header START */ }
                            <div className="card-header d-flex justify-content-between border-0">
                                <h5 className="card-title">Education</h5>

                            </div>
                            { /* Card header END */ }
                            { /* Card body START */ }
                            <div className="card-body position-relative pt-0">
                                { /* Experience item START */ }

                                {mentorProfile?.education?.map((item) => {
                                        return   <div className="d-flex" key={item?._id}>
                                          { /* Info */ }
                                          <div>
                                              <h6 className="card-title mb-1"><a href="#!"> {item?.degreeName} </a></h6>
                                              <p className="small">{item?.startYear} - {item?.endYear} </p>
                                          </div>
                                          </div>
                                        })}
                            </div>
                            { /* Card body END */ }
                        </div>
                    </div>
                    { /* certification section start  */ }
                    <div className="col-sm-6 col-lg-12">
                        <div className="card">
                            <div className="card-header d-flex justify-content-between border-0">
                                <h5 className="card-title">Certification</h5>
                            </div>
                            <div className="card-body position-relative pt-0">
                            {mentorProfile?.certification?.map((item) => {
                                        return   <div className="d-flex" key={item?._id}>
                                    { /* Info */ }
                                    <div>
                                        <h6 className="card-title mb-1"><a href="#!"> {item?.certificateName} </a></h6>
                                        <p className="small mb-1">{item?.issuingOrganization} </p>
                                        <p className="small mb-0">Issued by {item?.issueDate} </p>
                                    </div>
                                </div>
                                        })}
                                
                            </div>
                            { /* Card body END */ }
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-12">
                        <div className="card">
                            { /* Card header START */ }
                            <div className="card-header d-flex justify-content-between border-0">
                                <h5 className="card-title">Language</h5>
                            </div>
                            { /* Card header END */ }
                            { /* Card body START */ }
                            <div className="card-body position-relative pt-0">
                                { /* Experience item START */ }

                                {mentorProfile?.language?.map((item) => {
                                        return         <div className="d-flex" key={item?._id}>

                                        { /* Info */ }
                                        <div>
                                            <h6 className="card-title mb-0">{item?.language}</h6>
    
                                        </div>
                                    </div>
                                        })}
                            </div>
                            { /* Card body END */ }
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-12">
                        <div className="card">
                            { /* Card header START */ }
                            <div className="card-header  border-0">
                                <h5 className="card-title">Mentor having similar skills or topics</h5>
                            </div>

                            { /* Card header START */ }

                            { /* Card body START */ }
                            <div className="card-body">
                                <div className="tiny-slider arrow-hover">
                                    <div className="tiny-slider-inner ms-n4" data-arrow="true" data-dots="false"
                                        data-items-xl="3" data-items-lg="2" data-items-md="2" data-items-sm="2"
                                        data-items-xs="1" data-gutter="12" data-edge="30">
                                        { /* Slider items */ }

                                        <Carousel responsive={responsive}>
                                        <div>
                                            { /* Card add friend item START */ }
                                            <div className="card shadow-none text-center">
                                                { /* Card body */ }
                                                <div className="card-body p-2 pb-0">
                                                    <div className="avatar avatar-xl">
                                                        <a href="#!"><img className="avatar-img rounded-circle"
                                                                src={"../assets/images/myimages/rovert.png"} alt="" /></a>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3"> <a href="#!"> Robert Willsom </a>
                                                    </h6>
                                                    <p className="mb-1 small lh-sm">Cloud Architect, 6+ yrs experience</p>
                                                    <p className="mb-1 small lh-sm">AWS, Azure, Cloud Computing</p>
                                                </div>
                                                { /* Card footer */ }
                                                <div className="card-footer p-2 border-0">
                                                    <button className="btn btn-sm btn-primary-soft w-100"> View Profile
                                                    </button>
                                                </div>
                                            </div>
                                            { /* Card add friend item END */ }
                                        </div>
                                        <div>
                                            { /* Card add friend item START */ }
                                            <div className="card shadow-none text-center">
                                                { /* Card body */ }
                                                <div className="card-body p-2 pb-0">
                                                    <div className="avatar avatar-xl">
                                                        <a href="#!"><img className="avatar-img rounded-circle"
                                                                src={"../assets/images/myimages/rovert.png"} alt="" /></a>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3"> <a href="#!"> Robert Willsom </a>
                                                    </h6>
                                                    <p className="mb-1 small lh-sm">Cloud Architect, 6+ yrs experience</p>
                                                    <p className="mb-1 small lh-sm">AWS, Azure, Cloud Computing</p>
                                                </div>
                                                { /* Card footer */ }
                                                <div className="card-footer p-2 border-0">
                                                    <button className="btn btn-sm btn-primary-soft w-100"> View Profile
                                                    </button>
                                                </div>
                                            </div>
                                            { /* Card add friend item END */ }
                                        </div>
                                        <div>
                                            { /* Card add friend item START */ }
                                            <div className="card shadow-none text-center">
                                                { /* Card body */ }
                                                <div className="card-body p-2 pb-0">
                                                    <div className="avatar avatar-xl">
                                                        <a href="#!"><img className="avatar-img rounded-circle"
                                                                src={"../assets/images/myimages/rovert.png"} alt="" /></a>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3"> <a href="#!"> Robert Willsom </a>
                                                    </h6>
                                                    <p className="mb-1 small lh-sm">Cloud Architect, 6+ yrs experience</p>
                                                    <p className="mb-1 small lh-sm">AWS, Azure, Cloud Computing</p>
                                                </div>
                                                { /* Card footer */ }
                                                <div className="card-footer p-2 border-0">
                                                    <button className="btn btn-sm btn-primary-soft w-100"> View Profile
                                                    </button>
                                                </div>
                                            </div>
                                            { /* Card add friend item END */ }
                                        </div>
                                        <div>
                                            { /* Card add friend item START */ }
                                            <div className="card shadow-none text-center">
                                                { /* Card body */ }
                                                <div className="card-body p-2 pb-0">
                                                    <div className="avatar avatar-xl">
                                                        <a href="#!"><img className="avatar-img rounded-circle"
                                                                src={"../assets/images/myimages/rovert.png"} alt="" /></a>
                                                    </div>
                                                    <h6 className="card-title mb-1 mt-3"> <a href="#!"> Robert Willsom </a>
                                                    </h6>
                                                    <p className="mb-1 small lh-sm">Cloud Architect, 6+ yrs experience</p>
                                                    <p className="mb-1 small lh-sm">AWS, Azure, Cloud Computing</p>
                                                </div>
                                                { /* Card footer */ }
                                                <div className="card-footer p-2 border-0">
                                                    <button className="btn btn-sm btn-primary-soft w-100"> View Profile
                                                    </button>
                                                </div>
                                            </div>
                                            { /* Card add friend item END */ }
                                        </div>
                                          </Carousel>;
                                    </div>
                                </div>
                            </div>
                            { /* Card body END */ }
                        </div>

                    </div>



                    { /* Card feed item END */ }
                </div>
                { /* Main content END */ }

                { /* Right sidebar START */ }
                <div className="col-lg-4">

                    <div className="row g-4">

                        { /* Card START */ }
                        <div className="col-md-6 col-lg-12">

                            <div className="card">
                                <div className="card-header  border-0">
                                    <h5 className="mb-0">1-on-1 Session</h5>
                                </div>
                                <div className="card-body position-relative  pb-4">
                                    <div className="d-flex justify-content-between">
                                        { /* Info */ }
                                        <div>
                                            <h6 className="card-title mb-0 ">Availability  : </h6>
                                        </div>
                                        <p>Mon, Wed</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        { /* Info */ }
                                        <div>
                                            <h6 className="card-title mb-0"> Timing : </h6>
                                        </div>
                                        <p>4-6 PM, EST</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        { /* Info */ }
                                        <div>
                                            <h6 className="card-title mb-0">Skills : </h6>
                                        </div>
                                        <select name="Cloud Architect" id="Cloud Architect" className="user_proflie_select">
                                            {mentorProfile?.skills?.map((item) => {
                                           return <option value={item?.title} key={item?._id}>{item?.title} </option> 
                                               })}
                                        </select>
                                    </div>
                                    <div className="d-flex justify-content-between mt-3">
                                        { /* Info */ }
                                        <div>
                                            <h6 className="card-title mb-0 ">Pricing : </h6>
                                        </div>
                                        <p>$ 30</p>
                                    </div>
                                    <div className="">                                      
                                        <a href="/datetime" type="button" className="btn btn-primary-soft w-100">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card mt-3">
                                <div className="card-header  border-0">
                                    <h5 className="mb-0">Reviews</h5>
                                </div>


                                <div className="card-body position-relative pt-2 ">
                                    <h5 className="ratings_five mb-4"> 4.7 <span>Out of 5</span> </h5>
                                    <Rating
                                        style={{ marginBottom: "5px" }}
                                        onClick={handleRating}
                                        onPointerEnter={onPointerEnter}
                                        onPointerLeave={onPointerLeave}
                                        onPointerMove={onPointerMove}
                                        initialValue={rating}
                                        readonly
                                        allowFraction
                                        size={22}
                                        fillIcon={<FaStar size={18} />}
                                        emptyIcon={<FaStar size={18} />}
                                      />

                                    <div className="card">
                                        <div className="card-body position-relative pt-3 pb-3">
                                            <div className="d-flex mb-0">
                                                { /* Avatar */ }
                                                <div className="avatar status-online me-2">
                                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                            src={"../assets/images/myimages/profile.png"} alt="" /></a>
                                                </div>
                                                { /* Info */ }
                                                <div className="ms-2 w-100 ">
                                                    <div className="d-sm-flex justify-content-between">
                                                        <div>
                                                            <a className="h6 mb-0" href="#!">Ranier Poul</a>
                                                            <p className="d-block small mb-0"> Research Inter-UAE</p>

                                                        </div>


                                                    </div>

                                                </div>



                                            </div>
                                            <div className="d-flex mb-0">


                                                { /* Info */ }
                                                <div className=" w-100">
                                                    <div className="d-sm-flex justify-content-between align-items-center">
                                                        <div className="userlist_sect">
                                                            <p>
                                                            <Rating
                                        style={{ marginBottom: "5px" }}
                                        onClick={handleRating}
                                        onPointerEnter={onPointerEnter}
                                        onPointerLeave={onPointerLeave}
                                        onPointerMove={onPointerMove}
                                        initialValue={rating}
                                        readonly
                                        allowFraction
                                        size={22}
                                        fillIcon={<FaStar size={18} />}
                                        emptyIcon={<FaStar size={18} />}
                                      />
                                                            </p>


                                                        </div>
                                                        <p className="mb-0"><small>March 4, 2022</small></p>

                                                    </div>
                                                    <p className="mb-2"> <small className="text-dull"> Backend
                                                            Development</small></p>
                                                    <p className="d-block small para_sec">Gives you a good idea on what the
                                                        role of a full stack web developer is using front end technology
                                                        stacks and backend php.</p>

                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body position-relative pt-3 pb-3">
                                            <div className="d-flex mb-0">
                                                { /* Avatar */ }
                                                <div className="avatar  status-online me-2">
                                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                            src={"../assets/images/myimages/profile.png"} alt="" /></a>
                                                </div>
                                                { /* Info */ }
                                                <div className="ms-2 w-100">
                                                    <div className="d-sm-flex justify-content-between">
                                                        <div>
                                                            <a className="h6 mb-0" href="#!">Ranier Poul</a>
                                                            <p className="d-block small mb-0"> Research Inter-UAE</p>

                                                        </div>


                                                    </div>

                                                </div>



                                            </div>
                                            <div className="d-flex mb-0">
                                                { /* Avatar */ }

                                                { /* Info */ }
                                                <div className="ms-2 w-100">
                                                    <div className="d-sm-flex justify-content-between align-items-center">
                                                        <div className="userlist_sect">
                                                            <p>
                                                            <Rating
                                        style={{ marginBottom: "5px" }}
                                        onClick={handleRating}
                                        onPointerEnter={onPointerEnter}
                                        onPointerLeave={onPointerLeave}
                                        onPointerMove={onPointerMove}
                                        initialValue={rating}
                                        readonly
                                        allowFraction
                                        size={22}
                                        fillIcon={<FaStar size={18} />}
                                        emptyIcon={<FaStar size={18} />}
                                      />
                                                            </p>


                                                        </div>
                                                        <p className="mb-0"><small>March 4, 2022</small></p>

                                                    </div>
                                                    <p className="mb-2"> <small className="text-dull"> Backend
                                                            Development</small></p>
                                                    <p className="d-block small para_sec"> This is a great session with
                                                        clear explanations that are useful and interesting. Keep up the
                                                        great work!</p>

                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body position-relative pt-3 pb-3">
                                            <div className="d-flex mb-0">
                                                { /* Avatar */ }
                                                <div className="avatar  status-online me-2">
                                                    <a href="#!"><img className="avatar-img rounded-circle"
                                                            src={"../assets/images/myimages/profile.png"} alt="" /></a>
                                                </div>
                                                { /* Info */ }
                                                <div className="ms-2 w-100">
                                                    <div className="d-sm-flex justify-content-between">
                                                        <div>
                                                            <a className="h6 mb-0" href="#!">Ranier Poul</a>
                                                            <p className="d-block small mb-0"> Research Inter-UAE</p>

                                                        </div>


                                                    </div>

                                                </div>



                                            </div>
                                            <div className="d-flex mb-0">
                                                { /* Avatar */ }

                                                { /* Info */ }
                                                <div className="ms-2 w-100">
                                                    <div
                                                        className="d-sm-flex justify-content-between align-items-center mb-0">
                                                        <div className="userlist_sect">
                                                            <p>
                                                            <Rating
                                        style={{ marginBottom: "5px" }}
                                        onClick={handleRating}
                                        onPointerEnter={onPointerEnter}
                                        onPointerLeave={onPointerLeave}
                                        onPointerMove={onPointerMove}
                                        initialValue={rating}
                                        readonly
                                        allowFraction
                                        size={22}
                                        fillIcon={<FaStar size={18} />}
                                        emptyIcon={<FaStar size={18} />}
                                      />
                                                            </p>


                                                        </div>
                                                        <p className="mb-0"><small>March 4, 2022</small></p>

                                                    </div>
                                                    <p className="mb-2"> <small className="text-dull"> Backend
                                                            Development</small></p>
                                                    <p className="d-block small para_sec">Sessions for beginners and those
                                                        who wanted to brush up on the basics. Mentor's way of speaking
                                                        is engaging and easy to listen to.</p>

                                                </div>



                                            </div>
                                        </div>

                                    </div>
                                    <div className=" mt-3 text-center">
                                        <a href="#" className="text-purple">View More</a>
                                    </div>


                                </div>
                            </div>


                        </div>
                        { /* Card END */ }



                        { /* Card END */ }



                        { /* Card END */ }
                    </div>


                </div>

                { /* new section */ }



                { /* Right sidebar END */ }

            </Row>
            { /* Row END */ }
        </Container>
        :<Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> }
    </div>
  );
};

export default MentorProfile;
