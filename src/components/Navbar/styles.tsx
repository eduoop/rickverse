import Styled from 'styled-components';

export const Nav = Styled.div`
    width: 100vw;
    display: flex;
    padding: 1em 0 1em 5em;
    gap: 2em;
    background: rgba(255, 255, 255, 0.21);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.4px);
    -webkit-backdrop-filter: blur(5.4px);
    position: fixed;
    top: 0;
    z-index: 2;

    @media (max-width: 600px) {
        padding: 1em 0 1em 0em;
        justify-content: center;
        gap: .5em;
      }
`

export const Link = Styled.p`
    font-weight: 500;
    font-size: .9em;
`
