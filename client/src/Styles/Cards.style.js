import styled from 'styled-components';

export const Grid = styled.div`
    display: inline-grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 10px;
    padding: 15;
`

export const Card = styled.div`
    display: inline-grid;
    grid-template-columns: 60% 35%;
    grid-template-rows: 75% 25%;
    grid-gap: 5%;
    /* flex-flow: row; */
    border: ${(props) => props.accent} solid 2px;
    border-radius: 5px;
    width: 100%;
    box-shadow: 3px 4px slategray;

    & img {
        display: flex;
        grid-row: 1/3;
        grid-column:1/2;
        border: solid black;
        max-height: 100%;
        max-width: 100%;
        object-fit: cover;
    }
    & h3 {
        display: flex;
        grid-column: 2/2;
        grid-row: 1/2;
        max-width: 100%;
        object-fit: cover;
        /* margin-top: -15px; */
    }
    & button {
        display: flex;
        grid-column: 2/2;
        grid-row: 2/2;
        /* flex: 3; */
    }

`