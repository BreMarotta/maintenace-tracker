import styled from 'styled-components';

export const Background = styled.div`
    background-color: ${(props) => props.backgroundColor};
    min-height: 100vh;
`

export const Name = styled.h1`
    background-color: ${(props) => props.main}; 
    color: whitesmoke;
    padding-top: .25em;
    padding-bottom: .15em;
    margin-top: .2em;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
    text-align: center;
    font-size: 3em;
    max-width: 50%;
`

export const Banner = styled.h1`
    background-color: ${(props) => props.main}; 
    color: whitesmoke;
    padding-top: .25em;
    padding-bottom: .15em;
    margin-top: -20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    font-size: 1.2em;
    max-width: 50%;
    border: 1.5px solid ${(props) => props.accent};
    float: center;
`

export const Button = styled.button`
    height: 30px;
    margin: .2em;
    border-radius: 5px;
    background-color: ${(props) => props.backgroundColor};
    color: whitesmoke;
    border-style: none;
    font-size: 14px;

    &:hover {
        font-weight: bold;
    }
`
export const LogButton = styled.button`
    height: 30px;
    margin: .2em;
    border-style: none;
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

export const StyledBackground = styled.ul`
    background-color: whitesmoke; 
    padding: .9em 1em 5em 1em;
    height: auto;
    margin-top: 0em;
    margin-left: 15%;
    margin-right: 15%;
    border-radius: 8px;
    text-align: center; 
    /* align-content: center;  */

`
export const StyledLi = styled.div`
    background-color: ${(props) => props.backgroundColor};
    color: black;
    font-size: 15px;
    border-radius: 5px;
    text-align: left;

    &:hover {
        font-weight: bold;
        background-color: slategray;
        color: white;
    }
`

export const StyledFooter = styled.footer`
    background-color: ${(props) => props.backgroundColor};
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 2rem;
    padding-left: 25px;
`
export const StyledFooterLink = styled.a`
    color: white;
    padding: 10px;
`