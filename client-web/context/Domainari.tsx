'use client';

import { createContext, useContext } from 'react';
import * as DominariSdk from 'dominari-sdk';
import dynamic from 'next/dynamic';

const DominariSdkContext = createContext<typeof DominariSdk | null>(null);

export const DominariSdkProvider = dynamic({
  loader: async () => {
    const DominariSDK = await import('dominari-sdk');
    return ({ children }: { children: React.ReactNode }) => (
      <DominariSdkContext.Provider value={DominariSDK}>
        {children}
      </DominariSdkContext.Provider>
    );
  },
  ssr: false,
});

export const useDominariSdk = () => useContext(DominariSdkContext);
