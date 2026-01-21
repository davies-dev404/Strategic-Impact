
import { createServer } from "http";
import { storage } from "./storage.js";
import { insertInquirySchema } from "../shared/schema.js";

export async function registerRoutes(app) {
  app.get("/api/services", async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get("/api/case-studies", async (_req, res) => {
    const caseStudies = await storage.getCaseStudies();
    res.json(caseStudies);
  });

  app.post("/api/contact", async (req, res) => {
    const result = insertInquirySchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ 
        message: "Invalid inquiry data", 
        errors: result.error.flatten().fieldErrors 
      });
    }

    await storage.createInquiry(result.data);
    res.status(201).json({ success: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
