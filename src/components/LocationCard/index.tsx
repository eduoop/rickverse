import React from 'react'
import { Card, Img, ImgContainer, Infos, InfosDivider, Status, SubSubTitle, SubTitle, Title } from './styles'
import { Character } from '../../models/character.model'
import { Location } from '../../models/location.model';

type Props = {
    location: Location;
    img: string;
}

export const LocationCard = ({ img, location }: Props) => {

    return (
        <Card>
            <ImgContainer>
                <Img src={img} />
            </ImgContainer>
            <Infos>
                <InfosDivider>
                    <Title>{location.name}</Title>
                </InfosDivider>

                <InfosDivider>
                    <SubTitle>Dimension:</SubTitle>
                    <SubSubTitle>{location.dimension ? location.dimension : 'Unknow'}</SubSubTitle>
                </InfosDivider>

                <InfosDivider>
                    <SubTitle>Type:</SubTitle>
                    <SubSubTitle>{location.type}</SubSubTitle>
                </InfosDivider>
            </Infos>
        </Card>
    )
}
