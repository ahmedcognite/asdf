import { Api } from '@asdf/sdk';
import { PropsWithChildren, createContext } from 'react';

type ApiContextType = {
  api: Api | null;
};

const api = new Api();
export const ApiContext = createContext<ApiContextType>({
  api,
});

export const ApiProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <ApiContext.Provider value={{ api }}>{children}</ApiContext.Provider>;
};
