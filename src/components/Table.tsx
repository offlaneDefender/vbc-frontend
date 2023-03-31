import React, { FC } from 'react'
import { useTable } from 'react-table'

interface TableProps<T> {
    data: T[];
    columns: ColHeader[];
}

export interface ColHeader {
    Header: string;
    accessor: string;
}

const Table: FC<TableProps<any>> = ({ data, columns }) => {
    const instance = useTable({ data, columns });

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = instance

    return (
        <table {...getTableProps()} className='w-full h-full rounded shadow border-4 border-purple-400 bg-gray-200'>
            <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className='text-center border-y-2 border-black'>
                                        {
                                            column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {
                    rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {
                                    row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps()} className='text-center'>
                                                {
                                                    cell.render('Cell')}
                                            </td>
                                        )
                                    })}
                            </tr>
                        )
                    })}
            </tbody>
        </table>
    )
}

export default Table