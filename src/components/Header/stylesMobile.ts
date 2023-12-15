import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    backdrop-filter: bluer(3px);
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(17, 18, 17, 0.95);

    svg {
        position: absolute;
        top: 3.125rem;
        right: 1rem;
        color: #FFF;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
        
        li{
            list-style: none;
            
            a {
                text-decoration: none;
            }
        }
    }
`