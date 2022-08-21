import styled from 'styled-components';

export const Form = styled.form`
    display: inline-grid;
    grid-template-columns: 35% 60%;
    grid-gap: 10px;
    width: 100%;
    
    & button {
        grid-column-start: 1;
        grid-column-end: 3;
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    & label {
        display: flex;
        grid-column-start: 1;
        max-width: 100%;
        font-size: 85%;
        object-fit: cover;
        justify-content: right;
    }

    & input {
        display: flex;
        grid-column-start: 2;
        width: 100%;
    }

    & div {
        grid-column-start: 2;
        width: auto;
        object-fit: cover;
        float: left;
    }
`

export const CenteredForm = styled.form`
    display: inline-grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2);
    grid-gap: 10px;
    width: 50%;

    & button {
        display: flex;
        /* grid-row: ; */
        max-width: 50%;
        margin-left: auto;
        margin-right: auto;
    }

    & label {
        display: flex;
        max-width: 100%;
        font-size: 85%;
        object-fit: cover;
    }

    & input {
        display: flex;
        width: 100%;
    }

    & div {
        /* grid-column-start: 1;
        grid-column-end: 3; */
        width: auto;
        object-fit: cover;
        float: left;
    }
`