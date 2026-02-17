# Reference
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
