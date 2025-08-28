import emailjs from '@emailjs/browser'

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'service_szamooj',
  templateId: 'template_odi781g',
  publicKey: 'e3ECrCw_at2DZd9CT'
}

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.publicKey)

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  subject: string
  message: string
}

export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  try {
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      reply_to: formData.email
    }

    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    )

    if (response.status !== 200) {
      throw new Error('Failed to send email')
    }
  } catch (error) {
    console.error('EmailJS Error:', error)
    throw new Error('Failed to send message. Please try again later.')
  }
}