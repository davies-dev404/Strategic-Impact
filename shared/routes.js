
import { z } from 'zod';
import { insertInquirySchema } from './schema';

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
};

export const api = {
  services: {
    list: {
      method: 'GET',
      path: '/api/services',
      responses: {
        200: z.array(z.any()), // Removed strict type inference for JS
      },
    },
  },
  caseStudies: {
    list: {
      method: 'GET',
      path: '/api/case-studies',
      responses: {
        200: z.array(z.any()), // Removed strict type inference for JS
      },
    },
  },
  inquiries: {
    create: {
      method: 'POST',
      path: '/api/contact',
      input: insertInquirySchema,
      responses: {
        201: z.object({ success: z.boolean() }),
        400: errorSchemas.validation,
      },
    },
  },
};
