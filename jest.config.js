module.exports = {
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!/example/', 
    '!/dist/',
  ],
  setupFilesAfterEnv: ['<rootDir>/enzyme.js'],
  testPathIgnorePatterns: ['/node_modules/', '/.storybook/', '/dist/', '/example/', '/scripts/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.(css|sass|scss|svg)$',
  ],
  moduleNameMapper: {
    '^.+\\.(css|sass|scss|svg)$': 'identity-obj-proxy',
  },
  };