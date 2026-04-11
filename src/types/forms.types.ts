export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
}

export interface NewsletterFormData {
  email: string;
}

export interface LeadFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  fleetSize?: string;
  source?: string;
}
