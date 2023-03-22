import React, { FC, SetStateAction, useState } from "react";
import { IPeople } from "../App";

interface IProps {
    peoples: IPeople[];
    setPeoples: React.Dispatch<SetStateAction<IPeople[]>>;
}
const AddPeople: FC<IProps> = ({ peoples, setPeoples }) => {
    const [fullName, setFullName] = useState<string>("");
    const [age, setAge] = useState<string | number>("");
    const [img_url, setImg_url] = useState<string>("");
    const [bio, setBio] = useState<string>("");

    const onFinish = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setPeoples([
            ...peoples,
            {
                id: Math.floor(Math.random() * 100) + 1,
                fullName,
                age: Number(age),
                img_url,
                bio,
            },
        ]);
        handleRest();
    };

    const handleRest = (): void => {
        setFullName("");
        setAge("");
        setImg_url("");
        setBio("");
    };
    // function onFinish(e: React.FormEvent<HTMLFormElement>): void {
    //     e.preventDefault();
    //     console.log(e.currentTarget[1]);

    // }
    return (
        <div className="col-md-6 col-lg-6 mx-auto">
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
                    افزودن به لیست
                </button>
            </form>
        </div>
    );
};

export default AddPeople;
