import { useState } from 'react';
import defaultIcon from '../assets/react.svg';

interface CryptoIconProps {
  symbol: string;
  className?: string;
}
const CryptoIcon = ({ symbol, className = "w-6 h-6" }: CryptoIconProps) => {
    const [useFallback, setUseFallback] = useState(false);
    const iconSrc = useFallback ? defaultIcon : `/icons/${symbol}.svg`;
  
    return (
      <img
        src={iconSrc}
        alt={`${symbol} icon`}
        className={className}
        onError={() => setUseFallback(true)}
      />
    );
};
export default CryptoIcon;