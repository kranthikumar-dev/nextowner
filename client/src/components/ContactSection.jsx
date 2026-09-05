export default function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-28 relative z-10">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 text-center">
        <h3 className="text-5xl font-black mb-6">Contact NextOwner.in</h3>

        <p className="text-zinc-400 mb-6">
          Connect with us for property inquiries, site visits, and real estate
          consultation across Hyderabad.
        </p>

        {/* Primary Phone Display for Google Web Crawler & Direct Callers */}
        <div className="mb-10">
          <p className="text-zinc-300 text-lg mb-2 font-medium">
            Call Us Directly:
          </p>
          <a
            href="tel:+917660048777"
            className="text-3xl font-black text-white hover:text-green-400 transition-colors inline-block"
          >
            +91 76600 48777
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:+917660048777"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/917660048777"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold transition-all"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/nextowner_in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold transition-all"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
