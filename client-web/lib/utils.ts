import { PublicKey, TransactionInstruction } from '@solana/web3.js';
import { randomBytes } from 'crypto';

/**
 * Convert wasm generated instruction to JS structure.
 * @param ix
 * @returns TransactionInstruction
 */
export const ixWasmToJs = (ix: any): TransactionInstruction => {
  return new TransactionInstruction({
    programId: new PublicKey(ix.program_id as Uint8Array),
    keys: ix.accounts.map((account: any) => {
      (account.isSigner = account.is_signer),
        (account.isWritable = account.is_writable),
        (account.pubkey = new PublicKey(account.pubkey as Uint8Array));
      return account;
    }),
    data: ix.data as Buffer,
  });
};

export const randomU64 = (): bigint => {
  return BigInt(`0x${randomBytes(8).toString('hex')}`);
};
