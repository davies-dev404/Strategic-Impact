import { db } from "./db";
import {
  services,
  caseStudies,
  inquiries,
  type Service,
  type CaseStudy,
  type InsertInquiry,
  type InsertService,
  type InsertCaseStudy
} from "@shared/schema";

export interface IStorage {
  getServices(): Promise<Service[]>;
  createService(service: InsertService): Promise<Service>;
  getCaseStudies(): Promise<CaseStudy[]>;
  createCaseStudy(caseStudy: InsertCaseStudy): Promise<CaseStudy>;
  createInquiry(inquiry: InsertInquiry): Promise<void>;
}

export class DatabaseStorage implements IStorage {
  async getServices(): Promise<Service[]> {
    return await db.select().from(services);
  }

  async createService(insertService: InsertService): Promise<Service> {
    const [service] = await db.insert(services).values(insertService).returning();
    return service;
  }

  async getCaseStudies(): Promise<CaseStudy[]> {
    return await db.select().from(caseStudies);
  }

  async createCaseStudy(insertCaseStudy: InsertCaseStudy): Promise<CaseStudy> {
    const [caseStudy] = await db.insert(caseStudies).values(insertCaseStudy).returning();
    return caseStudy;
  }

  async createInquiry(insertInquiry: InsertInquiry): Promise<void> {
    await db.insert(inquiries).values(insertInquiry);
  }
}

export const storage = new DatabaseStorage();
