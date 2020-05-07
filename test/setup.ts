import '@testing-library/jest-native/extend-expect';
import fetchMock from 'jest-fetch-mock';

global.fetch = fetchMock;
