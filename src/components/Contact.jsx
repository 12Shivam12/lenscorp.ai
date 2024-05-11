import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');

    

    return (
        <div className="NewContact_container__uG6JO">
            <div className="NewContact_left__0bxLz">
                <h2 className="NewContact_head__VtrxH">Get in touch with us</h2>
                <p className="NewContact_subHead__f5Lgr">Send your enquiry now!</p>
                <form className="NewContact_inputField__6ePN3" >
                    <input
                        type="email"
                        className="NewContact_input__sgdfh"
                        placeholder="Enter email address"
                        required=""
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="NewContact_button__0335_" type="submit">Request Demo</button>
                </form>
            </div>
            <div className="NewContact_right__N6g_I">
                <img alt="map" loading="lazy" width="720" height="538" decoding="async" data-nimg="1"
                    className="NewContact_img__GUuU5" style={{ color: 'transparent' }}
                    // srcSet="2Fmap_2_white.1bdb3808.png"
                    src='https://lenscorp.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmap_2_white.1bdb3808.png&w=750&q=75' />
            </div>
        </div>
    );
}

export default Contact;