import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { IUser } from "./Home";

interface IProps<T> {
    items: T[];
    handler: (value: T) => void;
}

function UserList<T extends IUser>({ items, handler }: IProps<T>) {
    return (
        <ListGroup>
            {items.map((item, index) => {
                return (
                    <ListGroup.Item
                        action
                        key={index}
                        onClick={() => {
                            handler(item);
                        }}
                    >
                        {item.username}
                    </ListGroup.Item>
                );
            })}
        </ListGroup>
    );
}

export default UserList;
