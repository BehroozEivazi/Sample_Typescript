import React from "react";

export interface CurrentUserContextType {
    Email: string;
    Password: string;
}
const UserContext = React.createContext<CurrentUserContextType | null>(null);

export default UserContext;
