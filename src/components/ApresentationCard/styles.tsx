import Styled from "styled-components";

interface Props {
    img: string | undefined;
}

export const Card = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    max-width: 300px;
    background-color: var(--white-200);
    border-radius: 16px 16px 16px 16px;
    transition: .3s;
    border: 1px solid transparent; 
    cursor: default;
`

export const CardImageContainer = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border: none;
`

export const CardImage = Styled.img<Props> `
    width: 300px;
    height: 300px;
    background-image: url(${props => props.img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border: none;
    border-radius: 16px 16px 0 0
`

export const Infos = Styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: .5em;
`

export const InfosComplementation = Styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   gap: .1em;
`

export const GoToView = Styled.button`
   width: 90%;
   text-align: center;
   padding: .5em 0;
   background-color: #FF0B3B;
   color: white;
   font-size: 1.2em;
   transition: .3s;
   border-radius: 8px;
   margin-bottom: 1em;
   &:hover {
    background-color: #ab0022;
   }
`