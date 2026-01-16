export * as Merge from "./api";
export type { BaseClientOptions, BaseRequestOptions } from "./BaseClient";
export { MergeClient } from "./Client";
export { MergeEnvironment } from "./environments";
export { MergeError, MergeTimeoutError } from "./errors";
export * from "./exports";
export * as serialization from "./serialization";

// Backward compatibility exports for v2.2.0 class names
export { AtsClient as Ats } from "./api/resources/ats/client/Client";
export { AccountingClient as Accounting } from "./api/resources/accounting/client/Client";
export { CrmClient as Crm } from "./api/resources/crm/client/Client";
export { FilestorageClient as Filestorage } from "./api/resources/filestorage/client/Client";
export { HrisClient as Hris } from "./api/resources/hris/client/Client";
export { TicketingClient as Ticketing } from "./api/resources/ticketing/client/Client";
