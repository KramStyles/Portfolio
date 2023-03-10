import {CgModem} from "react-icons/cg";

import "./index.css";
import Buttons from "../Elements/buttons";
import Title from "../Elements/title";

const Contact = () => {
    return (
        <div className="container shadow my-shadow-light section bg-linear-dark mb-5 contact-section" id={"contact"}>
            <Title backgroundTitle="contact" title="Reach Me"/>
            <div className="row mt-3">
                <div className="col-md-4">
                    Social Icons and buttons here
                </div>
                <div className="col-md-8">
                    <div className="glass-morphic-content">
                        <form className="contact-form">
                            <div className="mb-3 mt-3">
                                <input type="text" className="form-control" id="fname" placeholder="Fullname"
                                       name="fname" autoComplete={"no"}/>
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter email"
                                       name="email" autoComplete={'no'}/>
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="tel" className="form-control" id="phone" placeholder="Mobile (Optional)"
                                       name="phone" autoComplete={'no'}/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="message" name="message"
                                          placeholder="Message" rows={5}/>
                            </div>
                            <Buttons btnText="Send Message" btnIcon={<CgModem/>}/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;