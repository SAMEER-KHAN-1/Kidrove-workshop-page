import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  general?: string;
}

function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [slowConnection, setSlowConnection] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errs.phone = 'Enter a valid 10-digit number';
    }
    return errs;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { 
      setErrors(validationErrors); 
      return; 
    }

    setLoading(true);
    setSlowConnection(false);
    const slowTimer = setTimeout(() => setSlowConnection(true), 5000);
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'https://kidrove-workshop-page.onrender.com';
      const res = await fetch(`${apiUrl}/api/enquiry`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        setErrors({ general: data.message || 'Something went wrong.' });
      }
    } catch {
      setErrors({ general: 'Network error. Please try again.' });
    } finally {
      clearTimeout(slowTimer);
      setSlowConnection(false);
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="register" style={{ background: 'linear-gradient(140deg, #060c1f, #1a1050)' }} className="py-24">
        <div className="max-w-md mx-auto px-6 text-center">
          <div className="text-6xl mb-5">🎉</div>
          <h3 className="text-3xl font-bold text-white mb-3">You're All Set!</h3>
          <p className="text-white/60 text-lg leading-relaxed">
            Our team will reach out within 24 hours with all the details.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="register" style={{ background: 'linear-gradient(140deg, #060c1f, #1a1050)' }} className="py-24">
      <div className="max-w-md mx-auto px-6">
        <div className="text-center mb-10">
          <span className="inline-block bg-orange-500/15 text-orange-400 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4 border border-orange-500/25">
            Limited Seats
          </span>
          <h2 className="text-4xl font-bold text-white tracking-tight mb-3">Secure Your Spot</h2>
          <p className="text-white/55 leading-relaxed">
            Register your interest and we'll send all the details within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="bg-white/4 border border-white/9 rounded-2xl p-8">
          {errors.general && (
            <div className="bg-red-500/10 border border-red-500/25 text-red-400 rounded-xl p-3 mb-5 text-sm">
              {errors.general}
            </div>
          )}

          {[
            { label: 'Full Name', name: 'name', type: 'text', placeholder: 'e.g. Priya Sharma' },
            { label: 'Email Address', name: 'email', type: 'email', placeholder: 'e.g. parent@gmail.com' },
            { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '10-digit mobile number' },
          ].map((field) => (
            <div key={field.name} className="mb-5">
              <label className="block text-white/75 text-sm font-semibold mb-2">{field.label} *</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name as keyof FormData]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full bg-white/7 border border-white/12 text-white placeholder-white/30 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/15"
              />
              {errors[field.name as keyof FormErrors] && (
                <p className="text-red-400 text-xs mt-1.5">{errors[field.name as keyof FormErrors]}</p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-70 text-white font-bold py-4 rounded-xl transition-colors mt-2 cursor-pointer"
          >
            {loading ? 'Submitting...' : 'Register Now →'}
          </button>

          {slowConnection && (
            <p className="text-center text-yellow-400/80 text-xs mt-2">
              Server is waking up, this may take up to 30 seconds...
            </p>
          )}

          <p className="text-center text-white/35 text-xs mt-4">
            No spam. We'll only contact you about this workshop.
          </p>
        </form>
      </div>
    </section>
  );
}

export default RegistrationForm;
