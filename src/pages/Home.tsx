import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchTokens } from '../services/api';
import { TokenData } from '../types/tokens';
import { useTokenStore } from '../store/tokenStore';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from '@tanstack/react-table';
import CryptoIcon from '../components/CryptoIcon';

const columnHelper = createColumnHelper<TokenData>();

const HomePage = () => {
  // sort by price in descending order
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'last_price', desc: true },
  ]);
  
  // get tokens and loading state
  const { tokens, setTokens, setLoading, isLoading } = useTokenStore();

  // get tokens from Api
  const { data, isLoading: queryLoading } = useQuery({
    queryKey: ['tokens'],
    queryFn: fetchTokens,
  });

  // update tokens in the store
  useEffect(() => {
    setLoading(queryLoading);
    
    if (data) {
      // convert object to array with address as a property
      const tokensArray = Object.entries(data).map(([address, token]) => ({
        ...token,
        address,
      }));
      setTokens(tokensArray);
    }
  }, [data, queryLoading, setLoading, setTokens]);

  // table columns
  const columns = [
    // icon
    columnHelper.accessor('symbol', {
      header: 'Ticker Symbol',
      cell: (info) => {
        const symbol = info.getValue();
        return (
          <div className="flex items-center gap-2">
            <CryptoIcon symbol={symbol} className="w-6 h-6 rounded-full" />
            <span className="font-medium">{symbol}</span>
          </div>
        );
      },
    }),
    columnHelper.accessor('name', {
      header: 'Name',
      cell: (info) => info.getValue(),
    }),
    // formatting
    columnHelper.accessor('last_price', {
      header: 'Price in USD',
      cell: (info) => {
        const price = info.getValue();
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: price < 0.01 ? 6 : 2,
          maximumFractionDigits: price < 0.01 ? 6 : 2,
        }).format(price);
      },
    }),
  ];

  // table
  const table = useReactTable({
    data: tokens,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    // <div className="w-full">
    <div className="w-full flex flex-col items-center">
      {isLoading ? (
        <div className="flex justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="rounded-md border overflow-x-auto">
          <table className="w-full divide-y divide-border">
            <thead className="bg-muted/30">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  <th className="w-12 px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider">#</th>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-3 text-left text-xs font-medium text-foreground uppercase tracking-wider cursor-pointer"
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div className="flex items-center">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        <span className="ml-1">
                          {{
                            asc: '🔼',
                            desc: '🔽',
                          }[header.column.getIsSorted() as string] ?? null}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody className="bg-background divide-y divide-border">
              {table.getRowModel().rows.map((row, i) => (
                <tr 
                  key={row.id}
                  className="hover:bg-muted/50 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-foreground">{i + 1}</td>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-3 whitespace-nowrap text-sm text-foreground">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default HomePage;