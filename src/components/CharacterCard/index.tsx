import React from 'react'
import { Card, Img, ImgContainer, Infos, InfosDivider, Status, SubSubTitle, SubTitle, Title } from './styles'
import { Character } from '../../models/character.model'

type Props = {
    character: Character
}

export const CharacterCard = ({ character }: Props) => {

    const dotColor = character.status === 'Alive' ? 'w-2 h-2 bg-green-500 rounded-full mr-2' : 'w-2 h-2 bg-red rounded-full mr-2'

    return (
        <Card>
            <ImgContainer>
                <Img src={character.image} />
            </ImgContainer>
            <Infos>
                <InfosDivider>
                    <Title>{character.name}</Title>
                    <Status><div className={dotColor}></div> {character.status} - {character.species}</Status>
                </InfosDivider>

                <InfosDivider>
                    <SubTitle>Last Location:</SubTitle>
                    <SubSubTitle>{character.location.name}</SubSubTitle>
                </InfosDivider>

                <InfosDivider>
                    <SubTitle>First seen in:</SubTitle>
                    <SubSubTitle>{character.origin.name}</SubSubTitle>
                </InfosDivider>
            </Infos>
        </Card>
    )
}
