import React from 'react';
import { Alert, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import TicTacToeBoard from '../../src/components/TicTacToe/TicTacToeBoard';
import SymbolIndicator from '../../src/components/SymbolIndicator';

import { Space, CenterView } from './helpers';
import Welcome from './Welcome';

storiesOf('Welcome', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('to Storybook', () => <Welcome />)
  .add('Button', () => (
    <React.Fragment>
      <Button text="Text" onPress={action('btn-click')} />
      <Space height={20} />
      <Button text="Text" onPress={action('btn-click')} colors={t.bgOrange600} />
      <Space height={20} />
      <Button text="Text" onPress={action('btn-click')} colors={[t.bgPurple500, t.bgPink200]} />
    </React.Fragment>
  ))
  .add('TicTacToeBoard', () => (
    <View style={{ margin: 20 }}>
      <TicTacToeBoard
        board="X O     X"
        onPress={(i) => Alert.alert(`Clicou no ${(i + 1).toString()}° quadrado`)}
      />
    </View>
  ))
  .add('SymbolIndicator', () => (
    <View style={[{ margin: 20, padding: 20 }, t.bgBlue900, t.rounded]}>
      <SymbolIndicator />
    </View>
  ));
