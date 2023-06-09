console.log("hello");
const axios = require("axios");

// List all your API endpoints here
const apiEndpoints = [
  "/api/schemas/UserSchema",
  "/api/schemas/PropertySchema",

  // Add more endpoints as needed
];

async function callSchemas() {
  try {
    for (const endpoint of apiEndpoints) {
      const response = await axios.post(`http://localhost:3001${endpoint}`);
      console.log(`API called: ${endpoint}`);
      console.log(response.data); // Output or process the response data as needed
    }
  } catch (error) {
    console.error("Error calling APIs:", error);
  }
}

callSchemas();
