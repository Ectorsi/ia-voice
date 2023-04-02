/* eslint-disable react/no-array-index-key */
import React from 'react';
import Message from '../../components/Message';
import { useAppContext } from '../../contexts/appContextAndProvider';
import * as S from './styles';

function BodyChat() {
    const { listMessage } = useAppContext();

    const OnlyOneMessage = listMessage?.map((item, index) => {
        if (item.origin === 'server') {
            return (
                <S.ContentLeft key={index}>
                    <Message>
                        {item.message}
                    </Message>
                </S.ContentLeft>
            );
        }
        return (
            <S.ContentRight key={index}>
                <Message>
                    {item.message}
                </Message>
            </S.ContentRight>
        );
    });
    return (
        <S.BodyChatContainer>
            {!!listMessage && OnlyOneMessage}
        </S.BodyChatContainer>
    );
}

export default BodyChat;
