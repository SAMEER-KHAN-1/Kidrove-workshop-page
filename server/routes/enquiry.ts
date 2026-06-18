import express, { Request, Response } from 'express';
import Enquiry from '../models/Enquiry';

const router = express.Router();

// POST /api/enquiry
router.post('/', async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, phone } = req.body;

    // Validate required fields
    if (!name || !email || !phone) {
      res.status(400).json({
        success: false,
        message: 'All fields (name, email, phone) are required.',
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      });
      return;
    }

    const newEnquiry = new Enquiry({
      name,
      email,
      phone
    });

    await newEnquiry.save();

    console.log(`New enquiry saved: ${name} (${email})`);

    res.status(201).json({
      success: true,
      message: "Enquiry received! We'll reach out within 24 hours.",
      data: { id: newEnquiry._id },
    });
  } catch (error) {
    console.error('Error saving enquiry:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while saving your enquiry.',
    });
  }
});

// GET /api/enquiry — view all (admin/testing only)
router.get('/', async (req: Request, res: Response) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json({ success: true, count: enquiries.length, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

export default router;
