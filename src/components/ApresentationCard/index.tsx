import React from 'react'
import { Card, CardImage, CardImageContainer, GoToView, Infos, InfosComplementation } from './styles';

type Props = {
    img: string | undefined;
    name: string | undefined;
    infoOne: string | undefined;
    infoTwo: string | undefined;
}

export const ApresentationCard = ({ img, infoOne, infoTwo, name }: Props) => {
    return (
        <Card>
            <CardImageContainer>
                <CardImage img={img} />
            </CardImageContainer>

            <Infos>
                <h1 className='text-red font-semibold text-3xl text-center'>{name}</h1>
                <InfosComplementation>
                    <h2 className='font-medium text-2xl text-center'>{infoOne}</h2>
                    <h2 className='font-medium text-2xl text-center'>{infoTwo}</h2>
                </InfosComplementation>
            </Infos>
            <GoToView>Acessar</GoToView>
        </Card>
    )
}
