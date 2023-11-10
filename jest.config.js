const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.tsx'
  ],
};

export default config;