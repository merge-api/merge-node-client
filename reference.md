# Reference
## Ats AccountDetails
<details><summary><code>client.ats.accountDetails.<a href="/src/api/resources/ats/resources/accountDetails/client/Client.ts">retrieve</a>() -> Merge.AccountDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details for a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.accountDetails.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountDetailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats AccountToken
<details><summary><code>client.ats.accountToken.<a href="/src/api/resources/ats/resources/accountToken/client/Client.ts">retrieve</a>(public_token) -> Merge.AccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the account token for the end user with the provided public token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.accountToken.retrieve("public_token");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**public_token:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.accountToken.<a href="/src/api/resources/ats/resources/accountToken/client/Client.ts">regenerateCreate</a>() -> Merge.RegenerateAccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange Linked Account account tokens.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.accountToken.regenerateCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Activities
<details><summary><code>client.ats.activities.<a href="/src/api/resources/ats/resources/activities/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Activity, Merge.PaginatedActivityList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Activity` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.activities.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "activity_type",
    remoteId: "remote_id",
    showEnumOrigins: "activity_type",
    userId: "user_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.activities.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "activity_type",
    remoteId: "remote_id",
    showEnumOrigins: "activity_type",
    userId: "user_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ActivitiesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActivitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.activities.<a href="/src/api/resources/ats/resources/activities/client/Client.ts">create</a>({ ...params }) -> Merge.ActivityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Activity` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.activities.create({
    isDebugMode: true,
    runAsync: true,
    model: {},
    remoteUserId: "remote_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ActivityEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActivitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.activities.<a href="/src/api/resources/ats/resources/activities/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Activity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Activity` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.activities.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "activity_type",
    showEnumOrigins: "activity_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.ActivitiesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ActivitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.activities.<a href="/src/api/resources/ats/resources/activities/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Activity` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.activities.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ActivitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Applications
<details><summary><code>client.ats.applications.<a href="/src/api/resources/ats/resources/applications/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Application, Merge.PaginatedApplicationList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Application` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.applications.list({
    candidateId: "candidate_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    creditedToId: "credited_to_id",
    currentStageId: "current_stage_id",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    jobId: "job_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    rejectReasonId: "reject_reason_id",
    remoteId: "remote_id",
    source: "source"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.applications.list({
    candidateId: "candidate_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    creditedToId: "credited_to_id",
    currentStageId: "current_stage_id",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    jobId: "job_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    rejectReasonId: "reject_reason_id",
    remoteId: "remote_id",
    source: "source"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ApplicationsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.applications.<a href="/src/api/resources/ats/resources/applications/client/Client.ts">create</a>({ ...params }) -> Merge.ApplicationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Application` object with the given values.
For certain integrations, but not all, our API detects duplicate candidates and will associate applications with existing records in the third-party. New candidates are created and automatically linked to the application.

See our [Help Center article](https://help.merge.dev/en/articles/10012366-updates-to-post-applications-oct-2024) for detailed support per integration.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.applications.create({
    isDebugMode: true,
    runAsync: true,
    model: {},
    remoteUserId: "remote_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ApplicationEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.applications.<a href="/src/api/resources/ats/resources/applications/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Application</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Application` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.applications.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.ApplicationsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.applications.<a href="/src/api/resources/ats/resources/applications/client/Client.ts">changeStageCreate</a>(id, { ...params }) -> Merge.ApplicationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates the `current_stage` field of an `Application` object
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.applications.changeStageCreate("id", {
    isDebugMode: true,
    runAsync: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.UpdateApplicationStageRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.applications.<a href="/src/api/resources/ats/resources/applications/client/Client.ts">metaPostRetrieve</a>({ ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Application` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.applications.metaPostRetrieve({
    applicationRemoteTemplateId: "application_remote_template_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ApplicationsMetaPostRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ApplicationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats AsyncPassthrough
<details><summary><code>client.ats.asyncPassthrough.<a href="/src/api/resources/ats/resources/asyncPassthrough/client/Client.ts">create</a>({ ...params }) -> Merge.AsyncPassthroughReciept</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.asyncPassthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.asyncPassthrough.<a href="/src/api/resources/ats/resources/asyncPassthrough/client/Client.ts">retrieve</a>(async_passthrough_receipt_id) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves data from earlier async-passthrough POST request
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.asyncPassthrough.retrieve("async_passthrough_receipt_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**async_passthrough_receipt_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Attachments
<details><summary><code>client.ats.attachments.<a href="/src/api/resources/ats/resources/attachments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Attachment, Merge.PaginatedAttachmentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Attachment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.attachments.list({
    candidateId: "candidate_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "attachment_type",
    remoteId: "remote_id",
    showEnumOrigins: "attachment_type"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.attachments.list({
    candidateId: "candidate_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "attachment_type",
    remoteId: "remote_id",
    showEnumOrigins: "attachment_type"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.AttachmentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.attachments.<a href="/src/api/resources/ats/resources/attachments/client/Client.ts">create</a>({ ...params }) -> Merge.AttachmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Attachment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.attachments.create({
    isDebugMode: true,
    runAsync: true,
    model: {},
    remoteUserId: "remote_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.AttachmentEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.attachments.<a href="/src/api/resources/ats/resources/attachments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Attachment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Attachment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.attachments.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "attachment_type",
    showEnumOrigins: "attachment_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.AttachmentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.attachments.<a href="/src/api/resources/ats/resources/attachments/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Attachment` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.attachments.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats AuditTrail
<details><summary><code>client.ats.auditTrail.<a href="/src/api/resources/ats/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AuditLogEvent, Merge.PaginatedAuditLogEventList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of audit trail events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.AuditTrailListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditTrailClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats AvailableActions
<details><summary><code>client.ats.availableActions.<a href="/src/api/resources/ats/resources/availableActions/client/Client.ts">retrieve</a>() -> Merge.AvailableActions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of models and actions available for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.availableActions.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AvailableActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Candidates
<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Candidate, Merge.PaginatedCandidateList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Candidate` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.candidates.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddresses: "email_addresses",
    firstName: "first_name",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    lastName: "last_name",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    tags: "tags"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.candidates.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddresses: "email_addresses",
    firstName: "first_name",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    lastName: "last_name",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    tags: "tags"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.CandidatesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">create</a>({ ...params }) -> Merge.CandidateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Candidate` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.candidates.create({
    isDebugMode: true,
    runAsync: true,
    model: {},
    remoteUserId: "remote_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.CandidateEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Candidate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Candidate` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.candidates.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.CandidatesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.CandidateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `Candidate` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.candidates.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {},
    remoteUserId: "remote_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.PatchedCandidateEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">ignoreCreate</a>(model_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.candidates.ignoreCreate("model_id", {
    reason: "GENERAL_CUSTOMER_REQUEST"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.IgnoreCommonModelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Candidate` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.candidates.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CandidatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Candidate` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.candidates.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CandidatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Scopes
<details><summary><code>client.ats.scopes.<a href="/src/api/resources/ats/resources/scopes/client/Client.ts">defaultScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.scopes.defaultScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.scopes.<a href="/src/api/resources/ats/resources/scopes/client/Client.ts">linkedAccountScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.scopes.linkedAccountScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.scopes.<a href="/src/api/resources/ats/resources/scopes/client/Client.ts">linkedAccountScopesCreate</a>({ ...params }) -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.scopes.linkedAccountScopesCreate({
    commonModels: [{
            modelName: "Employee",
            modelPermissions: {
                "READ": {
                    isEnabled: true
                },
                "WRITE": {
                    isEnabled: false
                }
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"]
            }
        }, {
            modelName: "Benefit",
            modelPermissions: {
                "WRITE": {
                    isEnabled: false
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.LinkedAccountCommonModelScopeDeserializerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats DeleteAccount
<details><summary><code>client.ats.deleteAccount.<a href="/src/api/resources/ats/resources/deleteAccount/client/Client.ts">delete</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.deleteAccount.delete();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DeleteAccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Departments
<details><summary><code>client.ats.departments.<a href="/src/api/resources/ats/resources/departments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Department, Merge.PaginatedDepartmentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Department` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.departments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.departments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.DepartmentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DepartmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.departments.<a href="/src/api/resources/ats/resources/departments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Department</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Department` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.departments.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.DepartmentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DepartmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Eeocs
<details><summary><code>client.ats.eeocs.<a href="/src/api/resources/ats/resources/eeocs/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Eeoc, Merge.PaginatedEeocList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `EEOC` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.eeocs.list({
    candidateId: "candidate_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "disability_status",
    remoteId: "remote_id",
    showEnumOrigins: "disability_status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.eeocs.list({
    candidateId: "candidate_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "disability_status",
    remoteId: "remote_id",
    showEnumOrigins: "disability_status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.EeocsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EeocsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.eeocs.<a href="/src/api/resources/ats/resources/eeocs/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Eeoc</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `EEOC` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.eeocs.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "disability_status",
    showEnumOrigins: "disability_status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.EeocsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EeocsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats FieldMapping
<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">fieldMappingsRetrieve</a>({ ...params }) -> Merge.FieldMappingApiInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.fieldMapping.fieldMappingsRetrieve({
    excludeRemoteFieldMetadata: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.FieldMappingsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">fieldMappingsCreate</a>({ ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.fieldMapping.fieldMappingsCreate({
    excludeRemoteFieldMetadata: true,
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.CreateFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(field_mapping_id) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.fieldMapping.fieldMappingsDestroy("field_mapping_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(field_mapping_id, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id", {
    remoteDataIterationCount: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.PatchedEditFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">remoteFieldsRetrieve</a>({ ...params }) -> Merge.RemoteFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.fieldMapping.remoteFieldsRetrieve({
    commonModels: "common_models",
    includeExampleValues: "include_example_values"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.RemoteFieldsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">targetFieldsRetrieve</a>() -> Merge.ExternalTargetFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.fieldMapping.targetFieldsRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats GenerateKey
<details><summary><code>client.ats.generateKey.<a href="/src/api/resources/ats/resources/generateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a remote key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.generateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.GenerateRemoteKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Interviews
<details><summary><code>client.ats.interviews.<a href="/src/api/resources/ats/resources/interviews/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedScheduledInterviewList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ScheduledInterview` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.interviews.list({
    applicationId: "application_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    jobId: "job_id",
    jobInterviewStageId: "job_interview_stage_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    organizerId: "organizer_id",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.InterviewsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InterviewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.interviews.<a href="/src/api/resources/ats/resources/interviews/client/Client.ts">create</a>({ ...params }) -> Merge.ScheduledInterviewResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `ScheduledInterview` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.interviews.create({
    isDebugMode: true,
    runAsync: true,
    model: {},
    remoteUserId: "remote_user_id"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ScheduledInterviewEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InterviewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.interviews.<a href="/src/api/resources/ats/resources/interviews/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.ScheduledInterview</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `ScheduledInterview` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.interviews.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.InterviewsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InterviewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.interviews.<a href="/src/api/resources/ats/resources/interviews/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `ScheduledInterview` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.interviews.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `InterviewsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Issues
<details><summary><code>client.ats.issues.<a href="/src/api/resources/ats/resources/issues/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Issue, Merge.PaginatedIssueList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all issues for Organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.IssuesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.issues.<a href="/src/api/resources/ats/resources/issues/client/Client.ts">retrieve</a>(id) -> Merge.Issue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.issues.retrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats JobInterviewStages
<details><summary><code>client.ats.jobInterviewStages.<a href="/src/api/resources/ats/resources/jobInterviewStages/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.JobInterviewStage, Merge.PaginatedJobInterviewStageList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `JobInterviewStage` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.jobInterviewStages.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    jobId: "job_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.jobInterviewStages.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    jobId: "job_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.JobInterviewStagesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobInterviewStagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.jobInterviewStages.<a href="/src/api/resources/ats/resources/jobInterviewStages/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.JobInterviewStage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `JobInterviewStage` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.jobInterviewStages.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.JobInterviewStagesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobInterviewStagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats JobPostings
<details><summary><code>client.ats.jobPostings.<a href="/src/api/resources/ats/resources/jobPostings/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.JobPosting, Merge.PaginatedJobPostingList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `JobPosting` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.jobPostings.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    status: "CLOSED"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.jobPostings.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    status: "CLOSED"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.JobPostingsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobPostingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.jobPostings.<a href="/src/api/resources/ats/resources/jobPostings/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.JobPosting</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `JobPosting` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.jobPostings.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.JobPostingsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobPostingsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Jobs
<details><summary><code>client.ats.jobs.<a href="/src/api/resources/ats/resources/jobs/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Job, Merge.PaginatedJobList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Job` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.jobs.list({
    code: "code",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    offices: "offices",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: "ARCHIVED"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.jobs.list({
    code: "code",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    offices: "offices",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: "ARCHIVED"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.JobsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.jobs.<a href="/src/api/resources/ats/resources/jobs/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Job</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Job` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.jobs.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.JobsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.jobs.<a href="/src/api/resources/ats/resources/jobs/client/Client.ts">screeningQuestionsList</a>(job_id, { ...params }) -> core.Page<Merge.ScreeningQuestion, Merge.PaginatedScreeningQuestionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ScreeningQuestion` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.jobs.screeningQuestionsList("job_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.jobs.screeningQuestionsList("job_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**job_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.JobsScreeningQuestionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JobsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats LinkToken
<details><summary><code>client.ats.linkToken.<a href="/src/api/resources/ats/resources/linkToken/client/Client.ts">create</a>({ ...params }) -> Merge.LinkToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link token to be used when linking a new end user. The link token expires after single use.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.linkToken.create({
    endUserEmailAddress: "example@gmail.com",
    endUserOrganizationName: "Test Organization",
    endUserOriginId: "12345",
    categories: ["hris", "ats"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.EndUserDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats LinkedAccounts
<details><summary><code>client.ats.linkedAccounts.<a href="/src/api/resources/ats/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountDetailsAndActions, Merge.PaginatedAccountDetailsAndActionsList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List linked accounts for your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.LinkedAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Offers
<details><summary><code>client.ats.offers.<a href="/src/api/resources/ats/resources/offers/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Offer, Merge.PaginatedOfferList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Offer` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.offers.list({
    applicationId: "application_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    creatorId: "creator_id",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: "APPROVAL-SENT"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.offers.list({
    applicationId: "application_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    creatorId: "creator_id",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: "APPROVAL-SENT"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.OffersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OffersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.offers.<a href="/src/api/resources/ats/resources/offers/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Offer</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Offer` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.offers.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.OffersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OffersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Offices
<details><summary><code>client.ats.offices.<a href="/src/api/resources/ats/resources/offices/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Office, Merge.PaginatedOfficeList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Office` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.offices.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.offices.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.OfficesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.offices.<a href="/src/api/resources/ats/resources/offices/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Office</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Office` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.offices.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.OfficesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OfficesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Passthrough
<details><summary><code>client.ats.passthrough.<a href="/src/api/resources/ats/resources/passthrough/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.passthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats RegenerateKey
<details><summary><code>client.ats.regenerateKey.<a href="/src/api/resources/ats/resources/regenerateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange remote keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.regenerateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.RemoteKeyForRegenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats RejectReasons
<details><summary><code>client.ats.rejectReasons.<a href="/src/api/resources/ats/resources/rejectReasons/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.RejectReason, Merge.PaginatedRejectReasonList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RejectReason` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.rejectReasons.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.rejectReasons.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.RejectReasonsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RejectReasonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.rejectReasons.<a href="/src/api/resources/ats/resources/rejectReasons/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.RejectReason</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `RejectReason` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.rejectReasons.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.RejectReasonsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RejectReasonsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Scorecards
<details><summary><code>client.ats.scorecards.<a href="/src/api/resources/ats/resources/scorecards/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Scorecard, Merge.PaginatedScorecardList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Scorecard` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.scorecards.list({
    applicationId: "application_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    interviewId: "interview_id",
    interviewerId: "interviewer_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "overall_recommendation",
    remoteId: "remote_id",
    showEnumOrigins: "overall_recommendation"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.scorecards.list({
    applicationId: "application_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    interviewId: "interview_id",
    interviewerId: "interviewer_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "overall_recommendation",
    remoteId: "remote_id",
    showEnumOrigins: "overall_recommendation"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ScorecardsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScorecardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.scorecards.<a href="/src/api/resources/ats/resources/scorecards/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Scorecard</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Scorecard` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.scorecards.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "overall_recommendation",
    showEnumOrigins: "overall_recommendation"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.ScorecardsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScorecardsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats SyncStatus
<details><summary><code>client.ats.syncStatus.<a href="/src/api/resources/ats/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.SyncStatus, Merge.PaginatedSyncStatusList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sync status for the current sync and the most recently finished sync. `last_sync_start` represents the most recent time any sync began. `last_sync_finished` represents the most recent time any sync completed. These timestamps may correspond to different sync instances which may result in a sync start time being later than a separate sync completed time. To ensure you are retrieving the latest available data reference the `last_sync_finished` timestamp where `last_sync_result` is `DONE`. Possible values for `status` and `last_sync_result` are `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.SyncStatusListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncStatusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats ForceResync
<details><summary><code>client.ats.forceResync.<a href="/src/api/resources/ats/resources/forceResync/client/Client.ts">syncStatusResyncCreate</a>() -> Merge.SyncStatus[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Force re-sync of all models. This endpoint is available for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. Force re-syncs can also be triggered manually in the Merge Dashboard and is available for all customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.forceResync.syncStatusResyncCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ForceResyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Tags
<details><summary><code>client.ats.tags.<a href="/src/api/resources/ats/resources/tags/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Tag, Merge.PaginatedTagList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Tag` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.tags.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.tags.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.TagsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats Users
<details><summary><code>client.ats.users.<a href="/src/api/resources/ats/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.RemoteUser, Merge.PaginatedRemoteUserList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteUser` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ats.users.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    email: "email",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "access_role",
    remoteId: "remote_id",
    showEnumOrigins: "access_role"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ats.users.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    email: "email",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "access_role",
    remoteId: "remote_id",
    showEnumOrigins: "access_role"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.UsersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.users.<a href="/src/api/resources/ats/resources/users/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.RemoteUser</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `RemoteUser` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.users.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "access_role",
    showEnumOrigins: "access_role"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.UsersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ats WebhookReceivers
<details><summary><code>client.ats.webhookReceivers.<a href="/src/api/resources/ats/resources/webhookReceivers/client/Client.ts">list</a>() -> Merge.WebhookReceiver[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `WebhookReceiver` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.webhookReceivers.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ats.webhookReceivers.<a href="/src/api/resources/ats/resources/webhookReceivers/client/Client.ts">create</a>({ ...params }) -> Merge.WebhookReceiver</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `WebhookReceiver` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.webhookReceivers.create({
    event: "event",
    isActive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.WebhookReceiverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting AccountDetails
<details><summary><code>client.accounting.accountDetails.<a href="/src/api/resources/accounting/resources/accountDetails/client/Client.ts">retrieve</a>() -> Merge.AccountDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details for a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accountDetails.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountDetailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting AccountToken
<details><summary><code>client.accounting.accountToken.<a href="/src/api/resources/accounting/resources/accountToken/client/Client.ts">retrieve</a>(public_token) -> Merge.AccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the account token for the end user with the provided public token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accountToken.retrieve("public_token");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**public_token:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.accountToken.<a href="/src/api/resources/accounting/resources/accountToken/client/Client.ts">regenerateCreate</a>() -> Merge.RegenerateAccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange Linked Account account tokens.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accountToken.regenerateCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting AccountingPeriods
<details><summary><code>client.accounting.accountingPeriods.<a href="/src/api/resources/accounting/resources/accountingPeriods/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountingPeriod, Merge.PaginatedAccountingPeriodList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `AccountingPeriod` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.accountingPeriods.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.accountingPeriods.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AccountingPeriodsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountingPeriodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.accountingPeriods.<a href="/src/api/resources/accounting/resources/accountingPeriods/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.AccountingPeriod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `AccountingPeriod` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accountingPeriods.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.AccountingPeriodsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountingPeriodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Accounts
<details><summary><code>client.accounting.accounts.<a href="/src/api/resources/accounting/resources/accounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Account, Merge.PaginatedAccountList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Account` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.accounts.list({
    accountType: "account_type",
    classification: "",
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "classification",
    remoteId: "remote_id",
    showEnumOrigins: "classification",
    status: ""
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.accounts.list({
    accountType: "account_type",
    classification: "",
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "classification",
    remoteId: "remote_id",
    showEnumOrigins: "classification",
    status: ""
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.accounts.<a href="/src/api/resources/accounting/resources/accounts/client/Client.ts">create</a>({ ...params }) -> Merge.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Account` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accounts.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AccountsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.accounts.<a href="/src/api/resources/accounting/resources/accounts/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Account` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accounts.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "classification",
    showEnumOrigins: "classification"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.AccountsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.accounts.<a href="/src/api/resources/accounting/resources/accounts/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.AccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Account` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accounts.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AccountsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.accounts.<a href="/src/api/resources/accounting/resources/accounts/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.Account, Merge.PaginatedAccountList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Account` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.accounts.batchObjectsList("batch_id", {
    accountType: "account_type",
    classification: "",
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "classification",
    remoteId: "remote_id",
    showEnumOrigins: "classification",
    status: ""
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.accounts.batchObjectsList("batch_id", {
    accountType: "account_type",
    classification: "",
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "classification",
    remoteId: "remote_id",
    showEnumOrigins: "classification",
    status: ""
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.AccountsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.accounts.<a href="/src/api/resources/accounting/resources/accounts/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Account` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accounts.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Addresses
<details><summary><code>client.accounting.addresses.<a href="/src/api/resources/accounting/resources/addresses/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Address</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Address` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.addresses.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "type",
    showEnumOrigins: "type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.AddressesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AddressesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting AsyncPassthrough
<details><summary><code>client.accounting.asyncPassthrough.<a href="/src/api/resources/accounting/resources/asyncPassthrough/client/Client.ts">create</a>({ ...params }) -> Merge.AsyncPassthroughReciept</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.asyncPassthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.asyncPassthrough.<a href="/src/api/resources/accounting/resources/asyncPassthrough/client/Client.ts">retrieve</a>(async_passthrough_receipt_id) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves data from earlier async-passthrough POST request
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.asyncPassthrough.retrieve("async_passthrough_receipt_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**async_passthrough_receipt_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting AsyncTasks
<details><summary><code>client.accounting.asyncTasks.<a href="/src/api/resources/accounting/resources/asyncTasks/client/Client.ts">retrieve</a>(id) -> Merge.AsyncPostTask</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `AsyncPostTask` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.asyncTasks.retrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncTasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Attachments
<details><summary><code>client.accounting.attachments.<a href="/src/api/resources/accounting/resources/attachments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountingAttachment, Merge.PaginatedAccountingAttachmentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `AccountingAttachment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.attachments.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.attachments.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AttachmentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.attachments.<a href="/src/api/resources/accounting/resources/attachments/client/Client.ts">create</a>({ ...params }) -> Merge.AccountingAttachmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `AccountingAttachment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.attachments.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AttachmentsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.attachments.<a href="/src/api/resources/accounting/resources/attachments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.AccountingAttachment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `AccountingAttachment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.attachments.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.AttachmentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.attachments.<a href="/src/api/resources/accounting/resources/attachments/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.AccountingAttachmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `AccountingAttachment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.attachments.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AttachmentsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.attachments.<a href="/src/api/resources/accounting/resources/attachments/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.AccountingAttachment, Merge.PaginatedAccountingAttachmentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `AccountingAttachment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.attachments.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.attachments.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.AttachmentsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.attachments.<a href="/src/api/resources/accounting/resources/attachments/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `AccountingAttachment` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.attachments.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting AuditTrail
<details><summary><code>client.accounting.auditTrail.<a href="/src/api/resources/accounting/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AuditLogEvent, Merge.PaginatedAuditLogEventList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of audit trail events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.AuditTrailListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditTrailClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting AvailableActions
<details><summary><code>client.accounting.availableActions.<a href="/src/api/resources/accounting/resources/availableActions/client/Client.ts">retrieve</a>() -> Merge.AvailableActions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of models and actions available for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.availableActions.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AvailableActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting BalanceSheets
<details><summary><code>client.accounting.balanceSheets.<a href="/src/api/resources/accounting/resources/balanceSheets/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.BalanceSheet, Merge.PaginatedBalanceSheetList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BalanceSheet` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.balanceSheets.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.balanceSheets.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.BalanceSheetsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BalanceSheetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.balanceSheets.<a href="/src/api/resources/accounting/resources/balanceSheets/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.BalanceSheet</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `BalanceSheet` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.balanceSheets.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.BalanceSheetsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BalanceSheetsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting BankFeedAccounts
<details><summary><code>client.accounting.bankFeedAccounts.<a href="/src/api/resources/accounting/resources/bankFeedAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.BankFeedAccount, Merge.PaginatedBankFeedAccountList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BankFeedAccount` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.bankFeedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.bankFeedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedAccounts.<a href="/src/api/resources/accounting/resources/bankFeedAccounts/client/Client.ts">create</a>({ ...params }) -> Merge.BankFeedAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `BankFeedAccount` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedAccounts.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedAccountsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedAccounts.<a href="/src/api/resources/accounting/resources/bankFeedAccounts/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.BankFeedAccount</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `BankFeedAccount` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedAccounts.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedAccountsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedAccounts.<a href="/src/api/resources/accounting/resources/bankFeedAccounts/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.BankFeedAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `BankFeedAccount` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedAccounts.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedAccountsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedAccounts.<a href="/src/api/resources/accounting/resources/bankFeedAccounts/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.BankFeedAccount, Merge.PaginatedBankFeedAccountList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BankFeedAccount` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.bankFeedAccounts.batchObjectsList("batch_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.bankFeedAccounts.batchObjectsList("batch_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedAccountsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedAccounts.<a href="/src/api/resources/accounting/resources/bankFeedAccounts/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `BankFeedAccount` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedAccounts.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `BankFeedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting BankFeedTransactions
<details><summary><code>client.accounting.bankFeedTransactions.<a href="/src/api/resources/accounting/resources/bankFeedTransactions/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.BankFeedTransaction, Merge.PaginatedBankFeedTransactionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BankFeedTransaction` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.bankFeedTransactions.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isProcessed: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.bankFeedTransactions.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isProcessed: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedTransactionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedTransactions.<a href="/src/api/resources/accounting/resources/bankFeedTransactions/client/Client.ts">create</a>({ ...params }) -> Merge.BankFeedTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `BankFeedTransaction` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedTransactions.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedTransactionsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedTransactions.<a href="/src/api/resources/accounting/resources/bankFeedTransactions/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.BankFeedTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `BankFeedTransaction` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedTransactions.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedTransactionsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedTransactions.<a href="/src/api/resources/accounting/resources/bankFeedTransactions/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.BankFeedTransactionResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `BankFeedTransaction` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedTransactions.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedTransactionsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedTransactions.<a href="/src/api/resources/accounting/resources/bankFeedTransactions/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.BankFeedTransaction, Merge.PaginatedBankFeedTransactionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BankFeedTransaction` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.bankFeedTransactions.batchObjectsList("batch_id", {
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isProcessed: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.bankFeedTransactions.batchObjectsList("batch_id", {
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isProcessed: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.BankFeedTransactionsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.bankFeedTransactions.<a href="/src/api/resources/accounting/resources/bankFeedTransactions/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `BankFeedTransaction` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedTransactions.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `BankFeedTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting CashFlowStatements
<details><summary><code>client.accounting.cashFlowStatements.<a href="/src/api/resources/accounting/resources/cashFlowStatements/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.CashFlowStatement, Merge.PaginatedCashFlowStatementList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `CashFlowStatement` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.cashFlowStatements.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.cashFlowStatements.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.CashFlowStatementsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashFlowStatementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.cashFlowStatements.<a href="/src/api/resources/accounting/resources/cashFlowStatements/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.CashFlowStatement</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `CashFlowStatement` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.cashFlowStatements.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.CashFlowStatementsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CashFlowStatementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting CompanyInfo
<details><summary><code>client.accounting.companyInfo.<a href="/src/api/resources/accounting/resources/companyInfo/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.CompanyInfo, Merge.PaginatedCompanyInfoList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `CompanyInfo` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.companyInfo.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.companyInfo.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.CompanyInfoListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompanyInfoClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.companyInfo.<a href="/src/api/resources/accounting/resources/companyInfo/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.CompanyInfo</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `CompanyInfo` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.companyInfo.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.CompanyInfoRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompanyInfoClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Contacts
<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Contact, Merge.PaginatedContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Contact` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.contacts.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCustomer: "is_customer",
    isSupplier: "is_supplier",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: ""
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.contacts.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCustomer: "is_customer",
    isSupplier: "is_supplier",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: ""
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ContactsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">create</a>({ ...params }) -> Merge.ContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Contact` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ContactsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Contact` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ContactsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.ContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `Contact` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedContactEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.ContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Contact` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ContactsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.Contact, Merge.PaginatedContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Contact` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.contacts.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCustomer: "is_customer",
    isSupplier: "is_supplier",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: ""
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.contacts.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCustomer: "is_customer",
    isSupplier: "is_supplier",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: ""
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ContactsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Contact` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Contact` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.contacts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.contacts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ContactsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting CreditNotes
<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.CreditNote, Merge.PaginatedCreditNoteList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `CreditNote` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.creditNotes.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.creditNotes.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.CreditNotesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">create</a>({ ...params }) -> Merge.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `CreditNote` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.CreditNotesCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.CreditNote</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `CreditNote` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.CreditNotesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `CreditNote` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedCreditNoteEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">applicationCreate</a>(id, { ...params }) -> Merge.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new CreditNoteApplyLine to apply a credit note to an invoice
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.applicationCreate("id", {
    isDebugMode: true,
    runAsync: true,
    appliedDate: new Date("2024-01-15T09:30:00.000Z"),
    appliedAmount: "applied_amount"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ApplyCreditNoteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `CreditNote` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.CreditNotesAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.CreditNote, Merge.PaginatedCreditNoteList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `CreditNote` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.creditNotes.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.creditNotes.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.CreditNotesBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CreditNote` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CreditNote` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CreditNotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Scopes
<details><summary><code>client.accounting.scopes.<a href="/src/api/resources/accounting/resources/scopes/client/Client.ts">defaultScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.scopes.defaultScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.scopes.<a href="/src/api/resources/accounting/resources/scopes/client/Client.ts">linkedAccountScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.scopes.linkedAccountScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.scopes.<a href="/src/api/resources/accounting/resources/scopes/client/Client.ts">linkedAccountScopesCreate</a>({ ...params }) -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.scopes.linkedAccountScopesCreate({
    commonModels: [{
            modelName: "Employee",
            modelPermissions: {
                "READ": {
                    isEnabled: true
                },
                "WRITE": {
                    isEnabled: false
                }
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"]
            }
        }, {
            modelName: "Benefit",
            modelPermissions: {
                "WRITE": {
                    isEnabled: false
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LinkedAccountCommonModelScopeDeserializerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting DeleteAccount
<details><summary><code>client.accounting.deleteAccount.<a href="/src/api/resources/accounting/resources/deleteAccount/client/Client.ts">delete</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.deleteAccount.delete();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DeleteAccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Employees
<details><summary><code>client.accounting.employees.<a href="/src/api/resources/accounting/resources/employees/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Employee, Merge.PaginatedEmployeeList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Employee` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.employees.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.employees.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.EmployeesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.employees.<a href="/src/api/resources/accounting/resources/employees/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Employee</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Employee` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.employees.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.EmployeesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting ExpenseReports
<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.ExpenseReport, Merge.PaginatedExpenseReportList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ExpenseReport` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenseReports.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenseReports.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">create</a>({ ...params }) -> Merge.ExpenseReportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `ExpenseReport` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {
            trackingCategories: ["a1b2c3d4-e5f6-4a5b-9c3d-2e1f0a9b8c7d", "d4c3b2a1-9e8f-7g6h-5i4j-3k2l1m0n9o8p"]
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">linesList</a>(expense_report_id, { ...params }) -> core.Page<Merge.ExpenseReportLine, Merge.PaginatedExpenseReportLineList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ExpenseReportLine` objects that point to a `ExpenseReport` with the given id.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenseReports.linesList("expense_report_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenseReports.linesList("expense_report_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**expense_report_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsLinesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.ExpenseReport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `ExpenseReport` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.ExpenseReportResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `ExpenseReport` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {
            trackingCategories: ["a1b2c3d4-e5f6-4a5b-9c3d-2e1f0a9b8c7d", "d4c3b2a1-9e8f-7g6h-5i4j-3k2l1m0n9o8p"]
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.ExpenseReport, Merge.PaginatedExpenseReportList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ExpenseReport` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenseReports.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenseReports.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenseReports.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenseReports.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsLinesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `ExpenseReport` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenseReports.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenseReports.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpenseReportsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReportsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Expenses
<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Expense, Merge.PaginatedExpenseList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Expense` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenses.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenses.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpensesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">create</a>({ ...params }) -> Merge.ExpenseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Expense` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenses.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpensesCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Expense</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Expense` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenses.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ExpensesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.ExpenseResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Expense` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenses.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpensesAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.Expense, Merge.PaginatedExpenseList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Expense` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenses.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenses.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ExpensesBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenses.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenses.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpensesLinesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Expense` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenses.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.expenses.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.expenses.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ExpensesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpensesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting FieldMapping
<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">fieldMappingsRetrieve</a>({ ...params }) -> Merge.FieldMappingApiInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.fieldMapping.fieldMappingsRetrieve({
    excludeRemoteFieldMetadata: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.FieldMappingsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">fieldMappingsCreate</a>({ ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.fieldMapping.fieldMappingsCreate({
    excludeRemoteFieldMetadata: true,
    remoteDataIterationCount: 1,
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.CreateFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(field_mapping_id) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.fieldMapping.fieldMappingsDestroy("field_mapping_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(field_mapping_id, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id", {
    remoteDataIterationCount: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedEditFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">remoteFieldsRetrieve</a>({ ...params }) -> Merge.RemoteFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.fieldMapping.remoteFieldsRetrieve({
    commonModels: "common_models",
    includeExampleValues: "include_example_values"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">targetFieldsRetrieve</a>() -> Merge.ExternalTargetFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.fieldMapping.targetFieldsRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting GeneralLedgerTransactions
<details><summary><code>client.accounting.generalLedgerTransactions.<a href="/src/api/resources/accounting/resources/generalLedgerTransactions/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.GeneralLedgerTransaction, Merge.PaginatedGeneralLedgerTransactionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `GeneralLedgerTransaction` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.generalLedgerTransactions.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    postedDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    postedDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.generalLedgerTransactions.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    postedDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    postedDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.GeneralLedgerTransactionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GeneralLedgerTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.generalLedgerTransactions.<a href="/src/api/resources/accounting/resources/generalLedgerTransactions/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.GeneralLedgerTransaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `GeneralLedgerTransaction` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.generalLedgerTransactions.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.GeneralLedgerTransactionsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GeneralLedgerTransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting GenerateKey
<details><summary><code>client.accounting.generateKey.<a href="/src/api/resources/accounting/resources/generateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a remote key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.generateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.GenerateRemoteKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting IncomeStatements
<details><summary><code>client.accounting.incomeStatements.<a href="/src/api/resources/accounting/resources/incomeStatements/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.IncomeStatement, Merge.PaginatedIncomeStatementList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `IncomeStatement` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.incomeStatements.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.incomeStatements.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.IncomeStatementsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IncomeStatementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.incomeStatements.<a href="/src/api/resources/accounting/resources/incomeStatements/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.IncomeStatement</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `IncomeStatement` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.incomeStatements.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.IncomeStatementsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IncomeStatementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Invoices
<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Invoice, Merge.PaginatedInvoiceList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Invoice` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.invoices.list({
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    number: "number",
    pageSize: 1,
    remoteFields: "type",
    remoteId: "remote_id",
    showEnumOrigins: "type",
    status: "DRAFT",
    type: "ACCOUNTS_PAYABLE"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.invoices.list({
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    number: "number",
    pageSize: 1,
    remoteFields: "type",
    remoteId: "remote_id",
    showEnumOrigins: "type",
    status: "DRAFT",
    type: "ACCOUNTS_PAYABLE"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.InvoicesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">create</a>({ ...params }) -> Merge.InvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Invoice` object with the given values.
            Including a `PurchaseOrder` id in the `purchase_orders` property will generate an Accounts Payable Invoice from the specified Purchase Order(s).
            
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.InvoicesCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Invoice</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Invoice` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    remoteFields: "type",
    showEnumOrigins: "type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.InvoicesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.InvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an `Invoice` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedInvoiceEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.InvoiceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Invoice` object with the given values.
            Including a `PurchaseOrder` id in the `purchase_orders` property will generate an Accounts Payable Invoice from the specified Purchase Order(s).
            
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.InvoicesAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.Invoice, Merge.PaginatedInvoiceList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Invoice` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.invoices.batchObjectsList("batch_id", {
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    number: "number",
    pageSize: 1,
    remoteFields: "type",
    remoteId: "remote_id",
    showEnumOrigins: "type",
    status: "DRAFT",
    type: "ACCOUNTS_PAYABLE"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.invoices.batchObjectsList("batch_id", {
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    number: "number",
    pageSize: 1,
    remoteFields: "type",
    remoteId: "remote_id",
    showEnumOrigins: "type",
    status: "DRAFT",
    type: "ACCOUNTS_PAYABLE"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.InvoicesBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">lineItemsRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.invoices.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.invoices.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.InvoicesLineItemsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Invoice` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Invoice` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.invoices.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.invoices.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.InvoicesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvoicesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Issues
<details><summary><code>client.accounting.issues.<a href="/src/api/resources/accounting/resources/issues/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Issue, Merge.PaginatedIssueList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all issues for Organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.IssuesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.issues.<a href="/src/api/resources/accounting/resources/issues/client/Client.ts">retrieve</a>(id) -> Merge.Issue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.issues.retrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting ItemFulfillments
<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.ItemFulfillment, Merge.PaginatedItemFulfillmentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ItemFulfillment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.itemFulfillments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    pageSize: 1,
    remoteFields: "status",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.itemFulfillments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    pageSize: 1,
    remoteFields: "status",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemFulfillmentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">create</a>({ ...params }) -> Merge.ItemFulfillmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `ItemFulfillment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.itemFulfillments.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemFulfillmentsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.ItemFulfillment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `ItemFulfillment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.itemFulfillments.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ItemFulfillmentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.ItemFulfillmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `ItemFulfillment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.itemFulfillments.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemFulfillmentsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.ItemFulfillment, Merge.PaginatedItemFulfillmentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ItemFulfillment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.itemFulfillments.batchObjectsList("batch_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    pageSize: 1,
    remoteFields: "status",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.itemFulfillments.batchObjectsList("batch_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    pageSize: 1,
    remoteFields: "status",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ItemFulfillmentsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.itemFulfillments.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.itemFulfillments.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemFulfillmentsLinesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `ItemFulfillment` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.itemFulfillments.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.itemFulfillments.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.itemFulfillments.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemFulfillmentsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Items
<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Item, Merge.PaginatedItemList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Item` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.items.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.items.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">create</a>({ ...params }) -> Merge.ItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Item` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.items.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Item</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Item` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.items.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ItemsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.ItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an `Item` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.items.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedItemEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.ItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Item` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.items.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ItemsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.Item, Merge.PaginatedItemList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Item` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.items.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.items.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ItemsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Item` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.items.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Item` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.items.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ItemsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting JournalEntries
<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.JournalEntry, Merge.PaginatedJournalEntryList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `JournalEntry` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.journalEntries.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.journalEntries.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.JournalEntriesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">create</a>({ ...params }) -> Merge.JournalEntryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `JournalEntry` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.journalEntries.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.JournalEntriesCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.JournalEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `JournalEntry` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.journalEntries.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.JournalEntriesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.JournalEntryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `JournalEntry` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.journalEntries.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.JournalEntriesAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.JournalEntry, Merge.PaginatedJournalEntryList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `JournalEntry` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.journalEntries.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.journalEntries.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.JournalEntriesBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.journalEntries.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.journalEntries.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.JournalEntriesLinesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `JournalEntry` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.journalEntries.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.journalEntries.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.journalEntries.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.JournalEntriesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting LinkToken
<details><summary><code>client.accounting.linkToken.<a href="/src/api/resources/accounting/resources/linkToken/client/Client.ts">create</a>({ ...params }) -> Merge.LinkToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link token to be used when linking a new end user. The link token expires after single use.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.linkToken.create({
    endUserEmailAddress: "example@gmail.com",
    endUserOrganizationName: "Test Organization",
    endUserOriginId: "12345",
    categories: ["hris", "ats"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.EndUserDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting LinkedAccounts
<details><summary><code>client.accounting.linkedAccounts.<a href="/src/api/resources/accounting/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountDetailsAndActions, Merge.PaginatedAccountDetailsAndActionsList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List linked accounts for your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LinkedAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Passthrough
<details><summary><code>client.accounting.passthrough.<a href="/src/api/resources/accounting/resources/passthrough/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.passthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting PaymentMethods
<details><summary><code>client.accounting.paymentMethods.<a href="/src/api/resources/accounting/resources/paymentMethods/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.PaymentMethod, Merge.PaginatedPaymentMethodList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PaymentMethod` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.paymentMethods.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.paymentMethods.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PaymentMethodsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.paymentMethods.<a href="/src/api/resources/accounting/resources/paymentMethods/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.PaymentMethod</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `PaymentMethod` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.paymentMethods.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PaymentMethodsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethodsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting PaymentTerms
<details><summary><code>client.accounting.paymentTerms.<a href="/src/api/resources/accounting/resources/paymentTerms/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.PaymentTerm, Merge.PaginatedPaymentTermList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PaymentTerm` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.paymentTerms.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.paymentTerms.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PaymentTermsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTermsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.paymentTerms.<a href="/src/api/resources/accounting/resources/paymentTerms/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.PaymentTerm</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `PaymentTerm` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.paymentTerms.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PaymentTermsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTermsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Payments
<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Payment, Merge.PaginatedPaymentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Payment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.payments.list({
    accountId: "account_id",
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.payments.list({
    accountId: "account_id",
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PaymentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">create</a>({ ...params }) -> Merge.PaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Payment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PaymentsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Payment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Payment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PaymentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.PaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `Payment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedPaymentEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.PaymentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Payment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PaymentsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.Payment, Merge.PaginatedPaymentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Payment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.payments.batchObjectsList("batch_id", {
    accountId: "account_id",
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.payments.batchObjectsList("batch_id", {
    accountId: "account_id",
    companyId: "company_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PaymentsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">lineItemsRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.payments.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.payments.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PaymentsLineItemsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Payment` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Payment` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.payments.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.payments.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PaymentsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting PhoneNumbers
<details><summary><code>client.accounting.phoneNumbers.<a href="/src/api/resources/accounting/resources/phoneNumbers/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.AccountingPhoneNumber</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `AccountingPhoneNumber` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.phoneNumbers.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PhoneNumbersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PhoneNumbersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Projects
<details><summary><code>client.accounting.projects.<a href="/src/api/resources/accounting/resources/projects/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Project, Merge.PaginatedProjectList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Project` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.projects.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.projects.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ProjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.projects.<a href="/src/api/resources/accounting/resources/projects/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Project</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Project` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.projects.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ProjectsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting PurchaseOrders
<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.PurchaseOrder, Merge.PaginatedPurchaseOrderList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PurchaseOrder` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.purchaseOrders.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.purchaseOrders.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PurchaseOrdersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">create</a>({ ...params }) -> Merge.PurchaseOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `PurchaseOrder` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.purchaseOrders.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PurchaseOrdersCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.PurchaseOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `PurchaseOrder` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.purchaseOrders.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PurchaseOrdersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.PurchaseOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `PurchaseOrder` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.purchaseOrders.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PurchaseOrdersAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.PurchaseOrder, Merge.PaginatedPurchaseOrderList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PurchaseOrder` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.purchaseOrders.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.purchaseOrders.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PurchaseOrdersBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">lineItemsRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.purchaseOrders.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.purchaseOrders.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PurchaseOrdersLineItemsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `PurchaseOrder` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.purchaseOrders.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.purchaseOrders.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.purchaseOrders.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.PurchaseOrdersRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting RegenerateKey
<details><summary><code>client.accounting.regenerateKey.<a href="/src/api/resources/accounting/resources/regenerateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange remote keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.regenerateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteKeyForRegenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting SalesOrders
<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.SalesOrder, Merge.PaginatedSalesOrderList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `SalesOrder` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.salesOrders.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.salesOrders.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.SalesOrdersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">create</a>({ ...params }) -> Merge.SalesOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `SalesOrder` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.SalesOrdersCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.SalesOrder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `SalesOrder` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.SalesOrdersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.SalesOrderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `SalesOrder` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.SalesOrdersAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.SalesOrder, Merge.PaginatedSalesOrderList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `SalesOrder` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.salesOrders.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.salesOrders.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    issueDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    issueDateBefore: new Date("2024-01-15T09:30:00.000Z"),
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.SalesOrdersBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.salesOrders.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.salesOrders.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.SalesOrdersLinesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `SalesOrder` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.salesOrders.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.salesOrders.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.SalesOrdersRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrdersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting SyncStatus
<details><summary><code>client.accounting.syncStatus.<a href="/src/api/resources/accounting/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.SyncStatus, Merge.PaginatedSyncStatusList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sync status for the current sync and the most recently finished sync. `last_sync_start` represents the most recent time any sync began. `last_sync_finished` represents the most recent time any sync completed. These timestamps may correspond to different sync instances which may result in a sync start time being later than a separate sync completed time. To ensure you are retrieving the latest available data reference the `last_sync_finished` timestamp where `last_sync_result` is `DONE`. Possible values for `status` and `last_sync_result` are `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.SyncStatusListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncStatusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting ForceResync
<details><summary><code>client.accounting.forceResync.<a href="/src/api/resources/accounting/resources/forceResync/client/Client.ts">syncStatusResyncCreate</a>() -> Merge.SyncStatus[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Force re-sync of all models. This endpoint is available for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. Force re-syncs can also be triggered manually in the Merge Dashboard and is available for all customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.forceResync.syncStatusResyncCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ForceResyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting TaxRates
<details><summary><code>client.accounting.taxRates.<a href="/src/api/resources/accounting/resources/taxRates/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.TaxRate, Merge.PaginatedTaxRateList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `TaxRate` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.taxRates.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.taxRates.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.TaxRatesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.taxRates.<a href="/src/api/resources/accounting/resources/taxRates/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.TaxRate</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `TaxRate` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.taxRates.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.TaxRatesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TaxRatesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting TrackingCategories
<details><summary><code>client.accounting.trackingCategories.<a href="/src/api/resources/accounting/resources/trackingCategories/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.TrackingCategory, Merge.PaginatedTrackingCategoryList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `TrackingCategory` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.trackingCategories.list({
    categoryType: "",
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: ""
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.trackingCategories.list({
    categoryType: "",
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    status: ""
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.TrackingCategoriesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrackingCategoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.trackingCategories.<a href="/src/api/resources/accounting/resources/trackingCategories/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.TrackingCategory</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `TrackingCategory` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.trackingCategories.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.TrackingCategoriesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TrackingCategoriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting Transactions
<details><summary><code>client.accounting.transactions.<a href="/src/api/resources/accounting/resources/transactions/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Transaction, Merge.PaginatedTransactionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Transaction` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.transactions.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.transactions.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.TransactionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.transactions.<a href="/src/api/resources/accounting/resources/transactions/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Transaction</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Transaction` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.transactions.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.TransactionsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TransactionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting VendorCredits
<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.VendorCredit, Merge.PaginatedVendorCreditList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `VendorCredit` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.vendorCredits.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.vendorCredits.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.VendorCreditsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">create</a>({ ...params }) -> Merge.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `VendorCredit` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.create({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.VendorCreditsCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.VendorCredit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `VendorCredit` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.VendorCreditsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `VendorCredit` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedVendorCreditEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">applicationCreate</a>(id, { ...params }) -> Merge.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new VendorCreditApplyLine to apply a vendor credit to an invoice
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.applicationCreate("id", {
    isDebugMode: true,
    runAsync: true,
    appliedDate: new Date("2024-01-15T09:30:00.000Z"),
    appliedAmount: "applied_amount"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.ApplyVendorCreditRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">asyncBulkCreate</a>({ ...params }) -> Merge.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `VendorCredit` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.asyncBulkCreate({
    isDebugMode: true,
    runAsync: true,
    body: {
        model: {}
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.VendorCreditsAsyncBulkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">batchObjectsList</a>(batch_id, { ...params }) -> core.Page<Merge.VendorCredit, Merge.PaginatedVendorCreditList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `VendorCredit` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.accounting.vendorCredits.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.accounting.vendorCredits.batchObjectsList("batch_id", {
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    transactionDateAfter: new Date("2024-01-15T09:30:00.000Z"),
    transactionDateBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**batch_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.VendorCreditsBatchObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `VendorCredit` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `VendorCredit` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `VendorCreditsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Accounting WebhookReceivers
<details><summary><code>client.accounting.webhookReceivers.<a href="/src/api/resources/accounting/resources/webhookReceivers/client/Client.ts">list</a>() -> Merge.WebhookReceiver[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `WebhookReceiver` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.webhookReceivers.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.accounting.webhookReceivers.<a href="/src/api/resources/accounting/resources/webhookReceivers/client/Client.ts">create</a>({ ...params }) -> Merge.WebhookReceiver</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `WebhookReceiver` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.webhookReceivers.create({
    event: "event",
    isActive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.WebhookReceiverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm AccountDetails
<details><summary><code>client.crm.accountDetails.<a href="/src/api/resources/crm/resources/accountDetails/client/Client.ts">retrieve</a>() -> Merge.AccountDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details for a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accountDetails.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountDetailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm AccountToken
<details><summary><code>client.crm.accountToken.<a href="/src/api/resources/crm/resources/accountToken/client/Client.ts">retrieve</a>(public_token) -> Merge.AccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the account token for the end user with the provided public token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accountToken.retrieve("public_token");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**public_token:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.accountToken.<a href="/src/api/resources/crm/resources/accountToken/client/Client.ts">regenerateCreate</a>() -> Merge.RegenerateAccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange Linked Account account tokens.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accountToken.regenerateCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Accounts
<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Account, Merge.PaginatedAccountList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Account` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.accounts.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    ownerId: "owner_id",
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.accounts.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    ownerId: "owner_id",
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.AccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">create</a>({ ...params }) -> Merge.CrmAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Account` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accounts.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.CrmAccountEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Account` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accounts.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.AccountsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.CrmAccountResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an `Account` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accounts.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.PatchedCrmAccountEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMAccount` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accounts.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMAccount` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accounts.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.accounts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.accounts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.AccountsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm AsyncPassthrough
<details><summary><code>client.crm.asyncPassthrough.<a href="/src/api/resources/crm/resources/asyncPassthrough/client/Client.ts">create</a>({ ...params }) -> Merge.AsyncPassthroughReciept</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.asyncPassthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.asyncPassthrough.<a href="/src/api/resources/crm/resources/asyncPassthrough/client/Client.ts">retrieve</a>(async_passthrough_receipt_id) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves data from earlier async-passthrough POST request
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.asyncPassthrough.retrieve("async_passthrough_receipt_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**async_passthrough_receipt_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm AuditTrail
<details><summary><code>client.crm.auditTrail.<a href="/src/api/resources/crm/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AuditLogEvent, Merge.PaginatedAuditLogEventList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of audit trail events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.AuditTrailListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditTrailClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm AvailableActions
<details><summary><code>client.crm.availableActions.<a href="/src/api/resources/crm/resources/availableActions/client/Client.ts">retrieve</a>() -> Merge.AvailableActions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of models and actions available for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.availableActions.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AvailableActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Contacts
<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Contact, Merge.PaginatedContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Contact` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.contacts.list({
    accountId: "account_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddresses: "email_addresses",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    phoneNumbers: "phone_numbers",
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.contacts.list({
    accountId: "account_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddresses: "email_addresses",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    phoneNumbers: "phone_numbers",
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ContactsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">create</a>({ ...params }) -> Merge.CrmContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Contact` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.CrmContactEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Contact` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.ContactsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.CrmContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `Contact` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.PatchedCrmContactEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">ignoreCreate</a>(model_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.ignoreCreate("model_id", {
    reason: "GENERAL_CUSTOMER_REQUEST"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.IgnoreCommonModelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMContact` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMContact` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.contacts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.contacts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ContactsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm CustomObjectClasses
<details><summary><code>client.crm.customObjectClasses.<a href="/src/api/resources/crm/resources/customObjectClasses/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.CustomObjectClass, Merge.PaginatedCustomObjectClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `CustomObjectClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.customObjectClasses.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.customObjectClasses.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectClassesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjectClasses.<a href="/src/api/resources/crm/resources/customObjectClasses/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.CustomObjectClass</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `CustomObjectClass` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.customObjectClasses.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectClassesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm AssociationTypes
<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesList</a>(custom_object_class_id, { ...params }) -> core.Page<Merge.AssociationType, Merge.PaginatedAssociationTypeList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `AssociationType` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.associationTypes.customObjectClassesAssociationTypesList("custom_object_class_id", {
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.associationTypes.customObjectClassesAssociationTypesList("custom_object_class_id", {
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesAssociationTypesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesCreate</a>(custom_object_class_id, { ...params }) -> Merge.CrmAssociationTypeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `AssociationType` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.associationTypes.customObjectClassesAssociationTypesCreate("custom_object_class_id", {
    isDebugMode: true,
    runAsync: true,
    model: {
        sourceObjectClass: {
            id: "id",
            originType: "CUSTOM_OBJECT"
        },
        targetObjectClasses: [{
                id: "id",
                originType: "CUSTOM_OBJECT"
            }],
        remoteKeyName: "remote_key_name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CrmAssociationTypeEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesRetrieve</a>(custom_object_class_id, id, { ...params }) -> Merge.AssociationType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `AssociationType` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.associationTypes.customObjectClassesAssociationTypesRetrieve("custom_object_class_id", "id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesAssociationTypesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesMetaPostRetrieve</a>(custom_object_class_id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMAssociationType` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.associationTypes.customObjectClassesAssociationTypesMetaPostRetrieve("custom_object_class_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm CustomObjects
<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsList</a>(custom_object_class_id, { ...params }) -> core.Page<Merge.CustomObject, Merge.PaginatedCustomObjectList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `CustomObject` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.customObjects.customObjectClassesCustomObjectsList("custom_object_class_id", {
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.customObjects.customObjectClassesCustomObjectsList("custom_object_class_id", {
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsCreate</a>(custom_object_class_id, { ...params }) -> Merge.CrmCustomObjectResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `CustomObject` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.customObjects.customObjectClassesCustomObjectsCreate("custom_object_class_id", {
    isDebugMode: true,
    runAsync: true,
    model: {
        fields: {
            "test_field": "hello"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CrmCustomObjectEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsRetrieve</a>(custom_object_class_id, id, { ...params }) -> Merge.CustomObject</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `CustomObject` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.customObjects.customObjectClassesCustomObjectsRetrieve("custom_object_class_id", "id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsMetaPostRetrieve</a>(custom_object_class_id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMCustomObject` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.customObjects.customObjectClassesCustomObjectsMetaPostRetrieve("custom_object_class_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsRemoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.customObjects.customObjectClassesCustomObjectsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.customObjects.customObjectClassesCustomObjectsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Associations
<details><summary><code>client.crm.associations.<a href="/src/api/resources/crm/resources/associations/client/Client.ts">customObjectClassesCustomObjectsAssociationsList</a>(custom_object_class_id, object_id, { ...params }) -> core.Page<Merge.Association, Merge.PaginatedAssociationList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Association` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.associations.customObjectClassesCustomObjectsAssociationsList("custom_object_class_id", "object_id", {
    associationTypeId: "association_type_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.associations.customObjectClassesCustomObjectsAssociationsList("custom_object_class_id", "object_id", {
    associationTypeId: "association_type_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**custom_object_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**object_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsAssociationsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.associations.<a href="/src/api/resources/crm/resources/associations/client/Client.ts">customObjectClassesCustomObjectsAssociationsUpdate</a>(source_class_id, source_object_id, target_class_id, target_object_id, association_type_id, { ...params }) -> Merge.Association</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an Association between `source_object_id` and `target_object_id` of type `association_type_id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.associations.customObjectClassesCustomObjectsAssociationsUpdate("source_class_id", "source_object_id", "target_class_id", "target_object_id", "association_type_id", {
    isDebugMode: true,
    runAsync: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**source_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**source_object_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**target_class_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**target_object_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**association_type_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsAssociationsUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Scopes
<details><summary><code>client.crm.scopes.<a href="/src/api/resources/crm/resources/scopes/client/Client.ts">defaultScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.scopes.defaultScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.scopes.<a href="/src/api/resources/crm/resources/scopes/client/Client.ts">linkedAccountScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.scopes.linkedAccountScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.scopes.<a href="/src/api/resources/crm/resources/scopes/client/Client.ts">linkedAccountScopesCreate</a>({ ...params }) -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.scopes.linkedAccountScopesCreate({
    commonModels: [{
            modelName: "Employee",
            modelPermissions: {
                "READ": {
                    isEnabled: true
                },
                "WRITE": {
                    isEnabled: false
                }
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"]
            }
        }, {
            modelName: "Benefit",
            modelPermissions: {
                "WRITE": {
                    isEnabled: false
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.LinkedAccountCommonModelScopeDeserializerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm DeleteAccount
<details><summary><code>client.crm.deleteAccount.<a href="/src/api/resources/crm/resources/deleteAccount/client/Client.ts">delete</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.deleteAccount.delete();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DeleteAccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm EngagementTypes
<details><summary><code>client.crm.engagementTypes.<a href="/src/api/resources/crm/resources/engagementTypes/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.EngagementType, Merge.PaginatedEngagementTypeList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `EngagementType` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.engagementTypes.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.engagementTypes.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.EngagementTypesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagementTypes.<a href="/src/api/resources/crm/resources/engagementTypes/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.EngagementType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `EngagementType` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagementTypes.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.EngagementTypesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagementTypes.<a href="/src/api/resources/crm/resources/engagementTypes/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.engagementTypes.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.engagementTypes.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.EngagementTypesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementTypesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Engagements
<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Engagement, Merge.PaginatedEngagementList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Engagement` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.engagements.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.engagements.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.EngagementsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">create</a>({ ...params }) -> Merge.EngagementResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Engagement` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagements.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.EngagementEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Engagement</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Engagement` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagements.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.EngagementsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.EngagementResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an `Engagement` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagements.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.PatchedEngagementEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Engagement` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagements.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Engagement` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagements.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EngagementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.engagements.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.engagements.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.EngagementsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EngagementsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm FieldMapping
<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">fieldMappingsRetrieve</a>({ ...params }) -> Merge.FieldMappingApiInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.fieldMapping.fieldMappingsRetrieve({
    excludeRemoteFieldMetadata: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.FieldMappingsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">fieldMappingsCreate</a>({ ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.fieldMapping.fieldMappingsCreate({
    excludeRemoteFieldMetadata: true,
    remoteDataIterationCount: 1,
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.CreateFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(field_mapping_id) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.fieldMapping.fieldMappingsDestroy("field_mapping_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(field_mapping_id, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id", {
    remoteDataIterationCount: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.PatchedEditFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">remoteFieldsRetrieve</a>({ ...params }) -> Merge.RemoteFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.fieldMapping.remoteFieldsRetrieve({
    commonModels: "common_models",
    includeExampleValues: "include_example_values"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">targetFieldsRetrieve</a>() -> Merge.ExternalTargetFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.fieldMapping.targetFieldsRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm GenerateKey
<details><summary><code>client.crm.generateKey.<a href="/src/api/resources/crm/resources/generateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a remote key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.generateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.GenerateRemoteKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Issues
<details><summary><code>client.crm.issues.<a href="/src/api/resources/crm/resources/issues/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Issue, Merge.PaginatedIssueList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all issues for Organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.IssuesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.issues.<a href="/src/api/resources/crm/resources/issues/client/Client.ts">retrieve</a>(id) -> Merge.Issue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.issues.retrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Leads
<details><summary><code>client.crm.leads.<a href="/src/api/resources/crm/resources/leads/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Lead, Merge.PaginatedLeadList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Lead` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.leads.list({
    convertedAccountId: "converted_account_id",
    convertedContactId: "converted_contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddresses: "email_addresses",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    ownerId: "owner_id",
    pageSize: 1,
    phoneNumbers: "phone_numbers",
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.leads.list({
    convertedAccountId: "converted_account_id",
    convertedContactId: "converted_contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddresses: "email_addresses",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    ownerId: "owner_id",
    pageSize: 1,
    phoneNumbers: "phone_numbers",
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.LeadsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.leads.<a href="/src/api/resources/crm/resources/leads/client/Client.ts">create</a>({ ...params }) -> Merge.LeadResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Lead` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.leads.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.LeadEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.leads.<a href="/src/api/resources/crm/resources/leads/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Lead</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Lead` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.leads.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.LeadsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.leads.<a href="/src/api/resources/crm/resources/leads/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Lead` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.leads.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.leads.<a href="/src/api/resources/crm/resources/leads/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.leads.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.leads.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.LeadsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LeadsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm LinkToken
<details><summary><code>client.crm.linkToken.<a href="/src/api/resources/crm/resources/linkToken/client/Client.ts">create</a>({ ...params }) -> Merge.LinkToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link token to be used when linking a new end user. The link token expires after single use.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.linkToken.create({
    endUserEmailAddress: "example@gmail.com",
    endUserOrganizationName: "Test Organization",
    endUserOriginId: "12345",
    categories: ["hris", "ats"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.EndUserDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm LinkedAccounts
<details><summary><code>client.crm.linkedAccounts.<a href="/src/api/resources/crm/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountDetailsAndActions, Merge.PaginatedAccountDetailsAndActionsList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List linked accounts for your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.LinkedAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Notes
<details><summary><code>client.crm.notes.<a href="/src/api/resources/crm/resources/notes/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Note, Merge.PaginatedNoteList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Note` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.notes.list({
    accountId: "account_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    opportunityId: "opportunity_id",
    ownerId: "owner_id",
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.notes.list({
    accountId: "account_id",
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    opportunityId: "opportunity_id",
    ownerId: "owner_id",
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.NotesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.notes.<a href="/src/api/resources/crm/resources/notes/client/Client.ts">create</a>({ ...params }) -> Merge.NoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Note` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.notes.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.NoteEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.notes.<a href="/src/api/resources/crm/resources/notes/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Note</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Note` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.notes.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.NotesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.notes.<a href="/src/api/resources/crm/resources/notes/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Note` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.notes.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.notes.<a href="/src/api/resources/crm/resources/notes/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.notes.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.notes.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.NotesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `NotesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Opportunities
<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Opportunity, Merge.PaginatedOpportunityList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Opportunity` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.opportunities.list({
    accountId: "account_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    ownerId: "owner_id",
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    stageId: "stage_id",
    status: "LOST"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.opportunities.list({
    accountId: "account_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    ownerId: "owner_id",
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteFields: "status",
    remoteId: "remote_id",
    showEnumOrigins: "status",
    stageId: "stage_id",
    status: "LOST"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.OpportunitiesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OpportunitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">create</a>({ ...params }) -> Merge.OpportunityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Opportunity` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.opportunities.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.OpportunityEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OpportunitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Opportunity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Opportunity` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.opportunities.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    remoteFields: "status",
    showEnumOrigins: "status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.OpportunitiesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OpportunitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.OpportunityResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an `Opportunity` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.opportunities.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.PatchedOpportunityEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OpportunitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Opportunity` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.opportunities.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OpportunitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Opportunity` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.opportunities.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `OpportunitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.opportunities.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.opportunities.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.OpportunitiesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OpportunitiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Passthrough
<details><summary><code>client.crm.passthrough.<a href="/src/api/resources/crm/resources/passthrough/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.passthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm RegenerateKey
<details><summary><code>client.crm.regenerateKey.<a href="/src/api/resources/crm/resources/regenerateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange remote keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.regenerateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteKeyForRegenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Stages
<details><summary><code>client.crm.stages.<a href="/src/api/resources/crm/resources/stages/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Stage, Merge.PaginatedStageList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Stage` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.stages.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.stages.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.StagesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.stages.<a href="/src/api/resources/crm/resources/stages/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Stage</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Stage` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.stages.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.StagesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.stages.<a href="/src/api/resources/crm/resources/stages/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.stages.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.stages.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.StagesRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StagesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm SyncStatus
<details><summary><code>client.crm.syncStatus.<a href="/src/api/resources/crm/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.SyncStatus, Merge.PaginatedSyncStatusList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sync status for the current sync and the most recently finished sync. `last_sync_start` represents the most recent time any sync began. `last_sync_finished` represents the most recent time any sync completed. These timestamps may correspond to different sync instances which may result in a sync start time being later than a separate sync completed time. To ensure you are retrieving the latest available data reference the `last_sync_finished` timestamp where `last_sync_result` is `DONE`. Possible values for `status` and `last_sync_result` are `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.SyncStatusListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncStatusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm ForceResync
<details><summary><code>client.crm.forceResync.<a href="/src/api/resources/crm/resources/forceResync/client/Client.ts">syncStatusResyncCreate</a>() -> Merge.SyncStatus[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Force re-sync of all models. This endpoint is available for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. Force re-syncs can also be triggered manually in the Merge Dashboard and is available for all customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.forceResync.syncStatusResyncCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ForceResyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Tasks
<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Task, Merge.PaginatedTaskList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Task` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.tasks.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.tasks.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.TasksListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">create</a>({ ...params }) -> Merge.TaskResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Task` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.tasks.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.TaskEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Task</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Task` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.tasks.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.TasksRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.TaskResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `Task` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.tasks.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.PatchedTaskEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Task` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.tasks.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Task` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.tasks.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.tasks.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.tasks.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.TasksRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TasksClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm Users
<details><summary><code>client.crm.users.<a href="/src/api/resources/crm/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.User, Merge.PaginatedUserList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `User` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.users.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    email: "email",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.users.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    email: "email",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.UsersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.users.<a href="/src/api/resources/crm/resources/users/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `User` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.users.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.UsersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.users.<a href="/src/api/resources/crm/resources/users/client/Client.ts">ignoreCreate</a>(model_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.users.ignoreCreate("model_id", {
    reason: "GENERAL_CUSTOMER_REQUEST"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.IgnoreCommonModelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.users.<a href="/src/api/resources/crm/resources/users/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.crm.users.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.crm.users.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.UsersRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Crm WebhookReceivers
<details><summary><code>client.crm.webhookReceivers.<a href="/src/api/resources/crm/resources/webhookReceivers/client/Client.ts">list</a>() -> Merge.WebhookReceiver[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `WebhookReceiver` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.webhookReceivers.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.crm.webhookReceivers.<a href="/src/api/resources/crm/resources/webhookReceivers/client/Client.ts">create</a>({ ...params }) -> Merge.WebhookReceiver</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `WebhookReceiver` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.webhookReceivers.create({
    event: "event",
    isActive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.WebhookReceiverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris AccountDetails
<details><summary><code>client.hris.accountDetails.<a href="/src/api/resources/hris/resources/accountDetails/client/Client.ts">retrieve</a>() -> Merge.AccountDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details for a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.accountDetails.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountDetailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris AccountToken
<details><summary><code>client.hris.accountToken.<a href="/src/api/resources/hris/resources/accountToken/client/Client.ts">retrieve</a>(public_token) -> Merge.AccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the account token for the end user with the provided public token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.accountToken.retrieve("public_token");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**public_token:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.accountToken.<a href="/src/api/resources/hris/resources/accountToken/client/Client.ts">regenerateCreate</a>() -> Merge.RegenerateAccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange Linked Account account tokens.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.accountToken.regenerateCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris AsyncPassthrough
<details><summary><code>client.hris.asyncPassthrough.<a href="/src/api/resources/hris/resources/asyncPassthrough/client/Client.ts">create</a>({ ...params }) -> Merge.AsyncPassthroughReciept</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.asyncPassthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.asyncPassthrough.<a href="/src/api/resources/hris/resources/asyncPassthrough/client/Client.ts">retrieve</a>(async_passthrough_receipt_id) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves data from earlier async-passthrough POST request
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.asyncPassthrough.retrieve("async_passthrough_receipt_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**async_passthrough_receipt_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris AuditTrail
<details><summary><code>client.hris.auditTrail.<a href="/src/api/resources/hris/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AuditLogEvent, Merge.PaginatedAuditLogEventList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of audit trail events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.AuditTrailListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditTrailClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris AvailableActions
<details><summary><code>client.hris.availableActions.<a href="/src/api/resources/hris/resources/availableActions/client/Client.ts">retrieve</a>() -> Merge.AvailableActions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of models and actions available for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.availableActions.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AvailableActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris BankInfo
<details><summary><code>client.hris.bankInfo.<a href="/src/api/resources/hris/resources/bankInfo/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.BankInfo, Merge.PaginatedBankInfoList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BankInfo` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.bankInfo.list({
    accountType: "CHECKING",
    bankName: "bank_name",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    orderBy: "-remote_created_at",
    pageSize: 1,
    remoteFields: "account_type",
    remoteId: "remote_id",
    showEnumOrigins: "account_type"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.bankInfo.list({
    accountType: "CHECKING",
    bankName: "bank_name",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    orderBy: "-remote_created_at",
    pageSize: 1,
    remoteFields: "account_type",
    remoteId: "remote_id",
    showEnumOrigins: "account_type"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.BankInfoListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankInfoClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.bankInfo.<a href="/src/api/resources/hris/resources/bankInfo/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.BankInfo</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `BankInfo` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.bankInfo.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "account_type",
    showEnumOrigins: "account_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.BankInfoRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankInfoClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Benefits
<details><summary><code>client.hris.benefits.<a href="/src/api/resources/hris/resources/benefits/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Benefit, Merge.PaginatedBenefitList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Benefit` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.benefits.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.benefits.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.BenefitsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BenefitsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.benefits.<a href="/src/api/resources/hris/resources/benefits/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Benefit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Benefit` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.benefits.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.BenefitsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BenefitsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Companies
<details><summary><code>client.hris.companies.<a href="/src/api/resources/hris/resources/companies/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Company, Merge.PaginatedCompanyList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Company` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.companies.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.companies.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.CompaniesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.companies.<a href="/src/api/resources/hris/resources/companies/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Company</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Company` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.companies.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.CompaniesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CompaniesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Scopes
<details><summary><code>client.hris.scopes.<a href="/src/api/resources/hris/resources/scopes/client/Client.ts">defaultScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.scopes.defaultScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.scopes.<a href="/src/api/resources/hris/resources/scopes/client/Client.ts">linkedAccountScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.scopes.linkedAccountScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.scopes.<a href="/src/api/resources/hris/resources/scopes/client/Client.ts">linkedAccountScopesCreate</a>({ ...params }) -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.scopes.linkedAccountScopesCreate({
    commonModels: [{
            modelName: "Employee",
            modelPermissions: {
                "READ": {
                    isEnabled: true
                },
                "WRITE": {
                    isEnabled: false
                }
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"]
            }
        }, {
            modelName: "Benefit",
            modelPermissions: {
                "WRITE": {
                    isEnabled: false
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.LinkedAccountCommonModelScopeDeserializerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris DeleteAccount
<details><summary><code>client.hris.deleteAccount.<a href="/src/api/resources/hris/resources/deleteAccount/client/Client.ts">delete</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.deleteAccount.delete();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DeleteAccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Dependents
<details><summary><code>client.hris.dependents.<a href="/src/api/resources/hris/resources/dependents/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Dependent, Merge.PaginatedDependentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Dependent` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.dependents.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeSensitiveFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.dependents.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeSensitiveFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.DependentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DependentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.dependents.<a href="/src/api/resources/hris/resources/dependents/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Dependent</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Dependent` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.dependents.retrieve("id", {
    includeRemoteData: true,
    includeSensitiveFields: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.DependentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DependentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris EmployeePayrollRuns
<details><summary><code>client.hris.employeePayrollRuns.<a href="/src/api/resources/hris/resources/employeePayrollRuns/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.EmployeePayrollRun, Merge.PaginatedEmployeePayrollRunList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `EmployeePayrollRun` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.employeePayrollRuns.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    payrollRunId: "payroll_run_id",
    remoteId: "remote_id",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.employeePayrollRuns.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    payrollRunId: "payroll_run_id",
    remoteId: "remote_id",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.EmployeePayrollRunsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeePayrollRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.employeePayrollRuns.<a href="/src/api/resources/hris/resources/employeePayrollRuns/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.EmployeePayrollRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `EmployeePayrollRun` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employeePayrollRuns.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.EmployeePayrollRunsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeePayrollRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Employees
<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Employee, Merge.PaginatedEmployeeList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Employee` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.employees.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    displayFullName: "display_full_name",
    employeeNumber: "employee_number",
    employmentStatus: "ACTIVE",
    employmentType: "employment_type",
    firstName: "first_name",
    groups: "groups",
    homeLocationId: "home_location_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeSensitiveFields: true,
    includeShellData: true,
    jobTitle: "job_title",
    lastName: "last_name",
    managerId: "manager_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    payGroupId: "pay_group_id",
    personalEmail: "personal_email",
    remoteFields: "employment_status",
    remoteId: "remote_id",
    showEnumOrigins: "employment_status",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z"),
    teamId: "team_id",
    terminatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    terminatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    workEmail: "work_email",
    workLocationId: "work_location_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.employees.list({
    companyId: "company_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    displayFullName: "display_full_name",
    employeeNumber: "employee_number",
    employmentStatus: "ACTIVE",
    employmentType: "employment_type",
    firstName: "first_name",
    groups: "groups",
    homeLocationId: "home_location_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeSensitiveFields: true,
    includeShellData: true,
    jobTitle: "job_title",
    lastName: "last_name",
    managerId: "manager_id",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    payGroupId: "pay_group_id",
    personalEmail: "personal_email",
    remoteFields: "employment_status",
    remoteId: "remote_id",
    showEnumOrigins: "employment_status",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z"),
    teamId: "team_id",
    terminatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    terminatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    workEmail: "work_email",
    workLocationId: "work_location_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.EmployeesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">create</a>({ ...params }) -> Merge.EmployeeResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Employee` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employees.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.EmployeeEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Employee</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Employee` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employees.retrieve("id", {
    includeRemoteData: true,
    includeSensitiveFields: true,
    includeShellData: true,
    remoteFields: "employment_status",
    showEnumOrigins: "employment_status"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.EmployeesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">ignoreCreate</a>(model_id, { ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employees.ignoreCreate("model_id", {
    reason: "GENERAL_CUSTOMER_REQUEST"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**model_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.IgnoreCommonModelRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Employee` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employees.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `EmployeesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris EmployerBenefits
<details><summary><code>client.hris.employerBenefits.<a href="/src/api/resources/hris/resources/employerBenefits/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.EmployerBenefit, Merge.PaginatedEmployerBenefitList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `EmployerBenefit` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.employerBenefits.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.employerBenefits.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.EmployerBenefitsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployerBenefitsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.employerBenefits.<a href="/src/api/resources/hris/resources/employerBenefits/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.EmployerBenefit</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `EmployerBenefit` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employerBenefits.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.EmployerBenefitsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmployerBenefitsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Employments
<details><summary><code>client.hris.employments.<a href="/src/api/resources/hris/resources/employments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Employment, Merge.PaginatedEmploymentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Employment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.employments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    orderBy: "-effective_date",
    pageSize: 1,
    remoteFields: "employment_type",
    remoteId: "remote_id",
    showEnumOrigins: "employment_type"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.employments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    orderBy: "-effective_date",
    pageSize: 1,
    remoteFields: "employment_type",
    remoteId: "remote_id",
    showEnumOrigins: "employment_type"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.EmploymentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmploymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.employments.<a href="/src/api/resources/hris/resources/employments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Employment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Employment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employments.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "employment_type",
    showEnumOrigins: "employment_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.EmploymentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EmploymentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris FieldMapping
<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">fieldMappingsRetrieve</a>({ ...params }) -> Merge.FieldMappingApiInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.fieldMapping.fieldMappingsRetrieve({
    excludeRemoteFieldMetadata: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.FieldMappingsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">fieldMappingsCreate</a>({ ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.fieldMapping.fieldMappingsCreate({
    excludeRemoteFieldMetadata: true,
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.CreateFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(field_mapping_id) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.fieldMapping.fieldMappingsDestroy("field_mapping_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(field_mapping_id, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id", {
    remoteDataIterationCount: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.PatchedEditFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">remoteFieldsRetrieve</a>({ ...params }) -> Merge.RemoteFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.fieldMapping.remoteFieldsRetrieve({
    commonModels: "common_models",
    includeExampleValues: "include_example_values"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.RemoteFieldsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">targetFieldsRetrieve</a>() -> Merge.ExternalTargetFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.fieldMapping.targetFieldsRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris GenerateKey
<details><summary><code>client.hris.generateKey.<a href="/src/api/resources/hris/resources/generateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a remote key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.generateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.GenerateRemoteKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Groups
<details><summary><code>client.hris.groups.<a href="/src/api/resources/hris/resources/groups/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Group, Merge.PaginatedGroupList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Group` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.groups.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonlyUsedAsTeam: "is_commonly_used_as_team",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    names: "names",
    pageSize: 1,
    remoteFields: "type",
    remoteId: "remote_id",
    showEnumOrigins: "type",
    types: "types"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.groups.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonlyUsedAsTeam: "is_commonly_used_as_team",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    names: "names",
    pageSize: 1,
    remoteFields: "type",
    remoteId: "remote_id",
    showEnumOrigins: "type",
    types: "types"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.GroupsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.groups.<a href="/src/api/resources/hris/resources/groups/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Group` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.groups.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "type",
    showEnumOrigins: "type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.GroupsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.groups.<a href="/src/api/resources/hris/resources/groups/client/Client.ts">typesList</a>({ ...params }) -> Merge.GroupsTypesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of distinct group type values from the Groups common model.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.groups.typesList({
    includeDeletedData: true,
    showEnumOrigins: "show_enum_origins"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.GroupsTypesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Issues
<details><summary><code>client.hris.issues.<a href="/src/api/resources/hris/resources/issues/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Issue, Merge.PaginatedIssueList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all issues for Organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.IssuesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.issues.<a href="/src/api/resources/hris/resources/issues/client/Client.ts">retrieve</a>(id) -> Merge.Issue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.issues.retrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris LinkToken
<details><summary><code>client.hris.linkToken.<a href="/src/api/resources/hris/resources/linkToken/client/Client.ts">create</a>({ ...params }) -> Merge.LinkToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link token to be used when linking a new end user. The link token expires after single use.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.linkToken.create({
    endUserEmailAddress: "example@gmail.com",
    endUserOrganizationName: "Test Organization",
    endUserOriginId: "12345",
    categories: ["hris", "ats"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.EndUserDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris LinkedAccounts
<details><summary><code>client.hris.linkedAccounts.<a href="/src/api/resources/hris/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountDetailsAndActions, Merge.PaginatedAccountDetailsAndActionsList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List linked accounts for your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.LinkedAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Locations
<details><summary><code>client.hris.locations.<a href="/src/api/resources/hris/resources/locations/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Location, Merge.PaginatedLocationList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Location` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.locations.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    locationType: "HOME",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "country",
    remoteId: "remote_id",
    showEnumOrigins: "country"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.locations.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    locationType: "HOME",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "country",
    remoteId: "remote_id",
    showEnumOrigins: "country"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.LocationsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LocationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.locations.<a href="/src/api/resources/hris/resources/locations/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Location</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Location` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.locations.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "country",
    showEnumOrigins: "country"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.LocationsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LocationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Passthrough
<details><summary><code>client.hris.passthrough.<a href="/src/api/resources/hris/resources/passthrough/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.passthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris PayGroups
<details><summary><code>client.hris.payGroups.<a href="/src/api/resources/hris/resources/payGroups/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.PayGroup, Merge.PaginatedPayGroupList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PayGroup` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.payGroups.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.payGroups.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.PayGroupsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.payGroups.<a href="/src/api/resources/hris/resources/payGroups/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.PayGroup</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `PayGroup` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.payGroups.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.PayGroupsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayGroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris PayrollRuns
<details><summary><code>client.hris.payrollRuns.<a href="/src/api/resources/hris/resources/payrollRuns/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.PayrollRun, Merge.PaginatedPayrollRunList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PayrollRun` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.payrollRuns.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "run_state",
    remoteId: "remote_id",
    runType: "CORRECTION",
    showEnumOrigins: "run_state",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.payrollRuns.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "run_state",
    remoteId: "remote_id",
    runType: "CORRECTION",
    showEnumOrigins: "run_state",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.PayrollRunsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayrollRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.payrollRuns.<a href="/src/api/resources/hris/resources/payrollRuns/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.PayrollRun</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `PayrollRun` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.payrollRuns.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "run_state",
    showEnumOrigins: "run_state"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.PayrollRunsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayrollRunsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris RegenerateKey
<details><summary><code>client.hris.regenerateKey.<a href="/src/api/resources/hris/resources/regenerateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange remote keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.regenerateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.RemoteKeyForRegenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris SyncStatus
<details><summary><code>client.hris.syncStatus.<a href="/src/api/resources/hris/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.SyncStatus, Merge.PaginatedSyncStatusList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sync status for the current sync and the most recently finished sync. `last_sync_start` represents the most recent time any sync began. `last_sync_finished` represents the most recent time any sync completed. These timestamps may correspond to different sync instances which may result in a sync start time being later than a separate sync completed time. To ensure you are retrieving the latest available data reference the `last_sync_finished` timestamp where `last_sync_result` is `DONE`. Possible values for `status` and `last_sync_result` are `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.SyncStatusListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncStatusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris ForceResync
<details><summary><code>client.hris.forceResync.<a href="/src/api/resources/hris/resources/forceResync/client/Client.ts">syncStatusResyncCreate</a>() -> Merge.SyncStatus[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Force re-sync of all models. This endpoint is available for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. Force re-syncs can also be triggered manually in the Merge Dashboard and is available for all customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.forceResync.syncStatusResyncCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ForceResyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris Teams
<details><summary><code>client.hris.teams.<a href="/src/api/resources/hris/resources/teams/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Team, Merge.PaginatedTeamList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Team` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.teams.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    parentTeamId: "parent_team_id",
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.teams.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    parentTeamId: "parent_team_id",
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.TeamsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.teams.<a href="/src/api/resources/hris/resources/teams/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Team` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.teams.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.TeamsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris TimeOff
<details><summary><code>client.hris.timeOff.<a href="/src/api/resources/hris/resources/timeOff/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.TimeOff, Merge.PaginatedTimeOffList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `TimeOff` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.timeOff.list({
    approverId: "approver_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "request_type",
    remoteId: "remote_id",
    requestType: "BEREAVEMENT",
    showEnumOrigins: "request_type",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z"),
    status: "APPROVED"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.timeOff.list({
    approverId: "approver_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteFields: "request_type",
    remoteId: "remote_id",
    requestType: "BEREAVEMENT",
    showEnumOrigins: "request_type",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z"),
    status: "APPROVED"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.TimeOffListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimeOffClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.timeOff.<a href="/src/api/resources/hris/resources/timeOff/client/Client.ts">create</a>({ ...params }) -> Merge.TimeOffResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `TimeOff` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timeOff.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.TimeOffEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimeOffClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.timeOff.<a href="/src/api/resources/hris/resources/timeOff/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.TimeOff</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `TimeOff` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timeOff.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "request_type",
    showEnumOrigins: "request_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.TimeOffRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimeOffClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.timeOff.<a href="/src/api/resources/hris/resources/timeOff/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `TimeOff` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timeOff.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TimeOffClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris TimeOffBalances
<details><summary><code>client.hris.timeOffBalances.<a href="/src/api/resources/hris/resources/timeOffBalances/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.TimeOffBalance, Merge.PaginatedTimeOffBalanceList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `TimeOffBalance` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.timeOffBalances.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    policyType: "BEREAVEMENT",
    remoteFields: "policy_type",
    remoteId: "remote_id",
    showEnumOrigins: "policy_type"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.timeOffBalances.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    policyType: "BEREAVEMENT",
    remoteFields: "policy_type",
    remoteId: "remote_id",
    showEnumOrigins: "policy_type"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.TimeOffBalancesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimeOffBalancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.timeOffBalances.<a href="/src/api/resources/hris/resources/timeOffBalances/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.TimeOffBalance</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `TimeOffBalance` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timeOffBalances.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "policy_type",
    showEnumOrigins: "policy_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.TimeOffBalancesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimeOffBalancesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris TimesheetEntries
<details><summary><code>client.hris.timesheetEntries.<a href="/src/api/resources/hris/resources/timesheetEntries/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.TimesheetEntry, Merge.PaginatedTimesheetEntryList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `TimesheetEntry` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.hris.timesheetEntries.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    orderBy: "-start_time",
    pageSize: 1,
    remoteId: "remote_id",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.hris.timesheetEntries.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    employeeId: "employee_id",
    endedAfter: new Date("2024-01-15T09:30:00.000Z"),
    endedBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    orderBy: "-start_time",
    pageSize: 1,
    remoteId: "remote_id",
    startedAfter: new Date("2024-01-15T09:30:00.000Z"),
    startedBefore: new Date("2024-01-15T09:30:00.000Z")
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.TimesheetEntriesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimesheetEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.timesheetEntries.<a href="/src/api/resources/hris/resources/timesheetEntries/client/Client.ts">create</a>({ ...params }) -> Merge.TimesheetEntryResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `TimesheetEntry` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timesheetEntries.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.TimesheetEntryEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimesheetEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.timesheetEntries.<a href="/src/api/resources/hris/resources/timesheetEntries/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.TimesheetEntry</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `TimesheetEntry` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timesheetEntries.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.TimesheetEntriesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TimesheetEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.timesheetEntries.<a href="/src/api/resources/hris/resources/timesheetEntries/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `TimesheetEntry` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timesheetEntries.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TimesheetEntriesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Hris WebhookReceivers
<details><summary><code>client.hris.webhookReceivers.<a href="/src/api/resources/hris/resources/webhookReceivers/client/Client.ts">list</a>() -> Merge.WebhookReceiver[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `WebhookReceiver` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.webhookReceivers.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.hris.webhookReceivers.<a href="/src/api/resources/hris/resources/webhookReceivers/client/Client.ts">create</a>({ ...params }) -> Merge.WebhookReceiver</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `WebhookReceiver` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.webhookReceivers.create({
    event: "event",
    isActive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.hris.WebhookReceiverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing AccountDetails
<details><summary><code>client.ticketing.accountDetails.<a href="/src/api/resources/ticketing/resources/accountDetails/client/Client.ts">retrieve</a>() -> Merge.AccountDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details for a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.accountDetails.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountDetailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing AccountToken
<details><summary><code>client.ticketing.accountToken.<a href="/src/api/resources/ticketing/resources/accountToken/client/Client.ts">retrieve</a>(public_token) -> Merge.AccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the account token for the end user with the provided public token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.accountToken.retrieve("public_token");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**public_token:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.accountToken.<a href="/src/api/resources/ticketing/resources/accountToken/client/Client.ts">regenerateCreate</a>() -> Merge.RegenerateAccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange Linked Account account tokens.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.accountToken.regenerateCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Accounts
<details><summary><code>client.ticketing.accounts.<a href="/src/api/resources/ticketing/resources/accounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Account, Merge.PaginatedAccountList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Account` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.accounts.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.accounts.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.AccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.accounts.<a href="/src/api/resources/ticketing/resources/accounts/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Account</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Account` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.accounts.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.AccountsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing AsyncPassthrough
<details><summary><code>client.ticketing.asyncPassthrough.<a href="/src/api/resources/ticketing/resources/asyncPassthrough/client/Client.ts">create</a>({ ...params }) -> Merge.AsyncPassthroughReciept</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.asyncPassthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.asyncPassthrough.<a href="/src/api/resources/ticketing/resources/asyncPassthrough/client/Client.ts">retrieve</a>(async_passthrough_receipt_id) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves data from earlier async-passthrough POST request
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.asyncPassthrough.retrieve("async_passthrough_receipt_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**async_passthrough_receipt_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Attachments
<details><summary><code>client.ticketing.attachments.<a href="/src/api/resources/ticketing/resources/attachments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Attachment, Merge.PaginatedAttachmentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Attachment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.attachments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id",
    ticketId: "ticket_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.attachments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id",
    ticketId: "ticket_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.AttachmentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.attachments.<a href="/src/api/resources/ticketing/resources/attachments/client/Client.ts">create</a>({ ...params }) -> Merge.TicketingAttachmentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Attachment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.attachments.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TicketingAttachmentEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.attachments.<a href="/src/api/resources/ticketing/resources/attachments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Attachment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Attachment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.attachments.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.AttachmentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.attachments.<a href="/src/api/resources/ticketing/resources/attachments/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `TicketingAttachment` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.attachments.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AttachmentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing AuditTrail
<details><summary><code>client.ticketing.auditTrail.<a href="/src/api/resources/ticketing/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AuditLogEvent, Merge.PaginatedAuditLogEventList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of audit trail events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.AuditTrailListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditTrailClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing AvailableActions
<details><summary><code>client.ticketing.availableActions.<a href="/src/api/resources/ticketing/resources/availableActions/client/Client.ts">retrieve</a>() -> Merge.AvailableActions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of models and actions available for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.availableActions.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AvailableActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Collections
<details><summary><code>client.ticketing.collections.<a href="/src/api/resources/ticketing/resources/collections/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Collection, Merge.PaginatedCollectionList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Collection` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.collections.list({
    collectionType: "",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    parentCollectionId: "parent_collection_id",
    remoteFields: "collection_type",
    remoteId: "remote_id",
    showEnumOrigins: "collection_type"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.collections.list({
    collectionType: "",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    parentCollectionId: "parent_collection_id",
    remoteFields: "collection_type",
    remoteId: "remote_id",
    showEnumOrigins: "collection_type"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.CollectionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.collections.<a href="/src/api/resources/ticketing/resources/collections/client/Client.ts">viewersList</a>(collection_id, { ...params }) -> core.Page<Merge.Viewer, Merge.PaginatedViewerList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Viewer` objects that point to a User id or Team id that is either an assignee or viewer on a `Collection` with the given id. [Learn more.](https://help.merge.dev/en/articles/10333658-ticketing-access-control-list-acls)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.collections.viewersList("collection_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.collections.viewersList("collection_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collection_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.CollectionsViewersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.collections.<a href="/src/api/resources/ticketing/resources/collections/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Collection</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Collection` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.collections.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true,
    remoteFields: "collection_type",
    showEnumOrigins: "collection_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.CollectionsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CollectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Comments
<details><summary><code>client.ticketing.comments.<a href="/src/api/resources/ticketing/resources/comments/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Comment, Merge.PaginatedCommentList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Comment` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.comments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id",
    ticketId: "ticket_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.comments.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id",
    ticketId: "ticket_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.CommentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.comments.<a href="/src/api/resources/ticketing/resources/comments/client/Client.ts">create</a>({ ...params }) -> Merge.CommentResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Comment` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.comments.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.CommentEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.comments.<a href="/src/api/resources/ticketing/resources/comments/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Comment</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Comment` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.comments.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.CommentsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.comments.<a href="/src/api/resources/ticketing/resources/comments/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Comment` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.comments.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Contacts
<details><summary><code>client.ticketing.contacts.<a href="/src/api/resources/ticketing/resources/contacts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Contact, Merge.PaginatedContactList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Contact` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.contacts.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.contacts.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ContactsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.contacts.<a href="/src/api/resources/ticketing/resources/contacts/client/Client.ts">create</a>({ ...params }) -> Merge.TicketingContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Contact` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.contacts.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TicketingContactEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.contacts.<a href="/src/api/resources/ticketing/resources/contacts/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Contact</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Contact` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.contacts.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.ContactsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.contacts.<a href="/src/api/resources/ticketing/resources/contacts/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `TicketingContact` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.contacts.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ContactsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Scopes
<details><summary><code>client.ticketing.scopes.<a href="/src/api/resources/ticketing/resources/scopes/client/Client.ts">defaultScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.scopes.defaultScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.scopes.<a href="/src/api/resources/ticketing/resources/scopes/client/Client.ts">linkedAccountScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.scopes.linkedAccountScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.scopes.<a href="/src/api/resources/ticketing/resources/scopes/client/Client.ts">linkedAccountScopesCreate</a>({ ...params }) -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.scopes.linkedAccountScopesCreate({
    commonModels: [{
            modelName: "Employee",
            modelPermissions: {
                "READ": {
                    isEnabled: true
                },
                "WRITE": {
                    isEnabled: false
                }
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"]
            }
        }, {
            modelName: "Benefit",
            modelPermissions: {
                "WRITE": {
                    isEnabled: false
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.LinkedAccountCommonModelScopeDeserializerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing DeleteAccount
<details><summary><code>client.ticketing.deleteAccount.<a href="/src/api/resources/ticketing/resources/deleteAccount/client/Client.ts">delete</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.deleteAccount.delete();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DeleteAccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing FieldMapping
<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">fieldMappingsRetrieve</a>({ ...params }) -> Merge.FieldMappingApiInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.fieldMapping.fieldMappingsRetrieve({
    excludeRemoteFieldMetadata: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.FieldMappingsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">fieldMappingsCreate</a>({ ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.fieldMapping.fieldMappingsCreate({
    excludeRemoteFieldMetadata: true,
    remoteDataIterationCount: 1,
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.CreateFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(field_mapping_id) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.fieldMapping.fieldMappingsDestroy("field_mapping_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(field_mapping_id, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id", {
    remoteDataIterationCount: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.PatchedEditFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">remoteFieldsRetrieve</a>({ ...params }) -> Merge.RemoteFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.fieldMapping.remoteFieldsRetrieve({
    commonModels: "common_models",
    includeExampleValues: "include_example_values"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.RemoteFieldsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">targetFieldsRetrieve</a>() -> Merge.ExternalTargetFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.fieldMapping.targetFieldsRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing GenerateKey
<details><summary><code>client.ticketing.generateKey.<a href="/src/api/resources/ticketing/resources/generateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a remote key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.generateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.GenerateRemoteKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Issues
<details><summary><code>client.ticketing.issues.<a href="/src/api/resources/ticketing/resources/issues/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Issue, Merge.PaginatedIssueList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all issues for Organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.IssuesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.issues.<a href="/src/api/resources/ticketing/resources/issues/client/Client.ts">retrieve</a>(id) -> Merge.Issue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.issues.retrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing LinkToken
<details><summary><code>client.ticketing.linkToken.<a href="/src/api/resources/ticketing/resources/linkToken/client/Client.ts">create</a>({ ...params }) -> Merge.LinkToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link token to be used when linking a new end user. The link token expires after single use.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.linkToken.create({
    endUserEmailAddress: "example@gmail.com",
    endUserOrganizationName: "Test Organization",
    endUserOriginId: "12345",
    categories: ["hris", "ats"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.EndUserDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing LinkedAccounts
<details><summary><code>client.ticketing.linkedAccounts.<a href="/src/api/resources/ticketing/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountDetailsAndActions, Merge.PaginatedAccountDetailsAndActionsList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List linked accounts for your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.LinkedAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Passthrough
<details><summary><code>client.ticketing.passthrough.<a href="/src/api/resources/ticketing/resources/passthrough/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.passthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Projects
<details><summary><code>client.ticketing.projects.<a href="/src/api/resources/ticketing/resources/projects/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Project, Merge.PaginatedProjectList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Project` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.projects.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.projects.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ProjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.projects.<a href="/src/api/resources/ticketing/resources/projects/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Project</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Project` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.projects.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.ProjectsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.projects.<a href="/src/api/resources/ticketing/resources/projects/client/Client.ts">usersList</a>(parent_id, { ...params }) -> core.Page<Merge.User, Merge.PaginatedUserList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `User` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.projects.usersList("parent_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.projects.usersList("parent_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**parent_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.ProjectsUsersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing RegenerateKey
<details><summary><code>client.ticketing.regenerateKey.<a href="/src/api/resources/ticketing/resources/regenerateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange remote keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.regenerateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.RemoteKeyForRegenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Roles
<details><summary><code>client.ticketing.roles.<a href="/src/api/resources/ticketing/resources/roles/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Role, Merge.PaginatedRoleList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Role` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.roles.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.roles.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.RolesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.roles.<a href="/src/api/resources/ticketing/resources/roles/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Role</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Role` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.roles.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.RolesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RolesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing SyncStatus
<details><summary><code>client.ticketing.syncStatus.<a href="/src/api/resources/ticketing/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.SyncStatus, Merge.PaginatedSyncStatusList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sync status for the current sync and the most recently finished sync. `last_sync_start` represents the most recent time any sync began. `last_sync_finished` represents the most recent time any sync completed. These timestamps may correspond to different sync instances which may result in a sync start time being later than a separate sync completed time. To ensure you are retrieving the latest available data reference the `last_sync_finished` timestamp where `last_sync_result` is `DONE`. Possible values for `status` and `last_sync_result` are `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.SyncStatusListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncStatusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing ForceResync
<details><summary><code>client.ticketing.forceResync.<a href="/src/api/resources/ticketing/resources/forceResync/client/Client.ts">syncStatusResyncCreate</a>() -> Merge.SyncStatus[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Force re-sync of all models. This endpoint is available for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. Force re-syncs can also be triggered manually in the Merge Dashboard and is available for all customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.forceResync.syncStatusResyncCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ForceResyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Tags
<details><summary><code>client.ticketing.tags.<a href="/src/api/resources/ticketing/resources/tags/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Tag, Merge.PaginatedTagList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Tag` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.tags.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.tags.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TagsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tags.<a href="/src/api/resources/ticketing/resources/tags/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Tag</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Tag` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tags.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.TagsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Teams
<details><summary><code>client.ticketing.teams.<a href="/src/api/resources/ticketing/resources/teams/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Team, Merge.PaginatedTeamList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Team` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.teams.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.teams.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TeamsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.teams.<a href="/src/api/resources/ticketing/resources/teams/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Team</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Team` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.teams.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.TeamsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Tickets
<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Ticket, Merge.PaginatedTicketList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Ticket` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.tickets.list({
    accountId: "account_id",
    assigneeIds: "assignee_ids",
    collectionIds: "collection_ids",
    completedAfter: new Date("2024-01-15T09:30:00.000Z"),
    completedBefore: new Date("2024-01-15T09:30:00.000Z"),
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    creatorId: "creator_id",
    creatorIds: "creator_ids",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    dueAfter: new Date("2024-01-15T09:30:00.000Z"),
    dueBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    parentTicketId: "parent_ticket_id",
    priority: "HIGH",
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteCreatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    remoteFields: "priority",
    remoteId: "remote_id",
    remoteIds: "remote_ids",
    remoteUpdatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteUpdatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    showEnumOrigins: "priority",
    status: "",
    tags: "tags",
    ticketType: "ticket_type",
    ticketUrl: "ticket_url"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.tickets.list({
    accountId: "account_id",
    assigneeIds: "assignee_ids",
    collectionIds: "collection_ids",
    completedAfter: new Date("2024-01-15T09:30:00.000Z"),
    completedBefore: new Date("2024-01-15T09:30:00.000Z"),
    contactId: "contact_id",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    creatorId: "creator_id",
    creatorIds: "creator_ids",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    dueAfter: new Date("2024-01-15T09:30:00.000Z"),
    dueBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeDeletedData: true,
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    parentTicketId: "parent_ticket_id",
    priority: "HIGH",
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteCreatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    remoteFields: "priority",
    remoteId: "remote_id",
    remoteIds: "remote_ids",
    remoteUpdatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteUpdatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    showEnumOrigins: "priority",
    status: "",
    tags: "tags",
    ticketType: "ticket_type",
    ticketUrl: "ticket_url"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TicketsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">create</a>({ ...params }) -> Merge.TicketResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Ticket` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TicketEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Ticket</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Ticket` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.retrieve("id", {
    includeRemoteData: true,
    includeRemoteFields: true,
    includeShellData: true,
    remoteFields: "priority",
    showEnumOrigins: "priority"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.TicketsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.TicketResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `Ticket` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.partialUpdate("id", {
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.PatchedTicketEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">viewersList</a>(ticket_id, { ...params }) -> core.Page<Merge.Viewer, Merge.PaginatedViewerList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Viewer` objects that point to a User id or Team id that is either an assignee or viewer on a `Ticket` with the given id. [Learn more.](https://help.merge.dev/en/articles/10333658-ticketing-access-control-list-acls)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.tickets.viewersList("ticket_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.tickets.viewersList("ticket_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**ticket_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.TicketsViewersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">metaPatchRetrieve</a>(id) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Ticket` PATCHs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.metaPatchRetrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">metaPostRetrieve</a>({ ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Ticket` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.metaPostRetrieve({
    collectionId: "collection_id",
    ticketType: "ticket_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TicketsMetaPostRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> core.Page<Merge.RemoteFieldClass, Merge.PaginatedRemoteFieldClassList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.tickets.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    ids: "ids",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.tickets.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    ids: "ids",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isCommonModelField: true,
    isCustom: true,
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.TicketsRemoteFieldClassesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TicketsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing Users
<details><summary><code>client.ticketing.users.<a href="/src/api/resources/ticketing/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.User, Merge.PaginatedUserList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `User` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.ticketing.users.list({
    collections: "collections",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    roles: "roles",
    team: "team",
    teams: "teams"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.ticketing.users.list({
    collections: "collections",
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id",
    roles: "roles",
    team: "team",
    teams: "teams"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.UsersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.users.<a href="/src/api/resources/ticketing/resources/users/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `User` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.users.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.UsersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Ticketing WebhookReceivers
<details><summary><code>client.ticketing.webhookReceivers.<a href="/src/api/resources/ticketing/resources/webhookReceivers/client/Client.ts">list</a>() -> Merge.WebhookReceiver[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `WebhookReceiver` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.webhookReceivers.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.ticketing.webhookReceivers.<a href="/src/api/resources/ticketing/resources/webhookReceivers/client/Client.ts">create</a>({ ...params }) -> Merge.WebhookReceiver</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `WebhookReceiver` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.webhookReceivers.create({
    event: "event",
    isActive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.WebhookReceiverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage AccountDetails
<details><summary><code>client.filestorage.accountDetails.<a href="/src/api/resources/filestorage/resources/accountDetails/client/Client.ts">retrieve</a>() -> Merge.AccountDetails</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get details for a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.accountDetails.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountDetailsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage AccountToken
<details><summary><code>client.filestorage.accountToken.<a href="/src/api/resources/filestorage/resources/accountToken/client/Client.ts">retrieve</a>(public_token) -> Merge.AccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the account token for the end user with the provided public token.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.accountToken.retrieve("public_token");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**public_token:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.accountToken.<a href="/src/api/resources/filestorage/resources/accountToken/client/Client.ts">regenerateCreate</a>() -> Merge.RegenerateAccountToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange Linked Account account tokens.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.accountToken.regenerateCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AccountTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage AsyncPassthrough
<details><summary><code>client.filestorage.asyncPassthrough.<a href="/src/api/resources/filestorage/resources/asyncPassthrough/client/Client.ts">create</a>({ ...params }) -> Merge.AsyncPassthroughReciept</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Asynchronously pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.asyncPassthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.asyncPassthrough.<a href="/src/api/resources/filestorage/resources/asyncPassthrough/client/Client.ts">retrieve</a>(async_passthrough_receipt_id) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Retrieves data from earlier async-passthrough POST request
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.asyncPassthrough.retrieve("async_passthrough_receipt_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**async_passthrough_receipt_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage AuditTrail
<details><summary><code>client.filestorage.auditTrail.<a href="/src/api/resources/filestorage/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AuditLogEvent, Merge.PaginatedAuditLogEventList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets a list of audit trail events.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    eventType: "event_type",
    pageSize: 1,
    startDate: "start_date",
    userEmail: "user_email"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.AuditTrailListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AuditTrailClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage AvailableActions
<details><summary><code>client.filestorage.availableActions.<a href="/src/api/resources/filestorage/resources/availableActions/client/Client.ts">retrieve</a>() -> Merge.AvailableActions</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of models and actions available for an account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.availableActions.retrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `AvailableActionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Scopes
<details><summary><code>client.filestorage.scopes.<a href="/src/api/resources/filestorage/resources/scopes/client/Client.ts">defaultScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get the default permissions for Merge Common Models and fields across all Linked Accounts of a given category. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.scopes.defaultScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.scopes.<a href="/src/api/resources/filestorage/resources/scopes/client/Client.ts">linkedAccountScopesRetrieve</a>() -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all available permissions for Merge Common Models and fields for a single Linked Account. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.scopes.linkedAccountScopesRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.scopes.<a href="/src/api/resources/filestorage/resources/scopes/client/Client.ts">linkedAccountScopesCreate</a>({ ...params }) -> Merge.CommonModelScopeApi</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update permissions for any Common Model or field for a single Linked Account. Any Scopes not set in this POST request will inherit the default Scopes. [Learn more](https://help.merge.dev/en/articles/5950052-common-model-and-field-scopes)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.scopes.linkedAccountScopesCreate({
    commonModels: [{
            modelName: "Employee",
            modelPermissions: {
                "READ": {
                    isEnabled: true
                },
                "WRITE": {
                    isEnabled: false
                }
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"]
            }
        }, {
            modelName: "Benefit",
            modelPermissions: {
                "WRITE": {
                    isEnabled: false
                }
            }
        }]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.LinkedAccountCommonModelScopeDeserializerRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ScopesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage DeleteAccount
<details><summary><code>client.filestorage.deleteAccount.<a href="/src/api/resources/filestorage/resources/deleteAccount/client/Client.ts">delete</a>() -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a linked account.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.deleteAccount.delete();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `DeleteAccountClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Drives
<details><summary><code>client.filestorage.drives.<a href="/src/api/resources/filestorage/resources/drives/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Drive, Merge.PaginatedDriveList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Drive` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.drives.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.drives.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.DrivesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DrivesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.drives.<a href="/src/api/resources/filestorage/resources/drives/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Drive</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Drive` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.drives.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.DrivesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DrivesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage FieldMapping
<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">fieldMappingsRetrieve</a>({ ...params }) -> Merge.FieldMappingApiInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all Field Mappings for this Linked Account. Field Mappings are mappings between third-party Remote Fields and user defined Merge fields. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.fieldMapping.fieldMappingsRetrieve({
    excludeRemoteFieldMetadata: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.FieldMappingsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">fieldMappingsCreate</a>({ ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create new Field Mappings that will be available after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.fieldMapping.fieldMappingsCreate({
    excludeRemoteFieldMetadata: true,
    remoteDataIterationCount: 1,
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.CreateFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(field_mapping_id) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Deletes Field Mappings for a Linked Account. All data related to this Field Mapping will be deleted and these changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.fieldMapping.fieldMappingsDestroy("field_mapping_id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(field_mapping_id, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create or update existing Field Mappings for a Linked Account. Changes will be reflected after the next scheduled sync. This will cause the next sync for this Linked Account to sync **ALL** data from start.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id", {
    remoteDataIterationCount: 1
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**field_mapping_id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.PatchedEditFieldMappingRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">remoteFieldsRetrieve</a>({ ...params }) -> Merge.RemoteFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all remote fields for a Linked Account. Remote fields are third-party fields that are accessible after initial sync if remote_data is enabled. You can use remote fields to override existing Merge fields or map a new Merge field. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/overview/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.fieldMapping.remoteFieldsRetrieve({
    commonModels: "common_models",
    includeExampleValues: "include_example_values"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.RemoteFieldsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">targetFieldsRetrieve</a>() -> Merge.ExternalTargetFieldApiResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get all organization-wide Target Fields, this will not include any Linked Account specific Target Fields. Organization-wide Target Fields are additional fields appended to the Merge Common Model for all Linked Accounts in a category. [Learn more](https://docs.merge.dev/supplemental-data/field-mappings/target-fields/).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.fieldMapping.targetFieldsRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FieldMappingClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Files
<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.File_, Merge.PaginatedFileList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `File` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.files.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    driveId: "drive_id",
    folderId: "folder_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    mimeType: "mime_type",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    orderBy: "-created_at",
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteCreatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.files.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    driveId: "drive_id",
    folderId: "folder_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    mimeType: "mime_type",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    orderBy: "-created_at",
    pageSize: 1,
    remoteCreatedAfter: new Date("2024-01-15T09:30:00.000Z"),
    remoteCreatedBefore: new Date("2024-01-15T09:30:00.000Z"),
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.FilesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">create</a>({ ...params }) -> Merge.FileStorageFileResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `File` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.FileStorageFileEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.File_</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `File` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.FilesRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">downloadRequestMetaRetrieve</a>(id, { ...params }) -> Merge.DownloadRequestMeta</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata to construct an authenticated file download request for a singular file, allowing you to download file directly from the third-party. For information on our download process please refer to our <a href='https://help.merge.dev/articles/10644317' target='_blank'>direct file download help center article</a>.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.downloadRequestMetaRetrieve("id", {
    mimeType: "mime_type"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.FilesDownloadRequestMetaRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">downloadRequestMetaList</a>({ ...params }) -> core.Page<Merge.DownloadRequestMeta, Merge.PaginatedDownloadRequestMetaList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata to construct authenticated file download requests, allowing you to download files directly from the third-party.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.files.downloadRequestMetaList({
    createdAfter: "created_after",
    createdBefore: "created_before",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    mimeTypes: "mime_types",
    modifiedAfter: "modified_after",
    modifiedBefore: "modified_before",
    orderBy: "-created_at",
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.files.downloadRequestMetaList({
    createdAfter: "created_after",
    createdBefore: "created_before",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    mimeTypes: "mime_types",
    modifiedAfter: "modified_after",
    modifiedBefore: "modified_before",
    orderBy: "-created_at",
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.FilesDownloadRequestMetaListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `FileStorageFile` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FilesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Folders
<details><summary><code>client.filestorage.folders.<a href="/src/api/resources/filestorage/resources/folders/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Folder, Merge.PaginatedFolderList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Folder` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.folders.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    driveId: "drive_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    parentFolderId: "parent_folder_id",
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.folders.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    driveId: "drive_id",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    name: "name",
    pageSize: 1,
    parentFolderId: "parent_folder_id",
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.FoldersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.folders.<a href="/src/api/resources/filestorage/resources/folders/client/Client.ts">create</a>({ ...params }) -> Merge.FileStorageFolderResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `Folder` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.folders.create({
    isDebugMode: true,
    runAsync: true,
    model: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.FileStorageFolderEndpointRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.folders.<a href="/src/api/resources/filestorage/resources/folders/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Folder</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Folder` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.folders.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.FoldersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.folders.<a href="/src/api/resources/filestorage/resources/folders/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `FileStorageFolder` POSTs.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.folders.metaPostRetrieve();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `FoldersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage GenerateKey
<details><summary><code>client.filestorage.generateKey.<a href="/src/api/resources/filestorage/resources/generateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a remote key.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.generateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.GenerateRemoteKeyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Groups
<details><summary><code>client.filestorage.groups.<a href="/src/api/resources/filestorage/resources/groups/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Group, Merge.PaginatedGroupList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Group` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.groups.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.groups.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.GroupsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.groups.<a href="/src/api/resources/filestorage/resources/groups/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Group</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Group` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.groups.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.GroupsRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Issues
<details><summary><code>client.filestorage.issues.<a href="/src/api/resources/filestorage/resources/issues/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.Issue, Merge.PaginatedIssueList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Gets all issues for Organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.issues.list({
    accountToken: "account_token",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endDate: "end_date",
    endUserOrganizationName: "end_user_organization_name",
    firstIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    firstIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    includeMuted: "include_muted",
    integrationName: "integration_name",
    lastIncidentTimeAfter: new Date("2024-01-15T09:30:00.000Z"),
    lastIncidentTimeBefore: new Date("2024-01-15T09:30:00.000Z"),
    linkedAccountId: "linked_account_id",
    pageSize: 1,
    startDate: "start_date",
    status: "ONGOING"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.IssuesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.issues.<a href="/src/api/resources/filestorage/resources/issues/client/Client.ts">retrieve</a>(id) -> Merge.Issue</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get a specific issue.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.issues.retrieve("id");

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `IssuesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage LinkToken
<details><summary><code>client.filestorage.linkToken.<a href="/src/api/resources/filestorage/resources/linkToken/client/Client.ts">create</a>({ ...params }) -> Merge.LinkToken</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a link token to be used when linking a new end user. The link token expires after single use.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.linkToken.create({
    endUserEmailAddress: "example@gmail.com",
    endUserOrganizationName: "Test Organization",
    endUserOriginId: "12345",
    categories: ["hris", "ats"]
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.EndUserDetailsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkTokenClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage LinkedAccounts
<details><summary><code>client.filestorage.linkedAccounts.<a href="/src/api/resources/filestorage/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.AccountDetailsAndActions, Merge.PaginatedAccountDetailsAndActionsList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List linked accounts for your organization.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.linkedAccounts.list({
    category: "accounting",
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    endUserEmailAddress: "end_user_email_address",
    endUserOrganizationName: "end_user_organization_name",
    endUserOriginId: "end_user_origin_id",
    endUserOriginIds: "end_user_origin_ids",
    id: "id",
    ids: "ids",
    includeDuplicates: true,
    integrationName: "integration_name",
    isTestAccount: "is_test_account",
    pageSize: 1,
    status: "status"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.LinkedAccountsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LinkedAccountsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Passthrough
<details><summary><code>client.filestorage.passthrough.<a href="/src/api/resources/filestorage/resources/passthrough/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Pull data from an endpoint not currently supported by Merge.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.passthrough.create({
    method: "GET",
    path: "/scooters"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.DataPassthroughRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PassthroughClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage RegenerateKey
<details><summary><code>client.filestorage.regenerateKey.<a href="/src/api/resources/filestorage/resources/regenerateKey/client/Client.ts">create</a>({ ...params }) -> Merge.RemoteKey</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Exchange remote keys.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.regenerateKey.create({
    name: "Remote Deployment Key 1"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.RemoteKeyForRegenerationRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RegenerateKeyClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage SyncStatus
<details><summary><code>client.filestorage.syncStatus.<a href="/src/api/resources/filestorage/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.SyncStatus, Merge.PaginatedSyncStatusList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get sync status for the current sync and the most recently finished sync. `last_sync_start` represents the most recent time any sync began. `last_sync_finished` represents the most recent time any sync completed. These timestamps may correspond to different sync instances which may result in a sync start time being later than a separate sync completed time. To ensure you are retrieving the latest available data reference the `last_sync_finished` timestamp where `last_sync_result` is `DONE`. Possible values for `status` and `last_sync_result` are `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    pageSize: 1
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.SyncStatusListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SyncStatusClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage ForceResync
<details><summary><code>client.filestorage.forceResync.<a href="/src/api/resources/filestorage/resources/forceResync/client/Client.ts">syncStatusResyncCreate</a>() -> Merge.SyncStatus[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Force re-sync of all models. This endpoint is available for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account. Force re-syncs can also be triggered manually in the Merge Dashboard and is available for all customers.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.forceResync.syncStatusResyncCreate();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `ForceResyncClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage Users
<details><summary><code>client.filestorage.users.<a href="/src/api/resources/filestorage/resources/users/client/Client.ts">list</a>({ ...params }) -> core.Page<Merge.User, Merge.PaginatedUserList></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `User` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const pageableResponse = await client.filestorage.users.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isMe: "is_me",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
for await (const item of pageableResponse) {
    console.log(item);
}

// Or you can manually iterate page-by-page
let page = await client.filestorage.users.list({
    createdAfter: new Date("2024-01-15T09:30:00.000Z"),
    createdBefore: new Date("2024-01-15T09:30:00.000Z"),
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
    emailAddress: "email_address",
    includeDeletedData: true,
    includeRemoteData: true,
    includeShellData: true,
    isMe: "is_me",
    modifiedAfter: new Date("2024-01-15T09:30:00.000Z"),
    modifiedBefore: new Date("2024-01-15T09:30:00.000Z"),
    pageSize: 1,
    remoteId: "remote_id"
});
while (page.hasNextPage()) {
    page = page.getNextPage();
}

// You can also access the underlying response
const response = page.response;

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.UsersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.users.<a href="/src/api/resources/filestorage/resources/users/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.User</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `User` object with the given `id`.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.users.retrieve("id", {
    includeRemoteData: true,
    includeShellData: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` 
    
</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.UsersRetrieveRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Filestorage WebhookReceivers
<details><summary><code>client.filestorage.webhookReceivers.<a href="/src/api/resources/filestorage/resources/webhookReceivers/client/Client.ts">list</a>() -> Merge.WebhookReceiver[]</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `WebhookReceiver` objects.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.webhookReceivers.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.filestorage.webhookReceivers.<a href="/src/api/resources/filestorage/resources/webhookReceivers/client/Client.ts">create</a>({ ...params }) -> Merge.WebhookReceiver</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a `WebhookReceiver` object with the given values.
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.webhookReceivers.create({
    event: "event",
    isActive: true
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.WebhookReceiverRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `WebhookReceiversClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
