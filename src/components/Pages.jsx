import './Pages.css';

export function Home(props) {
    return (
        <div className="info">
            <h1>Talks With Tony</h1>
            <hr />
            <br />
            <img src="./images/Home.png" alt="Anthony Racing" />

            <p>Sessions will be 15 minutes</p>
            <p>Wednesday-Friday 8, 8:15, 8:30, or 8:45 EST (5-5:45 PST)</p>
            <p>Email <a href="mailto:talkingwithtony11@gmail.com">talkingwithtony11@gmail.com</a> with 3 times your available and I will send you a Google Meet or Zoom link</p>
            <p><strong>Who?</strong> <br />High School runners (all skill levels encouraged) or HS athletes making the transition to college athletics</p>
            <h2>How to Prepare:</h2>
            <ol>
                <em>Come prepared with:</em>
                <li><span>3 Questions</span></li>
                <li><span>Your goal for the upcoming season/ a short-term goal</span></li>
                <li><span>Where you see yourself in ten years/ a long-term goal</span></li>
            </ol>
            <p>Not sure of a goal?<br />Still schedule a chat, I would be happy to help you make one.</p>
            <h2>What to Expect:</h2>
            <ol>
                <em>The most important things I will discuss are:</em>
                <li><span>Goalsetting</span></li>
                <li><span>Not thinking about limits</span></li>
                <li><span>Focusing on the little things</span></li>
                <li><span>Earning your success</span></li>
            </ol>
        </div>
    )
}

export function About(props) {
    return (
        <div className="info">
            <h1>About Anthony</h1>
            <hr />
            <br />
            <img src="./images/About.png" alt="Anthony Golfing" />
            <p>I began running in 8th grade to prepare for high school basketball. Over time, running became something I love, 
            and I worked hard to be the best I could be. Through my dedication, I became the first 3-time individual California State champion in Division 4 history. 
            I was also Footlocker Finalist my junior year and an NXN All-American senior year.</p>
            <p>Running has taught me the importance of hard work, leadership, and setting attainable goals. I have noticed that there are multiple ways to achieve your goals, 
            and everyone's path is different.</p>
            <p>For fun, I enjoy golfing, free diving, skiing, surfing, and being around other people who share my hard-working mindset.</p>
        </div>
    )
}

export function Purpose(props) {
    return (
        <div className="info">
            <h1>Purpose</h1>
            <hr />
            <br />
            <img src="./images/Purpose.png" alt="Anthony and Coach" />
            <p>Reflecting on my upbringing, words cannot express my gratitude. The mentorship and opportunities that were presented to me were amazing. 
            I realize that not everyone has the same exposure to mentors and opportunities. Now, I would love to help those who seek my advice, not only 
            in regards to running, but also to anyone with questions about the transition from HS to collegiate athletics. My goal is to inspire the next 
            generation, help them become goal oriented, and encourage them to never set limits.</p>
        </div>
    )
}

export function Goals(props) {
    return (
        <div className="info">
            <h1>My Goals</h1>
            <hr />
            <br />
            <img src="./images/MyGoals.png" alt="Anthony Racing" />
            <p><strong>This upcoming track season</strong> at Wake Forest University, I will be attempting 
            to break the four minute barrier in the mile and 14 mins in the 5k.</p>
            <p><strong>10 years from now, </strong>I see myself running professionally and working at a financial services company with a large global presence.</p>
        </div>
    )
}
export function Why(props) {
    return (
        <div className="info">
            <h1>Why I Run</h1>
            <hr />
            <br />
            <img src="./images/Why.png" alt="Anthony and Friends" />
            <p>I began running for the sole purpose of getting into college. However, that changed as my journey continued. Running has become my escape.
             It helps me overcome adversity, teaches me how to learn from others and that I am the only person in control of my success, and has allowed me to 
             create remarkable relationships. I have noticed that the skills required to succeed in running are transferable to all facets of life. Having a 
             positive attitude, seeking challenges, and being a lifelong learner are essential skills for not just a runner but also for anyone navigating life's journey. 
             Running allows me to constantly challenge myself and continues to teach me that I can always better myself.</p>
        </div>
    )
}
export function Acknowledgements(props) {
    return (
        <div className="info">
            <h1>Acknowledgements</h1>
            <hr />
            <br />
            <p>I would like to thank my Family, Martin Dugard, The Phelan’s, The Blue Spruce Community, The Burkhardt's, JSerra, Aidan Livingston, 
            and everyone who has helped me throughout my journey to Wake. I would not be who I am without your influence and opportunities. Your 
            insight, selflessness, and integrity is something I will live by for the rest of my life. </p>
            <p>Thank you for believing in me and teaching me to never set limits.</p>
            <img src="./images/Acknowledgements.png" alt="Anthony and his friend" />
        </div>
    )
}


