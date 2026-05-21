import { useState } from 'react';
import type { FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './ContactForm.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = 'Ime je obavezno.';
    if (!form.email.trim()) {
      errs.email = 'Email je obavezan.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Unesite ispravnu email adresu.';
    }
    if (form.phone && !/^[\d\s+\-/()]{6,}$/.test(form.phone)) {
      errs.phone = 'Unesite ispravan broj telefona.';
    }
    if (!form.message.trim()) errs.message = 'Poruka je obavezna.';
    else if (form.message.trim().length < 10) errs.message = 'Poruka mora imati najmanje 10 karaktera.';
    return errs;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          className="contact-form__success"
          role="status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
        >
          <h3>Hvala na poruci!</h3>
          <p>Vaša poruka je primljena. Kontaktiraćemo vas u najkraćem roku.</p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
      <div className="contact-form__field">
        <label htmlFor="name">Ime *</label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <span id="name-error" className="contact-form__error">{errors.name}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => handleChange('email', e.target.value)}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && <span id="email-error" className="contact-form__error">{errors.email}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="phone">Telefon</label>
        <input
          id="phone"
          type="tel"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
        />
        {errors.phone && <span id="phone-error" className="contact-form__error">{errors.phone}</span>}
      </div>

      <div className="contact-form__field">
        <label htmlFor="message">Poruka *</label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => handleChange('message', e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && <span id="message-error" className="contact-form__error">{errors.message}</span>}
      </div>

      <motion.button
        type="submit"
        className="btn btn--primary contact-form__submit"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Pošaljite poruku
      </motion.button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
