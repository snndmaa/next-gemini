"use client"
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY; // Use Your API_KEY

async function chatWithGemini(prompt: string) {
    // const prompt = `Generate a resume using this data ${userMessage}. Paraphrase and make the write up more beautiful. Output the resume in html and give it a good ui`;
    try {
        const response = await fetch(`${API_URL}?key=${API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt,
                            },
                        ],
                    },
                ],
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();

        // Extract the 'text' from the 'parts' in the response content
        const responseText = responseData.candidates[0]?.content?.parts[0]?.text || '';

        return responseText;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

export { chatWithGemini };