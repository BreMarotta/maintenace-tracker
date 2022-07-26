import styled from 'styled-components';

export const StyledName = styled.h1`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    padding: .25em .75em;
    margin-top: .2em;
    margin-left: 1em;
    margin-right: 1em;
    border-radius: 5px;
    text-align: center;
    font-size: 3em;
`

export const Button = styled.button`
    height: 30px;
    margin: .2em;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
    color: whitesmoke;
    font-size: 14px;

    &:hover {
        font-weight: bold;
    }
`
export const LogButton = styled.button`
    height: 30px;
    margin: .2em;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
    font-size: .75em;

    &:hover {
        padding: .45em .95em;
        font-weight: bold;
    }
`

export const StyledLink = styled.label`
    background-color: ${(props) => props.backgroundColor};
    /* background-image: linear-gradient(gray, ${(props) => props.backgroundColor});  */
    padding: .25em .75em;
    margin: .2em;
    border-radius: 5px;
    color: white;
    opacity: .95;

    &:hover {
        opacity: 1;
        padding: .45em .95em;
        font-weight: bold;
    }
`

export const StyledList = styled.ul`
    background-color: ${(props) => props.backgroundColor};
    padding: .9em 1em 5em 1em;
    margin-top: 0em;
    margin-left: 5em;
    margin-right: 5em;
    border-radius: 3px;
    text-align: center;
    
`
export const StyledLi = styled.div`
    background-color: ${(props) => props.backgroundColor};
    color: black;
    font-size: 15px;
    border-radius: 5px;

    &:hover {
        opacity: .65;
    }
`

export const Form = styled.form`
    /* background-color: lavender; */
    padding: .25em .75em;
    /* text-align: left; */
    /* padding-left: 25px; */
    display: inline-grid;
    align-content: center;
    
`
