import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contact_info'>
          <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-10 offset-lg-1 d-flex justify-content-between'>
                      <div className='contact_info_item d-flex justify-content-start align-item-center'  >
                            <img src='https://cdn-icons.flaticon.com/png/512/3059/premium/3059971.png?token=exp=1645966923~hmac=10c14487a63359d8d5743cb372c14825' alt='contact' style={{width:"40px",height:"40px"}} />
                              <div className='contact_info_content'>
                                  <div className='contact_info_title'>
                                    Contact
                                  </div>
                                  <div className='contact_info_text'>
                                    +91 7776838671
                                  </div>
                              </div>
                      </div>


                      <div className='contact_info_item d-flex justify-content-start align-item-center'  >
                            <img src='https://cdn-icons-png.flaticon.com/512/1177/1177437.png' alt='contact' style={{width:"40px",height:"40px"}} />
                              <div className='contact_info_content'>
                                  <div className='contact_info_title'>
                                    Email
                                  </div>
                                  <div className='contact_info_text'>
                                    dsonar333@gmail.com
                                  </div>
                              </div>
                      </div>


                      <div className='contact_info_item d-flex justify-content-start align-item-center'  >
                            <img src='https://cdn-icons.flaticon.com/png/512/1433/premium/1433265.png?token=exp=1645968052~hmac=512d0dece2d7f4a8651d61996a550f09' alt='contact' style={{width:"40px",height:"40px"}} />
                              <div className='contact_info_content'>
                                  <div className='contact_info_title'>
                                    Address
                                  </div>
                                  <div className='contact_info_text'>
                                    Nashik,MH
                                  </div>
                              </div>
                      </div>
                      
                  </div>
                </div>
          </div>
      </div>

      {/* contact Us form */}
      <div className='contact-form'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-10 offset-lg-1'>
                <div className='contact_form_container py-5 border-1'>
                      <div className='contact_form_title'>
                          Get In Touch
                      </div>
                      <form id="contact_form">
                            <div className="contact_form_name d-flex justify-content-between align-item-between">
                                <input type="text" id="contact_form_name" className='contact_form_name input_field' placeholder='Your Name' required/>
                                <input type="email" id="contact_form_email" className='contact_form_email input_field' placeholder='Your Email' required/>
                                <input type="number" id="contact_form_phone" className='contact_form_phone input_field' placeholder='Your Contact No.' required/>

                            </div>
                            <div className='contact_form_text mt-5'>
                              <textarea className='text_field contact_info_message' id='' placeholder="Message" cols="30" rows="10"></textarea>
                            </div>
                            <div className="contact_form_button">
                              <button type="submit" className="button  contact_submit_button">Send Message</button>
                            </div>
                      </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Contact