import { useEffect, useState } from "react";
import API from "../services/api";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Filters from "../components/Filters";
import ListingsSection from "../components/ListingsSection";
import ReelsSection from "../components/ReelsSection";
import SellForm from "../components/SellForm";
import ContactSection from "../components/ContactSection";
import FloatingWhatsapp from "../components/FloatingWhatsapp";

export default function Home() {
  const quickFilters = [
    "Verified Owners",
    "Urgent Sale",
    "Low KM Driven",
    "Single Owner",
    "Ready To Move",
    "Recently Added",
  ];

  const [listings, setListings] = useState([]);
  const [activeFilter, setActiveFilter] = useState("");

  const [images, setImages] = useState([]);

  const [formData, setFormData] = useState({
    category: "",
    title: "",
    price: "",
    location: "",
    contact: "",
    whatsapp: "Yes",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const fetchListings = async () => {
    try {
      const res = await API.get("/listings");

      setListings(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchListings();
  }, []);

  const filteredListings = listings.filter((item) => {
    if (activeFilter === "Urgent Sale") {
      return item.title?.toLowerCase().includes("urgent");
    }

    if (activeFilter === "Low KM Driven") {
      return item.description?.toLowerCase().includes("km");
    }

    return true;
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleDelete = async (id) => {
    try {
      await API.delete(`/listings/${id}`);

      setListings((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const data = new FormData();

      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      for (let i = 0; i < images.length; i++) {
        data.append("images", images[i]);
      }

      await API.post("/listings", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      fetchListings();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <FloatingWhatsapp />

      <Navbar />

      <Hero listings={listings} />

      <Filters
        quickFilters={quickFilters}
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />

      <ListingsSection
        listings={filteredListings}
        handleDelete={handleDelete}
      />

      <ReelsSection />

      <SellForm
        formData={formData}
        handleChange={handleChange}
        handleImageChange={handleImageChange}
        handleSubmit={handleSubmit}
        loading={loading}
        images={images}
      />

      <ContactSection />
    </div>
  );
}
