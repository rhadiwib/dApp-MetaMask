import { create } from 'zustand';
import { TokenData } from '../types/tokens';

interface TokenState {
  tokens: TokenData[];
  isLoading: boolean;
  setTokens: (tokens: TokenData[]) => void;
  setLoading: (loading: boolean) => void;
}

export const useTokenStore = create<TokenState>((set) => ({
  tokens: [],
  isLoading: false,
  setTokens: (tokens) => set({ tokens }),
  setLoading: (loading) => set({ isLoading: loading }),
}));