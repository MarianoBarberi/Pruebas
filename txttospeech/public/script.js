// script.js

// Replace 'YOUR_API_KEY' with your actual OpenAI API key
const apiKey = 'YOUR_API_KEY';

const generateBtn = document.getElementById('generateBtn');
const textInput = document.getElementById('text');

generateBtn.addEventListener('click', generateAudio);

async function generateAudio() {
    const text = textInput.value.trim();
    
    if (text === '') {
        alert('Please enter some text');
        return;
    }

    const audioContainer = document.getElementById('audioContainer');
    audioContainer.innerHTML = 'Generating...';

    try {
        const response = await fetch('https://api.openai.com/v1/tts/stream', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: text,
                voice: 'text-to-speech voice ID' // Replace with the voice ID you want to use
            })
        });

        if (!response.ok) {
            throw new Error('Failed to generate audio');
        }

        const audioStream = await response.body;
        const audioBlob = new Blob([audioStream], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);

        audioContainer.innerHTML = `<audio controls><source src="${audioUrl}" type="audio/mpeg"></audio>`;
    } catch (error) {
        console.error('Error:', error.message);
        audioContainer.innerHTML = 'Error: Failed to generate audio';
    }
}
