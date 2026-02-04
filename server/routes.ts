import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Add API routes here
  // For example: app.get("/api/products", async (req, res) => { ... });

  const httpServer = createServer(app);
  return httpServer;
}