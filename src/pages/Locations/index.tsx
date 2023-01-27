import React, { useEffect, useState } from 'react'
import { CharacterCard } from '../../components/CharacterCard'
import { ListCardsContainer } from '../../components/ListCards/styles'
import { LocationCard } from '../../components/LocationCard'
import { ItemsPagination } from '../../components/Pagination'
import { SearchBar } from '../../components/SearchBar'
import { api } from '../../config/api'
import { Location } from '../../models/location.model'
import { LocationsContainer } from './styles'

export const Locations = () => {

    const [loading, setLoading] = useState(false)
    const [locations, setLocations] = useState<Location[]>([])
    const [locationsSearch, setLocationsSearch] = useState<Location[]>([])
    const [search, setSearch] = useState("")
    const lowerSearch = search.toLowerCase().trim()

    const imgUrl = "http://4.bp.blogspot.com/-xHBcEMJ1P8U/XeSxMU-0ZmI/AAAAAAAAB1I/UzHX_ecWDn4tIBe0CVd-oXgHR_MlW19vQCK4BGAYYCw/s1600/SecretToilet3.jpg"

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(2)

    const getLocations = () => {
        api.get("/location").then((res) => {
            setLocations(res.data.results)
            setLocationsSearch(res.data.results)
            setTotalPages(res.data.info.pages)
            console.log(res.data)
        })
    }

    const changePagination = () => {
        api.get(`/location/?page=${page}`).then((res) => {
            setLocations(res.data.results)
            setLocationsSearch(res.data.results)
            console.log(res.data)
        })
    }

    const searchLocations = () => {
        api.get(`/location/?name=${lowerSearch}`).then((res) => {
            setLocationsSearch(res.data.results)
            console.log(res.data)
        })
    }

    useEffect(() => {
        getLocations()
    }, [])

    useEffect(() => {
        if (search.trim()) {
            searchLocations()
        } else {
            setLocationsSearch(locations)
        }
    }, [search])

    useEffect(() => {
        changePagination()
    }, [page])

    return (
        <LocationsContainer>
            <SearchBar inLoading={loading} search={search} setSearch={setSearch} />
            <ListCardsContainer>
                {locationsSearch.map((location) => (
                    <LocationCard location={location} img={imgUrl}/>
                ))}
            </ListCardsContainer>
            {locationsSearch.length >= 6 &&
                <ItemsPagination page={page} setPage={setPage} totalPages={totalPages} />
            }
        </LocationsContainer>
    )
}
