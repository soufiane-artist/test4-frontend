import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";

const Service = () => {
    const navigate = useNavigate()

  return (
    <div className="about-section d-flex">
         <div className="about-btn">
            <a href="#" onClick={()=>navigate(-1)}><IoMdArrowRoundBack /></a>
        </div>
        <div className="service-text">
                <h1>Our Services at META2FX</h1>
                <p>At META2FX, we offer a comprehensive range of services designed to enhance your trading experience and support your financial goals:</p>
                
                <h2>Trading Services</h2>
                <ul>
                    <li><strong>Secure Trading Platform:</strong> Utilize our cutting-edge and secure trading platform for seamless and reliable transactions.</li>
                    <li><strong>Diverse Asset Selection:</strong> Access an extensive range of digital currencies (cryptocurrencies) and forex pairs for diverse trading opportunities.</li>
                    <li><strong>Advanced Order Types:</strong> Execute trades with a variety of order types, including limit orders, market orders, and more, to suit your trading strategy.</li>
                    <li><strong>Real-Time Market Data:</strong> Stay informed with up-to-date prices and market insights to make well-informed trading decisions.</li>
                </ul>
                
                <h2>Educational Resources</h2>
                <ul>
                    <li><strong>Trading Guides:</strong> Explore our detailed trading guides to learn the fundamentals and advanced strategies for effective trading.</li>
                    <li><strong>Webinars and Workshops:</strong> Join live webinars and workshops led by industry experts to gain valuable knowledge and insights.</li>
                </ul>
                
                <h2>Customer Support</h2>
                <ul>
                    <li><strong>24/7 Support:</strong> Benefit from round-the-clock support from our dedicated team to address your queries and issues promptly.</li>
                    <li><strong>Personalized Assistance:</strong> Receive tailored assistance with account-related questions and technical support to ensure a smooth trading experience.</li>
                </ul>
                
                <p>Discover these services and more at META2FX to elevate your trading journey. Whether you are just starting or are an experienced trader, META2FX provides the tools and resources you need to achieve your financial objectives.</p>
            </div>
    </div>
  );
};

export default Service;
