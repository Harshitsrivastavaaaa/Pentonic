import oilpump from '../Assets/oilpump.jpg';
function Contact() {
    return (
        <><div>
            <h1 className="contact1">Contact Us</h1>
            <div id="About1">
                <form id="contact_form" action="/submit" method="post">
                    <p>
                        <label htmlFor="fullname">Full Name:</label>
                        <input type="text" name="fullname" required />
                    </p>
                    <p>
                        <label htmlFor="contactnumber">Contact Number:</label>
                        <input type="password" name="contactnumber" required />
                    </p>
                    <p>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="comments">Comments:</label>
                        <textarea name="comments" rows="4" cols="30"></textarea>
                    </p>
                    <p>
                        <input type="submit" value="Submit" />
                    </p>
                </form>
            </div>
            <div id="C2">
                <img id="contact_img" src={oilpump} alt="Contact Us" />
            </div>
        </div><div className="footer">
                <p><center>© 2025 Pentonic Automotive India Pvt. Ltd. All rights reserved.</center></p>
                <p><center>Social Media:
                    <a className="link1" href="https://www.facebook.com">Facebook</a>
                    <a className="link1" href="https://www.twitter.com">Twitter</a>
                    <a className="link1" href="https://www.instagram.com">Instagram</a>
                    <a className="link1" href="https://api.whatsapp.com/send/?phone=%2B917838217830&text&type=phone_number&app_absent=0">Whatsapp</a>
                </center></p>
            </div></>
        
    );
}

export default Contact;
