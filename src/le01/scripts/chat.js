import {TOKEN} from './secret.js';

const url = 'https://api.openai.com/v1/chat/completions';

const header = {
    'Authorization': `Bearer ${TOKEN}`,
    'Content-Type': 'application/json'
};

const chat = async (message) => {
    const data = {
        'model': 'gpt-3.5-turbo',
        'messages': [{'role': 'system', 'content': 'You are a ChatBot.'}, {'role': 'user', 'content': message}],
        'max_tokens': 60,
        'temperature': 0.5
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: header,
        body: JSON.stringify(data)
    });

    const responseData = await response.json();

    return responseData.choices[0].message.content;
};

document.getElementById('myForm').onsubmit = function (e) {
    e.preventDefault();
    chat(document.getElementById('myInput').value).then((response) => {
        document.getElementById('chat').innerHTML += `<p>${response}</p>`;
    }).catch(console.error);
};

export {chat};
