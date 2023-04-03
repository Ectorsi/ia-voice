export const useTalkText = () => {
    const voices = window.speechSynthesis?.getVoices();
    const FemVoice = voices.find((voice) => voice.name[2]);

    const utterance = new SpeechSynthesisUtterance();

    const receiveText = (message) => {
        utterance.text = message;
        utterance.voice = FemVoice;
        utterance.lang = 'en-US';
        utterance.rate = 0.8;
        return speechSynthesis.speak(utterance);
    };

    // const pauseSpeak = () => speechSynthesis.pause();

    return [receiveText];
};
