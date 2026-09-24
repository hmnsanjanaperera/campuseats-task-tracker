// AFTER — clear names, no magic numbers, no secrets

const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  // Input validation
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }

  // Calculate subtotal
  const subtotal = price * quantity;

  // Apply VIP discount if the customer is a VIP
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

// The API key should come from an environment variable,
// e.g. process.env.API_KEY — never hard-coded