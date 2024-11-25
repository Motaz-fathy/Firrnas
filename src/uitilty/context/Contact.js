import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Create the context
const ContactContext = createContext();

// Context Provider
export const ContactProvider = ({ children }) => {
  // State for the contact form
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // Function to handle contact form submission
  const submitContactForm = async (formData) => {
    try {
      setLoading(true); // Set loading state
      setMessage(null); // Clear previous success message
      setErrorMessage(null); // Clear previous error

      // Make the API call (adjust the URL and payload as needed)
      const response = await axios.post("/api/contact", formData);

      // Update the state with success message
      setMessage(response.data.message || "Form submitted successfully!");
    } catch (error) {
      // Update the state with error message
      setErrorMessage(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  // Provide the context values
  return (
    <ContactContext.Provider value={{ loading, message, errorMessage, submitContactForm }}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom Hook to use the ContactContext
export const useContact = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};
