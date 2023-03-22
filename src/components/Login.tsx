import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CurrentUserContextType } from "./context/UserContext";
type IProps = {
    setCurrentUser: React.Dispatch<React.SetStateAction<CurrentUserContextType | null>>;
};

function Login({ setCurrentUser }: IProps) {
    function onFinish(event: React.FormEvent<HTMLFormElement>): void {
        event.preventDefault();
        let Email = event.currentTarget.Email.value;
        let Password = event.currentTarget.Password.value;
        setCurrentUser({
            Email,
            Password,
        });
    }
    return (
        <div className="col-md-3 col-lg-3 mx-auto mt-24">
            <Form onSubmit={onFinish}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="Email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="Password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Login;
