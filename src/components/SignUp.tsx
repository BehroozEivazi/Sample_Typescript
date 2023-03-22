import React from "react";
import { CurrentUserContextType } from "./context/UserContext";
interface IProps {
    setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUserContextType | null>>;
}

function SignUp({ setCurrentUser }: IProps) {
    return <div>SignUp</div>;
}

export default SignUp;
