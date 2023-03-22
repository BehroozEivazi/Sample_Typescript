import React, { FC, SetStateAction, useEffect } from "react";
import { IPeople } from "../App";
import EditPeople from "./EditPeople";
import { AiOutlineUserDelete } from "react-icons/ai";
interface IProps {
    peoples: IPeople[];
    setPeoples: React.Dispatch<SetStateAction<IPeople[]>>;
}
const List: FC<IProps> = ({ peoples, setPeoples }) => {
    function handleDeletePeople(id: number): void {
        console.log(id);
        let persons = [...peoples];
        setPeoples(persons.filter((i) => i.id != id));
    }

    useEffect(() => {
        setPeoples(peoples);
    }, [peoples]);

    const renderList: JSX.Element[] = peoples.map((people) => {
        return (
            <div className="col-12 col-lg-6 mb-2" key={people.id}>
                <div className="card">
                    <div className="card-body d-flex align-items-center">
                        <img
                            width={100}
                            height={100}
                            className="img-fluid rounded img-thumbnail"
                            src={people.img_url}
                            alt={people.fullName}
                        />
                        <div className="me-3">
                            <p>
                                <span>{people.fullName}</span>
                                <span className="badge bg-primary me-3">{people.age} سال</span>
                            </p>
                            <p className="text-muted">{people.bio}</p>
                        </div>
                    </div>
                    <div className="operation_btns">
                        <EditPeople people={people} peoples={peoples} setPeoples={setPeoples} />
                        <AiOutlineUserDelete
                            size={30}
                            onClick={() => {
                                handleDeletePeople(people.id);
                            }}
                            className="text-danger m1"
                        />
                    </div>
                </div>
            </div>
        );
    });
    return <div className="row">{renderList}</div>;
};

export default List;
