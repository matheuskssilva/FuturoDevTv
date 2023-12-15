import styled from "styled-components"
import Theme from "../../theme"

export const HeaderGlobal = styled.div`
    display: flex;
    `

export const Images = styled.img`
    width: 100%;
`

export const Links = styled.div`
    position: relative;
    background-color: rgba(0, 0, 0, 0.2); 
    width: 100vw;
    width: 100%;
    height: 40px;
    position: fixed; 
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 15px;

`

export const Titulo = styled.h1`
    color: ${Theme.white};
    font-family: 'League Spartan', sans-serif;
    font-weight: bold;
    font-size: .625rem;

`

export const Link = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 25px;
    display: none;

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: .875rem;
        color: ${Theme.white};
        transition: .6s all ;

        &:hover{
            border-bottom: 2px solid red;
            padding: 6px 0;
        }
    }
`

export const Icons = styled.div`
    display: flex;
    gap: 17px;
    cursor: pointer;
    border-left: 1px solid ${Theme.white};
    padding: 0 33px;

   
`

export const Search = styled.img`
    border-left: 1px solid ${Theme.white};
    padding: 0 17px;

`