import Styled from "styled-components";

interface Props {
    img: string;
}

export const Card = Styled.div`
    display: flex;
    background-color: rgb(60, 62, 68);
    box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px, rgb(0 0 0 / 6%) 0px 2px 4px -1px;
    border-radius: 0.5rem;
    width: 500px;
    height: 220px;

    @media (max-width: 600px) {
        flex-direction: column;
        height: auto;
      }
`

export const ImgContainer = Styled.div`
    flex: 2 1 0%;
    width: 100%;
    border-radius: 0.5rem 0.5rem 0 0;
`

export const Img = Styled.img`
    width: 100%;
    height: 100%;
    opacity: 1;
    transition: opacity 0.5s ease 0s;
    object-position: center center;
    object-fit: cover;
    border-radius: 0.5rem 0.5rem 0 0;

    @media (max-width: 600px) {
        flex-direction: column;
        height: auto
      }
`

export const Infos = Styled.div`
    flex: 3 1 0%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0.75rem;
    gap: .5em;
`

export const InfosDivider = Styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = Styled.h1`
    font-size: 1.7em;
    color: white;
    font-weight: 800;
    line-height: 30px
`

export const Status = Styled.span`
    font-size: 1em;
    color: white;
    font-weight: 500;
    display: flex;
    align-items: center;
`

export const SubTitle = Styled.h2`
    font-size: .9em;
    color: white;
    font-weight: 500;
    color: rgb(158, 158, 158);
`

export const SubSubTitle = Styled.h2`
    font-size: .9em;
    color: white;
    font-weight: 500;
    color: white;
`