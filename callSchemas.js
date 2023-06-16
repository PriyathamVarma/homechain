console.log("starting...");
const axios = require("axios");

// List all your API endpoints here
const apiEndpoints = [
  "/api/schemas/UserSchema",
  "/api/schemas/PropertySchema",
  "/api/schemas/NotificationSchema",
  "/api/schemas/SelledPropertiesSchema",

  // Add more endpoints as needed
];

async function callSchemas() {
  try {
    for (const endpoint of apiEndpoints) {
      const response = await axios.post(`http://localhost:3000${endpoint}`);
      console.log(`API called: ${endpoint}`);
      console.log(response.data); // Output or process the response data as needed
    }
  } catch (error) {
    console.error("Error calling APIs:", error);
  } finally {
    console.log("All APIS called successfully! 📡  💻  🗂️");
  }
}

callSchemas();
