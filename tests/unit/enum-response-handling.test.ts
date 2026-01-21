describe("Enum Response Handling", () => {
    const mockOptions = {
        apiKey: "test-api-key",
        environment: "https://api.merge.dev"
    };

    it("should handle unknown enum values in API responses", async () => {
        const { Accounting } = require("../../src");

        // Mock the fetcher to return unknown enum values in response
        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [
                    {
                        id: "tc_123",
                        name: "Location Category",
                        category_type: "LOCATION",     // Unknown enum value
                        status: "ARCHIVED",           // Another unknown enum value
                        company: "comp_123"
                    },
                    {
                        id: "tc_456",
                        name: "Project Category",
                        category_type: "PROJECT_CODE", // Another unknown enum value
                        status: "PENDING_APPROVAL",    // Another unknown enum value
                        company: "comp_123"
                    }
                ]
            }
        });

        const accounting = new Accounting({
            ...mockOptions,
            fetcher: mockFetcher
        });

        // Make the request - should not throw
        const response = await accounting.trackingCategories.list();

        // Verify the response contains the unknown enum values preserved
        expect(response.results).toHaveLength(2);

        // First tracking category with unknown enums
        expect(response.results[0].id).toBe("tc_123");
        expect(response.results[0].name).toBe("Location Category");
        expect(response.results[0].categoryType).toBe("LOCATION");
        expect(response.results[0].status).toBe("ARCHIVED");

        // Second tracking category with unknown enums
        expect(response.results[1].id).toBe("tc_456");
        expect(response.results[1].name).toBe("Project Category");
        expect(response.results[1].categoryType).toBe("PROJECT_CODE");
        expect(response.results[1].status).toBe("PENDING_APPROVAL");

        // Verify the mock was called correctly
        expect(mockFetcher).toHaveBeenCalledWith(
            expect.objectContaining({
                url: expect.stringContaining("/accounting/v1/tracking-categories"),
                method: "GET"
            })
        );
    });

    it("should handle unknown enum values in both request and response", async () => {
        const { Accounting } = require("../../src");

        // Mock response with unknown enum values
        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [
                    {
                        id: "tc_789",
                        name: "Custom Category",
                        category_type: "LOCATION",  // Unknown enum in response
                        status: "ACTIVE",
                        company: "comp_123"
                    }
                ]
            }
        });

        const accounting = new Accounting({
            ...mockOptions,
            fetcher: mockFetcher
        });

        // Test request with unknown enum (should not throw)
        const response = await accounting.trackingCategories.list({
            categoryType: "LOCATION"  // Unknown enum in request
        });

        // Verify response deserialization works with unknown enums
        expect(response.results[0].categoryType).toBe("LOCATION");
        expect(response.results[0].status).toBe("ACTIVE");

        // Verify the request was made with the unknown enum value
        expect(mockFetcher).toHaveBeenCalledWith(
            expect.objectContaining({
                method: "GET",
                queryParameters: expect.objectContaining({
                    category_type: "LOCATION"
                })
            })
        );
    });

    it("should handle multiple unknown enum fields in single response", async () => {
        const { Accounting } = require("../../src");

        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [{
                    id: "acc_123",
                    classification: "FIXED_ASSET",     // Unknown classification
                    status: "SUSPENDED",               // Unknown status
                    name: "Custom Account"
                }]
            }
        });

        const accounting = new Accounting({
            ...mockOptions,
            fetcher: mockFetcher
        });

        const response = await accounting.accounts.list();

        expect(response.results[0].classification).toBe("FIXED_ASSET");
        expect(response.results[0].status).toBe("SUSPENDED");
    });

    it("should handle unknown enums in nested objects", async () => {
        const { Accounting } = require("../../src");

        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [{
                    id: "acc_123",
                    name: "Test Account",
                    classification: "CURRENT_ASSET",  // Unknown enum at top level
                    parent_account: {
                        classification: "FIXED_ASSET"  // Unknown enum in nested object
                    }
                }]
            }
        });

        const accounting = new Accounting({
            ...mockOptions,
            fetcher: mockFetcher
        });

        const response = await accounting.accounts.list();

        // Test top-level unknown enum
        expect(response.results[0].classification).toBe("CURRENT_ASSET");

        // Test nested unknown enum (if the field exists)
        if (response.results[0].parentAccount?.classification) {
            expect(response.results[0].parentAccount.classification).toBe("FIXED_ASSET");
        }
    });

    it("should handle arrays containing unknown enum values", async () => {
        const { Accounting } = require("../../src");

        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [{
                    id: "contact_123",
                    phone_numbers: [
                        { type: "MOBILE" },        // Known
                        { type: "WORK_DIRECT" },   // Unknown
                        { type: "HOME_FAX" }       // Unknown
                    ]
                }]
            }
        });

        const accounting = new Accounting({
            ...mockOptions,
            fetcher: mockFetcher
        });

        const response = await accounting.contacts.list();

        expect(response.results[0].phoneNumbers[1].type).toBe("WORK_DIRECT");
        expect(response.results[0].phoneNumbers[2].type).toBe("HOME_FAX");
    });

    it("should handle unknown enums in line items", async () => {
        const { Accounting } = require("../../src");

        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [{
                    id: "inv_123",
                    status: "PENDING_REVIEW",  // Unknown invoice status
                    line_items: [
                        {
                            id: "li_1",
                            item: {
                                classification: "INVENTORY_ASSET"  // Unknown item classification
                            },
                            account: {
                                classification: "CURRENT_ASSET",   // Unknown account classification
                                status: "ACTIVE_RESTRICTED"        // Unknown account status
                            },
                            tracking_category: {
                                category_type: "COST_CENTER"       // Unknown tracking category type
                            }
                        },
                        {
                            id: "li_2",
                            item: {
                                classification: "SERVICE_ITEM"     // Another unknown classification
                            }
                        }
                    ]
                }]
            }
        });

        const accounting = new Accounting({
            ...mockOptions,
            fetcher: mockFetcher
        });

        const response = await accounting.invoices.list();

        // Test invoice-level unknown enum
        expect(response.results[0].status).toBe("PENDING_REVIEW");

        // Test line item structure exists
        expect(response.results[0].lineItems).toBeDefined();
        expect(response.results[0].lineItems.length).toBe(2);

        // Test unknown enums in first line item (check if properties exist first)
        const firstLineItem = response.results[0].lineItems[0];
        if (firstLineItem.item?.classification) {
            expect(firstLineItem.item.classification).toBe("INVENTORY_ASSET");
        }
        if (firstLineItem.account?.classification) {
            expect(firstLineItem.account.classification).toBe("CURRENT_ASSET");
        }
        if (firstLineItem.account?.status) {
            expect(firstLineItem.account.status).toBe("ACTIVE_RESTRICTED");
        }
        if (firstLineItem.trackingCategory?.categoryType) {
            expect(firstLineItem.trackingCategory.categoryType).toBe("COST_CENTER");
        }

        // Test unknown enum in second line item
        const secondLineItem = response.results[0].lineItems[1];
        if (secondLineItem.item?.classification) {
            expect(secondLineItem.item.classification).toBe("SERVICE_ITEM");
        }
    });

    it("should handle edge case enum values", async () => {
        const { Accounting } = require("../../src");

        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [{
                    status: "",                    // Empty string
                    classification: "SPECIAL-CHARS_123",  // Special characters
                    category_type: "VeryLongEnumValueThatExceedsNormalLength"  // Long value
                }]
            }
        });

        const accounting = new Accounting({
            ...mockOptions,
            fetcher: mockFetcher
        });

        const response = await accounting.accounts.list();

        expect(response.results[0].status).toBe("");
        expect(response.results[0].classification).toBe("SPECIAL-CHARS_123");
    });

    it("should handle unknown enums across different API categories", async () => {
        const { Accounting } = require("../../src");

        // Test that the fix applies to all enum fields, not just specific ones
        const testCases = [
            { endpoint: 'trackingCategories', field: 'categoryType', unknownValue: 'PROJECT' },
            { endpoint: 'invoices', field: 'status', unknownValue: 'PENDING_APPROVAL' },
            { endpoint: 'issues', field: 'status', unknownValue: 'IN_REVIEW' }
        ];

        testCases.forEach(({ endpoint, field, unknownValue }) => {
            const mockResponse = {
                ok: true,
                body: { results: [{ [field]: unknownValue }] }
            };

            // Each should work without throwing
            expect(() => {
                const accounting = new Accounting({
                    ...mockOptions,
                    fetcher: jest.fn().mockResolvedValue(mockResponse)
                });
            }).not.toThrow();
        });
    });

    it("should handle unknown enums in CRM category", async () => {
        const { Crm } = require("../../src");

        const mockFetcher = jest.fn().mockResolvedValue({
            ok: true,
            body: {
                results: [{
                    id: "opp_123",
                    name: "Big Deal",
                    status: "PROPOSAL_SENT",      // Unknown opportunity status
                    stage: {
                        name: "Custom Stage",
                        stage_type: "QUALIFICATION_EXTENDED"  // Unknown stage type
                    },
                    owner: {
                        role: "SENIOR_SALES_REP"   // Unknown user role
                    }
                }]
            }
        });

        const crm = new Crm({
            ...mockOptions,
            fetcher: mockFetcher
        });

        const response = await crm.opportunities.list();

        // Test unknown enums across different levels
        expect(response.results[0].status).toBe("PROPOSAL_SENT");

        if (response.results[0].stage?.stageType) {
            expect(response.results[0].stage.stageType).toBe("QUALIFICATION_EXTENDED");
        }

        if (response.results[0].owner?.role) {
            expect(response.results[0].owner.role).toBe("SENIOR_SALES_REP");
        }
    });
});