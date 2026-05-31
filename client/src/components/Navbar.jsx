export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black">NextOwner.in</h1>

          <p className="text-zinc-400 text-sm">
            Hyderabad Vehicle & Property Resale Network
          </p>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-zinc-300">
          <a href="#" className="hover:text-white transition">
            Home
          </a>

          <a href="#listings" className="hover:text-white transition">
            Listings
          </a>

          <a href="#sell" className="hover:text-white transition">
            Sell
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>

        <a
          href="#sell"
          className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-2xl font-bold"
        >
          Sell Now
        </a>
      </div>
    </header>
  );
}
