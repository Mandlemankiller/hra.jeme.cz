import { Helmet } from "react-helmet";
import "./home.css";
import logo from "../../media/logo.png";
import Theme from "../../theme/theme";

export default function Home() {
    showMenu()
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Theme palette={true} />
            <div className="home">
                <img src={logo} className="logo" alt="logo"></img>
                <div className="menu" id="menu">
                    <a href="https://mapu.jeme.cz" target="_blank" rel="noreferrer">
                        <div>
                            <i className="fa-solid fa-map"></i>
                            <p>Live Map</p>
                        </div>
                    </a>
                    <a href="/about">
                        <div>
                            <i className="fa-solid fa-circle-info"></i>
                            <p>About</p>
                        </div>
                    </a>
                    <a href="/members">
                        <div>
                            <i className="fa-solid fa-user"></i>
                            <p>Members</p>
                        </div>
                    </a>
                    <a href="https://www.youtube.com/playlist?list=PLgDHpdcFm8Wq3YTO4gzUfwuHjd0imOikg" target="_blank" rel="noreferrer">
                        <div>
                            <i className="fa-brands fa-youtube"></i>
                            <p>Videos</p>
                        </div>
                    </a>
                </div>
            </div>
        </>
    );
}

async function showMenu() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    let menu = document.getElementById("menu");
    if (menu === null || menu === undefined) {
        return;
    }
    menu.style.opacity = "1";
    menu.style.pointerEvents = "all";
}