import { Helmet } from "react-helmet";
import "./about.css";

export default function About() {
    return (
        <>
            <Helmet>
                <title>About</title>
            </Helmet>
            <div className="about">
                <div>
                    <h1>About Steve</h1>
                    <p>Steve is a private minecraft server for me and my friends.</p>
                    <h1>Seasons</h1>
                    <p>Season 1: February 9, 2020 - April 12, 2020</p>
                    <p>Season 2: January 9, 2021 - December 11, 2021</p>
                    <p>Season 3: January 7, 2022 - *</p>
                    <h1>What is the seed?</h1>
                    <p>The seed will be released after the world reset to prevent players from abusing it to find structures, buried chests, etc.</p>
                </div>
                <div>
                    <h1>Are there any world downloads?</h1>
                    <p>
                        Only one from the second season. You can watch the tutorial on how to download it on <a href="https://youtu.be/_Chid93D2Zk" target="_blank" rel="noreferrer">youtube</a>.
                    </p>
                    <h1>Is it vanilla?</h1>
                    <p>Steve is a vanilla-like server, but not entirely.</p>
                    <p>There are some life-enhancing plugins and datapacks, such as saving items after death to graves or a weekly reward.</p>
                    <h1>What is the minecraft version?</h1>
                    <p>1.19.4</p>
                </div>
            </div>
        </>
    );
}