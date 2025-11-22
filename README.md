# NestJS Template

A scalable, modular NestJS project template with JWT auth, PostgreSQL, TypeORM, validation, logging, and testing.

## Getting Started

1. Copy `.env.example` to `.env` and fill in your secrets.
2. Install dependencies: `npm install`
3. Run migrations: `npm run migration:run`
4. Start dev server: `npm run start:dev`
5. API docs: http://localhost:3000/docs

## Extending

- Add new modules in `src/modules/`
- Use `@nestjs/config` for typed config
- Use `class-validator` for DTO validation
- Use `LoggerService` for custom logging

## Testing

- Unit: `npm test`
- E2E: `npm run test:e2e`
