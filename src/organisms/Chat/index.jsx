/* eslint-disable react/jsx-indent-props */
import React, { useCallback, useEffect, useState } from 'react';
import { Mic, MicOff } from '@styled-icons/feather';
import { getOpenAI } from '../../api';
import SendButton from '../../components/Button';
import { useAppContext } from '../../contexts/appContextAndProvider';
import { useTranscriptVoice } from '../../hooks/UseTranscriptVoice';
import * as S from './styles';
import InputText from '../../components/InputText';

function Chat() {
    const { handleResponse, handleMessage } = useAppContext();
    const [transcript, listening, handleStart, handleStop] = useTranscriptVoice();

    const [subject, setSubject] = useState('');

    const getApiData = useCallback((message) => {
        getOpenAI(message, subject).then((response) => {
            handleResponse(response);
        }).catch((error) => console.error(error));
    }, [handleResponse]);

    useEffect(() => {
        if (!listening && transcript) {
            getApiData(transcript);
            handleMessage(transcript);
            console.log('Envio de texto', transcript);
        }
    }, [listening]);

    console.log('listening', listening);

    return (
        <S.ChatContainer>
            <InputText
                type="text"
                placeholder="input a subject..."
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
            />
            <SendButton type="text" onMouseDown={handleStart} onMouseUp={handleStop}>
                {listening ? <Mic className="mic-on" /> : <MicOff className="mic-off" />}
            </SendButton>
        </S.ChatContainer>
    );
}

export default Chat;
