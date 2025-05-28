module.exports = {
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.cjs'],
  transform: {
    '^.+\\.[jt]sx?$': ['@swc/jest'],
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@firebase|firebase)', // ⚠️ transforma Firebase
  ],
  moduleFileExtensions: ['js', 'jsx'],
};
