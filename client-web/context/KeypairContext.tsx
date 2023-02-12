'use client';

import { Keypair } from '@solana/web3.js';
import { createContext, useContext, useEffect, useMemo } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import { encode, decode } from 'bs58';

const KeypairContext = createContext<Keypair | null>(null);

export const KeypairProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [_kp] = useLocalStorage<string>(
    'keypair',
    encode(new Keypair().secretKey),
  );
  const val = useMemo(() => {
    return _kp ? Keypair.fromSecretKey(decode(_kp)) : null;
  }, [_kp]);

  return (
    <KeypairContext.Provider value={val}>{children}</KeypairContext.Provider>
  );
};

export const useKeypair = () => useContext(KeypairContext);
