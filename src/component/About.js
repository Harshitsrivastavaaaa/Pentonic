import bg2 from '../Assets/bg2.jpg';
function About() {
    return (
        <><div>
            <h1 className="contact1">About Us</h1>
            <div id="About1">
                <p className="contact2">Pentonic is a prominent company specializing in the manufacturing and supply
                    of automotive parts. Known for its commitment to quality and innovation, Pentonic serves a diverse
                    range of automotive manufacturers and suppliers worldwide. The company focuses on producing components
                    that meet rigorous industry standards, including safety, durability, and performance requirements.
                    Pentonic's product portfolio typically includes a variety of parts such as engine components,
                    transmission parts, suspension systems, electrical components, and interior fixtures.
                    They leverage advanced manufacturing technologies and materials to ensure their parts contribute to
                    vehicle efficiency, safety, and comfort.In addition to manufacturing, Pentonic emphasizes research
                    and development to stay at the forefront of automotive technology, including electric vehicles and
                    autonomous driving systems. Their strategic collaborations and continuous improvement initiatives
                    aim to deliver reliable, cost-effective solutions to their clients.Overall, Pentonic is recognized
                    as a key player in the automotive parts industry, contributing to the evolution of modern vehicles
                    through innovative and high-quality components.
                </p>
            </div>
            <div id="A2">
                <img id="contact_img" src={bg2} alt="About Us" />
            </div>
        </div>
        <div className="footer">
                <p><center>© 2025 Pentonic Automotive India Pvt. Ltd. All rights reserved.</center></p>
                <p><center>Social Media:  
                    <a className="link1" href="https://www.facebook.com">Facebook</a>  
                    <a className="link1" href="https://www.twitter.com">Twitter</a>
                    <a className="link1" href="https://www.instagram.com">Instagram</a> 
                    <a className="link1" href="https://api.whatsapp.com/send/?phone=%2B917838217830&text&type=phone_number&app_absent=0">Whatsapp</a>
                </center></p>
            </div>
        </>
    );
}

export default About;
