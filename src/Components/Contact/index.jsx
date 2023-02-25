import {CgModem} from "react-icons/cg";

import Title from "../Elements/title";
import Buttons from "../Elements/buttons";

const Contact = () => {
    return (
        <div className="container shadow my-shadow-light section bg-linear-dark mb-5">
            <Title backgroundTitle="contact" title="Reach Me"/>
            <div className="row mt-3">
                <div className="col-md-4">
                    Social Icons and buttons here
                </div>
                <div className="col-md-8">
                    <div className="glass-morphic-content">
                        <form>
                            <div className="mb-3 mt-3">
                                <input type="text" className="form-control" id="fname" placeholder="Fullname"
                                       name="fname"/>
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter email"
                                       name="email"/>
                            </div>
                            <div className="mb-3 mt-3">
                                <input type="tel" className="form-control" id="phone" placeholder="Mobile (Optional)"
                                       name="phone"/>
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="message" name="message"
                                          placeholder="Enter message" rows={5}/>
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