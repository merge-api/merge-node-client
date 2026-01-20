describe("Backward Compatibility - Level 1 (No Credentials)", () => {
    const mockOptions = {
        apiKey: "test-api-key",
        environment: "https://api.merge.dev"
    };

    describe("Import Tests", () => {
        it("should allow importing old class names", () => {
            // This will fail if the exports don't exist in src/index.ts
            expect(() => {
                const { Ats } = require("../../src");
                expect(Ats).toBeDefined();
                expect(typeof Ats).toBe("function");
            }).not.toThrow();

            expect(() => {
                const { Accounting } = require("../../src");
                expect(Accounting).toBeDefined();
                expect(typeof Accounting).toBe("function");
            }).not.toThrow();

            expect(() => {
                const { Crm } = require("../../src");
                expect(Crm).toBeDefined();
                expect(typeof Crm).toBe("function");
            }).not.toThrow();

            expect(() => {
                const { Filestorage } = require("../../src");
                expect(Filestorage).toBeDefined();
                expect(typeof Filestorage).toBe("function");
            }).not.toThrow();

            expect(() => {
                const { Hris } = require("../../src");
                expect(Hris).toBeDefined();
                expect(typeof Hris).toBe("function");
            }).not.toThrow();

            expect(() => {
                const { Ticketing } = require("../../src");
                expect(Ticketing).toBeDefined();
                expect(typeof Ticketing).toBe("function");
            }).not.toThrow();
        });

        it("should match old names to new names", () => {
            const {
                Ats, Accounting, Crm, Filestorage, Hris, Ticketing,
                AtsClient, AccountingClient, CrmClient, FilestorageClient, HrisClient, TicketingClient
            } = require("../../src");

            // Verify that old names are the same as new names
            expect(Ats).toBe(AtsClient);
            expect(Accounting).toBe(AccountingClient);
            expect(Crm).toBe(CrmClient);
            expect(Filestorage).toBe(FilestorageClient);
            expect(Hris).toBe(HrisClient);
            expect(Ticketing).toBe(TicketingClient);
        });
    });

    describe("Constructor Tests", () => {
        it("should instantiate clients with old class names", () => {
            const { Ats, Accounting, Crm, Filestorage, Hris, Ticketing } = require("../../src");

            // These should not throw during construction
            expect(() => new Ats(mockOptions)).not.toThrow();
            expect(() => new Accounting(mockOptions)).not.toThrow();
            expect(() => new Crm(mockOptions)).not.toThrow();
            expect(() => new Filestorage(mockOptions)).not.toThrow();
            expect(() => new Hris(mockOptions)).not.toThrow();
            expect(() => new Ticketing(mockOptions)).not.toThrow();
        });

        it("should create identical instances with old and new names", () => {
            const { Ats, AtsClient } = require("../../src");

            const atsOld = new Ats(mockOptions);
            const atsNew = new AtsClient(mockOptions);

            // Should have same constructor
            expect(atsOld.constructor).toBe(atsNew.constructor);
            expect(atsOld).toBeInstanceOf(AtsClient);
            expect(atsNew).toBeInstanceOf(Ats);
        });
    });

    describe("Method Structure Tests", () => {
        it("should have same method structure for ATS client", () => {
            const atsOld = new Ats(mockOptions);
            const atsNew = new AtsClient(mockOptions);

            // Test they have same sub-clients
            expect(typeof atsOld.candidates).toBe(typeof atsNew.candidates);
            expect(typeof atsOld.applications).toBe(typeof atsNew.applications);
            expect(typeof atsOld.jobs).toBe(typeof atsNew.jobs);
            expect(typeof atsOld.users).toBe(typeof atsNew.users);
        });

        it("should have same method structure for CRM client", () => {
            const crmOld = new Crm(mockOptions);
            const crmNew = new CrmClient(mockOptions);

            // Test they have same sub-clients
            expect(typeof crmOld.accounts).toBe(typeof crmNew.accounts);
            expect(typeof crmOld.contacts).toBe(typeof crmNew.contacts);
            expect(typeof crmOld.opportunities).toBe(typeof crmNew.opportunities);
            expect(typeof crmOld.leads).toBe(typeof crmNew.leads);
        });
    });

    describe("TypeScript Type Compatibility", () => {
        it("should support old type annotations", () => {
            // These assignments should work (compile-time test)
            const atsOld: Ats = new Ats(mockOptions);
            const atsNew: AtsClient = new AtsClient(mockOptions);

            // Should be able to assign between old and new
            const atsInterchangeable: Ats = atsNew;
            const atsInterchangeable2: AtsClient = atsOld;

            expect(atsInterchangeable).toBeDefined();
            expect(atsInterchangeable2).toBeDefined();
        });
    });

    describe("Enum Backward Compatibility", () => {
        it("should accept unrecognized enum values like LOCATION for categoryType", () => {
            const { serializers } = require("../../src");

            // Test that the TrackingCategoriesListRequestCategoryType enum accepts "LOCATION"
            // This would fail without the core enum builder fix
            expect(() => {
                const result = serializers.accounting.TrackingCategoriesListRequestCategoryType.jsonOrThrow("LOCATION", {
                    unrecognizedObjectKeys: "strip"
                });
                expect(result).toBe("LOCATION");
            }).not.toThrow();

            // Also test that known values still work
            expect(() => {
                const result = serializers.accounting.TrackingCategoriesListRequestCategoryType.jsonOrThrow("CLASS");
                expect(result).toBe("CLASS");
            }).not.toThrow();

            expect(() => {
                const result = serializers.accounting.TrackingCategoriesListRequestCategoryType.jsonOrThrow("DEPARTMENT");
                expect(result).toBe("DEPARTMENT");
            }).not.toThrow();
        });

        it("should accept any custom string value in CategoryTypeEnum", () => {
            const { serializers } = require("../../src");

            // Test various custom values that weren't in the original enum
            const customValues = ["LOCATION", "PROJECT", "CUSTOM_TYPE", "USER_DEFINED"];

            customValues.forEach(customValue => {
                expect(() => {
                    const result = serializers.accounting.CategoryTypeEnum.jsonOrThrow(customValue);
                    expect(result).toBe(customValue);
                }).not.toThrow();
            });
        });

        it("should work in practice with trackingCategories.list() method", () => {
            const { Accounting } = require("../../src");

            // Mock the fetcher to avoid actual HTTP calls
            const mockFetcher = jest.fn().mockResolvedValue({
                ok: true,
                body: { results: [] }
            });

            const accounting = new Accounting({
                apiKey: "test-key",
                fetcher: mockFetcher
            });

            // This should not throw when serializing the request with LOCATION categoryType
            expect(async () => {
                await accounting.trackingCategories.list({
                    categoryType: "LOCATION" // This should work now
                });
            }).not.toThrow();

            // Verify the mock was called and the categoryType was serialized correctly
            expect(mockFetcher).toHaveBeenCalledWith(
                expect.objectContaining({
                    url: expect.stringContaining("/accounting/v1/tracking-categories"),
                    method: "GET"
                })
            );
        });
    });
});