import { useEffect, useState } from "react";
import instance from "../utils/axiosConfig";

const useFetchData = (url, params = {}, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = params
          ? await instance.get(url, { params })
          : await instance.get(url);

        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url,params]);

  return { data, error, loading };
};

export default useFetchData;
