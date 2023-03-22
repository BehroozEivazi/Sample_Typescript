import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { IPeople } from "../App";

interface IProps {
    people: IPeople;
    peoples: IPeople[];
    setPeoples: React.Dispatch<SetStateAction<IPeople[]>>;
}

const EditPeople: FC<IProps> = ({ people, peoples, setPeoples }) => {
    const [show, setShow] = useState<boolean>(false);
    const [fullName, setFullName] = useState<string>(people.fullName);
    const [age, setAge] = useState<string | number>(people.age);
    const [img_url, setImg_url] = useState<string>(people.img_url);
    const [bio, setBio] = useState<string | undefined>(people.bio);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const onFinish = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const persons = [...peoples];
        const index: number = persons.findIndex((p) => p.id == people.id);
        persons[index] = {
            id: people.id,
            fullName,
            age: Number(age),
            bio,
            img_url,
        };
        setPeoples(persons);
        setShow(false);
    };

    return (
        <>
            <FaUserEdit size={30} className="text-primary m-1" onClick={handleShow} />

            <Modal centered show={show} size="lg" onHide={handleClose} dir="rtl">
                <Modal.Header>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="col-md-12 col-lg-12 mx-auto">
                        <form autoComplete="off" className="mt-3" onSubmit={onFinish}>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="نام و نام خانوادگی"
                                value={fullName}
                                className="form-control mb-2"
                                onChange={(e) => setFullName(e.target.value)}
                            />
                            <input
                                type="number"
                                name="age"
                                placeholder="سن"
                                value={age}
                                className="form-control mb-2"
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <input
                                type="text"
                                name="img-url"
                                placeholder="آدرس تصویر پروفایل"
                                value={img_url}
                                className="form-control mb-2"
                                onChange={(e) => setImg_url(e.target.value)}
                            />
                            <textarea
                                name="bio"
                                rows={7}
                                value={bio}
                                className="form-control mb-2"
                                placeholder="بیوگرافی"
                                onChange={(e) => setBio(e.target.value)}
                            />
                            <button type="submit" className="btn btn-success">
                                ویرایش
                            </button>
                            <button
                                type="button"
                                className="btn btn-danger mx-2"
                                onClick={() => setShow(false)}
                            >
                                بستن
                            </button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default EditPeople;
