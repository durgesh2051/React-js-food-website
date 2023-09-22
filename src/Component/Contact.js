function Contact(){
    return(
        <>

<div id="contact" className="text-center">
  <div className="container text-center">
    <div className="col-md-4">
      <h3>Reservations</h3>
      <div className="contact-item">
        <p>Please call</p>
        <p>(887) 654-3210</p>
      </div>
    </div>
    <div className="col-md-4">
      <h3>Address</h3>
      <div className="contact-item">
        <p>4321 California St,</p>
        <p>San Francisco, CA 12345</p>
      </div>
    </div>
    <div className="col-md-4">
      <h3>Opening Hours</h3>
      <div className="contact-item">
        <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
        <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="section-title text-center">
      <h3>Send us a message</h3>
    </div>
    <div className="col-md-8 col-md-offset-2">
      <form name="sentMessage" id="contactForm" novalidate>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input type="text" id="name" className="form-control" placeholder="Name" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input type="email" id="email" className="form-control" placeholder="Email" required="required"/>
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required></textarea>
          <p className="help-block text-danger"></p>
        </div>
        <div id="success"></div>
        <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
      </form>
    </div>
  </div>
</div>
        </>
    );
}

export default Contact;