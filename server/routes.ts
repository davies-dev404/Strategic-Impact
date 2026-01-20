import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get(api.services.list.path, async (_req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  app.get(api.caseStudies.list.path, async (_req, res) => {
    const cases = await storage.getCaseStudies();
    res.json(cases);
  });

  app.post(api.inquiries.create.path, async (req, res) => {
    try {
      const input = api.inquiries.create.input.parse(req.body);
      await storage.createInquiry(input);
      res.status(201).json({ success: true });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  // Seed data function
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length === 0) {
    await storage.createService({
      title: "Strategic Communications",
      description: "We craft compelling narratives that align with your business objectives and resonate with key stakeholders.",
      benefits: ["Unified brand voice", "Stakeholder alignment", "Clear messaging architecture"],
      icon: "MessageSquare",
    });
    await storage.createService({
      title: "Media Relations",
      description: "Securing high-impact coverage in top-tier outlets to elevate your brand's authority and visibility.",
      benefits: ["Tier-1 media placement", "Thought leadership positioning", "Executive visibility"],
      icon: "Newspaper",
    });
    await storage.createService({
      title: "Crisis Management",
      description: "Proactive planning and rapid response strategies to protect your reputation when it matters most.",
      benefits: ["24/7 rapid response", "Reputation repair", "Stakeholder communication"],
      icon: "ShieldAlert",
    });
    await storage.createService({
      title: "Brand Storytelling",
      description: "Transforming complex ideas into powerful stories that captivate audiences and drive engagement.",
      benefits: ["Emotional connection", "Content strategy", "Visual identity alignment"],
      icon: "PenTool",
    });
  }

  const existingCases = await storage.getCaseStudies();
  if (existingCases.length === 0) {
    await storage.createCaseStudy({
      client: "FinTech Innovators",
      industry: "Financial Technology",
      challenge: "Launching a disruptive product in a saturated market with low brand awareness.",
      solution: "Developed a contrarian thought leadership campaign challenging traditional banking norms.",
      result: "Featured in WSJ, TechCrunch, and Forbes; 300% increase in organic leads within 3 months.",
    });
    await storage.createCaseStudy({
      client: "GreenEarth Corp",
      industry: "Sustainability / Non-Profit",
      challenge: "Mitigating reputational damage following a complex operational incident.",
      solution: "Executed a transparent, multi-channel crisis response and community engagement program.",
      result: "Restored stakeholder trust with 85% positive sentiment analysis post-campaign.",
    });
    await storage.createCaseStudy({
      client: "Apex Health",
      industry: "Healthcare",
      challenge: "Positioning a new CEO as a visionary leader in the digital health space.",
      solution: "Curated a series of op-eds and keynote opportunities at major industry conferences.",
      result: "CEO named 'Top 50 in Digital Health'; secured $20M in Series B funding.",
    });
  }
}
