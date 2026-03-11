# Database Schema

## Collections

### Contact Collection

```javascript
{
  _id: ObjectId,
  name: String (100 max),
  email: String (valid email),
  subject: String (200 max),
  message: String (5000 max),
  status: String (enum: 'new', 'read', 'replied'),
  createdAt: Date (indexed),
  updatedAt: Date,
  ipAddress: String (optional),
  userAgent: String (optional),
  repliedAt: Date (optional),
  reply: String (optional)
}
```

### Indexes

```javascript
// Faster queries
db.contacts.createIndex({ email: 1, createdAt: -1 });
db.contacts.createIndex({ status: 1, createdAt: -1 });
db.contacts.createIndex({ createdAt: -1 });
```

## Future Collections (Roadmap)

### Blog Posts
```javascript
{
  _id: ObjectId,
  title: String,
  slug: String (unique),
  content: String,
  excerpt: String,
  author: String,
  tags: [String],
  published: Boolean,
  views: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Projects (Dynamic)
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  technologies: [String],
  github: String,
  liveDemo: String,
  image: String,
  featured: Boolean,
  order: Number,
  createdAt: Date
}
```

### Newsletter Subscribers
```javascript
{
  _id: ObjectId,
  email: String (unique),
  subscribedAt: Date,
  active: Boolean
}
```

### Analytics
```javascript
{
  _id: ObjectId,
  pageViews: {
    home: Number,
    about: Number,
    projects: Number,
    // etc...
  },
  referrers: [String],
  browsers: [String],
  date: Date
}
```

## Relationships

```
┌─────────────┐
│  Contact    │
├─────────────┤
│ _id         │ (Primary Key)
│ name        │
│ email       │
│ subject     │
│ message     │
│ status      │
│ createdAt   │ (Indexed)
│ updatedAt   │
└─────────────┘
```

## Queries

### Get unread contacts
```javascript
db.contacts.find({ status: 'new' }).sort({ createdAt: -1 });
```

### Get by email
```javascript
db.contacts.find({ email: 'user@example.com' });
```

### Update status
```javascript
db.contacts.updateOne(
  { _id: ObjectId('...') },
  { $set: { status: 'read' } }
);
```

### Delete old messages (older than 90 days)
```javascript
db.contacts.deleteMany({
  createdAt: { $lt: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) }
});
```

## Migrations

### Add new field to existing documents
```javascript
db.contacts.updateMany({}, { $set: { archived: false } });
```

### Archive old contacts
```javascript
db.contacts.updateMany(
  { createdAt: { $lt: new Date('2023-01-01') } },
  { $set: { archived: true } }
);
```

## MongoDB Atlas Setup

1. Create cluster
2. Create database user
3. Whitelist your IP
4. Get connection string
5. Add to `.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
```

## Local MongoDB

### Connect
```bash
mongosh
```

### View databases
```javascript
show dbs
```

### Create database
```javascript
use portfolio
```

### Create collection
```javascript
db.createCollection('contacts')
```

### View data
```javascript
db.contacts.find().pretty()
```

### Full text search (future)
```javascript
db.contacts.createIndex({ message: 'text', subject: 'text' });
```

---

**Schema Version**: 1.0.0
**Last Updated**: January 2024
