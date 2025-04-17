import { createConfig, http } from 'wagmi';
import { energi } from 'wagmi/chains';
import { injected } from 'wagmi/connectors';

//config
const energiNetwork = {
  id: 39797,
  name: 'Energi Mainnet',
  network: 'energi',
  nativeCurrency: {
    decimals: 18,
    name: 'NRG',
    symbol: 'NRG',
  },
  rpcUrls: {
    public: { http: ['https://nodeapi.energi.network'] },
    default: { http: ['https://nodeapi.energi.network'] },
  },
  blockExplorers: {
    etherscan: { name: 'EnergiScan', url: 'https://explorer.energi.network/' },
    default: { name: 'EnergiScan', url: 'https://explorer.energi.network/' },
  },
};

// Wagmi config
export const config = createConfig({
  chains: [energiNetwork],
  connectors: [
    injected(),
  ],
  transports: {
    [energiNetwork.id]: http(energiNetwork.rpcUrls.default.http[0]),
  },
});