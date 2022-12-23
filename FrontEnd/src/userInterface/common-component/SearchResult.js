import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import UserNavbar from  '../UserNavbar'
const SearchResult = () => {
  let searchResult = JSON.parse(localStorage.getItem("searchData"));
  console.log(searchResult);
  
  return (
    <>
    <UserNavbar/>
      <main>
        {/* <!-- Container START --> */}

        {/* <!-- Container START --> */}
        <div>
          <div class="container usersearch_body">
            <div class="row">
              <div class="col-lg-12 mx-auto">
                <div class="card">
                  <div class="card-body">
                    <div class="mx-auto  d-block   rounded ">
                      {/* <!-- Form START --> */}
                      <form class="align-items-end  d-flex  d-block gap-4">
                        {/* <!-- Duration --> */}
                        <div class="mb-2 mt-2 ">
                          <select
                            class="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Location</option>
                            <option value="comedy">Delhi</option>
                            <option value="dance">Noida</option>
                            <option value="family">Punjab</option>
                            <option value="music">Chandigarh</option>
                          </select>
                        </div>
                        {/* <!-- Date --> */}
                        <div class="mb-2 mt-2 ">
                          <select
                            class="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Price</option>
                            <option value="comedy">1000$</option>
                            <option value="dance">2000$</option>
                            <option value="family">500$</option>
                            <option value="music">100$</option>
                          </select>
                        </div>
                        {/* <!-- Time --> */}
                        <div class="mb-2 mt-2">
                          <select
                            class="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Time</option>
                            <option value="comedy">8:00</option>
                            <option value="dance">10:00</option>
                            <option value="family">12:00</option>
                            <option value="music">3:00</option>
                          </select>
                        </div>
                        <div class="mb-2 mt-2">
                          <select
                            class="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">Sessions</option>
                            <option value="comedy">1-to-1 Sessions</option>
                            <option value="dance">Group Sessions</option>
                          </select>
                        </div>
                        <div class="mb-2 mt-2 ms-auto">
                          <select
                            class="form-select js-choice choice-select-text-none"
                            data-position="bottom"
                            data-search-enabled="false"
                          >
                            <option value="category">
                              Short By Preference{" "}
                              <i class="fa fa-filter ms-1"></i>
                            </option>
                            <option value="comedy">Session</option>
                            <option value="dance">Group</option>
                          </select>
                        </div>
                      </form>

                      {/* <!-- Form END --> */}
                    </div>
                  </div>
                </div>

                <h5 class="mt-5">{searchResult.length} Results</h5>
                
                  {/* <!-- Fees images --> */}

                  {/* <!-- Card body START --> */}

                  {/* <!-- Experience item START --> */}
                  {searchResult.map((val, ind) => {
                    return (
                        <div class="card card-body mt-3 ">
                      <div class="d-flex justify-content-between align-item-center d-block">
                        <div>
                          <div class="d-flex">
                            {/* <!-- Avatar --> */}
                            <div class="avatarimg me-3">
                              <a href="#!">
                                {" "}
                                <img
                                  class="rounded-circle img-fluid-profile"
                                  src={val?.profilePicture || "assets/images/avatar/01.jpg"}
                                  alt="#"
                                />{" "}
                              </a>
                            </div>
                            {/* <!-- Info --> */}
                            <div>
                              <h6 class="card-title mb-0 d-flex gap-2">
                                <a href="#!">
                                  {val.firstName} {val.lastName}
                                </a>
                                {/* {
                                  val.price!==null?<p class="btn-outline-free text-center mb-0">
                                  {" "}
                                  <img
                                    src="assets/images/myimages/free.png"
                                    class="me-2"
                                    alt=""
                                  />
                                  {val?.price || ""}
                                </p>:''
                                } */}
                              </h6>
                              <p class="small  mb-1">
                                {" "}
                                <b>{val?.experiences[0].jobTitle}</b>{" "}
                              </p>
                              <p class="small mb-1">{val?.location || ""} </p>
                              <p class="small mb-0">
                                <i class="fa fa-briefcase me-1 text-purple"></i>
                                Cloud Architecture{" "}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div class="userlist_sect mb-0">
                              <p class="mb-0">
                                <ul class="d-flex list-unstyled">
                                  <li>
                                    <i class="fa-solid fa-star text-warning"></i>
                                  </li>
                                  <li>
                                    <i class="fa-solid fa-star text-warning"></i>
                                  </li>
                                  <li>
                                    <i class="fa-solid fa-star text-warning"></i>
                                  </li>
                                  <li>
                                    <i class="fa-solid fa-star text-warning text-muted"></i>
                                  </li>
                                  <li>
                                    <i class="fa-solid fa-star text-warning text-muted"></i>
                                  </li>
                                  <span class="ms-2">
                                    {" "}
                                    <b>{val?.rating || ""}</b>{" "}
                                    <small class="text-black"></small>{" "}
                                  </span>
                                </ul>
                              </p>
                            </div>
                            <Link
                              to=""
                              class="btn btn-sm btn-outline-pur btn-purple-soft btn-radius ms-5"
                            >
                              View Profile
                            </Link>
                          </div>
                        </div>
                      </div>
                      </div>
                    );
                  })}

                  {/* <!-- Card body END --> */}
                
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container END --> */}
      </main>
    </>
  );
};

export default SearchResult;
