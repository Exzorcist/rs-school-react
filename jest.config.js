const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.tsx',
  ],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};

export default config;