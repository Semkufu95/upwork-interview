# Express PostgreSQL API

A RESTful API built with Express.js, TypeScript, and PostgreSQL using Prisma ORM.

## Directory Structure

```
express-postgres-api/
├── src/
│   ├── controllers/
│   │   └── dataController.ts
│   ├── middleware/
│   │   └── errorHandler.ts
│   ├── routes/
│   │   └── data.ts
│   └── index.ts
├── prisma/
│   └── schema.prisma
├── dist/
├── .env
├── .gitignore
├── docker-compose.yml
├── package.json
├── tsconfig.json
└── README.md
```

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start PostgreSQL with Docker:
   ```bash
   npm run docker:up
   ```

3. Set up Prisma:
   ```bash
   npm run prisma:migrate
   npm run prisma:generate
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

- **GET /api/data** - Retrieve all data
- **GET /api/data/:id** - Retrieve data by ID
- **POST /api/data** - Create new data

## Environment Variables

Create a `.env` file with the following content:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/api_db?schema=public"
PORT=3000
```

## Scripts

- `npm run build` - Build the TypeScript project
- `npm run start` - Start the production server
- `npm run dev` - Start the development server
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations
- `npm run docker:up` - Start Docker containers
- `npm run docker:down` - Stop Docker containers