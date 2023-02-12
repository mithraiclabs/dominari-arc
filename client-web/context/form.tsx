import { createContext, useReducer } from 'react';

// TODO add better types

const FormContext = createContext<[Record<string, any>, React.Dispatch<any>]>([
  {},
  () => {},
]);

const formReducer = (
  state: Record<string, any>,
  action: Record<string, any>,
) => ({
  ...state,
  ...action,
});

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const ret = useReducer(formReducer, {});
  return <FormContext.Provider value={ret}>{children}</FormContext.Provider>;
};
