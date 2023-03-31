import { initialContractsState } from "@/features/contracts/slice";
import { useGetDiscountsQuery } from "@/features/discounts/api";
import { useGetPackSizesQuery } from "@/features/packSizes/api";
import { useGetPatientsQuery } from "@/features/patients/api";
import { useGetMedicinalProductsQuery } from "@/features/products/api";
import { Contract } from "@/types/types";
import { useState } from "react";

interface ContractFormProps {
    onSubmit: (contract: Contract) => void;
    loading: boolean;
    error?: string;
    onCancel: () => void;
}

const ContractForm: React.FC<ContractFormProps> = ({ onSubmit, loading, error, onCancel }) => {
    const [contract, setContract] = useState<Contract>(initialContractsState.contract);

    const products = useGetMedicinalProductsQuery();
    const patients = useGetPatientsQuery();
    const packSizes = useGetPackSizesQuery();
    const discounts = useGetDiscountsQuery();

    const totalValue = contract.product.prices[0].price * (1 - contract.discount.value);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({...contract, totalValue: totalValue});
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
                Total value: {totalValue}
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
                            product:
                                products.data?.find((product) => product._id === e.target.value)
                                ?? {
                                    ...contract.product,
                                    _id: e.target.value,
                                },
                        })}
                    >
                        <option value="">Select a product</option>
                        {products.data?.map((product) => (
                            <option key={product._id} value={product._id}>{product.name}</option>
                        ))}
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
                            patient: patients.data?.find((patient) => patient._id === e.target.value)
                                ?? {
                                ...contract.patient,
                                _id: e.target.value,
                            },
                        })}
                    >
                        <option value="">Select a patient</option>
                        {patients.data?.map((patient) => (
                            <option key={patient._id} value={patient._id}>{patient.name}</option>
                        ))}
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
                            packSize:
                                packSizes.data?.find((packSize) => packSize._id === e.target.value) ?? {
                                    ...contract.packSize,
                                    _id: e.target.value,
                                },
                        })}
                    >
                        <option value="">Select a pack size</option>
                        {packSizes.data?.map((packSize) => (
                            <option key={packSize._id} value={packSize._id}>{packSize.name}</option>
                        ))}
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
                            discount:
                                discounts.data?.find((discount) => discount._id === e.target.value) ?? {
                                ...contract.discount,
                                _id: e.target.value,
                            },
                        })}
                    >
                        <option value="">Select a discount</option>
                        {discounts.data?.map((discount) => (
                            <option key={discount._id} value={discount._id}>{discount.value * 100}%</option>
                        ))}
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