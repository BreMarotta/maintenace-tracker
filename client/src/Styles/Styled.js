import styled from 'styled-components';

export const Button = styled.button`
    width: 200px;
    height: 50px;
    background-color: ${(props) => props.backgroundColor};

    &:hover {
        & label {
            color: green;
        }
    }
    &:active {
        background-color: white;
    }
`;

export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`

export const StyledLink = styled.label`
    background-color: ${(props) => props.backgroundColor};
    padding: 5px;
    color: white;
    border-radius: 7%;

    &:active {
        background-color: white;
        color: black;
    }
`