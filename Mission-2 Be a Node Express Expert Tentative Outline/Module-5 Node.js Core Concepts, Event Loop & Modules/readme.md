# 🌐 Web Development & Node.js Core Concepts (Notes)

This README summarizes the most important concepts from our discussion about how the web works and how Node.js operates internally.

---

# 1. How the Web Works 🌍

When you enter a URL (like `google.com`) in a browser:

### Flow:

```
User → Browser → DNS → Server → Response → Rendered Website
```

### Steps:

1. Browser sends a request
2. DNS converts domain → IP address
3. Server receives request
4. Server sends HTML/CSS/JS
5. Browser renders the page

---

# 2. Frontend vs Backend ⚔️

## Frontend 🎨

What users see:

- HTML (structure)
- CSS (design)
- JavaScript (interaction)

## Backend ⚙️

Server-side logic:

- Authentication
- Database handling
- API creation
- Business logic

---

# 3. Node.js Revolution 🚀

Node.js allowed JavaScript to run on the server.

### Key Benefits:

- Same language for frontend & backend
- Fast performance
- Scalable applications
- Event-driven architecture

---

# 4. Event-Driven Architecture 🔔

Node.js reacts to events instead of blocking execution.

### Example events:

- Click
- HTTP request
- File upload

### Flow:

```
Event → Event Loop → Callback → Response
```

---

# 5. Single-Threaded vs Multithreaded 🧵

## Node.js (Single-threaded)

- Uses one main thread
- Handles async tasks using Event Loop

## Traditional Servers (Multithreaded)

- Each request = separate thread
- More memory usage

---

# 6. Event Loop 🔄

The Event Loop is the heart of Node.js.

### How it works:

```
Call Stack → Async Task → Callback Queue → Event Loop → Execution
```

### Key idea:

- Node.js does NOT wait
- It processes other tasks while waiting

---

# 7. Asynchronous System ⚡

Non-blocking execution:

- Tasks run in background
- Main thread is never blocked

Example:

```js
setTimeout(() => console.log("Done"), 2000);
console.log("Hello");
```

Output:

```
Hello
Done
```

---

# 8. Buffers & Streams 🌊

## Buffer 🧠

- Temporary storage for binary data
- Used for files, images, videos

## Stream 🌊

- Data processed in chunks
- Efficient for large files

### Types of Streams:

- Readable
- Writable
- Duplex
- Transform

---

# 9. Modular System 📦

Code is split into reusable parts.

### Types:

- Built-in modules (fs, http)
- User-defined modules
- npm packages

### Example:

```js
export function add(a, b) {
  return a + b;
}
```

---

# 10. IIFE (Immediately Invoked Function Expression) ⚡

A function that runs immediately after creation.

### Syntax:

```js
(function () {
  console.log("IIFE running");
})();
```

### Why used:

- Avoid global variables
- Create private scope
- Early module pattern

---

# 🧠 Final Summary

- Web works via request-response cycle
- Frontend = UI, Backend = logic
- Node.js = fast, event-driven server runtime
- Event Loop handles async operations
- Buffers store binary data
- Streams process data efficiently
- Modules organize code
- IIFE creates private scope

---

# 🚀 One-Line Insight

> Node.js is fast because it uses an event-driven, non-blocking architecture powered by the Event Loop, Streams, and modular design.
