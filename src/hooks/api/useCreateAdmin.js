import { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useCreateAdmin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createAdmin = async (adminData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axiosInstance.post(
        `/api/v1/superAdmin/createAdmin`,
        adminData
      );

      const data = response.data?.data ?? response.data;
      setSuccess(true);
      return data;
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Failed to create admin";
      const normalizedError = new Error(message);
      setError(normalizedError);
      throw normalizedError;
    } finally {
      setLoading(false);
    }
  };

  return { createAdmin, loading, error, success };
};

export default useCreateAdmin;
