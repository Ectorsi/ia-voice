import styled from 'styled-components';

export const ChatContainer = styled.div`
    margin: 0 auto;
    box-sizing: border-box;

    width: 400px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    & .mic-on {
        height: 40px;
        width: 40px;

        color: green;
    }

    & .mic-off {
        height: 40px;
        width: 40px;

        color: orange;
    }
`;
