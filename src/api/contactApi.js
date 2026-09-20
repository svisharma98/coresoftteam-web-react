import axios from 'axios'

const API_BASE_URL =
    typeof process !== 'undefined' && process.env && process.env.VITE_API_URL
        ? process.env.VITE_API_URL
        : ''

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

export const submitContactForm = async (payload) => {
    if (!payload || !String(payload.name || '').trim() || !String(payload.phone || '').trim()) {
        throw new Error('Name and phone number are required.')
    }

    const sanitizedPayload = {
        name: String(payload.name).trim(),
        email: payload.email ? String(payload.email).trim() : '',
        phone: String(payload.phone).trim(),
        subject: payload.subject ? String(payload.subject).trim() : '',
        message: payload.message ? String(payload.message).trim() : '',
    }

    if (!API_BASE_URL) {
        throw new Error('VITE_API_URL is not configured. Please add it to your .env file.')
    }

    const response = await api.post('/contactus', sanitizedPayload)
    return response.data
}
