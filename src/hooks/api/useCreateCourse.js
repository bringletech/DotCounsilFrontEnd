import { useState, useCallback } from "react";
export function useCreateCourse() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createCourse = useCallback(
    async ({ title, description, price, isPublished, status }) => {
      setLoading(true);
      setError(null);

      try {
        const base = (import.meta.env.VITE_API_URI || "").replace(/\/$/, "");
        console.log("env var:", base);
        if (!base) throw new Error("VITE_API_URI is not set");

        const url = `${base}/course/createCourse`;
        const normalizedStatus = (status || "").toUpperCase();
        const allowed = ["PAID", "FREE", "COMING_SOON"];
        if (!allowed.includes(normalizedStatus)) {
          throw new Error(
            `Invalid status. Expected one of ${allowed.join(", ")}, received '${
              status ?? ""
            }'`
          );
        }
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            price: normalizedStatus === "PAID" ? Number(price) : 0,
            isPublished: Boolean(isPublished),
            status: normalizedStatus,
          }),
        });
        console.log("Response:", res);

        const text = await res.text();
        let json;
        try {
          json = text ? JSON.parse(text) : {};
        } catch {
          json = { raw: text };
        }
        if (!res.ok) {
          const msg =
            json?.message || json?.error || `Request failed: ${res.status}`;
          throw new Error(msg);
        }

        setData(json);
        return json;
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { createCourse, data, loading, error };
}
