import fetch from 'node-fetch';

const token = process.env.GITHUB_TOKEN; // GitHub Secret

export async function postEncryptedMessage(encryptedText) {
    const payload = { event_type: 'post_message', client_payload: { encrypted: encryptedText } };
    await fetch('https://api.github.com/repos/higerto/sandbox/dispatches', {
        method: 'POST',
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
}

export async function updateMessageInGist(updatedMsg) {
    const payload = { event_type: 'update_message', client_payload: { message: updatedMsg } };
    await fetch('https://api.github.com/repos/higerto/sandbox/dispatches', {
        method: 'POST',
        headers: {
            'Accept': 'application/vnd.github+json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
}