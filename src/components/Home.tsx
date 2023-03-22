import React, { useEffect, useState } from "react";
import UserList from "./UserList";
export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}
// interface IUserType {
//     Users: IUser[];
// }

function Home() {
    const [users, setUsers] = useState<IUser[]>([]);
    function handler(value: IUser): void {
        console.log(value);
    }
    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let usrs = await res.json();
        setUsers(usrs);
    }

    return <UserList items={users} handler={handler} />;
}

export default Home;
