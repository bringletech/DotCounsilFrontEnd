import { useState, useCallback } from "react";
import axiosInstance from "../../utils/axiosInstance";

export function useCreateLesson() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createLesson = useCallback(async ({ moduleId, title, description, order, video, thumbnail }) => {
    setLoading(true);
    setError(null);
    try {
      if (!moduleId) throw new Error('moduleId is required to create a lesson');

      const formData = new FormData();
      if (title != null) formData.append('title', title);
      if (description != null) formData.append('description', description);
      if (order != null) formData.append('order', String(order));
      if (video) formData.append('video', video);
      if (thumbnail) formData.append('thumbnail', thumbnail);

      const response = await axiosInstance.post(
        `/api/v1/lesson/createLesson/${moduleId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setData(response.data.data);
      return response.data.data;
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        'Request failed';
      const normalizedError = new Error(message);
      setError(normalizedError);
      throw normalizedError;
    } finally {
      setLoading(false);
    }
  }, []);

  return { createLesson, data, loading, error };
}
