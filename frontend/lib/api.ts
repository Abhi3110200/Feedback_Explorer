import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const createFeedback = async (data: {
  title: string;
  description: string;
  category: string;
}) => {
  const res = await axios.post(`${API_URL}/feedback`, data);
  return res.data;
};

export const getFeedback = async (params: {
  sort?: string;
  category?: string;
  q?: string;
}) => {
  const res = await axios.get(`${API_URL}/feedback`, { params });
  return res.data;
};
