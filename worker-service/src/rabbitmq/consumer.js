const amqp = require("amqplib");

const QUEUE = "notifications";
const RABBITMQ_URL = "amqp://rabbitmq";

async function connectWithRetry() {
  try {
    console.log("Worker: Trying to connect to RabbitMQ...");

    const connection = await amqp.connect(RABBITMQ_URL);
    const channel = await connection.createChannel();

    await channel.assertQueue(QUEUE, { durable: true });

    console.log("Worker: Connected to RabbitMQ. Waiting for messages...");

    channel.consume(QUEUE, (msg) => {
      const data = JSON.parse(msg.content.toString());
      console.log("Processing notification:", data);

      channel.ack(msg);
    });

  } catch (error) {
    console.log("RabbitMQ not ready, retrying in 5 seconds...");
    setTimeout(connectWithRetry, 5000);
  }
}

connectWithRetry();
