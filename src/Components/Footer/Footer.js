import React from 'react';
import "./Footer.css"


const Footer = () => {
    return (
        <footer class="footer-distributed">
 
        <div class="footer-left">
        
        <h3>Tourist<span>Spots</span></h3>
        
        <p class="footer-links">
        <a href="#">Home</a>
        ·
        <a href="#">Blog</a>
        ·
        <a href="#">Pricing</a>
        ·
        <a href="#">About</a>
        ·
        <a href="#">Faq</a>
        ·
        <a href="#">Contact</a>
        </p>
        
        <p class="footer-company-name">webdevtrick &copy; 2019</p>
        </div>
        
        <div class="footer-center">
        
        <div>
        <i class="fa fa-map-marker"></i>
        <p><span>21 Revolution Street</span> Delhi, India</p>
        </div>
        
        <div>
        <i class="fa fa-phone"></i>
        <p>+1 555 123456</p>
        </div>
        
        <div>
        <i class="fa fa-envelope"></i>
        <p><a href="mailto:support@company.com">contact@toursitspot.net</a></p>
        </div>
        
        </div>
        
        <div class="footer-right">
        
        <p class="footer-company-about">
        <span>About the company</span>
       Tourist Spots is a company that helps tourists across the world to provide a save journey
        </p>
        
        <div class="footer-icons">
        
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="#"><i class="fa fa-github"></i></a>
        
        </div>
        
        </div>
        
        </footer>
    );
};

export default Footer;