import React, { useEffect } from "react";

import $ from "jquery";

import "./slick/slick.js";

import Footer from "./Footer";
import Menu from "./Menu";

const Home = () => {
  useEffect(() => {
    $(".carousel-landing").slick({
      infinite: true,
      speed: 1000,
      centerMode: true,
      variableWidth: true,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });

    $(".carousel-category").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }, []);

  return (
    <div>
      <Menu />
      <section>
        <div className="carousel-landing">
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/1.jpg" alt="first" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GOT TICKETS? <br />
                CHECK EVENT STATUS HERE
              </h3>
              <a href="#" className="btn">
                Go to My 🖥️ Tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/2.jpg" alt="second" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GET READY FOR GAME TIME.
                <br />
                NOTHING BEATS NFL
              </h3>
              <a href="#" className="btn">
                Get ⚽ tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/3.jpg" alt="third" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GARTH BROOKS AND MORE <br />
                AT THE DRIVE IN, LOAD UP!
              </h3>
              <a href="#" className="btn">
                Get DRIVE IN tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/4.jpg" alt="fourth" />
            </div>
            <div className="carousel-item__text">
              <h3>
                GET IN THE END ZONE
                <br />
                WITH COLLEGE FOOTBALL.
              </h3>
              <a href="#" className="btn">
                Get ⚽ tickets
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-item__img">
              <img src="assets/slider/5.jpg" alt="sunset" />
            </div>
            <div className="carousel-item__text">
              <h3>
                THE SHOW MUST GO ON!
                <br />
                BE THERE LIVE WHEN IT DOES
              </h3>
              <a href="#" className="btn">
                Get ⚽ tickets
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="categories">
        <section className="carousel-category carousel-random">
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/lfc.png" alt="lfc" />
            </div>
            <div className="carousel-text">
              <h4>Concerts</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/mcfc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>NFL</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/cfc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLB</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/fcb.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>NBA</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/mufc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>NHL</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/rmcf.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/afc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/efc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-img">
              <img src="assets/clubs/web/thfc.png" alt="huge" />
            </div>
            <div className="carousel-text">
              <h4>MLS</h4>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Arsenal</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Crystal Palace,</h4>
                <p>Sunday October 27, 2019 4:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Watford FC,</h4>
                <p>Sunday May 17, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Newcastle United,</h4>
                <p>Saturday February 8, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Brighton &amp; Hove Albion FC,</h4>
                <p>Tuesday December 3, 2019 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Aston Villa,</h4>
                <p>Sunday September 22, 2019 4:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Southampton,</h4>
                <p>Saturday November 23, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Wolverhampton Wanderers,</h4>
                <p>Saturday November 2, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v West Ham United,</h4>
                <p>Saturday March 7, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Everton,</h4>
                <p>Saturday February 2, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Manchester United,</h4>
                <p>Wednesday January 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v AFC Bournemouth</h4>
                <p>Sunday October 6, 2019 2:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Liverpool,</h4>
                <p>Saturday May 2, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Norwich City,</h4>
                <p>Saturday April 4, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Sheffield United,</h4>
                <p>Saturday January 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Leicester City,</h4>
                <p>Saturday April 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Arsenal/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Manchestor City,</h4>
                <p>Saturday December 14, 2019 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Chelsea</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Arsenal,</h4>
                <p>Wednesday January 22, 2020 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Manchester City,</h4>
                <p>Saturday March 21, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Arsenal v Chelsea</h4>
                <p>Saturday December 28, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Brighton &amp; Hove Albion FC,</h4>
                <p>Saturday September 28, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Wolverhampton Wanderers,</h4>
                <p>Sunday May 17, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Everton</h4>
                <p>Saturday March 7, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Watford FC,</h4>
                <p>Saturday April 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v AFC Bournemouth,</h4>
                <p>Saturday December 14, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Aston Villa,</h4>
                <p>Wednesday December 4, 2019 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v West Ham United,</h4>
                <p>Saturday November 30, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Manchestor United,</h4>
                <p>Saturday February 8, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Tottenham Hotspur,</h4>
                <p>Saturday February 22, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Southampton,</h4>
                <p>Thursday December 26, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Burnley FC,</h4>
                <p>Saturday January 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Crystal Palace,</h4>
                <p>Saturday November 9, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Norwich City,</h4>
                <p>Saturday May 2, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Chelsea/17.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Chelsea v Liverpool</h4>
                <p>Sunday September 22, 2019 4:30 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Everton</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Newcastle United,</h4>
                <p>Tuesday January 21, 2020 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Chelsea,</h4>
                <p>Saturday December 7, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Southampton,</h4>
                <p>Saturday April 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Tottenham Hotspur</h4>
                <p>Saturday November 2, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Burnley FC,</h4>
                <p>Thurday December 26, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v West Ham United,</h4>
                <p>Saturday October 19, 2019 12:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton Manchester City,</h4>
                <p>Saturday September 28, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Norwich City,</h4>
                <p>Saturday November 23, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Sheffield United,</h4>
                <p>Saturday September 21, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Hove Albion FC,</h4>
                <p>Saturday Januray 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Crystal Palace,</h4>
                <p>Saturday February 8, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Manchestor United,</h4>
                <p>Saturday February 29, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Arsenal,</h4>
                <p>Saturday December 21, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v AFC Bournemouth,</h4>
                <p>Sunday May 17, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Aston Villa,</h4>
                <p>Saturday May 2, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Leicester City,</h4>
                <p>Saturday April 4, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Everton/17.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Everton v Liverpool,</h4>
                <p>Saturday March 14, 2020 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Fcb</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Atlético Madrid</h4>
                <p>Sunday April 26, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Celta de Vigo</h4>
                <p>Sunday November 10, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v SD Eibar</h4>
                <p>Sunday February 23, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Real Mallorca,</h4>
                <p>Sunday December 8, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Sevilla FC,</h4>
                <p>Sunday October 6, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v CA Osasuna</h4>
                <p>Sunday May 17, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v CD Leganés</h4>
                <p>Sunday March 22, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Athletic de Bilbao,</h4>
                <p>Sunday April 12, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Espanyol,</h4>
                <p>Sunday May 10, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Real Madrid,</h4>
                <p>Sunday October 27, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Real Valladolid,</h4>
                <p>Wednesday October 30, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Real Sociedad,</h4>
                <p>Sunday March 8, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Granada CdF,</h4>
                <p>Sunday January 19, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Lavante,</h4>
                <p>Sunday February 2, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Deportivo Alavés</h4>
                <p>Sunday December 22, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Villarreal,</h4>
                <p>Tuesday September 24, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Fcb/17.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>FC Barcelona v Getafe,</h4>
                <p>Sunday February 16, 2020 5:30 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Lfc</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Everton,</h4>
                <p>Wednesday December 4, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Southampton,</h4>
                <p>Saturday February 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Chelsea,</h4>
                <p>Saturday May 9, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Manchester City,</h4>
                <p>Saturday November 9, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Hove Albion FC,</h4>
                <p>Saturday November 30, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Leicester City,</h4>
                <p>Saturday October 5, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Tottenham Hotspur,</h4>
                <p>Sunday October 27, 2019 4:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Aston Villa,</h4>
                <p>Saturday April 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Sheffield United,</h4>
                <p>Wednesday January 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Watford FC,</h4>
                <p>Saturday December 14, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Crystal Palace,</h4>
                <p>Saturday March 21, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v AFC Bournemouth,</h4>
                <p>Saturday March 7, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Manchestor United,</h4>
                <p>Saturday Januray 18, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Burnley FC,</h4>
                <p>Saturday April 25, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v Wolverhampton Wanderers,</h4>
                <p>Saturday December 28, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Lfc/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Liverpool v West Ham United,</h4>
                <p>Saturday February 22, 2020 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Man Utd</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Arsenal,</h4>
                <p>Monday September 30, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Astom Villa,</h4>
                <p>Sunday December 1, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Newcastle United,</h4>
                <p>Thurday December 26, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Liverpool,</h4>
                <p>Sunday October 20, 2019 4:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v West Ham United,</h4>
                <p>Saturday May 9, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Watford FC,</h4>
                <p>Saturday February 22, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Wolverhampton Wanderers,</h4>
                <p>Saturday February 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Burnley FC,</h4>
                <p>Tuesday January 21, 2020 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Sheffield United,</h4>
                <p>Saturday March 21, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Brighton &amp; Hove Albion FC,</h4>
                <p>Sunday November, 10, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Southampton,</h4>
                <p>Saturday April 25, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Manchestor City,</h4>
                <p>Saturday March 7, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Tottenham Hotspur,</h4>
                <p>Tuesday December 3, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Everton,</h4>
                <p>Saturday December 14, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v Norwich City,</h4>
                <p>Saturday January 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Man-Utd/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Manchester United v AFC Bournemouth,</h4>
                <p>Saturday April 11, 2020 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Rmcf</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Celta de Vigo,</h4>
                <p>Sunday February 16, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Athletic de Bilbao,</h4>
                <p>Sunday December 22, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v CA Osasuna,</h4>
                <p>Wednesday September 25, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Real Betis,</h4>
                <p>Sunday November 3, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Real Mallorca,</h4>
                <p>Sunday April 12, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Valencia,</h4>
                <p>Sunday March 22, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Espanyol,</h4>
                <p>Sunday December 8, 2019 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v CD Leganés</h4>
                <p>Wednesday October 30, 2019 8:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v FC Barcelona,</h4>
                <p>Sunday March 1, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Atlético Madrid,</h4>
                <p>Sunday February 2, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Getafe,</h4>
                <p>Sunday April 26, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Sevilla FC,</h4>
                <p>Sunday January 19, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v SD Eibar,</h4>
                <p>Sunday March 15, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Deportivo Alavés,</h4>
                <p>Sunday May 10, 2020 5:30 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Granado CdF,</h4>
                <p>Saturday October 5, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Rmcf/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Real Madrid v Villareal,</h4>
                <p>Sunday May 17, 2020 5:30 PM</p>
              </div>
            </div>
          </div>
        </section>
        <section className="carousel-team">
          <h3>Spurs</h3>
          <div className="carousel-category">
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/1.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$169+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Chelsea,</h4>
                <p>Saturday December 21, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/2.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$197+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Arsenal,</h4>
                <p>Saturday April 25, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/3.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$201+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Machester United,</h4>
                <p>Saturday March 14, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/4.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$145+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Brighton &amp; Hove Albion FC,</h4>
                <p>Thurday December 26, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/5.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$265+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v West Ham United</h4>
                <p>Saturday March 21, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/6.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$234+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Everton,</h4>
                <p>Saturday April 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/7.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Leicester City,</h4>
                <p>Saturday May 9, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/8.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$326+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Manchester City,</h4>
                <p>Saturday February 1, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/9.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$132+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Watford FC,</h4>
                <p>Saturday October 19, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/10.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$321+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Norwich City,</h4>
                <p>Wednesday January 22, 2020 7:45 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/11.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$341+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v AFC Bournemouth,</h4>
                <p>Saturday November 30, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/12.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Sheffield United,</h4>
                <p>Saturday November 9, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/13.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Wolverhampton Wanderers,</h4>
                <p>Saturday February 29, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/14.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Liverpool,</h4>
                <p>Saturday January 11, 2020 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/15.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Southampton,</h4>
                <p>Saturday September 28, 2019 3:00 PM</p>
              </div>
            </div>
            <div className="carousel-item">
              <div className="carousel-body">
                <div className="carousel-img">
                  <img src="assets/images/slider/Spurs/16.png" alt="huge" />
                </div>
                <div className="carousel-text">
                  <h4>$368+</h4>
                </div>
              </div>
              <div className="carousel-caption">
                <h4>Tottenham Hotspur v Burnley FC,</h4>
                <p>Saturday December 7, 2019 3:00 PM</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section className="mail-list-subscription">
        <h3>Epic events and incredible deals straight to your inbox.</h3>
        <form action>
          <input type="email" placeholder="Email address" />
          <button type="submit">Join the list</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
