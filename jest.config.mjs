/** @type {import('jest').Config} */
export default {
    preset: "ts-jest",
    testEnvironment: "node",
    projects: [
        {
            displayName: "unit",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests"],
            testPathIgnorePatterns: ["/tests/wire/", "/tests/integration/"],
            setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
        },
        {
            displayName: "integration",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests/integration"],
            setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
            testTimeout: 30000,
        },
        {
            displayName: "wire",
            preset: "ts-jest",
            testEnvironment: "node",
            moduleNameMapper: {
                "^(\.{1,2}/.*)\.js$": "$1",
            },
            roots: ["<rootDir>/tests/wire"],
            setupFilesAfterEnv: ["<rootDir>/tests/setup.ts", "<rootDir>/tests/mock-server/setup.ts"],
        },
    ],
    workerThreads: false,
    passWithNoTests: true,
};
