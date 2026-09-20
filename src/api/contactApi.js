import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || ''
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const normalizeName = (value) => String(value ?? '').trim()
const normalizePhone = (value) => String(value ?? '').replace(/\D/g, '')
const normalizeEmail = (value) => String(value ?? '').trim()
const isValidEmail = (value) => emailRegex.test(normalizeEmail(value))

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
})

export const submitContactForm = async (payload) => {
    const name = normalizeName(payload?.name)
    const phone = normalizePhone(payload?.phone)
    const email = normalizeEmail(payload?.email)

    if (!name || !phone) {
        throw new Error('Name and phone number are required.')
    }

    if (name.length < 3) {
        throw new Error('Name must be at least 3 characters long.')
    }

    if (phone.length < 8) {
        throw new Error('Phone number must contain only numbers and at least 8 digits.')
    }

    if (email && !isValidEmail(email)) {
        throw new Error('Please enter a valid email address.')
    }

    if (!API_BASE_URL) {
        throw new Error('VITE_API_URL is not configured. Please add it to your .env file.')
    }

    const sanitizedPayload = {
        name,
        email,
        phone,
        subject: payload?.subject ? String(payload.subject).trim() : '',
        message: payload?.message ? String(payload.message).trim() : '',
    }

    const response = await api.post('/contactus', sanitizedPayload)
    return response.data
}

export const subscribeNewsletter = async ({ name, email }) => {
    const safeName = normalizeName(name)
    const safeEmail = normalizeEmail(email)

    if (!safeName || !safeEmail) {
        throw new Error('Name and email are required.')
    }

    if (safeName.length < 3) {
        throw new Error('Name must be at least 3 characters long.')
    }

    if (!isValidEmail(safeEmail)) {
        throw new Error('Please enter a valid email address.')
    }

    if (!API_BASE_URL) {
        throw new Error('VITE_API_URL is not configured. Please add it to your .env file.')
    }

    const response = await api.post('/subscribe', {
        name: safeName,
        email: safeEmail,
    })

    return response.data
}
