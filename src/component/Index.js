import airfilter from '../Assets/airfilter.jpg';
import brakepad from '../Assets/brakepad.jpg';
import Carbody from '../Assets/Carbody.jpg';
import carplatform from '../Assets/carplatform.jpg';
import logo from '../Assets/logo.jpg';
import metalpart from '../Assets/metal part.jpg';
import oilcan from '../Assets/oilcan.jpg';
import parts from '../Assets/parts.jpg';
import projectsuspension from '../Assets/project suspension.jpg';
import rimstyres from '../Assets/rimstyres.jpg';
import suspension from '../Assets/suspension.jpg';
function Home() {
    return (
        <>
            <div>
                <div className="C1">
                    <div>
                        <h4 className="title">PENTONIC</h4>
                        <p className="subtitle">High Performance Automobile Parts</p>
                        <button id="B" type="button">
                            <a className="link" href="/Contact"> Know more </a>
                        </button>
                    </div>
                    <div>
                        <img id="page_1_figure" src={parts} height="500px" width="350px" alt="Pentonic items"/>
                        <img id="page_1_figures" src={logo} height="500px" width="350px" alt="Brand Logo"/>
                    </div>
                </div>
                <div className="all_cards">
                    <div className="CARD">
                        <img className="figure_in_card" src={airfilter} alt="parts" />
                        <h4 className="card_heading">Air Intake Filters</h4>
                        <button id= "bx" type="button">
                            <a className="link" href="https://www.amazon.in/Generic-Automotive-Filter-Tapered-Universal/dp/B01M6UN0NO/ref=sr_1_9?crid=3IW3Y2BPPMI6U&dib=eyJ2IjoiMSJ9.EPWi4f9TjNAQo0H40vmANX5E4GFqur7JiTHUTir3pxDPlEs2e6PqXGzY8SRICYtqpNlVFwQOh3LZhjSrVshV3Hb1dJnPEv1sLAkrqgs_5oXe16Y8Sg7RomKq5vRsuGMwxHj2ix6gXL8nAZwdb50zDnava06i6UQ90_9-exvthlMfRJx-rh82zdtFf1Ymt_yD1bB07FDa3VO_oJT5dleiKYs0uRFQ-sm1bdglei4luPk60bZh3V8qv0aUlheAz07IocrrXKKVVxkiJCljGyd1hX2Ju0Idj-1BK3wrDKhd4_8.Z_IG3q_OpDyEQkoIcTkqRAbkVXJVw7jXrMxlquUhkVs&dib_tag=se&keywords=car+air+filter&qid=1754262526&sprefix=car+air+filte%2Caps%2C377&sr=8-9">Order Now</a>
                        </button>
                    </div>
                    <div className="CARD">
                        <img className="figure_in_card" src={brakepad} alt="Disc Brakes" />
                        <h4 className="card_heading">Braking Systems</h4>
                        <button id= "bx" type="button">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>
                    <div className="CARD">
                        <img className="figure_in_card" src={metalpart} alt="Components" />
                        <h4 className="card_heading">High Tensile Steel Components</h4>
                        <button id= "bx" type="menu">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>
                </div>
                <div className="all_cards">
                    <div className="CARD">
                        <img className="figure_in_card" src={projectsuspension} alt="Service" />
                        <h4 className="card_heading">Service Kits</h4>
                        <button id= "bx" type="button">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>
                    <div className="CARD">
                        <img className="figure_in_card" src={rimstyres} alt="china2" />
                        <h4 className="card_heading">Rims & Tyres</h4>
                        <button id= "bx" type="button">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>
                    <div className="CARD">
                        <img className="figure_in_card" src={carplatform} alt="china3" />
                        <h4 className="card_heading">Body Frames</h4>
                        <button id= "bx" type="menu">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>
                </div>
                <div className="all_cards">
                    <div className="CARD">
                        <img className="figure_in_card" src={suspension} alt="china4" />
                        <h4 className="card_heading">High Performance Car Suspension Kits</h4>
                        <button id= "bx" type="button">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>
                    <div className="CARD">
                        <img className="figure_in_card" src={Carbody} alt="china2" />
                        <h4 className="card_heading">OEM Chassis</h4>
                        <button id= "bx" type="button">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>
                    <div className="CARD">
                        <img className="figure_in_card" src={oilcan} alt="china3" />
                        <h4 className="card_heading">Automotive Oil</h4>
                        <button id= "bx" type="menu">
                            <a className="link" href="https://boodmo.com/catalog/part-rear_brake_disc-58467341/">Order Now</a>
                        </button>
                    </div>                
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
export default Index;
