import React from "react";
import "../styles/intro.css";
import imageProfile from "../assets/imgprofile.jpg";
export default function Intro() {
    return (
        <div className="intro">
            <div className="intro-content">
                <h1>
                    Hi, I'm <span className="name">Mohamed Reda</span>
                </h1>
                <h3>
                Currently, I am studying programming and networks with the aim of attaining a high level of professionalism. While I am not officially a software engineer yet, I am eagerly working towards that goal. My aspiration is to establish myself within the industry and contribute alongside experienced professionals. As part of my graduation project, I am focusing on studying the React.js framework. I am excited about the opportunities that lie ahead and look forward to graduating in 2024, inshallah.                </h3>
            </div>
            <div className="profile-image">
                <img src={imageProfile} alt="Profile" />
            </div>

            <div className="social-links">
                <a target="blank" href="https://drive.google.com/file/d/1iEX71_KRqDljyZ-VSVdPkgvXI4gxOEwB/view?usp=sharing">
                    <i className="fas fa-file"></i> Resume
                </a>
                <a target="blank" href="https://www.linkedin.com/in/mohamed-reda-92a617201/">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a target="blank" href="https://github.com/mohamedreda22">
                    <i className="fab fa-github"></i>
                </a>
                <a target="blank" href="https://api.whatsapp.com/send/?phone=201155921429&text&type=phone_number&app_absent=0">
                    <i className="fab fa-whatsapp"></i>
                </a>
                </div>

        </div>
    );
}
