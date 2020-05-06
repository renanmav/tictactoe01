import React from 'react';
import { Alert, View } from 'react-native';
import { t } from 'react-native-tailwindcss';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Button from '../../src/components/Button';
import TicTacToe from '../../src/components/TicTacToe';

import { Space, CenterView } from './helpers';
import Welcome from './Welcome';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />);

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Button', () => (
    <React.Fragment>
      <Button text="Text" onPress={action('btn-click')} />
      <Space height={20} />
      <Button text="Text" onPress={action('btn-click')} colors={t.bgOrange600} />
      <Space height={20} />
      <Button text="Text" onPress={action('btn-click')} colors={[t.bgPurple500, t.bgPink200]} />
    </React.Fragment>
  ));

storiesOf('TicTacToe', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('TicTacToe', () => (
    <View style={{ margin: 20 }}>
      <TicTacToe
        board="X O     X"
        onPress={(i) => Alert.alert(`Clicou no ${(i + 1).toString()}° quadrado`)}
      />
    </View>
  ));
