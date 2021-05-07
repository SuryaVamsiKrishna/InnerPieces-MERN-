import {React, ReactDOM} from "react";
// import { Form, Field } from "@progress/kendo-react-form";
import Paypal from "./Paypal";
import "./css/animate.css";
import "./css/bootstrap.min.css";
import "./css/custom.css";
import "./css/flashy.min.css";
import "./css/flaticon.css";
import "./css/font-awesome.min.css";
import "./css/magnific-popup.css";
import "./css/owl.carousel.min.css";
import "./css/pogo-slider.min.css";
import "./css/responsive.css";
import "./css/responsiveslides.css";
import "./css/style.css";
import "./css/timeline.css";
import "./css/responsive.css";
import "./fonts/Flaticon.svg";
import "./fonts/fontawesome-webfont.svg";
import "./fonts/fontawesome-webfont.eot";


function Booking() {

  return (
<div id="appointment" class="appointment-main">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="title-box">
						<h2>Appointment</h2>
						<p>Enter the required details to book an appointment </p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-6 col-md-6">
					<div class="well-block">
                        <div class="well-title">
                            <h2>Book an Appointment</h2>
                        </div>
                        <form>
                            {/* <!-- Form start --> */}
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="name">Name</label>
                                        <input id="name" name="name" type="text" placeholder="Name" class="form-control input-md"/>
                                    </div>
                                </div>
                                {/* <!-- Text input--> */}
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="email">Email</label>
                                        <input id="email" name="email" type="text" placeholder="E-Mail" class="form-control input-md"/>
                                    </div>
                                </div>
                                {/* <!-- Text input--> */}
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="date">Preferred Date</label>
                                        <input id="date" name="date" type="text" placeholder="Preferred Date" class="form-control input-md"/>
                                    </div>
                                </div>
                                {/* <!-- Select Basic --> */}
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label class="control-label" for="time">Preferred Time</label>
                                        <select id="time" name="time" class="form-control">
                                            <option value="8:00 to 9:00">8:00 to 9:00</option>
                                            <option value="9:00 to 10:00">9:00 to 10:00</option>
                                            <option value="10:00 to 1:00">10:00 to 11:00</option>
                                            <option value="10:00 to 1:00">11:00 to 12:00</option>
                                        </select>
                                    </div>
                                </div>
                                {/* <!-- Select Basic --> */}
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label class="control-label" for="appointmentfor">Describe your problem in few words</label>
                                        <input id="description" name="name" type="text" placeholder="Problem" class="form-control input-md"/>
                                    </div>
                                </div>
                                {/* <Paypal/> */}
                                <br/><br/><br/>
                                {/* <!-- Button --> */}
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button id="singlebutton" name="singlebutton" class="new-btn-d br-2">Make An Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        {/* <!-- form end --> */}
                    </div>
				</div>
				<div class="col-lg-6 col-md-6">
					<div class="well-block">
                        <div class="well-title">
                            <h2>Why Appointment with Us</h2>
                        </div>
                        <div class="feature-block">
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">8:00am-12:00noon</h4>
                                <div class="feature-content">
                                    <p>Integer nec nisi sed mi hendrerit mattis. Vestibulum mi nunc, ultricies quis vehicula et, iaculis in magnestibulum.</p>
                                </div>
                            </div>
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">Experienced Doctors</h4>
                                <div class="feature-content">
                                    <p>Aliquam sit amet mi eu libero fermentum bibendum pulvinar a turpis. Vestibulum quis feugiat risus. </p>
                                </div>
                            </div>
                            <div class="feature feature-blurb-text">
                                <h4 class="feature-title">Low Price and Fees</h4>
                                <div class="feature-content">
                                    <p>Praesent eu sollicitudin nunc. Cras malesuada vel nisi consequat pretium. Integer auctor elementum nulla suscipit in.</p>
                                </div>
                            </div>
                        </div>
                    </div>
				</div>
			</div>
		</div>
    
 
	</div>

  
  );
}

export default Booking;