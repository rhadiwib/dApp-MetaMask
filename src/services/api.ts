import axios from 'axios';
import { TokensResponse } from '../types/tokens';

const api = axios.create({
  baseURL: 'https://api.energiswap.exchange',
});

export const fetchTokens = async (): Promise<TokensResponse> => {
  const response = await api.get<TokensResponse>('/v1/assets');
  return response.data;
};

export default api;