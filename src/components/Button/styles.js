import styled from 'styled-components';

export const Button = styled.button`
    height: 80px;
    width: 80px;

    border-radius: 100px;

    background-color: #2b2d3aff;
    border: none;
    padding: 3px;
    color: #c8c8c8;
    cursor: pointer;
    box-shadow: 0px 0px 10px #21222cff;

    &:active {
        transition: transform 0.1s ease-in-out;
        transform: scale(0.7);
    }
`;
