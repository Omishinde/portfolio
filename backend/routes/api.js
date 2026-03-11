import express from 'express';
import {
  submitContact,
  getContacts,
  getContact,
  updateContactStatus,
  deleteContact
} from '../controllers/contactController.js';
import {
  validateContact,
  handleValidationErrors,
  rateLimitMiddleware
} from '../middleware/validators.js';

const router = express.Router();

// Public routes
router.post(
  '/contact',
  rateLimitMiddleware,
  validateContact,
  handleValidationErrors,
  submitContact
);

// Admin routes (in production, add authentication middleware)
router.get('/contacts', getContacts);
router.get('/contacts/:id', getContact);
router.put('/contacts/:id', updateContactStatus);
router.delete('/contacts/:id', deleteContact);

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'API is running' });
});

export default router;
