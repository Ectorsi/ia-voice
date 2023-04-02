/* eslint-disable react/jsx-indent-props */
import React from 'react';
import * as S from './styles';

function InputText(props) {
    return (
        <S.InputContainer>
            <S.Input
                type="text"
                autoComplete="none"
                {...props}
            />
        </S.InputContainer>
    );
}

export default InputText;
