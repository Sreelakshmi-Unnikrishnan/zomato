import React from 'react'
import './WebPage.css'
import rice from "./Images/rice.jpg";
import wine from "./Images/wine.jpg";
import butter from "./Images/butter.jpg";
import doughnuts from "./Images/doughnuts.jpg";
import sea from "./Images/sea.jpg";
import coffee from "./Images/coffee.jpg";
import mob from "./Images/mob.jpg";
import india from "./Images/india.png";
import playstore from "./Images/playstore.png";



function WebPage() {
  return (
    <div>
            <nav>
                <input id="nav-toggle" type="checkbox" /> 
                <i style={{color:"white"}} id="cart-icon" class="fa fa-mobile"></i>
                    <ul class="links">
                        <li><a href="#get" id="get">Get the app</a></li>
                        <li><a href="#about">Investors Relations</a></li>
                        <li><a href="#work">Add Restaurant</a></li>
                        <li><a href="#projects">Login</a></li>
                        <li><a href="#projects">Sign Up</a></li>
                    </ul>
                    <label for="nav-toggle" class="icon-burger">
                        <div class="line"></div>
                        <div class="line"></div>
                        <div class="line"></div>
                    </label>
                <h1 className='head'>Zomato</h1>
                <h2 className='head1'>Discover the best food & drinks in Kochi</h2>
                <button className='search'>
                <i id="map" class="fa fa-map-marker" aria-hidden="true"></i> <h5>Kochi</h5><i id="down" class="fa fa-caret-down" aria-hidden="true"></i> <div class="vl"></div> <i id="search1" class="fa fa-search" aria-hidden="true"></i> <h6>Search for Restaurant, cuisine or a dish</h6> 
                </button>
            </nav>
            
        <div className='header'>
            <div className='left'>
                <img src={rice}></img>
                <h3>Order Online</h3>
                <h5>Stay home and order to your doorstep</h5>
            </div>
            <div className='right'>
                <img src={wine}></img>
                <h3>Dining Out</h3>
                <h5>View the city's favourite dining venues</h5>
            </div>
        </div>   
        <div className='rowposter'>
            <h1>Collections</h1>
            <div className='row1'>
                <h5>Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends</h5>
                <h6>All Collections in Kochi <i id="caretright" class="fa fa-caret-right" aria-hidden="true"></i></h6>
            </div>
        </div> 
        <div className='row2'>
            <div className='image'>
                <img src={butter}></img>
                <h5>Veggie Friendly</h5>
                <h6>5 Places <i id="caretright" class="fa fa-caret-right" aria-hidden="true"></i></h6>
            </div>
            <div className='image1'>
                <img src={doughnuts}></img>
                <h5>Trending this week</h5>
                <h6>30 Places <i id="caretright" class="fa fa-caret-right" aria-hidden="true"></i></h6>
            </div>
            <div className='image2'>
                <img src={sea}></img>
                <h5>Must-Visit Restaurants in ...</h5>
                <h6>9 Places <i id="caretright" class="fa fa-caret-right" aria-hidden="true"></i></h6>
            </div>
            <div className='image3'>
                <img src={coffee}></img>
                <h5>Great Cafes</h5>
                <h6>12 Places <i id="caretright" class="fa fa-caret-right" aria-hidden="true"></i></h6>
            </div>
        </div>
        <div className='popular'>
            <h1>Popular localities in and around Kochi</h1>
            <div className='places'>
                <button className='place1'>
                <h5>Kakkanad</h5>
                <i id="caretright1" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>518 Places</h6>
                </button>
                <button className='place2'>
                <h5>Edappally</h5>
                <i id="caretright2" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>356 Places</h6>
                </button>
                <button className='place3'>
                <h5>Fort Kochi</h5>
                <i id="caretright3" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>105 Places</h6>
                </button>
            </div>
            </div>
            <div className='places1'>
                <button className='place4'>
                <h5>Panampilly Nagar</h5>
                <i id="caretright4" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>99 Places</h6>
                </button>
                <button className='place5'>
                <h5>MG Road</h5>
                <i id="caretright5" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>103 Places</h6>
                </button>
                <button className='place6'>
                <h5>Kacheripady</h5>
                <i id="caretright6" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>105 Places</h6>
                </button>
            </div>
            <div className='places2'>
                <button className='place7'>
                <h5>Palarivattom</h5>
                <i id="caretright7" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>187 Places</h6>
                </button>
                <button className='place8'>
                <h5>Vyttila</h5>
                <i id="caretright8" class="fa fa-angle-right" aria-hidden="true"></i>
                <h6>143 Places</h6>
                </button>
                <button className='place9'>
                <h5>See more</h5>
                <i id="caretright9" class="fa fa-angle-down" aria-hidden="true"></i>
                </button>
            </div>
            <div className='install'>
            <img src={mob}></img>
                <div className='appinstall'>
                    <h2>Get the Zomato app</h2>
                    <h5>We will send you a link, open it on your phone to download the app</h5>
                    <i id="circle" class="fa fa-stop-circle-o" aria-hidden="true">  Email</i>
                    <i id="circle1" class="fa fa-circle-o" aria-hidden="true">  Phone</i>
                    <div className='method'>
                    <button className='email'>Email</button>
                    <button className='share'>Share App link</button>
                    </div>
                    <h6>Download app from</h6>
                    <div className='dow'>
                    <button className='play'><h6><img src={playstore}></img> GET IT ON Google Play</h6></button>
                    <button className='app'><i class="fa fa-apple" aria-hidden="true"></i>  Download on the App store</button>
                    </div>
                </div>
            </div>
            <div class="centerplease">
            Explore options near me
</div>
<br/>

<div class="content">
<div>
  <input type="checkbox" id="question1" name="q"  class="questions"/>
  <div class="plus">+</div>
  <label for="question1" class="question" id="q1">
  <h4>Popular cuisines near me</h4>
  </label>
  <div class="answers">
  Bakery food near me. Beverages food near me. Biryani food near me. Burger food near me. Chinese food near me. Desserts food near me. Ice Cream food near me. Kebab food near me. Maharashtrian food near me. Momos food near me. Mughlai food near me. North Indian food near me. Pizza food near me. Rolls food near me. Sandwich food near me. Seafood food near me. Shake food near me. Sichuan food near me. South Indian food near me. Street food near me.</div>
</div>

<div>
  <input type="checkbox" id="question2" name="q" class="questions"/>
  <div class="plus"><i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></div>
  <label for="question2" class="question" id="q1">
  <h4>Popular restaurant types near me</h4>
  </label>
  <div class="answers">
  Bakeries near me. Bars near me. Beverage Shops near me. Bhojanalya near me. Cafés near me. Casual Dining near me. Clubs near me. Cocktail Bars near me. Confectioneries near me. Dessert Parlors near me. Dhabas near me. Fine Dining near me. Food Courts near me. Food Trucks near me. Irani Cafes near me. Kiosks near me. Lounges near me. Microbreweries near me. Paan Shop near me. Pubs near me. Quick Bites near me. Shacks near me. Sweet Shops near me.
  </div>
</div>
  
<div>
  <input type="checkbox" id="question3" name="q" class="questions"/>
  <div class="plus"><i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></div>
  <label for="question3" class="question" id="q1">
  <h4>Top Restaurant Chains </h4>
  </label>
  <div class="answers">
  Bikanervala Burger King Domino's Dunkin' Donuts Haldiram's KFC KrispyKreme McDonald'sPizza HutWOW! Momo
  </div>
</div>
<div>
  <input type="checkbox" id="question4" name="q" class="questions"/>
  <div class="plus"><i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></div>
  <label for="question4" class="question" id="q1">
  <h4>Cities We Deliver To</h4>
  </label>
  <div class="answers">
  Delhi NCR Kolkata Mumbai Bengaluru Pune Hyderabad Chennai Lucknow Kochi Jaipur Ahmedabad Chandigarh Goa Indore Nashik Ooty Shimla Ludhiana Guwahati Amritsar Kanpur Allahabad Aurangabad Bhopal See more
  </div>
</div>
</div>
<div className='footer'>
    <div className='post'>
        <h1>Zomato</h1>
        <button className='india'><img src={india}></img> <h5>India <i id="caretright10" class="fa fa-angle-down" aria-hidden="true"></i></h5></button>
        <button className='english'>  <i id="caretright11" class="fa fa-globe" aria-hidden="true"></i><h5>English <i id="caretright12" class="fa fa-angle-down" aria-hidden="true"></i></h5></button>

    </div>
    <div className='divs'>
    <div className='about'>
        <h3>ABOUT ZOMATO</h3>
        <h5>Who we are</h5>
        <h5>Blog</h5>
        <h5>Work with us</h5>
        <h5>Investor Relations</h5>
        <h5>Report Fraud</h5>
    </div>
    <div className='zom'>
        <h3>ZOMAVERSE</h3>
        <h5>ZOMATO</h5>
        <h5>Feeding India</h5>
        <h5>Hyperpure</h5>
        <h5>Zomland</h5>
    </div>
    <div className='res'>
        <h3>FOR RESTAURANTS</h3>
        <h5>Partner with Us</h5>
        <h5>Apps For You</h5>
        <h3 className='ent'>FOR ENTERPRISES</h3>
        <h5>Zomato For Work</h5>
    </div>
    <div className='learn'>
        <h3>LEARN MORE</h3>
        <h5>Privacy</h5>
        <h5>Security</h5>
        <h5>Terms</h5>
        <h5>Sitemap</h5>
    </div>
    <div className='social'>
        <h3>SOCIAL LINKS</h3>
        <div className='links'>
        <i class="fa fa-linkedin-square" aria-hidden="true" ></i>
        <i class="fa fa-instagram" aria-hidden="true" id="insta" ></i>
        <i class="fa fa-twitter-square" aria-hidden="true" id="twitt"></i>
        <i class="fa fa-youtube-play" aria-hidden="true" id="you"></i>
        <i class="fa fa-facebook-square" aria-hidden="true" id="fb"></i>
        </div>
        <button className='app'><i class="fa fa-apple" aria-hidden="true"></i><h6>Download on the App store</h6></button>
        <button className='play'><h6><img src={playstore}></img> GET IT ON Google Play</h6></button>
    </div>
</div>
<hr/>
<h5 className='text'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2022 © Zomato™ Ltd. All rights reserved.</h5>
</div>
    </div>
  )
}

export default WebPage