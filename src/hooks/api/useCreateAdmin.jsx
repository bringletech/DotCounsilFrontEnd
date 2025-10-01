import { useState } from "react";

const useCreateAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createAdmin = async (adminData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Get base URL from Vite env variable
      const url = (
        import.meta.env.VITE_API_URI || "http://localhost:3000"
      ).replace(/\/$/, "");
      //   const token = localStorage.getItem("accessToken"); // if auth is needed

      const response = await fetch(`${url}/api/v1/superAdmin/createAdmin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //   ...(token && { Authorization: `Bearer ${token}` }),
        },
        body: JSON.stringify(adminData),
      });

      const data = await response.json();
      console.log("Response data:", data);
      if (!response.ok) {
        throw new Error(data.message || "Failed to create admin");
      }

      setSuccess(true);
      return data;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { createAdmin, loading, error, success };
};

export default useCreateAdmin;
