// api.js
const API_URL = "https://recruiting.verylongdomaintotestwith.ca/api/{nfrd}/character";

export const fetchCharacter = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch character data');
    }
    return response.json();
};

export const saveCharacter = async (attributes, skillPoints) => {
    const response = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            attributes,
            skills: skillPoints,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (!response.ok) {
        throw new Error('Failed to save character data');
    }
    return response.json();
};
