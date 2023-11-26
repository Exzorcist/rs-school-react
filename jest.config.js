const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx',
    '!<rootDir>/src/pages/_app.tsx',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};

export default config;