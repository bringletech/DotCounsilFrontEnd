import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";

const initialData = {
  cards: {
    totalUsers: 0,
    totalEmployees: 0,
    totalCourses: 0,
    totalRevenue: 0,
  },
  revenueTrends: [],
  courseEnrollments: [],
  recentActivities: {
    newEnrollments: 0,
    newUsers: 0,
    newEmployees: 0,
  },
  topCourses: [],
};

const useDashboardOverview = () => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchOverview = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get(
        "/api/v1/superAdmin/dashboard/overview"
      );
      const payload = response?.data?.data ?? response?.data ?? initialData;
      setData({
        cards: { ...initialData.cards, ...(payload.cards ?? {}) },
        revenueTrends: payload.revenueTrends ?? initialData.revenueTrends,
        courseEnrollments:
          payload.courseEnrollments ?? initialData.courseEnrollments,
        recentActivities: {
          ...initialData.recentActivities,
          ...(payload.recentActivities ?? {}),
        },
        topCourses: payload.topCourses ?? initialData.topCourses,
      });
      return payload;
    } catch (err) {
      const message =
        err?.response?.data?.message ||
        err?.response?.data?.error ||
        err?.message ||
        "Failed to load dashboard overview";
      const normalizedError = new Error(message);
      setError(normalizedError);
      throw normalizedError;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOverview();
  }, [fetchOverview]);

  return { data, loading, error, refetch: fetchOverview };
};

export default useDashboardOverview;
