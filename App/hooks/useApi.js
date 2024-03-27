import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const result = await apiFunc();
    if (!result.ok) return setError(true);

    setError(false);
    setLoading(false);
    setData(result.data);
  };

  return { data, error, loading, request };
};
