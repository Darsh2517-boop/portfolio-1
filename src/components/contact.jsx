import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
          setLoading(false);
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3">
          Contact Me
        </h2>

        <p className="text-gray-400 text-center mb-10">
          Have a project or want to work together? Feel free to send me a
          message.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-6"
        >
          {/* Name */}

          <div>
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-4 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Email */}

          <div>
            <label className="block mb-2 font-medium">
              Email
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-4 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Subject */}

          <div>
            <label className="block mb-2 font-medium">
              Subject
            </label>

            <input
              type="text"
              name="title"
              placeholder="Subject"
              required
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-4 focus:border-cyan-500 focus:outline-none"
            />
          </div>

          {/* Message */}

          <div>
            <label className="block mb-2 font-medium">
              Message
            </label>

            <textarea
              name="message"
              rows="6"
              placeholder="Write your message..."
              required
              className="w-full rounded-lg bg-slate-800 border border-slate-700 p-4 focus:border-cyan-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          {/* Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-cyan-500 hover:bg-cyan-600 transition duration-300 rounded-lg py-4 text-lg font-semibold"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;