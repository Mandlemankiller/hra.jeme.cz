import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import "./members.css";

interface UserProps {
    uuid: string;
    role: string;
    date: string;
}

export default function Members() {
    return (
        <>
            <Helmet>
                <title>
                    Members
                </title>
            </Helmet>
            <p className="title">Members</p>
            <div className="members">
                <Member uuid="b4af2b8f-cc78-4817-9311-4950bb217efc" role="Owner" date="February 9, 2020" />
                <Member uuid="4e96b4ed-c333-450b-82fb-7b26c67fa04e" role="Member" date="February 9, 2020" />
                <Member uuid="17c28969-c17e-4e83-af98-760558ea208d" role="Member" date="January 5, 2022" />
                <Member uuid="40808836-2711-4193-94ae-58273535a9f3" role="Member" date="April 10, 2022" />
                <Member uuid="54f75718-c4fa-4331-8468-4e4bcb0ccf8c" role="Member" date="April 12, 2021" />
                <Member uuid="30f90bd6-19b7-4351-a630-8823a9c5b771" role="Member" date="April 4, 2023" />
                <Member uuid="3cce3e0d-6f41-4023-8378-a154d2c53553" role="Member" date="June 27, 2021" />
                <Member uuid="da42539c-49fb-475b-bb3e-dd8d197fa893" role="Member" date="April 10, 2021" />
                <Member uuid="e7fd11ff-2a19-4a82-8fd6-d403114322a1" role="Member" date="May 3, 2021" />
                <Member uuid="75e067fe-b973-481a-be96-a0c26cef8f4e" role="Member" date="January 9, 2021" />
                <Member uuid="7d23336f-fdbb-4310-befa-139fb7af6f28" role="Member" date="January 9, 2021" />
                <Member uuid="eb56c3b0-40a1-4917-8881-a678a6b1384d" role="Member" date="January 9, 2021" />
                <Member uuid="ccb5dbfd-6d5f-4765-9629-4aad8bb95947" role="Member" date="April 10, 2022" />
                <Member uuid="0d2871d9-98ae-4477-a99e-341d898e7cc3" role="Member" date="May 12, 2023" />
                <Member uuid="45ce907d-5e5e-4647-adf2-c61033b2f204" role="Member" date="June 12, 2023" />
            </div>
        </>
    );
}

function Member({ uuid, role, date }: UserProps) {
    const [username, setUsername] = useState("...");

    useEffect(() => {
        getUsername(uuid)
            .then(data => {
                setUsername(data.username);
            })
            .catch(error => {
                console.error(error);
            });
    }, [uuid]);

    function getUsername(uuid: string) {
        return fetch("https://api.ashcon.app/mojang/v2/user/" + uuid)
            .then(response => response.json())
            .catch(error => {
                console.error(error);
            });
    }

    const namemc = "https://namemc.com/profile/" + uuid;

    return (
        <div className="member">
            <a href={namemc} className="head-link" target="_blank" rel="noreferrer">
                <img src={"https://crafthead.net/helm/" + uuid} alt="head" className="head" />
            </a>
            <a href={namemc} className="username" target="_blank" rel="noreferrer">
                {username}
            </a>
            <span className="tooltip">
                {role} since<br />{date}
            </span>
        </div>
    );
}