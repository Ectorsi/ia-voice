import styled from 'styled-components';

export const BodyChatContainer = styled.div`
    height: 80vh;
    width: 50vw;
    overflow-y: scroll;

    border: 1.5px solid #16161d9c;
    border-radius: 20px;
    box-sizing: border-box;

    background-color: #4a4d6456;
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    padding: 15px;

    font-size: 12px;
`;

export const ContentLeft = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    flex-wrap: nowrap;

    background-color: #cc5e05ff;

    min-width: 180px;
    max-width: 200px;
    border-radius: 20px;

    box-sizing: border-box;
    margin: 20px 0;

    padding: 10px 10px;
`;
export const ContentRight = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    flex-wrap: nowrap;
    
    background-color: #00aaa2ff;

    min-width: 180px;
    max-width: 200px;
    border-radius: 20px;

    box-sizing: border-box;
    margin: 20px 0;

    padding: 10px 10px;
`;
