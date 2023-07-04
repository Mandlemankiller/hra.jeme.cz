import { Helmet } from "react-helmet";
import { useState, useEffect } from 'react';
import { setCookie, getCookie } from "../../theme/theme";
import "./members.css";

interface UserProps {
    uuid: string;
    role: string;
    start: string;
    end: string;
    former: boolean;
}

interface GetMembersProps {
    memberUuids: string[];
    getFormer: boolean;
}

export const members: Map<string, JSX.Element> = new Map();
addMember("b4af2b8f-cc78-4817-9311-4950bb217efc", "Owner", "February 9, 2020")
addMember("4e96b4ed-c333-450b-82fb-7b26c67fa04e", "Member", "February 9, 2020")
addMember("17c28969-c17e-4e83-af98-760558ea208d", "Member", "January 5, 2022")
addMember("40808836-2711-4193-94ae-58273535a9f3", "Member", "April 10, 2022")
addMember("54f75718-c4fa-4331-8468-4e4bcb0ccf8c", "Member", "April 12, 2021")
addMember("30f90bd6-19b7-4351-a630-8823a9c5b771", "Member", "April 4, 2023")
addMember("3cce3e0d-6f41-4023-8378-a154d2c53553", "Member", "June 27, 2021")
addMember("da42539c-49fb-475b-bb3e-dd8d197fa893", "Member", "April 10, 2021")
addMember("e7fd11ff-2a19-4a82-8fd6-d403114322a1", "Member", "May 3, 2021")
addMember("75e067fe-b973-481a-be96-a0c26cef8f4e", "Member", "January 9, 2021")
addMember("7d23336f-fdbb-4310-befa-139fb7af6f28", "Member", "January 9, 2021")
addMember("eb56c3b0-40a1-4917-8881-a678a6b1384d", "Member", "January 9, 2021")
addMember("ccb5dbfd-6d5f-4765-9629-4aad8bb95947", "Member", "April 10, 2022")
addMember("0d2871d9-98ae-4477-a99e-341d898e7cc3", "Member", "May 12, 2023")
addMember("45ce907d-5e5e-4647-adf2-c61033b2f204", "Member", "June 12, 2023")
addMember("4e58cad9-2166-4b01-81d8-3bcce36a34a6", "Member", "February 9, 2020", "April 17, 2021", true) // Trideser
addMember("8665ccde-7614-48a1-850f-8f4ca9691e52", "Member", "March 14, 2021", "May 12, 2023", true) // Radek476
addMember("bca373fc-e15b-4622-812a-1cb722de9bfa", "Member", "March 14, 2021", "May 12, 2023", true) // Miisha476
addMember("78b646d8-04c2-4f8b-be90-0937d7e99f2e", "Member", "April 17, 2021", "April 10, 2022", true) // Beda_CZ


export default function Members() {
    const [isChecked, setIsChecked] = useState(getCookie("show-former") === "true");
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
        setCookie("show-former", event.target.checked.toString());
    };
    return (
        <>
            <Helmet>
                <title>
                    Members
                </title>
            </Helmet>
            <p className="title">Members</p>
            <div className="members">
                <GetMembers memberUuids={[
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
                    "3cce3e0d-6f41-4023-8378-a154d2c53553", // Caselyn
                    "17c28969-c17e-4e83-af98-760558ea208d", // Libertas007
                    "40808836-2711-4193-94ae-58273535a9f3", // Tomkudleq
                    "ccb5dbfd-6d5f-4765-9629-4aad8bb95947", // bajousek
                    "30f90bd6-19b7-4351-a630-8823a9c5b771", // Gemitist
                    "0d2871d9-98ae-4477-a99e-341d898e7cc3", // kopikiadu
                    "45ce907d-5e5e-4647-adf2-c61033b2f204", // MonsieurAustrian
                ]} getFormer={isChecked} />
            </div>
            <p className="show-former">
                Show former members:
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <span className="slider"></span>
                </label>
            </p>
        </>
    );
}

export function Member({ uuid, role, start, end, former }: UserProps) {
    const [username, setUsername] = useState("...");

    if (former) {
        role = "Former " + role;
    }

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
        <div className={memberClassName()}>
            <a href={namemc} className="head-link" target="_blank" rel="noreferrer">
                <img src={"https://crafthead.net/helm/" + uuid} alt="head" className="head" />
            </a>
            <a href={namemc} className="username" target="_blank" rel="noreferrer">
                {username}
            </a>
            <Tooltip />
        </div>
    );

    function memberClassName() {
        if (former === true) {
            return "member former"
        } else {
            return "member"
        }
    }

    function Tooltip() {
        if (end === "") {
            return (
                <span className="tooltip">
                    <span className="role">{role}</span>
                    <br />
                    <span className="start">{start}</span>
                </span>
            );
        } else {
            return (
                <span className="tooltip">
                    <span className="role">{role}</span>
                    <br />
                    <span className="start">{start}</span>
                    <br />
                    <span className="end">{end}</span>
                </span>
            );
        }
    }
}

function addMember(uuid: string, role: string, start: string, end?: string, former?: boolean) {
    let endDate: string;
    if (end) {
        endDate = end
    } else {
        endDate = ""
    }

    let isFormer: boolean = false;

    if (former) {
        isFormer = former;
    }

    members.set(uuid, <Member uuid={uuid} role={role} start={start} end={endDate} key={members.size - 1} former={isFormer} />)
}

export function GetMembers({ memberUuids, getFormer }: GetMembersProps) {
    const memberList: Array<JSX.Element> = [];
    for (let uuid of memberUuids) {
        let member = members.get(uuid);
        if (member === undefined) continue;
        if (member.props.former && !getFormer) continue;
        memberList.push(member);
    }
    return (
        <>
            {memberList}
        </>
    );
}