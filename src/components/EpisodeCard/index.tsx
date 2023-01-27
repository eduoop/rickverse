import React from 'react'
import { Card, Img, ImgContainer, Infos, InfosDivider, Status, SubSubTitle, SubTitle, Title } from './styles'
import { Character } from '../../models/character.model'
import { Location } from '../../models/location.model';
import { Episode } from '../../models/episode.model';

type Props = {
    episode: Episode;
    img: string;
}

export const EpisodeCard = ({ img, episode }: Props) => {

    return (
        <Card>
            <ImgContainer>
                <Img src={img} />
            </ImgContainer>
            <Infos>
                <InfosDivider>
                    <Title>{episode.name}</Title>
                </InfosDivider>

                <InfosDivider>
                    <SubTitle>Air date:</SubTitle>
                    <SubSubTitle>{episode.air_date ? episode.air_date : 'Unknow'}</SubSubTitle>
                </InfosDivider>

                <InfosDivider>
                    <SubTitle>Epsode:</SubTitle>
                    <SubSubTitle>{episode.episode}</SubSubTitle>
                </InfosDivider>
            </Infos>
        </Card>
    )
}
