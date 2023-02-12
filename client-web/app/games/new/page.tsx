import { NewGameForm } from './NewGameForm';
import { Test } from './test';

/**
 * Page to initialize a game
 */
export default function Page() {
  return (
    <Test>
      <div className="m-4 mx-6">
        <p className="text-xl">Create New Game</p>
        <NewGameForm />
      </div>
    </Test>
  );
}
