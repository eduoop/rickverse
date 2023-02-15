import React, { useEffect, useRef, useState } from 'react'
import styles from './styles.css';
import { About, Container, Info, ListCards, Main, PricipalText } from './styles'
import img from '../../assets/ni.png'
import planet from '../../assets/planet.png'
import { useParallax, Parallax } from 'react-scroll-parallax';
import { TypeAnimation } from 'react-type-animation';
import { api } from '../../config/api';
import { Character } from '../../models/character.model';
import { NavLink } from 'react-router-dom';
import { ApresentationCard } from '../../components/ApresentationCard';
import { Episode } from '../../models/episode.model';
import { Location } from '../../models/location.model';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function Home() {

  const [person, setPerson] = useState<Character>()
  const [location, setLocation] = useState<Location>()
  const [episode, setEpisode] = useState<Episode>()
  const { height, width } = useWindowDimensions();

  const getSingleCharacter = () => {
    api.get("/character/2").then((res) => {
      setPerson(res.data)
    })
  }

  const getSingleLocation = () => {
    api.get("/location/1").then((res) => {
      setLocation(res.data)
    })
  }

  const getSingleEpisode = () => {
    api.get("/episode/13").then((res) => {
      setEpisode(res.data)
    })
  }

  useEffect(() => {
    getSingleCharacter()
    getSingleLocation()
    getSingleEpisode()
  }, [])

  return (
    <Container>
      <Main image={`url(${img})`}>
        <Info>
          <div className='w-1 h-12 bg-red' />
          <h3 style={{ fontFamily: "Nunito", fontWeight: "500" }} className='text-white font-medium text-xl '>Welcome to the <br />
            Rick end morty page.
          </h3>
        </Info>

        <PricipalText>
          <TypeAnimation
            sequence={[
              'A Rick end Morty site',
              2000,
              'Make with love by Eduardo',
              2000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: `${width > 600 ? '6em': '3em'}`, fontWeight: "600", color: "white", textShadow: "2px 2px 5px black", fontFamily: "Comic Neue", textAlign: "center", lineHeight: "55px" }}
          />
        </PricipalText>
      </Main>

      <About>
        <h1 className='text-3xl text-white font-bold text-center'>Descubra <NavLink className=' text-red' to='/characters'>Personagens,</NavLink> <NavLink className=' text-red' to='/locations'>Localizações</NavLink> e <NavLink className=' text-red' to='/episodes'>Epsódios</NavLink></h1>

        <ListCards>
          <ApresentationCard img={person?.image} infoOne={person?.status} infoTwo={person?.species} name={person?.name}/>
          <ApresentationCard img={"https://cdn.pastemagazine.com/www/articles/rick%20and%20morty%20website%20main.jpg"} infoOne={location?.type} infoTwo={location?.dimension} name={location?.name}/>
          <ApresentationCard img={"https://m.media-amazon.com/images/M/MV5BMmM3MTg5ZjQtNDUxMi00OWQ3LTkxMmUtYTRkNTI5MGY5MDdiXkEyXkFqcGdeQXVyNjc0NTIwNTU@._V1_.jpg"} infoOne={episode?.air_date} infoTwo={episode?.episode} name={episode?.name}/>
        </ListCards>
      </About>

    </Container>
  )
}
