import { useState, useCallback } from "react";
import axiosInstance from "../../utils/axiosInstance";

export function useCreateModule() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createModule = useCallback(
    async ({ courseId, title, description, order }) => {
      setLoading(true);
      setError(null);
      try {
        if (!courseId)
          throw new Error("courseId is required to create a module");

        const response = await axiosInstance.post(
          `/api/v1/module/createModule/${courseId}`,
          {
            title,
            description,
            order: Number(order),
          }
        );

        setData(response.data.data);
        return response.data.data;
      } catch (err) {
        const message =
          err?.response?.data?.message ||
          err?.response?.data?.error ||
          err?.message ||
          "Request failed";
        const normalizedError = new Error(message);
        setError(normalizedError);
        throw normalizedError;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { createModule, data, loading, error };
}
