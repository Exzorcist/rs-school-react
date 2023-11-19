const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    'jest-environment-jsdom': {
      localStorage: true,
    },
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx', 
    '!<rootDir>/src/main.tsx', 
    '!<rootDir>/src/App.tsx',
    '!<rootDir>/src/redux/**/*.tsx',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};

export default config;