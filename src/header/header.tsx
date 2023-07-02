import headEyesOpen from "../media/head/eyes_open.png";
import headEyesClosed from "../media/head/eyes_closed.png";
import "./header.css";

export default function getHeader() {
    return (
        <>
            <div className="header" id="header">
                <a href="/">
                    <img className="head" onMouseEnter={event => wink(event)} onMouseLeave={event => wink(event)} src={headEyesOpen} alt="Head"></img>
                </a>
                <ul id="ul">
                    <li>
                        <a href="/">
                            <i className="fa-solid fa-house"></i>
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="https://mapu.jeme.cz/" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-map"></i>
                            Live Map
                        </a>
                    </li>
                    <li>
                        <a href="/about">
                            <i className="fa-solid fa-circle-info"></i>
                            About</a>
                    </li>
                    <li>
                        <a href="/members">
                            <i className="fa-solid fa-user"></i>
                            Members</a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/playlist?list=PLgDHpdcFm8Wq3YTO4gzUfwuHjd0imOikg" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-youtube"></i>
                            Videos
                        </a>
                    </li>
                    <li>
                        <a href="https://pripravu.jeme.cz/" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-wrench"></i>
                            Trails & Tales
                        </a>
                    </li>
                </ul>
                <div className="burger" onMouseDown={event => burger(event)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    );
}

async function wink(event: React.MouseEvent<HTMLImageElement, MouseEvent>) {
    const img = event.target as HTMLImageElement;
    if (img.classList.contains("disabled")) {
        return;
    }
    img.classList.add("disabled");
    await new Promise(resolve => setTimeout(resolve, 500));
    img.src = headEyesClosed;
    await new Promise(resolve => setTimeout(resolve, 150));
    img.src = headEyesOpen;
    img.classList.remove("disabled");
}

async function burger(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    let burger = event.target as HTMLElement;
    if (burger.classList.contains("burger-active")) { // Is active
        burger.classList.remove("burger-active");
        let ul = document.getElementById("ul");
        if (ul === null || ul === undefined) {
            return;
        }
        ul.style.opacity = "0";
        ul.style.pointerEvents = "none"
        let header = document.getElementById("header");
        if (header === null || header === undefined) {
            return;
        }
        header.style.transition = "0.2s";
        await new Promise(resolve => setTimeout(resolve, 1000));
        header.style.backdropFilter = ""; // Enable header blur
    } else { // Isn't active
        burger.classList.add("burger-active")
        let ul = document.getElementById("ul");
        if (ul === null || ul === undefined) {
            return;
        }
        ul.style.opacity = "1";
        ul.style.pointerEvents = "all"
        let header = document.getElementById("header");
        if (header === null || header === undefined) {
            return;
        }
        header.style.transition = "";
        header.style.backdropFilter = "none"; // Disable header blur
    }
}