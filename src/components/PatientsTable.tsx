import { selectPatientsState } from '@/features/patients/slice'
import { useAppSelector } from '@/hooks'
import { FC, useMemo } from 'react'
import Table from './Table';

const PatientsTable: FC = () => {
    const { patients } = useAppSelector(selectPatientsState);

    const columns = useMemo(
        () => [
            {
                Header: 'Name',
                accessor: 'name',
            },
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'OS',
                accessor: 'os',
            },
            {
                Header: 'PFS',
                accessor: 'pfs',
            },
            {
                Header: 'Stage',
                accessor: 'stage',
            },
        ],
        [patients]
    )

    return (
        <div>
            <Table data={patients} columns={columns} />
        </div>
    )
}

export default PatientsTable