import React from 'react'
import { SearchContainer, SearchInput } from './styles'
import { GrSearch } from "react-icons/gr"
import Loader from '../../assets/loader.gif'
import { TailSpin } from 'react-loader-spinner'

type Props = {
    inLoading: boolean;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({ inLoading = false, search, setSearch }: Props) => {
    return (
        <SearchContainer>
            <GrSearch fontSize={20} color='#1F1F1F' className='cursor-pointer' />
            <SearchInput value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Pesquisar' />
            {inLoading &&
                <TailSpin
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="tail-spin-loading"
                    radius="1"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                />
            }
        </SearchContainer>
    )
}
