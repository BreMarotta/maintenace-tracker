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
        border-radius: 5px;
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
        background-color: ${(props) => props.accent};
        display: flex;
        grid-row: 4/4;
        padding-bottom: 15px;
        margin-left: 5px;
        margin-right: 5px;
    }

`
export const RepairCard = styled.div`
    border: ${(props) => props.accent} solid 3px;
    background-color: ${(props) => props.background};
    border-radius: 5px;
    box-shadow: 3px 4px slategray;
`

export const ShowGrid = styled.div`
    display: inline-grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 98% 2%;
    margin-top: 25px;
    grid-gap: 10px;
    width: 85%;
    height: 350px;

    &:hover {
 
    }

    & img {
        display: flex;
        grid-column: 1;
        grid-row: 1/2;
        height: 100%;
        width: auto;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        border: ${(props) => props.accent} solid 3px;
        box-shadow: 3px 4px slategray;
    }

    & h5 {
        font-size: 100%;
    }

    & button {
        grid-row: 2/2;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }
`