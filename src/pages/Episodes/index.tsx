import React, { useEffect, useState } from 'react'
import { CharacterCard } from '../../components/CharacterCard'
import { EpisodeCard } from '../../components/EpisodeCard'
import { ListCardsContainer } from '../../components/ListCards/styles'
import { LocationCard } from '../../components/LocationCard'
import { ItemsPagination } from '../../components/Pagination'
import { SearchBar } from '../../components/SearchBar'
import { api } from '../../config/api'
import { Episode } from '../../models/episode.model'
import { Location } from '../../models/location.model'
import { LocationsContainer } from './styles'

export const Episodes = () => {

    const [loading, setLoading] = useState(false)
    const [episodes, setEpisodes] = useState<Episode[]>([])
    const [episodesSearch, setEpisodesSearch] = useState<Episode[]>([])
    const [search, setSearch] = useState("")
    const lowerSearch = search.toLowerCase().trim()

    const imgUrl = "https://www.kolpaper.com/wp-content/uploads/2020/03/rick-and-morty-hd-wallpaper.jpg"

    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(2)

    const getLocations = () => {
        api.get("/episode").then((res) => {
            setEpisodes(res.data.results)
            setEpisodesSearch(res.data.results)
            setTotalPages(res.data.info.pages)
            console.log(res.data)
        })
    }

    const changePagination = () => {
        api.get(`/episode/?page=${page}`).then((res) => {
            setEpisodes(res.data.results)
            setEpisodesSearch(res.data.results)
            console.log(res.data)
        })
    }

    const searchLocations = () => {
        api.get(`/episode/?name=${lowerSearch}`).then((res) => {
            setEpisodesSearch(res.data.results)
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
            setEpisodesSearch(episodes)
        }
    }, [search])

    useEffect(() => {
        changePagination()
    }, [page])

    return (
        <LocationsContainer>
            <SearchBar inLoading={loading} search={search} setSearch={setSearch} />
            <ListCardsContainer>
                {episodesSearch.map((episode) => (
                    <EpisodeCard episode={episode} img={imgUrl}/>
                ))}
            </ListCardsContainer>
            {episodesSearch.length >= 6 &&
                <ItemsPagination page={page} setPage={setPage} totalPages={totalPages} />
            }
        </LocationsContainer>
    )
}
