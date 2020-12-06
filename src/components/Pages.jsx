import running from '../images/GroverRunning.jpeg';
import team from '../images/GroverTeam.jpeg'
import './Pages.css';

export function Bio(props) {
    return (
        <div className="info">
            <h1>Who Am I?</h1>
            <hr />
            <br />
            <img src={running} alt="Anthony Racing"/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus nulla, sed, harum ex veniam voluptatibus fugit, dignissimos perferendis ullam saepe assumenda. Animi reprehenderit soluta cumque voluptas quidem amet corporis nesciunt?</p>
            <p>Dolorem velit fuga, unde aut dicta sed molestiae magnam nulla ipsam quos eum at pariatur nostrum nesciunt ipsum aliquam porro aspernatur impedit eius quisquam aperiam eos! Quia qui sapiente non.</p>
            <p>Ratione minima facilis natus eos! Explicabo ea autem repellat, velit a nihil dolorem vel minus hic laudantium, quos repellendus, quidem omnis cum iusto officiis excepturi. Asperiores minus eum facilis nisi.</p>
            <p>Ea facere soluta laudantium tempora, ipsum necessitatibus iusto autem quis facilis esse itaque obcaecati, dolores odit harum mollitia? Voluptatibus obcaecati rerum, dolorum eos sequi autem cupiditate modi! Deserunt, omnis aut.</p>
        </div>
    )
}

export function Why(props) {
    return (
        <div className="info">
            <h1>Why I run.</h1>
            <hr />
            <br />
            <img src={team} alt="Anthony And Teammates" />
        </div>
    )
}

export function Contact(props) {
    return (
        <div className="info">
            <h1>Contact Me</h1>
            <hr />
            <br />
        </div>
    )
}

export function News(props) {
    return (
        <div className="info">
            <h1>In The News</h1>
            <hr />
            <br />
        </div>
    )
}

