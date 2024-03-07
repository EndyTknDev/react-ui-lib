module.exports = {
  preset: 'ts-jest',
  moduleNameMapper: {

      // if your using tsconfig.paths thers is no harm in telling jest
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@/(.*)$': '<rootDir>/src/$1',
      
      // mocking assests and styling
    '^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/utils/mocks/fileMock.ts',
    '^.+\\.(css|less|scss|sass)$': '<rootDir>/utils/mocks/styleMock.ts',
    /* mock models and services folder */
    '(assets|models|services)': '<rootDir>/utils/mocks/fileMock.ts',
  },
   // to obtain access to the matchers.
  setupFilesAfterEnv: ['./utils/setupTests.ts'],
      
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  modulePaths: ['<rootDir>'],
  testEnvironment: 'jsdom',
};