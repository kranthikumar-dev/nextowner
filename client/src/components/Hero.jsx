export default function Hero({ listings }) {
  return (
    <section className="relative pt-40 pb-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-green-500/10 border border-green-500/20 mb-8">
            <div className="h-3 w-3 rounded-full bg-green-400 animate-pulse"></div>

            <span className="text-green-300 text-sm font-medium">
              Focused in Hyderabad & Telangana
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black leading-tight mb-6">
            Sell Vehicles & Properties
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent block">
              Faster in Hyderabad
            </span>
          </h2>

          <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl mb-10">
            NextOwner.in helps owners connect with genuine buyers faster.
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <a
              href="#listings"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-2xl font-black"
            >
              Browse Listings
            </a>

            <a
              href="https://wa.me/919110513766"
              target="_blank"
              rel="noreferrer"
              className="bg-green-500 px-8 py-4 rounded-2xl font-bold"
            >
              Contact on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
              <h3 className="text-4xl font-black text-blue-400">
                {listings.length}+
              </h3>

              <p className="text-zinc-400 mt-2">Active Listings</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
              <h3 className="text-4xl font-black text-purple-400">Fast</h3>

              <p className="text-zinc-400 mt-2">Buyer Reach</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-5">
              <h3 className="text-4xl font-black text-green-400">24/7</h3>

              <p className="text-zinc-400 mt-2">Support</p>
            </div>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop"
            className="h-[520px] w-full object-cover rounded-[32px]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
