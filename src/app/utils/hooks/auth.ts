import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const register_personel = async (
  first_name: string,
  last_name: string,
  adress: string,
  contact: string,
  email: string,
  sexe: string,
  password: string
) => {
  try {
    const res = await axios.post(`${API_URL}client/register/`, {
      first_name,
      last_name,
      adress,
      contact,
      email,
      sexe,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("signup failed", error);
    throw error;
  }
};

export const register_partner = async (
  first_name: string,
  last_name: string,
  adress: string,
  contact: string,
  email: string,
  sexe: string,
  domaine: string,
  profession: string,
  organisation: string,
  password: string
) => {
  try {
    const res = await axios.post(`${API_URL}users/register/`, {
      first_name,
      last_name,
      adress,
      contact,
      email,
      sexe,
      domaine,
      profession,
      organisation,
      password,
    });
    return res.data;
  } catch (error) {
    console.error("signup failed", error);
    throw error;
  }
};

export const login = async (email: string, password: string) => {
  try {
    const res = await axios.post(
      `${API_URL}users/login/`,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    );

    const dataCookie = JSON.stringify(res.data);

    document.cookie = `userCustomer=${dataCookie}; path=/`;

    return res.data;
  } catch (error) {
    console.error("Login failed", error);
    throw error;
  }
};
