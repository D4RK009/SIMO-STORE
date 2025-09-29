// api/users.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      // Create a new user
      const user = req.body;
      if (!user?.username || !user?.password) {
        return res.status(400).json({ message: "username and password are required" });
      }

      const inserted = await storage.insertUser(user);
      return res.status(201).json(inserted);
    }

    if (req.method === "GET") {
      // Get user by username
      const { username } = req.query;
      if (typeof username !== "string") {
        return res.status(400).json({ message: "username is required" });
      }

      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user);
    }

    // If method not supported
    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  } catch (err: any) {
    console.error("API error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
