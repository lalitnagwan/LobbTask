import axios from 'axios';

const TOKEN_URL = 'https://swsut62sse.execute-api.ap-south-1.amazonaws.com/prod/generateToken';
const CONTENT_URL = 'https://tzab40im77.execute-api.ap-south-1.amazonaws.com/prod/getContent';

export const getToken = async (email) => {
  try {
    const res = await axios.post(TOKEN_URL, { email });
    if (res.data.token) return res.data.token;
    throw new Error('Token not received');
  } catch (err) {
    throw err;
  }
};

export const getContent = async (token) => {
  try {
    const res = await axios.get(CONTENT_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    if (res.data.content) return res.data.content;
    throw new Error('Content not received');
  } catch (err) {
    throw err;
  }
};