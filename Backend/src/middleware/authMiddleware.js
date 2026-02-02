import jwt from "jsonwebtoken";
import User from "../models/User.js";


export const authMiddleware = async(req,res,next)=>{
    try {
        const token = req.headers.authorization;
        if(!token) return res.status(401).send("Token not provided");

        const decode = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decode.id;
        next()
    } catch (error) {
        res.status(401).send("Invalid token")
    }
}

export const protect = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(401).json({ message: "Not authorized" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    res.status(401).json({ message: "Token failed" });
  }
};