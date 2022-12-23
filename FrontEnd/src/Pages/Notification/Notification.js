import React from 'react'
import UserNavbar from '../../userInterface/UserNavbar'

const Notification = () => {
  return (
    <>

    <UserNavbar />
      <main>
    
        <div class="container">
            <div class="row g-4">
               
                <div class="col-lg-12 mx-auto">
                   
                    <div class="card">
                        <div class="card-header py-3 border-0 d-flex align-items-center justify-content-between">
                            <h1 class="h5 mb-0">Notifications</h1>
                           
                            <div class="dropdown">
                                <a href="#" class="text-secondary btn btn-secondary-soft-hover py-1 px-2" id="cardNotiAction" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bi bi-three-dots"></i>
                                </a>
                              
                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction">
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="bi bi-check-lg fa-fw pe-2"></i>Mark all read
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Push notifications
                                        </a>
                                    </li>
                                    <li>
                                        <a class="dropdown-item" href="#">
                                            <i class="bi bi-bell fa-fw pe-2"></i>Email notifications
                                        </a>
                                    </li>
                                </ul>
                            </div>
                          
                        </div>
                        <div class="card-body p-2">
                            <ul class="list-unstyled">
                            
                                <li>
                                    <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="" />
                                        </div>
                                       
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small mb-2">
                                                Hi William, Welcome to Learnet. Please complete your profile by adding profile picture, title, overview, topics/skills for learn and mentor
                                            </p>
                                         
                                            <div class="d-flex">
                                                <button class="btn btn-sm py-1 btn-purple  btn-purple-soft me-2">
                          Complete your profile
                        </button>

                                            </div>
                                        </div>
                                     
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">Just now</p>
                                    
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                            
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction1">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </li>
                          
                                <li>
                                    <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="" />
                                        </div>
                                     
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small mb-2">
                                                Hi William, please configure your availability and pricing for 1-on-1 sessions
                                            </p>
                                         
                                            <div class="d-flex">
                                                <button class="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                          Set your availability
                        </button>
                                                <button class="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                          Set pricing
                        </button>

                                            </div>
                                        </div>
                                    
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">5 min ago</p>
                                         
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction2" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                           
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction2">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </li>
                             
                                <li>
                                    <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <div class="avatar-img rounded-circle bg-success">
                                                <span class="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                            </div>
                                        </div>
                                      
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small mb-2">
                                                A new 1-on-1 session has been booked by John for Cloud Computing on 25 Sep, 11 AM.
                                            </p>
                                            <div class="d-flex">
                                                <button class="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                          Accept
                        </button>
                                                <button class="btn btn-sm py-1 btn-danger-soft1 btn-danger1 me-2">
                          Reject
                        </button>

                                            </div>

                                        </div>
                                 
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">2 hours ago</p>
                                         
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                              
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction3">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </li>
                               
                                <li>
                                    <div class="rounded badge-unread d-sm-flex border-0 mb-1 p-3 position-relative">
                                    
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="" />
                                        </div>
                                       
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small mb-0">Reminder: 1-on-1 session booked by John for Cloud Computing will start in next 24 hours..</p>

                                        </div>
                                      
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">20min</p>
                                        
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction6" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                             
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction6">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </li>
                             
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/04.jpg" alt="" />
                                        </div>
                                   
                                        <div class="mx-sm-3 my-2 my-sm-0">



                                            <p class="small mb-0">Reminder: 1-on-1 session booked by John for Cloud Computing will start in next 1 hour. </p>
                                        </div>
                               
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">3hrs</p>
                                        
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction7" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                              
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction7">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </li>
                              
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                   
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/logo/08.svg" alt="" />
                                        </div>
                                   
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small mb-0">1-on-1 session booked by John for Cloud Computing is started. </p>


                                        </div>
                                   
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">5hrs</p>
                                         
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction8" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                         
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction8">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </li>
                               
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                       
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                1-on-1 session booked by John for Cloud Computing is completed.
                                            </p>


                                        </div>
                                       
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">5hrs</p>
                                    
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                             
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                       
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                     
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                      
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                1-on-1 session booked by John for Cloud Computing is completed. Please give your feedback. Provide your feedback
                                            </p>


                                        </div>
                                   
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">5hrs</p>
                                        
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                            
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                    
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                     
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                A new enrollment is done booked by John for Cloud Computing group session on 25 Sep, 11 AM.
                                            </p>


                                        </div>
                                   
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">34 Min</p>
                                          
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                              
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                   
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                Reminder: A group session on Cloud Computing will start in next 24 hours.
                                            </p>


                                        </div>
                                    
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">1hrs</p>
                                           
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                          
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                       
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                       
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                Reminder: A group session for Cloud Computing will start in next 1 hour.
                                            </p>


                                        </div>
                                        
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">5hrs</p>
                                        
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                               
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                     
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                Group session for Cloud Computing is started.
                                            </p>


                                        </div>
                                      
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">3hrs</p>
                                       
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                           
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                      
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                      
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                      
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                Group session for Cloud Computing is completed.
                                            </p>


                                        </div>
                                  
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">6hrs</p>
                                          
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                              
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                    
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                       
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                Group session for Cloud Computing is completed. Please give your feedback. Provide your feedback
                                            </p>


                                        </div>
                           
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">1hr</p>
                                        
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                               
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                     
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                    
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                John wants to connect with you.
                                            </p>
                                            <div class="d-flex mt-2">
                                                <button class="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                        Accept
                      </button>
                                                <button class="btn btn-sm py-1 btn-danger1  me-2">
                        Ignore
                      </button>

                                            </div>



                                        </div>
                                        
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">10hrs</p>
                                            
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                              
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                        
                                        <div class="avatar text-center">
                                            <img class="avatar-img rounded-circle" src="assets/images/avatar/07.jpg" alt="" />
                                        </div>
                                   
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small m-0">
                                                Andy tagged you to read a post
                                            </p>
                                            <div class="mt-2">
                                                <a href="#">Read Link</a>


                                            </div>



                                        </div>
                                    
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">5hrs</p>
                                            
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction9" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                                
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction9">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div class="rounded d-sm-flex border-0 mb-1 p-3 position-relative">
                                  
                                        <div class="avatar text-center">
                                            <div class="avatar-img rounded-circle bg-success">
                                                <span class="text-white position-absolute top-50 start-50 translate-middle fw-bold">WB</span>
                                            </div>
                                        </div>
                                       
                                        <div class="mx-sm-3 my-2 my-sm-0">
                                            <p class="small mb-2">
                                                Andy tagged you to learn a skill
                                            </p>
                                            <div class="d-flex">
                                                <button class="btn btn-sm py-1 btn-purple  btn-purple-soft  me-2">
                                                  Book Now
                      </button>


                                            </div>

                                        </div>
                                     
                                        <div class="d-flex ms-auto">
                                            <p class="small me-5 text-nowrap">12 hours ago</p>
                                    
                                            <div class="dropdown position-absolute end-0 top-0 mt-3 me-3">
                                                <a href="#" class="z-index-1 text-secondary btn position-relative py-0 px-2" id="cardNotiAction3" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="bi bi-three-dots"></i>
                                                </a>
                                           
                                                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cardNotiAction3">
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-trash fa-fw pe-2"></i>Delete</a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-bell-slash fa-fw pe-2"></i>Turn off
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a class="dropdown-item" href="#">
                                                            <i class="bi bi-volume-mute fa-fw fs-5 pe-2"></i>Mute Judy Nguyen
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                         
                                        </div>
                                    </div>
                                </li>


                            </ul>
                        </div>
                        <div class="card-footer border-0 py-3 text-center position-relative d-grid pt-0">
                         
                            <a href="#!" role="button" class="btn btn-loader btn-primary-soft" data-bs-toggle="button" aria-pressed="true">
                                <span class="load-text"> Load more notifications </span>
                                <div class="load-icon">
                                    <div class="spinner-grow spinner-grow-sm" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </a>
                       
                        </div>
                    </div>
                  
                </div>
            </div>
           
        </div>
       
    </main>
    </>
  )
}

export default Notification