function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">
          Contact Me
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 rounded bg-slate-800"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded bg-slate-800"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full p-3 rounded bg-slate-800"
          ></textarea>

          <button className="bg-cyan-500 px-6 py-3 rounded">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;