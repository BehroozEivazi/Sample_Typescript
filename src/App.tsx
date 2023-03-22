import React, { useState } from "react";
// import Greeting from "./components/Greeting";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import UserContext, { CurrentUserContextType } from "./components/context/UserContext";
import Alert from "react-bootstrap/Alert";
import Home from "./components/Home";

export interface IPeople {
    id: number;
    fullName: string;
    age: number;
    img_url: string;
    bio?: string;
}

const App = () => {
    const [currnetUser, setCurrentUser] = useState<CurrentUserContextType | null>(null);

    return (
        <UserContext.Provider value={currnetUser}>
            <Header />
            <div className="container" dir="rtl">
                {currnetUser ? (
                    <Alert variant={"success"}>{currnetUser.Email} خوش آمدی</Alert>
                ) : (
                    <Alert variant={"danger"}>لطفاوارد شو یا ثبت نام کن</Alert>
                )}
                <Routes>
                    {!currnetUser ? (
                        <>
                            <Route
                                path="/login"
                                element={<Login setCurrentUser={setCurrentUser} />}
                            />
                            <Route
                                path="/signUp"
                                element={<SignUp setCurrentUser={setCurrentUser} />}
                            />
                        </>
                    ) : (
                        <>
                            <Route path="*" element={<Home />} />
                        </>
                    )}
                </Routes>
            </div>
        </UserContext.Provider>
    );
};

export default App;
