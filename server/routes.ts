import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form submissions
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate request body against schema
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const message = await storage.createContactMessage(validatedData);
      
      // Return success response
      return res.status(201).json({
        success: true,
        message: "Message sent successfully",
        data: {
          id: message.id,
          createdAt: message.createdAt
        }
      });
    } catch (error) {
      if (error instanceof Error) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({
          success: false,
          message: validationError.message
        });
      }
      
      // Handle other errors
      return res.status(500).json({
        success: false,
        message: "An error occurred while processing your request"
      });
    }
  });

  // API route to get all contact messages (for admin purposes)
  app.get("/api/contact", async (_req: Request, res: Response) => {
    try {
      const messages = await storage.getContactMessages();
      return res.status(200).json({
        success: true,
        data: messages
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "An error occurred while retrieving contact messages"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
