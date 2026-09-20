import { useState } from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grow,
} from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlined'
import { Mail, MapPin, Phone } from 'lucide-react'
import Breadcrumb from '../components/Common/Breadcrumb'
import { submitContactForm } from '../api/contactApi'

const initialForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
}

export default function ContactPage({ showHeader = true }) {
    const [formData, setFormData] = useState(initialForm)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [status, setStatus] = useState({ type: '', message: '' })
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target

        if (name === 'phone') {
            const onlyNumbers = value.replace(/\D/g, '')
            setFormData((prev) => ({
                ...prev,
                phone: onlyNumbers,
            }))
            return
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const cleanPhone = formData.phone.replace(/\D/g, '')

        if (!formData.name.trim() || !cleanPhone) {
            setStatus({
                type: 'error',
                message: 'Name and phone number are required.',
            })
            return
        }

        if (formData.name.trim().length < 3) {
            setStatus({
                type: 'error',
                message: 'Name must be at least 3 characters long.',
            })
            return
        }

        if (cleanPhone.length < 8) {
            setStatus({
                type: 'error',
                message: 'Phone number must contain only numbers and at least 8 digits.',
            })
            return
        }

        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address.',
            })
            return
        }

        try {
            setIsSubmitting(true)
            setStatus({ type: '', message: '' })

            await submitContactForm({
                name: formData.name,
                email: formData.email,
                phone: cleanPhone,
                subject: formData.subject,
                message: formData.message,
            })

            setStatus({
                type: 'success',
                message: 'Your message has been sent successfully.',
            })
            setFormData(initialForm)
            setIsModalOpen(true)
        } catch (error) {
            setStatus({
                type: 'error',
                message: error?.response?.data?.message || 'Something went wrong. Please try again.',
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    const celebrationPieces = [
        { left: '8%', top: '12%', size: 10, color: '#fbbf24', delay: '0s' },
        { left: '18%', top: '28%', size: 14, color: '#60a5fa', delay: '0.2s' },
        { left: '30%', top: '12%', size: 12, color: '#34d399', delay: '0.5s' },
        { left: '44%', top: '26%', size: 16, color: '#f472b6', delay: '0.7s' },
        { left: '58%', top: '14%', size: 10, color: '#fca5a5', delay: '0.9s' },
        { left: '72%', top: '24%', size: 14, color: '#a78bfa', delay: '1.1s' },
        { left: '82%', top: '12%', size: 12, color: '#fcd34d', delay: '1.4s' },
        { left: '92%', top: '30%', size: 10, color: '#2dd4bf', delay: '1.7s' },
        { left: '15%', top: '46%', size: 12, color: '#f97316', delay: '0.4s' },
        { left: '52%', top: '46%', size: 10, color: '#38bdf8', delay: '0.8s' },
        { left: '80%', top: '50%', size: 14, color: '#fb7185', delay: '1.2s' },
    ]

    return (
        <>
            {showHeader && (
                <Breadcrumb
                    pageName="Contact Us"
                    description="Let’s build something great together. Have a project in mind or need expert development support? We’d love to hear from you."
                />
            )}

            <section className="section">
                <Dialog
                    open={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    aria-labelledby="contact-success-dialog-title"
                    TransitionComponent={Grow}
                    TransitionProps={{ timeout: 400 }}
                    PaperProps={{
                        sx: {
                            borderRadius: 4,
                            px: 1,
                            py: 1,
                            minWidth: { xs: 300, sm: 420 },
                            textAlign: 'center',
                            boxShadow: '0 24px 70px rgba(37, 99, 235, 0.18)',
                            overflow: 'visible',
                            position: 'relative',
                            background: 'linear-gradient(135deg, rgba(255,255,255,0.98), rgba(239,246,255,0.96))',
                        },
                    }}
                >
                    <Box sx={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden', borderRadius: 4 }}>
                        {celebrationPieces.map((piece, index) => (
                            <Box
                                key={`${piece.color}-${index}`}
                                sx={{
                                    position: 'absolute',
                                    left: piece.left,
                                    top: piece.top,
                                    width: piece.size,
                                    height: piece.size,
                                    borderRadius: '50%',
                                    background: piece.color,
                                    opacity: 0.9,
                                    boxShadow: `0 0 18px ${piece.color}`,
                                    animation: 'celebrationFloat 1.8s ease-in-out infinite',
                                    animationDelay: piece.delay,
                                    '@keyframes celebrationFloat': {
                                        '0%': { transform: 'translateY(0) scale(0.8)', opacity: 0.3 },
                                        '20%': { opacity: 1 },
                                        '50%': { transform: 'translateY(-18px) scale(1)', opacity: 1 },
                                        '100%': { transform: 'translateY(-32px) scale(0.85)', opacity: 0 },
                                    },
                                }}
                            />
                        ))}
                    </Box>

                    <DialogTitle id="contact-success-dialog-title" sx={{ textAlign: 'center', fontWeight: 700, fontSize: '2rem', pb: 1, position: 'relative', zIndex: 1 }}>
                        <CheckCircleOutlineIcon
                            sx={{
                                color: '#16a34a',
                                fontSize: 60,
                                display: 'block',
                                mx: 'auto',
                                mb: 1,
                                animation: 'successPulse 1.6s ease-in-out infinite',
                                '@keyframes successPulse': {
                                    '0%': { transform: 'scale(0.9)', filter: 'drop-shadow(0 0 0 rgba(34,197,94,0.15))' },
                                    '50%': { transform: 'scale(1.08)', filter: 'drop-shadow(0 0 18px rgba(34,197,94,0.35))' },
                                    '100%': { transform: 'scale(0.9)', filter: 'drop-shadow(0 0 0 rgba(34,197,94,0.15))' },
                                },
                            }}
                        />
                        Thank You!
                    </DialogTitle>
                    <DialogContent sx={{ position: 'relative', zIndex: 1 }}>
                        <DialogContentText sx={{ textAlign: 'center', color: 'text.primary', fontSize: '1rem', lineHeight: 1.7 }}>
                            Your message has been sent successfully. Our team will get back to you soon.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: 'center', pb: 2, position: 'relative', zIndex: 1 }}>
                        <Button
                            onClick={() => setIsModalOpen(false)}
                            variant="contained"
                            sx={{
                                borderRadius: 999,
                                px: 3,
                                py: 1,
                                background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
                                '&:hover': {
                                    background: 'linear-gradient(135deg, #1d4ed8, #1e40af)',
                                },
                            }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                </Dialog>

                <div className="container contact-layout">
                    <div className="contact-card">
                        <h3>Need Help? Contact Us</h3>
                        <p>Our support team will get back to you ASAP.</p>

                        <form className="contact-form" style={{ marginTop: 22 }} onSubmit={handleSubmit}>
                            <div className="form-field">
                                <label htmlFor="name">
                                    Your Name <span style={{ color: '#dc2626' }}>*</span>
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="form-field">
                                <label htmlFor="phone">
                                    Your Phone <span style={{ color: '#dc2626' }}>*</span>
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    inputMode="numeric"
                                    pattern="[0-9]*"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone"
                                    required
                                />
                            </div>


                            <div className="form-field">
                                <label htmlFor="email">Your Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                />
                            </div>


                            <div className="form-field">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter your subject"
                                />
                            </div>

                            <div className="form-field full">
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                />
                            </div>

                            {status.message && (
                                <p style={{
                                    marginTop: 12,
                                    color: status.type === 'success' ? '#16a34a' : '#dc2626',
                                    fontSize: 14,
                                    fontWeight: 500,
                                }}>
                                    {status.message}
                                </p>
                            )}

                            <button type="submit" className="form-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
                            </button>
                        </form>
                    </div>

                    <div className="newsletter-side">
                        <div className="newsletter-box">
                            <div className="newsletter-decor" aria-hidden="true">
                                <svg className="shape-1" width="57" height="65" viewBox="0 0 57 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z" fill="url(#paint0_linear_1028_600)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1028_600" x1="-18.3187" y1="55.1044" x2="37.161" y2="15.3509" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="shape-2" width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.7137 31.4215L38.6431 4.24115L6.96581e-07 0.624124L14.7137 31.4215Z" fill="url(#paint0_linear_1028_601)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1028_601" x1="39.1948" y1="38.335" x2="10.6982" y2="10.2511" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="shape-3" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z" fill="url(#paint0_linear_1028_602)" />
                                    <defs>
                                        <linearGradient id="paint0_linear_1028_602" x1="-0.571054" y1="-37.1717" x2="28.7937" y2="26.7564" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#4A6CF7" stopOpacity="0.62" />
                                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <svg className="shape-4" width="162" height="91" viewBox="0 0 162 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.3">
                                        <path d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53" stroke="url(#paint0_linear_1028_603)" />
                                        <path d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78" stroke="url(#paint1_linear_1028_603)" />
                                        <path d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69" stroke="url(#paint2_linear_1028_603)" />
                                        <path d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102" stroke="url(#paint3_linear_1028_603)" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_1028_603" x1="291.35" y1="12.1032" x2="179.211" y2="237.617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.328125" stopColor="#4A6CF7" />
                                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_1028_603" x1="333.35" y1="-12.8968" x2="221.211" y2="212.617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.328125" stopColor="#4A6CF7" />
                                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint2_linear_1028_603" x1="294.35" y1="-3.89678" x2="182.211" y2="221.617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.328125" stopColor="#4A6CF7" />
                                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                        </linearGradient>
                                        <linearGradient id="paint3_linear_1028_603" x1="331.35" y1="-36.8968" x2="219.211" y2="188.617" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.328125" stopColor="#4A6CF7" />
                                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>

                            <div className="newsletter-content">
                                <h3>Subscribe to receive future updates</h3>
                                <p>
                                    Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare
                                    massa quis lectus.
                                </p>
                            </div>

                            <form className="newsletter-form">
                                <input type="text" name="name" placeholder="Enter your name" />
                                <input type="email" name="email" placeholder="Enter your email" />
                                <button type="submit" className="newsletter-btn">Subscribe</button>
                                <p className="newsletter-note">No spam guaranteed, So please don’t send any spam mail.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
