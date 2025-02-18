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

**requestOptions:** `AccountDetails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats AccountToken

<details><summary><code>client.ats.accountToken.<a href="/src/api/resources/ats/resources/accountToken/client/Client.ts">retrieve</a>(publicToken) -> Merge.AccountToken</code></summary>
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

**publicToken:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Activities

<details><summary><code>client.ats.activities.<a href="/src/api/resources/ats/resources/activities/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedActivityList</code></summary>
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
await client.ats.activities.list();
```

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

**requestOptions:** `Activities.RequestOptions`

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
    model: {},
    remoteUserId: "remote_user_id",
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

**requestOptions:** `Activities.RequestOptions`

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
await client.ats.activities.retrieve("id");
```

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

**requestOptions:** `Activities.RequestOptions`

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

**requestOptions:** `Activities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Applications

<details><summary><code>client.ats.applications.<a href="/src/api/resources/ats/resources/applications/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedApplicationList</code></summary>
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
await client.ats.applications.list();
```

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

**requestOptions:** `Applications.RequestOptions`

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
    model: {},
    remoteUserId: "remote_user_id",
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

**requestOptions:** `Applications.RequestOptions`

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
await client.ats.applications.retrieve("id");
```

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

**requestOptions:** `Applications.RequestOptions`

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
await client.ats.applications.changeStageCreate("id");
```

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

**requestOptions:** `Applications.RequestOptions`

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
await client.ats.applications.metaPostRetrieve();
```

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

**requestOptions:** `Applications.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ats.asyncPassthrough.<a href="/src/api/resources/ats/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
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

**asyncPassthroughReceiptId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Attachments

<details><summary><code>client.ats.attachments.<a href="/src/api/resources/ats/resources/attachments/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAttachmentList</code></summary>
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
await client.ats.attachments.list();
```

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

**requestOptions:** `Attachments.RequestOptions`

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
    model: {},
    remoteUserId: "remote_user_id",
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

**requestOptions:** `Attachments.RequestOptions`

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
await client.ats.attachments.retrieve("id");
```

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

**requestOptions:** `Attachments.RequestOptions`

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

**requestOptions:** `Attachments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats AuditTrail

<details><summary><code>client.ats.auditTrail.<a href="/src/api/resources/ats/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAuditLogEventList</code></summary>
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
await client.ats.auditTrail.list();
```

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

**requestOptions:** `AuditTrail.RequestOptions`

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

**requestOptions:** `AvailableActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Candidates

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCandidateList</code></summary>
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
await client.ats.candidates.list();
```

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

**requestOptions:** `Candidates.RequestOptions`

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
    model: {},
    remoteUserId: "remote_user_id",
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

**requestOptions:** `Candidates.RequestOptions`

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
await client.ats.candidates.retrieve("id");
```

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

**requestOptions:** `Candidates.RequestOptions`

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
    model: {},
    remoteUserId: "remote_user_id",
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

**requestOptions:** `Candidates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">ignoreCreate</a>(modelId, { ...params }) -> void</code></summary>
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
    reason: "GENERAL_CUSTOMER_REQUEST",
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

**modelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.IgnoreCommonModelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Candidates.RequestOptions`

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

**requestOptions:** `Candidates.RequestOptions`

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

**requestOptions:** `Candidates.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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
    commonModels: [
        {
            modelName: "Employee",
            modelPermissions: {
                READ: {
                    isEnabled: true,
                },
                WRITE: {
                    isEnabled: false,
                },
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"],
            },
        },
        {
            modelName: "Benefit",
            modelPermissions: {
                WRITE: {
                    isEnabled: false,
                },
            },
        },
    ],
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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `DeleteAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Departments

<details><summary><code>client.ats.departments.<a href="/src/api/resources/ats/resources/departments/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedDepartmentList</code></summary>
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
await client.ats.departments.list();
```

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

**requestOptions:** `Departments.RequestOptions`

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
await client.ats.departments.retrieve("id");
```

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

**requestOptions:** `Departments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Eeocs

<details><summary><code>client.ats.eeocs.<a href="/src/api/resources/ats/resources/eeocs/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEeocList</code></summary>
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
await client.ats.eeocs.list();
```

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

**requestOptions:** `Eeocs.RequestOptions`

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
await client.ats.eeocs.retrieve("id");
```

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

**requestOptions:** `Eeocs.RequestOptions`

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
await client.ats.fieldMapping.fieldMappingsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel",
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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.ats.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.PatchedEditFieldMappingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

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
await client.ats.fieldMapping.remoteFieldsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `GenerateKey.RequestOptions`

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
await client.ats.interviews.list();
```

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

**requestOptions:** `Interviews.RequestOptions`

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
    model: {},
    remoteUserId: "remote_user_id",
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

**requestOptions:** `Interviews.RequestOptions`

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
await client.ats.interviews.retrieve("id");
```

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

**requestOptions:** `Interviews.RequestOptions`

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

**requestOptions:** `Interviews.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Issues

<details><summary><code>client.ats.issues.<a href="/src/api/resources/ats/resources/issues/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedIssueList</code></summary>
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
await client.ats.issues.list();
```

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

**requestOptions:** `Issues.RequestOptions`

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

**requestOptions:** `Issues.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats JobInterviewStages

<details><summary><code>client.ats.jobInterviewStages.<a href="/src/api/resources/ats/resources/jobInterviewStages/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedJobInterviewStageList</code></summary>
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
await client.ats.jobInterviewStages.list();
```

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

**requestOptions:** `JobInterviewStages.RequestOptions`

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
await client.ats.jobInterviewStages.retrieve("id");
```

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

**requestOptions:** `JobInterviewStages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats JobPostings

<details><summary><code>client.ats.jobPostings.<a href="/src/api/resources/ats/resources/jobPostings/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedJobPostingList</code></summary>
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
await client.ats.jobPostings.list();
```

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

**requestOptions:** `JobPostings.RequestOptions`

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
await client.ats.jobPostings.retrieve("id");
```

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

**requestOptions:** `JobPostings.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Jobs

<details><summary><code>client.ats.jobs.<a href="/src/api/resources/ats/resources/jobs/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedJobList</code></summary>
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
await client.ats.jobs.list();
```

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

**requestOptions:** `Jobs.RequestOptions`

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
await client.ats.jobs.retrieve("id");
```

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

**requestOptions:** `Jobs.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ats.jobs.<a href="/src/api/resources/ats/resources/jobs/client/Client.ts">screeningQuestionsList</a>(jobId, { ...params }) -> Merge.PaginatedScreeningQuestionList</code></summary>
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
await client.ats.jobs.screeningQuestionsList("job_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**jobId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ats.JobsScreeningQuestionsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Jobs.RequestOptions`

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

Creates a link token to be used when linking a new end user.

</dd>
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
    categories: ["hris", "ats"],
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

**requestOptions:** `LinkToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats LinkedAccounts

<details><summary><code>client.ats.linkedAccounts.<a href="/src/api/resources/ats/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountDetailsAndActionsList</code></summary>
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
await client.ats.linkedAccounts.list();
```

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

**requestOptions:** `LinkedAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Offers

<details><summary><code>client.ats.offers.<a href="/src/api/resources/ats/resources/offers/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedOfferList</code></summary>
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
await client.ats.offers.list();
```

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

**requestOptions:** `Offers.RequestOptions`

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
await client.ats.offers.retrieve("id");
```

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

**requestOptions:** `Offers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Offices

<details><summary><code>client.ats.offices.<a href="/src/api/resources/ats/resources/offices/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedOfficeList</code></summary>
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
await client.ats.offices.list();
```

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

**requestOptions:** `Offices.RequestOptions`

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
await client.ats.offices.retrieve("id");
```

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

**requestOptions:** `Offices.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `Passthrough.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `RegenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats RejectReasons

<details><summary><code>client.ats.rejectReasons.<a href="/src/api/resources/ats/resources/rejectReasons/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedRejectReasonList</code></summary>
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
await client.ats.rejectReasons.list();
```

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

**requestOptions:** `RejectReasons.RequestOptions`

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
await client.ats.rejectReasons.retrieve("id");
```

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

**requestOptions:** `RejectReasons.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Scorecards

<details><summary><code>client.ats.scorecards.<a href="/src/api/resources/ats/resources/scorecards/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedScorecardList</code></summary>
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
await client.ats.scorecards.list();
```

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

**requestOptions:** `Scorecards.RequestOptions`

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
await client.ats.scorecards.retrieve("id");
```

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

**requestOptions:** `Scorecards.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats SyncStatus

<details><summary><code>client.ats.syncStatus.<a href="/src/api/resources/ats/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedSyncStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.syncStatus.list();
```

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

**requestOptions:** `SyncStatus.RequestOptions`

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

Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

</dd>
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

**requestOptions:** `ForceResync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Tags

<details><summary><code>client.ats.tags.<a href="/src/api/resources/ats/resources/tags/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTagList</code></summary>
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
await client.ats.tags.list();
```

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

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ats Users

<details><summary><code>client.ats.users.<a href="/src/api/resources/ats/resources/users/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedRemoteUserList</code></summary>
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
await client.ats.users.list();
```

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

**requestOptions:** `Users.RequestOptions`

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
await client.ats.users.retrieve("id");
```

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

**requestOptions:** `Users.RequestOptions`

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

**requestOptions:** `WebhookReceivers.RequestOptions`

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
    isActive: true,
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

**requestOptions:** `WebhookReceivers.RequestOptions`

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

**requestOptions:** `AccountDetails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm AccountToken

<details><summary><code>client.crm.accountToken.<a href="/src/api/resources/crm/resources/accountToken/client/Client.ts">retrieve</a>(publicToken) -> Merge.AccountToken</code></summary>
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

**publicToken:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Accounts

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountList</code></summary>
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
await client.crm.accounts.list();
```

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

**requestOptions:** `Accounts.RequestOptions`

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
    model: {},
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

**requestOptions:** `Accounts.RequestOptions`

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
await client.crm.accounts.retrieve("id");
```

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

**requestOptions:** `Accounts.RequestOptions`

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
    model: {},
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

**requestOptions:** `Accounts.RequestOptions`

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

**requestOptions:** `Accounts.RequestOptions`

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

**requestOptions:** `Accounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.accounts.remoteFieldClassesList();
```

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

**requestOptions:** `Accounts.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.asyncPassthrough.<a href="/src/api/resources/crm/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
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

**asyncPassthroughReceiptId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm AuditTrail

<details><summary><code>client.crm.auditTrail.<a href="/src/api/resources/crm/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAuditLogEventList</code></summary>
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
await client.crm.auditTrail.list();
```

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

**requestOptions:** `AuditTrail.RequestOptions`

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

**requestOptions:** `AvailableActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Contacts

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedContactList</code></summary>
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
await client.crm.contacts.list();
```

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

**requestOptions:** `Contacts.RequestOptions`

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
    model: {},
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

**requestOptions:** `Contacts.RequestOptions`

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
await client.crm.contacts.retrieve("id");
```

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

**requestOptions:** `Contacts.RequestOptions`

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
    model: {},
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

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">ignoreCreate</a>(modelId, { ...params }) -> void</code></summary>
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
    reason: "GENERAL_CUSTOMER_REQUEST",
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

**modelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.IgnoreCommonModelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

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

**requestOptions:** `Contacts.RequestOptions`

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

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.contacts.remoteFieldClassesList();
```

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

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm CustomObjectClasses

<details><summary><code>client.crm.customObjectClasses.<a href="/src/api/resources/crm/resources/customObjectClasses/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCustomObjectClassList</code></summary>
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
await client.crm.customObjectClasses.list();
```

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

**requestOptions:** `CustomObjectClasses.RequestOptions`

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
await client.crm.customObjectClasses.retrieve("id");
```

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

**requestOptions:** `CustomObjectClasses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm AssociationTypes

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesList</a>(customObjectClassId, { ...params }) -> Merge.PaginatedAssociationTypeList</code></summary>
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
await client.crm.associationTypes.customObjectClassesAssociationTypesList("custom_object_class_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customObjectClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesAssociationTypesListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesCreate</a>(customObjectClassId, { ...params }) -> Merge.CrmAssociationTypeResponse</code></summary>
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
    model: {
        sourceObjectClass: {
            id: "id",
            originType: "CUSTOM_OBJECT",
        },
        targetObjectClasses: [
            {
                id: "id",
                originType: "CUSTOM_OBJECT",
            },
        ],
        remoteKeyName: "remote_key_name",
    },
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

**customObjectClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CrmAssociationTypeEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesRetrieve</a>(customObjectClassId, id, { ...params }) -> Merge.AssociationType</code></summary>
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
await client.crm.associationTypes.customObjectClassesAssociationTypesRetrieve("custom_object_class_id", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customObjectClassId:** `string`

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

**requestOptions:** `AssociationTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesMetaPostRetrieve</a>(customObjectClassId) -> Merge.MetaResponse</code></summary>
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

**customObjectClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AssociationTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm CustomObjects

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsList</a>(customObjectClassId, { ...params }) -> Merge.PaginatedCustomObjectList</code></summary>
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
await client.crm.customObjects.customObjectClassesCustomObjectsList("custom_object_class_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customObjectClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsCreate</a>(customObjectClassId, { ...params }) -> Merge.CrmCustomObjectResponse</code></summary>
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
    model: {
        fields: {
            test_field: "hello",
        },
    },
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

**customObjectClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CrmCustomObjectEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsRetrieve</a>(customObjectClassId, id, { ...params }) -> Merge.CustomObject</code></summary>
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
await client.crm.customObjects.customObjectClassesCustomObjectsRetrieve("custom_object_class_id", "id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customObjectClassId:** `string`

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

**requestOptions:** `CustomObjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsMetaPostRetrieve</a>(customObjectClassId) -> Merge.MetaResponse</code></summary>
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

**customObjectClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CustomObjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.customObjects.customObjectClassesCustomObjectsRemoteFieldClassesList();
```

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

**requestOptions:** `CustomObjects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Associations

<details><summary><code>client.crm.associations.<a href="/src/api/resources/crm/resources/associations/client/Client.ts">customObjectClassesCustomObjectsAssociationsList</a>(customObjectClassId, objectId, { ...params }) -> Merge.PaginatedAssociationList</code></summary>
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
await client.crm.associations.customObjectClassesCustomObjectsAssociationsList("custom_object_class_id", "object_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**customObjectClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**objectId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsAssociationsListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Associations.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.associations.<a href="/src/api/resources/crm/resources/associations/client/Client.ts">customObjectClassesCustomObjectsAssociationsUpdate</a>(associationTypeId, sourceClassId, sourceObjectId, targetClassId, targetObjectId, { ...params }) -> Merge.Association</code></summary>
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
await client.crm.associations.customObjectClassesCustomObjectsAssociationsUpdate(
    "association_type_id",
    "source_class_id",
    "source_object_id",
    "target_class_id",
    "target_object_id"
);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**associationTypeId:** `string`

</dd>
</dl>

<dl>
<dd>

**sourceClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**sourceObjectId:** `string`

</dd>
</dl>

<dl>
<dd>

**targetClassId:** `string`

</dd>
</dl>

<dl>
<dd>

**targetObjectId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsAssociationsUpdateRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Associations.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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
    commonModels: [
        {
            modelName: "Employee",
            modelPermissions: {
                READ: {
                    isEnabled: true,
                },
                WRITE: {
                    isEnabled: false,
                },
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"],
            },
        },
        {
            modelName: "Benefit",
            modelPermissions: {
                WRITE: {
                    isEnabled: false,
                },
            },
        },
    ],
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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `DeleteAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm EngagementTypes

<details><summary><code>client.crm.engagementTypes.<a href="/src/api/resources/crm/resources/engagementTypes/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEngagementTypeList</code></summary>
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
await client.crm.engagementTypes.list();
```

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

**requestOptions:** `EngagementTypes.RequestOptions`

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
await client.crm.engagementTypes.retrieve("id");
```

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

**requestOptions:** `EngagementTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.engagementTypes.<a href="/src/api/resources/crm/resources/engagementTypes/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.engagementTypes.remoteFieldClassesList();
```

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

**requestOptions:** `EngagementTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Engagements

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEngagementList</code></summary>
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
await client.crm.engagements.list();
```

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

**requestOptions:** `Engagements.RequestOptions`

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
    model: {},
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

**requestOptions:** `Engagements.RequestOptions`

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
await client.crm.engagements.retrieve("id");
```

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

**requestOptions:** `Engagements.RequestOptions`

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
    model: {},
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

**requestOptions:** `Engagements.RequestOptions`

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

**requestOptions:** `Engagements.RequestOptions`

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

**requestOptions:** `Engagements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.engagements.remoteFieldClassesList();
```

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

**requestOptions:** `Engagements.RequestOptions`

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
await client.crm.fieldMapping.fieldMappingsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel",
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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.crm.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.PatchedEditFieldMappingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

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
await client.crm.fieldMapping.remoteFieldsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `GenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Issues

<details><summary><code>client.crm.issues.<a href="/src/api/resources/crm/resources/issues/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedIssueList</code></summary>
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
await client.crm.issues.list();
```

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

**requestOptions:** `Issues.RequestOptions`

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

**requestOptions:** `Issues.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Leads

<details><summary><code>client.crm.leads.<a href="/src/api/resources/crm/resources/leads/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedLeadList</code></summary>
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
await client.crm.leads.list();
```

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

**requestOptions:** `Leads.RequestOptions`

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
    model: {},
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

**requestOptions:** `Leads.RequestOptions`

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
await client.crm.leads.retrieve("id");
```

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

**requestOptions:** `Leads.RequestOptions`

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

**requestOptions:** `Leads.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.leads.<a href="/src/api/resources/crm/resources/leads/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.leads.remoteFieldClassesList();
```

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

**requestOptions:** `Leads.RequestOptions`

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

Creates a link token to be used when linking a new end user.

</dd>
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
    categories: ["hris", "ats"],
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

**requestOptions:** `LinkToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm LinkedAccounts

<details><summary><code>client.crm.linkedAccounts.<a href="/src/api/resources/crm/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountDetailsAndActionsList</code></summary>
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
await client.crm.linkedAccounts.list();
```

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

**requestOptions:** `LinkedAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Notes

<details><summary><code>client.crm.notes.<a href="/src/api/resources/crm/resources/notes/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedNoteList</code></summary>
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
await client.crm.notes.list();
```

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

**requestOptions:** `Notes.RequestOptions`

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
    model: {},
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

**requestOptions:** `Notes.RequestOptions`

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
await client.crm.notes.retrieve("id");
```

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

**requestOptions:** `Notes.RequestOptions`

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

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.notes.<a href="/src/api/resources/crm/resources/notes/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.notes.remoteFieldClassesList();
```

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

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Opportunities

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedOpportunityList</code></summary>
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
await client.crm.opportunities.list();
```

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

**requestOptions:** `Opportunities.RequestOptions`

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
    model: {},
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

**requestOptions:** `Opportunities.RequestOptions`

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
await client.crm.opportunities.retrieve("id");
```

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

**requestOptions:** `Opportunities.RequestOptions`

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
    model: {},
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

**requestOptions:** `Opportunities.RequestOptions`

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

**requestOptions:** `Opportunities.RequestOptions`

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

**requestOptions:** `Opportunities.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.opportunities.remoteFieldClassesList();
```

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

**requestOptions:** `Opportunities.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `Passthrough.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `RegenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Stages

<details><summary><code>client.crm.stages.<a href="/src/api/resources/crm/resources/stages/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedStageList</code></summary>
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
await client.crm.stages.list();
```

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

**requestOptions:** `Stages.RequestOptions`

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
await client.crm.stages.retrieve("id");
```

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

**requestOptions:** `Stages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.stages.<a href="/src/api/resources/crm/resources/stages/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.stages.remoteFieldClassesList();
```

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

**requestOptions:** `Stages.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm SyncStatus

<details><summary><code>client.crm.syncStatus.<a href="/src/api/resources/crm/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedSyncStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.syncStatus.list();
```

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

**requestOptions:** `SyncStatus.RequestOptions`

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

Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

</dd>
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

**requestOptions:** `ForceResync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Tasks

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTaskList</code></summary>
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
await client.crm.tasks.list();
```

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

**requestOptions:** `Tasks.RequestOptions`

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
    model: {},
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

**requestOptions:** `Tasks.RequestOptions`

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
await client.crm.tasks.retrieve("id");
```

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

**requestOptions:** `Tasks.RequestOptions`

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
    model: {},
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

**requestOptions:** `Tasks.RequestOptions`

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

**requestOptions:** `Tasks.RequestOptions`

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

**requestOptions:** `Tasks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.tasks.remoteFieldClassesList();
```

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

**requestOptions:** `Tasks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Crm Users

<details><summary><code>client.crm.users.<a href="/src/api/resources/crm/resources/users/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedUserList</code></summary>
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
await client.crm.users.list();
```

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

**requestOptions:** `Users.RequestOptions`

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
await client.crm.users.retrieve("id");
```

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

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.users.<a href="/src/api/resources/crm/resources/users/client/Client.ts">ignoreCreate</a>(modelId, { ...params }) -> void</code></summary>
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
    reason: "GENERAL_CUSTOMER_REQUEST",
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

**modelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.IgnoreCommonModelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Users.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.crm.users.<a href="/src/api/resources/crm/resources/users/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.crm.users.remoteFieldClassesList();
```

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

**requestOptions:** `Users.RequestOptions`

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

**requestOptions:** `WebhookReceivers.RequestOptions`

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
    isActive: true,
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

**requestOptions:** `WebhookReceivers.RequestOptions`

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

**requestOptions:** `AccountDetails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage AccountToken

<details><summary><code>client.filestorage.accountToken.<a href="/src/api/resources/filestorage/resources/accountToken/client/Client.ts">retrieve</a>(publicToken) -> Merge.AccountToken</code></summary>
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

**publicToken:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountToken.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.filestorage.asyncPassthrough.<a href="/src/api/resources/filestorage/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
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

**asyncPassthroughReceiptId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage AuditTrail

<details><summary><code>client.filestorage.auditTrail.<a href="/src/api/resources/filestorage/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAuditLogEventList</code></summary>
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
await client.filestorage.auditTrail.list();
```

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

**requestOptions:** `AuditTrail.RequestOptions`

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

**requestOptions:** `AvailableActions.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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
    commonModels: [
        {
            modelName: "Employee",
            modelPermissions: {
                READ: {
                    isEnabled: true,
                },
                WRITE: {
                    isEnabled: false,
                },
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"],
            },
        },
        {
            modelName: "Benefit",
            modelPermissions: {
                WRITE: {
                    isEnabled: false,
                },
            },
        },
    ],
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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `DeleteAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage Drives

<details><summary><code>client.filestorage.drives.<a href="/src/api/resources/filestorage/resources/drives/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedDriveList</code></summary>
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
await client.filestorage.drives.list();
```

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

**requestOptions:** `Drives.RequestOptions`

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
await client.filestorage.drives.retrieve("id");
```

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

**requestOptions:** `Drives.RequestOptions`

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
await client.filestorage.fieldMapping.fieldMappingsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel",
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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.filestorage.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.filestorage.PatchedEditFieldMappingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

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
await client.filestorage.fieldMapping.remoteFieldsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage Files

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedFileList</code></summary>
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
await client.filestorage.files.list();
```

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

**requestOptions:** `Files.RequestOptions`

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
    model: {},
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

**requestOptions:** `Files.RequestOptions`

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
await client.filestorage.files.retrieve("id");
```

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

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">downloadRetrieve</a>(id, { ...params }) -> stream.Readable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the `File` content with the given `id` as a stream of bytes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.downloadRetrieve("string", {
    mimeType: "string",
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

**request:** `Merge.filestorage.FilesDownloadRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Files.RequestOptions`

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

**requestOptions:** `Files.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage Folders

<details><summary><code>client.filestorage.folders.<a href="/src/api/resources/filestorage/resources/folders/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedFolderList</code></summary>
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
await client.filestorage.folders.list();
```

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

**requestOptions:** `Folders.RequestOptions`

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
    model: {},
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

**requestOptions:** `Folders.RequestOptions`

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
await client.filestorage.folders.retrieve("id");
```

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

**requestOptions:** `Folders.RequestOptions`

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

**requestOptions:** `Folders.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `GenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage Groups

<details><summary><code>client.filestorage.groups.<a href="/src/api/resources/filestorage/resources/groups/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedGroupList</code></summary>
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
await client.filestorage.groups.list();
```

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

**requestOptions:** `Groups.RequestOptions`

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
await client.filestorage.groups.retrieve("id");
```

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

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage Issues

<details><summary><code>client.filestorage.issues.<a href="/src/api/resources/filestorage/resources/issues/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedIssueList</code></summary>
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
await client.filestorage.issues.list();
```

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

**requestOptions:** `Issues.RequestOptions`

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

**requestOptions:** `Issues.RequestOptions`

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

Creates a link token to be used when linking a new end user.

</dd>
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
    categories: ["hris", "ats"],
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

**requestOptions:** `LinkToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage LinkedAccounts

<details><summary><code>client.filestorage.linkedAccounts.<a href="/src/api/resources/filestorage/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountDetailsAndActionsList</code></summary>
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
await client.filestorage.linkedAccounts.list();
```

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

**requestOptions:** `LinkedAccounts.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `Passthrough.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `RegenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage SyncStatus

<details><summary><code>client.filestorage.syncStatus.<a href="/src/api/resources/filestorage/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedSyncStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.syncStatus.list();
```

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

**requestOptions:** `SyncStatus.RequestOptions`

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

Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

</dd>
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

**requestOptions:** `ForceResync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage Users

<details><summary><code>client.filestorage.users.<a href="/src/api/resources/filestorage/resources/users/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedUserList</code></summary>
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
await client.filestorage.users.list();
```

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

**requestOptions:** `Users.RequestOptions`

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
await client.filestorage.users.retrieve("id");
```

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

**requestOptions:** `Users.RequestOptions`

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

**requestOptions:** `WebhookReceivers.RequestOptions`

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
    isActive: true,
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

**requestOptions:** `WebhookReceivers.RequestOptions`

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

**requestOptions:** `AccountDetails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris AccountToken

<details><summary><code>client.hris.accountToken.<a href="/src/api/resources/hris/resources/accountToken/client/Client.ts">retrieve</a>(publicToken) -> Merge.AccountToken</code></summary>
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

**publicToken:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountToken.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.asyncPassthrough.<a href="/src/api/resources/hris/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
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

**asyncPassthroughReceiptId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris AuditTrail

<details><summary><code>client.hris.auditTrail.<a href="/src/api/resources/hris/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAuditLogEventList</code></summary>
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
await client.hris.auditTrail.list();
```

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

**requestOptions:** `AuditTrail.RequestOptions`

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

**requestOptions:** `AvailableActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris BankInfo

<details><summary><code>client.hris.bankInfo.<a href="/src/api/resources/hris/resources/bankInfo/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedBankInfoList</code></summary>
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
await client.hris.bankInfo.list();
```

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

**requestOptions:** `BankInfo.RequestOptions`

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
await client.hris.bankInfo.retrieve("id");
```

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

**requestOptions:** `BankInfo.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Benefits

<details><summary><code>client.hris.benefits.<a href="/src/api/resources/hris/resources/benefits/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedBenefitList</code></summary>
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
await client.hris.benefits.list();
```

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

**requestOptions:** `Benefits.RequestOptions`

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
await client.hris.benefits.retrieve("id");
```

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

**requestOptions:** `Benefits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Companies

<details><summary><code>client.hris.companies.<a href="/src/api/resources/hris/resources/companies/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCompanyList</code></summary>
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
await client.hris.companies.list();
```

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

**requestOptions:** `Companies.RequestOptions`

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
await client.hris.companies.retrieve("id");
```

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

**requestOptions:** `Companies.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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
    commonModels: [
        {
            modelName: "Employee",
            modelPermissions: {
                READ: {
                    isEnabled: true,
                },
                WRITE: {
                    isEnabled: false,
                },
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"],
            },
        },
        {
            modelName: "Benefit",
            modelPermissions: {
                WRITE: {
                    isEnabled: false,
                },
            },
        },
    ],
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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `DeleteAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Dependents

<details><summary><code>client.hris.dependents.<a href="/src/api/resources/hris/resources/dependents/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedDependentList</code></summary>
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
await client.hris.dependents.list();
```

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

**requestOptions:** `Dependents.RequestOptions`

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
await client.hris.dependents.retrieve("id");
```

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

**requestOptions:** `Dependents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris EmployeePayrollRuns

<details><summary><code>client.hris.employeePayrollRuns.<a href="/src/api/resources/hris/resources/employeePayrollRuns/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEmployeePayrollRunList</code></summary>
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
await client.hris.employeePayrollRuns.list();
```

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

**requestOptions:** `EmployeePayrollRuns.RequestOptions`

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
await client.hris.employeePayrollRuns.retrieve("id");
```

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

**requestOptions:** `EmployeePayrollRuns.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Employees

<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEmployeeList</code></summary>
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
await client.hris.employees.list();
```

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

**requestOptions:** `Employees.RequestOptions`

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
    model: {},
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

**requestOptions:** `Employees.RequestOptions`

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
await client.hris.employees.retrieve("id");
```

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

**requestOptions:** `Employees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">ignoreCreate</a>(modelId, { ...params }) -> void</code></summary>
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
    reason: "GENERAL_CUSTOMER_REQUEST",
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

**modelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.IgnoreCommonModelRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Employees.RequestOptions`

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

**requestOptions:** `Employees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris EmployerBenefits

<details><summary><code>client.hris.employerBenefits.<a href="/src/api/resources/hris/resources/employerBenefits/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEmployerBenefitList</code></summary>
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
await client.hris.employerBenefits.list();
```

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

**requestOptions:** `EmployerBenefits.RequestOptions`

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
await client.hris.employerBenefits.retrieve("id");
```

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

**requestOptions:** `EmployerBenefits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Employments

<details><summary><code>client.hris.employments.<a href="/src/api/resources/hris/resources/employments/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEmploymentList</code></summary>
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
await client.hris.employments.list();
```

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

**requestOptions:** `Employments.RequestOptions`

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
await client.hris.employments.retrieve("id");
```

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

**requestOptions:** `Employments.RequestOptions`

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
await client.hris.fieldMapping.fieldMappingsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel",
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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.fieldMapping.<a href="/src/api/resources/hris/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.hris.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.hris.PatchedEditFieldMappingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

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
await client.hris.fieldMapping.remoteFieldsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `GenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Groups

<details><summary><code>client.hris.groups.<a href="/src/api/resources/hris/resources/groups/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedGroupList</code></summary>
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
await client.hris.groups.list();
```

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

**requestOptions:** `Groups.RequestOptions`

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
await client.hris.groups.retrieve("id");
```

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

**requestOptions:** `Groups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Issues

<details><summary><code>client.hris.issues.<a href="/src/api/resources/hris/resources/issues/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedIssueList</code></summary>
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
await client.hris.issues.list();
```

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

**requestOptions:** `Issues.RequestOptions`

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

**requestOptions:** `Issues.RequestOptions`

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

Creates a link token to be used when linking a new end user.

</dd>
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
    categories: ["hris", "ats"],
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

**requestOptions:** `LinkToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris LinkedAccounts

<details><summary><code>client.hris.linkedAccounts.<a href="/src/api/resources/hris/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountDetailsAndActionsList</code></summary>
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
await client.hris.linkedAccounts.list();
```

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

**requestOptions:** `LinkedAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Locations

<details><summary><code>client.hris.locations.<a href="/src/api/resources/hris/resources/locations/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedLocationList</code></summary>
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
await client.hris.locations.list();
```

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

**requestOptions:** `Locations.RequestOptions`

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
await client.hris.locations.retrieve("id");
```

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

**requestOptions:** `Locations.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `Passthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris PayGroups

<details><summary><code>client.hris.payGroups.<a href="/src/api/resources/hris/resources/payGroups/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedPayGroupList</code></summary>
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
await client.hris.payGroups.list();
```

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

**requestOptions:** `PayGroups.RequestOptions`

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
await client.hris.payGroups.retrieve("id");
```

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

**requestOptions:** `PayGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris PayrollRuns

<details><summary><code>client.hris.payrollRuns.<a href="/src/api/resources/hris/resources/payrollRuns/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedPayrollRunList</code></summary>
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
await client.hris.payrollRuns.list();
```

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

**requestOptions:** `PayrollRuns.RequestOptions`

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
await client.hris.payrollRuns.retrieve("id");
```

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

**requestOptions:** `PayrollRuns.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `RegenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris SyncStatus

<details><summary><code>client.hris.syncStatus.<a href="/src/api/resources/hris/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedSyncStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.syncStatus.list();
```

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

**requestOptions:** `SyncStatus.RequestOptions`

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

Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

</dd>
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

**requestOptions:** `ForceResync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris Teams

<details><summary><code>client.hris.teams.<a href="/src/api/resources/hris/resources/teams/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTeamList</code></summary>
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
await client.hris.teams.list();
```

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

**requestOptions:** `Teams.RequestOptions`

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
await client.hris.teams.retrieve("id");
```

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

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris TimeOff

<details><summary><code>client.hris.timeOff.<a href="/src/api/resources/hris/resources/timeOff/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTimeOffList</code></summary>
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
await client.hris.timeOff.list();
```

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

**requestOptions:** `TimeOff.RequestOptions`

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
    model: {},
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

**requestOptions:** `TimeOff.RequestOptions`

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
await client.hris.timeOff.retrieve("id");
```

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

**requestOptions:** `TimeOff.RequestOptions`

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

**requestOptions:** `TimeOff.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris TimeOffBalances

<details><summary><code>client.hris.timeOffBalances.<a href="/src/api/resources/hris/resources/timeOffBalances/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTimeOffBalanceList</code></summary>
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
await client.hris.timeOffBalances.list();
```

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

**requestOptions:** `TimeOffBalances.RequestOptions`

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
await client.hris.timeOffBalances.retrieve("id");
```

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

**requestOptions:** `TimeOffBalances.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Hris TimesheetEntries

<details><summary><code>client.hris.timesheetEntries.<a href="/src/api/resources/hris/resources/timesheetEntries/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTimesheetEntryList</code></summary>
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
await client.hris.timesheetEntries.list();
```

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

**requestOptions:** `TimesheetEntries.RequestOptions`

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
    model: {},
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

**requestOptions:** `TimesheetEntries.RequestOptions`

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
await client.hris.timesheetEntries.retrieve("id");
```

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

**requestOptions:** `TimesheetEntries.RequestOptions`

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

**requestOptions:** `TimesheetEntries.RequestOptions`

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

**requestOptions:** `WebhookReceivers.RequestOptions`

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
    isActive: true,
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

**requestOptions:** `WebhookReceivers.RequestOptions`

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

**requestOptions:** `AccountDetails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing AccountToken

<details><summary><code>client.ticketing.accountToken.<a href="/src/api/resources/ticketing/resources/accountToken/client/Client.ts">retrieve</a>(publicToken) -> Merge.AccountToken</code></summary>
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

**publicToken:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Accounts

<details><summary><code>client.ticketing.accounts.<a href="/src/api/resources/ticketing/resources/accounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountList</code></summary>
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
await client.ticketing.accounts.list();
```

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

**requestOptions:** `Accounts.RequestOptions`

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
await client.ticketing.accounts.retrieve("id");
```

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

**requestOptions:** `Accounts.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.asyncPassthrough.<a href="/src/api/resources/ticketing/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
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

**asyncPassthroughReceiptId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Attachments

<details><summary><code>client.ticketing.attachments.<a href="/src/api/resources/ticketing/resources/attachments/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAttachmentList</code></summary>
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
await client.ticketing.attachments.list();
```

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

**requestOptions:** `Attachments.RequestOptions`

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
    model: {},
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

**requestOptions:** `Attachments.RequestOptions`

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
await client.ticketing.attachments.retrieve("id");
```

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

**requestOptions:** `Attachments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.attachments.<a href="/src/api/resources/ticketing/resources/attachments/client/Client.ts">downloadRetrieve</a>(id, { ...params }) -> stream.Readable</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the `File` content with the given `id` as a stream of bytes.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.attachments.downloadRetrieve("string", {
    mimeType: "string",
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

**request:** `Merge.ticketing.AttachmentsDownloadRetrieveRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Attachments.RequestOptions`

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

**requestOptions:** `Attachments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing AuditTrail

<details><summary><code>client.ticketing.auditTrail.<a href="/src/api/resources/ticketing/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAuditLogEventList</code></summary>
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
await client.ticketing.auditTrail.list();
```

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

**requestOptions:** `AuditTrail.RequestOptions`

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

**requestOptions:** `AvailableActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Collections

<details><summary><code>client.ticketing.collections.<a href="/src/api/resources/ticketing/resources/collections/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCollectionList</code></summary>
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
await client.ticketing.collections.list();
```

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

**requestOptions:** `Collections.RequestOptions`

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
await client.ticketing.collections.retrieve("id");
```

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

**requestOptions:** `Collections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Comments

<details><summary><code>client.ticketing.comments.<a href="/src/api/resources/ticketing/resources/comments/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCommentList</code></summary>
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
await client.ticketing.comments.list();
```

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

**requestOptions:** `Comments.RequestOptions`

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
    model: {},
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

**requestOptions:** `Comments.RequestOptions`

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
await client.ticketing.comments.retrieve("id");
```

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

**requestOptions:** `Comments.RequestOptions`

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

**requestOptions:** `Comments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Contacts

<details><summary><code>client.ticketing.contacts.<a href="/src/api/resources/ticketing/resources/contacts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedContactList</code></summary>
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
await client.ticketing.contacts.list();
```

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

**requestOptions:** `Contacts.RequestOptions`

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
    model: {},
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

**requestOptions:** `Contacts.RequestOptions`

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
await client.ticketing.contacts.retrieve("id");
```

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

**requestOptions:** `Contacts.RequestOptions`

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

**requestOptions:** `Contacts.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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
    commonModels: [
        {
            modelName: "Employee",
            modelPermissions: {
                READ: {
                    isEnabled: true,
                },
                WRITE: {
                    isEnabled: false,
                },
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"],
            },
        },
        {
            modelName: "Benefit",
            modelPermissions: {
                WRITE: {
                    isEnabled: false,
                },
            },
        },
    ],
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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `DeleteAccount.RequestOptions`

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
await client.ticketing.fieldMapping.fieldMappingsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel",
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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.ticketing.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.PatchedEditFieldMappingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

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
await client.ticketing.fieldMapping.remoteFieldsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `GenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Issues

<details><summary><code>client.ticketing.issues.<a href="/src/api/resources/ticketing/resources/issues/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedIssueList</code></summary>
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
await client.ticketing.issues.list();
```

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

**requestOptions:** `Issues.RequestOptions`

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

**requestOptions:** `Issues.RequestOptions`

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

Creates a link token to be used when linking a new end user.

</dd>
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
    categories: ["hris", "ats"],
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

**requestOptions:** `LinkToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing LinkedAccounts

<details><summary><code>client.ticketing.linkedAccounts.<a href="/src/api/resources/ticketing/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountDetailsAndActionsList</code></summary>
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
await client.ticketing.linkedAccounts.list();
```

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

**requestOptions:** `LinkedAccounts.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `Passthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Projects

<details><summary><code>client.ticketing.projects.<a href="/src/api/resources/ticketing/resources/projects/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedProjectList</code></summary>
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
await client.ticketing.projects.list();
```

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

**requestOptions:** `Projects.RequestOptions`

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
await client.ticketing.projects.retrieve("id");
```

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

**requestOptions:** `Projects.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.projects.<a href="/src/api/resources/ticketing/resources/projects/client/Client.ts">usersList</a>(parentId, { ...params }) -> Merge.PaginatedUserList</code></summary>
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
await client.ticketing.projects.usersList("parent_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**parentId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.ProjectsUsersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Projects.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `RegenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Roles

<details><summary><code>client.ticketing.roles.<a href="/src/api/resources/ticketing/resources/roles/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedRoleList</code></summary>
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
await client.ticketing.roles.list();
```

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

**requestOptions:** `Roles.RequestOptions`

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
await client.ticketing.roles.retrieve("id");
```

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

**requestOptions:** `Roles.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing SyncStatus

<details><summary><code>client.ticketing.syncStatus.<a href="/src/api/resources/ticketing/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedSyncStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.syncStatus.list();
```

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

**requestOptions:** `SyncStatus.RequestOptions`

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

Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

</dd>
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

**requestOptions:** `ForceResync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Tags

<details><summary><code>client.ticketing.tags.<a href="/src/api/resources/ticketing/resources/tags/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTagList</code></summary>
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
await client.ticketing.tags.list();
```

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

**requestOptions:** `Tags.RequestOptions`

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
await client.ticketing.tags.retrieve("id");
```

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

**requestOptions:** `Tags.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Teams

<details><summary><code>client.ticketing.teams.<a href="/src/api/resources/ticketing/resources/teams/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTeamList</code></summary>
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
await client.ticketing.teams.list();
```

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

**requestOptions:** `Teams.RequestOptions`

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
await client.ticketing.teams.retrieve("id");
```

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

**requestOptions:** `Teams.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Tickets

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTicketList</code></summary>
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
await client.ticketing.tickets.list();
```

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

**requestOptions:** `Tickets.RequestOptions`

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
    model: {},
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

**requestOptions:** `Tickets.RequestOptions`

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
await client.ticketing.tickets.retrieve("id");
```

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

**requestOptions:** `Tickets.RequestOptions`

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
    model: {},
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

**requestOptions:** `Tickets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">viewersList</a>(ticketId, { ...params }) -> Merge.PaginatedViewerList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Viewer` objects.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.viewersList("ticket_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**ticketId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.TicketsViewersListRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Tickets.RequestOptions`

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

**requestOptions:** `Tickets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
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
await client.ticketing.tickets.metaPostRetrieve();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Tickets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.ticketing.tickets.remoteFieldClassesList();
```

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

**requestOptions:** `Tickets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Ticketing Users

<details><summary><code>client.ticketing.users.<a href="/src/api/resources/ticketing/resources/users/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedUserList</code></summary>
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
await client.ticketing.users.list();
```

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

**requestOptions:** `Users.RequestOptions`

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
await client.ticketing.users.retrieve("id");
```

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

**requestOptions:** `Users.RequestOptions`

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

**requestOptions:** `WebhookReceivers.RequestOptions`

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
    isActive: true,
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

**requestOptions:** `WebhookReceivers.RequestOptions`

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

**requestOptions:** `AccountDetails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting AccountToken

<details><summary><code>client.accounting.accountToken.<a href="/src/api/resources/accounting/resources/accountToken/client/Client.ts">retrieve</a>(publicToken) -> Merge.AccountToken</code></summary>
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

**publicToken:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting AccountingPeriods

<details><summary><code>client.accounting.accountingPeriods.<a href="/src/api/resources/accounting/resources/accountingPeriods/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountingPeriodList</code></summary>
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
await client.accounting.accountingPeriods.list();
```

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

**requestOptions:** `AccountingPeriods.RequestOptions`

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
await client.accounting.accountingPeriods.retrieve("id");
```

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

**requestOptions:** `AccountingPeriods.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Accounts

<details><summary><code>client.accounting.accounts.<a href="/src/api/resources/accounting/resources/accounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountList</code></summary>
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
await client.accounting.accounts.list();
```

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

**requestOptions:** `Accounts.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.AccountEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Accounts.RequestOptions`

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
await client.accounting.accounts.retrieve("id");
```

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

**requestOptions:** `Accounts.RequestOptions`

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

**requestOptions:** `Accounts.RequestOptions`

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
await client.accounting.addresses.retrieve("id");
```

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

**requestOptions:** `Addresses.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `AsyncPassthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.asyncPassthrough.<a href="/src/api/resources/accounting/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId) -> Merge.AsyncPassthroughRetrieveResponse</code></summary>
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

**asyncPassthroughReceiptId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AsyncPassthrough.RequestOptions`

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

**requestOptions:** `AsyncTasks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Attachments

<details><summary><code>client.accounting.attachments.<a href="/src/api/resources/accounting/resources/attachments/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountingAttachmentList</code></summary>
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
await client.accounting.attachments.list();
```

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

**requestOptions:** `Attachments.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.AccountingAttachmentEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Attachments.RequestOptions`

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
await client.accounting.attachments.retrieve("id");
```

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

**requestOptions:** `Attachments.RequestOptions`

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

**requestOptions:** `Attachments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting AuditTrail

<details><summary><code>client.accounting.auditTrail.<a href="/src/api/resources/accounting/resources/auditTrail/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAuditLogEventList</code></summary>
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
await client.accounting.auditTrail.list();
```

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

**requestOptions:** `AuditTrail.RequestOptions`

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

**requestOptions:** `AvailableActions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting BalanceSheets

<details><summary><code>client.accounting.balanceSheets.<a href="/src/api/resources/accounting/resources/balanceSheets/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedBalanceSheetList</code></summary>
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
await client.accounting.balanceSheets.list();
```

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

**requestOptions:** `BalanceSheets.RequestOptions`

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
await client.accounting.balanceSheets.retrieve("id");
```

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

**requestOptions:** `BalanceSheets.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting BankFeedAccounts

<details><summary><code>client.accounting.bankFeedAccounts.<a href="/src/api/resources/accounting/resources/bankFeedAccounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedBankFeedAccountList</code></summary>
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
await client.accounting.bankFeedAccounts.list();
```

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

**requestOptions:** `BankFeedAccounts.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.BankFeedAccountEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedAccounts.RequestOptions`

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
await client.accounting.bankFeedAccounts.retrieve("id");
```

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

**requestOptions:** `BankFeedAccounts.RequestOptions`

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

**requestOptions:** `BankFeedAccounts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting BankFeedTransactions

<details><summary><code>client.accounting.bankFeedTransactions.<a href="/src/api/resources/accounting/resources/bankFeedTransactions/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedBankFeedTransactionList</code></summary>
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
await client.accounting.bankFeedTransactions.list();
```

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

**requestOptions:** `BankFeedTransactions.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.BankFeedTransactionEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `BankFeedTransactions.RequestOptions`

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
await client.accounting.bankFeedTransactions.retrieve("id");
```

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

**requestOptions:** `BankFeedTransactions.RequestOptions`

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

**requestOptions:** `BankFeedTransactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting CashFlowStatements

<details><summary><code>client.accounting.cashFlowStatements.<a href="/src/api/resources/accounting/resources/cashFlowStatements/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCashFlowStatementList</code></summary>
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
await client.accounting.cashFlowStatements.list();
```

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

**requestOptions:** `CashFlowStatements.RequestOptions`

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
await client.accounting.cashFlowStatements.retrieve("id");
```

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

**requestOptions:** `CashFlowStatements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting CompanyInfo

<details><summary><code>client.accounting.companyInfo.<a href="/src/api/resources/accounting/resources/companyInfo/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCompanyInfoList</code></summary>
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
await client.accounting.companyInfo.list();
```

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

**requestOptions:** `CompanyInfo.RequestOptions`

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
await client.accounting.companyInfo.retrieve("id");
```

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

**requestOptions:** `CompanyInfo.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Contacts

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedContactList</code></summary>
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
await client.accounting.contacts.list();
```

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

**requestOptions:** `Contacts.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.ContactEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Contacts.RequestOptions`

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
await client.accounting.contacts.retrieve("id");
```

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

**requestOptions:** `Contacts.RequestOptions`

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

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.contacts.remoteFieldClassesList();
```

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

**requestOptions:** `Contacts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting CreditNotes

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCreditNoteList</code></summary>
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
await client.accounting.creditNotes.list();
```

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

**requestOptions:** `CreditNotes.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.CreditNoteEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CreditNotes.RequestOptions`

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
await client.accounting.creditNotes.retrieve("id");
```

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

**requestOptions:** `CreditNotes.RequestOptions`

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

**requestOptions:** `CreditNotes.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `Scopes.RequestOptions`

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
    commonModels: [
        {
            modelName: "Employee",
            modelPermissions: {
                READ: {
                    isEnabled: true,
                },
                WRITE: {
                    isEnabled: false,
                },
            },
            fieldPermissions: {
                enabledFields: ["avatar", "home_location"],
                disabledFields: ["work_location"],
            },
        },
        {
            modelName: "Benefit",
            modelPermissions: {
                WRITE: {
                    isEnabled: false,
                },
            },
        },
    ],
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

**requestOptions:** `Scopes.RequestOptions`

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

**requestOptions:** `DeleteAccount.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Employees

<details><summary><code>client.accounting.employees.<a href="/src/api/resources/accounting/resources/employees/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedEmployeeList</code></summary>
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
await client.accounting.employees.list();
```

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

**requestOptions:** `Employees.RequestOptions`

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
await client.accounting.employees.retrieve("id");
```

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

**requestOptions:** `Employees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Expenses

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedExpenseList</code></summary>
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
await client.accounting.expenses.list();
```

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

**requestOptions:** `Expenses.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.ExpenseEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Expenses.RequestOptions`

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
await client.accounting.expenses.retrieve("id");
```

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

**requestOptions:** `Expenses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.expenses.linesRemoteFieldClassesList();
```

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

**requestOptions:** `Expenses.RequestOptions`

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

**requestOptions:** `Expenses.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenses.<a href="/src/api/resources/accounting/resources/expenses/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.expenses.remoteFieldClassesList();
```

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

**requestOptions:** `Expenses.RequestOptions`

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
await client.accounting.fieldMapping.fieldMappingsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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
    targetFieldName: "example_target_field_name",
    targetFieldDescription: "this is a example description of the target field",
    remoteFieldTraversalPath: ["example_remote_field"],
    remoteMethod: "GET",
    remoteUrlPath: "/example-url-path",
    commonModelName: "ExampleCommonModel",
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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">fieldMappingsPartialUpdate</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.accounting.fieldMapping.fieldMappingsPartialUpdate("field_mapping_id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**fieldMappingId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.PatchedEditFieldMappingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FieldMapping.RequestOptions`

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
await client.accounting.fieldMapping.remoteFieldsRetrieve();
```

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

**requestOptions:** `FieldMapping.RequestOptions`

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

**requestOptions:** `FieldMapping.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting GeneralLedgerTransactions

<details><summary><code>client.accounting.generalLedgerTransactions.<a href="/src/api/resources/accounting/resources/generalLedgerTransactions/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedGeneralLedgerTransactionList</code></summary>
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
await client.accounting.generalLedgerTransactions.list();
```

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

**requestOptions:** `GeneralLedgerTransactions.RequestOptions`

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
await client.accounting.generalLedgerTransactions.retrieve("id");
```

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

**requestOptions:** `GeneralLedgerTransactions.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `GenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting IncomeStatements

<details><summary><code>client.accounting.incomeStatements.<a href="/src/api/resources/accounting/resources/incomeStatements/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedIncomeStatementList</code></summary>
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
await client.accounting.incomeStatements.list();
```

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

**requestOptions:** `IncomeStatements.RequestOptions`

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
await client.accounting.incomeStatements.retrieve("id");
```

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

**requestOptions:** `IncomeStatements.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Invoices

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedInvoiceList</code></summary>
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
await client.accounting.invoices.list();
```

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

**requestOptions:** `Invoices.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.InvoiceEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Invoices.RequestOptions`

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
await client.accounting.invoices.retrieve("id");
```

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

**requestOptions:** `Invoices.RequestOptions`

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
    model: {},
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

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">lineItemsRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.invoices.lineItemsRemoteFieldClassesList();
```

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

**requestOptions:** `Invoices.RequestOptions`

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

**requestOptions:** `Invoices.RequestOptions`

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

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.invoices.remoteFieldClassesList();
```

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

**requestOptions:** `Invoices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Issues

<details><summary><code>client.accounting.issues.<a href="/src/api/resources/accounting/resources/issues/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedIssueList</code></summary>
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
await client.accounting.issues.list();
```

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

**requestOptions:** `Issues.RequestOptions`

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

**requestOptions:** `Issues.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Items

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedItemList</code></summary>
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
await client.accounting.items.list();
```

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

**requestOptions:** `Items.RequestOptions`

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
await client.accounting.items.retrieve("id");
```

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

**requestOptions:** `Items.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting JournalEntries

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedJournalEntryList</code></summary>
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
await client.accounting.journalEntries.list();
```

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

**requestOptions:** `JournalEntries.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.JournalEntryEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `JournalEntries.RequestOptions`

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
await client.accounting.journalEntries.retrieve("id");
```

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

**requestOptions:** `JournalEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.journalEntries.linesRemoteFieldClassesList();
```

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

**requestOptions:** `JournalEntries.RequestOptions`

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

**requestOptions:** `JournalEntries.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.journalEntries.<a href="/src/api/resources/accounting/resources/journalEntries/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.journalEntries.remoteFieldClassesList();
```

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

**requestOptions:** `JournalEntries.RequestOptions`

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

Creates a link token to be used when linking a new end user.

</dd>
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
    categories: ["hris", "ats"],
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

**requestOptions:** `LinkToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting LinkedAccounts

<details><summary><code>client.accounting.linkedAccounts.<a href="/src/api/resources/accounting/resources/linkedAccounts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedAccountDetailsAndActionsList</code></summary>
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
await client.accounting.linkedAccounts.list();
```

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

**requestOptions:** `LinkedAccounts.RequestOptions`

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
    path: "/scooters",
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

**requestOptions:** `Passthrough.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Payments

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedPaymentList</code></summary>
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
await client.accounting.payments.list();
```

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

**requestOptions:** `Payments.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.PaymentEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

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
await client.accounting.payments.retrieve("id");
```

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

**requestOptions:** `Payments.RequestOptions`

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
    model: {},
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

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">lineItemsRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.payments.lineItemsRemoteFieldClassesList();
```

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

**requestOptions:** `Payments.RequestOptions`

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

**requestOptions:** `Payments.RequestOptions`

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

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.payments.remoteFieldClassesList();
```

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

**requestOptions:** `Payments.RequestOptions`

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
await client.accounting.phoneNumbers.retrieve("id");
```

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

**requestOptions:** `PhoneNumbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting PurchaseOrders

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedPurchaseOrderList</code></summary>
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
await client.accounting.purchaseOrders.list();
```

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

**requestOptions:** `PurchaseOrders.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.PurchaseOrderEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PurchaseOrders.RequestOptions`

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
await client.accounting.purchaseOrders.retrieve("id");
```

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

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">lineItemsRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.purchaseOrders.lineItemsRemoteFieldClassesList();
```

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

**requestOptions:** `PurchaseOrders.RequestOptions`

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

**requestOptions:** `PurchaseOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
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
await client.accounting.purchaseOrders.remoteFieldClassesList();
```

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

**requestOptions:** `PurchaseOrders.RequestOptions`

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
    name: "Remote Deployment Key 1",
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

**requestOptions:** `RegenerateKey.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting SyncStatus

<details><summary><code>client.accounting.syncStatus.<a href="/src/api/resources/accounting/resources/syncStatus/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedSyncStatusList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Get syncing status. Possible values: `DISABLED`, `DONE`, `FAILED`, `PARTIALLY_SYNCED`, `PAUSED`, `SYNCING`. Learn more about sync status in our [Help Center](https://help.merge.dev/en/articles/8184193-merge-sync-statuses).

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.syncStatus.list();
```

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

**requestOptions:** `SyncStatus.RequestOptions`

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

Force re-sync of all models. This is available for all organizations via the dashboard. Force re-sync is also available programmatically via API for monthly, quarterly, and highest sync frequency customers on the Professional or Enterprise plans. Doing so will consume a sync credit for the relevant linked account.

</dd>
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

**requestOptions:** `ForceResync.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting TaxRates

<details><summary><code>client.accounting.taxRates.<a href="/src/api/resources/accounting/resources/taxRates/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTaxRateList</code></summary>
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
await client.accounting.taxRates.list();
```

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

**requestOptions:** `TaxRates.RequestOptions`

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
await client.accounting.taxRates.retrieve("id");
```

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

**requestOptions:** `TaxRates.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting TrackingCategories

<details><summary><code>client.accounting.trackingCategories.<a href="/src/api/resources/accounting/resources/trackingCategories/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTrackingCategoryList</code></summary>
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
await client.accounting.trackingCategories.list();
```

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

**requestOptions:** `TrackingCategories.RequestOptions`

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
await client.accounting.trackingCategories.retrieve("id");
```

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

**requestOptions:** `TrackingCategories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting Transactions

<details><summary><code>client.accounting.transactions.<a href="/src/api/resources/accounting/resources/transactions/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedTransactionList</code></summary>
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
await client.accounting.transactions.list();
```

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

**requestOptions:** `Transactions.RequestOptions`

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
await client.accounting.transactions.retrieve("id");
```

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

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting VendorCredits

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedVendorCreditList</code></summary>
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
await client.accounting.vendorCredits.list();
```

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

**requestOptions:** `VendorCredits.RequestOptions`

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
    model: {},
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

**request:** `Merge.accounting.VendorCreditEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VendorCredits.RequestOptions`

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
await client.accounting.vendorCredits.retrieve("id");
```

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

**requestOptions:** `VendorCredits.RequestOptions`

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

**requestOptions:** `VendorCredits.RequestOptions`

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

**requestOptions:** `WebhookReceivers.RequestOptions`

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
    isActive: true,
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

**requestOptions:** `WebhookReceivers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
