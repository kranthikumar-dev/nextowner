import ListingCard from "./ListingCard";

export default function ListingsSection({ listings, handleDelete }) {
  return (
    <section id="listings" className="px-6 pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h3 className="text-5xl font-black mb-4">
            Trending Listings in Hyderabad
          </h3>

          <p className="text-zinc-400">Verified vehicle & property listings</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listings.map((item) => (
            <ListingCard
              key={item._id}
              item={item}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
