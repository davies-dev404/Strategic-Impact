
import { services, caseStudies, inquiries } from "../shared/schema.js";

export class MemStorage {
  constructor() {
    this.services = [];
    this.caseStudies = [];
    this.inquiries = [];
    this.currentIdInquiries = 1;
    this.currentIdServices = 1;
    this.currentIdCaseStudies = 1;
  }

  async getServices() {
    return this.services;
  }

  async getCaseStudies() {
    return this.caseStudies;
  }

  async createInquiry(insertInquiry) {
    const id = this.currentIdInquiries++;
    const inquiry = { ...insertInquiry, id };
    this.inquiries.push(inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
