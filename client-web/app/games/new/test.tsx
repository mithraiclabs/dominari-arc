'use client';

import { useKeypair } from '../../../context/KeypairContext';

export const Test = ({ children }: { children: React.ReactNode }) => {
  const kp = useKeypair();

  return <>{children}</>;
};
