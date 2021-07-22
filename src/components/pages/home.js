import React from "react";

export default function Home() {

    const styles = {
        width: "100%"
    }

    return (
        <div class="container">
            <h1>About Me</h1>
            <div class="col-7 col-sm-8 col-md-9 col-lg-9 col-xl-9" style={styles}>
                <p>Hello, my name is Cristobal Canales. I was born in Houston. I come from a hispanic background, family originating from El Salvador.</p>
                <p>I attended University of Houston and graduated in May of 2013, with a Bachelor of Science in Computer Information Systems.</p>
                <p>Work focus has been with upstream oil and gas clients, data aggregation of drilling operations.</p>
            </div>
        </div>
    );
}