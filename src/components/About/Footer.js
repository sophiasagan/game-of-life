import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper-footer">
                <p>
                    Created and designed by{" "}
                    <a
                        href="https://github.com/sophiasagan"
                        target="_blank"
                        className="link"
                        rel="noopener noreferrer"
                    >
                        Sophia Jung
                    </a>{" "}
                </p>
            </div>
            <div className="lower-footer">
                <a
                    className="link"
                    href="https://www.linkedin.com/in/sophia-jung/"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <AiFillLinkedin />
                </a>{" "}
                <a
                    href="https://github.com/sophiasagan"
                    title="GitHub"
                    target="_blank"
                    className="link"
                    rel="noopener noreferrer"
                >
                    <AiFillGithub />
                </a>
            </div>
        </div>
    );
};

export default Footer;