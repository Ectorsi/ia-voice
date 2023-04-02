import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

export const useTranscriptVoice = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition,
    } = useSpeechRecognition();

    const handleStart = () => {
        SpeechRecognition.startListening({
            continuous: true,
            language: 'en-US',
        });
    };

    const handleStop = () => {
        SpeechRecognition.stopListening();
    };

    if (!browserSupportsSpeechRecognition) {
        console.log('Browser doesnt support speech recognition.');
    }

    return [transcript, listening, handleStart, handleStop, resetTranscript];
};
