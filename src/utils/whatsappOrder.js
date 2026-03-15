// WhatsApp Order Helper
// Opens WhatsApp with a pre-filled order message

const WHATSAPP_NUMBER = "919705668710";

/**
 * Opens WhatsApp with a pre-filled order message.
 * @param {string} productName - Name of the product to order
 * @param {string} [details] - Optional extra details (e.g., size, variant)
 */
export const openWhatsAppOrder = (productName, details = "") => {
  const message = `Hello! I want to order:

🥩 *Product:* ${productName}${details ? `\n📝 *Details:* ${details}` : ""}
📍 *Location:* Allapur Road, Hyderabad

Please confirm availability and delivery time. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(url, "_blank", "noopener,noreferrer");
};

export default openWhatsAppOrder;
