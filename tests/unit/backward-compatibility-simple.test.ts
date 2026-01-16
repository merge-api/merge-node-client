/**
 * Simple test: validates that old class names can be imported and used.
 * This will FAIL without the exports in src/index.ts and PASS with them.
 */

describe("Backward Compatibility - Old Imports", () => {
    const mockOptions = { apiKey: "test-key" };

    it("should import and instantiate old class names", () => {
        // This will fail if exports don't exist in src/index.ts
        const { Ats, Accounting, Crm, Filestorage, Hris, Ticketing } = require("../../src");

        // Should be able to create instances with old names
        expect(() => new Ats(mockOptions)).not.toThrow();
        expect(() => new Accounting(mockOptions)).not.toThrow();
        expect(() => new Crm(mockOptions)).not.toThrow();
        expect(() => new Filestorage(mockOptions)).not.toThrow();
        expect(() => new Hris(mockOptions)).not.toThrow();
        expect(() => new Ticketing(mockOptions)).not.toThrow();
    });
});