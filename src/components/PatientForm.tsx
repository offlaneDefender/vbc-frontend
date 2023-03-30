import { Patient } from "@/types/types";
import { useState } from "react";

interface PatientFormProps {
    onSubmit: (patient: Patient) => void;
    loading: boolean;
    error?: string;
}

const PatientForm: React.FC<PatientFormProps> = ({onSubmit, loading, error}) => {
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
        onSubmit(patient);
    };

    const stageOptions = Array.from({ length: 4 }, (_, i) => i + 1).map((i) => (
        <option key={i} value={i} label={i.toString()} />
    ));

    return (
        <div className="flex w-full h-full items-center justify-center">
            <h1 className="
                text-4xl
                font-bold
                text-gray-800
                pb-32
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
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label htmlFor="name"
                        className="w-10 -ml-2 mr-2">Name</label>
                    <input
                        className="rounded shadow p-1"
                        type="text"
                        id="name"
                        value={patient.name}
                        onChange={(e) => setPatient({ ...patient, name: e.target.value })}
                    />
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label htmlFor="age"
                        className="w-10">Age</label>
                    <input
                        className="rounded shadow p-1"
                        type="number"
                        id="age"
                        min={0}
                        value={patient.age}
                        onChange={(e) => setPatient({ ...patient, age: parseInt(e.target.value) })}
                    />
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label htmlFor="os"
                        className="w-10">OS</label>
                    <input
                        className="rounded shadow p-1"
                        type="number"
                        id="os"
                        min={0}
                        value={patient.os}
                        onChange={(e) => setPatient({ ...patient, os: parseInt(e.target.value) })}
                    />
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label htmlFor="pfs"
                        className="w-10">PFS</label>
                    <input
                        className="rounded shadow p-1"
                        type="number"
                        id="pfs"
                        min={0}
                        value={patient.pfs}
                        onChange={(e) => setPatient({ ...patient, pfs: parseInt(e.target.value) })}
                    />
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label htmlFor="stage">Stage</label>
                    <input
                        type="range"
                        id="stage"
                        min="1"
                        max="4"
                        value={patient.stage}
                        list="stageValues"
                        onChange={(e) => setPatient({ ...patient, stage: parseInt(e.target.value) as typeof patient.stage })}
                    />
                    <datalist id="stageValues">
                        {stageOptions}
                    </datalist>
                </div>
                <button className="p-2 border-red-200 border-2
                transition duration-300 ease-in-out transform
                hover:bg-red-200 hover:text-white hover:scale-105
                disabled:opacity-50 disabled:cursor-not-allowed
                disabled:hover:bg-gray-100 disabled:hover:text-inherit disabled:hover:scale-100
                "
                    type="submit"
                    disabled={patient.name === "" || patient.age === 0 || patient.os === 0 || patient.pfs === 0 || loading}
                >Submit</button>
            </form>
        </div>
    );
};

export default PatientForm;