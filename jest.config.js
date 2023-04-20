module.exports = {
	collectCoverage: true,
	collectCoverageFrom: ["src/**/*.{js,jsx}"],
	coverageDirectory: "coverage",
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	moduleNameMapper: {
    '\\.(scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
};
