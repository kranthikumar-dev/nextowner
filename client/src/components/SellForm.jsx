export default function SellForm({
  formData,
  handleChange,
  handleImageChange,
  handleSubmit,
  loading,
  images,
}) {
  return (
    <section id="sell" className="px-6 pb-28">
      <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-black mb-4">Post Your Listing</h3>

          <p className="text-zinc-400">
            Send your vehicle or property details.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          >
            <option value="">Select Category</option>

            <option>Used Bike</option>

            <option>Used Car</option>

            <option>House</option>

            <option>Flat</option>

            <option>Plot</option>
          </select>

          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Listing Title"
            className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Expected Price"
            className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none"
          />

          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <input
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none"
          />

          <select
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            className="bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          >
            <option>Yes</option>

            <option>No</option>
          </select>
        </div>

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          placeholder="Describe your listing"
          className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-zinc-500 outline-none mb-8"
        ></textarea>

        {/* IMAGE UPLOAD */}

        <label className="w-full flex flex-col items-center justify-center border-2 border-dashed border-white/20 rounded-2xl p-8 mb-8 cursor-pointer hover:border-blue-500 transition bg-black/30">
          <div className="text-5xl mb-3">📸</div>

          <p className="text-lg font-bold mb-1">Upload Listing Images</p>

          <p className="text-zinc-400 text-sm">
            Select multiple property or vehicle photos
          </p>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          {images.length > 0 && (
            <p className="text-blue-400 mt-4 font-bold">
              {images.length} Images Selected
            </p>
          )}
        </label>

        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-5 rounded-2xl text-xl font-black hover:scale-[1.01] transition"
        >
          {loading ? "Submitting..." : "Submit Listing"}
        </button>
      </div>
    </section>
  );
}
