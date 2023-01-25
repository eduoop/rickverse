import Styled from 'styled-components';

interface Props {
    image: string
}

export const Container = Styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
`

export const Main = Styled.div<Props>`
    height: 100vh;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover; 
    background-image: ${props => props.image};
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const Info = Styled.div `
    display: flex;
    align-items: center;
    height: fit-content;
    gap: 1em;
    margin-top: 7em;
    margin-left: 4em;
`

export const PricipalText = Styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`

export const Section = Styled.div `
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 3em;
`

export const About = Styled(Section) `
    background-color: #1F1F1F
`

export const ListCards = Styled.div `
    margin-top: 2em;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 4em;
    flex-wrap: wrap;
`