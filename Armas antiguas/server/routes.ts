import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import express from "express";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // put application routes here
  // prefix all routes with /api
  
  // Servir archivos estáticos desde el directorio 'public'
  const publicDir = path.join(process.cwd(), 'public');
  app.use('/images', express.static(publicDir + '/images'));
  
  // Ruta de prueba para verificar que el servidor esté funcionando
  app.get('/api/test', (req, res) => {
    res.json({ message: 'API funcionando correctamente' });
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
