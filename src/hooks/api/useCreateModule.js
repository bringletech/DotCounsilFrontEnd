import { useState, useCallback } from "react";

export function useCreateModule() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createModule = useCallback(async ({ courseId, title, description, order }) => {
    setLoading(true);
    setError(null);
    try {
      const base = (import.meta.env.VITE_API_URI || '').replace(/\/$/, '');
      if (!base) throw new Error('VITE_API_URI is not set');
      if (!courseId) throw new Error('courseId is required to create a module');

      const url = `${base}/module/createModule/${courseId}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          order: Number(order),
        }),
      });

      const text = await res.text();
      let json;
      try { json = text ? JSON.parse(text) : {}; } catch { json = { raw: text }; }
      if (!res.ok) {
        const msg = json?.message || json?.error || `Request failed: ${res.status}`;
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
  }, []);

  return { createModule, data, loading, error };
}
