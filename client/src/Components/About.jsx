import React from 'react'
import person from '../images/user.png';
// import {Link} from 'react-router-dom';
const About = () => {
  return (
    <>
        <div className="container emp-profile">
          <form method=''>
              <div className='row'>
                      <div className='col-md-4'>
                        <img src={person} alt="user_Image not Found" className='profile_photo'/>
                      </div>
                      <div className='col-md-6'>
                        <div className="profile-head">
                          <h5>Dharmesh Sonar</h5>
                          <h6>MERN Developer</h6>
                          <p className='profile-rating mt-3 mb-5'>RATINGS <span>1/10</span></p>
                          <ul className="nav nav-tabs" role="tablist">
                              <li className="nav-item">
                                <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab">About</a>
                              </li>
                              <li className="nav-item">
                              <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab">More</a>
                              </li>
                            </ul>
                        </div>
                      </div>
                      <div className='col-md-2'>
                        <input type="submit" value="Update Profile" name='btnAddMore' className='profile-edit-btn' />
                      </div>
              </div>
              <div className='row'>
                {/* left side url */}
                <div className='col-md-4'>
                      <div className="profile-work">
                        {/* <p>Work link</p> */}
                      </div>
                </div>
                {/* right side data toggle */}
                <div className='col-md-8 pl-5 about-info'>
                    <div className='tab-content profile-tab' id="myTabContent">
                      <div className='tab-pane fade show active' id="home" role="tabpanel" area-labelledby="home-tab">
                          <div className='row mt-5'>
                                <div className="col-md-6 ">
                                  <label>UserID</label>
                                </div>
                                <div className="col-md-6">
                                  <p>1251521</p>
                                </div>
                                <div className="col-md-6">
                                  <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Dharmesh</p>
                                </div>
                                <div className="col-md-6">
                                  <label>Contact No</label>
                                </div>
                                <div className="col-md-6">
                                  <p>74989828</p>
                                </div>
                                <div className="col-md-6">
                                  <label>Proffession</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Software Developer</p>
                                </div>
                                


                          </div>
                      </div>
                      <div className='tab-pane fade show active' id="profile" role="tabpanel" area-labelledby="home-tab">
                          <div className='row mt-5'>
                                <div className="col-md-6 ">
                                  <label>Work Experience</label>
                                </div>
                                <div className="col-md-6">
                                  <p>1(Year)</p>
                                </div>
                                <div className="col-md-6">
                                  <label>From(city)</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Malegaon,Nashik</p>
                                </div>
                                <div className="col-md-6">
                                  <label>State</label>
                                </div>
                                <div className="col-md-6">
                                  <p>Maharastra</p>
                                </div>
                                
                                


                          </div>
                      </div>
                    </div>
                </div>
              </div>
          </form>
        </div>
    </>
  )
}

export default About