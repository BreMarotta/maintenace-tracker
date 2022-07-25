import styled from 'styled-components';

export const Button = styled.button`
    height: 30px;
    margin: .2em;
    border-radius: 3px;
    background-color: ${(props) => props.backgroundColor};
    font-size: .75em;

    &:hover {
        padding: .45em .95em;
        font-weight: bold;
    }
`;

export const StyledLink = styled.label`
    background-color: ${(props) => props.backgroundColor};
    /* background-image: linear-gradient(gray, ${(props) => props.backgroundColor});  */
    padding: .25em .75em;
    margin: .2em;
    border-radius: 3px;
    color: white;
    opacity: .95;

    &:hover {
        opacity: 1;
        padding: .45em .95em;
        font-weight: bold;
    }
`