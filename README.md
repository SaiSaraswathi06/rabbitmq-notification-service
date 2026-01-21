# 📢 Event-Driven Notification Service using RabbitMQ

This project implements an **event-driven notification system** using **Node.js, RabbitMQ, and Docker**.  
It demonstrates how services can communicate **asynchronously** using a message broker to ensure reliability, scalability, and loose coupling.

---

## 🧠 Project Overview

In modern applications, notifications (email, SMS, push alerts) should not block the main application flow.  
This project solves that problem by using **RabbitMQ** as a message queue.

### Key Idea (Simple)
- The **API Service** sends notification requests.
- **RabbitMQ** safely stores these requests in a queue.
- The **Worker Service** reads and processes them in the background.

---

## 🏗️ System Architecture

Client
|
| HTTP Request
v
API Service (Producer)
|
| Publish Message
v
RabbitMQ Queue
|
| Consume Message
v
Worker Service (Consumer)


---

## 🧩 Services Used

### 1️⃣ API Service (Producer)
- Built using **Node.js + Express**
- Accepts notification requests via REST API
- Publishes messages to RabbitMQ

### 2️⃣ RabbitMQ (Message Broker)
- Handles message queuing
- Ensures messages are not lost
- Uses durable queues and acknowledgements

### 3️⃣ Worker Service (Consumer)
- Built using **Node.js**
- Consumes messages from RabbitMQ
- Processes notifications asynchronously
- Includes retry logic to handle RabbitMQ startup delays

---

## 🛠️ Technologies

- Node.js
- Express.js
- RabbitMQ
- Docker
- Docker Compose
- amqplib (RabbitMQ client)

---

## 🚀 How to Run the Project

### Prerequisites
- Docker Desktop installed and running
- Git installed

---

### Step 1: Clone the Repository

```bash
git clone https://github.com/<your-username>/rabbitmq-notification-service.git
cd rabbitmq-notification-service
Step 2: Start the Services
docker-compose up --build
This will start:

RabbitMQ

API Service

Worker Service

🌐 Access Points
API Service
http://localhost:4000
RabbitMQ Dashboard
http://localhost:15672
Login Credentials

Username: guest
Password: guest
📬 API Usage
Endpoint
POST /notify
URL
http://localhost:4000/notify
Request Body (JSON)
{
  "type": "email",
  "to": "user@gmail.com",
  "message": "Hello RabbitMQ!"
}
Success Response
{
  "status": "Notification queued successfully"
}
🧪 How to Verify It Works
Send a POST request using Postman or Thunder Client

Check API logs → message published

Check Worker logs → message processed

Check RabbitMQ dashboard → queue message count updates

🛡️ Reliability Features
✅ Durable queues

✅ Persistent messages

✅ Message acknowledgements

✅ Retry logic in worker

✅ RabbitMQ health checks in Docker Compose

⚠️ Common Issues Handled
Docker port conflicts resolved using port mapping

RabbitMQ startup delays handled using retry logic

Service dependency handled using Docker health checks

🎯 Learning Outcomes
Understanding event-driven architecture

Using RabbitMQ for asynchronous communication

Containerizing microservices using Docker

Handling real-world issues like retries and service dependencies


📌 Future Enhancements
Dead Letter Queue (DLQ)

Multiple notification types (SMS, Push)

Database integration

Structured logging

Unit and integration tests

🏁 Conclusion
This project demonstrates a real-world microservices communication pattern using RabbitMQ and Docker.
It is scalable, reliable, and suitable for production-level systems.

Author: Sai Saraswathi
Project Type: Backend / Distributed Systems / Event-Driven Architecture