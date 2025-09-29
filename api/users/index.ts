// api/users/index.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../../../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "POST") {
      const user = req.body;
      if (!user?.username) {
        return res.status(400).json({ message: "username is required" });
      }
      if (!user?.password) {
        return res.status(400).json({ message: "password is required" });
      }

      const created = await storage.createUser(user);
      return res.status(201).json(created);
    }

    if (req.method === "GET") {
      const { username } = req.query;
      if (typeof username !== "string") {
        return res.status(400).json({ message: "username query param is required" });
      }

      const found = await storage.getUserByUsername(username);
      if (!found) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(found);
    }

    res.setHeader("Allow", ["GET", "POST"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  } catch (err: any) {
    console.error("API /users error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
