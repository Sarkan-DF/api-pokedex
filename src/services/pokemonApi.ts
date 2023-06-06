import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_POKEMON_API
});

const doGet = async (url: string) => {
  try {
    const response = await api.get(url);
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, trace: error };
  }
};

export { doGet };
