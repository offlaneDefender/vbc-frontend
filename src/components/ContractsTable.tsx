
import React from 'react'
import { useAppSelector } from '@/hooks';
import { selectContracts } from '@/features/contracts/slice';
import Table from './Table';

const ContractsTable = () => {
    const contracts = useAppSelector(selectContracts);

    const columns = React.useMemo(
        () => [
            {
                Header: 'Patient',
                accessor: 'patient.name',
            },
            {
                Header: 'Product',
                accessor: 'product.name',
            },
            {
                Header: 'Price',
                accessor: 'totalValue',
            },
        ],
        [contracts]
    )

    return (
        <div>
            <Table data={contracts} columns={columns} />
        </div>
    )
}

export default ContractsTable