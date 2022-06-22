import React from "react";
import { Routes, Route } from "react-router-dom";
import Slider from './Slider'

function Travel() {
    return (
            <div className="container-fluid" id="tr">
                <p className="text-center text-danger display-3"><em>TRANSPORT</em></p>
                <div className="row">
                    <div className="col-md-12 col-md-11 col-lg-9 mx-auto">
                        <p className="text-secondary" style={{ fontSize: "20px", fontFamily: "unset" }}><em>Telangana is a popular destination for tourists not just
                            from around the country, but also from around the world.
                            The rich cultural heritage and the unique diversity offered by the state is a novel selling point.</em></p>
                        <br></br>
                        <p className="text-secondary" style={{ fontSize: "20px", fontFamily: "unset" }}><em>There are impressive numbers of tourists
                            thronging the state where they can experience the rich cultural heritage and the exquisite historic treasures,
                            which is a testimony to the state of Telangana. In order to serve the needs of the tourists better,
                            the tourism department has deployed an efficient network of tourist buses. The services offered by Telangana Tourism are of highest notable standards,
                            keeping in mind the safety and convenience of travellers, with a focus on delivering the feel of luxury!</em></p>
                    </div>
                </div>
                <br></br>
                <article class="clearfix row">
                    <div class="col-md-11 col-sm-12 col-lg-9 mx-auto">
                        <h3 style={{ fontSize: "30px", fontFamily: "unset" }}><em>The Transport Vehicles of Telangana Tourism are:</em></h3>
                        <p className="text-secondary" style={{ fontSize: "20px", fontFamily: "unset" }}>
                            <em>• Reliable
                                <br /> • Safe
                                <br /> • Clean
                                <br /> • Travel-friendly
                                <br /> • Well-maintained
                                <br /> • Duly Furnished</em>
                        </p>
                        <div>
                            <Routes>
                                <Route path="/" element={<Slider />} />
                            </Routes>
                        </div>
                    </div>
                </article>
                <br></br>
                <article class="clearfix row">
                    <div class="col-md-11 col-sm-12 col-lg-9 mx-auto">
                        <h3 style={{ fontSize: "30px", fontFamily: "unset" }}><em>What Makes Tourism Services Unique?</em></h3>
                        <p className="text-secondary" style={{ fontSize: "20px", fontFamily: "unset" }}>
                            <em>The Tourism buses are well maintained while all the standard road safety measures are duly followed.
                                <br />
                                <br />
                                The transport vehicles of Telangana Tourism offer a stress-free travel experience to all the visitors. Our drivers are well
                                trained to handle heavy vehicle flow and risky ghat roads. They are well experienced to handle the trickiest of roads as they
                                undergo periodic training where they are specially instructed about road safety, ensuring maximum comfort for the tourists,
                                who are the much-respected guests for the state.
                                <br />
                                <br /> In addition, Telangana Tourism understands that driving through long distances and for long hours is tiresome
                                for the driver. Keeping this in mind, we appoint two drivers for every 350 kilometers. Due to the highest priority given
                                by the Tourism department for its safe driving practices, our drivers tend to be even more careful to keep up with the reputation.</em>
                        </p>
                    </div>
                </article>
                <br></br>
                <article class="clearfix row">
                    <div class="col-md-11 col-sm-12 col-lg-9 mx-auto">
                        <h3 style={{ fontSize: "30px", fontFamily: "unset" }}><em>Importance</em></h3>
                        <p className="text-secondary" style={{ fontSize: "20px", fontFamily: "unset" }}>
                            <em>Telangana Tourism does not believe in according a mere ‘guest’ status to tourists. The tourism department
                                strives to ensure that tourists are treated with utmost respect and there is a high emphasis on their comfort.
                                <br />
                                Unless they are at ease, it is not possible to visit places with much interest. We believe that when
                                we can take good care of the basic infrastructure, then the rest would fall in place. Our transport services are hygienic,
                                cleaned regularly and they are refurbished to offer an energizing feel for those using them to reach the ubiquitous tourist spots of Telangana state.</em>
                        </p>
                    </div>
                </article>
            </div>
    )
}

export default Travel;