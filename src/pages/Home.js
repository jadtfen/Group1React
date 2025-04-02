import './Home.css';
import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div>
            <div class="header-container">
                <h1>Welcome to [Town Name]!</h1>
                <p>We’re So Glad You Found Us.</p>
            </div>
 
            <div class="nav-buttons">
                <a href ="/forums"><button type="button">Forums</button></a>
                <a href="/community"><button type="button">Community</button></a>
            </div>

            <div class="events">
                <h2>This Week's Events 4/13-4/19</h2>
                <h3>MON, APR 13</h3>
                <p>Community Garage Sale</p>
                <h3>WED, APR 15</h3>
                <p>City Council Meeting</p>
                <h3>SAT, APR 18</h3>
                <p>Farmer's Market</p>
            </div>

            <div class="news">
                <h2>Latest News</h2>
                <p>Mysterious Black Fog Seen Over [Town Name] Sky</p>
                <p>Park Renovations with Closures</p>
                <p>Pets Grow Increasingly Agitated</p>
                <p>Please Do Not Feed the Ducks</p>
            </div>
        </div>
    )
}
