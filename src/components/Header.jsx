import React, { Component } from "react";
import "../css/header.css";
import "../css/header";


class Header extends Component {
  render() {
    return (
      <div>
            <div className="main_slider js_height">
                <div className="main_slider_wrap" id="main_slider_wrap">
                <div className="slide">
                    <div className="bg-img" style={{ backgroundImage:`url("https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")` }}></div>
                    <div className="wrap">
                        <div className="wrap_float js_height">
                            <div className="slide_content">
                                <div className="title_wrap">
                                    <p className="country">Thailand</p>
                                    <h2 className="slide_title">Pattaya</h2>
                                </div>
                                <p className="text">
                                    Pattaya is a city on Thailand’s eastern Gulf coast known for its beaches. A quiet fishing village as recently as the 1960s.
                                </p>
                                <div className="buttons">
                                    <a href="/" className="btn button">Book now</a>
                                    <a href="/" class="link"><span>Choose tour</span></a>
                                </div>
                                <div className="next_title">Pattaya</div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="slide">
                    <div className="bg-img" style={{backgroundImage:"url('https://images.pexels.com/photos/1031659/pexels-photo-1031659.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')"}}></div>
                    <div className="wrap">
                        <div className="wrap_float js_height">
                            <div className="slide_content">
                                <div className="title_wrap">
                                    <h2 className="slide_title">Bangkok</h2>
                                </div>
                                <p className="text">
                                    Bangkok, Thailand’s capital, is a large city known for ornate shrines and vibrant street life.
                                </p>
                                <div className="buttons">
                                    <a href="/" class="btn button">Book now</a>
                                    <a href="/" className="link"><span>Choose tour</span></a>
                                </div>
                                <div className="next_title">Bangkok</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slide">
                    <div className="bg-img" style={{backgroundImage:"url('https://images.pexels.com/photos/257433/pexels-photo-257433.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')"}}></div>
                    <div className="wrap">
                        <div className="wrap_float js_height">
                            <div className="slide_content">
                                <div className="title_wrap">
                                    <p className="country">Thailand</p>
                                    <h2 className="slide_title">Phuket</h2>
                                </div>
                                <p className="text">
                                    Phuket, a rainforested, mountainous island in the Andaman Sea, has some of Thailand’s most popular beaches, mainly situated along the clear waters of the western shore.
                                </p>
                                <div className="buttons">
                                    <a href="/" className="btn button">Book now</a>
                                    <a href="/" className="link"><span>Choose tour</span></a>
                                </div>
                                <div className="next_title">Phuket</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrows">
                <div className="arrow prev"></div>
                <div className="arrow next"></div>
            </div>
        </div>
      </div>
    );
    
  }
}

export default Header;
