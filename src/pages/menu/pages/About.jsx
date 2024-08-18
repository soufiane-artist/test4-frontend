import React from 'react';
import '../css/about.css'
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const About = () => {
    const navigate = useNavigate()
  return (
    <div className="about-section d-flex" >
        <div className="about-btn">
            <a href="#" onClick={()=>navigate(-1)}><IoMdArrowRoundBack /></a>
        </div>
        <div className="about-text">
                <h1>About META2FX - Premier Digital & Forex Trading Platform</h1>
                <p>Welcome to META2FX, your premier destination for online digital currency and foreign exchange trading. At META2FX, we are committed to providing a secure, transparent, and efficient trading platform tailored to meet the diverse needs of traders worldwide.</p>
                
                <h2>Why Choose META2FX?</h2>
                <p>META2FX stands out for several key reasons:</p>
                <ul>
                    <li><strong>Advanced Security Measures:</strong> We employ industry-leading security protocols to safeguard your funds and personal information, ensuring peace of mind for every trader.</li>
                    <li><strong>User-Friendly Interface:</strong> Our intuitive platform is designed to make trading accessible and straightforward, whether you're a novice or an experienced trader.</li>
                    <li><strong>Wide Range of Assets:</strong> Explore a diverse selection of digital currencies (cryptocurrencies) and foreign exchange pairs (forex) to diversify your investment portfolio effectively.</li>
                    <li><strong>Dedicated Customer Support:</strong> Our dedicated support team is available around the clock to assist you with any queries or technical issues, ensuring a smooth trading experience.</li>
                    <li><strong>Robust Trading Tools:</strong> Utilize our advanced analytical tools and charts to conduct thorough market analysis and make informed trading decisions.</li>
                    <li><strong>Competitive Trading Fees:</strong> Benefit from competitive trading fees and transparent pricing structures, ensuring cost-effective trading opportunities.</li>
                </ul>
                
                <h2>Our Vision</h2>
                <p>At META2FX, our vision is to empower individuals worldwide by providing them with the tools and resources needed to navigate the digital and foreign currency markets effectively. We aim to foster a community of informed traders who can seize opportunities and achieve their financial goals.</p>
                
                <h2>Join Our Community</h2>
                <p>Join thousands of traders who trust META2FX for their trading needs. Whether you're looking to explore new investment opportunities or enhance your trading strategy, META2FX is here to support you every step of the way.</p>
                
                <p>Experience the future of digital and forex trading with META2FX. Register today and embark on your journey towards financial success!</p>
            </div>
    </div>
  );
};

export default About;
