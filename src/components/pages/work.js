import React from "react";

export default function Work() {

    const styles = {
        width: "100%"
    }

    return (
        <div class="container">
            <div class="row">
                <div class="title col-4 col-sm-3 col-md-2 col-lg-2 col-xl-2">
                    <h1>Work</h1>
                </div>
                <div class="d-flex flex-wrap col-7 col-sm-8 col-md-9 col-lg-9 col-xl-9">
                    <div class="row row-works">
                        <a class="projects project-01 col-work d-flex align-items-end" href="https://the64man1.github.io/Gooberville-Foods/" target="_blank">
                            <div>
                                <h3>Gooberville Foods</h3>
                                <span>HTML / CSS / JS</span>
                            </div>
                        </a>
                    </div>
                    <div class="row row-works">
                        <a class="projects project-02 col-work d-flex align-items-end" href="https://github.com/kthendavid04/gallery" target="_blank">
                            <div>
                                <h3>Galleria</h3>
                                <span>NodeJS<br/>&ndash;Express / Handlebars<br/>&ndash;Sequelize / MySQL</span>
                            </div>
                        </a>
                    </div>
                    
                    <div class="d-flex flex-wrap">
                        <div class="row row-works">
                            <div class="d-flex flex-fill justify-content-between flex-wrap flex-column flex-md-row p-0 col-works">
                                <a class="col-work password-generator col d-flex align-items-end" href="https://crisc3.github.io/PasswordGenerator/" target="_blank">
                                    <div>
                                        <h3>Password Generator</h3>
                                        <span>HTML / CSS / JS</span>
                                    </div>
                                </a>
                                <a class="col-work coding-quiz col d-flex align-items-end" href="https://crisc3.github.io/CodingQuiz/" target="_blank">
                                    <div>
                                        <h3>Coding Quiz</h3>
                                        <span>HTML / CSS / JS</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row row-works">
                            <div class="d-flex flex-fill justify-content-between flex-wrap flex-column flex-md-row p-0 col-works">
                                <a class="col-work workday-scheduler col d-flex align-items-end" href="https://crisc3.github.io/WorkDayScheduler/" target="_blank">
                                    <div>
                                        <h3>Work Day Scheduler</h3>
                                        <span>HTML / CSS / JS</span>
                                    </div>
                                </a>
                                <a class="col-work weather-dashboard col d-flex align-items-end" href="https://crisc3.github.io/Weather-Dashboard/" target="_blank">
                                    <div>
                                        <h3>Weather Dashboard</h3>
                                        <span>HTML / CSS / JS</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="row row-works">
                            <div class="d-flex flex-fill justify-content-between flex-wrap flex-column flex-md-row p-0 col-works">
                                <a class="col-work note-taker col d-flex align-items-end" href="https://github.com/CrisC3/NoteTaker" target="_blank">
                                    <div>
                                        <h3>Note Taker</h3>
                                        <span>NodeJS / Express</span>
                                    </div>
                                </a>
                                <a class="col-work tech-blog col d-flex align-items-end" href="https://github.com/CrisC3/TechBlog" target="_blank">
                                    <div>
                                        <h3>Tech Blog</h3>
                                        <span>NodeJS / Express</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}