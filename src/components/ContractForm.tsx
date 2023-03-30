import { initialContractsState } from "@/features/contracts/slice";
import { Contract, Patient } from "@/types/types";
import { useState } from "react";

interface ContractFormProps {
    onSubmit: (contract: Contract) => void;
    loading: boolean;
    error?: string;
    onCancel: () => void;
}

const ContractForm: React.FC<ContractFormProps> = ({ onSubmit, loading, error, onCancel }) => {
    const [contract, setContract] = useState<Contract>(initialContractsState.contract);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit(contract);
    };

    const onReset = () => {
        setContract(initialContractsState.contract);
        onCancel();
    };


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
                Contract Form {'\n'}
                Total value: {contract.totalValue}
            </h1>
            <form onSubmit={handleSubmit} className="
                flex flex-col w-1/2 h-screen justify-center items-center p-4 bg-gray-200 rounded-lg shadow-lg text-gray-800 text-xl
                gap-4">
                {error && <p className="text-red-500">{error}</p>}
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label className="w-15 -ml-2 mr-2" htmlFor="product">Product</label>
                    <select
                        name="product"
                        id="product"
                        className="border-2 border-gray-300 p-2 rounded"
                        value={contract.product._id}
                        onChange={(e) => setContract({
                            ...contract,
                            product: {
                                ...contract.product,
                                _id: e.target.value,
                            },
                        })}
                    >
                        <option value="">Select a product</option>
                        <option value="1">Product 1</option>
                        <option value="2">Product 2</option>
                    </select>
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label className="w-15 -ml-2 mr-2" htmlFor="patient">Patient</label>
                    <select
                        name="patient"
                        id="patient"
                        className="border-2 border-gray-300 p-2 rounded"
                        value={contract.patient._id}
                        onChange={(e) => setContract({
                            ...contract,
                            patient: {
                                ...contract.patient,
                                _id: e.target.value,
                            },
                        })}
                    >
                        <option value="">Select a patient</option>
                        <option value="1">Patient 1</option>
                        <option value="2">Patient 2</option>
                    </select>
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label className="w-15 -ml-2 mr-2" htmlFor="packSize">Pack Size</label>
                    <select
                        name="packSize"
                        id="packSize"
                        className="border-2 border-gray-300 p-2 rounded"
                        value={contract.packSize._id}
                        onChange={(e) => setContract({
                            ...contract,
                            packSize: {
                                ...contract.packSize,
                                _id: e.target.value,
                            },
                        })}
                    >
                        <option value="">Select a pack size</option>
                        <option value="1">Pack Size 1</option>
                        <option value="2">Pack Size 2</option>
                    </select>
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label className="w-15 -ml-2 mr-2" htmlFor="discount">Discount</label>
                    <select
                        name="discount"
                        id="discount"
                        className="border-2 border-gray-300 p-2 rounded"
                        value={contract.discount._id}
                        onChange={(e) => setContract({
                            ...contract,
                            discount: {
                                ...contract.discount,
                                _id: e.target.value,
                            },
                        })}
                    >
                        <option value="">Select a discount</option>
                        <option value="1">Discount 1</option>
                        <option value="2">Discount 2</option>
                    </select>
                </div>
                <div className="flex gap-x-2 justify-center items-center w-full">
                    <label className="w-15 -ml-3" htmlFor="startDate">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        id="startDate"
                        className="border-2 border-gray-300 p-2 rounded"
                        value={contract.startDate}
                        onChange={(e) => setContract({
                            ...contract,
                            startDate: e.target.value,
                        })}
                    />
                </div>
                <div className="flex gap-x-10 justify-center items-center w-full">
                    <button
                        type="reset"
                        className="p-2 border-red-300 border-2
                        transition duration-300 ease-in-out transform
                        hover:bg-gray-100 hover:text-red-500 hover:scale-105"
                        onClick={onReset}>
                        Cancel
                    </button>

                    <button
                        className="p-2 border-red-200 border-2
                        transition duration-300 ease-in-out transform
                        hover:bg-red-200 hover:text-white hover:scale-105
                        disabled:opacity-50 disabled:cursor-not-allowed
                        disabled:hover:bg-gray-100 disabled:hover:text-inherit disabled:hover:scale-100"
                        type="submit"
                        disabled={contract.product._id === "" || contract.patient._id === "" ||
                            contract.packSize._id === ""
                            || contract.discount._id === "" || loading}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContractForm;