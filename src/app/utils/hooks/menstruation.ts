import useSWR from "swr";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcherProtected = ([url, token]: [string, string]) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const postMenstruation = async (
  start_date: string | null,
  duration: string,
  token: string | undefined
) => {
  try {
    const res = await axios.post(
      `${API_URL}menstruation/new/`,
      { start_date, duration },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("signin failed", error);
    throw error;
  }
};

export const useWomanInfo = (token: string | undefined) => {
  const { data, error, mutate } = useSWR(
    token ? [`${API_URL}woman/info/`, token] : null,
    fetcherProtected
  );
  return {
    woman_info: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
export const useWomanInfoLast = (token: string | undefined) => {
  const { data, error, mutate } = useSWR(
    token ? [`${API_URL}woman/info/last/`, token] : null,
    fetcherProtected
  );
  return {
    woman_ifon: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
