import ContractForm from '@/components/ContractForm'
import { useCreateContractMutation } from '@/features/contracts/api'
import { Contract } from '@/types/types'
import parseError from '@/utils/parseError'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'

const ContractFormPage = () => {
    const [addContract, { isLoading, error }] = useCreateContractMutation();

    const router = useRouter();

    const errorMessage = useMemo(() => {
        if (error) {
            if ('status' in error) {
                return parseError(typeof error.status === 'number' ? error.status : 500);
            }
            return parseError(500);
        }
        return "";
    }, [error]);


    const onSubmit = (contract: Contract) => {
        addContract(contract).then(() => {
            router.push('/contracts')
        }).catch((err) => {
            console.log(err);
        });
    }

    const onCancel = () => {
        router.back();
    }


    return (
        <>
            <ContractForm loading={isLoading} onCancel={onCancel} onSubmit={onSubmit} error={errorMessage}/>
        </>
    )
}

export default ContractFormPage