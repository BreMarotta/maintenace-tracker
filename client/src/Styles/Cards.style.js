import styled from 'styled-components';

export const Card = styled.span`
    text-align: center;
    border: ${(props) => props.accent} solid 1px;
    padding: 1rem;
    width: 20%;
    height: 25rem;
    display: inline-grid;   
    margin: 2%;
    box-shadow: 3px 4px gray;
    opacity: .75;

    &:hover {
        width: 25%;
        opacity: 1;
    }
`