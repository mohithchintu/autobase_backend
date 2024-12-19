import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Admin from "../../models/admin.model.js";

export const registerAdmin = async (req, res) => {
  try {
    const { name, password, role } = req.body;

    if (!name || !password || !role)
      return res
        .status(400)
        .json({ error: true, message: "All fields are required" });

    const oldAdmin = await Admin.findOne({ admin_name: name });
    if (oldAdmin)
      return res
        .status(409)
        .json({ error: true, message: "Admin already exists" });

    const salt = await bcrypt.genSalt(parseInt(process.env.SALT_VALUE));
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new Admin({
      admin_name: name,
      password: hashedPassword,
      admin_role: role,
    });
    await newAdmin.save();

    res
      .status(201)
      .json({ error: false, message: "Admin registration successful" });
  } catch (err) {
    res.status(500).json({ error: true, message: "Error registering admin" });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { name, password } = req.body;

    const admin = await Admin.findOne({ admin_name: name });
    if (!admin) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid credentials" });
    }

    const validPassword = await bcrypt.compare(password, admin.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ error: true, message: "Invalid credentials" });
    }

    const admintoken = jwt.sign(
      { _id: admin._id },
      process.env.JWT_ADMIN_SECRET,
      { expiresIn: "24h" }
    );

    res
      .setHeader("Authorization", `Bearer ${admintoken}`)
      .json({ error: false, message: "Login successful" });
  } catch (err) {
    res
      .status(500)
      .json({ error: true, message: "Error logging in", error: err.message });
  }
};
