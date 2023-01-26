import React, { useEffect, useState } from 'react'
import { CharactersContainer } from './styles'
import { SearchBar } from '../../components/SearchBar'
import { ListCardsContainer } from '../../components/ListCards/styles'
import { Character } from '../../models/character.model'
import { api } from '../../config/api'
import { CharacterCard } from '../../components/CharacterCard'
import { ItemsPagination } from '../../components/Pagination'

export const Characters = () => {

  const [loading, setLoading] = useState(false)
  const [characters, setCharacters] = useState<Character[]>([])
  const [charactersSearch, setCharactersSearch] = useState<Character[]>([])
  const [search, setSearch] = useState("")
  const lowerSearch = search.toLowerCase().trim()

  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(2)

  const getCharacters = () => {
    api.get("/character").then((res) => {
      setCharacters(res.data.results)
      setCharactersSearch(res.data.results)
      setTotalPages(res.data.info.pages)
    })
  }

  const changePagination = () => {
    api.get(`/character/?page=${page}`).then((res) => {
      setCharacters(res.data.results)
      setCharactersSearch(res.data.results)
    })
  }

  const searchCharacter = () => {
    api.get(`/character/?name=${lowerSearch}`).then((res) => {
      setCharactersSearch(res.data.results)
    })
  }

  useEffect(() => {
    getCharacters()
  }, [])

  useEffect(() => {
    if (search.trim()) {
      searchCharacter()
    } else {
      setCharactersSearch(characters)
    }
  }, [search])

  useEffect(() => {
    changePagination()
  }, [page])

  return (
    <CharactersContainer>
      <SearchBar inLoading={loading} search={search} setSearch={setSearch} />
      <ListCardsContainer>
        {charactersSearch.map((character) => (
          <CharacterCard character={character} />
        ))}
      </ListCardsContainer>
      {charactersSearch.length >= 6 &&
        <ItemsPagination page={page} setPage={setPage} totalPages={totalPages} />
      }
    </CharactersContainer>
  )
}
