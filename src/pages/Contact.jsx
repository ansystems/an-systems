import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          setStatus("❌ Something went wrong: " + error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section className="min-h-screen py-10 px-6 bg-gradient-to-b from-gray-800 to-gray-900 text-white flex items-center justify-center"
    style={{ backgroundImage: "url('/assets/background.jpg')" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl w-full bg-gray-900/70 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
        <p className="text-center text-gray-300 mb-10">
          Have a project in mind? Get in touch with us today.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              name="user_name"
              aria-label="Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Email</label>
            <input
              type="email"
              name="user_email"
              aria-label="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              name="message"
              aria-label="Message"
              rows="5"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {status && <p className="mt-6 text-center text-sm text-green-400">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
