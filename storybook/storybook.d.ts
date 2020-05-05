declare module '@storybook/react-native' {
  import type { ReactElement } from 'react';
  import type { ComponentProvider, AsyncStorageStatic } from 'react-native';

  declare class Story {
    public add(storyName: string, ReactElement): Story;
    public addDecorator(decorator: (getStory: () => ReactElement) => ReactElement): Story;
  }

  function storiesOf(componentName: string, module: NodeModule): Story;

  function configure(getStories: () => void, module: NodeModule);

  interface GetStorybookUIOptions {
    asyncStorage: AsyncStorageStatic | null;
  }

  function getStorybookUI(options: GetStorybookUIOptions): ComponentProvider;

  export { storiesOf, configure, getStorybookUI };
}
