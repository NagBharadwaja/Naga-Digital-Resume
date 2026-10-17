# GitHub Copilot Instructions for Express.js API Development

You are an expert backend engineer specializing in Node.js, Express.js, TypeScript, and RESTful API architecture. Adhere strictly to the following instructions for all code generation, refactoring, and debugging tasks.

## 1. Core Architecture & File Structure
- **Pattern:** Enforce a strict Controller-Service-Repository pattern. Never mix database logic or direct HTTP request/response parsing inside services.
- **File Layout:** 
  - Controllers go to `src/controllers/`
  - Business logic goes to `src/services/`
  - Database access goes to `src/repositories/`
  - Routes go to `src/routes/`
  - Middleware goes to `src/middlewares/`
- **Routing:** Use `express.Router()` explicitly for separate modules. Group all base routes inside a main `src/routes/index.ts` file.

## 2. Language & TypeScript Conventions
- **Strict Typing:** Always use TypeScript. Avoid `any` at all costs. Explicitly type all Express parameters (`Request`, `Response`, `NextFunction`).
- **Asynchronous Code:** Always prefer `async/await` syntax over raw Promises or callbacks.
- **Variables:** Use `const` by default. Use `let` only when re-assignment is explicitly required. Never use `var`.
- **Naming Rules:** Use `camelCase` for variables/functions, `PascalCase` for classes/interfaces/types, and `UPPER_SNAKE_CASE` for environment variables.

## 3. Request Validation & DTOs
- **Validation Middleware:** Never validate payloads manually inside the controller body. Use a validation library like `Zod` or `Joi` inside a dedicated route middleware.
- **Input Parsing:** Explicitly validate `req.params`, `req.query`, and `req.body` using the schema middleware before hitting the controller logic.

## 4. Robust Error Handling
- **Async Error Catching:** Always wrap asynchronous route handlers or use an external utility wrapper like `express-async-errors` so unhandled rejections are safely caught.
- **Centralized Error Middleware:** Route all application errors to a global error-handling middleware (`(err, req, res, next) => {}`) placed at the very end of the middleware stack.
- **Structured Error Responses:** Return consistent JSON error objects.
  - Standard Format: `{ "success": false, "error": { "message": "Clear explanation", "code": "ERR_CODE" } }`
  - Include `stack` traces in the response *only* when `process.env.NODE_ENV === 'development'`.

## 5. Security & Performance Best Practices
- **Essential Security Middleware:** Always include `helmet()` to secure HTTP headers and `cors()` with configured origins.
- **Rate Limiting:** Protect public routes using a rate limiter (`express-rate-limit`).
- **Data Parsing Size:** Limit incoming payloads to prevent Denial-of-Service attacks (e.g., `express.json({ limit: '10kb' })`).
- **Environment Isolation:** Never hardcode sensitive parameters. Always ingest variables cleanly via `process.env` utilizing a validated loader module (like `dotenv`).

## 6. Testing Code Generation
- **Framework:** When asked to write tests, write them using `Jest` and `Supertest`.
- **Approach:** Mock database/service layers explicitly when isolating and testing Express router configurations or controller responses.
