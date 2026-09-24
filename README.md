# 🚀 Fresher to Software Engineer Dashboard

A highly interactive, gamified 12-week roadmap and study dashboard specifically designed for developers transitioning from a **Competitive Programming (CP)** background into **Modern Backend Engineering** (focusing on C# / .NET 8 and PostgreSQL).

## ✨ Features

- **🎓 Detailed 12-Week Curriculum:** A strictly structured roadmap bridging the gap between algorithmic problem solving and real-world software architecture. Covers OOP, Advanced SQL, OS & Networking Fundamentals, .NET 8 Web APIs, Clean Architecture, and System Design.
- **✅ 3-Tier Daily Breakdowns:** Every single day in the 12-week journey contains three distinct, actionable sections:
  1. **Concepts to Learn:** High-level architectural and theoretical points.
  2. **Targeted Resource:** Exactly what to read or watch.
  3. **Actionable Drill:** A hands-on coding task to solidify the concepts.
- **⏱️ 120-Minute Focus Protocol:** A built-in, Pomodoro-style timer broken into rigorous study phases:
  - Deep Concept Study (60 mins)
  - Hands-On Drill (45 mins)
  - Out-Loud Defense (15 mins)
- **🎮 XP & Gamification:** Completing daily tasks awards Experience Points (XP). Level up your title from *CP Novice* to *Backend Boss*. Progress is saved locally in your browser!
- **📚 Floating Resource Hub:** Quick access to the most vital industry resources (OSTEP, Refactoring.Guru, Microsoft Learn, Cloudflare) categorized cleanly in the sidebar.
- **🌙 Cyberpunk Aesthetic:** A developer-focused dark mode theme using neon green, purple, and blue accents powered by Tailwind CSS v4 and animated by Framer Motion.

## 📅 The 12-Week Curriculum

### MONTH 1: C# OOP & CORE CONCEPTS
* **Week 1: C# Basics & The 4 Pillars** - Variables, Classes, Encapsulation, Abstraction, Inheritance, Polymorphism.
* **Week 2: Advanced C# Features** - LINQ, Lambdas, Async/Await, Serialization, and SOLID.
* **Week 3: Design Patterns** - Singleton, Factory Method, and Observer patterns from scratch.
* **Week 4: Basic SQL & CRUD** - Core SQL execution, SELECT, WHERE, INSERT, UPDATE, DELETE (W3Schools focused).

### MONTH 2: DB, NETWORKING & .NET 8 WEB API
* **Week 5: Advanced SQL & PostgreSQL** - INNER/LEFT JOINs, Subqueries, CTEs, and Window Functions (ROW_NUMBER, DENSE_RANK).
* **Week 6: Database Design & ACID** - Normalization (1NF to 3NF), ER Modeling, ACID properties, Transaction Isolation, and B-Tree Indexing.
* **Week 7: Web API Fundamentals & Networking** - OSI Model, TCP vs UDP, HTTP Request/Response lifecycle, Headers, and Status Codes.
* **Week 8: .NET 8 Web API Process** - Kestrel, Controllers, Attribute Routing, Model Binding, and the Middleware Pipeline.

### MONTH 3: ARCHITECTURE & CS FUNDAMENTALS
* **Week 9: OS Fundamentals** - Process vs Thread, Context Switching, Memory (Stack/Heap), Race Conditions, Mutexes, Semaphores, and Deadlocks.
* **Week 10: Clean Architecture & Patterns** - Dependency Injection lifecycle, Repository Pattern, DTOs, and FluentValidation.
* **Week 11: Security & Database Connection** - EF Core setup, RESTful CRUD execution, Authentication vs Authorization, and stateless JWTs.
* **Week 12: Microservices & Advanced Theory** - Monoliths vs Microservices, Inter-service communication, Message Brokers (Kafka), Distributed Caching (Redis), and Capstone mock interviews.

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4 (using the new `@theme` configuration logic)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Gamification FX:** Canvas Confetti

## 📦 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone this repository (or navigate to the directory).
2. Install the dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the Vite development server:
```bash
npm run dev
```
The dashboard will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

To create a production-ready build:
```bash
npm run build
```
The compiled assets will be placed in the `dist` folder.

## 🗄️ Project Structure

- `src/App.tsx`: The main layout orchestrator and state manager (handles localStorage and XP).
- `src/data.ts`: The massive, hardcoded 12-week curriculum state and global resources.
- `src/components/SkillTree.tsx`: The left sidebar displaying visual progression through the weeks.
- `src/components/ProgressTracker.tsx`: The central view displaying the expanded daily tasks, tips, and completion logic.
- `src/components/Timer.tsx`: The 120-minute Focus Protocol timer.
- `src/components/ResourceHub.tsx`: The right sidebar featuring targeted industry links.

## 💡 State Management
All progress (completed days, current XP, unlocked weeks) is persisted in the browser's `localStorage` under the key `fresher-dashboard-v6`. If you wish to completely reset your progress, simply clear your browser's local storage or delete that specific key.
