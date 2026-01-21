const amqp = require("amqplib");

const QUEUE = "notifications";

async function publishMessage(data) {
  const connection = await amqp.connect("amqp://rabbitmq");
  const channel = await connection.createChannel();

  await channel.assertQueue(QUEUE, { durable: true });

  channel.sendToQueue(
    QUEUE,
    Buffer.from(JSON.stringify(data)),
    { persistent: true }
  );

  console.log("Message sent:", data);

  setTimeout(() => {
    channel.close();
    connection.close();
  }, 500);
}

module.exports = publishMessage;
