import { useState, useCallback } from "react";
import axiosInstance from "../../utils/axiosInstance";
export function useCreateCourse() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createCourse = useCallback(
    async ({ title, description, price, isPublished, status }) => {
      setLoading(true);
      setError(null);

      try {
        const normalizedStatus = (status || "").toUpperCase();
        const allowed = ["PAID", "FREE", "COMING_SOON"];
        if (!allowed.includes(normalizedStatus)) {
          throw new Error(
            `Invalid status. Expected one of ${allowed.join(", ")}, received '${
              status ?? ""
            }'`
          );
        }
        const response = await axiosInstance.post(
          "/api/v1/course/createCourse",
          {
            title,
            description,
            price: normalizedStatus === "PAID" ? Number(price) : 0,
            isPublished: Boolean(isPublished),
            status: normalizedStatus,
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

  return { createCourse, data, loading, error };
}
