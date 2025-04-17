import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Button } from '../components/ui/Button';
import metamaskIcon from '../assets/metamask.svg';
import { formatUnits } from 'viem';

const WalletPage = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({
    address,
  });

  const handleConnect = () => {
    connect({ connector: injected() });
  };

  const handleDisconnect = () => {
    disconnect();
  };

  const formattedBalance = balance 
    ? formatUnits(balance.value, balance.decimals)
    : '0';

    const usdValue = balance
    ? parseFloat(formattedBalance) * 2.5
    : 0;

  const openExplorer = () => {
  if (address) {
    window.open(`https://explorer.energi.network/address/${address}`, '_blank');
  }
};

  return (
    <div className="w-full flex justify-center">
      {!isConnected ? (
        <div className="flex flex-col items-center justify-center p-8">
          <img src={metamaskIcon} alt="MetaMask" className="w-32 h-32 mb-8" />
          <h2 className="text-2xl font-bold mb-4">METAMASK</h2>
          <Button 
            onClick={handleConnect} 
            className="w-64 py-6 text-lg text-primary-foreground bg-primary hover:bg-primary/90 dark:text-primary-foreground"
          >  
            Connect wallet
          </Button>
        </div>
      ) : (
        <div className="bg-card rounded-lg p-6 shadow-md w-full max-w-md">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M12 2L4 6V12L12 16L20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="font-semibold">Energi Network</span>
            </div>
            <div className="text-green-500 flex items-center text-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Connected
            </div>
          </div>

          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center space-x-2">
              <img src={metamaskIcon} alt="MetaMask" className="w-5 h-5" />
              <span className="font-mono text-sm">
                {address ? `${address.slice(0, 6)}...${address.slice(-8)}` : ''}
              </span>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => address && navigator.clipboard.writeText(address)}
                className="p-1 text-muted-foreground hover:text-foreground"
                title="Copy address"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
              <button 
                onClick={openExplorer}
                className="p-1 text-muted-foreground hover:text-foreground"
                title="View on explorer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
            </div>
          </div>

          <div className="text-center mb-8">
            <div className="text-sm text-muted-foreground mb-2">Total Balance</div>
            <div className="flex justify-center items-center">
              <div className="w-8 h-8 mr-3 text-primary">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 12H16M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="text-4xl font-bold">
                {parseFloat(formattedBalance).toLocaleString(undefined, { maximumFractionDigits: 0 })}
              </div>
            </div>
            <div className="text-xl mt-2">
              ${usdValue.toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WalletPage;