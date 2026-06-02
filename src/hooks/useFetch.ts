import { useEffect, useState } from "react";
import { userApi } from "../api/userApi";
import type { Users } from "../types/userTypes";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState<Users[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await userApi.get(url, { signal });
        setData(response.data);
      } catch (error: unknown) {
        if (axios.isCancel(error)) {
          return;
        }
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Something went wrong!");
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
