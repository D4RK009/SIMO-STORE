// api/users/[id].ts
import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../../../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === "GET") {
      const { id } = req.query;
      if (typeof id !== "string") {
        return res.status(400).json({ message: "id is required" });
      }

      const user = await storage.getUser(id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }

      return res.json(user);
    }

    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: `Method ${req.method} not allowed` });
  } catch (err: any) {
    console.error("API /users/[id] error:", err);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
