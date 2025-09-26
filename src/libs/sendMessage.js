"use server";

export async function sendMessage({ name, email, message }) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) throw new Error("Missing DISCORD_WEBHOOK_URL");

  const payload = {
    content: `📩 **New Message**\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`,
  };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error("Failed to send Discord webhook");

  return { success: true };
}