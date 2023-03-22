import React from "react";

type GreetingProps = {
    name: string;
};

function Greeting({ name }: GreetingProps) {
    return <div>{name}</div>;
}

export default Greeting;
