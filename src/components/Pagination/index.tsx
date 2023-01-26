import React from 'react'
import { Pagination } from '@mui/material'
import Stack from '@mui/material/Stack';

type Props = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    totalPages: number;
};

export const ItemsPagination = ({ page, setPage, totalPages }: Props) => {
    return (
        <div className='flex w-full items-center justify-center mb-20'>
            <Pagination count={totalPages} page={page} shape="rounded" color="primary" onChange={(e, value) => setPage(value)} />
        </div>
    )
}
