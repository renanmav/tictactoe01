import { useEffect } from 'react';
import { Alert } from 'react-native';

import { Winner } from './useWinner';

export function useReplay(winner: Winner, restart: () => void) {
  useEffect(() => {
    if (winner !== '?') {
      Alert.alert(
        winner === 'X' ? 'Parabéns' : 'Que pena',
        winner === 'C' ? 'Deu velha' : `Jogador ${winner} ganhou`,
        [
          {
            text: 'Jogar novamente',
            onPress: restart,
          },
        ]
      );
    }
  }, [winner, restart]);
}
