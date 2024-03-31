import { useEffect, useState } from "react";
import instance from "../utils/axiosConfig";

const useFetchData = (url, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get(url)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => setError(err));
  }, [url]);

  return { data, error, loading };
};

export default useFetchData;
