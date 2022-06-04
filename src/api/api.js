import axios from "./axios/index";

export const fetchAllDevList = async () => {
  try {
    const url =
      "/service-categories/sellers-services/computer-software-development";
    const res = await axios.get(url);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const getResources = async () => {
  try {
    const url = "/resources";
    const res = await axios.get(url);
    return res;
  } catch (error) {
    throw error;
  }
};
