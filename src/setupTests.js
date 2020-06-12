import '@testing-library/jest-dom/extend-expect';

import mockHostApi from './services/mockHostApi'

jest.doMock('./services/hostApi', () => {
  return mockHostApi
})
