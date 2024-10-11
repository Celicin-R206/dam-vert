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

export const postCourse = async (
  formData: unknown,
  token: string | undefined
) => {
  try {
    const res = await axios.post(`${API_URL}formations/new/`, formData, {
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

export const useMyCourse = (token: string | undefined) => {
  const { data, error, mutate } = useSWR(
    token ? [`${API_URL}formations/filter/`, token] : null,
    fetcherProtected
  );
  return {
    myCourse: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

// export const useAllCourse = () => {
//   const { data, error, mutate } = useSWR(`${API_URL}formations/list/`, fetcher);
//   return {
//     allCourse: data,
//     isLoading: !error && !data,
//     isError: error,
//     mutate,
//   };
// };

export const useAllCourse = (token: string | undefined) => {
  const { data, error, mutate } = useSWR(
    token ? [`${API_URL}formations/list/`, token] : null,
    fetcherProtected
  );
  return {
    allCourse: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export const postSession = async (
  formData: unknown,
  token: string | undefined
) => {
  try {
    const res = await axios.post(
      `${API_URL}formation/sessions/new/`,
      formData,
      {
        headers: {
          "Content-Type": "mutipart/form-data",
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

export const joinFormation = async (
  formation: string,
  token: string | undefined
) => {
  try {
    const res = await axios.post(
      `${API_URL}formations/subscribe/`,
      { formation },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return res.data;
  } catch (error) {
    console.error("joinFormation failed", error);
    throw error;
  }
};

// ------------- client ------------------- //

export const useClientCourse = (token: string | undefined) => {
  const { data, error, mutate } = useSWR(
    token ? [`${API_URL}formations/filter/`, token] : null,
    fetcherProtected
  );
  return {
    ClientCourse: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
