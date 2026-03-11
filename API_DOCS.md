# API Documentation

## Base URL
```
Development: http://localhost:5000/api
Production: https://your-api-domain.com/api
```

## Endpoints

### Public Endpoints

#### POST /contact
Submit a contact form message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'm interested in working with you..."
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Your message has been sent successfully! I will get back to you soon.",
  "data": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Validation errors",
  "errors": [
    {
      "msg": "Name is required",
      "param": "name"
    }
  ]
}
```

**Status Codes:**
- `201` - Message sent successfully
- `400` - Validation error
- `429` - Too many requests (rate limited)

**Rate Limit:**
- 5 requests per hour per IP address

---

#### GET /health
Check API health status.

**Response:**
```json
{
  "status": "API is running"
}
```

---

### Admin Endpoints

#### GET /contacts
Get all contact form submissions (requires authentication).

**Query Parameters:**
- `limit` - Number of results (default: 50)
- `page` - Page number (default: 1)
- `status` - Filter by status (new, read, replied)

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "Project Inquiry",
      "message": "...",
      "status": "new",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  ],
  "total": 1
}
```

---

#### GET /contacts/:id
Get a specific contact submission.

**Response:**
```json
{
  "success": true,
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "...",
    "status": "new",
    "createdAt": "2024-01-15T10:30:00Z"
  }
}
```

---

#### PUT /contacts/:id
Update contact status.

**Request:**
```json
{
  "status": "read"
}
```

**Status Values:**
- `new` - Not yet reviewed
- `read` - Reviewed
- `replied` - Response sent

**Response:**
```json
{
  "success": true,
  "message": "Contact status updated",
  "data": {
    "_id": "507f1f77bcf86cd799439011",
    "status": "read",
    "updatedAt": "2024-01-15T11:30:00Z"
  }
}
```

---

#### DELETE /contacts/:id
Delete a contact submission.

**Response:**
```json
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

---

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### Common Error Codes

| Code | Meaning |
|------|---------|
| 400 | Bad Request - Validation error |
| 404 | Not Found - Resource doesn't exist |
| 429 | Too Many Requests - Rate limited |
| 500 | Internal Server Error |

---

## Request Headers

```
Content-Type: application/json
Access-Control-Allow-Origin: https://your-portfolio-domain.com
```

---

## Authentication (Future)

Add to backend for admin endpoints:

```
Authorization: Bearer <token>
```

---

## Rate Limiting

**Contact Form:**
- 5 requests per 60 minutes per IP address
- Returns 429 status when limit exceeded

---

## Example Requests

### cURL
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "Hello..."
  }'
```

### JavaScript (Fetch)
```javascript
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Project Inquiry',
    message: 'Hello...'
  })
});
const data = await response.json();
console.log(data);
```

### JavaScript (Axios)
```javascript
import axios from 'axios';

const response = await axios.post('http://localhost:5000/api/contact', {
  name: 'John Doe',
  email: 'john@example.com',
  subject: 'Project Inquiry',
  message: 'Hello...'
});
console.log(response.data);
```

---

## Field Validation

| Field | Type | Rules |
|-------|------|-------|
| name | string | Required, max 100 chars |
| email | string | Required, valid email format |
| subject | string | Required, max 200 chars |
| message | string | Required, min 10, max 5000 chars |

---

## Future API Endpoints

- `GET /portfolio/skills` - Get skills with categories
- `GET /portfolio/projects` - Get all projects
- `GET /portfolio/projects/:id` - Get single project
- `GET /portfolio/research` - Get research papers
- `POST /newsletter/subscribe` - Subscribe to newsletter
- `GET /blog` - Get blog posts
- `GET /analytics` - Get site analytics (admin)

---

## Environment Variables

```
# Server
NODE_ENV=production
PORT=5000

# Database
MONGODB_URI=mongodb+srv://...

# Frontend
FRONTEND_URL=https://your-portfolio.com

# Email (for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
OWNER_EMAIL=your-email@example.com
```

---

**Last Updated:** 2024-01-15
**API Version:** 1.0.0
