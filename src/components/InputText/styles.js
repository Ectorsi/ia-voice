import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
    width: 100%;
    padding-left: 20px;
`;

export const Input = styled.input`
    height: 40px;
    width: 100%;

    background: none;
    border: 1px solid orange;
    border-radius: 5px;
    outline: none;

    font-size: 15px;
    line-height: 1px;

    color: white;

    &::selection { 
        background-color: black;
        color: white;
    };

    &::placeholder {
        color: #c8c8c8;
    };

    margin-right: 20px;
    padding: 10px;
`;
