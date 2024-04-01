import axios, { AxiosResponse } from "axios";

const fetcher = async (url: string): Promise<MassivDogovorovType> => {
  try {
    const response: AxiosResponse<MassivDogovorovType> = await axios.get(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
export default fetcher;
