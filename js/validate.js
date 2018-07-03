// Validate Zipcode
export const isValidZip = zip => /^\d{5}(-\d{4})?$/.test(zip);

// Display Alert Message
export function showAlert(message, className) {
  // Create div
  const div = document.createElement('div');
  // Add classes
  div.className = `alert alert-${className}`;
  // Add text
  div.appendChild(document.createTextNode(message));
  // Get container
  const container = document.querySelector('.search-container');
  // Get form
  const form = document.querySelector('#pet-form');

  // Insert alert
  container.insertBefore(div, form);

  setTimeout(() => document.querySelector('.alert').remove(), 2000);
}
