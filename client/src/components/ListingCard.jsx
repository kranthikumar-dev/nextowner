export default function ListingCard({ item, handleDelete }) {
  const imageUrl =
    item?.images?.[0] &&
    typeof item.images[0] === "string" &&
    item.images[0].startsWith("http")
      ? item.images[0]
      : "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop";

  const whatsappNumber = String(item?.contact || "")
    .replace(/\D/g, "")
    .replace(/^91/, "");

  return (
    <div className="bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:-translate-y-2 transition duration-500">
      <img
        src={imageUrl}
        alt={item?.title || "Listing"}
        className="h-72 w-full object-cover"
      />

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h4 className="text-2xl font-black flex-1">{item?.title}</h4>

          <span className="text-blue-400 font-black text-xl whitespace-nowrap">
            ₹{item?.price}
          </span>
        </div>

        <p className="text-zinc-400 mb-2">{item?.location}</p>

        <p className="text-zinc-500 text-sm mb-6 line-clamp-2">
          {item?.description}
        </p>

        <div className="flex gap-4">
          <a
            href={`https://api.whatsapp.com/send?phone=91${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-green-500 py-3 rounded-2xl font-bold text-center hover:bg-green-400 transition"
          >
            WhatsApp
          </a>

          <button
            onClick={() => handleDelete(item?._id)}
            className="bg-red-500 px-5 py-3 rounded-2xl font-bold hover:bg-red-400 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
