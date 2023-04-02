export const useTalkText = () => {
    const receiveText = (message) => {
        const synth = new SpeechSynthesisUtterance();
        synth.text = message;
        const vozes = speechSynthesis.getVoices();
        // eslint-disable-next-line prefer-destructuring
        synth.voice = vozes[2];
        synth.lang = 'en-US';
        speechSynthesis.speak(synth);
    };

    // const pauseSpeak = () => speechSynthesis.pause();

    return [receiveText];
};
