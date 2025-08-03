import A11 from '../Assets/A11.jpg';

function Products() {
    return (
        <><div>
            <h1 className="contact1">Our Products</h1>
            <div id="About1">
                <p className="contact2">At Pentonic, we pride ourselves on offering a comprehensive range of high-quality
                    automotive parts designed to meet the diverse needs of our customers. Our product portfolio includes
                    engine components, transmission parts, suspension systems, braking solutions, and electrical
                    accessories, all crafted with precision and durability in mind. We collaborate with leading
                    manufacturers to ensure each part adheres to the highest standards of safety and performance.
                    Whether you're a professional mechanic or a DIY enthusiast, Pentonic provides reliable,
                    innovative, and cost-effective solutions to keep your vehicle running smoothly and efficiently.
                    At Pentonic, we pride ourselves on offering a comprehensive range of high-quality automotive
                    parts designed to meet the diverse needs of our customers. Our product portfolio includes engine
                    components, transmission parts, suspension systems, braking solutions, and electrical accessories,
                    all crafted with precision and durability in mind. We collaborate with leading manufacturers to
                    ensure each part adheres to the highest standards of safety and performance.
                </p>
            </div>
            <div id="P2">
                <img id="contact_img" src={A11} alt="Contact Us" />
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

export default Products;
