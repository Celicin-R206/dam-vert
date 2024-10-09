import useSWR from "swr";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const fetcherProtected = ([url, token]: [string, string]) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const postEvent = async (
  formData: unknown,
  token: string | undefined
) => {
  try {
    const res = await axios.post(`${API_URL}evenements/new/`, formData, {
      headers: {
        "Content-Type": "mutipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (error) {
    console.error("signin failed", error);
    throw error;
  }
};
