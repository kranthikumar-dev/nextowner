export default function Filters({
  quickFilters,
  activeFilter,
  setActiveFilter,
}) {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
        {quickFilters.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveFilter(item)}
            className={`px-5 py-3 rounded-2xl border transition text-sm ${
              activeFilter === item
                ? "bg-blue-500 border-blue-500 text-white"
                : "bg-white/5 border-white/10 text-zinc-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </section>
  );
}
