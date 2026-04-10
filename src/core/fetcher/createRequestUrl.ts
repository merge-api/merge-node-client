import { toQueryString } from "../url/qs";

export function createRequestUrl(baseUrl: string, queryParameters?: Record<string, unknown>): string {
    // Flatten any array values to comma-separated strings.
    // Merge's REST API expects multi-value params (e.g. expand) as CSV,
    // not as repeated query params.
    const flattenedParams = queryParameters != null ? flattenArrayQueryParams(queryParameters) : undefined;
    const queryString = toQueryString(flattenedParams, { arrayFormat: "repeat" });
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

function flattenArrayQueryParams(params: Record<string, unknown>): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(params)) {
        if (
            Array.isArray(value) &&
            value.length > 0 &&
            value.every((item) => typeof item !== "object" || item === null)
        ) {
            result[key] = value.join(",");
        } else {
            result[key] = value;
        }
    }
    return result;
}
