import useSWR from "swr";
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher = ([url, token]: [string, string]) =>
  axios
    .get(url, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => res.data);

export const deposit = async (
  mode_payement: string,
  numero_source: string,
  reference: string,
  date_payement: string,
  token: string
) => {
  try {
    const { data } = await axios.post<any[]>(
      `${API_URL}client/payement/verification/mobile/`,
      {
        mode_payement,
        numero_source,
        reference,
        date_payement,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data, isLoading: !data };
  } catch (error) {
    console.error("deposit failed", error);
    throw error;
  }
};

export const useMyAllDepot = (token: string) => {
  const { data, error, mutate } = useSWR(
    token ? [`${API_URL}client/depots/`, token] : null,
    fetcher
  );
  return {
    myAllDepot: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const useMySolde = (token: string) => {
  const { data, error, mutate } = useSWR(
    token ? [`${API_URL}client/depositvoucher/`, token] : null,
    fetcher
  );
  return {
    mySolde: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
