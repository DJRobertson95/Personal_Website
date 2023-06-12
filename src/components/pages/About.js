import React from "react";

const About = () => {
    return(
        <div id="aboutPage" className="page">
            {/* Page Title */}
            <div id="titleSection-template">
                <h1>About</h1>
            </div>

            {/* Intro Section */}
            <div id="introSection" className="section-about">
    <div id="about-text">
        <p id="indented-paragraph">Welcome, I am Dalron J. Robertson, an embodiment of ceaseless curiosity and unbridled passion. At 27, I am a father, a Christian, and a lover of life's endless possibilities. Difficult to confine to a single title, my essence is steeped in creativity, problem-solving and an unyielding zest for knowledge. I navigate a variety of realms, from software development to finance, music to technology, with an ease born of my belief in the attainable. My journey is as varied as my interests, beginning with my studies in music, transitioning through the life sciences, and now residing in the realm of technology. Each phase represents a new layer of experience and wisdom, a unique perspective that encompasses all I do. Outside of work, I immerse myself in the arts, admire the wonders of architecture, and relax myself in boating life. The pursuit of excellence extends to my personal life, influencing my love for culinary experiences, and my love for the tranquility of nature. Join me as I continue to explore, grow, and transcend boundaries in this extraordinary adventure called life.</p>
    </div>
    <div id="image-container" style={{position: "relative"}}>
        <img src="/images/AGNDJ1.png" alt="Dalron" id="about-image" style={{width: "500px", height: "auto"}} />
        <div id="overlay-text" style={{position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
            <p>A Guy Named DJ</p>
        </div>
    </div>
</div>


                {/* Story Section */}
            <div id="storySection" className="section-about">
                // Content here...
            </div>

            {/* Sabbatical Section */}
            <div id="sabbaticalSection" className="section-about">
                // Content here...
            </div>

            {/* Creation Section */}
            <div id="creationSection" className="section-about">
                // Content here...
            </div>

            {/* Personal Interests Section */}
            <div id="personalInterestsSection" className="section-about">
                // Content here...
            </div>
        </div>
    )
};

export default About;
