export default function ContactSection() {
  return (
    <section id="contact" className="px-6 pb-28 relative z-10">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 text-center">
        <h3 className="text-5xl font-black mb-6">Contact NextOwner.in</h3>

        <p className="text-zinc-400 mb-10">Connect with us for promotions.</p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="https://wa.me/919110513766"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 px-8 py-4 rounded-2xl font-bold"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/nextowner_in"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-2xl font-bold"
          >
            Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
