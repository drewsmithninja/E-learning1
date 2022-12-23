import React from 'react'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <>
        {/* <!-- hero section  --> */}

        <div class=" padding-top-0 hero_section">
            <div class="row">
                <div class="col-lg-6 ps-sm-3 hero_text_section">
                    <div class="hero_heading">
                        <h1 className="font-style-zilla-slab">Welcome to your professional <span className="main-color"> lear</span>ning <span className="main-color">net</span>work</h1>
                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="What would you like to learn?"/>
                        <div class="input-group-append">
                            <button class="btn btn-secondary" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 hero_sub_position">
                    <img src="assets/images/public-pages/UpdatedHome.png" class="img-fluid d-flex mx-auto" id="desktop_view"/>
                    <img src="assets/images/public-pages/hero_mobile_view.png" class="img-fluid mx-auto"alt='pic' id="mobleview"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default React.memo(Hero)