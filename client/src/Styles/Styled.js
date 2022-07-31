import styled from 'styled-components';

export const Name = styled.h1`
    background-image: radial-gradient(whitesmoke, ${(props) => props.backgroundColor}); 
    color: ${(props) => props.color};
    padding-top: .25em;
    padding-bottom: .15em;
    margin-top: .2em;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    text-align: center;
    font-size: 3em;
    max-width: 50%;
`

export const Banner = styled.h1`
    background-image: radial-gradient(whitesmoke, ${(props) => props.backgroundColor}); 
    color: ${(props) => props.main};
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
    background-image: radial-gradient(white, ${(props) => props.backgroundColor}); 
    padding: .9em 1em 5em 1em;
    height: auto;
    margin-top: 0em;
    margin-left: 5em;
    margin-right: 5em;
    border-radius: 8px;
    text-align: center; 
    align-content: center; 
    /* & img {
        border: solid black;
        max-height: 230px;
        max-width: 50%;
        float: right;
        margin-right: 15%;
        margin-top: -15px;
    }  */
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

export const Form = styled.form`
    padding: .25em .75em;
    display: inline-grid;
    align-content: center;
    
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