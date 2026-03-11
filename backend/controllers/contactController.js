import Contact from '../models/Contact.js';

// Submit Contact Form
export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Create new contact document
    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    // TODO: Send email notification to site owner
    // TODO: Send confirmation email to user

    res.status(201).json({
      success: true,
      message: 'Your message has been sent successfully! I will get back to you soon.',
      data: {
        id: contact._id,
        email: contact.email
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || 'Error submitting contact form'
    });
  }
};

// Get all contacts (admin only)
export const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: contacts,
      total: contacts.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts'
    });
  }
};

// Get single contact
export const getContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact'
    });
  }
};

// Update contact status
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact status updated',
      data: contact
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || 'Error updating contact'
    });
  }
};

// Delete contact
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting contact'
    });
  }
};
