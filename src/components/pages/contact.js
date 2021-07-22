import React from "react";

export default function ContactMe() {

    return (
        <div class="container">
            <div class="row">
                    <h1>Contact Me</h1>
                    <div class="d-flex col-7 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                        <div class="contact-me-info row flex-fill d-flex flex-column flex-md-row justify-content-center align-items-center">
                            <div class="col text-center pt-3 pt-md-0">
                                <a href="https://github.com/crisc3" target="_blank">
                                    <h2>GitHub</h2>
                                </a>
                            </div>
                            <div class="col text-center pt-3 pt-md-0">
                                <a href="https://www.linkedin.com/in/crisc2" target="_blank">
                                    <h2>LinkedIn</h2>
                                </a>
                            </div>                            
                            <div class="col text-center pt-3 pt-md-0">
                                <a href="tel:+17136359733" target="_blank">
                                    <h2>+1.713.635.9733</h2>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}