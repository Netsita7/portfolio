import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

//service_csjkm0c
//template_puaxh9d
// public key VLRnH-ZVq79czfLiG

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Netsanet Melese',
          from_email: form.email,
          to_email: 'orthodoxawit7@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Thank you for your message 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
<section className="c-space my-12 sm:my-16 md:my-20 lg:my-28 px-4 sm:px-8" id="contact">
  {alert.show && <Alert {...alert} />}

  <div className="relative min-h-screen flex flex-col items-center justify-center">
    {/* Background Image - Make It Responsive */}
    <img
      src="/assets/terminal.png"
      alt="terminal-bg"
      className="absolute inset-0 w-full h-full object-cover opacity-20 sm:opacity-40"
    />

    <div className="contact-container relative z-10 p-6 sm:p-10 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg max-w-lg sm:max-w-2xl">
      <h3 className="head-text mt-6 text-center">Let's talk</h3>
      <p className="text-lg text-white-600 mt-3 text-center">
        Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to
        life, I’m here to help.
      </p>

      {/* Form */}
      <form ref={formRef} onSubmit={handleSubmit} className="mt-8 flex flex-col space-y-6">
        <label className="space-y-2">
          <span className="field-label">Full Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., John Doe"
          />
        </label>

        <label className="space-y-2">
          <span className="field-label">Email address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="field-input"
            placeholder="ex., johndoe@gmail.com"
          />
        </label>

        <label className="space-y-2">
          <span className="field-label">Your message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="field-input"
            placeholder="Share your thoughts or inquiries..."
          />
        </label>

        <button className="field-btn" type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
          <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
        </button>
      </form>
    </div>
  </div>
</section>

  );
};

export default Contact;
