import React, { useState } from "react";
import List from "./components/List";
import AddPeople from "./components/AddPeople";
export interface IPeople {
    id: number;
    fullName: string;
    age: number;
    img_url: string;
    bio?: string;
}

const App = () => {
    const [peoples, setPeoples] = useState<IPeople[]>([
        {
            id: 1,
            fullName: "بهروز عیوضی",
            age: 27,
            img_url:
                "https://imgv2.enama.ir/Product/Get/414/230/1000193/2aadf960-024a-11eb-8da3-8fd75e0200cb.jpg",
            bio: "توسعه دهنده وب",
        },
    ]);
    return (
        <div className="container" dir="rtl">
            <h4 className="alert alert-info">مدیریت اشخاص</h4>
            <List peoples={peoples} setPeoples={setPeoples} />
            <AddPeople peoples={peoples} setPeoples={setPeoples} />
        </div>
    );
};

export default App;
