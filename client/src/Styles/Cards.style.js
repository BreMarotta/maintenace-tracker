import styled from 'styled-components';

export const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-top: 25px;
    grid-gap: 10px;
    padding: 15;
`

export const Card = styled.div`
    display: inline-grid;
    grid-template-columns: 100%;
    grid-template-rows: 40% 20% 15% 15%;
    grid-row-gap: 5%;
    grid-column-gap: 7%;
    border: ${(props) => props.accent} solid 2px;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    box-shadow: 3px 4px slategray;


    & img {
        display: flex;
        grid-column:1/2;
        border: solid black;
        max-height: 100%;
        max-width: 85%;
        object-fit: cover;
        margin-top: 10px;
        margin-left: auto;
        margin-right: auto;
    }
    & h3 {
        display: flex;
        font-size: 60%;
        grid-row: 2/3;
        max-width: 100%;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
    }
    & h1 {
        font-size: 150%;
    }
    & button {
        display: flex;
        /* grid-column: 2/2; */
        grid-row: 4/4;
        /* flex: 3; */
        padding-bottom: 15px;
        margin-left: 5px;
        margin-right: 5px;
    }

`