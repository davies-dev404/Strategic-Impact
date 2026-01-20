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
      client: "Safaricom PLC",
      industry: "Telecommunications",
      challenge: "Communicating the socio-economic impact of M-PESA to international investors.",
      solution: "Developed an 'Impact Narrative' series including a mini-documentary and white paper for global financial summits.",
      result: "Secured top-tier coverage in Financial Times and Bloomberg; 25% increase in ESG investor interest.",
    });
    await storage.createCaseStudy({
      client: "Equity Bank",
      industry: "Financial Services",
      challenge: "Managing public perception during a complex pan-African expansion and rebranding phase.",
      solution: "Executed a multi-market media relations strategy highlighting regional integration and financial inclusion.",
      result: "Successful launch in 3 new markets; brand equity increased by 40% across East Africa.",
    });
    await storage.createCaseStudy({
      client: "KWS (Kenya Wildlife Service)",
      industry: "Public Sector / Conservation",
      challenge: "Raising global awareness and funding for anti-poaching initiatives during a tourism downturn.",
      solution: "Partnered with global influencers for a 'Save the Heritage' digital storytelling campaign.",
      result: "Raised $5M in private donations; campaign reached over 50M people globally.",
    });
    await storage.createCaseStudy({
      client: "Kenya Airways",
      industry: "Aviation",
      challenge: "Crisis communication management during a significant operational disruption.",
      solution: "Implemented a real-time transparent communication protocol across social and traditional media.",
      result: "Maintained 70% customer loyalty retention; widely cited as a benchmark for crisis response in the region.",
    });
  }
}
