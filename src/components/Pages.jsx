import './Pages.css';

export function Home(props) {
    return (
        <div className="info">
            <h1>Talks With Tony</h1>
            <hr />
            <br />
            <img src="./images/GroverRunning.png" alt="Anthony Racing" />

            <p>Sessions will be 15 minutes</p>
            <p>Wednesday-Friday 8, 8:15, 8:30, or 8:45 EST (5-5:45 PST)</p>
            <p>Email <a href="mailto:talkingwithtony@gmail.com">talkingwithtony@gmail.com</a> with 3 times your available and I will send you a Google Meet or Zoom link</p>
            <p><strong>OPEN TO ALL SKILL LEVELS.</strong> <br />If you are a High School runner and want to talk to me, I want to talk to YOU..</p>
            <h2>How to Prepare:</h2>
            <ol>
                <em>Come prepared with:</em>
                <li><span>3 Questions</span></li>
                <li><span>Your goal for the upcoming season</span></li>
                <li><span>Where you see yourself in ten years (long term goals)</span></li>
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
            <img src="./images/GroverTeam.png" alt="Anthony And Teammates" />
            <p>Anthony began running in 8th grade to be better prepared for high school basketball. 
            After a glimpse of success, it became clear running is something he loves and maybe basketball 
            wasn’t his calling. He is the first, 3-time individual California State champion in Division 4.
             He was a footlocker finalist his junior year and an NXN All-American his senior year.</p>
            <p>Running taught him the hard work, leadership, and what it’s like to work towards something. 
            He has noticed that there are multiple ways to get where you want to be, and your best path is 
            most likely not the same as everyone else.</p>
            <p>For fun, Anthony enjoys golfing, free diving, skiing, surfing, and spending time with other people who 
            constantly challenge themselves.</p>
        </div>
    )
}

export function Purpose(props) {
    return (
        <div className="info">
            <h1>Purpose</h1>
            <hr />
            <br />
            <p>Reflecting on my upbringing, words cannot express my gratitude. I had access to mentorship and opportunities that will 
            benefit me for the rest of my life. I realize that not everyone has the same exposure to mentors or opportunities, so that is why I created Talks with Tony.
            I hope to inspire the next generation, help them become goal oriented in all facets of their life, and encourage them to never set limits.</p>
        </div>
    )
}

export function Goals(props) {
    return (
        <div className="info">
            <h1>My Goals</h1>
            <hr />
            <br />
            <p><strong>This upcoming track season</strong> at Wake Forest University, I will be attempting 
            to break the four minute barrier in the mile and 14 mins in the 5k.</p>
            <p><strong>10 years from now, </strong>I see myself working at an international investment banking firm,leading teams, 
            and working towards making change to things I don’t like.</p>
        </div>
    )
}
export function Why(props) {
    return (
        <div className="info">
            <h1>Why I Run</h1>
            <hr />
            <br />
            <p>I began running for the sole purpose of getting into college. However, that has changed&mdash;
            running has become my escape. It has helped me overcome adversity, taught me how to learn from others, 
            and taught me that your biggest limitation is yourself.</p>
        </div>
    )
}
export function Acknowledgements(props) {
    return (
        <div className="info">
            <h1>Acknowledgements</h1>
            <hr />
            <br />
            <img src="./images/GroverCoach.png" alt="Anthony and his high school coach" />
            <p>I would like to thank my Family, Martin Dugard, The Phelan’s, The Blue Spruce Community, The Burkhardt’s, 
            JSerra, Aidan Livingston, and everyone who has helped me throughout my journey. I would not be who I am without 
            your influence and opportunities. Your influence, values, and selflessness is something I will cherish and live 
            by for the rest of my life.</p>
            <p>Here’s to my journey on changing the world and paying it forward for all you’ve done for me.</p>
            <p>Thank you for believing in me and teaching me to never set limits.</p>
        </div>
    )
}


