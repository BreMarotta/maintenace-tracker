import styled from 'styled-components';

export const Card = styled.div`
    /* text-align: center; */
    border: ${(props) => props.accent} solid 1px;
    padding: 1rem;
    width: 20%;
    height: 20rem;
    display: inline-grid;   
    margin: 2%;
    box-shadow: 3px 4px slategray;

    & img {
        border: solid black;
        max-height: 200px;
        max-width: 95%;
        margin-left: auto;
        margin-right: auto;
        

    }
    & h3 {
        max-width: 95%;
        /* margin-top: -15px; */
    }

`