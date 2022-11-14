const config = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}', '!**/*.d.ts'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '<rootDir>/src/reportWebVitals.ts',
    '<rootDir>/src/setupTests.ts',
    'index.ts'
  ],
  coverageReporters: ['clover', 'json', 'lcov', 'text', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  modulePathIgnorePatterns: ['playwrite/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(j|t)sx?$': 'babel-jest'
  },
  transformIgnorePatterns: ['node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)']
};

export default config;
