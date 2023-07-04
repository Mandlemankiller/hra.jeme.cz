import { Helmet } from "react-helmet";
import { GetMembers } from "../members/members";
import "./about.css";
import React from "react";

interface SeasonProps {
    id: number;
    start: string;
    end: string;
    versions: string;
    seed: string;
    memberUuids: string[];
    downloadLink: string;
}

export default function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="about">
                <div className="panel">
                    <h1>What's Steve?</h1>
                    <p>Steve is a private minecraft server for me and my friends.</p>
                    <p>There is a whitelist.</p>
                    <h1>Can I join?</h1>
                    <p>Unless you're my friend, probably not.</p>
                    <h1>Is it vanilla?</h1>
                    <p>Steve is a vanilla-like server, but not entirely.</p>
                    <p>There are some life-enhancing plugins and datapacks, such as saving items after death to grave, a weekly reward, live map, new crafting recipes and much more.</p>
                    <h1>What difficulty do you play on?</h1>
                    <p>Hard</p>
                </div>
                <div className="panel">
                    <h1>Which exploits are allowed?</h1>
                    <p>Bedrock breaking, carpet duping, rail duping, tnt duping and repeated villager curing for better trading prices.</p>
                    <h1>Seasons</h1>
                    <p>There have been 3 seasons so far, <a href="https://pripravu.jeme.cz" target="_blank" rel="noreferrer">the fourth is currently in preparation</a>.</p>
                    <p>The season usually lasts for two minecraft versions (~1 year), then we end the season and reset the world.</p>
                    <br />
                    <Season
                        id={1}
                        start="February 9, 2020"
                        end="April 12, 2020"
                        seed="unknown"
                        versions="1.15.1 - 1.15.2"
                        memberUuids={[
                            "b4af2b8f-cc78-4817-9311-4950bb217efc", // XD_CZ
                            "4e96b4ed-c333-450b-82fb-7b26c67fa04e", // Lolining_CZ
                            "4e58cad9-2166-4b01-81d8-3bcce36a34a6" // Trideser
                        ]}
                        downloadLink=""
                    />
                    <Season
                        id={2}
                        start="January 9, 2021"
                        end="December 11, 2021"
                        seed="6925178922379921219"
                        versions="1.15.2 - 1.16.5"
                        memberUuids={[
                            "b4af2b8f-cc78-4817-9311-4950bb217efc", // XD_CZ
                            "4e96b4ed-c333-450b-82fb-7b26c67fa04e", // Lolining_CZ
                            "4e58cad9-2166-4b01-81d8-3bcce36a34a6", // Trideser
                            "75e067fe-b973-481a-be96-a0c26cef8f4e", // Mata_K_2010
                            "7d23336f-fdbb-4310-befa-139fb7af6f28", // Kuba_K_2012
                            "eb56c3b0-40a1-4917-8881-a678a6b1384d", // tohu_cz
                            "8665ccde-7614-48a1-850f-8f4ca9691e52", // Radek476
                            "bca373fc-e15b-4622-812a-1cb722de9bfa", // Miisha476
                            "da42539c-49fb-475b-bb3e-dd8d197fa893", // ALeN669
                            "54f75718-c4fa-4331-8468-4e4bcb0ccf8c", // Das_3000
                            "78b646d8-04c2-4f8b-be90-0937d7e99f2e", // Beda_CZ
                            "e7fd11ff-2a19-4a82-8fd6-d403114322a1", // Eliska279
                            "3cce3e0d-6f41-4023-8378-a154d2c53553" // Caselyn
                        ]}
                        downloadLink="https://drive.google.com/uc?export=download&id=1hXl6zHJXxuq0zMJyoMP_ypiTbN6BwVtD"
                    />
                    <Season
                        id={3}
                        start="January 7, 2022"
                        end="June 30, 2023"
                        seed="2151901553968352745"
                        versions="1.18.1 - 1.19.4"
                        memberUuids={[
                            "b4af2b8f-cc78-4817-9311-4950bb217efc", // XD_CZ
                            "4e96b4ed-c333-450b-82fb-7b26c67fa04e", // Lolining_CZ
                            "75e067fe-b973-481a-be96-a0c26cef8f4e", // Mata_K_2010
                            "7d23336f-fdbb-4310-befa-139fb7af6f28", // Kuba_K_2012
                            "eb56c3b0-40a1-4917-8881-a678a6b1384d", // tohu_cz
                            "8665ccde-7614-48a1-850f-8f4ca9691e52", // Radek476
                            "bca373fc-e15b-4622-812a-1cb722de9bfa", // Miisha476
                            "da42539c-49fb-475b-bb3e-dd8d197fa893", // ALeN669
                            "54f75718-c4fa-4331-8468-4e4bcb0ccf8c", // Das_3000
                            "e7fd11ff-2a19-4a82-8fd6-d403114322a1", // Eliska279
                            "3cce3e0d-6f41-4023-8378-a154d2c53553", // Caselyn
                            "17c28969-c17e-4e83-af98-760558ea208d", // Libertas007
                            "40808836-2711-4193-94ae-58273535a9f3", // Tomkudleq
                            "ccb5dbfd-6d5f-4765-9629-4aad8bb95947", // bajousek
                            "30f90bd6-19b7-4351-a630-8823a9c5b771", // Gemitist
                            "0d2871d9-98ae-4477-a99e-341d898e7cc3", // kopikiadu
                            "45ce907d-5e5e-4647-adf2-c61033b2f204" // MonsieurAustrian
                        ]}
                        downloadLink="https://drive.google.com/uc?export=download&id=186-Nc3t3_-tFNOdSuaBqoK_S7Zo4Tvil"
                    />
                    <Season
                        id={4}
                        start="Comming soon..."
                        end=""
                        seed="It's a secret!"
                        versions="1.20.1 - *"
                        memberUuids={[
                            "b4af2b8f-cc78-4817-9311-4950bb217efc", // XD_CZ
                            "4e96b4ed-c333-450b-82fb-7b26c67fa04e", // Lolining_CZ
                            "75e067fe-b973-481a-be96-a0c26cef8f4e", // Mata_K_2010
                            "7d23336f-fdbb-4310-befa-139fb7af6f28", // Kuba_K_2012
                            "eb56c3b0-40a1-4917-8881-a678a6b1384d", // tohu_cz
                            "da42539c-49fb-475b-bb3e-dd8d197fa893", // ALeN669
                            "54f75718-c4fa-4331-8468-4e4bcb0ccf8c", // Das_3000
                            "e7fd11ff-2a19-4a82-8fd6-d403114322a1", // Eliska279
                            "3cce3e0d-6f41-4023-8378-a154d2c53553", // Caselyn
                            "17c28969-c17e-4e83-af98-760558ea208d", // Libertas007
                            "40808836-2711-4193-94ae-58273535a9f3", // Tomkudleq
                            "ccb5dbfd-6d5f-4765-9629-4aad8bb95947", // bajousek
                            "30f90bd6-19b7-4351-a630-8823a9c5b771", // Gemitist
                            "0d2871d9-98ae-4477-a99e-341d898e7cc3", // kopikiadu
                            "45ce907d-5e5e-4647-adf2-c61033b2f204" // MonsieurAustrian
                        ]}
                        downloadLink=""
                    />
                </div>
            </div>
        </>
    );
}

function Season({ id, start, end, seed, versions, memberUuids, downloadLink }: SeasonProps) {
    return (
        <>
            <p onMouseDown={open} className="season-link" >Season {id}</p>
            <div id={`season-window-${id}`} className="season-window close" onMouseDown={event => close(event)}>
                <div id={`season-content-${id}`} className="season-content">
                    <i className="fa-solid fa-xmark xmark close" onMouseDown={event => close(event)}></i>
                    <h1>Season {id}</h1>
                    <Date />
                    <p className="season-text">Versions: {versions}</p>
                    <Seed />
                    <Download />
                    <Members />
                </div>
            </div>
        </>
    )


    function Seed() {
        const isNum: boolean = /^\d+$/.test(seed);
        if (isNum) {
            return (
                <p className="season-text seed">
                    Seed: {seed}
                    <i className="fa-solid fa-copy copy" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} onMouseDown={click}></i>
                    <span className="copy-span" id={`copy-span-${id}`}></span>
                </p>
            )
        } else {
            return (<p className="season-text seed">Seed: {seed}</p>)
        }

        function mouseEnter() {
            let span = document.getElementById(`copy-span-${id}`)
            if (span === null || span === undefined) return;
            span.classList.add("copy-span-active")
        }
        async function mouseLeave() {
            let span = document.getElementById(`copy-span-${id}`)
            if (span === null || span === undefined) return;
            span.classList.remove("copy-span-active")
        }
        async function click() {
            const textarea = document.createElement("textarea");
            textarea.value = seed;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);

            let span = document.getElementById(`copy-span-${id}`)
            if (span === null || span === undefined) return;
            span.classList.add("copy-span-copied")
            await new Promise(resolve => setTimeout(resolve, 200));
            span.style.opacity = "0";
            await new Promise(resolve => setTimeout(resolve, 1000));
            span.classList.remove("copy-span-active")
            span.classList.remove("copy-span-copied")
            span.style.opacity = "";
        }
    }

    function Date() {
        if (end === "") {
            return (<p className="date">{start}</p>);
        } else {
            return (<p className="date">{start} - {end}</p>);
        }
    }

    function Download() {
        if (downloadLink === "") {
            return (<></>);
        } else {
            return (
                <p className="season-text">World download: <a href={downloadLink} target="_blank" rel="noreferrer">download here</a></p>
            );
        }
    }

    function Members() {
        return (
            <>
                <div className="season-members">
                    <p className="season-members-title">Members ({memberUuids.length}):</p>
                    <div className="season-members-content">
                        <GetMembers memberUuids={memberUuids} getFormer={true}/>
                    </div>
                </div>
            </>
        );
    }

    function open() {
        let seasonWindow = document.getElementById(`season-window-${id}`);
        if (seasonWindow === null || seasonWindow === undefined) return;
        let seasonContent = document.getElementById(`season-content-${id}`);
        if (seasonContent === null || seasonContent === undefined) return;

        seasonWindow.style.opacity = "1";
        seasonWindow.style.pointerEvents = "all";
    }
    function close(event: React.MouseEvent<HTMLElement, Event>) {
        let target = event.target as HTMLElement;
        if (!target.classList.contains("close")) return;
        let seasonWindow = document.getElementById(`season-window-${id}`);
        if (seasonWindow === null || seasonWindow === undefined) return;
        let seasonContent = document.getElementById(`season-content-${id}`);
        if (seasonContent === null || seasonContent === undefined) return;
        seasonWindow.style.opacity = "";
        seasonWindow.style.pointerEvents = "";
    }
}