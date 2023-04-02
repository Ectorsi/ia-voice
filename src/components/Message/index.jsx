import React from 'react';
import * as S from './styles';

function Message({ children }) {
    return (
        <S.MessageContainer>
            {children}
        </S.MessageContainer>
    );
}

export default Message;
