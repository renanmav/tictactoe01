import { useEffect } from 'react';

import { Winner } from './useWinner';

export function useReplay(winner: Winner, restart: () => void) {
  useEffect(() => {
    if (winner !== '?') {
      alert(winner === 'C' ? 'Deu velha' : `Jogador ${winner} ganhou`);
      restart();
    }
  }, [winner, restart]);
}
