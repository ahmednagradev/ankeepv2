# app.ts → Application layer 
### Blueprint of the house which defines structure, layout, wiring.
It is a configured Express application that knows how to respond to requests. Routes, middleware, controllers, error handling, everything is in this file. It is like the brain of our app. It defines what the application does, not where it runs

# server.ts → Runtime layer
### Actual construction crew which just says: Okay, let’s run this house on port 3000.
It starts Node.js server and listens on a port. If later we add WebSocket server, multiple servers, or serverless deployment, we only touch this file. It is like the body that brings the brain to life

# Middleware → Function that runs between request and response
###  Request → Middleware → Route → Response
Middleware is a function that can read, modify or stop a request before it reaches the route. Middleware must run before routes to prepare the request

# Routes → "Where does the request go"
### Only responsibility: map HTTP method + URL → Controller
Router method allows route grouping, feature based separation, resuability. app.get() is only suitable for very small apps. Another important rule is "One router per domain, not per action". We should create a new router file only when route is independent


# Controllers → "What happens when it gets there"
### Browser → /notes → app.ts (app.use) → notes.routes.ts → notes.controller.ts → response
A controller owns business logic and decides what to do with data, how to process request, what response to return. It can grow complex without breaking structure


# Wiring → Frontend ↔ Backend
### Component (dispatch) → Redux thunk (calls) → Service (using axios, talks to) → Backend API
Core principle: Frontend never talks directly to the database, it talks to an API. API talks to the database.

# Redux Async Thunks → Thunks fetch data, reducers only react to results
### 
