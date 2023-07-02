import React, { useState } from "react";
import "./theme.css";

import background_16 from "../media/background/1.16.jpg";
import background_18 from "../media/background/1.18.jpg";
import background_19 from "../media/background/1.19.jpg";
import background_20 from "../media/background/1.20.jpg";
import rickroll from "../media/rickroll.mp4";

const defaultThemeId: number = 3;
const cookiesId: number = 2;

interface ThemeProps {
    palette: boolean;
}

interface ThemeInfo {
    image: string;
    dark: string;
    neutral: string;
    light: string;
    superlight: string;
}

const themes: ThemeInfo[] = [
    {
        image: background_16,
        dark: "181E0C",
        neutral: "18460C",
        light: "18960C",
        superlight: "18C80C"
    },
    {
        image: background_18,
        dark: "502927",
        neutral: "782927",
        light: "C82927",
        superlight: "F02927"
    },
    {
        image: background_19,
        dark: "0D283C",
        neutral: "0D5064",
        light: "0D8CA0",
        superlight: "0DAABE"
    },
    {
        image: background_20,
        dark: "54232C",
        neutral: "7E4550",
        light: "DAA9B2",
        superlight: "FFC4CC"
    }
]

export default function Theme({ palette }: ThemeProps) {
    refreshTheme();
    if (getCookie("cookies" + cookiesId) !== "true") {
        return (
            <div className="window" id="window">
                <div className="cookies">
                    <h1>Cookies! 🍪</h1>
                    <p>We use cookies to ensure the functionality of the website. By clicking on the "Accept" button you agree to our use of cookies.</p>
                    <p>Cookies are small data files that are stored on your device when you visit our website.</p>
                    <p>We use cookies to remember your selected theme so that we can display it the next time you visit our website.</p>
                    <p>We do not use cookies for any other purpose.</p>
                    <p>By using our website, you consent to our use of cookies for this purpose. Please note that disabling cookies will play you a nice song.</p>
                    <div className="buttons">
                        <Reject />
                        <div className="accept" onMouseDown={event => acceptCookies(event)}>Accept</div>
                    </div>
                </div>
            </div>
        );
    }
    refreshTheme();
    let body = document.getElementById("body");
    if (body === null || body === undefined || !palette) {
        return (<></>);
    }
    body.style.transition = "1s";
    return (
        <>
            <i className="fa-solid fa-palette palette" onMouseDown={event => click(event)}></i>
        </>
    );
}

function setBackground(background: string) {
    document.body.style.backgroundImage = "url(" + background + ")";
}

function Reject() {
    const [hide, setHide] = useState({ top: 0, left: 0, scale: "1 1", transition: "1s" });

    function hover() {
        const newHide = {
            top: Math.floor(Math.random() * 600) - 300,
            left: Math.floor(Math.random() * 600) - 300,
            scale: "0.3 0.3",
            transition: "0.05s"
        };
        setHide(newHide);
    }

    function click() {
        if (Math.random() > 0.1) {
            hover()
        } else {
            window.location.href = rickroll;
        }
    }

    return (
        <div
            onMouseOver={hover}
            onMouseDown={click}
            style={{
                transform: `translate(${hide.left}px, ${hide.top}px)`,
                scale: `${hide.scale}`,
                transition: `${hide.transition}`
            }}
            className="reject"
        >
            Reject
        </div>
    );
}

function setTheme(theme: ThemeInfo) {
    setBackground(theme.image);
    let vars = document.querySelector(':root') as HTMLElement;
    if (vars === null || vars === undefined) {
        return;
    }
    vars.style.setProperty("--dark", hexToRgb(theme.dark));
    vars.style.setProperty("--neutral", hexToRgb(theme.neutral));
    vars.style.setProperty("--light", hexToRgb(theme.light));
    vars.style.setProperty("--superlight", hexToRgb(theme.superlight));
}

function refreshTheme() {
    let themeId: number;
    themeId = parseInt(getCookie("theme"));
    if (isNaN(themeId)) {
        themeId = defaultThemeId;
    }
    let themeInfo: ThemeInfo = themes[themeId];
    if (themeInfo === undefined || themeInfo === null) {
        themeInfo = themes[defaultThemeId];
    }
    setTheme(themeInfo);
}

function hexToRgb(hex: string) {
    // Remove the # symbol if present
    hex = hex.replace('#', '');

    // Convert the HEX color code to RGB components
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `${r}, ${g}, ${b}`;
}

async function acceptCookies(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    setCookie("cookies" + cookiesId, "true");
    setCookie("theme", defaultThemeId.toString());
    window.location.reload();
}

async function click(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    let palette = event.target as HTMLElement;
    if (palette.classList.contains("disabled")) {
        return;
    }
    palette.style.scale = "0.6 0.6";
    palette.classList.add("disabled");
    let themeId: number = parseInt(getCookie("theme"));
    themeId++;
    if (isNaN(themeId)) {
        themeId = defaultThemeId;
    }
    if (themeId === themes.length) {
        themeId = 0;
    }
    setCookie("theme", themeId.toString());
    refreshTheme()
    await new Promise(resolve => setTimeout(resolve, 200));
    palette.style.scale = "1 1";
    await new Promise(resolve => setTimeout(resolve, 850));
    palette.classList.remove("disabled");
}

function setCookie(name: string, value: string) {
    var CookieDate = new Date();
    CookieDate.setFullYear(CookieDate.getFullYear() + 100);
    document.cookie = name + "=" + value + "; path=/; expires=" + CookieDate.toUTCString() + ";";
}

function getCookie(name: string) {
    let cname = name + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length);
        }
    }
    return "";
}