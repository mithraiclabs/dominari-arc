'use client';

import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { TransactionMessage, VersionedTransaction } from '@solana/web3.js';
import { useDominariSdk } from '../../../context/Domainari';
import { DOMINARI_PROGRAM_ID } from '../../../lib/constants';
import { ixWasmToJs, randomU64 } from '../../../lib/utils';

export const NewGameForm = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const dominariSdk = useDominariSdk();

  // TODO use form values
  const createGame = async () => {
    if (!dominariSdk || !wallet?.publicKey || !wallet.signTransaction) {
      // TODO add error handling
      return;
    }
    const dominari = new dominariSdk.Dominari(DOMINARI_PROGRAM_ID.toBase58());
    const instanceId = randomU64();
    const mapId = randomU64();
    const createGameIx = ixWasmToJs(
      dominari.create_game_instance(wallet.publicKey.toString(), instanceId, {
        max_players: 2,
        starting_cards: [],
      }),
    );
    const mapmeta = {
      maxX: 8,
      maxY: 8,
    };
    const initMapIx = ixWasmToJs(
      dominari.init_map(
        wallet.publicKey.toString(),
        instanceId,
        mapId,
        mapmeta.maxX,
        mapmeta.maxY,
      ),
    );
    const tx = new VersionedTransaction(
      new TransactionMessage({
        payerKey: wallet.publicKey,
        recentBlockhash: (await connection.getLatestBlockhash()).blockhash,
        instructions: [createGameIx, initMapIx],
      }).compileToLegacyMessage(),
    );
    const signedTx = await wallet.signTransaction(tx);
    const txId = await connection.sendRawTransaction(signedTx.serialize());
    // TODO add success toast with explorer link
    console.log('tx success ', txId);
  };

  return (
    <form className="mb-4 grid grid-cols-12 gap-4 rounded bg-white px-8 pt-6 pb-8">
      <div className="col-span-6">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Max Number of Players
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="2"
        />
      </div>
      <div className="col-span-6">
        <label className="mb-2 block text-sm font-bold text-gray-700">
          Cost per Tile
        </label>
        <input
          className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
          type="number"
          placeholder="1000"
        />
      </div>
      <div className="col-span-12 flex items-center justify-end">
        <button
          className="focus:shadow-outline rounded bg-indigo-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
          onClick={createGame}
          type="button"
        >
          Create
        </button>
      </div>
    </form>
  );
};
