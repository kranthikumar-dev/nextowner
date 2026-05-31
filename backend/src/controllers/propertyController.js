import Property from "../models/Property.js";

export const createProperty = async (req, res) => {
  try {
    const property = await Property.create({
      ...req.body,
      seller: req.user._id,
    });

    res.status(201).json(property);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProperties = async (req, res) => {
  const properties = await Property.find().populate("seller", "name");

  res.json(properties);
};
