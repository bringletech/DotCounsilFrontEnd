import { useState, useCallback } from "react";


export function useCreateLesson() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createLesson = useCallback(async ({ moduleId, title, description, order, video, thumbnail }) => {
    setLoading(true);
    setError(null);
    try {
      const base = (import.meta.env.VITE_API_URI || '').replace(/\/$/, '');
      if (!base) throw new Error('VITE_API_URI is not set');
      if (!moduleId) throw new Error('moduleId is required to create a lesson');

      const url = `${base}/api/v1/lesson/createLesson/${moduleId}`;
      const formData = new FormData();
      if (title != null) formData.append('title', title);
      if (description != null) formData.append('description', description);
      if (order != null) formData.append('order', String(order));
      if (video) formData.append('video', video);
      if (thumbnail) formData.append('thumbnail', thumbnail);

      const res = await fetch(url, {
        method: 'POST',
        body: formData,
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

  return { createLesson, data, loading, error };
}
