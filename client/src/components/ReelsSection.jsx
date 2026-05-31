export default function ReelsSection() {
  return (
    <section className="px-6 pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-5xl font-black mb-4">
            Viral Listings From NextOwner.in
          </h3>

          <p className="text-zinc-400">
            Real promoted listings from Hyderabad.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {["DYr3ipdPN2h", "DYrgJ7NPlVr", "DYe78WOvVsb", "DYKpI9evwJu"].map(
            (reel) => (
              <div
                key={reel}
                className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden"
              >
                <iframe
                  src={`https://www.instagram.com/reel/${reel}/embed`}
                  className="w-full h-[520px]"
                  frameBorder="0"
                ></iframe>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
