import styled from 'styled-components';

export const Form = styled.form`
    display: inline-grid;
    grid-template-columns: 35% 60%;
    grid-gap: 10px;
    width: 100%;
    
    & h3 {
        margin-left: auto;
        margin-right: auto;
        grid-column-start: 1;
        grid-column-end: 3;
    }
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
        width: auto;
        object-fit: cover;
        float: left;
    }
`
export const AppLabel = styled.div`
    background-color: ${(props) => props.main}; 
    background-image: ${(props) => props.image};
    color: white;
    padding: .25em .5em .35em .5em;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    font-size: 1.5em;
    font-weight: bold;
    max-width: 85%;
    font-family: Georgia, 'Times New Roman', Times, serif;

    & h5 {
        font-size: .5em;
        font-family: sans-serif;
    }
`
export const FormBanner = styled.h1`
    background-color: ${(props) => props.main}; 
    color: whitesmoke;
    padding: .25em .5em .35em .5em;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    font-size: 1.2em;
    max-width: 90%;
`

export const FormBackground = styled.div`
    background-color: whitesmoke; 
    padding-bottom: 1em;
    padding-top: 1em;
    height: auto;
    margin-top: 0em;
    margin-left: 30%;
    margin-right: 30%;
    border-radius: 8px;
    text-align: center; 
`

export const ErrorLi = styled.div`
    color: crimson;
    font-weight: bold;
`