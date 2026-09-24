export interface Resource {
  title: string;
  url: string;
  category: string;
}

export interface Day {
  id: string;
  dayNumber: number;
  title: string;
  concepts: string[];
  targetedResource: string;
  drill: string;
  completed: boolean;
}

export interface Week {
  id: number;
  title: string;
  theme: string;
  description: string;
  days: Day[];
}

export interface Phase {
  id: number;
  title: string;
  weeks: Week[];
}

export const GLOBAL_RESOURCES: Resource[] = [
  { category: "C# & .NET 8", title: "C# for Beginners (Hanselman/Fowler)", url: "https://www.youtube.com/watch?v=GhQdlIFylQ8" },
  { category: "C# & .NET 8", title: ".NET 8 Web API Full Course (Playlist)", url: "https://www.youtube.com/playlist?list=PLdo4fOcmZ0oULFjxrOagaERVAMbmG20Xe" },
  { category: "C# & .NET 8", title: "Microsoft Learn: .NET 8 Fundamentals", url: "https://learn.microsoft.com/en-us/training/paths/build-dotnet-applications-csharp/" },
  { category: "DATABASE & SQL", title: "W3Schools SQL Basics", url: "https://www.w3schools.com/sql/default.asp" },
  { category: "DATABASE & SQL", title: "SQLBolt (Interactive SQL)", url: "https://sqlbolt.com/" },
  { category: "DATABASE & SQL", title: "EF Core & PostgreSQL Docs", url: "https://learn.microsoft.com/en-us/ef/core/" },
  { category: "ARCHITECTURE & SECURITY", title: "Refactoring.Guru (Design Patterns & SOLID)", url: "https://refactoring.guru/" },
  { category: "ARCHITECTURE & SECURITY", title: "JWT Authentication in .NET 8 (Guide)", url: "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/jwt-authn" },
  { category: "ARCHITECTURE & SECURITY", title: "Clean Architecture in .NET", url: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures" },
  { category: "CS FUNDAMENTALS & ADVANCED", title: "OSTEP (Operating Systems - Free PDFs)", url: "https://pages.cs.wisc.edu/~remzi/OSTEP/" },
  { category: "CS FUNDAMENTALS & ADVANCED", title: "Cloudflare Learning Center (Networking)", url: "https://www.cloudflare.com/learning/" },
  { category: "CS FUNDAMENTALS & ADVANCED", title: "Kafka & Redis (High-Level Overviews)", url: "https://redis.com/" }
];

export const INITIAL_CURRICULUM: Phase[] = [
  {
    id: 1,
    title: "MONTH 1: C# OOP & CORE CONCEPTS",
    weeks: [
      {
        id: 1,
        title: "Week 1",
        theme: "C# Basics & The 4 Pillars",
        description: "Variables, Classes, Encapsulation, Abstraction, Inheritance, Polymorphism.",
        days: [
          {
            id: "1-1",
            dayNumber: 1,
            title: "Day 1: .NET 8 Console App & Variables",
            concepts: ["Variable Types, Declaration", "Function/Method Signature"],
            targetedResource: "C# for Beginners (Scott Hanselman/David Fowler on YouTube)",
            drill: "Create a .NET 8 Console App. Write methods with different signatures (overloading).",
            completed: false
          },
          {
            id: "1-2",
            dayNumber: 2,
            title: "Day 2: Classes, Objects & Constructors",
            concepts: ["Constructor & Default Constructor", "Stack vs Heap allocation"],
            targetedResource: "freeCodeCamp C# Tutorial",
            drill: "Create a Customer class with a default and parameterized constructor.",
            completed: false
          },
          {
            id: "1-3",
            dayNumber: 3,
            title: "Day 3: Encapsulation",
            concepts: ["Private fields", "Public properties (get/set)"],
            targetedResource: "Microsoft C# Docs",
            drill: "Implement strict encapsulation on a BankAccount class.",
            completed: false
          },
          {
            id: "1-4",
            dayNumber: 4,
            title: "Day 4: Abstraction",
            concepts: ["Hiding complexity behind interfaces"],
            targetedResource: "C# Interfaces documentation",
            drill: "Create an IEmailService interface and implement it.",
            completed: false
          },
          {
            id: "1-5",
            dayNumber: 5,
            title: "Day 5: Inheritance & Polymorphism",
            concepts: ["Base/Derived classes", "Virtual methods, Overriding"],
            targetedResource: "Refactoring.Guru",
            drill: "Create a base User class and override a GetRole() method in Admin and Guest classes.",
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: "Week 2",
        theme: "Advanced C# Features",
        description: "LINQ, Lambdas, Async/Await, Serialization, and SOLID.",
        days: [
          {
            id: "2-1",
            dayNumber: 1,
            title: "Day 1: LINQ (Language Integrated Query)",
            concepts: ["Filtering and mapping collections using LINQ"],
            targetedResource: "Microsoft LINQ Docs",
            drill: "Create a List of Objects and use .Where() and .Select().",
            completed: false
          },
          {
            id: "2-2",
            dayNumber: 2,
            title: "Day 2: Lambda Expressions",
            concepts: ["Anonymous functions and concise syntax"],
            targetedResource: "freeCodeCamp C# Tutorial",
            drill: "Refactor Day 1's LINQ queries using Lambda expressions (x => x...).",
            completed: false
          },
          {
            id: "2-3",
            dayNumber: 3,
            title: "Day 3: Synchronous vs Asynchronous Execution",
            concepts: ["Thread blocking vs non-blocking", "async and await keywords"],
            targetedResource: "YouTube: C# Async/Await",
            drill: "Write a dummy async method that uses Task.Delay() to simulate fetching data.",
            completed: false
          },
          {
            id: "2-4",
            dayNumber: 4,
            title: "Day 4: Serialization & Deserialization",
            concepts: ["Converting C# objects to JSON and vice versa"],
            targetedResource: "System.Text.Json Docs",
            drill: "Serialize a Product object to a JSON string and deserialize it back.",
            completed: false
          },
          {
            id: "2-5",
            dayNumber: 5,
            title: "Day 5: SOLID Principles",
            concepts: ["Single Responsibility", "Open/Closed", "Dependency Inversion"],
            targetedResource: "Refactoring.Guru",
            drill: "Refactor a 'God Class' into smaller, single-responsibility classes.",
            completed: false
          }
        ]
      },
      {
        id: 3,
        title: "Week 3",
        theme: "Design Patterns (Factory, Singleton, Observer)",
        description: "Applying common design patterns in C#.",
        days: [
          {
            id: "3-1",
            dayNumber: 1,
            title: "Day 1: Intro to Design Patterns",
            concepts: ["Creational vs Structural vs Behavioral patterns"],
            targetedResource: "Refactoring.Guru: Pattern Categories",
            drill: "Read the intro. Set up a C# Console project to house your pattern implementations.",
            completed: false
          },
          {
            id: "3-2",
            dayNumber: 2,
            title: "Day 2: Singleton Pattern",
            concepts: ["Ensuring a class has only one instance", "Thread-safe implementation in C# using Lazy<T>"],
            targetedResource: "Refactoring.Guru / C# in Depth (Jon Skeet on Singleton)",
            drill: "Implement a thread-safe ConfigurationManager Singleton in C#.",
            completed: false
          },
          {
            id: "3-3",
            dayNumber: 3,
            title: "Day 3: Factory Method Pattern",
            concepts: ["Delegating instantiation to subclasses", "Using interfaces for object creation"],
            targetedResource: "Refactoring.Guru: Factory Method",
            drill: "Create an IDocument interface and a DocumentFactory that returns either a PdfDocument or WordDocument.",
            completed: false
          },
          {
            id: "3-4",
            dayNumber: 4,
            title: "Day 4: Observer Pattern",
            concepts: ["Publish-Subscribe mechanics", "C# events and delegates vs explicit Observer implementation"],
            targetedResource: "Refactoring.Guru: Observer / Microsoft Docs on events",
            drill: "Implement a StockTicker (Subject) that notifies multiple Investor (Observer) objects when a price changes.",
            completed: false
          },
          {
            id: "3-5",
            dayNumber: 5,
            title: "Day 5: Combining Patterns",
            concepts: ["How patterns interact in real-world systems"],
            targetedResource: "Review week's materials",
            drill: "Refactor the StockTicker to use the Factory to create Investors, and log notifications using the Singleton Logger.",
            completed: false
          }
        ]
      },
      {
        id: 4,
        title: "Week 4",
        theme: "Basic SQL & CRUD",
        description: "W3Schools SQL focus: Select, Insert, Update, Delete.",
        days: [
          {
            id: "4-1",
            dayNumber: 1,
            title: "Day 1: Databases & SELECT",
            concepts: ["What is a Relational Database?", "SELECT and FROM clauses"],
            targetedResource: "W3Schools SQL Tutorial (Intro & Select)",
            drill: "Write queries to select all columns, and specific columns from a Customers table.",
            completed: false
          },
          {
            id: "4-2",
            dayNumber: 2,
            title: "Day 2: Filtering Data (WHERE)",
            concepts: ["WHERE clause", "Operators (=, <>, >, LIKE, IN)"],
            targetedResource: "W3Schools SQL Tutorial (Where, And/Or, Like)",
            drill: "Filter the Customers table to find users in specific countries using IN, and matching names using LIKE.",
            completed: false
          },
          {
            id: "4-3",
            dayNumber: 3,
            title: "Day 3: INSERT INTO",
            concepts: ["Inserting new rows", "Handling Auto-Increment / Identity columns"],
            targetedResource: "W3Schools SQL Tutorial (Insert Into)",
            drill: "Write INSERT statements to add 3 new products into a Products table.",
            completed: false
          },
          {
            id: "4-4",
            dayNumber: 4,
            title: "Day 4: UPDATE & DELETE",
            concepts: ["Updating existing rows", "Deleting rows safely", "The danger of omitting WHERE"],
            targetedResource: "W3Schools SQL Tutorial (Update & Delete)",
            drill: "Write an UPDATE statement to change a product's price, and a DELETE statement to remove it.",
            completed: false
          },
          {
            id: "4-5",
            dayNumber: 5,
            title: "Day 5: Sorting & Limiting",
            concepts: ["ORDER BY ASC/DESC", "LIMIT / TOP clauses"],
            targetedResource: "W3Schools SQL Tutorial (Order By & Top)",
            drill: "Query the top 5 most expensive products sorted in descending order.",
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "MONTH 2: DB, NETWORKING & .NET 8 WEB API",
    weeks: [
      {
        id: 5,
        title: "Week 5",
        theme: "Advanced SQL & PostgreSQL",
        description: "JOINs, Grouping, and Window Functions.",
        days: [
          {
            id: "5-1",
            dayNumber: 1,
            title: "Day 1: INNER JOIN",
            concepts: ["Combining rows from multiple tables based on related columns", "Table aliasing"],
            targetedResource: "SQLBolt / PostgreSQL Docs on JOINs",
            drill: "Join Orders and Customers tables to show which customer made which order.",
            completed: false
          },
          {
            id: "5-2",
            dayNumber: 2,
            title: "Day 2: LEFT JOIN & NULLs",
            concepts: ["Keeping unmatched rows from the left table", "IS NULL checks"],
            targetedResource: "SQLBolt / PostgreSQL Docs on JOINs",
            drill: "Use a LEFT JOIN to find all Customers who have NEVER placed an Order (Orders.Id IS NULL).",
            completed: false
          },
          {
            id: "5-3",
            dayNumber: 3,
            title: "Day 3: GROUP BY & Aggregations",
            concepts: ["COUNT, SUM, AVG", "Grouping records and using HAVING"],
            targetedResource: "W3Schools SQL / SQLBolt",
            drill: "Write a query to find the total sales amount grouped by country, having total sales > $10,000.",
            completed: false
          },
          {
            id: "5-4",
            dayNumber: 4,
            title: "Day 4: Subqueries & CTEs",
            concepts: ["Nested SELECT statements", "WITH clause (Common Table Expressions)"],
            targetedResource: "PostgreSQL Docs (WITH Queries)",
            drill: "Rewrite a complex subquery into a clean CTE that finds above-average priced products.",
            completed: false
          },
          {
            id: "5-5",
            dayNumber: 5,
            title: "Day 5: Window Functions",
            concepts: ["OVER() and PARTITION BY", "ROW_NUMBER() vs RANK()"],
            targetedResource: "PostgreSQL Docs (Window Functions)",
            drill: "Use DENSE_RANK() to find the 3rd highest paid employee in every department without grouping rows.",
            completed: false
          }
        ]
      },
      {
        id: 6,
        title: "Week 6",
        theme: "Database Design, Normalization, & ACID",
        description: "Designing schemas and understanding database guarantees.",
        days: [
          {
            id: "6-1",
            dayNumber: 1,
            title: "Day 1: Keys & Relationships",
            concepts: ["Primary Keys", "Foreign Keys", "1:1, 1:N, M:N mappings"],
            targetedResource: "PostgreSQL Docs: Data Definition",
            drill: "Write DDL (CREATE TABLE) statements for a blog: Users (1:N) Posts (M:N) Tags.",
            completed: false
          },
          {
            id: "6-2",
            dayNumber: 2,
            title: "Day 2: Normalization (1NF & 2NF)",
            concepts: ["Atomic values (1NF)", "Removing partial dependencies (2NF)"],
            targetedResource: "Database Normalization Guides (Generic)",
            drill: "Normalize a flat, comma-separated spreadsheet of student courses into 1NF and 2NF tables.",
            completed: false
          },
          {
            id: "6-3",
            dayNumber: 3,
            title: "Day 3: 3rd Normal Form (3NF)",
            concepts: ["Removing transitive dependencies"],
            targetedResource: "Database Normalization Guides (Generic)",
            drill: "Normalize a table to 3NF so that non-key columns only depend on the primary key.",
            completed: false
          },
          {
            id: "6-4",
            dayNumber: 4,
            title: "Day 4: ACID Properties",
            concepts: ["Atomicity, Consistency, Isolation, Durability", "Transactions (BEGIN, COMMIT, ROLLBACK)"],
            targetedResource: "PostgreSQL Docs: Concurrency Control",
            drill: "Write a SQL transaction script that transfers funds between two bank accounts safely.",
            completed: false
          },
          {
            id: "6-5",
            dayNumber: 5,
            title: "Day 5: Indexing Basics",
            concepts: ["B-Tree Indexes", "Full table scans vs Index seeks"],
            targetedResource: "Use The Index, Luke!",
            drill: "Create an index on a frequently queried column. Use EXPLAIN to verify it's being used.",
            completed: false
          }
        ]
      },
      {
        id: 7,
        title: "Week 7",
        theme: "Web API Fundamentals & Networking",
        description: "HTTP, TCP/UDP, Request lifecycle, and Status Codes.",
        days: [
          {
            id: "7-1",
            dayNumber: 1,
            title: "Day 1: OSI Model & IP",
            concepts: ["The layers of networking", "IP addressing (IPv4 vs IPv6)"],
            targetedResource: "Cloudflare Learning Center: OSI Model",
            drill: "Map a standard web request (opening a browser) through the top layers of the OSI model.",
            completed: false
          },
          {
            id: "7-2",
            dayNumber: 2,
            title: "Day 2: TCP vs UDP",
            concepts: ["Connection-oriented (TCP) vs Connectionless (UDP)", "TCP 3-way handshake"],
            targetedResource: "Cloudflare Learning Center: TCP vs UDP",
            drill: "Draw the SYN, SYN-ACK, ACK handshake diagram on paper.",
            completed: false
          },
          {
            id: "7-3",
            dayNumber: 3,
            title: "Day 3: HTTP Request/Response Lifecycle",
            concepts: ["HTTP Methods (GET, POST, PUT, DELETE)", "Statelessness of HTTP"],
            targetedResource: "MDN Web Docs: HTTP",
            drill: "Use Postman or curl to manually send a GET and POST request to a public API (e.g. JSONPlaceholder).",
            completed: false
          },
          {
            id: "7-4",
            dayNumber: 4,
            title: "Day 4: Request Headers & Body",
            concepts: ["Content-Type (application/json)", "Authorization headers", "Query params vs Route params"],
            targetedResource: "MDN Web Docs: HTTP Headers",
            drill: "Send a POST request with a JSON body and a custom Header using Postman.",
            completed: false
          },
          {
            id: "7-5",
            dayNumber: 5,
            title: "Day 5: HTTP Error Codes",
            concepts: ["2xx (Success), 3xx (Redirect), 4xx (Client Error), 5xx (Server Error)", "400 vs 401 vs 403 vs 404"],
            targetedResource: "MDN Web Docs: HTTP Status Codes",
            drill: "Write down the exact semantic difference between returning 401 Unauthorized and 403 Forbidden.",
            completed: false
          }
        ]
      },
      {
        id: 8,
        title: "Week 8",
        theme: ".NET 8 Web API & Execution Process",
        description: "Controllers, Routing, Middleware pipeline.",
        days: [
          {
            id: "8-1",
            dayNumber: 1,
            title: "Day 1: Project Setup & Kestrel",
            concepts: ["How a .NET API request works", "Program.cs overview", "Kestrel web server"],
            targetedResource: "Microsoft Docs: ASP.NET Core Fundamentals",
            drill: "Create a new .NET 8 Web API project (dotnet new webapi). Run it and observe the swagger UI.",
            completed: false
          },
          {
            id: "8-2",
            dayNumber: 2,
            title: "Day 2: Controllers & Routing",
            concepts: ["ControllerBase", "[ApiController] attributes", "Attribute Routing ([Route], [HttpGet])"],
            targetedResource: "Microsoft Docs: Routing in ASP.NET Core",
            drill: "Create a ProductsController. Add endpoints for GET /products and GET /products/{id}.",
            completed: false
          },
          {
            id: "8-3",
            dayNumber: 3,
            title: "Day 3: Model Binding",
            concepts: ["[FromBody], [FromQuery], [FromRoute]", "Deserializing JSON to C# models automatically"],
            targetedResource: "Microsoft Docs: Model Binding",
            drill: "Add a POST endpoint that takes a Product model [FromBody] and returns it.",
            completed: false
          },
          {
            id: "8-4",
            dayNumber: 4,
            title: "Day 4: The Middleware Pipeline",
            concepts: ["Request/Response pipeline", "app.UseRouting(), app.UseEndpoints()", "Order of middleware execution"],
            targetedResource: "Microsoft Docs: ASP.NET Core Middleware",
            drill: "Write a custom inline middleware in Program.cs that logs the execution time of every request.",
            completed: false
          },
          {
            id: "8-5",
            dayNumber: 5,
            title: "Day 5: Exception Handling Middleware",
            concepts: ["Global error handling without try/catch everywhere", "UseExceptionHandler"],
            targetedResource: "Microsoft Docs: Handle errors in ASP.NET Core",
            drill: "Implement a global exception handler that catches unhandled exceptions and returns a standardized 500 JSON response.",
            completed: false
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "MONTH 3: ARCHITECTURE & CS FUNDAMENTALS",
    weeks: [
      {
        id: 9,
        title: "Week 9",
        theme: "OS Fundamentals",
        description: "Processes, Threads, Deadlocks.",
        days: [
          {
            id: "9-1",
            dayNumber: 1,
            title: "Day 1: Process vs Thread",
            concepts: ["Address spaces", "Resource sharing (memory, file descriptors)"],
            targetedResource: "OSTEP: Processes & Threads chapters",
            drill: "Explain the difference in overhead between spawning a new process vs a new thread.",
            completed: false
          },
          {
            id: "9-2",
            dayNumber: 2,
            title: "Day 2: Context Switching & Scheduling",
            concepts: ["How the OS time-shares the CPU", "Scheduler algorithms (Round Robin)"],
            targetedResource: "OSTEP: CPU Scheduling",
            drill: "Draw the state diagram of a process (New -> Ready -> Running -> Waiting -> Terminated).",
            completed: false
          },
          {
            id: "9-3",
            dayNumber: 3,
            title: "Day 3: Race Conditions",
            concepts: ["Non-deterministic execution", "Critical sections"],
            targetedResource: "OSTEP: Concurrency Bugs",
            drill: "Write a small C# program with two Threads incrementing a shared static variable without locks. Observe the incorrect output.",
            completed: false
          },
          {
            id: "9-4",
            dayNumber: 4,
            title: "Day 4: Mutexes & Locks",
            concepts: ["Mutual Exclusion", "lock keyword in C#"],
            targetedResource: "Microsoft Docs: lock statement",
            drill: "Fix your race condition program by wrapping the critical section in a lock (object) block.",
            completed: false
          },
          {
            id: "9-5",
            dayNumber: 5,
            title: "Day 5: Deadlocks",
            concepts: ["The 4 Coffman conditions", "Deadlock prevention (Lock ordering)"],
            targetedResource: "OSTEP: Concurrency Bugs",
            drill: "Write a C# program that intentionally deadlocks by having Thread A wait for Lock 2, and Thread B wait for Lock 1.",
            completed: false
          }
        ]
      },
      {
        id: 10,
        title: "Week 10",
        theme: "Clean Architecture & Patterns",
        description: "Dependency Injection, Repositories, Architecture layers.",
        days: [
          {
            id: "10-1",
            dayNumber: 1,
            title: "Day 1: Dependency Injection (DI) Lifecycle",
            concepts: ["Transient vs Scoped vs Singleton services", "Inversion of Control container in .NET 8"],
            targetedResource: "Microsoft Docs: Dependency injection in ASP.NET Core",
            drill: "Register a service as Scoped and inject it into a Controller using constructor injection.",
            completed: false
          },
          {
            id: "10-2",
            dayNumber: 2,
            title: "Day 2: The Repository Pattern",
            concepts: ["Abstracting data access", "Separation of concerns between business logic and DB queries"],
            targetedResource: "Microsoft Architecture: Repository Pattern",
            drill: "Create an IUserRepository and a UserRepository implementation. Inject it into a UserController.",
            completed: false
          },
          {
            id: "10-3",
            dayNumber: 3,
            title: "Day 3: Clean Architecture Layers",
            concepts: ["Domain, Application, Infrastructure, Presentation layers", "Dependency rule (inner layers don't depend on outer)"],
            targetedResource: "Jason Taylor's Clean Architecture Template / Concepts",
            drill: "Draw a diagram of the layers and where the Web API Controller, DbContext, and Business Entities live.",
            completed: false
          },
          {
            id: "10-4",
            dayNumber: 4,
            title: "Day 4: DTOs & Mapping",
            concepts: ["Data Transfer Objects", "Preventing over-posting vulnerabilities", "Automapper (theory)"],
            targetedResource: "Microsoft Docs: Create web APIs with ASP.NET Core (DTOs)",
            drill: "Create a UserDto. Write a manual mapper method that converts a User entity to a UserDto before returning it from the API.",
            completed: false
          },
          {
            id: "10-5",
            dayNumber: 5,
            title: "Day 5: Validation & FluentValidation",
            concepts: ["Validating requests before they hit business logic", "Action Filters"],
            targetedResource: "FluentValidation Documentation",
            drill: "Implement input validation on a POST endpoint to ensure string lengths and positive integers.",
            completed: false
          }
        ]
      },
      {
        id: 11,
        title: "Week 11",
        theme: "Security & Database Connection",
        description: "EF Core, CRUD, Authentication, and JWTs.",
        days: [
          {
            id: "11-1",
            dayNumber: 1,
            title: "Day 1: DB Connection Setup",
            concepts: ["How to establish a DB connection in .NET 8 using Entity Framework Core"],
            targetedResource: "EF Core Documentation",
            drill: "Configure appsettings.json and DbContext to connect to PostgreSQL.",
            completed: false
          },
          {
            id: "11-2",
            dayNumber: 2,
            title: "Day 2: CRUD Operations (Create & Read)",
            concepts: ["Handling POST and GET requests"],
            targetedResource: "Microsoft Web API Docs",
            drill: "Implement Create and Read endpoints for Customer and Product.",
            completed: false
          },
          {
            id: "11-3",
            dayNumber: 3,
            title: "Day 3: CRUD Operations (Update & Delete)",
            concepts: ["Handling PUT and DELETE requests"],
            targetedResource: "Microsoft Web API Docs",
            drill: "Implement Update and Delete for the Order entity.",
            completed: false
          },
          {
            id: "11-4",
            dayNumber: 4,
            title: "Day 4: Authentication & Authorization",
            concepts: ["Verifying user identity vs verifying permissions"],
            targetedResource: ".NET Security Docs",
            drill: "Add [Authorize] attributes to your endpoints.",
            completed: false
          },
          {
            id: "11-5",
            dayNumber: 5,
            title: "Day 5: JWT (JSON Web Tokens)",
            concepts: ["Stateless authentication, signing tokens"],
            targetedResource: "Auth0/JWT Intro",
            drill: "Generate a JWT upon successful dummy login.",
            completed: false
          }
        ]
      },
      {
        id: 12,
        title: "Week 12",
        theme: "Microservices & Advanced Theory",
        description: "Interview Prep: Distributed systems and scalable architecture.",
        days: [
          {
            id: "12-1",
            dayNumber: 1,
            title: "Day 1: Monolith vs Microservice",
            concepts: ["Pros and cons of each architecture", "Independent deployability", "Data ownership per service"],
            targetedResource: "Martin Fowler: Microservices",
            drill: "Write a comparison matrix of Monolithic vs Microservices architectures for a theoretical E-commerce site.",
            completed: false
          },
          {
            id: "12-2",
            dayNumber: 2,
            title: "Day 2: Inter-service Communication",
            concepts: ["Synchronous (HTTP/gRPC) vs Asynchronous (Messaging)", "Coupling and failure cascades"],
            targetedResource: "Microsoft Architecture: Communication in a microservice architecture",
            drill: "Explain the circuit breaker pattern and why it's necessary for HTTP calls between services.",
            completed: false
          },
          {
            id: "12-3",
            dayNumber: 3,
            title: "Day 3: Message Brokers (Kafka / RabbitMQ)",
            concepts: ["Publish/Subscribe", "Event-driven architecture", "Decoupling services"],
            targetedResource: "RabbitMQ Tutorials / Kafka Intro",
            drill: "Diagram how an 'OrderPlaced' event is published to a message broker and consumed by an 'InventoryService'.",
            completed: false
          },
          {
            id: "12-4",
            dayNumber: 4,
            title: "Day 4: Distributed Caching (Redis)",
            concepts: ["Cache aside pattern", "In-memory data store for scaling reads", "Cache invalidation strategies"],
            targetedResource: "Redis Documentation",
            drill: "Explain how Redis differs from a relational database and when to use a cache TTL (Time To Live).",
            completed: false
          },
          {
            id: "12-5",
            dayNumber: 5,
            title: "Day 5: Capstone Review & Interview Polish",
            concepts: ["STAR method for behavioral questions", "Explaining technical trade-offs"],
            targetedResource: "Behavioral Interview Guides",
            drill: "Record yourself defending the decision to use Entity Framework over raw ADO.NET in an interview setting.",
            completed: false
          }
        ]
      }
    ]
  }
];
