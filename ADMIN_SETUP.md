# Admin Portal Setup

## 1. Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
MONGODB_URI=mongodb://localhost:27017/rhyl-store
NEXTAUTH_SECRET=generate-a-random-32-char-string
NEXTAUTH_URL=http://localhost:3000

# Cloudinary (get from cloudinary.com dashboard)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

## 2. Seed Admin User

Run once to create the default admin:

```bash
curl -X POST http://localhost:3000/api/auth/seed-admin
```

Default credentials:
- **Email:** admin@rhyl.com
- **Password:** admin123

## 3. Access Admin Portal

- **Login:** http://localhost:3000/admin/login
- **Dashboard:** http://localhost:3000/admin
- **Products:** http://localhost:3000/admin/products
- **Add Product:** http://localhost:3000/admin/add-product

## 4. MongoDB

Ensure MongoDB is running locally, or use MongoDB Atlas and set `MONGODB_URI` to your connection string.
