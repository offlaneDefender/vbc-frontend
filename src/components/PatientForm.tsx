import { Patient } from "@/types/types";
import { useState } from "react";

const PatientForm: React.FC = () => {
    const [patient, setPatient] = useState<Patient>({
        name: "",
        age: 0,
        _id: "",
        os: 0,
        pfs: 0,
        stage: 1,
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(patient);
    };

    return (
        <div className="flex w-full h-full items-center justify-center">
            <h1 className="
                text-4xl
                font-bold
                text-gray-800
                mb-4
                w-1/2
                text-center"
            >
                Patient Form
            </h1>
            <form onSubmit={handleSubmit}
                className="
                flex flex-col w-1/2 h-full justify-center items-center p-4 bg-gray-200 rounded-lg shadow-lg text-gray-800 text-xl
                gap-4"
            >
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        onChange={(e) => setPatient({ ...patient, name: e.target.value })}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input
                        type="number"
                        id="age"
                        onChange={(e) => setPatient({ ...patient, age: parseInt(e.target.value) })}
                    />
                </div>
                <div>
                    <label htmlFor="os">OS</label>
                    <input
                        type="number"
                        id="os"
                        onChange={(e) => setPatient({ ...patient, os: parseInt(e.target.value) })}
                    />
                </div>
                <div>
                    <label htmlFor="pfs">PFS</label>
                    <input
                        type="number"
                        id="pfs"
                        onChange={(e) => setPatient({ ...patient, pfs: parseInt(e.target.value) })}
                    />
                </div>
                <div>
                    <label htmlFor="stage">Stage</label>
                    <input
                        type="range"
                        id="stage"
                        min="1"
                        max="4"
                        list="stageValues"
                        onChange={(e) => setPatient({ ...patient, stage: parseInt(e.target.value) as typeof patient.stage })}
                    />
                    <datalist id="stageValues">
                        <option value="1" label="1" />
                        <option value="2" label="2" />
                        <option value="3" label="3" />
                        <option value="4" label="4" />
                    </datalist>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default PatientForm;