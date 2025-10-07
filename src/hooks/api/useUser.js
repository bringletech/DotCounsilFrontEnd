import { useState, useCallback } from "react";
import axiosInstance from "../../utils/axiosInstance";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance.get(
        "/api/v1/superAdmin/getAllUsers"
      );
      const data = response?.data?.data ?? [];
      setUsers(data);
      return data;
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Failed to fetch users";
      const normalizedError = new Error(message);
      setError(normalizedError);
      throw normalizedError;
    } finally {
      setLoading(false);
    }
  }, []);

  return { users, loading, error, fetchUsers };
}
