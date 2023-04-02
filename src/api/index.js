import axios from 'axios';

export const getOpenAI = async (message, subject) => {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            temperature: 0.5,
            max_tokens: 200,
            // top_p: 1.0,
            // frequency_penalty: 0.5,
            // presence_penalty: 0.0,
            // stop: ["You:"]
            stop: '\n',
            messages: [
                { role: 'system', content: `Vamos falar sobre ${subject}` },
                { role: 'user', content: message },
            ],
        }, {
            headers: {
                'Content-Type': 'Application/json',
                Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
            },
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
        return 'Desculpe, não consigo me conectar agora...';
    }
};
