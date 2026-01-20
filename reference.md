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

**requestOptions:** `AccountDetails.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Filestorage AccountToken

<details><summary><code>client.filestorage.accountToken.<a href="/src/api/resources/filestorage/resources/accountToken/client/Client.ts">retrieve</a>(publicToken, { ...params }) -> Merge.AccountToken</code></summary>
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

**request:** `Merge.filestorage.RetrieveAccountTokenRequest`

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

<details><summary><code>client.filestorage.asyncPassthrough.<a href="/src/api/resources/filestorage/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId, { ...params }) -> Merge.RemoteResponse</code></summary>
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

**request:** `Merge.filestorage.RetrieveAsyncPassthroughRequest`

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
await client.filestorage.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListAuditTrailRequest`

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

Returns a list of `Drive` objects.{/_ BEGIN_FILESTORAGE_DRIVE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE8WTXW/aMBSG/wryJcrHKGVTI00TBdqCFMNKWq2qqugQH4LBsYPtQJeq/30K6fe6dRdIu4rP8evX9uM3dyQBi6nSP0lA5lygsUpDisQhmWIoSED6mm+qGnJOIUMSkBB1io0TLrAxreWN7mRIHGKKPFfaIjvhKJg50zgnAfGzSu8Wks85Mn+hufETtcFqof+0xJ3v1hCHCC5XyLpJogpp/2ZSC12olW/KatpY4pAcjLELrYp0cY7rAs2fPFdSbQWyFN0ZmPpkAjOUFoTLwIL/wsnVtdV7veoODAVaZH2w0EeLieVKPuy6sDY3ge8vUOTe7gQew42P0gdteSLQ+J320cGXo4774LLb/Vuciq+t5nI9U7MvzThNRAxFM4ySWxoNt3SZHtLe4S0tLzq0XJV0ufrUjFNohlHYGUdX7XG/2xq/I4inn38cXR73j0e0mZSDNl1ebWmUtMIoWc3KYXt0mmxHZ99vaXl1EPYv2jQadEanqjXunZuwd67CrucRh3BpMdVQXdOQ4PruZeMhNadKpQIbj3F6IRhmVeKeydTPAjl382ImeOKZtgcZlErC1niJyvwMGQe/dox3jvF0XYBGL5fpI36u5BN7EhDajYaXg9eB6G6AC5gJJIHVBf6WYBJcE7azL7QgTv2HPH7r6FfDNx0lGOqqtxtUelkhcIjGTFmME41gkcVgn3vVE7+u4hzs4rnFGbmpinXBNbIJaMjQVu7B9c298x7wscQ9wp4IsHOls7HEmoj5CPiAnnVpb9DfE/L/C3O6AI0TxaXdL86db175fgx0rwneM06HGG4x/he+N/e/AGpVLOF2BgAA" /></Footer>{/_ END_FILESTORAGE_DRIVE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.drives.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListDrivesRequest`

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

Returns a `Drive` object with the given `id`.{/_ BEGIN_FILESTORAGE_DRIVE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE8WTXW/aMBSG/wryJcrHKGVTI00TBdqCFMNKWq2qqugQH4LBsYPtQJeq/30K6fe6dRdIu4rP8evX9uM3dyQBi6nSP0lA5lygsUpDisQhmWIoSED6mm+qGnJOIUMSkBB1io0TLrAxreWN7mRIHGKKPFfaIjvhKJg50zgnAfGzSu8Wks85Mn+hufETtcFqof+0xJ3v1hCHCC5XyLpJogpp/2ZSC12olW/KatpY4pAcjLELrYp0cY7rAs2fPFdSbQWyFN0ZmPpkAjOUFoTLwIL/wsnVtdV7veoODAVaZH2w0EeLieVKPuy6sDY3ge8vUOTe7gQew42P0gdteSLQ+J320cGXo4774LLb/Vuciq+t5nI9U7MvzThNRAxFM4ySWxoNt3SZHtLe4S0tLzq0XJV0ufrUjFNohlHYGUdX7XG/2xq/I4inn38cXR73j0e0mZSDNl1ebWmUtMIoWc3KYXt0mmxHZ99vaXl1EPYv2jQadEanqjXunZuwd67CrucRh3BpMdVQXdOQ4PruZeMhNadKpQIbj3F6IRhmVeKeydTPAjl382ImeOKZtgcZlErC1niJyvwMGQe/dox3jvF0XYBGL5fpI36u5BN7EhDajYaXg9eB6G6AC5gJJIHVBf6WYBJcE7azL7QgTv2HPH7r6FfDNx0lGOqqtxtUelkhcIjGTFmME41gkcVgn3vVE7+u4hzs4rnFGbmpinXBNbIJaMjQVu7B9c298x7wscQ9wp4IsHOls7HEmoj5CPiAnnVpb9DfE/L/C3O6AI0TxaXdL86db175fgx0rwneM06HGG4x/he+N/e/AGpVLOF2BgAA" /></Footer>{/_ END_FILESTORAGE_DRIVE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.filestorage.RetrieveDrivesRequest`

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

**request:** `Merge.filestorage.FieldMappingsRetrieveFieldMappingRequest`

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

<details><summary><code>client.filestorage.fieldMapping.<a href="/src/api/resources/filestorage/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**request:** `Merge.filestorage.FieldMappingsDestroyFieldMappingRequest`

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

**request:** `Merge.filestorage.RemoteFieldsRetrieveFieldMappingRequest`

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

Returns a list of `File` objects.{/_ BEGIN_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Tb08aQRDGv4rZl+TgqkiNlzQNilpMOayiqTXmMuwOdwv7z909QIzfvbkDBVrbpAnaF+273dnZZ3fmN88DoeAx1faeRGTABTqvLaRIAiI1Q0EicsxFsQXDY5BIItJBm+JWEd66mGdvNc/aJCAuN0Zbj+yYo2Duk8UBiUgoi/xqrviAIwszy11I9RiLi+HzleqgvEMCIrgaIWtSqnPlfycyT6zCPPOHbXHsPAmIAed8ZnWeZud4l6P7leZI6YlAlmK1D27+M4ESlQdRZeAhXFGq2rnUS7GiBoYCPbIWeGihR+q5VotXM++Ni8IwQ2Fq5Q9qDMchqhCs51SgCxv1/Z29/UZ1oVK+/jFJxYftyvCur/t7lSSlIoG80unRadxrT+Jhuhsf7k7j2WUjno1m8XD0rpKkUOn0Oo1u77rebTW3uy8kJBfvv+5fHbQOTuMKnR3V4+H1JO7R7U6Pjvqzdv30hE5OP32ZxrPrnU7rsh73jhqnJ3q7e3juOofnutOs1UhAuPKYWijKdCS6eVgNLKbmQE/XE9uymLNlQ+Y0wPCqyfuC05qr10DCTCuYuBrVMpTIOIRnAvxAW3mgp4m7y8FiMozt5NueqhmVPjWfa/XceRKRuNlrXx2tj0NzDFxAXyCJvM3xp/kl0Q2hGdKRy2Up66jlphQMSq8kuRWL5cI2Bq3kzpVtCMhAC4a2sBKXmPh7U/hIFe0IyHqmsVyCvU9K1fUji1J7TKhF8MgS8MtYMRfru8SAz5Yhzpbr3LClgOMzJLfF2V3OLbIzsCDRoy2Kvn0MXgLYstr0Nw1xIfoEUn5WV5m6f12Qq+g2SOhtaZxonQrcalk+xs0gmSsmpWJyUfJ4S0OxRSVlg32Wy74CLlYs9m+5ratwg2yf7NZVWPZ54bdX5rtKdPN++/uMLjKweKa58pulVOqaQvc/pz/kdPv4HcQPC7fSCgAA" /></Footer>{/_ END_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListFilesRequest`

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

Creates a `File` object with the given values.{/_ BEGIN_FILESTORAGE_FILE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE91U72/aMBD9Vyp/RCEZpaxqpGmC0h+gEVih1bqqihz7SAyOHWwHaKr+71NCWuhK+wmmbd/i8/nd3Xvv8ogINhBK9YBcNGYctJEKh4AsFEsKHLnonPH8iBPm4RiQi3qgQjjIwwfDVfZBc9BBFtJpkkhlgJ4z4FRfKhgjFzlxnl9NBRszoE6kmHaInEP+0Hl5Uh0Xb5CFOBNToE1CZCrMRyCrxCpeZf52zK+1QRZKsNYmUjINoyuYpaDfw5wKueBAQ6gGWK864xCDMJhXKTbY2UCqqhXUtlg+AwUOBmgbG9wGA8QwKcqqkTGJdh0nAp7YRQc2hbkDwsHKMMJBO436yeHxSaNaohTVv/oh/1KrTGaBDI4rfki4j9NKb0SW3qiz8CbhkXd6tPSy64aXTTNvMv1U8UNc6Y16jf7ott5vN2v9LQn+8POPk5tWu9X1KiQ7q3uT24U3IrXeiEyDrFPvXpBF9/L70stuD3vt67o3Omt0L2Stf3qle6dXste0bWQhJgyECudjauTePW4GSte05PJ1YifOfbYmZKUGTlg1SQPOiK3rNo5xJgVeaJvI2ImBMuwMODZjqeKWXPp6lmIF/sRTi5/Hwk5E+Ew+k+KFeeQirznq3Jy9tkNzjhnHAQfkGpXCG/8i9w5R0ESxpECxigXxU8XLz3JXElAx07qY3UJjySmofH9YDL55SPLlETkHFnqdqSCWBnyiABugPjbrGKPr7zSh63vNMkD3+d0sZQroACscgwFVdLvRX1Hx/snaJkVbySTYtRwl6LMk8TdxE4mHPUiyKcIHXP8RJi+kDDkctBWbw27oXCH6BaI/LLjcA4ckAjLVaZzDlr0XE5sojQOBGd9w+T9i+DfV35GsL2CHcj27vy+gILK0/z7+RJs6/V+SDCOsYCCZMLsVpcBNctz9yfLeJv3FCm3pc4tS90+/AOkBo6ocCgAA" /></Footer>{/_ END_FILESTORAGE_FILE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `File` object with the given `id`.{/_ BEGIN_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Tb08aQRDGv4rZl+TgqkiNlzQNilpMOayiqTXmMuwOdwv7z909QIzfvbkDBVrbpAnaF+273dnZZ3fmN88DoeAx1faeRGTABTqvLaRIAiI1Q0EicsxFsQXDY5BIItJBm+JWEd66mGdvNc/aJCAuN0Zbj+yYo2Duk8UBiUgoi/xqrviAIwszy11I9RiLi+HzleqgvEMCIrgaIWtSqnPlfycyT6zCPPOHbXHsPAmIAed8ZnWeZud4l6P7leZI6YlAlmK1D27+M4ESlQdRZeAhXFGq2rnUS7GiBoYCPbIWeGihR+q5VotXM++Ni8IwQ2Fq5Q9qDMchqhCs51SgCxv1/Z29/UZ1oVK+/jFJxYftyvCur/t7lSSlIoG80unRadxrT+Jhuhsf7k7j2WUjno1m8XD0rpKkUOn0Oo1u77rebTW3uy8kJBfvv+5fHbQOTuMKnR3V4+H1JO7R7U6Pjvqzdv30hE5OP32ZxrPrnU7rsh73jhqnJ3q7e3juOofnutOs1UhAuPKYWijKdCS6eVgNLKbmQE/XE9uymLNlQ+Y0wPCqyfuC05qr10DCTCuYuBrVMpTIOIRnAvxAW3mgp4m7y8FiMozt5NueqhmVPjWfa/XceRKRuNlrXx2tj0NzDFxAXyCJvM3xp/kl0Q2hGdKRy2Up66jlphQMSq8kuRWL5cI2Bq3kzpVtCMhAC4a2sBKXmPh7U/hIFe0IyHqmsVyCvU9K1fUji1J7TKhF8MgS8MtYMRfru8SAz5Yhzpbr3LClgOMzJLfF2V3OLbIzsCDRoy2Kvn0MXgLYstr0Nw1xIfoEUn5WV5m6f12Qq+g2SOhtaZxonQrcalk+xs0gmSsmpWJyUfJ4S0OxRSVlg32Wy74CLlYs9m+5ratwg2yf7NZVWPZ54bdX5rtKdPN++/uMLjKweKa58pulVOqaQvc/pz/kdPv4HcQPC7fSCgAA" /></Footer>{/_ END_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.filestorage.RetrieveFilesRequest`

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

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">downloadRequestMetaRetrieve</a>(id, { ...params }) -> Merge.DownloadRequestMeta</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata to construct an authenticated file download request for a singular file, allowing you to download file directly from the third-party. For information on our download process please refer to our <a href='https://help.merge.dev/articles/10644317' target='_blank'>direct file download help center article</a>.{/_ BEGIN_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Tb08aQRDGv4rZl+TgqkiNlzQNilpMOayiqTXmMuwOdwv7z909QIzfvbkDBVrbpAnaF+273dnZZ3fmN88DoeAx1faeRGTABTqvLaRIAiI1Q0EicsxFsQXDY5BIItJBm+JWEd66mGdvNc/aJCAuN0Zbj+yYo2Duk8UBiUgoi/xqrviAIwszy11I9RiLi+HzleqgvEMCIrgaIWtSqnPlfycyT6zCPPOHbXHsPAmIAed8ZnWeZud4l6P7leZI6YlAlmK1D27+M4ESlQdRZeAhXFGq2rnUS7GiBoYCPbIWeGihR+q5VotXM++Ni8IwQ2Fq5Q9qDMchqhCs51SgCxv1/Z29/UZ1oVK+/jFJxYftyvCur/t7lSSlIoG80unRadxrT+Jhuhsf7k7j2WUjno1m8XD0rpKkUOn0Oo1u77rebTW3uy8kJBfvv+5fHbQOTuMKnR3V4+H1JO7R7U6Pjvqzdv30hE5OP32ZxrPrnU7rsh73jhqnJ3q7e3juOofnutOs1UhAuPKYWijKdCS6eVgNLKbmQE/XE9uymLNlQ+Y0wPCqyfuC05qr10DCTCuYuBrVMpTIOIRnAvxAW3mgp4m7y8FiMozt5NueqhmVPjWfa/XceRKRuNlrXx2tj0NzDFxAXyCJvM3xp/kl0Q2hGdKRy2Up66jlphQMSq8kuRWL5cI2Bq3kzpVtCMhAC4a2sBKXmPh7U/hIFe0IyHqmsVyCvU9K1fUji1J7TKhF8MgS8MtYMRfru8SAz5Yhzpbr3LClgOMzJLfF2V3OLbIzsCDRoy2Kvn0MXgLYstr0Nw1xIfoEUn5WV5m6f12Qq+g2SOhtaZxonQrcalk+xs0gmSsmpWJyUfJ4S0OxRSVlg32Wy74CLlYs9m+5ratwg2yf7NZVWPZ54bdX5rtKdPN++/uMLjKweKa58pulVOqaQvc/pz/kdPv4HcQPC7fSCgAA" /></Footer>{/_ END_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.downloadRequestMetaRetrieve("id");
```

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

**request:** `Merge.filestorage.DownloadRequestMetaRetrieveFilesRequest`

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

<details><summary><code>client.filestorage.files.<a href="/src/api/resources/filestorage/resources/files/client/Client.ts">downloadRequestMetaList</a>({ ...params }) -> Merge.PaginatedDownloadRequestMetaList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata to construct authenticated file download requests, allowing you to download files directly from the third-party.{/_ BEGIN_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Tb08aQRDGv4rZl+TgqkiNlzQNilpMOayiqTXmMuwOdwv7z909QIzfvbkDBVrbpAnaF+273dnZZ3fmN88DoeAx1faeRGTABTqvLaRIAiI1Q0EicsxFsQXDY5BIItJBm+JWEd66mGdvNc/aJCAuN0Zbj+yYo2Duk8UBiUgoi/xqrviAIwszy11I9RiLi+HzleqgvEMCIrgaIWtSqnPlfycyT6zCPPOHbXHsPAmIAed8ZnWeZud4l6P7leZI6YlAlmK1D27+M4ESlQdRZeAhXFGq2rnUS7GiBoYCPbIWeGihR+q5VotXM++Ni8IwQ2Fq5Q9qDMchqhCs51SgCxv1/Z29/UZ1oVK+/jFJxYftyvCur/t7lSSlIoG80unRadxrT+Jhuhsf7k7j2WUjno1m8XD0rpKkUOn0Oo1u77rebTW3uy8kJBfvv+5fHbQOTuMKnR3V4+H1JO7R7U6Pjvqzdv30hE5OP32ZxrPrnU7rsh73jhqnJ3q7e3juOofnutOs1UhAuPKYWijKdCS6eVgNLKbmQE/XE9uymLNlQ+Y0wPCqyfuC05qr10DCTCuYuBrVMpTIOIRnAvxAW3mgp4m7y8FiMozt5NueqhmVPjWfa/XceRKRuNlrXx2tj0NzDFxAXyCJvM3xp/kl0Q2hGdKRy2Up66jlphQMSq8kuRWL5cI2Bq3kzpVtCMhAC4a2sBKXmPh7U/hIFe0IyHqmsVyCvU9K1fUji1J7TKhF8MgS8MtYMRfru8SAz5Yhzpbr3LClgOMzJLfF2V3OLbIzsCDRoy2Kvn0MXgLYstr0Nw1xIfoEUn5WV5m6f12Qq+g2SOhtaZxonQrcalk+xs0gmSsmpWJyUfJ4S0OxRSVlg32Wy74CLlYs9m+5ratwg2yf7NZVWPZ54bdX5rtKdPN++/uMLjKweKa58pulVOqaQvc/pz/kdPv4HcQPC7fSCgAA" /></Footer>{/_ END_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.files.downloadRequestMetaList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.DownloadRequestMetaListFilesRequest`

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

Returns metadata for `FileStorageFile` POSTs.{/_ BEGIN_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Tb08aQRDGv4rZl+TgqkiNlzQNilpMOayiqTXmMuwOdwv7z909QIzfvbkDBVrbpAnaF+273dnZZ3fmN88DoeAx1faeRGTABTqvLaRIAiI1Q0EicsxFsQXDY5BIItJBm+JWEd66mGdvNc/aJCAuN0Zbj+yYo2Duk8UBiUgoi/xqrviAIwszy11I9RiLi+HzleqgvEMCIrgaIWtSqnPlfycyT6zCPPOHbXHsPAmIAed8ZnWeZud4l6P7leZI6YlAlmK1D27+M4ESlQdRZeAhXFGq2rnUS7GiBoYCPbIWeGihR+q5VotXM++Ni8IwQ2Fq5Q9qDMchqhCs51SgCxv1/Z29/UZ1oVK+/jFJxYftyvCur/t7lSSlIoG80unRadxrT+Jhuhsf7k7j2WUjno1m8XD0rpKkUOn0Oo1u77rebTW3uy8kJBfvv+5fHbQOTuMKnR3V4+H1JO7R7U6Pjvqzdv30hE5OP32ZxrPrnU7rsh73jhqnJ3q7e3juOofnutOs1UhAuPKYWijKdCS6eVgNLKbmQE/XE9uymLNlQ+Y0wPCqyfuC05qr10DCTCuYuBrVMpTIOIRnAvxAW3mgp4m7y8FiMozt5NueqhmVPjWfa/XceRKRuNlrXx2tj0NzDFxAXyCJvM3xp/kl0Q2hGdKRy2Up66jlphQMSq8kuRWL5cI2Bq3kzpVtCMhAC4a2sBKXmPh7U/hIFe0IyHqmsVyCvU9K1fUji1J7TKhF8MgS8MtYMRfru8SAz5Yhzpbr3LClgOMzJLfF2V3OLbIzsCDRoy2Kvn0MXgLYstr0Nw1xIfoEUn5WV5m6f12Qq+g2SOhtaZxonQrcalk+xs0gmSsmpWJyUfJ4S0OxRSVlg32Wy74CLlYs9m+5ratwg2yf7NZVWPZ54bdX5rtKdPN++/uMLjKweKa58pulVOqaQvc/pz/kdPv4HcQPC7fSCgAA" /></Footer>{/_ END_FILESTORAGE_FILE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Folder` objects.{/_ BEGIN_FILESTORAGE_FOLDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2TYW/aMBCG/wryRxSSUcqqRpomKG0HGoEVWq2rqsjYR2Jw7GA7QFP1v09JoJSOTdrG0CbtU+Lz3Wv7nnsfEcEGAqkekIvGjIM2UuEAkIUiSYEjF11ITkEhC+GYeTgC5KIuqABKF4xDaVDklxr9NrKQTuJYKgP0ggGn+oOCMXKRE2X5lUSwMQPqhIpph8g5ZIXOc0llnNcgC3EmpkAbhMhEmB+JFIkVXGS+Wmbb2iALxVhrEyqZBOEVzBLQ39OcCrngQAOojLAubsYhAmEwr1BssPNCqaIKqV2x7A0UOBigLWxwCwwQw6RYnRoaE2vXcULgsZ3fwKYwd0A4WBlGOGinXjs9OjmtV1Yq+env/YC/q5Yns5EcnZT9gHAfJ+XukCy9YXvhTYJj7+x46aXXdS+dpt5k+qbsB7jcHXbrveFtrddqVHs7EvzB28+nN81Ws+OVSXpe8ya3C29Iqt0hmY7Sdq1zSRadD5+WXnp71G1d17zheb1zKau9syvdPbuS3YZtIwsxYSBQOHumRu7d48vAamqacrmd2I6ySds0pKCBY1aJkxFnxNY1G0c4lQIvtE1k5ERAGXb6HJuxVFFTLn09S7ACf+KpxZcTYcciWDefSfHceeQirzFs35xvj0NjjhnHIw7INSqBb+YXuXeIhIxTf5yboACriWJxrmoVlll/CyvEoCKmdd4ICxWFfqI4spDIGpHdQIEwK81svVURKxZh9bDa9rc3FUTSgE8UYAPUx2YTy2Zke+XH2ISbEKOb/ySmGwHNUkD32d4sYQpoHyscgcne697dP1m7YLaUjEf7BroSXUONPoqbUDwcAOozxj9C67BkLqUMOJRais1hP3gKRT9X9Ac5m4Mbja6es8Nw2e+ryJrVP2zLn6TeE7BH4mtD9gTkjV858hDUX3P+60H9mksHIVbQl0yY/RLLdeNM9z+z32B2//QVpBVnixoLAAA=" /></Footer>{/_ END_FILESTORAGE_FOLDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.folders.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListFoldersRequest`

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

Creates a `Folder` object with the given values.{/_ BEGIN_FILESTORAGE_FOLDER_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE+1UXW/aMBT9K5UfUT5GKasaaZqgtB1oBFbSal1VRca+BINjB9sBmqr/fUoCha5smjoq9WFvyfW5516fc5IHRLCBSKp75KER46CNVDgCZKFYUuDIQ+eSU1DIQjhhPo4BeagLKoKDc8bhYFDiDxr9NrKQTpNEKgP0nAGn+ouCEfKQG+d4OxVsxIC6Y8W0S+Qc8kb3qcUeFT3IQpyJKdAGITIV5k8kJdDGJfKX1/xYG2ShBGttxkqm0fgSZino33FOhVxwoBHYQ6zLzTjEIAzmNsUGu1tMtiqpdtXyO1DgYIC2sMEtMEAMk2I1dWxMoj3XHQNPnGIDh8LcBeFiZRjhoN167eTw+KRur1iK6Z/DiH+qViazoRweV8KI8BCnlW5Aln7QXviT6Mg/PVr62VXdz6aZP5l+qIQRrnSDbr0X3NR6rUa1twMQDj5+P7lutpodv0Kys5o/uVn4Aal2AzIdZu1a54IsOl++Lf3s5rDbuqr5wVm9cyGrvdNL3T29lN2G4yALMWEgUji/pkbe7cN2YZWaplw+B7bjPGkbQUo3cMLsJB1yRhxdc3CMMynwQjtExm4MlGG3z7EZSRU35TLUsxQrCCe+Wvw4Fk4iorX4TIon5ZGH/EbQvj57HofGHDOOhxyQZ1QKL/KLvFtEQRPFkoLF2v5ERuvvYquWgIqZ1oUIFioRYao4spDIRcinKxAmfGp+3qEglgZCogAboCE2mxqjm+c0oZtzzTJAd/nZLGUKaB8rHIMBVaxfjL17tHYZ0lIyGe7blBXp2pj4q7gei/s3MGanFX+h+EbPV4l2IWXE4aCl2Bz2o1zJGBaM4aCQ7c1zTFfrv7s8v8qTnoA9+rFOck9AIdMqym/hyXt14V/+KoMxVtCXTJj92lHwJjnvf0NeGLJefGXM3eNPCCMMPtkJAAA=" /></Footer>{/_ END_FILESTORAGE_FOLDER_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Folder` object with the given `id`.{/_ BEGIN_FILESTORAGE_FOLDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2TYW/aMBCG/wryRxSSUcqqRpomKG0HGoEVWq2rqsjYR2Jw7GA7QFP1v09JoJSOTdrG0CbtU+Lz3Wv7nnsfEcEGAqkekIvGjIM2UuEAkIUiSYEjF11ITkEhC+GYeTgC5KIuqABKF4xDaVDklxr9NrKQTuJYKgP0ggGn+oOCMXKRE2X5lUSwMQPqhIpph8g5ZIXOc0llnNcgC3EmpkAbhMhEmB+JFIkVXGS+Wmbb2iALxVhrEyqZBOEVzBLQ39OcCrngQAOojLAubsYhAmEwr1BssPNCqaIKqV2x7A0UOBigLWxwCwwQw6RYnRoaE2vXcULgsZ3fwKYwd0A4WBlGOGinXjs9OjmtV1Yq+env/YC/q5Yns5EcnZT9gHAfJ+XukCy9YXvhTYJj7+x46aXXdS+dpt5k+qbsB7jcHXbrveFtrddqVHs7EvzB28+nN81Ws+OVSXpe8ya3C29Iqt0hmY7Sdq1zSRadD5+WXnp71G1d17zheb1zKau9syvdPbuS3YZtIwsxYSBQOHumRu7d48vAamqacrmd2I6ySds0pKCBY1aJkxFnxNY1G0c4lQIvtE1k5ERAGXb6HJuxVFFTLn09S7ACf+KpxZcTYcciWDefSfHceeQirzFs35xvj0NjjhnHIw7INSqBb+YXuXeIhIxTf5yboACriWJxrmoVlll/CyvEoCKmdd4ICxWFfqI4spDIGpHdQIEwK81svVURKxZh9bDa9rc3FUTSgE8UYAPUx2YTy2Zke+XH2ISbEKOb/ySmGwHNUkD32d4sYQpoHyscgcne697dP1m7YLaUjEf7BroSXUONPoqbUDwcAOozxj9C67BkLqUMOJRais1hP3gKRT9X9Ac5m4Mbja6es8Nw2e+ryJrVP2zLn6TeE7BH4mtD9gTkjV858hDUX3P+60H9mksHIVbQl0yY/RLLdeNM9z+z32B2//QVpBVnixoLAAA=" /></Footer>{/_ END_FILESTORAGE_FOLDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.filestorage.RetrieveFoldersRequest`

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

Returns metadata for `FileStorageFolder` POSTs.{/_ BEGIN_FILESTORAGE_FOLDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2TYW/aMBCG/wryRxSSUcqqRpomKG0HGoEVWq2rqsjYR2Jw7GA7QFP1v09JoJSOTdrG0CbtU+Lz3Wv7nnsfEcEGAqkekIvGjIM2UuEAkIUiSYEjF11ITkEhC+GYeTgC5KIuqABKF4xDaVDklxr9NrKQTuJYKgP0ggGn+oOCMXKRE2X5lUSwMQPqhIpph8g5ZIXOc0llnNcgC3EmpkAbhMhEmB+JFIkVXGS+Wmbb2iALxVhrEyqZBOEVzBLQ39OcCrngQAOojLAubsYhAmEwr1BssPNCqaIKqV2x7A0UOBigLWxwCwwQw6RYnRoaE2vXcULgsZ3fwKYwd0A4WBlGOGinXjs9OjmtV1Yq+env/YC/q5Yns5EcnZT9gHAfJ+XukCy9YXvhTYJj7+x46aXXdS+dpt5k+qbsB7jcHXbrveFtrddqVHs7EvzB28+nN81Ws+OVSXpe8ya3C29Iqt0hmY7Sdq1zSRadD5+WXnp71G1d17zheb1zKau9syvdPbuS3YZtIwsxYSBQOHumRu7d48vAamqacrmd2I6ySds0pKCBY1aJkxFnxNY1G0c4lQIvtE1k5ERAGXb6HJuxVFFTLn09S7ACf+KpxZcTYcciWDefSfHceeQirzFs35xvj0NjjhnHIw7INSqBb+YXuXeIhIxTf5yboACriWJxrmoVlll/CyvEoCKmdd4ICxWFfqI4spDIGpHdQIEwK81svVURKxZh9bDa9rc3FUTSgE8UYAPUx2YTy2Zke+XH2ISbEKOb/ySmGwHNUkD32d4sYQpoHyscgcne697dP1m7YLaUjEf7BroSXUONPoqbUDwcAOozxj9C67BkLqUMOJRais1hP3gKRT9X9Ac5m4Mbja6es8Nw2e+ryJrVP2zLn6TeE7BH4mtD9gTkjV858hDUX3P+60H9mksHIVbQl0yY/RLLdeNM9z+z32B2//QVpBVnixoLAAA=" /></Footer>{/_ END_FILESTORAGE_FOLDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Group` objects.{/_ BEGIN_FILESTORAGE_GROUP_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE82VbW/aMBSF/0rljygvo5RVjTRNQCgFLYaVtFpXVZFJLonBsYPtAKXqf58SaAtb12oVVfctPrk+9n184tyhkGiIhbxFDhpTBkoLSWJABkpFBAw5qCNFniEDkYxikgJykAcyhoNTyuBguC4/aAy6yEAqzzIhNUSnFFikziSMkYPstKg3c07HFCI7kVTZoZhDMdF+nGKOyznIQIzyKUSNMBQ51y+ZrAtNsq78bVi8VhoZKCNK6USKPE7OYZaD+pvnlIsFgygGc0TUemcMUuCaMDMimthbTqZcWz2nFT1EwEBD5BJNXNAQair4ZtVE60w5tp0Ay6xyB1YEcxu4TaSmIQNl12snh8cndXPjUq7+NYjZl2plMhuJ0XEliEMWkLzi+eES+90FnsRHuHW0xKuLOl5NV3gy/VQJYlLxfK/e969qfbdR7T9TEAw//zi5bLrNHq6Eq3YNT64W2A+rnh9OR6turdcJF72z70u8ujr03Isa9tv1XkdU+61z5bXOhdewLGQgyjXEkhRtKuRc320Lm9Q0xXK3sJsWQXsCsj4NklEzy0eMhpaqWSQlK8HJQlmhSO0UIkrsASN6LGTaFMtAzXIiIZhgufh5zK2Mxw/wqeCP5JGD2visgVttdzcQjTmhjIwYIEfLHP5IMHKut7+KDGRKlSqbNBAv+jLQrighFRqC4sR2R0FGdPIk0QgZKFcgFbopxFlOJUQDIkkKulCd65t74zmOrhTZaN8sN6YPPNNv/DLht+/C84OwdYSIGRy4ks5hP+zWjkHpGAxLcC8Aww2/e9n+d1xhQlkUxMUlXIDaSmO8uZj/t4D2OeyR8kNC+xyikrR6jfTbo/k66z0g5XSWF8/AdfHfkW/FPEyIhIGgXO8XdOmbFb6vo36/UH8M6Jv7XyTRyGMRCQAA" /></Footer>{/_ END_FILESTORAGE_GROUP_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.groups.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListGroupsRequest`

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

Returns a `Group` object with the given `id`.{/_ BEGIN_FILESTORAGE_GROUP_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE82VbW/aMBSF/0rljygvo5RVjTRNQCgFLYaVtFpXVZFJLonBsYPtAKXqf58SaAtb12oVVfctPrk+9n184tyhkGiIhbxFDhpTBkoLSWJABkpFBAw5qCNFniEDkYxikgJykAcyhoNTyuBguC4/aAy6yEAqzzIhNUSnFFikziSMkYPstKg3c07HFCI7kVTZoZhDMdF+nGKOyznIQIzyKUSNMBQ51y+ZrAtNsq78bVi8VhoZKCNK6USKPE7OYZaD+pvnlIsFgygGc0TUemcMUuCaMDMimthbTqZcWz2nFT1EwEBD5BJNXNAQair4ZtVE60w5tp0Ay6xyB1YEcxu4TaSmIQNl12snh8cndXPjUq7+NYjZl2plMhuJ0XEliEMWkLzi+eES+90FnsRHuHW0xKuLOl5NV3gy/VQJYlLxfK/e969qfbdR7T9TEAw//zi5bLrNHq6Eq3YNT64W2A+rnh9OR6turdcJF72z70u8ujr03Isa9tv1XkdU+61z5bXOhdewLGQgyjXEkhRtKuRc320Lm9Q0xXK3sJsWQXsCsj4NklEzy0eMhpaqWSQlK8HJQlmhSO0UIkrsASN6LGTaFMtAzXIiIZhgufh5zK2Mxw/wqeCP5JGD2visgVttdzcQjTmhjIwYIEfLHP5IMHKut7+KDGRKlSqbNBAv+jLQrighFRqC4sR2R0FGdPIk0QgZKFcgFbopxFlOJUQDIkkKulCd65t74zmOrhTZaN8sN6YPPNNv/DLht+/C84OwdYSIGRy4ks5hP+zWjkHpGAxLcC8Aww2/e9n+d1xhQlkUxMUlXIDaSmO8uZj/t4D2OeyR8kNC+xyikrR6jfTbo/k66z0g5XSWF8/AdfHfkW/FPEyIhIGgXO8XdOmbFb6vo36/UH8M6Jv7XyTRyGMRCQAA" /></Footer>{/_ END_FILESTORAGE_GROUP_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.filestorage.RetrieveGroupsRequest`

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
await client.filestorage.issues.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListIssuesRequest`

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

<details><summary><code>client.filestorage.issues.<a href="/src/api/resources/filestorage/resources/issues/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Issue</code></summary>
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

**request:** `Merge.filestorage.RetrieveIssuesRequest`

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
await client.filestorage.linkedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListLinkedAccountsRequest`

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
await client.filestorage.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListSyncStatusRequest`

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

Returns a list of `User` objects.{/_ BEGIN_FILESTORAGE_USER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WTXW/aMBSG/0rlS5SPUcqqRpomILQFLYaVtFpXVZGJD4nBsYPtAKXqf58S6Adbt92gVtOuEh+/fn38+PU9iomBRKo75KEJ46CNVCQBZKFMUuDIQ5caFLIQyRkmGSAPBaASODhlHA5GG/VBa9hDFtJFnktlgJ4y4FSfK5ggD7lZqbcLwSYMqJsqpt1YLqBc6D4tsSfVGmQhzsQMaCuOZSHMn0w2QptslD8Ny2ltkIVyorVJlSyS9ALmBejfec6EXHKgCdhjojedcchAGMJtSgxxXzjZamP1Wq08AwUOBqhPDPHBQGyYFNtdU2Ny7bluCjx3qg4cCgsXhEuUYTEH7TYbJ4fHJ01761Lt/jlK+Kd6bTofy/FxLUpiHpGiFoTxCoe9JZ4mR7hztMLryyZez9Z4OvtQixJSC8KgOQivGwO/VR+8IohGH7+dXLX9dh/X4nW3gafXSxzG9SCMZ+N1r9E/i5f9868rvL4+DPzLBg67zf6ZrA86FzroXMig5TjIQkwYSBQpj6mRd3P/srBNTVuudoW9rMzZM5DNbZCc2Xkx5ix2dMMhGVlLQZbaiWXmZkAZcYecmIlUWVuuIj0viIJoitXy+7FwcpE8wmdSPJFHHuri8xbudP3dQLQWhHEy5oA8owr4JcHIu0GQEcYjQqkCXV7ti0eSg8qY1tWhLZQoWeTlD9NRVj4gQarPrkpBJg1E5ZXujqKcmPS5xCi6LQfzgimgQ6JIBgZU2dLtg/UaYF/JfLxvyFvTR9DZF3GVirs3Af3ePM+kTDgc+IotYD9QN45R5RiNKqL/d2QHAvaI9zGzAwG0QqzfDvF7kxylRMFQMmH2y7LyzUvfv9PErbB31f2nWN4+/AAbFlb3AQkAAA==" /></Footer>{/_ END_FILESTORAGE_USER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.filestorage.users.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.filestorage.ListUsersRequest`

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

Returns a `User` object with the given `id`.{/_ BEGIN_FILESTORAGE_USER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WTXW/aMBSG/0rlS5SPUcqqRpomILQFLYaVtFpXVZGJD4nBsYPtAKXqf58S6Adbt92gVtOuEh+/fn38+PU9iomBRKo75KEJ46CNVCQBZKFMUuDIQ5caFLIQyRkmGSAPBaASODhlHA5GG/VBa9hDFtJFnktlgJ4y4FSfK5ggD7lZqbcLwSYMqJsqpt1YLqBc6D4tsSfVGmQhzsQMaCuOZSHMn0w2QptslD8Ny2ltkIVyorVJlSyS9ALmBejfec6EXHKgCdhjojedcchAGMJtSgxxXzjZamP1Wq08AwUOBqhPDPHBQGyYFNtdU2Ny7bluCjx3qg4cCgsXhEuUYTEH7TYbJ4fHJ01761Lt/jlK+Kd6bTofy/FxLUpiHpGiFoTxCoe9JZ4mR7hztMLryyZez9Z4OvtQixJSC8KgOQivGwO/VR+8IohGH7+dXLX9dh/X4nW3gafXSxzG9SCMZ+N1r9E/i5f9868rvL4+DPzLBg67zf6ZrA86FzroXMig5TjIQkwYSBQpj6mRd3P/srBNTVuudoW9rMzZM5DNbZCc2Xkx5ix2dMMhGVlLQZbaiWXmZkAZcYecmIlUWVuuIj0viIJoitXy+7FwcpE8wmdSPJFHHuri8xbudP3dQLQWhHEy5oA8owr4JcHIu0GQEcYjQqkCXV7ti0eSg8qY1tWhLZQoWeTlD9NRVj4gQarPrkpBJg1E5ZXujqKcmPS5xCi6LQfzgimgQ6JIBgZU2dLtg/UaYF/JfLxvyFvTR9DZF3GVirs3Af3ePM+kTDgc+IotYD9QN45R5RiNKqL/d2QHAvaI9zGzAwG0QqzfDvF7kxylRMFQMmH2y7LyzUvfv9PErbB31f2nWN4+/AAbFlb3AQkAAA==" /></Footer>{/_ END_FILESTORAGE_USER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.filestorage.RetrieveUsersRequest`

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

<details><summary><code>client.ticketing.accountToken.<a href="/src/api/resources/ticketing/resources/accountToken/client/Client.ts">retrieve</a>(publicToken, { ...params }) -> Merge.AccountToken</code></summary>
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

**request:** `Merge.ticketing.RetrieveAccountTokenRequest`

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

Returns a list of `Account` objects.{/_ BEGIN_TICKETING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92XW0/bMBSA/0rlx6pNBqVDjTRNpeHSjqSMFsZFKDp1TlO3jp3aDmVF/Pcp6YXL2KRNgTHeYufks/3Zx3ZuCQWDkVTfiUMMoxM0TESkQmIZIicOaVIqU2FIhUDCfIiROMRDFWGpv4ouNY/apEJ0miRSGQz3GPJQHygcEofYcRZcTQUbMgztkWLapvIaFURorz+pDvNvSIVwJiYYLlv9HWQRWIVF5JNi9lpnnU5AazNSMo1GxzhNUf+KORFyxjGMsDoAvegZxxiFAV4NwYD9gFRVC9RzddkYQuRoMHTBgIsGqWFSLFsdGZNox7ZHyBMr74EV4rWNwgZlGOWo7XqtsbndqFeXlLz1z0HEP22Ux9OBHGyXg4jyANKy16c3fr8988fRlt/auvHnJ3V/Ppn748mHchBB2et79W7/vNZ1mxvdZwKC3sezxumOu9Pxy3S+W/PH5zO/Tze8Pp0M5u1aZ5/OOgdfb/z5+abnntT8/m69sy83uq1j7bWOpde0LFIhTBiMFGTD1MS5vH1YsVwyewr1KEQ9eRzejiHCB1oWcwIJqybpgDNq6ZoFMcylgJm2qIztGEMG9hoX9KYpKAwOZSStcYLRSj+TYu2eOGTXP2j6rV338ZJoXgPjMOBIHKNS/GkNE+eSUCkM0MW8yhiYyJ5ENqoKURhLg0E2Q49LQQJmdF/FQlJZZpcmV1n1NGUKwyNQEKNBlbV0dVd53pzM068Aa0cczFCqOEcGOjdnJeLNOvtDUwfIk1KPyrRgXRlXZ9j3p6wtDCoq42KErWgPkzI4bbibh63BO5LWYQpKPVTXjGLJAwFRflAU4zCDB0t4cA+3xsmL6ntxaV9SbWSMqhhLK9qrbv+vuOkfMoFQkCues15y7/on52IPOOqhVBTXudjiMg2LkXZPD/QyGWlGf8vb2N+rXIzQl7OC5K15j/LzPar7ptgEi7GWo15c2Cu6uUBR3I1/dRlbQoPG1EvP2N67XFQXciRLbmHqMlzgPv1Z+s/FXd39AG56S3q7EAAA" /></Footer>{/_ END_TICKETING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.accounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListAccountsRequest`

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

Returns an `Account` object with the given `id`.{/_ BEGIN_TICKETING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92XW0/bMBSA/0rlx6pNBqVDjTRNpeHSjqSMFsZFKDp1TlO3jp3aDmVF/Pcp6YXL2KRNgTHeYufks/3Zx3ZuCQWDkVTfiUMMoxM0TESkQmIZIicOaVIqU2FIhUDCfIiROMRDFWGpv4ouNY/apEJ0miRSGQz3GPJQHygcEofYcRZcTQUbMgztkWLapvIaFURorz+pDvNvSIVwJiYYLlv9HWQRWIVF5JNi9lpnnU5AazNSMo1GxzhNUf+KORFyxjGMsDoAvegZxxiFAV4NwYD9gFRVC9RzddkYQuRoMHTBgIsGqWFSLFsdGZNox7ZHyBMr74EV4rWNwgZlGOWo7XqtsbndqFeXlLz1z0HEP22Ux9OBHGyXg4jyANKy16c3fr8988fRlt/auvHnJ3V/Ppn748mHchBB2et79W7/vNZ1mxvdZwKC3sezxumOu9Pxy3S+W/PH5zO/Tze8Pp0M5u1aZ5/OOgdfb/z5+abnntT8/m69sy83uq1j7bWOpde0LFIhTBiMFGTD1MS5vH1YsVwyewr1KEQ9eRzejiHCB1oWcwIJqybpgDNq6ZoFMcylgJm2qIztGEMG9hoX9KYpKAwOZSStcYLRSj+TYu2eOGTXP2j6rV338ZJoXgPjMOBIHKNS/GkNE+eSUCkM0MW8yhiYyJ5ENqoKURhLg0E2Q49LQQJmdF/FQlJZZpcmV1n1NGUKwyNQEKNBlbV0dVd53pzM068Aa0cczFCqOEcGOjdnJeLNOvtDUwfIk1KPyrRgXRlXZ9j3p6wtDCoq42KErWgPkzI4bbibh63BO5LWYQpKPVTXjGLJAwFRflAU4zCDB0t4cA+3xsmL6ntxaV9SbWSMqhhLK9qrbv+vuOkfMoFQkCues15y7/on52IPOOqhVBTXudjiMg2LkXZPD/QyGWlGf8vb2N+rXIzQl7OC5K15j/LzPar7ptgEi7GWo15c2Cu6uUBR3I1/dRlbQoPG1EvP2N67XFQXciRLbmHqMlzgPv1Z+s/FXd39AG56S3q7EAAA" /></Footer>{/_ END_TICKETING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveAccountsRequest`

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

<details><summary><code>client.ticketing.asyncPassthrough.<a href="/src/api/resources/ticketing/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId, { ...params }) -> Merge.RemoteResponse</code></summary>
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

**request:** `Merge.ticketing.RetrieveAsyncPassthroughRequest`

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

Returns a list of `Attachment` objects.{/_ BEGIN_TICKETING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2ZbXPiNhCA/wrVRwZwEy69CTOdDsF5IQ1OLnFyl95kPIu82ALZciQZEm7uv3dkTCDX9KbXiCYlfMNCfmw/Xmml9RdCQWMk5D1pEc3oCDVLI1IjiQiRkxZpaw00TjDVpEYgYx4kSFqkhzLCij8/odI+65IaUXmWCakxPGDIQ3UkcUBaxElM53qesgHD0IklUw4VY5QQofNwSn1QnENqhLN0hGGbUpGn+nuQWcc6zHp+c2j+VuamM1BKx1LkUXyOtzmqv2OOUjHhGEZY74Oa3RlH8+TA6yFocJZIdTlDPdVmniFEjhpDFzS4qJFqJtLyqrHWmWo5Tow8axR30Ahx7GDqgNSMclTOTnN3+/3uTr2kFFf/LYj4r1vV4W1f9N9Xg4jyAPJqz6d3nt+deMPondd5d+dNL3e86WjqDUc/V4MIqj2/t3PqXzdP3fbW6RMdgotfPu1e7bl7x16VTveb3vB64vl0q+fTUX/abR4f0snx0Yc7b3q93XMvm56/v3N8KLZOO+eq1zkXvXajQWqEpRojCeYxFWl9/rLcUIZMO4afHvfsJhDhkpHZ64CM1bO8zxltqGYDEpiKFCaqQUXiJBgycNoxBOo2B4mNrAjWwhMT6YNq0iL73lHb6+y7jyOgPQbGoc+RtLTM8S8hS1qfCRWpxlQH+j5DUiMDxjFIzTOUv3PJSY1ITITGgEoEjWEAetFmXtfjoyADHS+aWEhq5WgjN6b1NmcSwzOQkKBGaW7j5mvtSYsKUrCjEQyqPhNZ5yIS241hhvZ9vjKB01xixcXxaaYshaMhBjNicFHoDE5EJFYSnK9L5h7T/bw40YrJMw56IGTSn2NXOcy/b3KV1jqc0dFlZsdZCVt54P23s2KN5BkXEGIY9O9/1O+BRBWHqEZ2DD/gHjleyVT5qlNP4UGhHDOKdsf7YIn8ZjP7gRSp5Xm0QK6P0GdNCodCRgwspfy54BK6UVwoPkKeVS6oyC2HseEqg914nnlmY0sTsCH935esz1LZTTVKKhI7Oue0ZaXB1a67fdLpv2DQ/rt81JUipRxCS2qkSDscwlLNyw/hVabyYyYt7dEN6dUoe9mhalRUTEGt0kEzzuzmGEPfGJZQuZgtwys9SCHCsvBrLZLLNf4C3hhmb9r577nSIrEVzXPauu1Un6X4hKUIlgTzgrXystSLbkTP2Fho4BVfAh1Zm2dn0JK5WcgXps+B83u7eaxAbvQWests44mJHccL3ppVW3/UayykprZ2+XPaJmctK86EdiUMLFdSVCZ0aLAv92HlGXHnIyQTIS2V9ee0N13/8CVyLiwJLViPah8f1Z07ObxbgynyWZY/SjayVLErUP8wZL22373aX2uzf2Bq70PffJYsocHubS//xA7euGERi8peHlndDRjogrlZri5Mu9ai2eAC99vP1muc4G6+/gkzfEymzigAAA==" /></Footer>{/_ END_TICKETING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.attachments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListAttachmentsRequest`

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

Creates an `Attachment` object with the given values.{/_ BEGIN_TICKETING_ATTACHMENT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE92Xa2/iOBSG/wryR5TLtgw7ItJqlSFMC5qEbpt2pjsaRcY5BBPHDrYDlNH895W5tHS3FyplZ7v9Bsbnsf34TWy+I4I1ZELeIA9pSnLQlGfIQoVIgSEP+VpjMimAa2QhXNIIF4A8FILMoBHvChr+WR9ZSFVlKaSG9CMFlqpTCWPkIbcwne2K0zGF1J1Iqlwi5iBxBu5tiT1e1yALMcpzSH1CRMX1U5BNRxtvev7tq/lZmUmXWCk9kaLKJucwq0A9xsy5WDBIM7BHWG1mxsCsHDM7xRq7eyRbblAPtZk1pMBAQxpgjQPQQDQVfDvqROtSea47AVY66xk4Kcxd4C6WmhIGym23OsfvO217S1mP/nuSsd+OmtPZSIzeN5OMsARXzTAmyyjuL6Jp9i7qvltGq8t2tMpX0TT/pZlkuBnGYXsYX7eGgX80fKBDcvHrl87Vh+DDIGqSVa8VTa8XUUyOwpjko1W/NTghi8HpH8todX0cBpetKO61ByfiaNg9V2H3XIS+4yALUa4hk9gsUyHv6/f9hm1kfIU5vt+1X+AM9pRs9gOX1C6rEaPEUS0HF3glOF4oh4jCLSCl2MUGZatZhSXYTGTi2JmWkO28U8FvpSMP9aJTP+r2gvtZ8OeYMjxigDwtK/hHeJH3FY0pg4Sb6Vubz5VkyEISCqEhIRKwhjTB+q6NpsjaPkfom2mdVVRCeoYlLkCDfAq7K/thPahvVUloBDAflqoei2tisiEmF2uZySeRCafk9askgmvgOtE35e2yHzW7b9FCVckETiFNRjfPOD3EY5dRkl+W9Sjcwl6Xvedy+RKjL03pKZ1DPWoN6V/3+jNEPmKqzzVIIop6bO1o+8aSq05w/Kk7emWJvJPH6awyRoFrcwLLQ5N52Nh7VpPS1CuH7ixVCuSu/OlAD6is6dAypO32vLId+cnvCCOiYW5GjS6YDalH7xnDeixkYehvy+/BTi9AzimBRog5zmB7Z68tuRt4cgd3puUbsvzSFG99RGJRj+Q73v/rNlGv1VgCY6IeoxvWvRPxs1oGi5Pl67da9/vhs6R5TRezNerAjEZ+3L/qvTGXfwJPQeX1HltbaNKZhdUX+vG/dnrQE34I8TGHYiIaQW0WDS4xuDfxj+HZV+e3H38B6iRYhbgTAAA=" /></Footer>{/_ END_TICKETING_ATTACHMENT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Attachment` object with the given `id`.{/_ BEGIN_TICKETING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2ZbXPiNhCA/wrVRwZwEy69CTOdDsF5IQ1OLnFyl95kPIu82ALZciQZEm7uv3dkTCDX9KbXiCYlfMNCfmw/Xmml9RdCQWMk5D1pEc3oCDVLI1IjiQiRkxZpaw00TjDVpEYgYx4kSFqkhzLCij8/odI+65IaUXmWCakxPGDIQ3UkcUBaxElM53qesgHD0IklUw4VY5QQofNwSn1QnENqhLN0hGGbUpGn+nuQWcc6zHp+c2j+VuamM1BKx1LkUXyOtzmqv2OOUjHhGEZY74Oa3RlH8+TA6yFocJZIdTlDPdVmniFEjhpDFzS4qJFqJtLyqrHWmWo5Tow8axR30Ahx7GDqgNSMclTOTnN3+/3uTr2kFFf/LYj4r1vV4W1f9N9Xg4jyAPJqz6d3nt+deMPondd5d+dNL3e86WjqDUc/V4MIqj2/t3PqXzdP3fbW6RMdgotfPu1e7bl7x16VTveb3vB64vl0q+fTUX/abR4f0snx0Yc7b3q93XMvm56/v3N8KLZOO+eq1zkXvXajQWqEpRojCeYxFWl9/rLcUIZMO4afHvfsJhDhkpHZ64CM1bO8zxltqGYDEpiKFCaqQUXiJBgycNoxBOo2B4mNrAjWwhMT6YNq0iL73lHb6+y7jyOgPQbGoc+RtLTM8S8hS1qfCRWpxlQH+j5DUiMDxjFIzTOUv3PJSY1ITITGgEoEjWEAetFmXtfjoyADHS+aWEhq5WgjN6b1NmcSwzOQkKBGaW7j5mvtSYsKUrCjEQyqPhNZ5yIS241hhvZ9vjKB01xixcXxaaYshaMhBjNicFHoDE5EJFYSnK9L5h7T/bw40YrJMw56IGTSn2NXOcy/b3KV1jqc0dFlZsdZCVt54P23s2KN5BkXEGIY9O9/1O+BRBWHqEZ2DD/gHjleyVT5qlNP4UGhHDOKdsf7YIn8ZjP7gRSp5Xm0QK6P0GdNCodCRgwspfy54BK6UVwoPkKeVS6oyC2HseEqg914nnlmY0sTsCH935esz1LZTTVKKhI7Oue0ZaXB1a67fdLpv2DQ/rt81JUipRxCS2qkSDscwlLNyw/hVabyYyYt7dEN6dUoe9mhalRUTEGt0kEzzuzmGEPfGJZQuZgtwys9SCHCsvBrLZLLNf4C3hhmb9r577nSIrEVzXPauu1Un6X4hKUIlgTzgrXystSLbkTP2Fho4BVfAh1Zm2dn0JK5WcgXps+B83u7eaxAbvQWests44mJHccL3ppVW3/UayykprZ2+XPaJmctK86EdiUMLFdSVCZ0aLAv92HlGXHnIyQTIS2V9ee0N13/8CVyLiwJLViPah8f1Z07ObxbgynyWZY/SjayVLErUP8wZL22373aX2uzf2Bq70PffJYsocHubS//xA7euGERi8peHlndDRjogrlZri5Mu9ai2eAC99vP1muc4G6+/gkzfEymzigAAA==" /></Footer>{/_ END_TICKETING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveAttachmentsRequest`

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

Returns metadata for `TicketingAttachment` POSTs.{/_ BEGIN_TICKETING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2ZbXPiNhCA/wrVRwZwEy69CTOdDsF5IQ1OLnFyl95kPIu82ALZciQZEm7uv3dkTCDX9KbXiCYlfMNCfmw/Xmml9RdCQWMk5D1pEc3oCDVLI1IjiQiRkxZpaw00TjDVpEYgYx4kSFqkhzLCij8/odI+65IaUXmWCakxPGDIQ3UkcUBaxElM53qesgHD0IklUw4VY5QQofNwSn1QnENqhLN0hGGbUpGn+nuQWcc6zHp+c2j+VuamM1BKx1LkUXyOtzmqv2OOUjHhGEZY74Oa3RlH8+TA6yFocJZIdTlDPdVmniFEjhpDFzS4qJFqJtLyqrHWmWo5Tow8axR30Ahx7GDqgNSMclTOTnN3+/3uTr2kFFf/LYj4r1vV4W1f9N9Xg4jyAPJqz6d3nt+deMPondd5d+dNL3e86WjqDUc/V4MIqj2/t3PqXzdP3fbW6RMdgotfPu1e7bl7x16VTveb3vB64vl0q+fTUX/abR4f0snx0Yc7b3q93XMvm56/v3N8KLZOO+eq1zkXvXajQWqEpRojCeYxFWl9/rLcUIZMO4afHvfsJhDhkpHZ64CM1bO8zxltqGYDEpiKFCaqQUXiJBgycNoxBOo2B4mNrAjWwhMT6YNq0iL73lHb6+y7jyOgPQbGoc+RtLTM8S8hS1qfCRWpxlQH+j5DUiMDxjFIzTOUv3PJSY1ITITGgEoEjWEAetFmXtfjoyADHS+aWEhq5WgjN6b1NmcSwzOQkKBGaW7j5mvtSYsKUrCjEQyqPhNZ5yIS241hhvZ9vjKB01xixcXxaaYshaMhBjNicFHoDE5EJFYSnK9L5h7T/bw40YrJMw56IGTSn2NXOcy/b3KV1jqc0dFlZsdZCVt54P23s2KN5BkXEGIY9O9/1O+BRBWHqEZ2DD/gHjleyVT5qlNP4UGhHDOKdsf7YIn8ZjP7gRSp5Xm0QK6P0GdNCodCRgwspfy54BK6UVwoPkKeVS6oyC2HseEqg914nnlmY0sTsCH935esz1LZTTVKKhI7Oue0ZaXB1a67fdLpv2DQ/rt81JUipRxCS2qkSDscwlLNyw/hVabyYyYt7dEN6dUoe9mhalRUTEGt0kEzzuzmGEPfGJZQuZgtwys9SCHCsvBrLZLLNf4C3hhmb9r577nSIrEVzXPauu1Un6X4hKUIlgTzgrXystSLbkTP2Fho4BVfAh1Zm2dn0JK5WcgXps+B83u7eaxAbvQWests44mJHccL3ppVW3/UayykprZ2+XPaJmctK86EdiUMLFdSVCZ0aLAv92HlGXHnIyQTIS2V9ee0N13/8CVyLiwJLViPah8f1Z07ObxbgynyWZY/SjayVLErUP8wZL22373aX2uzf2Bq70PffJYsocHubS//xA7euGERi8peHlndDRjogrlZri5Mu9ai2eAC99vP1muc4G6+/gkzfEymzigAAA==" /></Footer>{/_ END_TICKETING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
await client.ticketing.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListAuditTrailRequest`

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

## Ticketing Collections

<details><summary><code>client.ticketing.collections.<a href="/src/api/resources/ticketing/resources/collections/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCollectionList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Collection` objects.{/_ BEGIN_TICKETING_COLLECTION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa1PiSBT9K2x/pHisMu6UVG1tITg+SqIrOLOuZaVuOpfQ0knHfoAyNf99qxMQ3HHGAVvJ7H6Dpvs0Oee+85lQ0BgJeU+aRDM6Qs2SiFRILELkpEnagnOkmomEVAikzIMYSZN0UUZY6s8PlFpnR6RClElTITWGHxjyUB1KHJAmqcd2c9UkbMAwrA8lU3UqxighwvrDkeogO0MqhLNkhGGLUmES/T2QfGMV8p3/+mp/VppUSApK6aEUJhqe461B9S3MUSImHMMIqwGo/J9xjDHRwKshaKgvIVVlDvXUmn2GEDlqDDugoYM6J3B261DrVDXr9SHytJb9g1qI4zomdZCaUY6qvtPY3X6/u1OdoWS3/+FH/Pet8s1tIIL3ZT+i3AdT7vbpndc/mng30Tuv/e7Om17seNPR1LsZ/Vr2Iyh3+92d0/5l47TT2jp9YoPf++2v3Y97nb1jr0yn+w3v5nLi9elWt09HwfSocXxAJ8eHf95508vtbuei4fX3d44PxNZp+1x12+ei26rVSIWwRGMkwT6mIs2rz8sLM5NpDeGXxzuPYohwiZFcDkhZNTUBZ7SmGjWIYSoSmKgaFXE9xpBBvTUEX90akFhLM2PNeGIieaCaNMm+d9jy2vudxxbQGgPjEHAkTS0NfmWypHlF6IPJ+/o+RVJZXjGSZxcqKlk6c4vEPqC9RmKifbrsMRJjodGnEkFj6INerFlRH3/zU9DDxRILF59NGi4AlAmWbrHmlnuu/WQUSkWu7cFbwySGZyAhRm1Xm1fXXypPSqMgATfagIWq5upUuYjEdu0mxW+J5LX6Rx/3V5cIKEWlfI5j5I/1+fkUGzOcrKPZ1EgsdXB8mipHbmUR/RzR72UK+iciEoVyshdLMSd+Rbr3QCGFOHVD9RztB2le101+Yr9YVR6mA2NPutHnjIMeCBkHc9jXzDfPBrOXO8IL80ObMzq6cGT7M7BXjzDP0vq8sf8Yuc7T8QeJaqhQjhlFt/Y8WEIuYgn1KkFmSY2E3Rq7ExNta365ujIicRxiMsiNhpes1fONyQjcQHQ5YPrQBKUjpQw6KmUOmB6awM8hNx9p/qtZ94DpEwicScYhKLxWTzlLAYRb1/U4hPzebUDLMd8orbwkXK3I1SHytNSjwjhOABZXWdgNJ+S3SMGrUs7Gjgogi7SBntZd5b4ic8dMOhroWKQZc4UMyC8rWNYcvlhSSna4W2pjolG6jQgW/U2mARtvLDMee3k/UupCAlE2cHdpubNmZwFeu0kL1/C8aiw4YQmCIxPlGdbzmWpTg93ilmdftZ5rB58zNhYaeKkvgY6cxZ4cdIb5tqXIxsPQOXDXVXAGWQAaX3G6tSLJPeCoBkJSfIj4bS5M6Ib3Bbo/n29Ri16o8VYhItGaUac3FFJTV83PHO1RTf6dF4X/Iz/pI8QTIUduiJ6jFaX5KYQLrJUk+hI5F45UybCWNfE/qbvO5OCuQG+Yivdi5JNkI0cDgQzqzV+/Fjz0/C2GorRnIqeVpQVdYBagJHLcc11/+Qe/12E+RScAAA==" /></Footer>{/_ END_TICKETING_COLLECTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.collections.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListCollectionsRequest`

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

<details><summary><code>client.ticketing.collections.<a href="/src/api/resources/ticketing/resources/collections/client/Client.ts">viewersList</a>(collectionId, { ...params }) -> Merge.PaginatedViewerList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Viewer` objects that point to a User id or Team id that is either an assignee or viewer on a `Collection` with the given id. [Learn more.](https://help.merge.dev/en/articles/10333658-ticketing-access-control-list-acls){/_ BEGIN_TICKETING_COLLECTION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa1PiSBT9K2x/pHisMu6UVG1tITg+SqIrOLOuZaVuOpfQ0knHfoAyNf99qxMQ3HHGAVvJ7H6Dpvs0Oee+85lQ0BgJeU+aRDM6Qs2SiFRILELkpEnagnOkmomEVAikzIMYSZN0UUZY6s8PlFpnR6RClElTITWGHxjyUB1KHJAmqcd2c9UkbMAwrA8lU3UqxighwvrDkeogO0MqhLNkhGGLUmES/T2QfGMV8p3/+mp/VppUSApK6aEUJhqe461B9S3MUSImHMMIqwGo/J9xjDHRwKshaKgvIVVlDvXUmn2GEDlqDDugoYM6J3B261DrVDXr9SHytJb9g1qI4zomdZCaUY6qvtPY3X6/u1OdoWS3/+FH/Pet8s1tIIL3ZT+i3AdT7vbpndc/mng30Tuv/e7Om17seNPR1LsZ/Vr2Iyh3+92d0/5l47TT2jp9YoPf++2v3Y97nb1jr0yn+w3v5nLi9elWt09HwfSocXxAJ8eHf95508vtbuei4fX3d44PxNZp+1x12+ei26rVSIWwRGMkwT6mIs2rz8sLM5NpDeGXxzuPYohwiZFcDkhZNTUBZ7SmGjWIYSoSmKgaFXE9xpBBvTUEX90akFhLM2PNeGIieaCaNMm+d9jy2vudxxbQGgPjEHAkTS0NfmWypHlF6IPJ+/o+RVJZXjGSZxcqKlk6c4vEPqC9RmKifbrsMRJjodGnEkFj6INerFlRH3/zU9DDxRILF59NGi4AlAmWbrHmlnuu/WQUSkWu7cFbwySGZyAhRm1Xm1fXXypPSqMgATfagIWq5upUuYjEdu0mxW+J5LX6Rx/3V5cIKEWlfI5j5I/1+fkUGzOcrKPZ1EgsdXB8mipHbmUR/RzR72UK+iciEoVyshdLMSd+Rbr3QCGFOHVD9RztB2le101+Yr9YVR6mA2NPutHnjIMeCBkHc9jXzDfPBrOXO8IL80ObMzq6cGT7M7BXjzDP0vq8sf8Yuc7T8QeJaqhQjhlFt/Y8WEIuYgn1KkFmSY2E3Rq7ExNta365ujIicRxiMsiNhpes1fONyQjcQHQ5YPrQBKUjpQw6KmUOmB6awM8hNx9p/qtZ94DpEwicScYhKLxWTzlLAYRb1/U4hPzebUDLMd8orbwkXK3I1SHytNSjwjhOABZXWdgNJ+S3SMGrUs7Gjgogi7SBntZd5b4ic8dMOhroWKQZc4UMyC8rWNYcvlhSSna4W2pjolG6jQgW/U2mARtvLDMee3k/UupCAlE2cHdpubNmZwFeu0kL1/C8aiw4YQmCIxPlGdbzmWpTg93ilmdftZ5rB58zNhYaeKkvgY6cxZ4cdIb5tqXIxsPQOXDXVXAGWQAaX3G6tSLJPeCoBkJSfIj4bS5M6Ib3Bbo/n29Ri16o8VYhItGaUac3FFJTV83PHO1RTf6dF4X/Iz/pI8QTIUduiJ6jFaX5KYQLrJUk+hI5F45UybCWNfE/qbvO5OCuQG+Yivdi5JNkI0cDgQzqzV+/Fjz0/C2GorRnIqeVpQVdYBagJHLcc11/+Qe/12E+RScAAA==" /></Footer>{/_ END_TICKETING_COLLECTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.collections.viewersList("collection_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**collectionId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.ticketing.ViewersListCollectionsRequest`

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

Returns a `Collection` object with the given `id`.{/_ BEGIN_TICKETING_COLLECTION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa1PiSBT9K2x/pHisMu6UVG1tITg+SqIrOLOuZaVuOpfQ0knHfoAyNf99qxMQ3HHGAVvJ7H6Dpvs0Oee+85lQ0BgJeU+aRDM6Qs2SiFRILELkpEnagnOkmomEVAikzIMYSZN0UUZY6s8PlFpnR6RClElTITWGHxjyUB1KHJAmqcd2c9UkbMAwrA8lU3UqxighwvrDkeogO0MqhLNkhGGLUmES/T2QfGMV8p3/+mp/VppUSApK6aEUJhqe461B9S3MUSImHMMIqwGo/J9xjDHRwKshaKgvIVVlDvXUmn2GEDlqDDugoYM6J3B261DrVDXr9SHytJb9g1qI4zomdZCaUY6qvtPY3X6/u1OdoWS3/+FH/Pet8s1tIIL3ZT+i3AdT7vbpndc/mng30Tuv/e7Om17seNPR1LsZ/Vr2Iyh3+92d0/5l47TT2jp9YoPf++2v3Y97nb1jr0yn+w3v5nLi9elWt09HwfSocXxAJ8eHf95508vtbuei4fX3d44PxNZp+1x12+ei26rVSIWwRGMkwT6mIs2rz8sLM5NpDeGXxzuPYohwiZFcDkhZNTUBZ7SmGjWIYSoSmKgaFXE9xpBBvTUEX90akFhLM2PNeGIieaCaNMm+d9jy2vudxxbQGgPjEHAkTS0NfmWypHlF6IPJ+/o+RVJZXjGSZxcqKlk6c4vEPqC9RmKifbrsMRJjodGnEkFj6INerFlRH3/zU9DDxRILF59NGi4AlAmWbrHmlnuu/WQUSkWu7cFbwySGZyAhRm1Xm1fXXypPSqMgATfagIWq5upUuYjEdu0mxW+J5LX6Rx/3V5cIKEWlfI5j5I/1+fkUGzOcrKPZ1EgsdXB8mipHbmUR/RzR72UK+iciEoVyshdLMSd+Rbr3QCGFOHVD9RztB2le101+Yr9YVR6mA2NPutHnjIMeCBkHc9jXzDfPBrOXO8IL80ObMzq6cGT7M7BXjzDP0vq8sf8Yuc7T8QeJaqhQjhlFt/Y8WEIuYgn1KkFmSY2E3Rq7ExNta365ujIicRxiMsiNhpes1fONyQjcQHQ5YPrQBKUjpQw6KmUOmB6awM8hNx9p/qtZ94DpEwicScYhKLxWTzlLAYRb1/U4hPzebUDLMd8orbwkXK3I1SHytNSjwjhOABZXWdgNJ+S3SMGrUs7Gjgogi7SBntZd5b4ic8dMOhroWKQZc4UMyC8rWNYcvlhSSna4W2pjolG6jQgW/U2mARtvLDMee3k/UupCAlE2cHdpubNmZwFeu0kL1/C8aiw4YQmCIxPlGdbzmWpTg93ilmdftZ5rB58zNhYaeKkvgY6cxZ4cdIb5tqXIxsPQOXDXVXAGWQAaX3G6tSLJPeCoBkJSfIj4bS5M6Ib3Bbo/n29Ri16o8VYhItGaUac3FFJTV83PHO1RTf6dF4X/Iz/pI8QTIUduiJ6jFaX5KYQLrJUk+hI5F45UybCWNfE/qbvO5OCuQG+Yivdi5JNkI0cDgQzqzV+/Fjz0/C2GorRnIqeVpQVdYBagJHLcc11/+Qe/12E+RScAAA==" /></Footer>{/_ END_TICKETING_COLLECTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveCollectionsRequest`

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

Returns a list of `Comment` objects.{/_ BEGIN_TICKETING_COMMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2a71PaSByH/xVuXzL8OLVeR2ZubpBYxZNoBW1tx8l8s/mSrGyyYXcDSKf/+82GgNjz2vO6IFf6DsLmSfLw2d/5RChoDIW8Jw2iGR2gZklIKiQWAXLSIC0Rx5hoUiGQMhdiJA3SQRliqTcvXWpetEmFqCxNhdQYvGHIA3UisU8apB6bwtUsYX2GQT2STNWpGKGEEOuLU6r9/BxSIZwlAwyalIos0V+DzApWYVbyi6/mZ2VuOgWldCRFFkaXOMxQ/RNzkIgxxyDEqg9qdmcczZMDrwagob5EqsoZ6qlj5hkC5KgxcECDgxqpZiIprhppnapGvR4hT2v5HdQCHNUxqYPUjHJU9f29g93XB/vVgpJf/Q8v5L/vlO+GvvBfl72Qcg+ycqdHJ26vPXbvwldu69XEnV7tu9PB1L0b/Fr2Qih3ep39897N3rnT3Dl/ooDX/e39wfWhc3jqlun0aM+9uxm7PbrT6dGBP23vnR7T8enJ24k7vdntOFd7bu9o//RY7Jy3LlWndSk6zVqNVAhLNIYSzGMq0vj4aflAEZlmBL88LtmOIcQlI7O/A1JWTTOfM1pTezWIYSoSGKsaFXE9xoBBvRmBp4YZSKyleVJzT0wkC9WkQY7ck6bbOnIeJ6A5AsbB50gaWmb4t8iSxkfii+CeVIjEWGj0qETQGHigH46Z/+PxNy8FHT0cYgGpFHWJVEimUJJb8+MwYxKDC5AQo0ZpLnf7ufKkLQUJ2NEFBlWdCatyEYrd2l2KK/MW6Zh7xWemvFSyEWh8eaHTTGLJwdF5qizF0BC9GdHr5nq9MxGKlYRy2erLijwEhRTi1I7EOe1fCnSbvfb1kZVsfsWiBUlM+1lxvgVLFxx0X8jYn2PX0P5tTuJanNHBlaXAFbCVV9jNawEdNrHUo8zjaIhrSCIViQaqN7dveSNRRQGqgR29C9yjkK6yz/5/GFYoR4yi3Qz3l8hrblVX5Tdhw8wcxESbmY38z85FYrn/ypE/W4wGOWb6JPNLbaUytDQcPWY6ynxvhlz/cGqz5J6Bb80qB39do4UX9sYh4Pd2a/yMud11XciQgaVavvA6g/5sSxvkBHla6lKRWe6sDFcZ7Colb75dNrI04jKk7WhI24lGSUVsx9uctuzOuz5wds9a/gr69o1PZFuKhHIILNmVImlxCAq7W7IWcMqkpbUAQ/q2ux82jObxS2abp9RCU0/tdkGG/uKroeuy2J1NwksdSCDEYsvRWkKLGf4DvHaXbmF3/memtIht5XROW9tC1QaZPGMJgiWPPGd9e5z5nRV+g+xdsJHQwEs9CXRgrdmcQQvmD79HfAnc9nQ9R65S3Ob0OZfYMCYsLydL9HLqGsL3/bW58PdMcV3gqPpCUlx02S0uMkvj8Qe6N1+Vp4a+2SatpbIw6oqxJZ0L3hbueHYjITW1tS40p23jYKebCu1I6FteYlOp0IHBvsz7DM8S90xjPYR4LKSlLeE5bV2VeENnLz2JnAtLSnPWo0W1d2rijI8nW9I6vpNsYGn0k6PWs+e4QQI/YGLvpY95k1hAvYNhJ3vP3mz1zs4HEYnSYRZanSQa6ANzO+Y6uUjHWlYNznO+fEFpS5J6+/kvjQDJ6zIxAAA=" /></Footer>{/_ END_TICKETING_COMMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.comments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListCommentsRequest`

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

Creates a `Comment` object with the given values.{/_ BEGIN_TICKETING_COMMENT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE92ZbVPiSBCA/wo3HyleTllvS6qurhAU8CR6Gt31tqxUM2mTgUkmzkxA2dr/fpUEEF0EVyec+tEweZI8dvd0Ot8JBY2ekHekTjSjQ9Qs9EiJBMJFTuqkKYIAQ01KBCJmQYCkTnooPSzYs9WFxkmXlIiKo0hIje4BQ+6qjsRrUifVIFlcjkN2zdCt+pKpKhUjlOBhdX5K+To9h5QIZ+EQ3QalIg71Kki2sAzZykd/Jj+r5KYjUEr7UsSef4o3MaqnmMNQjDm6Hpb7oLI745g8OfCyCxqqC6SyzFDLjiXP4CJHjW4LNLRQI9VMhNOr+lpHql6t+sijSnoHFRdHVQyrIDWjHFV1p7a7/Xl3pzylpFf/y/H4n1vFwU1f9D8XHY9yB+Jiz6a3lt0dWwPvk9X8dGtNznesyXBiDYa/Fx0Pij27t3NsX9aOW42t4yULnLM/vu5e7LX2Dq0inezXrMHl2LLpVs+mw/6kWzts0/Fh559ba3K53Wud1yx7f+ewLbaOm6eq1zwVvUalQkqEhRo9CcljKlL/9n3xwDRkGj789nBlNwAPF4xk/w6IWDmK+5zRiqpVIICJCGGsKlQE1QBdBtWGD466iUFiJUojNfXERDhXTepk3+o0rOZ+62EENEbAOPQ5krqWMf4UsqT+jfSFe0dKRGIgNDpUImh0HdD3x5hLStNUISUSK5TkKvnxJmYS3ROQEKBGuUibrr76UVrqRkEIZuRAgipnespceGK7MogwN0u+Drjza8ZeqWoSSyy0cHQcKUPhlBCdjOicpeKcI+GJPIPrBdrWBdpqbU3O6PA8MmNsCtuULDOCnhBzIFH5LqqhGTVz3AM5eWYgFaEGqh8FFVNOJNkINJqLsCf5q0PvQIq0ezBg94SDvhYySJEb2APyNrrM4uyc5TLbTHfifqGrVIyG6l+baT/uOxnymTltNezuxf6b9brIXx2cbaaPoG9MJIf++6qKz9t02xxcfmc2hzPme87eFaVwTRIL6TEwlL5znxn0I1TFeylOlPyiKtSHMET+XMEd5FHhjIrY8L6TcFWCzdPy5jb0J670k/619aHDRmjGdEL6iBW0G2qUVARmLM1oi6aci93W9lGzn8Ou/eZbzK4UIeXgGrIrRdjk4E7t5hmCOW5LzyqUh0wamjskpPXCXhqBObwvPyttk6cqJFO8QhOTnDO7nST0zTTZG5kxpLLOUI4YxUIPQvBwOjg2Fl8Z3LmHVwaR+eT8v6Lt71hpEZiKshltY5OIPHvsZT3Jyj7x17vyIxYiGHLPU9b6LvGVKb7J4DxhI6GBF2wJdGisEmbQKfODTfXPgKO6FpLivCo2uYgNdSn3dEdNyyJN6G/A3iu1ZU9jibEhUXPepl4sXlIIXzJleEqgL6Smpt59Z7SPsI2s9mYjBGMhDX0JmNFyD7q3M0y1JXIuDOlLWQ9ecL+o29a4ffvWMtdI7H2RbGhohJKiNjPH36ShfzE095lu9gY2hTq7N734KzvIM7Q2N0RZ41H4orAXe0b7uAR6z/xgfVxqrGUs9hKc03r8ifg9z+uXtiZXP/4DnKUjzFomAAA=" /></Footer>{/_ END_TICKETING_COMMENT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Comment` object with the given `id`.{/_ BEGIN_TICKETING_COMMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2a71PaSByH/xVuXzL8OLVeR2ZubpBYxZNoBW1tx8l8s/mSrGyyYXcDSKf/+82GgNjz2vO6IFf6DsLmSfLw2d/5RChoDIW8Jw2iGR2gZklIKiQWAXLSIC0Rx5hoUiGQMhdiJA3SQRliqTcvXWpetEmFqCxNhdQYvGHIA3UisU8apB6bwtUsYX2GQT2STNWpGKGEEOuLU6r9/BxSIZwlAwyalIos0V+DzApWYVbyi6/mZ2VuOgWldCRFFkaXOMxQ/RNzkIgxxyDEqg9qdmcczZMDrwagob5EqsoZ6qlj5hkC5KgxcECDgxqpZiIprhppnapGvR4hT2v5HdQCHNUxqYPUjHJU9f29g93XB/vVgpJf/Q8v5L/vlO+GvvBfl72Qcg+ycqdHJ26vPXbvwldu69XEnV7tu9PB1L0b/Fr2Qih3ep39897N3rnT3Dl/ooDX/e39wfWhc3jqlun0aM+9uxm7PbrT6dGBP23vnR7T8enJ24k7vdntOFd7bu9o//RY7Jy3LlWndSk6zVqNVAhLNIYSzGMq0vj4aflAEZlmBL88LtmOIcQlI7O/A1JWTTOfM1pTezWIYSoSGKsaFXE9xoBBvRmBp4YZSKyleVJzT0wkC9WkQY7ck6bbOnIeJ6A5AsbB50gaWmb4t8iSxkfii+CeVIjEWGj0qETQGHigH46Z/+PxNy8FHT0cYgGpFHWJVEimUJJb8+MwYxKDC5AQo0ZpLnf7ufKkLQUJ2NEFBlWdCatyEYrd2l2KK/MW6Zh7xWemvFSyEWh8eaHTTGLJwdF5qizF0BC9GdHr5nq9MxGKlYRy2erLijwEhRTi1I7EOe1fCnSbvfb1kZVsfsWiBUlM+1lxvgVLFxx0X8jYn2PX0P5tTuJanNHBlaXAFbCVV9jNawEdNrHUo8zjaIhrSCIViQaqN7dveSNRRQGqgR29C9yjkK6yz/5/GFYoR4yi3Qz3l8hrblVX5Tdhw8wcxESbmY38z85FYrn/ypE/W4wGOWb6JPNLbaUytDQcPWY6ynxvhlz/cGqz5J6Bb80qB39do4UX9sYh4Pd2a/yMud11XciQgaVavvA6g/5sSxvkBHla6lKRWe6sDFcZ7Colb75dNrI04jKk7WhI24lGSUVsx9uctuzOuz5wds9a/gr69o1PZFuKhHIILNmVImlxCAq7W7IWcMqkpbUAQ/q2ux82jObxS2abp9RCU0/tdkGG/uKroeuy2J1NwksdSCDEYsvRWkKLGf4DvHaXbmF3/memtIht5XROW9tC1QaZPGMJgiWPPGd9e5z5nRV+g+xdsJHQwEs9CXRgrdmcQQvmD79HfAnc9nQ9R65S3Ob0OZfYMCYsLydL9HLqGsL3/bW58PdMcV3gqPpCUlx02S0uMkvj8Qe6N1+Vp4a+2SatpbIw6oqxJZ0L3hbueHYjITW1tS40p23jYKebCu1I6FteYlOp0IHBvsz7DM8S90xjPYR4LKSlLeE5bV2VeENnLz2JnAtLSnPWo0W1d2rijI8nW9I6vpNsYGn0k6PWs+e4QQI/YGLvpY95k1hAvYNhJ3vP3mz1zs4HEYnSYRZanSQa6ANzO+Y6uUjHWlYNznO+fEFpS5J6+/kvjQDJ6zIxAAA=" /></Footer>{/_ END_TICKETING_COMMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveCommentsRequest`

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

Returns metadata for `Comment` POSTs.{/_ BEGIN_TICKETING_COMMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2a71PaSByH/xVuXzL8OLVeR2ZubpBYxZNoBW1tx8l8s/mSrGyyYXcDSKf/+82GgNjz2vO6IFf6DsLmSfLw2d/5RChoDIW8Jw2iGR2gZklIKiQWAXLSIC0Rx5hoUiGQMhdiJA3SQRliqTcvXWpetEmFqCxNhdQYvGHIA3UisU8apB6bwtUsYX2GQT2STNWpGKGEEOuLU6r9/BxSIZwlAwyalIos0V+DzApWYVbyi6/mZ2VuOgWldCRFFkaXOMxQ/RNzkIgxxyDEqg9qdmcczZMDrwagob5EqsoZ6qlj5hkC5KgxcECDgxqpZiIprhppnapGvR4hT2v5HdQCHNUxqYPUjHJU9f29g93XB/vVgpJf/Q8v5L/vlO+GvvBfl72Qcg+ycqdHJ26vPXbvwldu69XEnV7tu9PB1L0b/Fr2Qih3ep39897N3rnT3Dl/ooDX/e39wfWhc3jqlun0aM+9uxm7PbrT6dGBP23vnR7T8enJ24k7vdntOFd7bu9o//RY7Jy3LlWndSk6zVqNVAhLNIYSzGMq0vj4aflAEZlmBL88LtmOIcQlI7O/A1JWTTOfM1pTezWIYSoSGKsaFXE9xoBBvRmBp4YZSKyleVJzT0wkC9WkQY7ck6bbOnIeJ6A5AsbB50gaWmb4t8iSxkfii+CeVIjEWGj0qETQGHigH46Z/+PxNy8FHT0cYgGpFHWJVEimUJJb8+MwYxKDC5AQo0ZpLnf7ufKkLQUJ2NEFBlWdCatyEYrd2l2KK/MW6Zh7xWemvFSyEWh8eaHTTGLJwdF5qizF0BC9GdHr5nq9MxGKlYRy2erLijwEhRTi1I7EOe1fCnSbvfb1kZVsfsWiBUlM+1lxvgVLFxx0X8jYn2PX0P5tTuJanNHBlaXAFbCVV9jNawEdNrHUo8zjaIhrSCIViQaqN7dveSNRRQGqgR29C9yjkK6yz/5/GFYoR4yi3Qz3l8hrblVX5Tdhw8wcxESbmY38z85FYrn/ypE/W4wGOWb6JPNLbaUytDQcPWY6ynxvhlz/cGqz5J6Bb80qB39do4UX9sYh4Pd2a/yMud11XciQgaVavvA6g/5sSxvkBHla6lKRWe6sDFcZ7Colb75dNrI04jKk7WhI24lGSUVsx9uctuzOuz5wds9a/gr69o1PZFuKhHIILNmVImlxCAq7W7IWcMqkpbUAQ/q2ux82jObxS2abp9RCU0/tdkGG/uKroeuy2J1NwksdSCDEYsvRWkKLGf4DvHaXbmF3/memtIht5XROW9tC1QaZPGMJgiWPPGd9e5z5nRV+g+xdsJHQwEs9CXRgrdmcQQvmD79HfAnc9nQ9R65S3Ob0OZfYMCYsLydL9HLqGsL3/bW58PdMcV3gqPpCUlx02S0uMkvj8Qe6N1+Vp4a+2SatpbIw6oqxJZ0L3hbueHYjITW1tS40p23jYKebCu1I6FteYlOp0IHBvsz7DM8S90xjPYR4LKSlLeE5bV2VeENnLz2JnAtLSnPWo0W1d2rijI8nW9I6vpNsYGn0k6PWs+e4QQI/YGLvpY95k1hAvYNhJ3vP3mz1zs4HEYnSYRZanSQa6ANzO+Y6uUjHWlYNznO+fEFpS5J6+/kvjQDJ6zIxAAA=" /></Footer>{/_ END_TICKETING_COMMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Contact` objects.{/_ BEGIN_TICKETING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Yb2/aOhTGvwrySxTIWsadiDRNlNAW7pJ2hVXrpio62IdgcOLUdkrHtO8+Ofwp3e3dla4CY9Ne2jl54vPzY/vEXwgFg7FUn4lHDKczNDyNiUMSyVAQj3RkaoAa4hDIeAgJEo8EqGKsDNfRlfZljzhE51kmlUF2ylEwfa5wTDziJja4lqd8zJG5E8W1S+U9KojR3bxSGxfvEIcIns6QtSmVeWp+JLIMrMEy8rumfaztoDPQ2kyUzOPJFd7lqP9Nc5bKuUAWY20EejkygQmmBkSNgQF3S6mmllLP9dkcGAo0yHww4KNBarhMV1+dGJNpz3UnKLJ6MYI6w3sXUxeU4VSgdpuN1vGrVrO2Uim+/iaKxeuj6vRuJEevqlFMRQR5NRjSh3DYm4fT+GXYefkQLt43w8VsEU5nL6pRDNVgGDQvhjeNC799dPFMQDT460Pr+sQ/6YdVuug2wunNPBzSo2BIZ6NFr9E/o/P++buHcHFzHPjvG+Gw2+yfyaOLzpUOOlcyaNfrxCE8NRgrsGlq4n36st2xsswJaKSQZE+jewnEuEVlOSWQ8VqWjwSndd2oQwILmcJc16lM3AQZB3etFg3uclAYvZWxrGeFbwtqXKYb8MQj3fC8HXa6/lM/tO+BCxgJJJ5ROf7DwMT7tFoRmtw6xM4vV8guQUGCBpUNuP3qPJetzx+gnEwvBZixVIlVjHSR7U4SpTKxZrfuxQS4iIAxhdq2U5uTQ7KJTDFK82SEilgciTQYWXM+bUUZmMljF2fE+b8YTxXqCUM9K4flRu6JbaYZlo9ztQ0RZxssQwNcHCBijeqeUyzXseMt5V0695BYymLKS4RYSO6S3i9j1DMBTHwul+5Sc9f76UHSlCrmoEvGuRTd0zH1n1j3wfEcRVYZUJmXvO6trrayf9Y+8UgvNaioTMphvFbbrgKi65Z//LYz2h/nw6Hb56qkYtUqraj+pCJ1X7wqg2VhUwkghbj4TywT4apqehSvT7Of68t9gP0710Ymhe9LILlW22exfziL+go9C6Xkml5hVKju8lQ6xANoAAL1WCqKm4XfETJn5dB9VI/W/0vUqu/4MDpI0Mv8QzkvCe1Gb+dXRYcN9iOm5V2krLeDlWjUugvyD/z0B1jD9rB33f2NS9SPciIrfmmErVzkf39V9XsXp7dfvwFf9UcAjRgAAA==" /></Footer>{/_ END_TICKETING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.contacts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListContactsRequest`

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

Creates a `Contact` object with the given values.{/_ BEGIN_TICKETING_CONTACT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE7WSYU/bMBCG/wq6j1XSrJQONdI0lbZAEUkZBARDKLrY19StY6e2Q1kR/31KWxBsjA/T9tH2e4/v3nsfgaGjXJsfEIITbE5OqBw8KDQnCSH0tXLIHHiApYixIAghIpPTTvKs3umdjcADW5WlNo74oSDJ7bGhCYQQFLXYr5SYCOLB1AgbMH1PBnMKXkr8yboGPJBCzYn3GNOVch9BNkIfN8pfjvWzrZsu0Vo3NbrKp+e0qMj+iTlXeimJ5+RnaDedSSpIOZQ+R4fBK5JvNqj37uoZOElyxAfocECOmBNabX+dOlfaMAimJMvmuoMmp/uAVIDGCSbJBp12d3e/2/G3lPXvX9Ncfmk1ZotMZ/uNNGcyxaoRJewhTkbLeJbvxf29h3h12YlX81U8m39qpDk2oiTqjJOb9njQa43fEaQXn6+7VweDg5O4wVbDdjy7WcYJa0UJm2erUfvkiC1Pjr89xKub3Whw2Y6TYefkSLfG/XMb9c911Gs2wQOhHOUG6zEthLePry+2kRkpR4bp4q16VGBOr1zZrARL4ZdVJgVr2nYTC1xphUvbZLoICuICg2daerGo0FB6qnOdXnUHu6f9rFmu87t2T2j1sgAIYRgf9+L+cPA2F717FBIzSRA6U9FvQYbwFraxAg+oQCFT5NyQrXet6vk8KKdaUaqqIiMDHhgqtKNUcLirD4tKGOJnaLAgR2aNfAu6e/Les+07KU52/m9cO5PoJtoUW2jaXUTVtTj8wLC4l4yuhv/Brr/w5+7pJ3TkyQqsBAAA" /></Footer>{/_ END_TICKETING_CONTACT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Contact` object with the given `id`.{/_ BEGIN_TICKETING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Yb2/aOhTGvwrySxTIWsadiDRNlNAW7pJ2hVXrpio62IdgcOLUdkrHtO8+Ofwp3e3dla4CY9Ne2jl54vPzY/vEXwgFg7FUn4lHDKczNDyNiUMSyVAQj3RkaoAa4hDIeAgJEo8EqGKsDNfRlfZljzhE51kmlUF2ylEwfa5wTDziJja4lqd8zJG5E8W1S+U9KojR3bxSGxfvEIcIns6QtSmVeWp+JLIMrMEy8rumfaztoDPQ2kyUzOPJFd7lqP9Nc5bKuUAWY20EejkygQmmBkSNgQF3S6mmllLP9dkcGAo0yHww4KNBarhMV1+dGJNpz3UnKLJ6MYI6w3sXUxeU4VSgdpuN1vGrVrO2Uim+/iaKxeuj6vRuJEevqlFMRQR5NRjSh3DYm4fT+GXYefkQLt43w8VsEU5nL6pRDNVgGDQvhjeNC799dPFMQDT460Pr+sQ/6YdVuug2wunNPBzSo2BIZ6NFr9E/o/P++buHcHFzHPjvG+Gw2+yfyaOLzpUOOlcyaNfrxCE8NRgrsGlq4n36st2xsswJaKSQZE+jewnEuEVlOSWQ8VqWjwSndd2oQwILmcJc16lM3AQZB3etFg3uclAYvZWxrGeFbwtqXKYb8MQj3fC8HXa6/lM/tO+BCxgJJJ5ROf7DwMT7tFoRmtw6xM4vV8guQUGCBpUNuP3qPJetzx+gnEwvBZixVIlVjHSR7U4SpTKxZrfuxQS4iIAxhdq2U5uTQ7KJTDFK82SEilgciTQYWXM+bUUZmMljF2fE+b8YTxXqCUM9K4flRu6JbaYZlo9ztQ0RZxssQwNcHCBijeqeUyzXseMt5V0695BYymLKS4RYSO6S3i9j1DMBTHwul+5Sc9f76UHSlCrmoEvGuRTd0zH1n1j3wfEcRVYZUJmXvO6trrayf9Y+8UgvNaioTMphvFbbrgKi65Z//LYz2h/nw6Hb56qkYtUqraj+pCJ1X7wqg2VhUwkghbj4TywT4apqehSvT7Of68t9gP0710Ymhe9LILlW22exfziL+go9C6Xkml5hVKju8lQ6xANoAAL1WCqKm4XfETJn5dB9VI/W/0vUqu/4MDpI0Mv8QzkvCe1Gb+dXRYcN9iOm5V2krLeDlWjUugvyD/z0B1jD9rB33f2NS9SPciIrfmmErVzkf39V9XsXp7dfvwFf9UcAjRgAAA==" /></Footer>{/_ END_TICKETING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveContactsRequest`

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

Returns metadata for `TicketingContact` POSTs.{/_ BEGIN_TICKETING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Yb2/aOhTGvwrySxTIWsadiDRNlNAW7pJ2hVXrpio62IdgcOLUdkrHtO8+Ofwp3e3dla4CY9Ne2jl54vPzY/vEXwgFg7FUn4lHDKczNDyNiUMSyVAQj3RkaoAa4hDIeAgJEo8EqGKsDNfRlfZljzhE51kmlUF2ylEwfa5wTDziJja4lqd8zJG5E8W1S+U9KojR3bxSGxfvEIcIns6QtSmVeWp+JLIMrMEy8rumfaztoDPQ2kyUzOPJFd7lqP9Nc5bKuUAWY20EejkygQmmBkSNgQF3S6mmllLP9dkcGAo0yHww4KNBarhMV1+dGJNpz3UnKLJ6MYI6w3sXUxeU4VSgdpuN1vGrVrO2Uim+/iaKxeuj6vRuJEevqlFMRQR5NRjSh3DYm4fT+GXYefkQLt43w8VsEU5nL6pRDNVgGDQvhjeNC799dPFMQDT460Pr+sQ/6YdVuug2wunNPBzSo2BIZ6NFr9E/o/P++buHcHFzHPjvG+Gw2+yfyaOLzpUOOlcyaNfrxCE8NRgrsGlq4n36st2xsswJaKSQZE+jewnEuEVlOSWQ8VqWjwSndd2oQwILmcJc16lM3AQZB3etFg3uclAYvZWxrGeFbwtqXKYb8MQj3fC8HXa6/lM/tO+BCxgJJJ5ROf7DwMT7tFoRmtw6xM4vV8guQUGCBpUNuP3qPJetzx+gnEwvBZixVIlVjHSR7U4SpTKxZrfuxQS4iIAxhdq2U5uTQ7KJTDFK82SEilgciTQYWXM+bUUZmMljF2fE+b8YTxXqCUM9K4flRu6JbaYZlo9ztQ0RZxssQwNcHCBijeqeUyzXseMt5V0695BYymLKS4RYSO6S3i9j1DMBTHwul+5Sc9f76UHSlCrmoEvGuRTd0zH1n1j3wfEcRVYZUJmXvO6trrayf9Y+8UgvNaioTMphvFbbrgKi65Z//LYz2h/nw6Hb56qkYtUqraj+pCJ1X7wqg2VhUwkghbj4TywT4apqehSvT7Of68t9gP0710Ymhe9LILlW22exfziL+go9C6Xkml5hVKju8lQ6xANoAAL1WCqKm4XfETJn5dB9VI/W/0vUqu/4MDpI0Mv8QzkvCe1Gb+dXRYcN9iOm5V2krLeDlWjUugvyD/z0B1jD9rB33f2NS9SPciIrfmmErVzkf39V9XsXp7dfvwFf9UcAjRgAAA==" /></Footer>{/_ END_TICKETING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.FieldMappingsRetrieveFieldMappingRequest`

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

<details><summary><code>client.ticketing.fieldMapping.<a href="/src/api/resources/ticketing/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**request:** `Merge.ticketing.FieldMappingsDestroyFieldMappingRequest`

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

**request:** `Merge.ticketing.RemoteFieldsRetrieveFieldMappingRequest`

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
await client.ticketing.issues.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListIssuesRequest`

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

<details><summary><code>client.ticketing.issues.<a href="/src/api/resources/ticketing/resources/issues/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Issue</code></summary>
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

**request:** `Merge.ticketing.RetrieveIssuesRequest`

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
await client.ticketing.linkedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListLinkedAccountsRequest`

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

Returns a list of `Project` objects.{/_ BEGIN_TICKETING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Xa2/bNhSG/4rBj4YsLXW9IgKGwbFTX1DLbqKsS4tAOKJOJFqUqPBiuy763wdJdpNsaYGk6pD4o2jyIfnw5bH0hVDQGAv5mbhEM5qiZnlMLJKJCDlxyUKKJVJNLAIF8yBD4pIZyhhb/r53q7+YEIsoUxRCaozeMuSRGku8Ji5xsrJzx+TsmmHkJJIph4oVSojR+Takc12NIRbhLE8x6lMqTK5/BKk7dqDu+a/H8mdVLroApXQihYmTM7wxqL7HTHOx5hjF2AlB1SvjmGGugXci0ODcIXVkjXqordxDhBw1RkPQMESNVDOR72ZNtC6U6zgJ8sKuVmBHuHIwd0BqRjkqp9c9fvXmuNfZUarZ/wxi/sdRe3kTivBNO4gpD8C0Zz7deP5k7S3j197g9cbbXvS8bbr1lulv7SCG9syf9eb+ZXc+7B/NH+gQnP/+9/FfJ8OTqdem29Out7xcez49mvk0DbeT7nRE19Px+423vXw1G150Pf+0Nx2Jo/ngTM0GZ2LWt21iEZZrjCWU21TE/fTlbsMuMv2tkdga4mpeqPsjJhnEeMdMfSxQsE5hQs6orbo2ZLAVOayVTUXmZBgxcCpiUBOD8xsDEoN3IhZ2UeW3ssdE/u0AiEtOvXHfG5wO7+eivwLGIeRIXC0N/ifIxP1EIlRUsqLiWCQv92QRiZnQGJTnc/8pKEAnt01VtgPKQSlUt80sItbuyilyVTbfGCYxWoCEDDXKcuarr9ZDOk9AIYWsaEblnva8Nf6UL6ZDU45sRtiCg74WMgv32EBV5g5L2oAzml40lLEd7JdH7H/081aKvOFAVchfGabH63mklBHTYxO2JkoZbKjSj5hOTBjUyMOtUSOm30HYmDIO4QG74hDxz83evZr5TG7dk82M2Qqb8VKSXlCCLGJUaeaRvqZMQjO+StLO1zNX9QRFrXOUK0axNYMc4urDqElrNTy4hdvL4oAMLthKaOAtXwJNUTZUt2rojnmQb6DniZCamoaitqfdK2rLAg9ImI+QrYVMmxG2p72Af4En1X5fIueiIVcV666p4IPaDNejzbM09khTHyRLG3qtqFAvIFFPvIEfRSJaJyZutNSX0FvmSy/1V1//AcjABU92FgAA" /></Footer>{/_ END_TICKETING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.projects.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListProjectsRequest`

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

Returns a `Project` object with the given `id`.{/_ BEGIN_TICKETING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Xa2/bNhSG/4rBj4YsLXW9IgKGwbFTX1DLbqKsS4tAOKJOJFqUqPBiuy763wdJdpNsaYGk6pD4o2jyIfnw5bH0hVDQGAv5mbhEM5qiZnlMLJKJCDlxyUKKJVJNLAIF8yBD4pIZyhhb/r53q7+YEIsoUxRCaozeMuSRGku8Ji5xsrJzx+TsmmHkJJIph4oVSojR+Takc12NIRbhLE8x6lMqTK5/BKk7dqDu+a/H8mdVLroApXQihYmTM7wxqL7HTHOx5hjF2AlB1SvjmGGugXci0ODcIXVkjXqordxDhBw1RkPQMESNVDOR72ZNtC6U6zgJ8sKuVmBHuHIwd0BqRjkqp9c9fvXmuNfZUarZ/wxi/sdRe3kTivBNO4gpD8C0Zz7deP5k7S3j197g9cbbXvS8bbr1lulv7SCG9syf9eb+ZXc+7B/NH+gQnP/+9/FfJ8OTqdem29Out7xcez49mvk0DbeT7nRE19Px+423vXw1G150Pf+0Nx2Jo/ngTM0GZ2LWt21iEZZrjCWU21TE/fTlbsMuMv2tkdga4mpeqPsjJhnEeMdMfSxQsE5hQs6orbo2ZLAVOayVTUXmZBgxcCpiUBOD8xsDEoN3IhZ2UeW3ssdE/u0AiEtOvXHfG5wO7+eivwLGIeRIXC0N/ifIxP1EIlRUsqLiWCQv92QRiZnQGJTnc/8pKEAnt01VtgPKQSlUt80sItbuyilyVTbfGCYxWoCEDDXKcuarr9ZDOk9AIYWsaEblnva8Nf6UL6ZDU45sRtiCg74WMgv32EBV5g5L2oAzml40lLEd7JdH7H/081aKvOFAVchfGabH63mklBHTYxO2JkoZbKjSj5hOTBjUyMOtUSOm30HYmDIO4QG74hDxz83evZr5TG7dk82M2Qqb8VKSXlCCLGJUaeaRvqZMQjO+StLO1zNX9QRFrXOUK0axNYMc4urDqElrNTy4hdvL4oAMLthKaOAtXwJNUTZUt2rojnmQb6DniZCamoaitqfdK2rLAg9ImI+QrYVMmxG2p72Af4En1X5fIueiIVcV666p4IPaDNejzbM09khTHyRLG3qtqFAvIFFPvIEfRSJaJyZutNSX0FvmSy/1V1//AcjABU92FgAA" /></Footer>{/_ END_TICKETING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveProjectsRequest`

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

Returns a list of `User` objects.{/_ BEGIN_TICKETING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Xa2/bNhSG/4rBj4YsLXW9IgKGwbFTX1DLbqKsS4tAOKJOJFqUqPBiuy763wdJdpNsaYGk6pD4o2jyIfnw5bH0hVDQGAv5mbhEM5qiZnlMLJKJCDlxyUKKJVJNLAIF8yBD4pIZyhhb/r53q7+YEIsoUxRCaozeMuSRGku8Ji5xsrJzx+TsmmHkJJIph4oVSojR+Takc12NIRbhLE8x6lMqTK5/BKk7dqDu+a/H8mdVLroApXQihYmTM7wxqL7HTHOx5hjF2AlB1SvjmGGugXci0ODcIXVkjXqordxDhBw1RkPQMESNVDOR72ZNtC6U6zgJ8sKuVmBHuHIwd0BqRjkqp9c9fvXmuNfZUarZ/wxi/sdRe3kTivBNO4gpD8C0Zz7deP5k7S3j197g9cbbXvS8bbr1lulv7SCG9syf9eb+ZXc+7B/NH+gQnP/+9/FfJ8OTqdem29Out7xcez49mvk0DbeT7nRE19Px+423vXw1G150Pf+0Nx2Jo/ngTM0GZ2LWt21iEZZrjCWU21TE/fTlbsMuMv2tkdga4mpeqPsjJhnEeMdMfSxQsE5hQs6orbo2ZLAVOayVTUXmZBgxcCpiUBOD8xsDEoN3IhZ2UeW3ssdE/u0AiEtOvXHfG5wO7+eivwLGIeRIXC0N/ifIxP1EIlRUsqLiWCQv92QRiZnQGJTnc/8pKEAnt01VtgPKQSlUt80sItbuyilyVTbfGCYxWoCEDDXKcuarr9ZDOk9AIYWsaEblnva8Nf6UL6ZDU45sRtiCg74WMgv32EBV5g5L2oAzml40lLEd7JdH7H/081aKvOFAVchfGabH63mklBHTYxO2JkoZbKjSj5hOTBjUyMOtUSOm30HYmDIO4QG74hDxz83evZr5TG7dk82M2Qqb8VKSXlCCLGJUaeaRvqZMQjO+StLO1zNX9QRFrXOUK0axNYMc4urDqElrNTy4hdvL4oAMLthKaOAtXwJNUTZUt2rojnmQb6DniZCamoaitqfdK2rLAg9ImI+QrYVMmxG2p72Af4En1X5fIueiIVcV666p4IPaDNejzbM09khTHyRLG3qtqFAvIFFPvIEfRSJaJyZutNSX0FvmSy/1V1//AcjABU92FgAA" /></Footer>{/_ END_TICKETING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.projects.usersList("parent_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

**request:** `Merge.ticketing.UsersListProjectsRequest`

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

Returns a list of `Role` objects.{/_ BEGIN_TICKETING_ROLE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92YbW/aSBCA/wq3HxHgS2iuCtKpIjghRMHJJaRtGkXWeD3YC2uv2RdIqfrfT7YhIW3uRbkFOffR6/Vjz+OZ2bW/EQoaIyG/kg7RjE5RszQiDZKIEDnpkCvBkTQIZMyDBEmHDFFGWButp9a6lwPSIMpkmZAawxOGPFSnEsekQ5wkn9w0KRszDJ1YMuVQMUcJETqPlzTHxTWkQThLpxh2KRUm1X8HKSc2oZz5w2F+WmnSIBkopWMpTBRf4cyg+ivmNBULjmGEzQBU+WQcE0w18GYIGpwNUlOWqJfG8hhC5KgxdEGDixqpZiJd3TXWOlMdx4mRZ63iCVohzh1MHZCaUY7KOWgf7r8/PGiuKMXdP/gR/32vPpkFInhf9yPKfTD14Yg+eKPBwptE77zeuwdveXPgLadLbzL9te5HUB+OhgcXo9v2hdvdu3hhgn/92+fDj0fu0ZlXp8vjtje5XXgjujcc0WmwHLTP+nRxdvrHg7e83R+6N21vdHxw1hd7F70rNexdiWG31SINwlKNkYQ8TEU6d982B1Yp043hl+czBwlEuGGkfB2QsWZmAs5oS7VbkMBSpLBQLSoSJ8GQgdONwVczAxJbWZGmhScm0kfVpEOOvdOu1zt2n2dAdw6MQ8CRdLQ0+FPKks4dSfPnbRCJidDo5+6fH/kZ6PhpiIWksSoaHyhFpTaPSyMNYhRKRe7zq2aGSQwvQUKCOh/t3N1/b7yoTEEKdpxBjmqW1ppcRGK/NcnQvryiY/jGFFb+k8m1uXLg9Q6XRmLNxflFpiylX070S6J/XRj1z0UktpmMrwr9CBRSSDI7Ya9p1Q6Z6cDk+WIn5ksOeixkEqyxVeg72+k1Pc7o9MZSrqxgu0qVzf7xquBPJKo4RDW1E/4j7pmArfTb6ixWRdAK5ZxRtFt94w1yFQpwFy5FarmFFcgd2NuOkD7TpyaoDZQyaGkZ7zMdm8AvkZVe1PpMn0NgLWoOwZtpzKfIs9o1FcZyNeRclWN3UBGvC5zNLXXRnLTj9/3vWuervAxSjZKKxI6bNW3Tj//x0N0/7wWVS4kzJi19DOakVchvOxvyQGrX5c6gNoQUouKHjU1Lq23HE7w1yd6wsXOWIkg7gnjBqmoHvQaOaiwkxccM6XFhQjuxP9H99c6U5vTK1NN29mErk55YWNL4yPv/LFEjhGQhpKVvyTVtV362kzcjiZwLS0YK1rMl+5N6cBf9h8r1oE+STS1t4wpUpT9TvmBq7xfKeqO+gvqHs6H5zE4q0xm2UyZfRCxqrjWJOc53f/wPVRWF/2To/vufKHOSzZgcAAA=" /></Footer>{/_ END_TICKETING_ROLE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.roles.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListRolesRequest`

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

Returns a `Role` object with the given `id`.{/_ BEGIN_TICKETING_ROLE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92YbW/aSBCA/wq3HxHgS2iuCtKpIjghRMHJJaRtGkXWeD3YC2uv2RdIqfrfT7YhIW3uRbkFOffR6/Vjz+OZ2bW/EQoaIyG/kg7RjE5RszQiDZKIEDnpkCvBkTQIZMyDBEmHDFFGWButp9a6lwPSIMpkmZAawxOGPFSnEsekQ5wkn9w0KRszDJ1YMuVQMUcJETqPlzTHxTWkQThLpxh2KRUm1X8HKSc2oZz5w2F+WmnSIBkopWMpTBRf4cyg+ivmNBULjmGEzQBU+WQcE0w18GYIGpwNUlOWqJfG8hhC5KgxdEGDixqpZiJd3TXWOlMdx4mRZ63iCVohzh1MHZCaUY7KOWgf7r8/PGiuKMXdP/gR/32vPpkFInhf9yPKfTD14Yg+eKPBwptE77zeuwdveXPgLadLbzL9te5HUB+OhgcXo9v2hdvdu3hhgn/92+fDj0fu0ZlXp8vjtje5XXgjujcc0WmwHLTP+nRxdvrHg7e83R+6N21vdHxw1hd7F70rNexdiWG31SINwlKNkYQ8TEU6d982B1Yp043hl+czBwlEuGGkfB2QsWZmAs5oS7VbkMBSpLBQLSoSJ8GQgdONwVczAxJbWZGmhScm0kfVpEOOvdOu1zt2n2dAdw6MQ8CRdLQ0+FPKks4dSfPnbRCJidDo5+6fH/kZ6PhpiIWksSoaHyhFpTaPSyMNYhRKRe7zq2aGSQwvQUKCOh/t3N1/b7yoTEEKdpxBjmqW1ppcRGK/NcnQvryiY/jGFFb+k8m1uXLg9Q6XRmLNxflFpiylX070S6J/XRj1z0UktpmMrwr9CBRSSDI7Ya9p1Q6Z6cDk+WIn5ksOeixkEqyxVeg72+k1Pc7o9MZSrqxgu0qVzf7xquBPJKo4RDW1E/4j7pmArfTb6ixWRdAK5ZxRtFt94w1yFQpwFy5FarmFFcgd2NuOkD7TpyaoDZQyaGkZ7zMdm8AvkZVe1PpMn0NgLWoOwZtpzKfIs9o1FcZyNeRclWN3UBGvC5zNLXXRnLTj9/3vWuervAxSjZKKxI6bNW3Tj//x0N0/7wWVS4kzJi19DOakVchvOxvyQGrX5c6gNoQUouKHjU1Lq23HE7w1yd6wsXOWIkg7gnjBqmoHvQaOaiwkxccM6XFhQjuxP9H99c6U5vTK1NN29mErk55YWNL4yPv/LFEjhGQhpKVvyTVtV362kzcjiZwLS0YK1rMl+5N6cBf9h8r1oE+STS1t4wpUpT9TvmBq7xfKeqO+gvqHs6H5zE4q0xm2UyZfRCxqrjWJOc53f/wPVRWF/2To/vufKHOSzZgcAAA=" /></Footer>{/_ END_TICKETING_ROLE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveRolesRequest`

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
await client.ticketing.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListSyncStatusRequest`

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

Returns a list of `Tag` objects.{/_ BEGIN_TICKETING_TAG_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92ZbXPiNhCA/wrVRwZwEy69CTOdDsF5IQ1OmjjXy91kPGt5Ywtky5FkyHFz/70j24RwTdsp1V2Bjxbyg/bxai3JnwkFjbGQn0iPaEYnqFkWkxZJRYSc9IgP5gpy5kGKpEdGKGNs+Iuejf7VkLSIKvJcSI3RCUMeqTOJD6RHnNR0bhcZe2AYOYlkyqFiihJidJ5vaT+U95AW4SybYNSnVBSZ/jtI1bENVc+vLs3PSpMWyUEpnUhRxMk1Phao/oo5ycSMYxRjOwRVjYxjipkG3o5Ag/OC1JYV6rU2E0OEHDVGLmhwUSPVTGT1vyZa56rnOAnyvFOOoBPh1MHMAakZ5aicg+7h/tvDg3ZNKf/9lyDmP+81x4+hCN82g5jyAIrmyKdPnj+ceeP4jTd48+TNbw+8+WTujSc/NoMYmiN/dHDp33Uv3f7e5Ssdgpuf3h++O3KPzr0mnR93vfHdzPPp3sink3A+7J6f0tn52W9P3vxuf+Tedj3/+OD8VOxdDq7VaHAtRv1Oh7QIyzTGEkyYivQ+fn7ZUKdMP4EfVnsOU4jxhZHqcUDO2nkRckY7qtuBFOYig5nqUJE6KUYMnH4CgXosQGInL7O09MRE9qya9Mixd9b3Bsfuagb0p8A4hBxJT8sC/5SypPeRZGa8LSIxFRoD4371KshBJ8smFpFWPWcUuTfNjwWTGF2BhBQ1SgO9/9J61YmCDOxIAYNqV1raXMRivzPOcbvtzAuJDRenl7mylDmGGFTE4KZ0FVyIWHzLPFoz+AFndHKb24m7hn2vkP8xOdZ0ciJRJRGqiR0rz7gVL//rrPkvYhTKKaNox80VB/0gZPrwgrwJRXdtQSLTds2UyE1QYqHSnjJ9VoSNoVIFWiq1p0wnRRhUyI0pPHZcXUBoTRKHcKfsCBkzsJRDi6lWQ3dksp0hzxs3VBSWC5LhKoPdFU9saullZkgbOMn+rY8iVLnQy123JTkV9lsmzZoJMMw0SipSO3EuaC8TIXh36O5fDMINSYi1p8o5k5a2kYZUG9rGdZ4ZfsOcujQGaJ633Qpr6Ftr5aZaxDdGkEFcnmvZzJh6h7CEd8b51nn6tVBapLayZkHbnN2lhUpzwTIES4J4ydqR1coVmwoNvOFLoBNrhaeC1swdMXUNnH+yW5hL5K7owZ4J1fI5jsSgpH4HSWvGXb9CPDGzE/mStzFL/3XNJEJqamu7uKDt1GvJR0hnQlo6GF7QNiZxbBiSyLmw5KdkrWykfldP7uz0adstfcDM3veFRe2tocHh46h4z062sQR9EIloHBWx1dWNgS6ZO/L6Lk251nLI4AL3629U2+Po/ssff+OA4VwiAAA=" /></Footer>{/_ END_TICKETING_TAG_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tags.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListTagsRequest`

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

Returns a `Tag` object with the given `id`.{/_ BEGIN_TICKETING_TAG_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92ZbXPiNhCA/wrVRwZwEy69CTOdDsF5IQ1OmjjXy91kPGt5Ywtky5FkyHFz/70j24RwTdsp1V2Bjxbyg/bxai3JnwkFjbGQn0iPaEYnqFkWkxZJRYSc9IgP5gpy5kGKpEdGKGNs+Iuejf7VkLSIKvJcSI3RCUMeqTOJD6RHnNR0bhcZe2AYOYlkyqFiihJidJ5vaT+U95AW4SybYNSnVBSZ/jtI1bENVc+vLs3PSpMWyUEpnUhRxMk1Phao/oo5ycSMYxRjOwRVjYxjipkG3o5Ag/OC1JYV6rU2E0OEHDVGLmhwUSPVTGT1vyZa56rnOAnyvFOOoBPh1MHMAakZ5aicg+7h/tvDg3ZNKf/9lyDmP+81x4+hCN82g5jyAIrmyKdPnj+ceeP4jTd48+TNbw+8+WTujSc/NoMYmiN/dHDp33Uv3f7e5Ssdgpuf3h++O3KPzr0mnR93vfHdzPPp3sink3A+7J6f0tn52W9P3vxuf+Tedj3/+OD8VOxdDq7VaHAtRv1Oh7QIyzTGEkyYivQ+fn7ZUKdMP4EfVnsOU4jxhZHqcUDO2nkRckY7qtuBFOYig5nqUJE6KUYMnH4CgXosQGInL7O09MRE9qya9Mixd9b3Bsfuagb0p8A4hBxJT8sC/5SypPeRZGa8LSIxFRoD4371KshBJ8smFpFWPWcUuTfNjwWTGF2BhBQ1SgO9/9J61YmCDOxIAYNqV1raXMRivzPOcbvtzAuJDRenl7mylDmGGFTE4KZ0FVyIWHzLPFoz+AFndHKb24m7hn2vkP8xOdZ0ciJRJRGqiR0rz7gVL//rrPkvYhTKKaNox80VB/0gZPrwgrwJRXdtQSLTds2UyE1QYqHSnjJ9VoSNoVIFWiq1p0wnRRhUyI0pPHZcXUBoTRKHcKfsCBkzsJRDi6lWQ3dksp0hzxs3VBSWC5LhKoPdFU9saullZkgbOMn+rY8iVLnQy123JTkV9lsmzZoJMMw0SipSO3EuaC8TIXh36O5fDMINSYi1p8o5k5a2kYZUG9rGdZ4ZfsOcujQGaJ633Qpr6Ftr5aZaxDdGkEFcnmvZzJh6h7CEd8b51nn6tVBapLayZkHbnN2lhUpzwTIES4J4ydqR1coVmwoNvOFLoBNrhaeC1swdMXUNnH+yW5hL5K7owZ4J1fI5jsSgpH4HSWvGXb9CPDGzE/mStzFL/3XNJEJqamu7uKDt1GvJR0hnQlo6GF7QNiZxbBiSyLmw5KdkrWykfldP7uz0adstfcDM3veFRe2tocHh46h4z062sQR9EIloHBWx1dWNgS6ZO/L6Lk251nLI4AL3629U2+Po/ssff+OA4VwiAAA=" /></Footer>{/_ END_TICKETING_TAG_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveTagsRequest`

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

Returns a list of `Team` objects.{/_ BEGIN_TICKETING_TEAM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Za3PaOBSG/wqrj4zBm9BsJ8zsdCjOhWxwsglpm2YynoN8sAWyZSQZUjr97zuygSRttjuhCkv4iBAP1uPXuhx/JRQ0RkJ+IU2iGR2hZmlEHJKIEDlpkh5CQhwCGfMhQdIkXZQRVnqLrpXWeYc4ROVZJqTG8JAhD9WxxAFpEjcxnWt5ygYMQzeWTLlUTFBChO7yJ7VB8RviEM7SEYYtSkWe6p9Byo41KHt+99F8rTRxSAZK6ViKPIovcJyj+jfmKBVTjmGEtT6o8so4Jphq4LUQNLgPSDVZop5qM2MIkaPG0AMNHmqkmol0/q+x1plqum6MPKsXV1APceJi6oLUjHJU7l5jf/ft/l5tTin+/V0Q8T93qsNxX/TfVoOI8gDyardH7/xeZ+oPozd++82dP7va82ejmT8c/V4NIqh2e929s95148xr7Zw90SG4/OPT/of33vsTv0pnBw1/eD31e3Sn26Oj/qzTODmi05Pjv+/82fVu17tq+L2DvZMjsXPWvlDd9oXotup14hCWaowkmGEq0rz5+rBhHplWDL897tlJIMIHRsrbARmrZXmfM1pXjTokMBMpTFWdisRNMGTgtmII1DgHifWsiGnhiYl0qZo0yYF/3PLbB97jBLQmwDj0OZKmljn+EFnSvCEhKipZVnAckpqrd4jERGgMzJ14/CnIQMf3TSwkDskVSkVuTeM4ZxLDc5CQoDatzZvbb86TfhSkYEcQGFStVFTjIhK79WGGm2iqnGzU0plDJgynq9ib5RIrHk7OMmUpZYYYlMTgsnAZnIpIbFPm2pzR0VVmR9gc9gpcLZe4MmxP5PCZHg8lqjhENbJjcol75HJDH+HVhSmUE0bRjrNzDnogZDJ4QF7fKlFslII8L4z84kSYsnFuWjHVZmMiV3csUm1XboF8SatrC+AR08d5v9JRKkdLC8YR03HeD0rkK5gFV/V2Cn1rwjj0t9YUh5B/sfv8lcytsiRkxMDSE7jUVEK38JBwjDyrXFKRW57YDVcZ7Es6s7lIriSPTSxtNgzpxeettYWqk2qUVCR23CxoD/0EH/a93dN2/5V7kiKlHEJLnqRI2xzCuac1qFl95CdMWipNGNL6RvycMKxcejBDqphKX6WNJvt2Z2ZD/19NrRyYymV5Cqt0IYWoqKTazND8iHcPrw+zTcrTM439lSstElvpWdBevoCwNkGnLEWwpIcXrM3eH1orjV4CRzUQkuLyiWxzkVtaxu7pwaLqQg19o63+rPS3uudy+L6YWjK75L2CI/JLeo2F1NTWiWdB29rSqnlXOxXSUil6QXsFEVzNlkTOhSVXBevRueejuvOmR3fbZOyjZCNLx+gCtT3n6M+Y2nsHtNj/z6HB/ribf2KHG5qkX6zMfBaxqHjW3Blc4H3//mwzzf2Xr9tv/wCJhadOniMAAA==" /></Footer>{/_ END_TICKETING_TEAM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.teams.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListTeamsRequest`

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

Returns a `Team` object with the given `id`.{/_ BEGIN_TICKETING_TEAM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Za3PaOBSG/wqrj4zBm9BsJ8zsdCjOhWxwsglpm2YynoN8sAWyZSQZUjr97zuygSRttjuhCkv4iBAP1uPXuhx/JRQ0RkJ+IU2iGR2hZmlEHJKIEDlpkh5CQhwCGfMhQdIkXZQRVnqLrpXWeYc4ROVZJqTG8JAhD9WxxAFpEjcxnWt5ygYMQzeWTLlUTFBChO7yJ7VB8RviEM7SEYYtSkWe6p9Byo41KHt+99F8rTRxSAZK6ViKPIovcJyj+jfmKBVTjmGEtT6o8so4Jphq4LUQNLgPSDVZop5qM2MIkaPG0AMNHmqkmol0/q+x1plqum6MPKsXV1APceJi6oLUjHJU7l5jf/ft/l5tTin+/V0Q8T93qsNxX/TfVoOI8gDyardH7/xeZ+oPozd++82dP7va82ejmT8c/V4NIqh2e929s95148xr7Zw90SG4/OPT/of33vsTv0pnBw1/eD31e3Sn26Oj/qzTODmi05Pjv+/82fVu17tq+L2DvZMjsXPWvlDd9oXotup14hCWaowkmGEq0rz5+rBhHplWDL897tlJIMIHRsrbARmrZXmfM1pXjTokMBMpTFWdisRNMGTgtmII1DgHifWsiGnhiYl0qZo0yYF/3PLbB97jBLQmwDj0OZKmljn+EFnSvCEhKipZVnAckpqrd4jERGgMzJ14/CnIQMf3TSwkDskVSkVuTeM4ZxLDc5CQoDatzZvbb86TfhSkYEcQGFStVFTjIhK79WGGm2iqnGzU0plDJgynq9ib5RIrHk7OMmUpZYYYlMTgsnAZnIpIbFPm2pzR0VVmR9gc9gpcLZe4MmxP5PCZHg8lqjhENbJjcol75HJDH+HVhSmUE0bRjrNzDnogZDJ4QF7fKlFslII8L4z84kSYsnFuWjHVZmMiV3csUm1XboF8SatrC+AR08d5v9JRKkdLC8YR03HeD0rkK5gFV/V2Cn1rwjj0t9YUh5B/sfv8lcytsiRkxMDSE7jUVEK38JBwjDyrXFKRW57YDVcZ7Es6s7lIriSPTSxtNgzpxeettYWqk2qUVCR23CxoD/0EH/a93dN2/5V7kiKlHEJLnqRI2xzCuac1qFl95CdMWipNGNL6RvycMKxcejBDqphKX6WNJvt2Z2ZD/19NrRyYymV5Cqt0IYWoqKTazND8iHcPrw+zTcrTM439lSstElvpWdBevoCwNkGnLEWwpIcXrM3eH1orjV4CRzUQkuLyiWxzkVtaxu7pwaLqQg19o63+rPS3uudy+L6YWjK75L2CI/JLeo2F1NTWiWdB29rSqnlXOxXSUil6QXsFEVzNlkTOhSVXBevRueejuvOmR3fbZOyjZCNLx+gCtT3n6M+Y2nsHtNj/z6HB/ribf2KHG5qkX6zMfBaxqHjW3Blc4H3//mwzzf2Xr9tv/wCJhadOniMAAA==" /></Footer>{/_ END_TICKETING_TEAM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveTeamsRequest`

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

Returns a list of `Ticket` objects.{/_ BEGIN_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListTicketsRequest`

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

Creates a `Ticket` object with the given values.{/_ BEGIN_TICKETING_TICKET_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9WbbVPqOBTHvwrblw4Pq173jszs7CB4FVeqq3gf507nkB5KJG1qkoJy5373nbQFQQF5SAFfaUv4J+0v5+Sck/DLIqDQ4+LJKluKki4qGnhW3vK5i8wqW834npW3IKQ2+GiVrQYKD3PNYeNc5bpu5S0ZhSEXCt1PFJkrzwW2rbJV8nXjQhTQNkW31BFUlgjvoQAPS6OvFNrxd6y8xWjQRbdCCI8CNU8kaViApOWLS/2x1IMOQUrVETzyOjf4EKGcpdkNeJ+h62GhBTIZGUMfAwWs4IKC0phSQSRS0+7pZ3CRoUK3BgpqqJAoyoO0145SoSyXSh1kYTEeQdHFXgmDEghFCUNZOjo8Pvh4fFRIVeLe/3E89vf+3v1Di7c+7jkeYQ5Ee40mebSb9b59732wqx8e7cHdkT3oDuz77p97jgd7jWbj6Kr57fCqVtm/mtLAuf3r6/Hnk9rJhb1HBqeH9v23vt0k+40m6bYG9cOLM9K/OP/v0R58O2jU7g7t5unRxRnfv6reyEb1hjcqxaKVt2ig0BOgH1Na5R+/xm+kU6bSgT8mW9Z98HDsjSQ4IKSFMGoxSorysAg+DHgAfVkk3C/56FIoVTrgyIcIBBbDeKLG74nyYPSqrbJ1ap9X7OppbXIGVHpAGbQYWmUlInw1Za3yDwukpF6AqDkSzlgiGV8JBMVF3KMkgoZxX3nLjdBxQaGVtwL9sLpLgYFy1NByBPpcoRMLoOvA2D3qPv8fhe7z51KBimRsVq1USV8p8OI/8Q1HPYX4fBUJZv3Uag8RFehegwAfFYr4udKhpV0l5lYcv3IIAylfNekBi/BFjz9/56cylhCAGcigpQoJ5gLjHj8o3oc4i7ZdadY/n67PGlpcaMSv2c8kHntJJ4pijsvjH7m9TU+HFefBLPKDSGCuhr2rUBqycq3oJIrObTwPnEvu8cxtHpQC0tGO3/AsCAXlgqqnHZ0Qk0+6uLdYwC+cgEQCfmhmZgzVFpwVpnzDArNgCF7weyRr+/0Voc1iQFUrSmeiAQjXDFSbC781lN2tJXlEYhGTWxjFetY0A0yVUdK9M2QbqdjWTINwP4yD1uQFrh4xjZEzZE7z3GQGjnEG7U8CZcdF2TXDeyQ3QTyLSClJq/T6OAE/UBCjedsnGrLEVZe3yQGOvXon1O1kEX2gbKmVb3qcnA51Hn+JokcJmvXE7THlzTnjjfN/v+B5YHjtjSXfRp2Fl5+Ofen4Z4ZZL+GOpwxgBoAzqs6jVq4uZYSGcpQzqjpRy0kkdyQcnZzFG3ayRpfKM6ouoWWMFIPWRvPI7eQMBsnNwsLAZU9mPVmiuenc4dmLrYHDWI4wNogpi1Q6WGe4WM1pkj7CPIbnyMLcLeGR4RVJ60otm2UAstRatNW0783Q4yXVucxoz1DEqJV22RW+SgW3m/+NP8lrhtPB9rnoyhBIOrB5XOuBQkG4b4btUG2cr/P5uHZwWW1thPNkCX2yGjAy1R0u20z3Jmar5XXBA8LANYRc8KDKwE2RZ+NzR8AM+tX5JEY9LmpzCv2QgUJnfBzJrrCTli+G35/B5YIKQ9tXWultHllmZpsrvb27HYuV9zc11Zze1M9VUftZs8GTVs94sszb28qidPtuZs2i8G+T+lquAQF48ekQk/4iLd49ixfvw81mREuu13PrfDuY0i4E+t9IKu6bsu6h2qIF+jW4vlGiz6ISP/PlZ57CXtIAwRAjFmtlWEklBKV0GPaQvcJj5oSRKapvZUl5q0exryEvaHdTAzXwnZiNM35ewmyMfU17XAHLNQWQrrGlOhFNNbez5b3r5d4FPOwNMNMVxFhyK3shO22yu3U+8BYYyjYXBEeBVJXxyFAe/KzuDLdBiVbP3D6n1zA2Q3tpzPOrWcVRP2tu3qR8bd43BHekl33l8mUc5Tp6xZIvVu6XudT6ofNO5lELLPiZuowOF4qY2qcYqm0gGH9P5e8EwPpbg7chVzUBbcO7SjLkytWyWQZcCwZSGdcwY8+DQl+qp/mZ0njDNhVylDW92ZrB3MZT66iZxOhNBF/vlJiZLkO17R1+XKVKYjByXz5WT31LcbwnU2wFMsYNkY21Jra0vsjHWv/scafOfW8H5aoR2hdBu4Y2lGOprM1uRnVrvaV1N2JykxsZM2h/x8DcqePhwpyKOscPjegr/bRB6msVpnfhAPKqVvudd3juJPKMlrW06LPmJstaK/zgbgfOCGRvrZpyzZi9ajmn9vJXAhvJnZc8Jr614x6LBugu6hhaZ/0TJ3t+/v4fL2+460c/AAA=" /></Footer>{/_ END_TICKETING_TICKET_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Ticket` object with the given `id`.{/_ BEGIN_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveTicketsRequest`

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

Updates a `Ticket` object with the given `id`.{/_ BEGIN_TICKETING_TICKET_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE9WYa2/iOBSG/wrrjwjItkx3VKTVioFeqIa009LOdEeVdXBOg8GJU9uBltH891USyq2wXGo600/gxHmdnMfv8bF/EAYGfameSIUYznpoeOiTAgmkh4JUSCu9RgoEIu5CgKRCmqh8zLWeO+eqFw1SIDqOIqkMescchadPFd6TCnGCpHMxDvk9R8/pKK4dJvuowEdn/EjxPn2GFIjgYQ+9KmMyDs3/iWQdi5D1nGsmt3Xy0hFobTpKxn7nEh9i1Ms0e6EcCPR8LLZBZ28mMMDQgCh6YMCZUiqqTGrRteQbPBRo0KuDgToaZIbLcDRqx5hIVxyngyIqpW9Q8rDvYOiAMpwJ1M5B+XD/4+FBcaSSjv4P9cXfe/nuQ1u2P+apzwSFON9ssUe31Ri4Xf+DW/vw6A6vD9xhb+h2e3/mqQ/5Zqt5cN66LZ/Xq3vnCzrQq7++Hd58qn86c/NseFR2u7cDt8X2mi3Waw8b5bMTNjg7/fLoDm/3m/Xrsts6Ojg7kXvntUvdrF3KZrVUIgXCQ4O+guQzNal8/zF9YTRlqh34Y7ZnIwAfpyKS4YCIF6O4LTgr6XIJAhjKEAa6xGTgBOhxcKodoPohBoWlKJ2oaZy4DMehJhVy5J5W3dpRfXYGVPvABbQFkopRMb6YsqTynYDW3A8RE45MCpFJZlQ1UzxKRygQL0bqgUFSIGHyiclACkNDzbNfFAbSIOXe5H8cJY94FJL72oCJdWqc9uippGXAT3/SC9Q8RThpxUqQu0TtIeYKvQtQEKBBlb75aIzMSaXpFmUCtCZ3PwsL0WgIwQ4bSKSKGZ2ikL7cL3UjXAbJrbYaN0evQ/TroCzjsCzKw1hhro7980hbMkKiSDNFepXGnH6Wvty5LcAYYJ0kN740CZNBlKatLJyb4okUl4qbpwmd8cLwXuxUE5z1riM7jEdia+K1Yah1AablAY3jlMdqmpGSXWRTDmQKJ+xew9Y6wGOFuuOh7tlBOJabgbjjtMhkaICt5cAXjltNYYNsuDWFE25O43auoXWMlhLmCTeduE0zyTe11PIyYkxhzh5bQdhtYmuEBhWTgR0Yz2rTHOjNYX3/c629kxVszcBaD9sZV5aqq0RpFK4dz9jNk8aidL750v0WiSWJYi7ZmuVqmMxBO2wuBJh7qYJEfcdwNii/UipSWSnEFhFOtqazLRqB6bzj6i2dHVeo+pxhrgkh+OkhgE0DZ+J0Il7qRrst2FfBf1VJ9hae/cxDBEtOFanW6iOEra3KGGpNBfZRJG61dp6wniW3dFif4yCBZB3dJQjxZDfHppI7BPgeiG3PaS43l/ogYlxG7woE6nupGI6TYk3I2LMDdKJO9SgrskR95ycYsyA33MpOY1uIyLqHRqF35cBS3Md6uz83ys7jJ4nQowYh0HOZcb6mma1ixpvZNeqZ7WDO1ylvmjk3cmRLoRDSzjzItGZ2YF/1Y31w8vhbpdXNShHr7vuqeA/tBDyV+k1OHrZZvlbW+xuvZW9W2P+Lob0zvedKZCRKDx+a8Td+vOtd+Yos9+tP8u5+/gd1WS+iTx4AAA==" /></Footer>{/_ END_TICKETING_TICKET_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Viewer` objects that point to a User id or Team id that is either an assignee or viewer on a `Ticket` with the given id. [Learn more.](https://help.merge.dev/en/articles/10333658-ticketing-access-control-list-acls){/_ BEGIN_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.viewersList("ticket_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

**request:** `Merge.ticketing.ViewersListTicketsRequest`

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

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Ticket` PATCHs.{/_ BEGIN_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.MetaPatchRetrieveTicketsRequest`

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

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">metaPostRetrieve</a>({ ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Ticket` POSTs.{/_ BEGIN_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.MetaPostRetrieveTicketsRequest`

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

<details><summary><code>client.ticketing.tickets.<a href="/src/api/resources/ticketing/resources/tickets/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_TICKETING_TICKET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.tickets.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.RemoteFieldClassesListTicketsRequest`

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

Returns a list of `User` objects.{/_ BEGIN_TICKETING_USER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2abVPbOBDHv0pOL5k8HFCuQ2ZubkJMIRwxHIQ+XKfjWcsbR4lsGUlOaDr97jeyk5C00JIgJ6Fzr4iN/Lf929VqvasvhILGUMjPpE40owPULA5JmUQiQE7q5EahJGUCCXMhQlInbZQhljrToaXGZYuUiUqTREiNwRuGPFCnErukTmqRGVxJY9ZlGNR6kqkaFUOUEGJtdkmlm11DyoSzeIBBg1KRxvpHIvnACuQjvzk0/1aalEkCSumeFGnYu8LbFNVjmoNYjDgGIVZ8UPmTcYww1sArAWiozSlVZC710DnzDgFy1Bg4oMFBjVQzEU/u2tM6UfVarYc8qWZPUA1wWMO4BlIzylHVDvYP914fHlQmKtnd//JC/ufuTv/WF/7rHS+k3IN0p92hd26nNXL74Su3+erOHd8cuOPB2O0Pft/xQthpd9oHF50P+xdOY/figQHe9R/vD98eOUdn7g4dH++7/Q8jt0N32x068Met/bMTOjo7/efOHX/Yazs3+27n+ODsROxeNK9Uu3kl2o1qlZQJizWGEsxrKlL/+GX+xMRlGj34bXFkK4IQ54jk5oCEVZLU54xW1X4VIhiLGEaqSkVUizBgUGv0wFO3KUisJpmbZpyYiGeoSZ0cu6cNt3nsLHpAYwiMg8+R1LVM8TuXJfWPhArOcxljSSoi4wPZT4mgMfDyGWLOYASMexAEEpU5ZsoDqtkQSZnE5rXLRGIkNHrGhItHXgK6d3+KBea34Gh0NEKU/Z3c6ZMZdpsyicElSIhQozTP+ulr+UHUCmKwwxqMVCWnXeEiFHvVfoKPQXcbndbb4+WRwxA0yIw25+ALCVrIOc5LGcEm+DIZMhwZ2MuaYJxKLDk4vEiUJa83il6u6F1nBvHORSgKmQNzBtkQ+SV5H4FCClFih/VU7YmcLbj9JoLMiqSZ9lNzpR3Ulxx0V8jIn8oWGdoX4swTY/wGEDc5o4MbS748ESs+ZGgNtDfluArp9aymLA7zmL66fRx2Z2l5nXq/UVyT488MYCN6rwjwjUTVC1AN7FCcyS04+Q/ylOckh4/y25LkL4OhUA4ZRbtO2p1TLjYB337GIra8/mWShYaAhfj8aFjeUuInTJ+mfqmlVIqWEuoTpnup7+WShS+PW7DyrQL9HHxrtDn46/xw2bK8Y3n6HAL+2W6UyTXXHbVXyiyeCU/IkIGlSDGjl4uuM0oXFpefyfcUeVK6piK1vAwaXWVk1wf5xdU6TnOrW6BulNb8YfjzMJFI0UeajdgI3dRXidD3zQ1LqHPZQvPm75x2RQStWKOkIrLz5lO1eUfz3h46e+dNv7ACvt0isk3/akkRUw6BJbhSxE0OwQTu1vLc8HJ1xqSlio1RKhK2jbWpqAR25W6IgVYyzdBSE000sJszGPUiqvNbV9C0MAlK13n9ptSGGMKsvW1zXkyKQ/fi1X7y/xx5knX+TpUWka25MVUrviK6bHq3To8/ZzGCJaI801p3kf4FOvIlGwoNvNSRQAfWYn0uOtFcb530wdznieXTNTZVroDbLhdlktv+Jf7sVXVF3Fg36Cz3WCR6mWrRG5we8OknfAKtiOoaOKqukBRn6UeTi9TSJ9C9ujdtTlGj/svH6Ic62StH7YlhXDGyZJWZ3va2VrLtrV6aZoy31S49ITW1VWadqq0/LfxZCeHpU8ZGYnidCO1I6FquXpsKX2Bkiwzfz08xloTVQYhGQlrarDFV+zU2JG24WN2RyLmwZJhMa6FK+07dOaOTu5drnk3Y5J1kA0tZYSa1uQbNi0H+L8b2dpNNg/lE1Du8bafv2Zv1Vhg3XW+3ZRjRE6WjNLRaCzCi95pbUAsorkn/DOqOtQlh5Dzn2+2VRU+HrdqT9unrf5wadwIkNwAA" /></Footer>{/_ END_TICKETING_USER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ticketing.users.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ticketing.ListUsersRequest`

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

Returns a `User` object with the given `id`.{/_ BEGIN_TICKETING_USER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2abVPbOBDHv0pOL5k8HFCuQ2ZubkJMIRwxHIQ+XKfjWcsbR4lsGUlOaDr97jeyk5C00JIgJ6Fzr4iN/Lf929VqvasvhILGUMjPpE40owPULA5JmUQiQE7q5EahJGUCCXMhQlInbZQhljrToaXGZYuUiUqTREiNwRuGPFCnErukTmqRGVxJY9ZlGNR6kqkaFUOUEGJtdkmlm11DyoSzeIBBg1KRxvpHIvnACuQjvzk0/1aalEkCSumeFGnYu8LbFNVjmoNYjDgGIVZ8UPmTcYww1sArAWiozSlVZC710DnzDgFy1Bg4oMFBjVQzEU/u2tM6UfVarYc8qWZPUA1wWMO4BlIzylHVDvYP914fHlQmKtnd//JC/ufuTv/WF/7rHS+k3IN0p92hd26nNXL74Su3+erOHd8cuOPB2O0Pft/xQthpd9oHF50P+xdOY/figQHe9R/vD98eOUdn7g4dH++7/Q8jt0N32x068Met/bMTOjo7/efOHX/Yazs3+27n+ODsROxeNK9Uu3kl2o1qlZQJizWGEsxrKlL/+GX+xMRlGj34bXFkK4IQ54jk5oCEVZLU54xW1X4VIhiLGEaqSkVUizBgUGv0wFO3KUisJpmbZpyYiGeoSZ0cu6cNt3nsLHpAYwiMg8+R1LVM8TuXJfWPhArOcxljSSoi4wPZT4mgMfDyGWLOYASMexAEEpU5ZsoDqtkQSZnE5rXLRGIkNHrGhItHXgK6d3+KBea34Gh0NEKU/Z3c6ZMZdpsyicElSIhQozTP+ulr+UHUCmKwwxqMVCWnXeEiFHvVfoKPQXcbndbb4+WRwxA0yIw25+ALCVrIOc5LGcEm+DIZMhwZ2MuaYJxKLDk4vEiUJa83il6u6F1nBvHORSgKmQNzBtkQ+SV5H4FCClFih/VU7YmcLbj9JoLMiqSZ9lNzpR3Ulxx0V8jIn8oWGdoX4swTY/wGEDc5o4MbS748ESs+ZGgNtDfluArp9aymLA7zmL66fRx2Z2l5nXq/UVyT488MYCN6rwjwjUTVC1AN7FCcyS04+Q/ylOckh4/y25LkL4OhUA4ZRbtO2p1TLjYB337GIra8/mWShYaAhfj8aFjeUuInTJ+mfqmlVIqWEuoTpnup7+WShS+PW7DyrQL9HHxrtDn46/xw2bK8Y3n6HAL+2W6UyTXXHbVXyiyeCU/IkIGlSDGjl4uuM0oXFpefyfcUeVK6piK1vAwaXWVk1wf5xdU6TnOrW6BulNb8YfjzMJFI0UeajdgI3dRXidD3zQ1LqHPZQvPm75x2RQStWKOkIrLz5lO1eUfz3h46e+dNv7ACvt0isk3/akkRUw6BJbhSxE0OwQTu1vLc8HJ1xqSlio1RKhK2jbWpqAR25W6IgVYyzdBSE000sJszGPUiqvNbV9C0MAlK13n9ptSGGMKsvW1zXkyKQ/fi1X7y/xx5knX+TpUWka25MVUrviK6bHq3To8/ZzGCJaI801p3kf4FOvIlGwoNvNSRQAfWYn0uOtFcb530wdznieXTNTZVroDbLhdlktv+Jf7sVXVF3Fg36Cz3WCR6mWrRG5we8OknfAKtiOoaOKqukBRn6UeTi9TSJ9C9ujdtTlGj/svH6Ic62StH7YlhXDGyZJWZ3va2VrLtrV6aZoy31S49ITW1VWadqq0/LfxZCeHpU8ZGYnidCO1I6FquXpsKX2Bkiwzfz08xloTVQYhGQlrarDFV+zU2JG24WN2RyLmwZJhMa6FK+07dOaOTu5drnk3Y5J1kA0tZYSa1uQbNi0H+L8b2dpNNg/lE1Du8bafv2Zv1Vhg3XW+3ZRjRE6WjNLRaCzCi95pbUAsorkn/DOqOtQlh5Dzn2+2VRU+HrdqT9unrf5wadwIkNwAA" /></Footer>{/_ END_TICKETING_USER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ticketing.RetrieveUsersRequest`

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

<details><summary><code>client.ats.accountToken.<a href="/src/api/resources/ats/resources/accountToken/client/Client.ts">retrieve</a>(publicToken, { ...params }) -> Merge.AccountToken</code></summary>
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

**request:** `Merge.ats.RetrieveAccountTokenRequest`

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

Returns a list of `Activity` objects.{/_ BEGIN_ATS_ACTIVITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WYa2/iOBSG/wryRwRkWsp2irRacWkLTBMopNPpjqroxDkkBicOtgMto/nvq3Bpm93uatumMP1GjPPafvye4xP/IBQ0+kLekzoBrUiJhMJDTuqkQTWbM31PSgRiZkGIpE5MlD4WGvao0Bh0SYmoJI6F1OidMeSe6kgckzoxwrRbOYnYmKFnBJIpg4o5SvDReHilPF69Q0qEs2iKXoNSkUT6v0TWHcuw7vm3x/RvpUmJxKCUDqRI/GCIswTVv2lOI7Hg6PlYdkGtZ8YxxEgDL3ugwXiiVJZrqefa0jV4yFGj1wYNbdRINRPRZtRA61jVDSNAHldWM6h4ODcwMkBqRjkqo1Y9OTw+qZU3KqvR/3B8/vtBcTJzhXtcdHzKHUiKpk3vLLu7sCb+kdU6urOWVzVrOV1ak+mnouND0bTNWt++qfbbjYP+Mx2c0W/fTr42282eVaTL06o1uVlYNj0wbTp1l91q75wuep3LO2t5c2i2r6qWfVrrnYuDfmuozNZQmI1KhZQIizT6EtJlKlL//uNpw8YsjTjmjEKkRxroNPtONwQfn7BZbwzErBwnLme0oqoVCGEpIlioChWhEaLHwMhqOqNZAhKdC+ELZ9Hs3HwdXlQmsb/dDyaih80gdXJqdRpW67Sd9UhjDoyDy5HUtUzwH6Ym9e8ENsHg6PsYSYlIDIVGh0oEjZ4D+rEt3brskxODDlbB4k6Qpl0ThZLcpp1mCZPoDUBCiBplOtjtz9KzNFXg3ucEMZXKsKsml9cwX1Ti6P3ZucJL10Eh8pgH+tU4N03MeyXQZsJ5IGRUGCKVCdNp4BdaXCRePpTdjb4jH/Udmuo7ao1+1GzH3en8w1J/m6FbDXuUD+lUKWPn3pE1nYnTnaSCDdg9wzzjoGkg8+E54KDHQoYbUWcatlpBd7Yvnz78dsbTdyBdInOmmMt4Wuy8FHtaeACL8uG+VXvq5Z1A37N5zyViFIhEYT4cH/UyJHeYDd4zzb7Frx0RokxysmuwFttlWnhj3fV6cD1YLjvDfLittTIH1vUlNdum9+vWrvkFe0+4IypkTqG+VSuvS6oPW0q9ObIvcI45Hf8rqYw9xY3/+b55vZcM+usd+iZEoIHnW2ttRPdi4JwRvxDnCHws5JVbUzHnSXKtuoujY/PDHFEvRdcYFEYJpajUGVAtpMqJYkYzkwqa9Jvwzz7tuZh6v1sBGyHUwLjIKZk+6u2rFt3zeW9LGI+ZzjdbbkSdie31an9e7CS+czzvX4jw6st5YSDF9qKKrRabA82rL+fbq6jD5sy767N3AbmDT/rXGPNayOlq5rmw3KplkmV/zrnFTz7Ul+f/jvbbn38BiC/f+D4aAAA=" /></Footer>{/_ END_ATS_ACTIVITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.activities.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListActivitiesRequest`

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

Creates an `Activity` object with the given values.{/_ BEGIN_ATS_ACTIVITY_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE81WXXPaOBT9K4weGWM3obQbZnZ2DCQEWgzlo22mk/FcSxcjkC0jyRDo5L/vmI8AKdk81LubR19fHV2dc+6VfhIKBkOpVqRKwGhikUgyFKRKXGr4gpsVsQgk3IMISZV0UIVYcIeDgttrEYvoNEmkMshuOAqmbxWOSZU4UZZWSmM+5sicieLaoXKBCkJ0npaUxps1xCKCxzNkLqUyjc0/gWwTS7DNfPaZ/daGWCQBrc1EyTSc9HGeon4JcxbLpUAWYikAva1MYISxAVFiYMA5QiqpLdS5WHYGhgINsgYYaKBBariMd7tOjEl01XEmKBJ7U4HNcOFg7IAynArUTqV8dfnxqlLaoWx2/8sPxZ8Xxek8kMHHoh9S4UNa7AzpgzdsLb1p+N6rv3/w1qOKt56tvensXdEPodgZdird4V2523AvumcS/MGH71dfa41a2yvS9XXZm94tvSG96AzpLFi3yu0mXbZvvzx467vLTmNU9obXlXZTXnTrfd2p92XHtW1iER4bDBVkx9Sk+uPncWBnFldPgtVpaiuCEI8o2eoBCS8laSA4tXXZhgjWMoaltqmMnAgZB2cD5Q/mKSj0P8tQ+uX0yzdYLO0kDvfscxk/UU+q5Nq7db36dePUEe4CuIBAIKkaleIvFibVHwR21vfNKkFikUCy7BwUYsYZmCykMJIGfaoQDDIfzCHGGbFIqlGR+yw2T7lC1gMFERpUmw12gEfE+EmWoO2nPfwNNRnY/aN1jt1aKsREqrjQR6pSbjLfFupCpiwfyoMdvq8O+D7N8H291WFQaySt2eINSpC1z+mXn4CZPNNIp8EUqXlVree1HIp4QZqmQownMtWYjxQHvOMWsKfJW+P9HK0WWXDNAy6yuyQ/jlvxmMfcYKGmQOs+33gwB673uHuTS/lhRNvlN2jybDS8MmBeZbEtA5exjUo5cNcTYMZSRVMZQIa64/C/5C6HufwCVZ9xkRdPG6iT20zehX+sat/eZkv/1jXG2e9edAO3VxiklKLWN0CNVDofFU4xT+So0e8yvHn3P8uRR4OPPjULPSX3j4TcxuToU3M/IS9rc/bQ5f9Kl58h52Cc8Syvh9gx/nbB4/3j32BfhwkcDQAA" /></Footer>{/_ END_ATS_ACTIVITY_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Activity` object with the given `id`.{/_ BEGIN_ATS_ACTIVITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WYa2/iOBSG/wryRwRkWsp2irRacWkLTBMopNPpjqroxDkkBicOtgMto/nvq3Bpm93uatumMP1GjPPafvye4xP/IBQ0+kLekzoBrUiJhMJDTuqkQTWbM31PSgRiZkGIpE5MlD4WGvao0Bh0SYmoJI6F1OidMeSe6kgckzoxwrRbOYnYmKFnBJIpg4o5SvDReHilPF69Q0qEs2iKXoNSkUT6v0TWHcuw7vm3x/RvpUmJxKCUDqRI/GCIswTVv2lOI7Hg6PlYdkGtZ8YxxEgDL3ugwXiiVJZrqefa0jV4yFGj1wYNbdRINRPRZtRA61jVDSNAHldWM6h4ODcwMkBqRjkqo1Y9OTw+qZU3KqvR/3B8/vtBcTJzhXtcdHzKHUiKpk3vLLu7sCb+kdU6urOWVzVrOV1ak+mnouND0bTNWt++qfbbjYP+Mx2c0W/fTr42282eVaTL06o1uVlYNj0wbTp1l91q75wuep3LO2t5c2i2r6qWfVrrnYuDfmuozNZQmI1KhZQIizT6EtJlKlL//uNpw8YsjTjmjEKkRxroNPtONwQfn7BZbwzErBwnLme0oqoVCGEpIlioChWhEaLHwMhqOqNZAhKdC+ELZ9Hs3HwdXlQmsb/dDyaih80gdXJqdRpW67Sd9UhjDoyDy5HUtUzwH6Ym9e8ENsHg6PsYSYlIDIVGh0oEjZ4D+rEt3brskxODDlbB4k6Qpl0ThZLcpp1mCZPoDUBCiBplOtjtz9KzNFXg3ucEMZXKsKsml9cwX1Ti6P3ZucJL10Eh8pgH+tU4N03MeyXQZsJ5IGRUGCKVCdNp4BdaXCRePpTdjb4jH/Udmuo7ao1+1GzH3en8w1J/m6FbDXuUD+lUKWPn3pE1nYnTnaSCDdg9wzzjoGkg8+E54KDHQoYbUWcatlpBd7Yvnz78dsbTdyBdInOmmMt4Wuy8FHtaeACL8uG+VXvq5Z1A37N5zyViFIhEYT4cH/UyJHeYDd4zzb7Frx0RokxysmuwFttlWnhj3fV6cD1YLjvDfLittTIH1vUlNdum9+vWrvkFe0+4IypkTqG+VSuvS6oPW0q9ObIvcI45Hf8rqYw9xY3/+b55vZcM+usd+iZEoIHnW2ttRPdi4JwRvxDnCHws5JVbUzHnSXKtuoujY/PDHFEvRdcYFEYJpajUGVAtpMqJYkYzkwqa9Jvwzz7tuZh6v1sBGyHUwLjIKZk+6u2rFt3zeW9LGI+ZzjdbbkSdie31an9e7CS+czzvX4jw6st5YSDF9qKKrRabA82rL+fbq6jD5sy767N3AbmDT/rXGPNayOlq5rmw3KplkmV/zrnFTz7Ul+f/jvbbn38BiC/f+D4aAAA=" /></Footer>{/_ END_ATS_ACTIVITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveActivitiesRequest`

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

Returns metadata for `Activity` POSTs.{/_ BEGIN_ATS_ACTIVITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WYa2/iOBSG/wryRwRkWsp2irRacWkLTBMopNPpjqroxDkkBicOtgMto/nvq3Bpm93uatumMP1GjPPafvye4xP/IBQ0+kLekzoBrUiJhMJDTuqkQTWbM31PSgRiZkGIpE5MlD4WGvao0Bh0SYmoJI6F1OidMeSe6kgckzoxwrRbOYnYmKFnBJIpg4o5SvDReHilPF69Q0qEs2iKXoNSkUT6v0TWHcuw7vm3x/RvpUmJxKCUDqRI/GCIswTVv2lOI7Hg6PlYdkGtZ8YxxEgDL3ugwXiiVJZrqefa0jV4yFGj1wYNbdRINRPRZtRA61jVDSNAHldWM6h4ODcwMkBqRjkqo1Y9OTw+qZU3KqvR/3B8/vtBcTJzhXtcdHzKHUiKpk3vLLu7sCb+kdU6urOWVzVrOV1ak+mnouND0bTNWt++qfbbjYP+Mx2c0W/fTr42282eVaTL06o1uVlYNj0wbTp1l91q75wuep3LO2t5c2i2r6qWfVrrnYuDfmuozNZQmI1KhZQIizT6EtJlKlL//uNpw8YsjTjmjEKkRxroNPtONwQfn7BZbwzErBwnLme0oqoVCGEpIlioChWhEaLHwMhqOqNZAhKdC+ELZ9Hs3HwdXlQmsb/dDyaih80gdXJqdRpW67Sd9UhjDoyDy5HUtUzwH6Ym9e8ENsHg6PsYSYlIDIVGh0oEjZ4D+rEt3brskxODDlbB4k6Qpl0ThZLcpp1mCZPoDUBCiBplOtjtz9KzNFXg3ucEMZXKsKsml9cwX1Ti6P3ZucJL10Eh8pgH+tU4N03MeyXQZsJ5IGRUGCKVCdNp4BdaXCRePpTdjb4jH/Udmuo7ao1+1GzH3en8w1J/m6FbDXuUD+lUKWPn3pE1nYnTnaSCDdg9wzzjoGkg8+E54KDHQoYbUWcatlpBd7Yvnz78dsbTdyBdInOmmMt4Wuy8FHtaeACL8uG+VXvq5Z1A37N5zyViFIhEYT4cH/UyJHeYDd4zzb7Frx0RokxysmuwFttlWnhj3fV6cD1YLjvDfLittTIH1vUlNdum9+vWrvkFe0+4IypkTqG+VSuvS6oPW0q9ObIvcI45Hf8rqYw9xY3/+b55vZcM+usd+iZEoIHnW2ttRPdi4JwRvxDnCHws5JVbUzHnSXKtuoujY/PDHFEvRdcYFEYJpajUGVAtpMqJYkYzkwqa9Jvwzz7tuZh6v1sBGyHUwLjIKZk+6u2rFt3zeW9LGI+ZzjdbbkSdie31an9e7CS+czzvX4jw6st5YSDF9qKKrRabA82rL+fbq6jD5sy767N3AbmDT/rXGPNayOlq5rmw3KplkmV/zrnFTz7Ul+f/jvbbn38BiC/f+D4aAAA=" /></Footer>{/_ END_ATS_ACTIVITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Application` objects.{/_ BEGIN_ATS_APPLICATION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_APPLICATION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.applications.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListApplicationsRequest`

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
{/_ BEGIN_ATS_APPLICATION_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE+WZa3PaOBSG/wqjjxkuTUi2DTM7O9xCoMGkgTTNdjoaWToxAllyJBkCnf73HRuThJZcOhEku/sNC/m19fg9OufY3xElFgKlZ6iCiDUoj0LFQKAKqkaR4JRYriTKIxJxj4SAKqgLOoBcddDPVU/bKI9MHEVKW2BHHAQzxxquUAWVwmRaIZb8igMrDTU3JaomoEkApdtTClfpOSiPBJdjYFVKVSztYyKLiQWymPnTYfK3sSiPImKMHWoVB8MzuI7BPKQ5lmoqgAVQ8IlZ3JmAEKQlosCIJaV7SgW9kFo3lqyBgQALrEEsaYAFmqDLrjq0NjKVUmkIIiqmd1BkMCmBLBFtORVgSgflw733hweFTCW9+l84EH/u7oyufeW/38EBFZjEO90BvfEG7ak3Cva9+v6NNz8/8ObjuTcav9vBAdnpDroHvcFludeo7vbWTMD9P74cfq41ah1vh86bZW90OfUGdLc7oGN/3i53WnTaOf50480v97qN87I3aB50Wmq3Vz8z3fqZ6laLRZRHXFoIdOoQgypfv98fyMxSNUN/tjq1HZIA7iFZPA8S8UIU+4LToikXSUjmSpKpKVIVlkJgnJRSKdy/jokGfKIChcvxpwsymRYjGSzpcyVv0aMKanrHVa/ebKw6ojohXBBfAKpYHcMvFkaVr4gk7geGSeImSiTjjFhIfmtg3ALDViVHsdYgLTY2WVQejZSP8khDqCxgzpLwoBpAchng1CdcSUykmYJOHGNUrCmgb8kp1zHXwE6JJiHY5O/K15ULJ9LffuTXUp4QG2tww/lUEHuldJiJboTuz+u6j+ylMGok9JU6PnNDY6l233jFUbRNwz1tsWe76CFksRBDpaUjA2kVgbYzvNu+E8O3o3stkKA5vRspZ2xvB/aXN7Rx87mEu17tCeS5M6A65jZJObm6UDFz8xD8TB/rO31ME31sFrT7tUbUHk/+u4jrQtHxVOmxG6K3chvfCja5O9ZVCGDdEMmsi9tUSdyTYrblTPyEsZ6F6h4GHCWzzNrBYkS0laDx7bnpFR5irCVoY5WE3IAIkPaES1cuvNN+vZT02yH8ECgN4pfH8NK6JRPNtrnXt+RLI7YZCeWohE6lNglmkztXK6mjhyo2jvxyp/fMQPKqg/bn5tZbiRFQizUQk/bhi+Ol2u9k0UfQHhPtq1gnTb3bWMyElyUHu2zVL/7u/uusx+vtrmMy7URyW6HotgR7BFSHzOeuOq+F1krDf/GJdhtdtuX+6w02/B3lVxkD7daTI+WTRHVrtlwhu4G+tqP8CXdVX2RiK8li2xvZ7xnoubXtQhPbWfSE7U5g4spzqdRKcKvL4MOsdvG/CO4H+PY0oWLRMyg3mFOprTasL841D7DpV09z/ZhSMOaIUKu0cUNoVXPFkTX6RQVH794CspfY7pGA7odE26yNB2dEV0VXkI4+TE6umhev35VtM6yTIIS521y90HyLnz6e3a9syNMDIKElXChHmepO7+19A3ht1ucfW7lTrZYvsXnqRgfMzz+2lj3jXu2a3fT4dp2+wap+Tf1FlreaPF9t8dP1/4XS43RtTmgv1VZ26t5ECE8cvlLy20YTlSybEUev1pb7cib6Flp6VwjXf3L59uMfzxJrgTwiAAA=" /></Footer>{/_ END_ATS_APPLICATION_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Application` object with the given `id`.{/_ BEGIN_ATS_APPLICATION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_APPLICATION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveApplicationsRequest`

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

Updates the `current_stage` field of an `Application` object{/_ BEGIN_ATS_APPLICATION_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE+WZa3PaOBSG/wqjjxkuTUi2DTM7O9xCoMGkgTTNdjoaWToxAllyJBkCnf73HRuThJZcOhEku/sNC/m19fg9OufY3xElFgKlZ6iCiDUoj0LFQKAKqkaR4JRYriTKIxJxj4SAKqgLOoBcddDPVU/bKI9MHEVKW2BHHAQzxxquUAWVwmRaIZb8igMrDTU3JaomoEkApdtTClfpOSiPBJdjYFVKVSztYyKLiQWymPnTYfK3sSiPImKMHWoVB8MzuI7BPKQ5lmoqgAVQ8IlZ3JmAEKQlosCIJaV7SgW9kFo3lqyBgQALrEEsaYAFmqDLrjq0NjKVUmkIIiqmd1BkMCmBLBFtORVgSgflw733hweFTCW9+l84EH/u7oyufeW/38EBFZjEO90BvfEG7ak3Cva9+v6NNz8/8ObjuTcav9vBAdnpDroHvcFludeo7vbWTMD9P74cfq41ah1vh86bZW90OfUGdLc7oGN/3i53WnTaOf50480v97qN87I3aB50Wmq3Vz8z3fqZ6laLRZRHXFoIdOoQgypfv98fyMxSNUN/tjq1HZIA7iFZPA8S8UIU+4LToikXSUjmSpKpKVIVlkJgnJRSKdy/jokGfKIChcvxpwsymRYjGSzpcyVv0aMKanrHVa/ebKw6ojohXBBfAKpYHcMvFkaVr4gk7geGSeImSiTjjFhIfmtg3ALDViVHsdYgLTY2WVQejZSP8khDqCxgzpLwoBpAchng1CdcSUykmYJOHGNUrCmgb8kp1zHXwE6JJiHY5O/K15ULJ9LffuTXUp4QG2tww/lUEHuldJiJboTuz+u6j+ylMGok9JU6PnNDY6l233jFUbRNwz1tsWe76CFksRBDpaUjA2kVgbYzvNu+E8O3o3stkKA5vRspZ2xvB/aXN7Rx87mEu17tCeS5M6A65jZJObm6UDFz8xD8TB/rO31ME31sFrT7tUbUHk/+u4jrQtHxVOmxG6K3chvfCja5O9ZVCGDdEMmsi9tUSdyTYrblTPyEsZ6F6h4GHCWzzNrBYkS0laDx7bnpFR5irCVoY5WE3IAIkPaES1cuvNN+vZT02yH8ECgN4pfH8NK6JRPNtrnXt+RLI7YZCeWohE6lNglmkztXK6mjhyo2jvxyp/fMQPKqg/bn5tZbiRFQizUQk/bhi+Ol2u9k0UfQHhPtq1gnTb3bWMyElyUHu2zVL/7u/uusx+vtrmMy7URyW6HotgR7BFSHzOeuOq+F1krDf/GJdhtdtuX+6w02/B3lVxkD7daTI+WTRHVrtlwhu4G+tqP8CXdVX2RiK8li2xvZ7xnoubXtQhPbWfSE7U5g4spzqdRKcKvL4MOsdvG/CO4H+PY0oWLRMyg3mFOprTasL841D7DpV09z/ZhSMOaIUKu0cUNoVXPFkTX6RQVH794CspfY7pGA7odE26yNB2dEV0VXkI4+TE6umhev35VtM6yTIIS521y90HyLnz6e3a9syNMDIKElXChHmepO7+19A3ht1ucfW7lTrZYvsXnqRgfMzz+2lj3jXu2a3fT4dp2+wap+Tf1FlreaPF9t8dP1/4XS43RtTmgv1VZ26t5ECE8cvlLy20YTlSybEUev1pb7cib6Flp6VwjXf3L59uMfzxJrgTwiAAA=" /></Footer>{/_ END_ATS_APPLICATION_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns metadata for `Application` POSTs.{/_ BEGIN_ATS_APPLICATION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_APPLICATION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.MetaPostRetrieveApplicationsRequest`

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

<details><summary><code>client.ats.asyncPassthrough.<a href="/src/api/resources/ats/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId, { ...params }) -> Merge.RemoteResponse</code></summary>
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

**request:** `Merge.ats.RetrieveAsyncPassthroughRequest`

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

Returns a list of `Attachment` objects.{/_ BEGIN_ATS_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WabW/aOhTHvwryy4qHtbTbinR1xWOBldBBuq6bpsg4h8Tg2KnjQGHad59CEmju7b1aW1No+w5M8rf9y//4HDv8RAQrcIRcoArCKkB55AkbGKqgqlKYuB5whfII+9TAHqAK6oF0IFc1h7nqRQflURD6vpAK7BYFZgdtCWNUQSUvuqwQcjqmYJdcSYMSETOQ2IHS+pbCeHUPyiNG+RTsKiEi5Or/ROILCzi+8h9fo5+DaLg+DgLlShE67gBuQgj+S3PKxZyB7UBhhIN4ZAyiOWNWsLHCpTtKBRlL3dcWzcEGBgrsBla4AQqIooInvbpK+UGlVHKB+cXVCIo2zErAS1gqShgEpZPy6dGH05NCorLq/W/LYX8dHkxuRmL04cByCLNweNAzya1hdubGxDk26se3xvLyxFhOl8Zk+u7AcvBBz+yd9M3rcr9RPezfc4E1fP/19EutUesaB2TZLBuT67lhksOeSaajZafcPSPzbvvzrbG8Puo1LsuG2TzpnonDfn0Q9OoD0asWiyiPKFfgSBxNM0CV7z/vNiRmqfo+owRzNVSYTLP3dDzswB028YPBPi344YhRUgzKRezhpeB4HhSJ8Eoe2BSXsprW8CbEEqxz4QhrXmtffxmcFye+kz4PKvj6YaAKahrtqlFvNrIeqc4wZXjEAFWUDOFfpkaV7wivw8FSCx9QHhHMbWpjFX0eUwYWjyadfA4lQ3kkwRMKrOhZZr9ZPlYu+hG13YRUgn2BJfZAgYw6+/Erfy/NwB0tNEGMpDLsyuHnKzybF33+Mtitm6j9UI417I2EaA/0oEzV7tLclQMz5B4BRgIsNTks1toHKNsOy1rImCsk18PtQgofpFpYh52NmLVuPToDDpKSTUs5QbxuOE4HtJVY/nO8j/BfMvDcAIgMqYoea67ORGjrYTtK9C250bdIpG8FMcRhreF3prMdr4LbW/rqVXOoh2WklEkg3WNjeiOaO47yLaITHoDSAy/xt9Uhglt9zhb7knYfzERykIESHHImZsDVOeWa6rw72nuURbboLwks7k9HFmFYjYX0EtFkedtxQtgCNLv4hXJC9UJrzCJN630fXxNnvBVoz2OpVrQpxlRTZZKqZaLx1TnqTAJwV4SBpkjc6O3RKra1WrgtPJChJsO5sdgeeOzJrmoPdNax7YG1UnuRjnoCRVrv9DSVr+la34kkt5ke/3DX/kASXTFq0BnWyyIR3Zda9AlG6YrRjOqqpRKxrac9bUXog2HpqhA2RqI83VEv7MMmDj/tnak0wTuHGUg99FZSmS21uHY+LmpXb2Fp72GOFWZ6fZiI7kEBoZlWdGQw1nRQm8JaadJXtbL1JSYMcq0woILnCumxIuWOzmos7sXaiO+4nHhWI8aEo7MfoYfmSuqtFbYXlPuCck2ni6naS/PhA6ElAQdyzMRc67ksyBYT80wqfucvJ63W0VbMuFPrDasXuWFICARBCxMlZKAHZVYzw7JGvgqn9e4tBPbQw1KtXaULbVY0w3bycXY+bl69mJh/AtsoU8BSbxEUa76+gtEE7ClMmdC0V9novbVUbQKL3nOltSRoOmRQsWz6Zhq2+spm35BKPB5TXcVPGsmxqDUx7e7Jt/NnDOkHzv7y01nuQoo7mxM9IC4/naVnMEe1G/u2v+u93bN46QoYER7klMgpF3LdkDtM8zvVpAtLCUu5YMVdvLj/2lwJOV11r4VNqpapRfozxgx2+mKywiMI2ljzKUwi+hZC9Ztw16ueXoiRcppJX2ce/fHrN4mZFmO6LwAA" /></Footer>{/_ END_ATS_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.attachments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListAttachmentsRequest`

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

Creates an `Attachment` object with the given values.{/_ BEGIN_ATS_ATTACHMENT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE92Ya2/iOBSG/wryRwRkWtqdKdJqxaWldErolHQ71aiKDs4hMThxsB0ojPrfR4bQwpZWzCj0st8Sx37j8/j1OU5+EgoafSGnpEJAK1IgofCQkwqpag00CDHSpEAgZjaESCqkjdLHXNXp5qoXLVIgKoljITV6Jwy5p04l9kmFWKHpVkwi1mfoWYFkyqJijBJ8tB6GFPvzMaRAOIuG6FUpFUmkXxJZdCzCoud/bs1jZaYbg1I6kCLxg0scJaie0xxGYsLR87HYA7WYGUcTM/CiBxqsFaWiXEhtajMxeMhRo9cADQ3USDUTUfrWQOtYVSwrQB6X5jMoeTi2MLJAakY5KuuwfLT/+eiwmKrM3/6P6/O/9/KDUU/0Puddn3IXknzboXe205rYA//Arh/c2bOrQ3s2nNmD4ae860O+7bQPO85NudOo7nU2dHC7f30/+rfWqJ3ZeTo7LtuDm4nt0L22Q4e9Wat81qSTs9Nvd/bsZr/duCrbzvHhWVPsdeqXql2/FO1qqUQKhEUafQkmTEUqP36uNqRmqaqgN13v2grBxxUki/WAmBXjpMcZLalyCUKYiQgmqkRFaIXoMbDmUm53lIBE91z4wi0n365hPCnFkb+kz0T0gJ5UyLF9WrXrx411R1THwDj0OJKKlgk+sTCp/CDwYH5XT2MkBUIh8pgH2lz3GUc3MiGm14nkpEAkhkKjyzxya25GCZPoXYCEEDXKue4TFTPy9r6wEd4YdCIxG3wXHHRfyDAV3Qm010dUk4izjAy20Fp1WGkQvwtn/R6qNRhubAaojY0m9hiiqVmNjc9jodj83izXMwuQcB4IGWVkUililHrq7rVWZvPQut/ECCWjjy3ldLUeGg6WE/pIBn+y3i+zzl0ilQnTxkO5OheJlw39Xqrvykd9lxp9Vy0wd2uNuDUcv3HG3QLxH6XvbbdNDDpwJ0wHLt5pjJSJ/JklOzGnEmAZbY+l2lqO+tDVb8tFSKUThfKFXNSUiFEgEpVRyXzUe49FISvg27Fl9Va7m+1JpGUk08zyVi5+sbpuO34zsXMco8yG2Fxq7egrbvwv09r1Try4w1Pctm7rSKAccyeJya254rLgscjPst4t3uI+ir+xGV/1MJEidoCjyAbnXOqjZspnKHWrF7luQikqdQJUC6myYbWuuba1a/S78E8+vRd4mRuvG4LU6Z7DzHiui64BHXwZn/ePrz/2rv69E+pA9Nw5uhdyrIMQamBcZFSkHvV2ngNe/z+Dg5ybr62lxTI6YeqF7PKDC3GXFej1qV19beYupFgp39lgu/raXH6R7tdG3l2HfajN/SdZeDPgayGH8yAywbpUW8uenTHnNj96q3K0E1+aQD3I6Lfh8nMmFf1fOvH2/vb+F6zgxmcqGgAA" /></Footer>{/_ END_ATS_ATTACHMENT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Attachment` object with the given `id`.{/_ BEGIN_ATS_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WabW/aOhTHvwryy4qHtbTbinR1xWOBldBBuq6bpsg4h8Tg2KnjQGHad59CEmju7b1aW1No+w5M8rf9y//4HDv8RAQrcIRcoArCKkB55AkbGKqgqlKYuB5whfII+9TAHqAK6oF0IFc1h7nqRQflURD6vpAK7BYFZgdtCWNUQSUvuqwQcjqmYJdcSYMSETOQ2IHS+pbCeHUPyiNG+RTsKiEi5Or/ROILCzi+8h9fo5+DaLg+DgLlShE67gBuQgj+S3PKxZyB7UBhhIN4ZAyiOWNWsLHCpTtKBRlL3dcWzcEGBgrsBla4AQqIooInvbpK+UGlVHKB+cXVCIo2zErAS1gqShgEpZPy6dGH05NCorLq/W/LYX8dHkxuRmL04cByCLNweNAzya1hdubGxDk26se3xvLyxFhOl8Zk+u7AcvBBz+yd9M3rcr9RPezfc4E1fP/19EutUesaB2TZLBuT67lhksOeSaajZafcPSPzbvvzrbG8Puo1LsuG2TzpnonDfn0Q9OoD0asWiyiPKFfgSBxNM0CV7z/vNiRmqfo+owRzNVSYTLP3dDzswB028YPBPi344YhRUgzKRezhpeB4HhSJ8Eoe2BSXsprW8CbEEqxz4QhrXmtffxmcFye+kz4PKvj6YaAKahrtqlFvNrIeqc4wZXjEAFWUDOFfpkaV7wivw8FSCx9QHhHMbWpjFX0eUwYWjyadfA4lQ3kkwRMKrOhZZr9ZPlYu+hG13YRUgn2BJfZAgYw6+/Erfy/NwB0tNEGMpDLsyuHnKzybF33+Mtitm6j9UI417I2EaA/0oEzV7tLclQMz5B4BRgIsNTks1toHKNsOy1rImCsk18PtQgofpFpYh52NmLVuPToDDpKSTUs5QbxuOE4HtJVY/nO8j/BfMvDcAIgMqYoea67ORGjrYTtK9C250bdIpG8FMcRhreF3prMdr4LbW/rqVXOoh2WklEkg3WNjeiOaO47yLaITHoDSAy/xt9Uhglt9zhb7knYfzERykIESHHImZsDVOeWa6rw72nuURbboLwks7k9HFmFYjYX0EtFkedtxQtgCNLv4hXJC9UJrzCJN630fXxNnvBVoz2OpVrQpxlRTZZKqZaLx1TnqTAJwV4SBpkjc6O3RKra1WrgtPJChJsO5sdgeeOzJrmoPdNax7YG1UnuRjnoCRVrv9DSVr+la34kkt5ke/3DX/kASXTFq0BnWyyIR3Zda9AlG6YrRjOqqpRKxrac9bUXog2HpqhA2RqI83VEv7MMmDj/tnak0wTuHGUg99FZSmS21uHY+LmpXb2Fp72GOFWZ6fZiI7kEBoZlWdGQw1nRQm8JaadJXtbL1JSYMcq0woILnCumxIuWOzmos7sXaiO+4nHhWI8aEo7MfoYfmSuqtFbYXlPuCck2ni6naS/PhA6ElAQdyzMRc67ksyBYT80wqfucvJ63W0VbMuFPrDasXuWFICARBCxMlZKAHZVYzw7JGvgqn9e4tBPbQw1KtXaULbVY0w3bycXY+bl69mJh/AtsoU8BSbxEUa76+gtEE7ClMmdC0V9novbVUbQKL3nOltSRoOmRQsWz6Zhq2+spm35BKPB5TXcVPGsmxqDUx7e7Jt/NnDOkHzv7y01nuQoo7mxM9IC4/naVnMEe1G/u2v+u93bN46QoYER7klMgpF3LdkDtM8zvVpAtLCUu5YMVdvLj/2lwJOV11r4VNqpapRfozxgx2+mKywiMI2ljzKUwi+hZC9Ztw16ueXoiRcppJX2ce/fHrN4mZFmO6LwAA" /></Footer>{/_ END_ATS_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveAttachmentsRequest`

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

Returns metadata for `Attachment` POSTs.{/_ BEGIN_ATS_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WabW/aOhTHvwryy4qHtbTbinR1xWOBldBBuq6bpsg4h8Tg2KnjQGHad59CEmju7b1aW1No+w5M8rf9y//4HDv8RAQrcIRcoArCKkB55AkbGKqgqlKYuB5whfII+9TAHqAK6oF0IFc1h7nqRQflURD6vpAK7BYFZgdtCWNUQSUvuqwQcjqmYJdcSYMSETOQ2IHS+pbCeHUPyiNG+RTsKiEi5Or/ROILCzi+8h9fo5+DaLg+DgLlShE67gBuQgj+S3PKxZyB7UBhhIN4ZAyiOWNWsLHCpTtKBRlL3dcWzcEGBgrsBla4AQqIooInvbpK+UGlVHKB+cXVCIo2zErAS1gqShgEpZPy6dGH05NCorLq/W/LYX8dHkxuRmL04cByCLNweNAzya1hdubGxDk26se3xvLyxFhOl8Zk+u7AcvBBz+yd9M3rcr9RPezfc4E1fP/19EutUesaB2TZLBuT67lhksOeSaajZafcPSPzbvvzrbG8Puo1LsuG2TzpnonDfn0Q9OoD0asWiyiPKFfgSBxNM0CV7z/vNiRmqfo+owRzNVSYTLP3dDzswB028YPBPi344YhRUgzKRezhpeB4HhSJ8Eoe2BSXsprW8CbEEqxz4QhrXmtffxmcFye+kz4PKvj6YaAKahrtqlFvNrIeqc4wZXjEAFWUDOFfpkaV7wivw8FSCx9QHhHMbWpjFX0eUwYWjyadfA4lQ3kkwRMKrOhZZr9ZPlYu+hG13YRUgn2BJfZAgYw6+/Erfy/NwB0tNEGMpDLsyuHnKzybF33+Mtitm6j9UI417I2EaA/0oEzV7tLclQMz5B4BRgIsNTks1toHKNsOy1rImCsk18PtQgofpFpYh52NmLVuPToDDpKSTUs5QbxuOE4HtJVY/nO8j/BfMvDcAIgMqYoea67ORGjrYTtK9C250bdIpG8FMcRhreF3prMdr4LbW/rqVXOoh2WklEkg3WNjeiOaO47yLaITHoDSAy/xt9Uhglt9zhb7knYfzERykIESHHImZsDVOeWa6rw72nuURbboLwks7k9HFmFYjYX0EtFkedtxQtgCNLv4hXJC9UJrzCJN630fXxNnvBVoz2OpVrQpxlRTZZKqZaLx1TnqTAJwV4SBpkjc6O3RKra1WrgtPJChJsO5sdgeeOzJrmoPdNax7YG1UnuRjnoCRVrv9DSVr+la34kkt5ke/3DX/kASXTFq0BnWyyIR3Zda9AlG6YrRjOqqpRKxrac9bUXog2HpqhA2RqI83VEv7MMmDj/tnak0wTuHGUg99FZSmS21uHY+LmpXb2Fp72GOFWZ6fZiI7kEBoZlWdGQw1nRQm8JaadJXtbL1JSYMcq0woILnCumxIuWOzmos7sXaiO+4nHhWI8aEo7MfoYfmSuqtFbYXlPuCck2ni6naS/PhA6ElAQdyzMRc67ksyBYT80wqfucvJ63W0VbMuFPrDasXuWFICARBCxMlZKAHZVYzw7JGvgqn9e4tBPbQw1KtXaULbVY0w3bycXY+bl69mJh/AtsoU8BSbxEUa76+gtEE7ClMmdC0V9novbVUbQKL3nOltSRoOmRQsWz6Zhq2+spm35BKPB5TXcVPGsmxqDUx7e7Jt/NnDOkHzv7y01nuQoo7mxM9IC4/naVnMEe1G/u2v+u93bN46QoYER7klMgpF3LdkDtM8zvVpAtLCUu5YMVdvLj/2lwJOV11r4VNqpapRfozxgx2+mKywiMI2ljzKUwi+hZC9Ztw16ueXoiRcppJX2ce/fHrN4mZFmO6LwAA" /></Footer>{/_ END_ATS_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
await client.ats.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListAuditTrailRequest`

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

## Ats Candidates

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedCandidateList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Candidate` objects.{/_ BEGIN_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.candidates.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListCandidatesRequest`

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

Creates a `Candidate` object with the given values.{/_ BEGIN_ATS_CANDIDATE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="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" /></Footer>{/_ END_ATS_CANDIDATE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Candidate` object with the given `id`.{/_ BEGIN_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveCandidatesRequest`

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

Updates a `Candidate` object with the given `id`.{/_ BEGIN_ATS_CANDIDATE_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE82UbU/bMBSF/wryx6pNVkoHRJqm0HbQioaXBhhCKLqxbxO3jp3aTgtF/PcpLQPKGAyp0/bNL8fH9nOP7h2hYDFR+pZ4BKwhVZIphoJ4pAWScQYWSZVAzgPIkHikjzrBDT8cbPjHXVIlpshzpS2ybxwFMwcah8QjblbKaoXkQ47MTTU3LlVT1JCg+3ikNlycIVUiuBwj8ylVhbRvmSyFNVgqX0zLbWNJleRgjE21KpL0FCcFmt95jqWaCWQJ1mIwy5cJzFBaEDUGFtxnTjW9tHptrfwDQ4EWWRsstNEitVzJh1tTa3PjuW6KIncWL3AYTl2ULmjLqUDjNhu7m9u7zdqDy+L2r1EivtQro0ms4u1KlFARQVHph/QmCLuzYJRsBa2tm2B+1gzm43kwGn+qRAlU+mG/eRReNo7afv3oFUE0+Px993yvvdcLKnTeaQSjy1kQ0no/pON43m309umsd3ByE8wvN/vts0YQdpq9fVU/ap2afutU9X3HIVXCpcVEQ/lNQ7yru+cLD2HxTRrfrkq7GST4DMmyHpDzWl7EglPHNBzIYK4kzIxDVeZmyDi4C6toMClAY3SoEhU1ipMLmM6cXCY/6XMlH9ETjwR+2D3vrObBnwIXEAskntUF/hJg4l0RzICLCBjTaAyWtR1ybWwky19ViYCncZ4qiZEsshh1KdSYKYsRZ+S6nEwKrpEdg4YMbanwrq7vq6+h2teIMlWFwfXwevJ7Ds0Z5euGRVWWgyyr/A42bqJc8+myofwBQ6oRLLII7ArXx3GRs6d9C0l51HIr8KPoeyr2GUO9HvDHAuxQ6WykYihdI7PA/0ZMO8GBH7Q67X8R1Ncgl61ndRblYNN3q/BB7Ic4XRfzhdVKc1CXyc7t3sVfyPsHmAtFH9rjGhvFIANtT5Hqgtul1RoAvjBdQTnamR4OOxf/aYA/nMXr+x8xLwav9AgAAA==" /></Footer>{/_ END_ATS_CANDIDATE_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.{/_ BEGIN_ATS_CANDIDATE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="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" /></Footer>{/_ END_ATS_CANDIDATE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

<details><summary><code>client.ats.candidates.<a href="/src/api/resources/ats/resources/candidates/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Candidate` PATCHs.{/_ BEGIN_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.MetaPatchRetrieveCandidatesRequest`

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

Returns metadata for `Candidate` POSTs.{/_ BEGIN_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_CANDIDATE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Department` objects.{/_ BEGIN_ATS_DEPARTMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92abW/aOhiG/wryx4qXtpRtRTo64rXAILSQtuuZqshxHoLBsVPHgcK0/34UEmhzzjaprbMOPpKGK/Hl2/Zj02+IYAWukCtURVgFKI884QBDVdQEH0vlAVcoj7BPDewBqqIBSBdyNXOcq112UR4Foe8LqcBpU2BO0JEwQVVU8qLbCiGnEwpOaSppUCJiARK7UNp9pTDZfAflEaN8Dk6NEBFy9StIfGMBx3f+52P05yB6XR8HgZpKEbrTETyEEPyMOediycBxoWDjIH4zBlGbMSs4WOHSM1JBxqgfXYva4AADBU4TK9wEBURRwZOnTpXyg2qpNAXmFzdvUHRgUQJewlJRwiAoVcrnpx/PK4WEsnn635bL/jo5mj3Ywv54ZLmEWTg8Gpjk0TC7S2PmnhmNs0djfV0x1vO1MZsfH1kuPhqYg8rQvCsPm7WT4Q9usMYfvpzf1Jv1nnFE1q2yMbtbGiY5GZhkbq+75d4FWfY6V4/G+u500LwuG2ar0rsQJ8PGKBg0RmJQKxZRHlGuwJU4amaAql+/Pb+QhKXm+4wSzNVYYTJPf6frYReeuYk7Bvu04Ic2o6QYlIvYw2vB8TIoEuGVPHAoLqWZ1vghxBKsvnCFtax37m5G/eLMd7f9QQXfdQaqopbRqRmNVjOdkdoCU4ZtBqiqZAj/CzWqfkUzYUedzKOG5ZEETyiwok5Kf7J8rKboPrr2EFIJziWW2AMFMqLcf8//UFMwtVea7ESolJRyeHWLF8uiz38mxaiZ3ZtWxkp2l6jzUj117NlCdEZ6DG1pzyW9f2LeokcCrDXFJ2b9WWpeqKNRM8d6ZESk1FDqnRnzB9F6fyVvSEuD4ZWuoXTJsJoI6cVMK4hVHXeWvNLs/2LCeb2ltJ5XtF5IDjJQgkPOxAy46lOuaWF6xv6zBtAbfDnFG8oJ1RuX5iJiWh+G+I64k0xykvjZ1LJWGFJnK+uF7W/hYEVkSJVeAxG2EWF/W+Ozi0hbQjBVgD09ina4ZAxlaSjz4XMBmqxsg3MBnvW4uCGfTyr7LUYC8KkIA9Dj54l3MFPvU5NyPWHn6gJLJ9lzZykM9tdYZ5RrMBE6egx1RtaGdjCBoo3uQFNlvJ2OuhEyqfv2ej7q4fVaV1Ucs1Ibh9srMmgOnPePz0u1CLtJF1hvaBLob9gfZBEUYY+JkJqWrS2tcAhDSNiBoJom3wSWGkT902vi8Kv3H0Rvk7SgSl96IlhqgdrnBPVhAVKPmg0qlR5x535a1W/fPz0vlDLkbDXRdLq3nYE3TJplVnTGYigxYfFxjdDjYYM6mLruEmQgOBW5EWyOKuimWzVoOs1+O/DSplLuC8p1ncYktCwL2Mx7P+l0kBMmlnq87JBtJpapSfTYX8/a7dO9Hi5j7EJOV60fwaxnxX7ZXp59HOz1KjyuXebGISEQBG1MlJCBJlUpZipWdfJFuO3j/Y6Vh6XajRxdztLQlLTZp0V/0rrd66xFCzGs9RY3MXM/J/PkJ6nVRPPvDU/cvY8LVyOAib46MOYdzB7KBOwpTJnQtJF64h1MvWwCi7p9Wy6Dpt24irGW3GIP4VzUlNQGH2s61dlNRwl1r9Vcf77IXUr9u67rzxfb/6Q4rT84j8NMN+qZa7oFRoQHOSVyagq5XshdpmnEbeOUPMJSwlJTsOJH7GcBcCvkfPMOWgRtaam6cbhgzGDnmU/hr2i5gzUfdCXQvR5A/4jpbpLRaycib5er375Y/VLE/fd/AeHHZESZLgAA" /></Footer>{/_ END_ATS_DEPARTMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.departments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListDepartmentsRequest`

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

Returns a `Department` object with the given `id`.{/_ BEGIN_ATS_DEPARTMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92abW/aOhiG/wryx4qXtpRtRTo64rXAILSQtuuZqshxHoLBsVPHgcK0/34UEmhzzjaprbMOPpKGK/Hl2/Zj02+IYAWukCtURVgFKI884QBDVdQEH0vlAVcoj7BPDewBqqIBSBdyNXOcq112UR4Foe8LqcBpU2BO0JEwQVVU8qLbCiGnEwpOaSppUCJiARK7UNp9pTDZfAflEaN8Dk6NEBFy9StIfGMBx3f+52P05yB6XR8HgZpKEbrTETyEEPyMOediycBxoWDjIH4zBlGbMSs4WOHSM1JBxqgfXYva4AADBU4TK9wEBURRwZOnTpXyg2qpNAXmFzdvUHRgUQJewlJRwiAoVcrnpx/PK4WEsnn635bL/jo5mj3Ywv54ZLmEWTg8Gpjk0TC7S2PmnhmNs0djfV0x1vO1MZsfH1kuPhqYg8rQvCsPm7WT4Q9usMYfvpzf1Jv1nnFE1q2yMbtbGiY5GZhkbq+75d4FWfY6V4/G+u500LwuG2ar0rsQJ8PGKBg0RmJQKxZRHlGuwJU4amaAql+/Pb+QhKXm+4wSzNVYYTJPf6frYReeuYk7Bvu04Ic2o6QYlIvYw2vB8TIoEuGVPHAoLqWZ1vghxBKsvnCFtax37m5G/eLMd7f9QQXfdQaqopbRqRmNVjOdkdoCU4ZtBqiqZAj/CzWqfkUzYUedzKOG5ZEETyiwok5Kf7J8rKboPrr2EFIJziWW2AMFMqLcf8//UFMwtVea7ESolJRyeHWLF8uiz38mxaiZ3ZtWxkp2l6jzUj117NlCdEZ6DG1pzyW9f2LeokcCrDXFJ2b9WWpeqKNRM8d6ZESk1FDqnRnzB9F6fyVvSEuD4ZWuoXTJsJoI6cVMK4hVHXeWvNLs/2LCeb2ltJ5XtF5IDjJQgkPOxAy46lOuaWF6xv6zBtAbfDnFG8oJ1RuX5iJiWh+G+I64k0xykvjZ1LJWGFJnK+uF7W/hYEVkSJVeAxG2EWF/W+Ozi0hbQjBVgD09ina4ZAxlaSjz4XMBmqxsg3MBnvW4uCGfTyr7LUYC8KkIA9Dj54l3MFPvU5NyPWHn6gJLJ9lzZykM9tdYZ5RrMBE6egx1RtaGdjCBoo3uQFNlvJ2OuhEyqfv2ej7q4fVaV1Ucs1Ibh9srMmgOnPePz0u1CLtJF1hvaBLob9gfZBEUYY+JkJqWrS2tcAhDSNiBoJom3wSWGkT902vi8Kv3H0Rvk7SgSl96IlhqgdrnBPVhAVKPmg0qlR5x535a1W/fPz0vlDLkbDXRdLq3nYE3TJplVnTGYigxYfFxjdDjYYM6mLruEmQgOBW5EWyOKuimWzVoOs1+O/DSplLuC8p1ncYktCwL2Mx7P+l0kBMmlnq87JBtJpapSfTYX8/a7dO9Hi5j7EJOV60fwaxnxX7ZXp59HOz1KjyuXebGISEQBG1MlJCBJlUpZipWdfJFuO3j/Y6Vh6XajRxdztLQlLTZp0V/0rrd66xFCzGs9RY3MXM/J/PkJ6nVRPPvDU/cvY8LVyOAib46MOYdzB7KBOwpTJnQtJF64h1MvWwCi7p9Wy6Dpt24irGW3GIP4VzUlNQGH2s61dlNRwl1r9Vcf77IXUr9u67rzxfb/6Q4rT84j8NMN+qZa7oFRoQHOSVyagq5XshdpmnEbeOUPMJSwlJTsOJH7GcBcCvkfPMOWgRtaam6cbhgzGDnmU/hr2i5gzUfdCXQvR5A/4jpbpLRaycib5er375Y/VLE/fd/AeHHZESZLgAA" /></Footer>{/_ END_ATS_DEPARTMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveDepartmentsRequest`

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

Returns a list of `EEOC` objects.{/_ BEGIN_ATS_EEOC_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WTbW/aMBSF/0rljygvpZRVRZqmlJcCWgIFuraqqujGvgRDEgfbgTZV//sUoB1s3aSpdFK1j9c+Ptd+7vEjoaAxFPKB1AhoRQwSC4YRqZFms1cnBoGUexAjqREXZYgHzmh44PQ7xCAqS1MhNbIWx4iptsQxqRE7LmRmlvAxR2ZPJFc2FQuUEKL9csQcr84Qg0Q8mSFzKBVZov9kshaasFb+VBbbShODpKCUnkiRhZMBzjNUv/OcJWIZIQvRDECtbxZhjImGyGSgwd5yMuXa6rW14g0MI9TIGqChgRqp5iLZdJ1onaqabU8wSq3VDSyGCxsTG6TmNEJlVyunRyenVXPjsur+xQ+jz+XSdB6I4KTkhzTyISu5I3rvjTpLbxoee/Xjey+/rHr5LPems8OSH0LJHbnV3uim0ms45d4rAn/46fr021njrOuVaN6seNObpTeiZXdEZ0HeqXTP6bLbvrj38psjt3FZ8UbNavdclHv1gXLrA+E6lkUMwhONoYTimYrUbh+3FzZhaRVTAZ7sqjsxhLhFZT0SSLmZZkHEqaUqFsSQiwSWyqIitmNkHOxnN384z0Ci/1WEwkqT8Jk9F8kL+CK6Xtvx6s3Gbh6cBfAIgghJTcsMfwkwqd0SCgnjDDQSg4SYMJTEIBJoUUuMhUa/GM9u5aegJ6sPEcRca2Q+aHJXSOYZl8j6ICFGjbJocfdkvMbrXCImE5Ep3A+xH347zKbp+zJjXEHAI64ffKVBZ+rNHA2yKNBB8mz4l2C7kOftwX6grr22gfpXF9RtuOxjgH0jSREsuN5TPjdmH+hDvxXf0OkfDDNKUakWUC2k2g/JXc+dcJ7RaxG2Dv+HcF4JOWPwsB+k/Qj0WMh4Y/ruwfy3/O6evgNzyB1U9gkAAA==" /></Footer>{/_ END_ATS_EEOC_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.eeocs.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListEeocsRequest`

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

Returns an `EEOC` object with the given `id`.{/_ BEGIN_ATS_EEOC_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WTbW/aMBSF/0rljygvpZRVRZqmlJcCWgIFuraqqujGvgRDEgfbgTZV//sUoB1s3aSpdFK1j9c+Ptd+7vEjoaAxFPKB1AhoRQwSC4YRqZFms1cnBoGUexAjqREXZYgHzmh44PQ7xCAqS1MhNbIWx4iptsQxqRE7LmRmlvAxR2ZPJFc2FQuUEKL9csQcr84Qg0Q8mSFzKBVZov9kshaasFb+VBbbShODpKCUnkiRhZMBzjNUv/OcJWIZIQvRDECtbxZhjImGyGSgwd5yMuXa6rW14g0MI9TIGqChgRqp5iLZdJ1onaqabU8wSq3VDSyGCxsTG6TmNEJlVyunRyenVXPjsur+xQ+jz+XSdB6I4KTkhzTyISu5I3rvjTpLbxoee/Xjey+/rHr5LPems8OSH0LJHbnV3uim0ms45d4rAn/46fr021njrOuVaN6seNObpTeiZXdEZ0HeqXTP6bLbvrj38psjt3FZ8UbNavdclHv1gXLrA+E6lkUMwhONoYTimYrUbh+3FzZhaRVTAZ7sqjsxhLhFZT0SSLmZZkHEqaUqFsSQiwSWyqIitmNkHOxnN384z0Ci/1WEwkqT8Jk9F8kL+CK6Xtvx6s3Gbh6cBfAIgghJTcsMfwkwqd0SCgnjDDQSg4SYMJTEIBJoUUuMhUa/GM9u5aegJ6sPEcRca2Q+aHJXSOYZl8j6ICFGjbJocfdkvMbrXCImE5Ep3A+xH347zKbp+zJjXEHAI64ffKVBZ+rNHA2yKNBB8mz4l2C7kOftwX6grr22gfpXF9RtuOxjgH0jSREsuN5TPjdmH+hDvxXf0OkfDDNKUakWUC2k2g/JXc+dcJ7RaxG2Dv+HcF4JOWPwsB+k/Qj0WMh4Y/ruwfy3/O6evgNzyB1U9gkAAA==" /></Footer>{/_ END_ATS_EEOC_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveEeocsRequest`

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

**request:** `Merge.ats.FieldMappingsRetrieveFieldMappingRequest`

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

<details><summary><code>client.ats.fieldMapping.<a href="/src/api/resources/ats/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**request:** `Merge.ats.FieldMappingsDestroyFieldMappingRequest`

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

**request:** `Merge.ats.RemoteFieldsRetrieveFieldMappingRequest`

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

Returns a list of `ScheduledInterview` objects.{/_ BEGIN_ATS_SCHEDULEDINTERVIEW_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VXbU/bOhT+K5U/Vmkz1nE3Il1dBVqgiKYdzcYYQtGpc5q4dezUdlrotP8+JX2BbmwXLqEg3W+Jc86T4+c5L/Y3QsFgJNUNcQgYTSySyBA5cUifxhhmHMO2MKimDGfEIpAyDxIkDumgirDi+v2K22sTi+gsTaUyGB4y5KE+VjgkDrGT3KyWCTZkGNqxYtqmcooKIrTXLrVh4UMswpkYY+hSKjNh/gSyMKzBwvKn1/yzNsQiKWhtYiWzKD7DSYb6d5hjIWccwwhrA9CLyDgmKAzwWggG7DtINbWAum8t30OIHA2GTTDQRIPUMCmWf42NSbVj2zHytF5EUA9xaqOwQRlGOWp7t7H39v3ebm2JUvz9nyDif+9UR5OBHLyvBhHlAWTVjk+vPb8980bRO+/g3bU3/7TrzcdzbzR+Uw0iqHb8zm7Xv2h0m+5O9x6DoP/Xl73P+839E69K562GN7qYeT7d6fh0PJi3GydHdHZy/PHam1+87TQ/NTy/tXtyJHe6B2e6c3AmO269TizChMFIQb5NTZzLb3cXlsni6nhws2naTiDCO5Qs9ICU1dJswBmt60YdEphLATNdpzKxEwwZ2AVU0J9koDA4lZEMGtnHc5jO6qmIVuwzKdbUE4e0vGPXO2g1NzPCnQLjMOBIHKMy/CWFiXNJIE05o0XAxCIowgDMch9FSaDKFR/JQbBeCrTJd2YRhYk0GFCFYHDpuFzLRd18C1Iw8e0SC/OSMqDMwk8bMJkmV7nBJGMKwx4oSNDkATiXV9+t+2g/zIsBmCiH+RXaXfJfHelcrh23y/WRQhSxzDSWw/Yt3gbfo/R3fHuu3/7cKp/tQFOpkIIqGvRjRZAqAsHmqMooiOVzloa3AE8W7hSnRXQlaFZAbfQmeRF9uNk//3/Ltpbokcp0FVCOFR84ynIEKqAeWE8v3r+2VzqP1KXHRCqZMOVoskILdCHLNifKM83tZ2lTfbdX6WeUotaHQI1Uuhz6NzE3mtc+/SKjwzcvUiP/oX09cd5bJBNskuXfUZj8WqAerVECypwhVRkzWJpAm6AbCo0+TE+HrfPXfAp7YBd70qDwkXMUprJiqaQjmFnABmoF+wIt6kF0v9pJcS7VOISSbn49DmYoVbIEfREV/tiWtnIo+ipjuUr0cnnNkVe5/pyZ/i/j99cb3NZz+er7D5iPdNoYEwAA" /></Footer>{/_ END_ATS_SCHEDULEDINTERVIEW_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListInterviewsRequest`

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

Creates a `ScheduledInterview` object with the given values.{/_ BEGIN_ATS_SCHEDULEDINTERVIEW_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE8WTbU/bMBDHvwryyypNBqXbiDRNhXZQRFMGgQ0hFF3tI3Xr2KkfWgjiu09JSynPGkPaO/t897+H3/mGULCYKn1NQgLWEI9kiqEgITmmQ2ROIOtKi3rKcUY8AjmPIEMSkh7qFNda8fFa67BLPGJcnittkf3gKJjZ03hJQhJkpVvdSX7JkQVDzU1A1RQ1pBgsQ+qXVQzxiOByjKxFqXLSviYyd6zD3PPRtXw2lngkB2PsUCuXDo9w4tC8pDmWaiaQpVgfgJlXJjBDaUHUGVgIVpTqei71nK3sgaFAi6wNFtpokVqu5CLr0NrchEEwRJH7VQU+w2mAMgBtORVogmZja+PLVrO+UKmyf09S8W29NpoM1OBLLUmpSMDVejG9iuLuLBqlm9HO5lVUnDSjYlxEo/GnWpJCrRf3mv34rNFvt9b7zzgkx59/b51ut7f3oxotOo1odDaLYrrei+l4UHQb+7t0tr/38yoqzjZ67ZNGFHea+7tqvb9zZHo7R6rX8n3iES4tphrKNg0Jz29WDYtl2dWIcqicwYf+3QxSXJnLHArkvJ67geDUNw0fMiiUhJnxqcqCDBmH4F4vOZ440JgcqFT5ozy9mz9Xcjl8EpKoFXdPOw83ojUFLmAgkIRWO3yywiQ8J5DngtOqVuIRlCwBu2ih+hKoq61VSxelU5C8QE08ojFTFhOqESwuIhc2zu7PLmf378aCtsujdaW8k3ziyhiUtlxXTS7K4InjGtkhaMjQloW8Xu9i5EleBpinTSwzX9x6zzE8wGnV1Qfgq6RWySXqLP16vf3rvxEcqUGyNCXGln29m+v9JF/C9AoY3/IMCyXxaZF3+2JQP070PLIYhUBp146QasctftDvs3PZRN/JJqZC6efyJXqdaK8V7XTaf89vOao3Ef3Td3sXqjGX7E2IK5Aubv8A1rYzYXAHAAA=" /></Footer>{/_ END_ATS_SCHEDULEDINTERVIEW_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `ScheduledInterview` object with the given `id`.{/_ BEGIN_ATS_SCHEDULEDINTERVIEW_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VXbU/bOhT+K5U/Vmkz1nE3Il1dBVqgiKYdzcYYQtGpc5q4dezUdlrotP8+JX2BbmwXLqEg3W+Jc86T4+c5L/Y3QsFgJNUNcQgYTSySyBA5cUifxhhmHMO2MKimDGfEIpAyDxIkDumgirDi+v2K22sTi+gsTaUyGB4y5KE+VjgkDrGT3KyWCTZkGNqxYtqmcooKIrTXLrVh4UMswpkYY+hSKjNh/gSyMKzBwvKn1/yzNsQiKWhtYiWzKD7DSYb6d5hjIWccwwhrA9CLyDgmKAzwWggG7DtINbWAum8t30OIHA2GTTDQRIPUMCmWf42NSbVj2zHytF5EUA9xaqOwQRlGOWp7t7H39v3ebm2JUvz9nyDif+9UR5OBHLyvBhHlAWTVjk+vPb8980bRO+/g3bU3/7TrzcdzbzR+Uw0iqHb8zm7Xv2h0m+5O9x6DoP/Xl73P+839E69K562GN7qYeT7d6fh0PJi3GydHdHZy/PHam1+87TQ/NTy/tXtyJHe6B2e6c3AmO269TizChMFIQb5NTZzLb3cXlsni6nhws2naTiDCO5Qs9ICU1dJswBmt60YdEphLATNdpzKxEwwZ2AVU0J9koDA4lZEMGtnHc5jO6qmIVuwzKdbUE4e0vGPXO2g1NzPCnQLjMOBIHKMy/CWFiXNJIE05o0XAxCIowgDMch9FSaDKFR/JQbBeCrTJd2YRhYk0GFCFYHDpuFzLRd18C1Iw8e0SC/OSMqDMwk8bMJkmV7nBJGMKwx4oSNDkATiXV9+t+2g/zIsBmCiH+RXaXfJfHelcrh23y/WRQhSxzDSWw/Yt3gbfo/R3fHuu3/7cKp/tQFOpkIIqGvRjRZAqAsHmqMooiOVzloa3AE8W7hSnRXQlaFZAbfQmeRF9uNk//3/Ltpbokcp0FVCOFR84ynIEKqAeWE8v3r+2VzqP1KXHRCqZMOVoskILdCHLNifKM83tZ2lTfbdX6WeUotaHQI1Uuhz6NzE3mtc+/SKjwzcvUiP/oX09cd5bJBNskuXfUZj8WqAerVECypwhVRkzWJpAm6AbCo0+TE+HrfPXfAp7YBd70qDwkXMUprJiqaQjmFnABmoF+wIt6kF0v9pJcS7VOISSbn49DmYoVbIEfREV/tiWtnIo+ipjuUr0cnnNkVe5/pyZ/i/j99cb3NZz+er7D5iPdNoYEwAA" /></Footer>{/_ END_ATS_SCHEDULEDINTERVIEW_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveInterviewsRequest`

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

Returns metadata for `ScheduledInterview` POSTs.{/_ BEGIN_ATS_SCHEDULEDINTERVIEW_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VXbU/bOhT+K5U/Vmkz1nE3Il1dBVqgiKYdzcYYQtGpc5q4dezUdlrotP8+JX2BbmwXLqEg3W+Jc86T4+c5L/Y3QsFgJNUNcQgYTSySyBA5cUifxhhmHMO2MKimDGfEIpAyDxIkDumgirDi+v2K22sTi+gsTaUyGB4y5KE+VjgkDrGT3KyWCTZkGNqxYtqmcooKIrTXLrVh4UMswpkYY+hSKjNh/gSyMKzBwvKn1/yzNsQiKWhtYiWzKD7DSYb6d5hjIWccwwhrA9CLyDgmKAzwWggG7DtINbWAum8t30OIHA2GTTDQRIPUMCmWf42NSbVj2zHytF5EUA9xaqOwQRlGOWp7t7H39v3ebm2JUvz9nyDif+9UR5OBHLyvBhHlAWTVjk+vPb8980bRO+/g3bU3/7TrzcdzbzR+Uw0iqHb8zm7Xv2h0m+5O9x6DoP/Xl73P+839E69K562GN7qYeT7d6fh0PJi3GydHdHZy/PHam1+87TQ/NTy/tXtyJHe6B2e6c3AmO269TizChMFIQb5NTZzLb3cXlsni6nhws2naTiDCO5Qs9ICU1dJswBmt60YdEphLATNdpzKxEwwZ2AVU0J9koDA4lZEMGtnHc5jO6qmIVuwzKdbUE4e0vGPXO2g1NzPCnQLjMOBIHKMy/CWFiXNJIE05o0XAxCIowgDMch9FSaDKFR/JQbBeCrTJd2YRhYk0GFCFYHDpuFzLRd18C1Iw8e0SC/OSMqDMwk8bMJkmV7nBJGMKwx4oSNDkATiXV9+t+2g/zIsBmCiH+RXaXfJfHelcrh23y/WRQhSxzDSWw/Yt3gbfo/R3fHuu3/7cKp/tQFOpkIIqGvRjRZAqAsHmqMooiOVzloa3AE8W7hSnRXQlaFZAbfQmeRF9uNk//3/Ltpbokcp0FVCOFR84ynIEKqAeWE8v3r+2VzqP1KXHRCqZMOVoskILdCHLNifKM83tZ2lTfbdX6WeUotaHQI1Uuhz6NzE3mtc+/SKjwzcvUiP/oX09cd5bJBNskuXfUZj8WqAerVECypwhVRkzWJpAm6AbCo0+TE+HrfPXfAp7YBd70qDwkXMUprJiqaQjmFnABmoF+wIt6kF0v9pJcS7VOISSbn49DmYoVbIEfREV/tiWtnIo+ipjuUr0cnnNkVe5/pyZ/i/j99cb3NZz+er7D5iPdNoYEwAA" /></Footer>{/_ END_ATS_SCHEDULEDINTERVIEW_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
await client.ats.issues.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListIssuesRequest`

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

<details><summary><code>client.ats.issues.<a href="/src/api/resources/ats/resources/issues/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Issue</code></summary>
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

**request:** `Merge.ats.RetrieveIssuesRequest`

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

Returns a list of `JobInterviewStage` objects.{/_ BEGIN_ATS_JOBINTERVIEWSTAGE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_JOBINTERVIEWSTAGE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.jobInterviewStages.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListJobInterviewStagesRequest`

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

Returns a `JobInterviewStage` object with the given `id`.{/_ BEGIN_ATS_JOBINTERVIEWSTAGE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_JOBINTERVIEWSTAGE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveJobInterviewStagesRequest`

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

Returns a list of `JobPosting` objects.{/_ BEGIN_ATS_JOBPOSTING_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1aa2/aOhj+K8gfKy5tWbcV6eiIS2lhJbRc1nXTFBnnJRgcO7UdKEz770chpJCt3TltHSjS+UaM8yR+3sfvLf6BCNbgCjlHJYS1QlnkCQcYKqGmGFwJpSl3URZhn1rYA1RCLZAuZMq9bqZ81UBZpALfF1KDU6fAHHUhYYhKqOCF03IBp0MKTmEkqSoQMQWJXSg83JIbLu9BWcQon4BTJkQEXP8JJJqYw9HMXy7Dv5VGWeRjpfRIisAddeAuAPUU5oSLGQPHhdwAq+jNGHjANWY5B2tc2EDKyQjqsbFwDQ4w0ODUsMY10EA0FXz11JHWvioVCiNgfn75BnkHpgXgBSw1JQxU4aR4evzh9CS3Qlk+/W/bZX8dHYzvBmLw4cB2CbNxcNDqkXur15hZY/edVX13by36J9ZisrDGk8MD28UHrV7rpN27LbZr5aP2IxPs7vsvp58rtUrTOiCLs6I1vp1ZPXLU6pHJYNEoNs/JrHlxfW8tbo9btX7R6p2dNM/FUbvaUa1qR7TK+TzKIso1uBKHy1So9O3H5sBKLGU1GsyTUxsedmGDksge2Kc5PxgwSvKqmMceXgiOZypPhFfwwKG4sISyu3cBlmBfClfYxeD6Bk9neX+p0CVvVPAH6lEJnVkXZat6VksqojzFlOEBA1TSMoDfJIxK31BfsjzB3KEO1oCyy+uxGKx/2X60N9RqKJDM1nM/njvFLAh/E8E18FCSVNkhC5JjhrIowtrAsQPJQiwJntBgEwlYg2NjvR4LFZG8sn2sR+sh6qAs0lQzQN/DwbuASnCusMQeaJDhwr7/zD5qpynWgQQzlrpiWA+F9FagqdlnbY9HyX8mBRXsDYS46JjhIEbbFGx+7G9bqEaIkQALQ5s4wtoJKSaoqJZ7XTNEhEgJZ9Z8Z03uxNl+0cEEmcyEnBjiJIbbiT5exoDwALSZ5XeAyIBqu0EEt9uczXcQ2Eyowsl/ppxQs7GkNg0x7fdtfEvcYZohZTOwvzR6/7dIrTTWgXppyK7h+VBIYjhmx6hbCNovSaJSSZsC31nfFNkiiwJO74LQUMB1WCrI59qnHhYkmHIz9onREq5xW/7hdy7MeYtz8Mwq+Bw8+376mXw6OtkeQSaIkAB8JAJlaEev8d5OuvVvHvXVxc9jO/p1bnZNY6YpBpmKwNJZdT7SNBK8Ue/7qoD3tL99plEuhAcyMORaRxHYnpSpF51MlYnAMbP2i469RNuNi0gxrNBqo2WoVIsDSyOEtNWSqDeVHr2FbLTBh5RTDZmKxEp1oqaxAfJj3BXvthDv+6RZ3JPN2sSLhamOUoSV6BncXJNWreXsaV+pKQZdIkw1HWO0XMob1EjboCkGSlBDPnwFllDG5XGfOPw6NWUYV8KUanNCCMG2UiiZpeESpssYaICEJVRCEeLW/Tiv3OzAVzwWyJ4T+XfxEcV8HdGWmDDI1ANFBc/kMqtuH+WuyXwueoq9Bk8zX/lDBZdOkrHisIcZCDN8LaH2rj5+WsO/8GugjXVFuS8oN9TjjtHSTqPTzVxW2wvkkImZ0eY/yDoTs4TjPvQX43r9eK8+DMX+Z2q4O73G3baATLDSLV9lugEhoFQdEy2kMsNOEjMhngr5Itz6YSri2UEr70VRo+thqR/2lynOk6AJ0scfp5fDs5v/z6WknFKFwRsWZj1MhLlXbiV8Za4v50NTMXqDigh3T+qn6IU7AENzyWGEt4fFZA+wpzFlwlBFucbb8ZEmIz7OuHd7pScDFkotLgrBUNqkI1hbxrDb614bkbDEwyE17dUiUHvcc5onXy931Mh/ov/x/AMPKZ4J7Uk6AB8b6kys+Y9Q97T06386z1xJsdG+MUNP/9N5/InjuHLn3LfpnmzSGyEny4caoSFGS+TT7SljFjvdk1jz9qJLSKqDDZ3gjffxCvRNfQhN97jei7j/KkYPzsKsAULkOLK/8W7I95//APspLstnNAAA" /></Footer>{/_ END_ATS_JOBPOSTING_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.jobPostings.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListJobPostingsRequest`

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

Returns a `JobPosting` object with the given `id`.{/_ BEGIN_ATS_JOBPOSTING_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1aa2/aOhj+K8gfKy5tWbcV6eiIS2lhJbRc1nXTFBnnJRgcO7UdKEz770chpJCt3TltHSjS+UaM8yR+3sfvLf6BCNbgCjlHJYS1QlnkCQcYKqGmGFwJpSl3URZhn1rYA1RCLZAuZMq9bqZ81UBZpALfF1KDU6fAHHUhYYhKqOCF03IBp0MKTmEkqSoQMQWJXSg83JIbLu9BWcQon4BTJkQEXP8JJJqYw9HMXy7Dv5VGWeRjpfRIisAddeAuAPUU5oSLGQPHhdwAq+jNGHjANWY5B2tc2EDKyQjqsbFwDQ4w0ODUsMY10EA0FXz11JHWvioVCiNgfn75BnkHpgXgBSw1JQxU4aR4evzh9CS3Qlk+/W/bZX8dHYzvBmLw4cB2CbNxcNDqkXur15hZY/edVX13by36J9ZisrDGk8MD28UHrV7rpN27LbZr5aP2IxPs7vsvp58rtUrTOiCLs6I1vp1ZPXLU6pHJYNEoNs/JrHlxfW8tbo9btX7R6p2dNM/FUbvaUa1qR7TK+TzKIso1uBKHy1So9O3H5sBKLGU1GsyTUxsedmGDksge2Kc5PxgwSvKqmMceXgiOZypPhFfwwKG4sISyu3cBlmBfClfYxeD6Bk9neX+p0CVvVPAH6lEJnVkXZat6VksqojzFlOEBA1TSMoDfJIxK31BfsjzB3KEO1oCyy+uxGKx/2X60N9RqKJDM1nM/njvFLAh/E8E18FCSVNkhC5JjhrIowtrAsQPJQiwJntBgEwlYg2NjvR4LFZG8sn2sR+sh6qAs0lQzQN/DwbuASnCusMQeaJDhwr7/zD5qpynWgQQzlrpiWA+F9FagqdlnbY9HyX8mBRXsDYS46JjhIEbbFGx+7G9bqEaIkQALQ5s4wtoJKSaoqJZ7XTNEhEgJZ9Z8Z03uxNl+0cEEmcyEnBjiJIbbiT5exoDwALSZ5XeAyIBqu0EEt9uczXcQ2Eyowsl/ppxQs7GkNg0x7fdtfEvcYZohZTOwvzR6/7dIrTTWgXppyK7h+VBIYjhmx6hbCNovSaJSSZsC31nfFNkiiwJO74LQUMB1WCrI59qnHhYkmHIz9onREq5xW/7hdy7MeYtz8Mwq+Bw8+376mXw6OtkeQSaIkAB8JAJlaEev8d5OuvVvHvXVxc9jO/p1bnZNY6YpBpmKwNJZdT7SNBK8Ue/7qoD3tL99plEuhAcyMORaRxHYnpSpF51MlYnAMbP2i469RNuNi0gxrNBqo2WoVIsDSyOEtNWSqDeVHr2FbLTBh5RTDZmKxEp1oqaxAfJj3BXvthDv+6RZ3JPN2sSLhamOUoSV6BncXJNWreXsaV+pKQZdIkw1HWO0XMob1EjboCkGSlBDPnwFllDG5XGfOPw6NWUYV8KUanNCCMG2UiiZpeESpssYaICEJVRCEeLW/Tiv3OzAVzwWyJ4T+XfxEcV8HdGWmDDI1ANFBc/kMqtuH+WuyXwueoq9Bk8zX/lDBZdOkrHisIcZCDN8LaH2rj5+WsO/8GugjXVFuS8oN9TjjtHSTqPTzVxW2wvkkImZ0eY/yDoTs4TjPvQX43r9eK8+DMX+Z2q4O73G3baATLDSLV9lugEhoFQdEy2kMsNOEjMhngr5Itz6YSri2UEr70VRo+thqR/2lynOk6AJ0scfp5fDs5v/z6WknFKFwRsWZj1MhLlXbiV8Za4v50NTMXqDigh3T+qn6IU7AENzyWGEt4fFZA+wpzFlwlBFucbb8ZEmIz7OuHd7pScDFkotLgrBUNqkI1hbxrDb614bkbDEwyE17dUiUHvcc5onXy931Mh/ov/x/AMPKZ4J7Uk6AB8b6kys+Y9Q97T06386z1xJsdG+MUNP/9N5/InjuHLn3LfpnmzSGyEny4caoSFGS+TT7SljFjvdk1jz9qJLSKqDDZ3gjffxCvRNfQhN97jei7j/KkYPzsKsAULkOLK/8W7I95//APspLstnNAAA" /></Footer>{/_ END_ATS_JOBPOSTING_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveJobPostingsRequest`

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

Returns a list of `Job` objects.{/_ BEGIN_ATS_JOB_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_JOB_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.jobs.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListJobsRequest`

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

Returns a `Job` object with the given `id`.{/_ BEGIN_ATS_JOB_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_JOB_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveJobsRequest`

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

Returns a list of `ScreeningQuestion` objects.{/_ BEGIN_ATS_JOB_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_JOB_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.jobs.screeningQuestionsList("job_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

**request:** `Merge.ats.ScreeningQuestionsListJobsRequest`

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
await client.ats.linkedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListLinkedAccountsRequest`

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

Returns a list of `Offer` objects.{/_ BEGIN_ATS_OFFER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WXb2/aOhTGvwrySwTJKONuRbq6Cn9KoSWwkrarpio6OIdgcOJgO4Ey7btPCXRttq66t8qlvbovbR8/tn9+fGx/JRQ0+kLekSYBrUiFBMJDTppkNJuhJBUCEbMhQNIkQ5Q+lixnUrLGfVIhKo4iITV6Jwy5p04lzkiTmEEaVo1DNmPomXPJlElFghJ8NH90qc6yPqRCOAuX6FmUijjUz4nsAquwi/ypmDYrTSokAqX0XIrYn1/gKkb1O81lKNYcPR+rU1C7mXEMMNTAqx5oMB8pVeVO6qm6dA0ectTodUBDBzVSzUS4H3WudaSapjlHHhnZDAwPExNDE6RmlKMyG/Xjow/HjepeJRv9L9fnf9bKi9VUTD+UXZ9yF+Ly0KEb2+mv7YX/3m6/39jby4a9XW7txfJd2fWhPHSGjZFzUx91rNroiQB38sfn46tWpzWwy3TbrduLm7Xt0NrQocvptl8f9Oh6cPppY29vjoady7rtdBuDnqiN2hdq2L4QQ8swSIWwUKMvIV2mIs0vXx9X7M1iqfn0Lh/aD8DHR0h2+wERq0bxlDNqqLoBAWxFCGtlUBGYAXoMzEzKnaxikOieC1+49fjTNSRrIwr9e/pMhD/QkyaxLad/1c37wUqAcZhyJE0tY/zFwKT5hUAUcUaz6ZIKoVwo9FxIjSUxEBpdKhH0T3XphuVLbgR6/lDFvPS4aJA6bcVdQceK3KYhq5hJ9MYgIUCNMp3H7bfKU1B7GBSDdMxBz4QMehi4m+SKntUaz8Ds2qeW3e523hZODPWuWxFgJWI4F7HCYvg+6D32rbGI/r+IWbs/nBTr3n4q6aoM8AHsWyzPFyAciGnCdEEW3Yvl/Hkwhr/nVYDTzjHJXi4FQMqkclePuPE/3rWuD3yUM88J+RZMOJJAOZYc4CiKgZxJvWKe/AXuM+4sMiNOrHFpElOKSp0A1UKqYnjmNXPubdHPwj9599qA38iVNAlA6gukMmZZYDH086I5/IuPyfmse/2fuKteRNRBCDQwLgrKvw96h84Pb9Syl2e90liK0t5gLDNSAaAvz3r7h5R71Fp5mxE78H/g3wb+DzlfC7nM1lII3Xu1XDIYJZzb/PgAZn4B0Rfg8qCg//79834v+jof07/5Bnj+CN9++w4C9T/XYRMAAA==" /></Footer>{/_ END_ATS_OFFER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.offers.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListOffersRequest`

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

Returns an `Offer` object with the given `id`.{/_ BEGIN_ATS_OFFER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WXb2/aOhTGvwrySwTJKONuRbq6Cn9KoSWwkrarpio6OIdgcOJgO4Ey7btPCXRttq66t8qlvbovbR8/tn9+fGx/JRQ0+kLekSYBrUiFBMJDTppkNJuhJBUCEbMhQNIkQ5Q+lixnUrLGfVIhKo4iITV6Jwy5p04lzkiTmEEaVo1DNmPomXPJlElFghJ8NH90qc6yPqRCOAuX6FmUijjUz4nsAquwi/ypmDYrTSokAqX0XIrYn1/gKkb1O81lKNYcPR+rU1C7mXEMMNTAqx5oMB8pVeVO6qm6dA0ectTodUBDBzVSzUS4H3WudaSapjlHHhnZDAwPExNDE6RmlKMyG/Xjow/HjepeJRv9L9fnf9bKi9VUTD+UXZ9yF+Ly0KEb2+mv7YX/3m6/39jby4a9XW7txfJd2fWhPHSGjZFzUx91rNroiQB38sfn46tWpzWwy3TbrduLm7Xt0NrQocvptl8f9Oh6cPppY29vjoady7rtdBuDnqiN2hdq2L4QQ8swSIWwUKMvIV2mIs0vXx9X7M1iqfn0Lh/aD8DHR0h2+wERq0bxlDNqqLoBAWxFCGtlUBGYAXoMzEzKnaxikOieC1+49fjTNSRrIwr9e/pMhD/QkyaxLad/1c37wUqAcZhyJE0tY/zFwKT5hUAUcUaz6ZIKoVwo9FxIjSUxEBpdKhH0T3XphuVLbgR6/lDFvPS4aJA6bcVdQceK3KYhq5hJ9MYgIUCNMp3H7bfKU1B7GBSDdMxBz4QMehi4m+SKntUaz8Ds2qeW3e523hZODPWuWxFgJWI4F7HCYvg+6D32rbGI/r+IWbs/nBTr3n4q6aoM8AHsWyzPFyAciGnCdEEW3Yvl/Hkwhr/nVYDTzjHJXi4FQMqkclePuPE/3rWuD3yUM88J+RZMOJJAOZYc4CiKgZxJvWKe/AXuM+4sMiNOrHFpElOKSp0A1UKqYnjmNXPubdHPwj9599qA38iVNAlA6gukMmZZYDH086I5/IuPyfmse/2fuKteRNRBCDQwLgrKvw96h84Pb9Syl2e90liK0t5gLDNSAaAvz3r7h5R71Fp5mxE78H/g3wb+DzlfC7nM1lII3Xu1XDIYJZzb/PgAZn4B0Rfg8qCg//79834v+jof07/5Bnj+CN9++w4C9T/XYRMAAA==" /></Footer>{/_ END_ATS_OFFER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveOffersRequest`

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

Returns a list of `Office` objects.{/_ BEGIN_ATS_OFFICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92abW/iOBSF/0rkjxUvbWlnpkirFa8FWkILtJ1qNIpunEswOHFwHGgZzX9fhSRtszu7ElsXMXwkJCfxk3Nvjp38IBQUukI+kyoBFZIC8YSDnFTJYDJhFEmBQMBM8JBUSR+li0ZtPDJqN11SIGEUBEIqdNoMuRN2JE5IlZS9eLdi5LMJQ6c8lSwsU7FECS6WXw4pTjbHkALhzJ+jU6NURL76L5FkxyIke/7tZ/x3qEiBBBCGaipF5E6HuIgw/DfNuS9WHB0XizaEyZVx9NBXwIsOKCi/USrKROpX2+IxOMhRodMEBU1USBUTfnrWqVJBWC2Xp8iD0uYKSg4uy+iXQSpGOYbl88rF6eeL82Kqsjn7n5bL/zg5mi1sYX8+slzKLYiO+mP6ZI67K3PmnpmNsydzfXdurudrczY/PrJcOOqP++eD8WNl0KydDH6xgzX69PXivt6s98wjum5VzNnjyhzTk/6Yzu11t9K7pKte5/bJXD+e9pt3FXPcOu9dipNBYxj2G0PRr5VKpECYr9CVEA8zJNVvP95uSM1SCwLOKPhqpIDO88d0PXDxDZvkxkDAikFkc0ZLYaUEHqyFD6uwRIVX9tBhUM5rWqNFBBKta+EKa1XvPN4Pr0uzwM3uBxP+y80gVdIyOzWz0WrmPVJbAuNgcyRVJSP8h6lJ9RuZCXtjVEE3V08KxI/HWCASPaHQiu9X/pcVgJqS7/G2RcQkOjcgwUOFMhb8/rPwS2Lh1H7WBCqWyvGpRLcPsFyVAn9/+LxsYs62rOrg2UJ0hnpwZWpvie2Vk95DSiKuNdkq0dpbStuSiTifCukbQ6QyYiru/UaDi8jRQ8tO9S35qm/RWN8KE4KjejPozpc7Kkq99Bq18UgPp1gp16t6Z+Z8IVq/s7cawkNUevik9rS6VPjWwOfPh9LEGxI5KNRD6YaDmgjppaJpie1Hab2DkVO6Zz5lehk1l7Gm9WkAj9SdfAijXfqoHU8AgPl6IGVqucfcgVRcW2I4VQieJlSZXMrqUDBdoiZAWcFdomc9Le/p1cn5wTCSiP5URKGm/v2qt7f5Ugstoydsoy5AOukqykeyw4OA1xnqjOWdobVR25XNPhwPa3T7mqJ41q+6seQOIlSezfZD78F6rWsRINHKTUQebmm/2Xf2qgltS0jYIyqkpiadqRV3mq4/vIJ6wg4F09RfUrGcka5P76jj3+6Vkd7Ha8l0TdxSsUOM2z2ha1KSNeZYMVs9enZOWhBdHQqsa1yi1ENrI5UrQPHofnmuP+yoAPW28IEEytEYA0ehh89G6hBj9g3KUPhMZEu6bFMaGoid7iZMbzncdJQoJ1ystC42omxzscqV0HGwnrXbp4dilRG4aOjKjrGY9SY8VuzV2ef+oXTmUe3GGEWUYhi2gSohQ03Ucpo5s9XpV+G2jw/GbB5I9VJauvDlRXP8Zl+W15PWw145cEtm8UMK13rjU6L50Qve+jn46vp5oul10lsWie5eueQdVZaMaIg40ReTEr29nZxsSwjBU8C40BS0X/UOMU2OkccGyMIkaprwqkQ2+ywAd/yu8kOMdXd1adxI/bn77uoym+6e1hfO04DtFaV3mOsBORUeGkoYaopGL/JdrvlVeHoKSwlLTdFKTvHbv+19EHK+uRwtrDK1XHoaLDk3+cUu+9j/gOCAps+6XvySiP6GFfb9518FQQggyiwAAA==" /></Footer>{/_ END_ATS_OFFICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.offices.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListOfficesRequest`

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

Returns an `Office` object with the given `id`.{/_ BEGIN_ATS_OFFICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92abW/iOBSF/0rkjxUvbWlnpkirFa8FWkILtJ1qNIpunEswOHFwHGgZzX9fhSRtszu7ElsXMXwkJCfxk3Nvjp38IBQUukI+kyoBFZIC8YSDnFTJYDJhFEmBQMBM8JBUSR+li0ZtPDJqN11SIGEUBEIqdNoMuRN2JE5IlZS9eLdi5LMJQ6c8lSwsU7FECS6WXw4pTjbHkALhzJ+jU6NURL76L5FkxyIke/7tZ/x3qEiBBBCGaipF5E6HuIgw/DfNuS9WHB0XizaEyZVx9NBXwIsOKCi/USrKROpX2+IxOMhRodMEBU1USBUTfnrWqVJBWC2Xp8iD0uYKSg4uy+iXQSpGOYbl88rF6eeL82Kqsjn7n5bL/zg5mi1sYX8+slzKLYiO+mP6ZI67K3PmnpmNsydzfXdurudrczY/PrJcOOqP++eD8WNl0KydDH6xgzX69PXivt6s98wjum5VzNnjyhzTk/6Yzu11t9K7pKte5/bJXD+e9pt3FXPcOu9dipNBYxj2G0PRr5VKpECYr9CVEA8zJNVvP95uSM1SCwLOKPhqpIDO88d0PXDxDZvkxkDAikFkc0ZLYaUEHqyFD6uwRIVX9tBhUM5rWqNFBBKta+EKa1XvPN4Pr0uzwM3uBxP+y80gVdIyOzWz0WrmPVJbAuNgcyRVJSP8h6lJ9RuZCXtjVEE3V08KxI/HWCASPaHQiu9X/pcVgJqS7/G2RcQkOjcgwUOFMhb8/rPwS2Lh1H7WBCqWyvGpRLcPsFyVAn9/+LxsYs62rOrg2UJ0hnpwZWpvie2Vk95DSiKuNdkq0dpbStuSiTifCukbQ6QyYiru/UaDi8jRQ8tO9S35qm/RWN8KE4KjejPozpc7Kkq99Bq18UgPp1gp16t6Z+Z8IVq/s7cawkNUevik9rS6VPjWwOfPh9LEGxI5KNRD6YaDmgjppaJpie1Hab2DkVO6Zz5lehk1l7Gm9WkAj9SdfAijXfqoHU8AgPl6IGVqucfcgVRcW2I4VQieJlSZXMrqUDBdoiZAWcFdomc9Le/p1cn5wTCSiP5URKGm/v2qt7f5Ugstoydsoy5AOukqykeyw4OA1xnqjOWdobVR25XNPhwPa3T7mqJ41q+6seQOIlSezfZD78F6rWsRINHKTUQebmm/2Xf2qgltS0jYIyqkpiadqRV3mq4/vIJ6wg4F09RfUrGcka5P76jj3+6Vkd7Ha8l0TdxSsUOM2z2ha1KSNeZYMVs9enZOWhBdHQqsa1yi1ENrI5UrQPHofnmuP+yoAPW28IEEytEYA0ehh89G6hBj9g3KUPhMZEu6bFMaGoid7iZMbzncdJQoJ1ystC42omxzscqV0HGwnrXbp4dilRG4aOjKjrGY9SY8VuzV2ef+oXTmUe3GGEWUYhi2gSohQ03Ucpo5s9XpV+G2jw/GbB5I9VJauvDlRXP8Zl+W15PWw145cEtm8UMK13rjU6L50Qve+jn46vp5oul10lsWie5eueQdVZaMaIg40ReTEr29nZxsSwjBU8C40BS0X/UOMU2OkccGyMIkaprwqkQ2+ywAd/yu8kOMdXd1adxI/bn77uoym+6e1hfO04DtFaV3mOsBORUeGkoYaopGL/JdrvlVeHoKSwlLTdFKTvHbv+19EHK+uRwtrDK1XHoaLDk3+cUu+9j/gOCAps+6XvySiP6GFfb9518FQQggyiwAAA==" /></Footer>{/_ END_ATS_OFFICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveOfficesRequest`

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

Returns a list of `RejectReason` objects.{/_ BEGIN_ATS_REJECTREASON_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92XbU/bMBCA/wryxypNKF23EWmaSstLO5JCG2AdQtHFuaZunTjYTgNF/PcpbXnpxiaxZRPw0Y792Pf4zpFvCAWNkZDXxCagFTFILELkxCZ9nCDVfQQlEmIQSJkLMRKbOCgj3Gh6g43mUYcYRGVpKqTGcI8hD9WBxBGxiRUXw6pZwkYMQ2ssmbKomKGECK37KdXRYg4xCGfJFMMmpSJL9O8gy4FVWI78oVl8VpoYJAWl9FiKLBr38TJD9SvmNBE5xzDCagBquTOOMSYaeDUEDdYjUlUuUU/1FTGEyFFj2AYNbdRINRPJatWx1qmyLWuMPDUXOzBDnFmYWCA1oxyV1ahvb33YblRXlMXqn/2If6pVJpeBCD5U/IhyH7KK49Er1+vk7iR657beXbnzk4Y7n87dyXSz4kdQcTyn0fOG9V67Wes9McAfvP+6fbrT3um6FTrfrbuTYe56tOZ4dBrMO/XuPs27B8dX7ny45bRP6q632+jui1qv1VdOqy+cpmkSg7BEYyShCFMR+/zmcccqWZppyhmFRA800On6nE4MET5yszwYSFk1zQLOqKnqJsQwFwnkyqQitmIMGVjrTH9wmYFE/1BEws93Doan/UNzkkZ358FEcn8YxCa77kHTbe2213OkOQPGIeBIbC0z/CmpiX1OYLnsMlqDJEWABpEYC41+cVjrLT8FPSYXRd9lxiSGRyAhRo2yoF3cGk/qUuPguiRLBWpNTj07PoNZbqbJC5Fz38XC54rax7gcTUcc9EjIeB9j/2p2Sr/UGm9DkERMxiJTWI6nB97jnHo5hfYXqlir4wzKzaZOgfTVQtQ/Sad/LqUrgjabQblaVtD/VmDPjPkQZyjLiXiBWrt9xTD6eL1z9iYqpieBctzwgKMox9cC9eZulj5SmTGNcsRFXo6oe+QeF/lagm2m88ne3tbLEfdMWR5CrIFxUVIJPvDeXF55EkYjpsu9nFdQf+KF3ca3w9f52/IkCzCFsGw1S+rrdHIm5HSxh1Kc3NHW7p7ejHOXb/+34voDAyGU9LC6S4oV9LW9Fi5uvwPrCGIu9REAAA==" /></Footer>{/_ END_ATS_REJECTREASON_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.rejectReasons.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListRejectReasonsRequest`

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

Returns a `RejectReason` object with the given `id`.{/_ BEGIN_ATS_REJECTREASON_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92XbU/bMBCA/wryxypNKF23EWmaSstLO5JCG2AdQtHFuaZunTjYTgNF/PcpbXnpxiaxZRPw0Y792Pf4zpFvCAWNkZDXxCagFTFILELkxCZ9nCDVfQQlEmIQSJkLMRKbOCgj3Gh6g43mUYcYRGVpKqTGcI8hD9WBxBGxiRUXw6pZwkYMQ2ssmbKomKGECK37KdXRYg4xCGfJFMMmpSJL9O8gy4FVWI78oVl8VpoYJAWl9FiKLBr38TJD9SvmNBE5xzDCagBquTOOMSYaeDUEDdYjUlUuUU/1FTGEyFFj2AYNbdRINRPJatWx1qmyLWuMPDUXOzBDnFmYWCA1oxyV1ahvb33YblRXlMXqn/2If6pVJpeBCD5U/IhyH7KK49Er1+vk7iR657beXbnzk4Y7n87dyXSz4kdQcTyn0fOG9V67Wes9McAfvP+6fbrT3um6FTrfrbuTYe56tOZ4dBrMO/XuPs27B8dX7ny45bRP6q632+jui1qv1VdOqy+cpmkSg7BEYyShCFMR+/zmcccqWZppyhmFRA800On6nE4MET5yszwYSFk1zQLOqKnqJsQwFwnkyqQitmIMGVjrTH9wmYFE/1BEws93Doan/UNzkkZ358FEcn8YxCa77kHTbe2213OkOQPGIeBIbC0z/CmpiX1OYLnsMlqDJEWABpEYC41+cVjrLT8FPSYXRd9lxiSGRyAhRo2yoF3cGk/qUuPguiRLBWpNTj07PoNZbqbJC5Fz38XC54rax7gcTUcc9EjIeB9j/2p2Sr/UGm9DkERMxiJTWI6nB97jnHo5hfYXqlir4wzKzaZOgfTVQtQ/Sad/LqUrgjabQblaVtD/VmDPjPkQZyjLiXiBWrt9xTD6eL1z9iYqpieBctzwgKMox9cC9eZulj5SmTGNcsRFXo6oe+QeF/lagm2m88ne3tbLEfdMWR5CrIFxUVIJPvDeXF55EkYjpsu9nFdQf+KF3ca3w9f52/IkCzCFsGw1S+rrdHIm5HSxh1Kc3NHW7p7ejHOXb/+34voDAyGU9LC6S4oV9LW9Fi5uvwPrCGIu9REAAA==" /></Footer>{/_ END_ATS_REJECTREASON_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveRejectReasonsRequest`

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

Returns a list of `Scorecard` objects.{/_ BEGIN_ATS_SCORECARD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WWbU/iQBSF/wqZjwRaEVm1yWZTBBUixZX6QoxpLjOXMjDtlJkpKMb/vqGgK7u6q0lj9GNvz5y589yTydwTCgZDqe6IQ8BoUiKRZCiIQ3pUKqSgGCkRSLgHERKHdFCFWHD9XsE9bZES0WmSSGWQHXIUTB8rHBKH2NFSVk5jPuTI7JHi2qZyhgpCtJ+WlIfZGlIigscTZC6lMo3Nv0xWwjKslH98Ln9rQ0okAa3NSMk0HJ3hNEX9mucklnOBLMTyAPSqM4ERxgZEmYEB+5lTWa2sXqotz8BQoEHWAAMNNEgNl/F615ExiXZse4QisbIOLIYzG2MblOFUoLZr1f3t3f1aee2S7f4jCMX3SnE8HcjBbjEIqQggLXZ8euv5rbk3Dne8g51bb3Fe8xaThTeebBWDEIodv1Pr+v1qt+FWui8Igt63q/2LeqPe9op00ax64/7c82ml49PJYNGqto/ovH3889Zb9Lc7jfOq5zdr7SNZ6R6c6c7Bmey4lkVKhMcGQwXLY2riXN8/L6zDUleIi7tNbSuCEJ8xWQ0EEl5O0oHg1NJVCyJYyBjm2qIysiNkHOyVV9CbpqAwOJGhtMZJ+Midy/gJOnFI0zt2vYNmYzML7gy4gIFA4hiV4l/hJc41gSQRnGadrvtWM45zVKREsgALESikMoowZo8yhZE0GCxntvkVJGBG5GZZm6ZcITsFBREaVMvNbh5KL1E7UojxSKYa8yH32++N9DzXb100c2P3bo5UIRhkAZj/s30qcZbdRoOIm/Xad2I/wVnWXQ7EM6vnsAPZD/fu6pcfGdkvgr3nnhZ6KaWo9SFQI5XOZwabnhvDqNMrGR5ufephvAX8e0lHoMwZUpXyTJgP5k3TDc7jvdnJsHlpJfHnuqdfC3re0fZRCIxN4RFPTve5Wdkuj7eyDXQG/ctwzjnXl1JNGOT0zDgVYIZSRWvTj2T6Ae+Nm4dfqcTHlPELAAA=" /></Footer>{/_ END_ATS_SCORECARD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.scorecards.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListScorecardsRequest`

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

Returns a `Scorecard` object with the given `id`.{/_ BEGIN_ATS_SCORECARD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WWbU/iQBSF/wqZjwRaEVm1yWZTBBUixZX6QoxpLjOXMjDtlJkpKMb/vqGgK7u6q0lj9GNvz5y589yTydwTCgZDqe6IQ8BoUiKRZCiIQ3pUKqSgGCkRSLgHERKHdFCFWHD9XsE9bZES0WmSSGWQHXIUTB8rHBKH2NFSVk5jPuTI7JHi2qZyhgpCtJ+WlIfZGlIigscTZC6lMo3Nv0xWwjKslH98Ln9rQ0okAa3NSMk0HJ3hNEX9mucklnOBLMTyAPSqM4ERxgZEmYEB+5lTWa2sXqotz8BQoEHWAAMNNEgNl/F615ExiXZse4QisbIOLIYzG2MblOFUoLZr1f3t3f1aee2S7f4jCMX3SnE8HcjBbjEIqQggLXZ8euv5rbk3Dne8g51bb3Fe8xaThTeebBWDEIodv1Pr+v1qt+FWui8Igt63q/2LeqPe9op00ax64/7c82ml49PJYNGqto/ovH3889Zb9Lc7jfOq5zdr7SNZ6R6c6c7Bmey4lkVKhMcGQwXLY2riXN8/L6zDUleIi7tNbSuCEJ8xWQ0EEl5O0oHg1NJVCyJYyBjm2qIysiNkHOyVV9CbpqAwOJGhtMZJ+Midy/gJOnFI0zt2vYNmYzML7gy4gIFA4hiV4l/hJc41gSQRnGadrvtWM45zVKREsgALESikMoowZo8yhZE0GCxntvkVJGBG5GZZm6ZcITsFBREaVMvNbh5KL1E7UojxSKYa8yH32++N9DzXb100c2P3bo5UIRhkAZj/s30qcZbdRoOIm/Xad2I/wVnWXQ7EM6vnsAPZD/fu6pcfGdkvgr3nnhZ6KaWo9SFQI5XOZwabnhvDqNMrGR5ufephvAX8e0lHoMwZUpXyTJgP5k3TDc7jvdnJsHlpJfHnuqdfC3re0fZRCIxN4RFPTve5Wdkuj7eyDXQG/ctwzjnXl1JNGOT0zDgVYIZSRWvTj2T6Ae+Nm4dfqcTHlPELAAA=" /></Footer>{/_ END_ATS_SCORECARD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveScorecardsRequest`

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
await client.ats.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListSyncStatusRequest`

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

Returns a list of `Tag` objects.{/_ BEGIN_ATS_TAG_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92ZbW/iOBCA/wryRwSkLeV2i3Q68dpCSWhLet3eqooGZwgGJw6OAy2r/e+rAGmbu95KXN29tB9jnCeZxzNjR3wjFBR6Qj6QOgEVkRLxhYuc1IkNHikRCJkFPpI6MVF6WGjYo0LjokdKJIrDUEiFbpchd6MziRNSJ4afTCvHAZswdI2pZJFBxRIleGg83lKebO4hJcJZMEe3QamIA/UzyHZiGbYz/3aZ/BwpUiIhRJGaShF70ytcxBj9G3MeiBVH18PyGKLtm3H0MVDAyy4oMJ6RynKLemksicFFjgrdNihoo0KqmAh2T50qFUZ1w5giDyubN6i4uDQwMEAqRjlGRq16cvTppFbeUTZP/8Px+O+HxdliLMafio5HuQNx0bTpvWX3VtbMO7Zax/fW+rpmredrazY/KDoeFE3brA3t2+qw3TgcvjDBGf325eTPZrvZt4p03alas9uVZdND06bz8bpX7Z/SVf/s8t5a3x6Z7euqZXdq/VNxOGxdRWbrSpiNSoWUCAsUehKSMCNS//rt+cAuWRrRdPyQndrzwcNnSrbrASErh/GYM1qJqhXwYS0CWEUVKnzDR5eBsUE5o0UMEp2B8IRTjS9vYLmqhIGX2mcieFRP6qRjnTWsVqedzYjGEhiHMUdSVzLGf6QwqX8lFAKXuaAwWdggCaZEJPpCoZMsTPbKCUFNn4aYS+6Si0XMJLoXIMFHhTLh3n0vvaSpKRHXmjxtWc9FVWZhLgTtKaXVsEd6lCSkTOb0j635QnTyIuYVmdPigs5XQs41mUpx/2f+/AcLQgYoIyUCLNjAMVADFuhS8sT+CEUlkYNCPWouOKiJkP4O6kQbPR+gH3c5KDqVei3toM7cb7WmvcWbaHp7M8kxC1igR01KyxRWTtJnTzGnEjGYijjSVFtPvDx2nVdkEGv1TE37elpZvQT5lt3nzaX0Yb0+u9JjZcvKnHduLqnZNt0PkD19MR5RITUVWUor52vn2tuJrn6cFlRC3NWT8+AediA+/0Vu9gx9gEvUtE1vUJmqEbfe54fmTV6qZk81V0hlzBTKCRcrPYoekV0uVhlVB+F61u0evVNVo8ZFYRRTilHUBaqEjPT4yjIzwpr0i/C6B3kR9oqOPPJBqsfM0GUuC82om31eDiadm3farHefpw8TpbdlP3HfqxgEXwHjQlM/f+Ll8QC9txyeLG8hLQlN5x+1xToyxebsE35fSxImE6a7sLZQZ2a7/dpfg7yoeUXHvj4/LVxIkSYT2wSkwdj1+Wl6aDxqLtz7IcvnofFGyPnmGVqiTmmZPWq45NziJ++02yQhuaDp/4i0jnbQX10/Py2Pu+8/AMDjGPP5HAAA" /></Footer>{/_ END_ATS_TAG_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.tags.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListTagsRequest`

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

Returns a list of `RemoteUser` objects.{/_ BEGIN_ATS_REMOTEUSER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_REMOTEUSER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.ats.users.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.ats.ListUsersRequest`

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

Returns a `RemoteUser` object with the given `id`.{/_ BEGIN_ATS_REMOTEUSER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ATS_REMOTEUSER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.ats.RetrieveUsersRequest`

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

<details><summary><code>client.crm.accountToken.<a href="/src/api/resources/crm/resources/accountToken/client/Client.ts">retrieve</a>(publicToken, { ...params }) -> Merge.AccountToken</code></summary>
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

**request:** `Merge.crm.RetrieveAccountTokenRequest`

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

Returns a list of `Account` objects.{/_ BEGIN_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Z72/aOBjH/xXklwjItYxuRZpODHorPSXtUda7rqqiB+chuDi2aztQmPa/TwnQ0l1pOxbacLd3xDhfO8/n+eXkC6FgMZR6QuqE6oiUSCQD5KROGpTKWFhSIqCYBxGSOnFRh1hodtxC46RNSsTESkltMfiDIQ/MocY+qRMnSqaVY8H6DANnoJlxqByhhhCd21vK/fQeUiKciSEG8/UeE5lNLMNs5neXyd8m2a4CY+xAyzgcdPA6RrNKcyjkmGMQYrkHZrYzjhEKC7wcgAVnSamsZ1IPjSXPECBHi0ELLLTQIrVMivmqA2uVqTvOALmqpDuoBDhyUDigLaMcjVOr7u++3a+V5yrp6r/7IX+/U7y67sne26IfUu5DXHS79MbrtsfeVfjGa7658aafat50OPWuhr8V/RCKbtetHXfPq8etxs7xAxP8071/9s8+tD4ceUU6Pah6V+djr0t33C4d9qbt6tFHOj46/OvGm57vuq1PVa97UDv6KHeOmx3jNjvSbVQqpESYsBhqSB7TkPrFl+WBubM0KEUu789tRxDikk1mQECxsop7nNGKqVYggqkUMDYVKiMnwoCBc8LB9qWOINX0zXUMGitKhAvTMylu7U7q5MA7bHjNg9Z9d2iMgHHocSR1q2P8l/+S+gWBINBoDCZQqRQW6JyvoZqpVL5EUIQQpq5i0ucLYmP1JHFlMNYHatmI2YkPiTuKxBolIuKoh9qXfR8jxeUE0xVkun4smGWz67FAnWx6IAX6s3uScY2RtOhTjWAxmAnPxxJfuX/lK7CDuyEW3P2OVXAnYMEME/Ex9gyzSC6Tadcx0xicgIYIbbJ4/eLya+lhvpaNsAmRAhaKbDjf11xwvlLZc15ie5/mnNcqMhshsS6Bfp8JZicZ2X6utsnoWrL6Ii6kfTASfsima9qvCcrEHLNNUXPRTZvvsYT0SBZaYe2NevdP5pkmlyZrRonkRtLKGuXjCTTbUAqaUqnUf7JklGrmDNI21+vDuHeqpM2G0mHcM0rapyu01+i2zw5y0IdxhOCBcHu9vuz2/PNc7naicH38bWFYOLA8o27hVu4VmvEnq90K1tscvX8iqGwT7BBBvQK875issP3z7PyTNnUZ1dLIvi20JgIiRk2hulcrnAJHk62tF/rVvVqqnuMTbN7S5KYCyoutGSDn2YBeqL0e0SWGeWhW1qRywhQGmo0ybvhvZV+uU3nx3mSLepEEB2cisyPDQu6FXl2sDLwf7DvyFHhpWepz0BlH3p1uXo5y/6d3tDPrS003QjXRfSTWfh39cpJuT+MQdLPjZusDJlGlOspvL5sb3psK7y5ClDh3VoX0Tm/jNLe4R02sNJZ6WMg8pBbKfrPjbvLj1/OO5tvI5syyMOs30aNU81V6y419aM4zw88oAjTDwmlmp/MFybmy/25sd7vdv3NYsv6Dby4/y4HMPlVO5UA+q/n41YWuDfzZXefl128YQM1XSSYAAA==" /></Footer>{/_ END_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListAccountsRequest`

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

Creates an `Account` object with the given values.{/_ BEGIN_CRM_ACCOUNT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE+2Xb2/TOhTGv8rkl1WasJUCi3R1VdpCOynZ2AKXgaboxD5N3Tqx5z/t1onvfpU22zrYJgQZ8IJ3iX3yHPv3nBMnV4SCxVzqSxISqgvikUIyFCQkPUqlKy3xCCgeQ4EkJBHqHHf6x9FO72hMPGKcUlJbZG84CmZGGickJEFRhbVdySccWTDV3ARULlBDjsHNI+3J+hniEcHLObI632Mim8A2bCK/uq2mTbVcBcbYqZYunx7juUPzkOa8lEuBLMd2BmazMoEFlhZEm4GFYEuprTdS941Ve2Ao0CIbgIUBWqSWy7LOOrVWmTAIpiiUv16Bz3ARYBmAtpwKNEG3s7/3cr/brlXW2f9Nc/HPbmt2nsnsZSvNqUjBtaKEXsTJeBnP8udx//lFvHrfjVfzVTybP2ulObSiJOoeJqedw0Fv9/CegPTkxcf9D68Hrw/iFl0NO/HsdBkndDdK6DxbjTsHb+nyYPTuIl6d7kWD9504GXYP3srdw/6xifrHMur5PvEILy3mGqptGhJ+vtoeqIulD8o4gXeDxwXkuAVl4wgo3lYuE5z6puNDAStZwtL4VBZBgYxDcCTATqQualFflfk1dS7LG+QkJMN41Iv7w8HdSugtgAvIBJLQaofflC4JPxOGhmqu1joeEWBsCtTyBbeXKVSVVVYb84hclqiJRzQW0mJKNYJFtgmpxzi7vXaK3c4vMTPcIjmrps8d18iOQEOBFnW1iLMv3r0shTRNk6wk/ZlqniMwptEY3PTFNtMaoJrKEtPSFVm16V8LUiq1Nq9JkmvN34PyuhZ/I9KRy06UtM0wHbnMKGlTc+5AP1aecS8Zfxg2SZSXzBmrLx/t/Q3hVE5SLJSQl7gW+gEXbk6/n3XlrqC/fZdSAcZ8ndNfgHBIHnDziCtkmi8aftvcyD6xpT/q3M879aA/df5mbToBgWYiNW3Yp1vdR47Yv733pN5+wpKhme+coBDNulsrp6+Wdi9J/nuSr6jvMvnPOb0+yams/miaBb2SU0l1cX2MNd9KjbfP0yA/+/I/clrB/GIOAAA=" /></Footer>{/_ END_CRM_ACCOUNT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Account` object with the given `id`.{/_ BEGIN_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Z72/aOBjH/xXklwjItYxuRZpODHorPSXtUda7rqqiB+chuDi2aztQmPa/TwnQ0l1pOxbacLd3xDhfO8/n+eXkC6FgMZR6QuqE6oiUSCQD5KROGpTKWFhSIqCYBxGSOnFRh1hodtxC46RNSsTESkltMfiDIQ/MocY+qRMnSqaVY8H6DANnoJlxqByhhhCd21vK/fQeUiKciSEG8/UeE5lNLMNs5neXyd8m2a4CY+xAyzgcdPA6RrNKcyjkmGMQYrkHZrYzjhEKC7wcgAVnSamsZ1IPjSXPECBHi0ELLLTQIrVMivmqA2uVqTvOALmqpDuoBDhyUDigLaMcjVOr7u++3a+V5yrp6r/7IX+/U7y67sne26IfUu5DXHS79MbrtsfeVfjGa7658aafat50OPWuhr8V/RCKbtetHXfPq8etxs7xAxP8071/9s8+tD4ceUU6Pah6V+djr0t33C4d9qbt6tFHOj46/OvGm57vuq1PVa97UDv6KHeOmx3jNjvSbVQqpESYsBhqSB7TkPrFl+WBubM0KEUu789tRxDikk1mQECxsop7nNGKqVYggqkUMDYVKiMnwoCBc8LB9qWOINX0zXUMGitKhAvTMylu7U7q5MA7bHjNg9Z9d2iMgHHocSR1q2P8l/+S+gWBINBoDCZQqRQW6JyvoZqpVL5EUIQQpq5i0ucLYmP1JHFlMNYHatmI2YkPiTuKxBolIuKoh9qXfR8jxeUE0xVkun4smGWz67FAnWx6IAX6s3uScY2RtOhTjWAxmAnPxxJfuX/lK7CDuyEW3P2OVXAnYMEME/Ex9gyzSC6Tadcx0xicgIYIbbJ4/eLya+lhvpaNsAmRAhaKbDjf11xwvlLZc15ie5/mnNcqMhshsS6Bfp8JZicZ2X6utsnoWrL6Ii6kfTASfsima9qvCcrEHLNNUXPRTZvvsYT0SBZaYe2NevdP5pkmlyZrRonkRtLKGuXjCTTbUAqaUqnUf7JklGrmDNI21+vDuHeqpM2G0mHcM0rapyu01+i2zw5y0IdxhOCBcHu9vuz2/PNc7naicH38bWFYOLA8o27hVu4VmvEnq90K1tscvX8iqGwT7BBBvQK875issP3z7PyTNnUZ1dLIvi20JgIiRk2hulcrnAJHk62tF/rVvVqqnuMTbN7S5KYCyoutGSDn2YBeqL0e0SWGeWhW1qRywhQGmo0ybvhvZV+uU3nx3mSLepEEB2cisyPDQu6FXl2sDLwf7DvyFHhpWepz0BlH3p1uXo5y/6d3tDPrS003QjXRfSTWfh39cpJuT+MQdLPjZusDJlGlOspvL5sb3psK7y5ClDh3VoX0Tm/jNLe4R02sNJZ6WMg8pBbKfrPjbvLj1/OO5tvI5syyMOs30aNU81V6y419aM4zw88oAjTDwmlmp/MFybmy/25sd7vdv3NYsv6Dby4/y4HMPlVO5UA+q/n41YWuDfzZXefl128YQM1XSSYAAA==" /></Footer>{/_ END_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveAccountsRequest`

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

Updates an `Account` object with the given `id`.{/_ BEGIN_CRM_ACCOUNT_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE82Xb2/bNhDGv0rAl4YsLXG9NgKGwbW92gGkZInaLS0C4USeZdoUyfCPnbjodx9kO4nTJcHWKkHeieTxIfl77kTpK6HgsFTmmsSEmooEpFIMBYlJj1LlpSMBAc1TqJDEJEFT4l7/NNnrnYxJQKzXWhmH7A+OgtmRwQmJSVTVYW0v+YQji6aG24iqBRooMbqd0p6s55CACC7nyLbrPSWyCWzDJvK7Zj1s6+1qsNZNjfLl9BQvPdrHNOdSLQWyEtsF2M3OBFYoHYg2AwfRjlLbbKQe6qvPwFCgQzYABwN0SB1Xcrvq1Dlt4yiaotDhegchw0WEMgLjOBVoo27n8ODtYbe9VVmv/nteit/2W7PLQhVvW3lJRQ6+lWT0Ks3Gy3RWvkn7b67S1cduupqv0tn8l1ZeQivJku5xdt45HvT2jx8IyM9+/fvw0/vB+6O0RVfDTjo7X6YZ3U8yOi9W487RB7o8Gv15la7OD5LBx06aDbtHH9T+cf/UJv1TlfTCkASES4elgfqYlsRfvu52bJOlD9p6gfeDxxWUuANl4who3ta+EJyGthNCBSslYWlDqqqoQsYhOhHgJspUW9FQy/KGOlfyFjmJyTAd9dL+cHA/E3oL4AIKgSR2xuO/UpfEXwhDSw3Xa52ACLAuB+r4grvrHOrMkvXBAqKWEg0JiMFKOcypQXDINiHbPs7unr1md+NLLCx3SC7q4UvPDbITMFChQ1Nv4uJb8CBLoWzTJGvJcKafm+MW2kvCUlqvDWqS1lrzWXABYwatxc1r5AF0N/mmp0piLn1V1Md/UaQjX5xp5ZphOvKF1crl9tKDeSoF0142/jRskiiXzFtnrp+s7w3hXE1yrLRQ17gW+gEXbm+4n3XlvmC428qpAGu/XzNcgPBIHnHzhGtkhi8afqPcyj6DpT/q1v9wZ8eRF/LhDATaiTK0YSPudJ+4J19lcb2OYnrErs8oGdr53hkK0axhW+X83dIdZNlfz/J18598ez03zmc1VfWfRrOgV2qqqKlurp7mq+MlK+InkF98+wcFLJya+g0AAA==" /></Footer>{/_ END_CRM_ACCOUNT_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

<details><summary><code>client.crm.accounts.<a href="/src/api/resources/crm/resources/accounts/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMAccount` PATCHs.{/_ BEGIN_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Z72/aOBjH/xXklwjItYxuRZpODHorPSXtUda7rqqiB+chuDi2aztQmPa/TwnQ0l1pOxbacLd3xDhfO8/n+eXkC6FgMZR6QuqE6oiUSCQD5KROGpTKWFhSIqCYBxGSOnFRh1hodtxC46RNSsTESkltMfiDIQ/MocY+qRMnSqaVY8H6DANnoJlxqByhhhCd21vK/fQeUiKciSEG8/UeE5lNLMNs5neXyd8m2a4CY+xAyzgcdPA6RrNKcyjkmGMQYrkHZrYzjhEKC7wcgAVnSamsZ1IPjSXPECBHi0ELLLTQIrVMivmqA2uVqTvOALmqpDuoBDhyUDigLaMcjVOr7u++3a+V5yrp6r/7IX+/U7y67sne26IfUu5DXHS79MbrtsfeVfjGa7658aafat50OPWuhr8V/RCKbtetHXfPq8etxs7xAxP8071/9s8+tD4ceUU6Pah6V+djr0t33C4d9qbt6tFHOj46/OvGm57vuq1PVa97UDv6KHeOmx3jNjvSbVQqpESYsBhqSB7TkPrFl+WBubM0KEUu789tRxDikk1mQECxsop7nNGKqVYggqkUMDYVKiMnwoCBc8LB9qWOINX0zXUMGitKhAvTMylu7U7q5MA7bHjNg9Z9d2iMgHHocSR1q2P8l/+S+gWBINBoDCZQqRQW6JyvoZqpVL5EUIQQpq5i0ucLYmP1JHFlMNYHatmI2YkPiTuKxBolIuKoh9qXfR8jxeUE0xVkun4smGWz67FAnWx6IAX6s3uScY2RtOhTjWAxmAnPxxJfuX/lK7CDuyEW3P2OVXAnYMEME/Ex9gyzSC6Tadcx0xicgIYIbbJ4/eLya+lhvpaNsAmRAhaKbDjf11xwvlLZc15ie5/mnNcqMhshsS6Bfp8JZicZ2X6utsnoWrL6Ii6kfTASfsima9qvCcrEHLNNUXPRTZvvsYT0SBZaYe2NevdP5pkmlyZrRonkRtLKGuXjCTTbUAqaUqnUf7JklGrmDNI21+vDuHeqpM2G0mHcM0rapyu01+i2zw5y0IdxhOCBcHu9vuz2/PNc7naicH38bWFYOLA8o27hVu4VmvEnq90K1tscvX8iqGwT7BBBvQK875issP3z7PyTNnUZ1dLIvi20JgIiRk2hulcrnAJHk62tF/rVvVqqnuMTbN7S5KYCyoutGSDn2YBeqL0e0SWGeWhW1qRywhQGmo0ybvhvZV+uU3nx3mSLepEEB2cisyPDQu6FXl2sDLwf7DvyFHhpWepz0BlH3p1uXo5y/6d3tDPrS003QjXRfSTWfh39cpJuT+MQdLPjZusDJlGlOspvL5sb3psK7y5ClDh3VoX0Tm/jNLe4R02sNJZ6WMg8pBbKfrPjbvLj1/OO5tvI5syyMOs30aNU81V6y419aM4zw88oAjTDwmlmp/MFybmy/25sd7vdv3NYsv6Dby4/y4HMPlVO5UA+q/n41YWuDfzZXefl128YQM1XSSYAAA==" /></Footer>{/_ END_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.MetaPatchRetrieveAccountsRequest`

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

Returns metadata for `CRMAccount` POSTs.{/_ BEGIN_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Z72/aOBjH/xXklwjItYxuRZpODHorPSXtUda7rqqiB+chuDi2aztQmPa/TwnQ0l1pOxbacLd3xDhfO8/n+eXkC6FgMZR6QuqE6oiUSCQD5KROGpTKWFhSIqCYBxGSOnFRh1hodtxC46RNSsTESkltMfiDIQ/MocY+qRMnSqaVY8H6DANnoJlxqByhhhCd21vK/fQeUiKciSEG8/UeE5lNLMNs5neXyd8m2a4CY+xAyzgcdPA6RrNKcyjkmGMQYrkHZrYzjhEKC7wcgAVnSamsZ1IPjSXPECBHi0ELLLTQIrVMivmqA2uVqTvOALmqpDuoBDhyUDigLaMcjVOr7u++3a+V5yrp6r/7IX+/U7y67sne26IfUu5DXHS79MbrtsfeVfjGa7658aafat50OPWuhr8V/RCKbtetHXfPq8etxs7xAxP8071/9s8+tD4ceUU6Pah6V+djr0t33C4d9qbt6tFHOj46/OvGm57vuq1PVa97UDv6KHeOmx3jNjvSbVQqpESYsBhqSB7TkPrFl+WBubM0KEUu789tRxDikk1mQECxsop7nNGKqVYggqkUMDYVKiMnwoCBc8LB9qWOINX0zXUMGitKhAvTMylu7U7q5MA7bHjNg9Z9d2iMgHHocSR1q2P8l/+S+gWBINBoDCZQqRQW6JyvoZqpVL5EUIQQpq5i0ucLYmP1JHFlMNYHatmI2YkPiTuKxBolIuKoh9qXfR8jxeUE0xVkun4smGWz67FAnWx6IAX6s3uScY2RtOhTjWAxmAnPxxJfuX/lK7CDuyEW3P2OVXAnYMEME/Ex9gyzSC6Tadcx0xicgIYIbbJ4/eLya+lhvpaNsAmRAhaKbDjf11xwvlLZc15ie5/mnNcqMhshsS6Bfp8JZicZ2X6utsnoWrL6Ii6kfTASfsima9qvCcrEHLNNUXPRTZvvsYT0SBZaYe2NevdP5pkmlyZrRonkRtLKGuXjCTTbUAqaUqnUf7JklGrmDNI21+vDuHeqpM2G0mHcM0rapyu01+i2zw5y0IdxhOCBcHu9vuz2/PNc7naicH38bWFYOLA8o27hVu4VmvEnq90K1tscvX8iqGwT7BBBvQK875issP3z7PyTNnUZ1dLIvi20JgIiRk2hulcrnAJHk62tF/rVvVqqnuMTbN7S5KYCyoutGSDn2YBeqL0e0SWGeWhW1qRywhQGmo0ybvhvZV+uU3nx3mSLepEEB2cisyPDQu6FXl2sDLwf7DvyFHhpWepz0BlH3p1uXo5y/6d3tDPrS003QjXRfSTWfh39cpJuT+MQdLPjZusDJlGlOspvL5sb3psK7y5ClDh3VoX0Tm/jNLe4R02sNJZ6WMg8pBbKfrPjbvLj1/OO5tvI5syyMOs30aNU81V6y419aM4zw88oAjTDwmlmp/MFybmy/25sd7vdv3NYsv6Dby4/y4HMPlVO5UA+q/n41YWuDfzZXefl128YQM1XSSYAAA==" /></Footer>{/_ END_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Z72/aOBjH/xXklwjItYxuRZpODHorPSXtUda7rqqiB+chuDi2aztQmPa/TwnQ0l1pOxbacLd3xDhfO8/n+eXkC6FgMZR6QuqE6oiUSCQD5KROGpTKWFhSIqCYBxGSOnFRh1hodtxC46RNSsTESkltMfiDIQ/MocY+qRMnSqaVY8H6DANnoJlxqByhhhCd21vK/fQeUiKciSEG8/UeE5lNLMNs5neXyd8m2a4CY+xAyzgcdPA6RrNKcyjkmGMQYrkHZrYzjhEKC7wcgAVnSamsZ1IPjSXPECBHi0ELLLTQIrVMivmqA2uVqTvOALmqpDuoBDhyUDigLaMcjVOr7u++3a+V5yrp6r/7IX+/U7y67sne26IfUu5DXHS79MbrtsfeVfjGa7658aafat50OPWuhr8V/RCKbtetHXfPq8etxs7xAxP8071/9s8+tD4ceUU6Pah6V+djr0t33C4d9qbt6tFHOj46/OvGm57vuq1PVa97UDv6KHeOmx3jNjvSbVQqpESYsBhqSB7TkPrFl+WBubM0KEUu789tRxDikk1mQECxsop7nNGKqVYggqkUMDYVKiMnwoCBc8LB9qWOINX0zXUMGitKhAvTMylu7U7q5MA7bHjNg9Z9d2iMgHHocSR1q2P8l/+S+gWBINBoDCZQqRQW6JyvoZqpVL5EUIQQpq5i0ucLYmP1JHFlMNYHatmI2YkPiTuKxBolIuKoh9qXfR8jxeUE0xVkun4smGWz67FAnWx6IAX6s3uScY2RtOhTjWAxmAnPxxJfuX/lK7CDuyEW3P2OVXAnYMEME/Ex9gyzSC6Tadcx0xicgIYIbbJ4/eLya+lhvpaNsAmRAhaKbDjf11xwvlLZc15ie5/mnNcqMhshsS6Bfp8JZicZ2X6utsnoWrL6Ii6kfTASfsima9qvCcrEHLNNUXPRTZvvsYT0SBZaYe2NevdP5pkmlyZrRonkRtLKGuXjCTTbUAqaUqnUf7JklGrmDNI21+vDuHeqpM2G0mHcM0rapyu01+i2zw5y0IdxhOCBcHu9vuz2/PNc7naicH38bWFYOLA8o27hVu4VmvEnq90K1tscvX8iqGwT7BBBvQK875issP3z7PyTNnUZ1dLIvi20JgIiRk2hulcrnAJHk62tF/rVvVqqnuMTbN7S5KYCyoutGSDn2YBeqL0e0SWGeWhW1qRywhQGmo0ybvhvZV+uU3nx3mSLepEEB2cisyPDQu6FXl2sDLwf7DvyFHhpWepz0BlH3p1uXo5y/6d3tDPrS003QjXRfSTWfh39cpJuT+MQdLPjZusDJlGlOspvL5sb3psK7y5ClDh3VoX0Tm/jNLe4R02sNJZ6WMg8pBbKfrPjbvLj1/OO5tvI5syyMOs30aNU81V6y419aM4zw88oAjTDwmlmp/MFybmy/25sd7vdv3NYsv6Dby4/y4HMPlVO5UA+q/n41YWuDfzZXefl128YQM1XSSYAAA==" /></Footer>{/_ END_CRM_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.accounts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListAccountsRequest`

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

<details><summary><code>client.crm.asyncPassthrough.<a href="/src/api/resources/crm/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId, { ...params }) -> Merge.RemoteResponse</code></summary>
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

**request:** `Merge.crm.RetrieveAsyncPassthroughRequest`

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
await client.crm.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListAuditTrailRequest`

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

## Crm Contacts

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedContactList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Contact` objects.{/_ BEGIN_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1Z72/iOBD9V5A/IiDXsnSvSKcTG3pbekrao9nedasqGpwhcXHs1HagZbX/+ykB+uu6e9uuoanUb8RxXpz3Zt6MzRdCwWAs1TXpEqpS0iCpjJCTLnGlMEANaRDImA8pki7xUMVYc4derXc0IA2i8yyTymD0B0Me6X2FY9IlTlpMa+aCjRlGTqKYdqicooIYnZtHmuPyGdIgnIkJRj1KZS7M90AWE5uwmPngsriti+VmoLVJlMzjZIiXOepvYU6EnHGMYmyOQC9WxjFFYYA3IzDg3EFqqgXUY2PFN0TI0WDUBwN9NEgNk2L51sSYTHcdJ0GetcoVtCKcOigcUIZRjtrptHe33+92mkuU8u2/hzH/bat+cTmSo/f1MKY8hLzuBfTKDwYz/yJ+57vvrvz5p44/n8z9i8kv9TCGuhd4ncPgtH3Y720dPjIhPN75Z/fkQ//DgV+n8722f3E68wO65QV0MpoP2gcf6exg/68rf3667fU/tf1gr3PwUW4dukPtuUPp9Vot0iBMGIwVFJ+pSffsy92BZbD0KEUu788dpBDjHU4WgkDGmlk+4oy2dLsFKcylgJluUZk6KUYMnCMOZixVCiVmqC9zUNjKRLyinklxwzvpkj1/v+e7e/374dCbAuMw4ki6RuX4n/gl3TOyjCbSIJgC4yFEkUKtsRB5zJQ2oSg+r0E4aBMCNWzKzHUIZjW0vJ0lUmAo8nSEqnhWYSoNhlQhGIwW85djhdr3r8IMTHI7xCJyXlxc5kxhdAQKUjQFbPfs/Gvjce4Nm6ILaQYsFnY0uI+50uAie9PgGxqMx0wwc22J/SVadWJ/+VtIg3qtRLqQ6ZyjXSdZgq6Zx6dE6wMiNxSlLpfaNrUFZAWM4QGvL+sGrswyVJaJLjHXzPRdjl+zHe/no+NMGjsK7OcjnUnz/0XQ7wWDk7318Y8ihrhsWp+qBkcou+9VesiZKOPTpko3Lf6tag1imOH4VPUGQrM4MdxSNb2Bq1w5fSjLyybNnwiZXc+aIGSbIf3nEqdSxcNjVEktx6bWvxaQMqpr7Z1O7Rh4uTiL8qzw2zudEv0VSbUJQ1sYGOiJfq6R+bnRCXJuR7YV2ovq85wm92Xz6YhlGCk2tdz43sC+NQRPagh+Jp8KzjkT1lrrFdxmjO+HzWyz+VFa/5iDspwgt7gV27RUYoeyYEcquhbWC9zvRPObL9n1peM8BuUOPbtS6gKVqvQVtWXVqPgBQloEkq06cYu3Hg1eo38VnMykmtSsh/0KOXSH3mb+eHimANUI9hPDYttnjdMSszrHJVU9ZvyMIkI9qR1b2+OtFFgih7/OzHYQ/P0avL9ah1mfZSLte9NcJvKHKvJbh/Xko+Dzr/8CsD2Ty6EiAAA=" /></Footer>{/_ END_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListContactsRequest`

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

Creates a `Contact` object with the given values.{/_ BEGIN_CRM_CONTACT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9WWYW/aMBCG/0rljwiSUcq6RpomCqyAlNCVtFtXVdHFPoLBsYPtQEvV/z6l0I52LdI0qLSPd757fb7nTskdoWAxUfqWeITqlJRJqhgK4pGmkhaoJWUCGQ8gReIRH3WCe80zf69x2iVlYvIsU9oi+8pRMNPROCQecdMirJJLPuTI3JHmxqVqhhoSdJ9SKsOHHFImgssJsgalKpd2k8gysALLyBdmcWyKcjMwxo60ypPRGU5zNG9pTqSaC2QJVmIwy8oEpigtiAoDC+6aUkUvpV7zFW9gKNAia4GFFlqkliu5unVkbWY81x2hyJyHChyGMxelC9pyKtC49drR/uFRvbJSebj9S5SIz9XSeBqr+LAUJVREkJf8kN4EYXcejJODoHlwEyzO68FisgjGkw+lKIGSH/r1fnhZ67ca1f4rAdHg44+ji+PWcS8o0UW7Fowv50FIq35IJ/GiW+ud0Hmv8+0mWFzu+63zWhC2670TVe03z4zfPFN+w3FImXBpMdFQPNMQ7+pu3bEalk4eDzJlnwd3U0hwrSlLIpDxSpbHglPH1BxIYaEkzI1DVeqmyDi4nTw2mbKRmeag0RlnyWPTuZJPHSceCRph96L9fAwaM+ACYoHEszrHP+aWeFdkNUXFuDOm0RgssGIKXETrniHXxkayeGKZCDA2Amr5jNvbCOyja3Ws5hJ1UcpISYxknsaoCw2NqbIYUY1gkS3zVr6npVjZnJHrwpjmXCM7BQ0p2kLFu3qe4qxbERVgzEtVZwYiR3J9X34N1ynPkGk+w+0AOxVgh0qnT7I7ZfZvnHbE51kJ24U1AIFmqDTdMq3fuk4m/4cV2xG69Su2S+4nSoZmsjdAIbbLbqUcfZrb/TD8vgFgO+g0gma79Z4I/57XBj5v9VaNVPF3st2+LtRIUZ0+fnp2uRfvtgsbe3t9/wvsfPLEFwoAAA==" /></Footer>{/_ END_CRM_CONTACT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Contact` object with the given `id`.{/_ BEGIN_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1Z72/iOBD9V5A/IiDXsnSvSKcTG3pbekrao9nedasqGpwhcXHs1HagZbX/+ykB+uu6e9uuoanUb8RxXpz3Zt6MzRdCwWAs1TXpEqpS0iCpjJCTLnGlMEANaRDImA8pki7xUMVYc4derXc0IA2i8yyTymD0B0Me6X2FY9IlTlpMa+aCjRlGTqKYdqicooIYnZtHmuPyGdIgnIkJRj1KZS7M90AWE5uwmPngsriti+VmoLVJlMzjZIiXOepvYU6EnHGMYmyOQC9WxjFFYYA3IzDg3EFqqgXUY2PFN0TI0WDUBwN9NEgNk2L51sSYTHcdJ0GetcoVtCKcOigcUIZRjtrptHe33+92mkuU8u2/hzH/bat+cTmSo/f1MKY8hLzuBfTKDwYz/yJ+57vvrvz5p44/n8z9i8kv9TCGuhd4ncPgtH3Y720dPjIhPN75Z/fkQ//DgV+n8722f3E68wO65QV0MpoP2gcf6exg/68rf3667fU/tf1gr3PwUW4dukPtuUPp9Vot0iBMGIwVFJ+pSffsy92BZbD0KEUu788dpBDjHU4WgkDGmlk+4oy2dLsFKcylgJluUZk6KUYMnCMOZixVCiVmqC9zUNjKRLyinklxwzvpkj1/v+e7e/374dCbAuMw4ki6RuX4n/gl3TOyjCbSIJgC4yFEkUKtsRB5zJQ2oSg+r0E4aBMCNWzKzHUIZjW0vJ0lUmAo8nSEqnhWYSoNhlQhGIwW85djhdr3r8IMTHI7xCJyXlxc5kxhdAQKUjQFbPfs/Gvjce4Nm6ILaQYsFnY0uI+50uAie9PgGxqMx0wwc22J/SVadWJ/+VtIg3qtRLqQ6ZyjXSdZgq6Zx6dE6wMiNxSlLpfaNrUFZAWM4QGvL+sGrswyVJaJLjHXzPRdjl+zHe/no+NMGjsK7OcjnUnz/0XQ7wWDk7318Y8ihrhsWp+qBkcou+9VesiZKOPTpko3Lf6tag1imOH4VPUGQrM4MdxSNb2Bq1w5fSjLyybNnwiZXc+aIGSbIf3nEqdSxcNjVEktx6bWvxaQMqpr7Z1O7Rh4uTiL8qzw2zudEv0VSbUJQ1sYGOiJfq6R+bnRCXJuR7YV2ovq85wm92Xz6YhlGCk2tdz43sC+NQRPagh+Jp8KzjkT1lrrFdxmjO+HzWyz+VFa/5iDspwgt7gV27RUYoeyYEcquhbWC9zvRPObL9n1peM8BuUOPbtS6gKVqvQVtWXVqPgBQloEkq06cYu3Hg1eo38VnMykmtSsh/0KOXSH3mb+eHimANUI9hPDYttnjdMSszrHJVU9ZvyMIkI9qR1b2+OtFFgih7/OzHYQ/P0avL9ah1mfZSLte9NcJvKHKvJbh/Xko+Dzr/8CsD2Ty6EiAAA=" /></Footer>{/_ END_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveContactsRequest`

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

Updates a `Contact` object with the given `id`.{/_ BEGIN_CRM_CONTACT_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE72Sb2/aMBDGv0rllyh/RimbGmmaKHQFpARG02pVVUUX+wgGxw62Ay1Vv/sUYJR2dNKkdu9858eP7353j4SCxUzpBxIQqnPikFwxFCQgbSUtUEscAgWPIEcSkBB1hkftUXjUGvaIQ0xZFEpbZN85Cma6GsckIH5eydxS8jFH5k80Nz5VC9SQob974o7Xb4hDBJczZC1KVSnt30w2Qhc2yldhdW2qcgswxk60KrPJCOclmrc8Z1ItBbIM3RTMpjKBOUoLwmVgwd9zcvXG6lCu6oGhQIusAxY6aJFaruT214m1hQl8f4Ki8NYVeAwXPkoftOVUoPGbjdPjL6dNd+uy/v1bkomv9dp0nqr0Sy3JqEigrIUxvY/i3jKaZidR++Q+Wl01o9VsFU1nn2pJBrUwDpuD+KYx6LTqgwOC5PLzz9Prs85ZP6rR1Xkjmt4so5jWw5jO0lWv0b+gy373x320ujkOO1eNKD5v9i9UfdAembA9UmHL84hDuLSYaajaNCS4fdxPbJelW6aXhbIvxb0cMtyDspkIFNwtylRw6pmGBzmslISl8ajK/RwZB79bpqZQNjHzEjR60yL7DZ0ruSNOAhK14t71+cs1aC2AC0gFksDqEv/YWxLcku0WEYeMuTY2kVUTDhHwfNaYK4vJdm/vqsS85BrZEDTkaFGvnV7IvP0ooQKMIXdPziFeQ14g03yB70NsKMCOlc53tv8ZGlDLF9w+JGAPc6QawSLb3L8X21dO3gJEiW8RvwSBZqw0fWfkz75eIT+OOTCm0RisusYcuEj2M/8ykWKiJCayzNOK8+tp7GLOPmAyd0+/AKOi0yiFBgAA" /></Footer>{/_ END_CRM_CONTACT_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.{/_ BEGIN_CRM_CONTACT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9WWYW/aMBCG/0rljwiSUcq6RpomCqyAlNCVtFtXVdHFPoLBsYPtQEvV/z6l0I52LdI0qLSPd757fb7nTskdoWAxUfqWeITqlJRJqhgK4pGmkhaoJWUCGQ8gReIRH3WCe80zf69x2iVlYvIsU9oi+8pRMNPROCQecdMirJJLPuTI3JHmxqVqhhoSdJ9SKsOHHFImgssJsgalKpd2k8gysALLyBdmcWyKcjMwxo60ypPRGU5zNG9pTqSaC2QJVmIwy8oEpigtiAoDC+6aUkUvpV7zFW9gKNAia4GFFlqkliu5unVkbWY81x2hyJyHChyGMxelC9pyKtC49drR/uFRvbJSebj9S5SIz9XSeBqr+LAUJVREkJf8kN4EYXcejJODoHlwEyzO68FisgjGkw+lKIGSH/r1fnhZ67ca1f4rAdHg44+ji+PWcS8o0UW7Fowv50FIq35IJ/GiW+ud0Hmv8+0mWFzu+63zWhC2670TVe03z4zfPFN+w3FImXBpMdFQPNMQ7+pu3bEalk4eDzJlnwd3U0hwrSlLIpDxSpbHglPH1BxIYaEkzI1DVeqmyDi4nTw2mbKRmeag0RlnyWPTuZJPHSceCRph96L9fAwaM+ACYoHEszrHP+aWeFdkNUXFuDOm0RgssGIKXETrniHXxkayeGKZCDA2Amr5jNvbCOyja3Ws5hJ1UcpISYxknsaoCw2NqbIYUY1gkS3zVr6npVjZnJHrwpjmXCM7BQ0p2kLFu3qe4qxbERVgzEtVZwYiR3J9X34N1ynPkGk+w+0AOxVgh0qnT7I7ZfZvnHbE51kJ24U1AIFmqDTdMq3fuk4m/4cV2xG69Su2S+4nSoZmsjdAIbbLbqUcfZrb/TD8vgFgO+g0gma79Z4I/57XBj5v9VaNVPF3st2+LtRIUZ0+fnp2uRfvtgsbe3t9/wvsfPLEFwoAAA==" /></Footer>{/_ END_CRM_CONTACT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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
    body: {
        reason: "GENERAL_CUSTOMER_REQUEST",
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

**modelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.IgnoreCreateContactsRequest`

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

<details><summary><code>client.crm.contacts.<a href="/src/api/resources/crm/resources/contacts/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMContact` PATCHs.{/_ BEGIN_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1Z72/iOBD9V5A/IiDXsnSvSKcTG3pbekrao9nedasqGpwhcXHs1HagZbX/+ykB+uu6e9uuoanUb8RxXpz3Zt6MzRdCwWAs1TXpEqpS0iCpjJCTLnGlMEANaRDImA8pki7xUMVYc4derXc0IA2i8yyTymD0B0Me6X2FY9IlTlpMa+aCjRlGTqKYdqicooIYnZtHmuPyGdIgnIkJRj1KZS7M90AWE5uwmPngsriti+VmoLVJlMzjZIiXOepvYU6EnHGMYmyOQC9WxjFFYYA3IzDg3EFqqgXUY2PFN0TI0WDUBwN9NEgNk2L51sSYTHcdJ0GetcoVtCKcOigcUIZRjtrptHe33+92mkuU8u2/hzH/bat+cTmSo/f1MKY8hLzuBfTKDwYz/yJ+57vvrvz5p44/n8z9i8kv9TCGuhd4ncPgtH3Y720dPjIhPN75Z/fkQ//DgV+n8722f3E68wO65QV0MpoP2gcf6exg/68rf3667fU/tf1gr3PwUW4dukPtuUPp9Vot0iBMGIwVFJ+pSffsy92BZbD0KEUu788dpBDjHU4WgkDGmlk+4oy2dLsFKcylgJluUZk6KUYMnCMOZixVCiVmqC9zUNjKRLyinklxwzvpkj1/v+e7e/374dCbAuMw4ki6RuX4n/gl3TOyjCbSIJgC4yFEkUKtsRB5zJQ2oSg+r0E4aBMCNWzKzHUIZjW0vJ0lUmAo8nSEqnhWYSoNhlQhGIwW85djhdr3r8IMTHI7xCJyXlxc5kxhdAQKUjQFbPfs/Gvjce4Nm6ILaQYsFnY0uI+50uAie9PgGxqMx0wwc22J/SVadWJ/+VtIg3qtRLqQ6ZyjXSdZgq6Zx6dE6wMiNxSlLpfaNrUFZAWM4QGvL+sGrswyVJaJLjHXzPRdjl+zHe/no+NMGjsK7OcjnUnz/0XQ7wWDk7318Y8ihrhsWp+qBkcou+9VesiZKOPTpko3Lf6tag1imOH4VPUGQrM4MdxSNb2Bq1w5fSjLyybNnwiZXc+aIGSbIf3nEqdSxcNjVEktx6bWvxaQMqpr7Z1O7Rh4uTiL8qzw2zudEv0VSbUJQ1sYGOiJfq6R+bnRCXJuR7YV2ovq85wm92Xz6YhlGCk2tdz43sC+NQRPagh+Jp8KzjkT1lrrFdxmjO+HzWyz+VFa/5iDspwgt7gV27RUYoeyYEcquhbWC9zvRPObL9n1peM8BuUOPbtS6gKVqvQVtWXVqPgBQloEkq06cYu3Hg1eo38VnMykmtSsh/0KOXSH3mb+eHimANUI9hPDYttnjdMSszrHJVU9ZvyMIkI9qR1b2+OtFFgih7/OzHYQ/P0avL9ah1mfZSLte9NcJvKHKvJbh/Xko+Dzr/8CsD2Ty6EiAAA=" /></Footer>{/_ END_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.MetaPatchRetrieveContactsRequest`

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

Returns metadata for `CRMContact` POSTs.{/_ BEGIN_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1Z72/iOBD9V5A/IiDXsnSvSKcTG3pbekrao9nedasqGpwhcXHs1HagZbX/+ykB+uu6e9uuoanUb8RxXpz3Zt6MzRdCwWAs1TXpEqpS0iCpjJCTLnGlMEANaRDImA8pki7xUMVYc4derXc0IA2i8yyTymD0B0Me6X2FY9IlTlpMa+aCjRlGTqKYdqicooIYnZtHmuPyGdIgnIkJRj1KZS7M90AWE5uwmPngsriti+VmoLVJlMzjZIiXOepvYU6EnHGMYmyOQC9WxjFFYYA3IzDg3EFqqgXUY2PFN0TI0WDUBwN9NEgNk2L51sSYTHcdJ0GetcoVtCKcOigcUIZRjtrptHe33+92mkuU8u2/hzH/bat+cTmSo/f1MKY8hLzuBfTKDwYz/yJ+57vvrvz5p44/n8z9i8kv9TCGuhd4ncPgtH3Y720dPjIhPN75Z/fkQ//DgV+n8722f3E68wO65QV0MpoP2gcf6exg/68rf3667fU/tf1gr3PwUW4dukPtuUPp9Vot0iBMGIwVFJ+pSffsy92BZbD0KEUu788dpBDjHU4WgkDGmlk+4oy2dLsFKcylgJluUZk6KUYMnCMOZixVCiVmqC9zUNjKRLyinklxwzvpkj1/v+e7e/374dCbAuMw4ki6RuX4n/gl3TOyjCbSIJgC4yFEkUKtsRB5zJQ2oSg+r0E4aBMCNWzKzHUIZjW0vJ0lUmAo8nSEqnhWYSoNhlQhGIwW85djhdr3r8IMTHI7xCJyXlxc5kxhdAQKUjQFbPfs/Gvjce4Nm6ILaQYsFnY0uI+50uAie9PgGxqMx0wwc22J/SVadWJ/+VtIg3qtRLqQ6ZyjXSdZgq6Zx6dE6wMiNxSlLpfaNrUFZAWM4QGvL+sGrswyVJaJLjHXzPRdjl+zHe/no+NMGjsK7OcjnUnz/0XQ7wWDk7318Y8ihrhsWp+qBkcou+9VesiZKOPTpko3Lf6tag1imOH4VPUGQrM4MdxSNb2Bq1w5fSjLyybNnwiZXc+aIGSbIf3nEqdSxcNjVEktx6bWvxaQMqpr7Z1O7Rh4uTiL8qzw2zudEv0VSbUJQ1sYGOiJfq6R+bnRCXJuR7YV2ovq85wm92Xz6YhlGCk2tdz43sC+NQRPagh+Jp8KzjkT1lrrFdxmjO+HzWyz+VFa/5iDspwgt7gV27RUYoeyYEcquhbWC9zvRPObL9n1peM8BuUOPbtS6gKVqvQVtWXVqPgBQloEkq06cYu3Hg1eo38VnMykmtSsh/0KOXSH3mb+eHimANUI9hPDYttnjdMSszrHJVU9ZvyMIkI9qR1b2+OtFFgih7/OzHYQ/P0avL9ah1mfZSLte9NcJvKHKvJbh/Xko+Dzr/8CsD2Ty6EiAAA=" /></Footer>{/_ END_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1Z72/iOBD9V5A/IiDXsnSvSKcTG3pbekrao9nedasqGpwhcXHs1HagZbX/+ykB+uu6e9uuoanUb8RxXpz3Zt6MzRdCwWAs1TXpEqpS0iCpjJCTLnGlMEANaRDImA8pki7xUMVYc4derXc0IA2i8yyTymD0B0Me6X2FY9IlTlpMa+aCjRlGTqKYdqicooIYnZtHmuPyGdIgnIkJRj1KZS7M90AWE5uwmPngsriti+VmoLVJlMzjZIiXOepvYU6EnHGMYmyOQC9WxjFFYYA3IzDg3EFqqgXUY2PFN0TI0WDUBwN9NEgNk2L51sSYTHcdJ0GetcoVtCKcOigcUIZRjtrptHe33+92mkuU8u2/hzH/bat+cTmSo/f1MKY8hLzuBfTKDwYz/yJ+57vvrvz5p44/n8z9i8kv9TCGuhd4ncPgtH3Y720dPjIhPN75Z/fkQ//DgV+n8722f3E68wO65QV0MpoP2gcf6exg/68rf3667fU/tf1gr3PwUW4dukPtuUPp9Vot0iBMGIwVFJ+pSffsy92BZbD0KEUu788dpBDjHU4WgkDGmlk+4oy2dLsFKcylgJluUZk6KUYMnCMOZixVCiVmqC9zUNjKRLyinklxwzvpkj1/v+e7e/374dCbAuMw4ki6RuX4n/gl3TOyjCbSIJgC4yFEkUKtsRB5zJQ2oSg+r0E4aBMCNWzKzHUIZjW0vJ0lUmAo8nSEqnhWYSoNhlQhGIwW85djhdr3r8IMTHI7xCJyXlxc5kxhdAQKUjQFbPfs/Gvjce4Nm6ILaQYsFnY0uI+50uAie9PgGxqMx0wwc22J/SVadWJ/+VtIg3qtRLqQ6ZyjXSdZgq6Zx6dE6wMiNxSlLpfaNrUFZAWM4QGvL+sGrswyVJaJLjHXzPRdjl+zHe/no+NMGjsK7OcjnUnz/0XQ7wWDk7318Y8ihrhsWp+qBkcou+9VesiZKOPTpko3Lf6tag1imOH4VPUGQrM4MdxSNb2Bq1w5fSjLyybNnwiZXc+aIGSbIf3nEqdSxcNjVEktx6bWvxaQMqpr7Z1O7Rh4uTiL8qzw2zudEv0VSbUJQ1sYGOiJfq6R+bnRCXJuR7YV2ovq85wm92Xz6YhlGCk2tdz43sC+NQRPagh+Jp8KzjkT1lrrFdxmjO+HzWyz+VFa/5iDspwgt7gV27RUYoeyYEcquhbWC9zvRPObL9n1peM8BuUOPbtS6gKVqvQVtWXVqPgBQloEkq06cYu3Hg1eo38VnMykmtSsh/0KOXSH3mb+eHimANUI9hPDYttnjdMSszrHJVU9ZvyMIkI9qR1b2+OtFFgih7/OzHYQ/P0avL9ah1mfZSLte9NcJvKHKvJbh/Xko+Dzr/8CsD2Ty6EiAAA=" /></Footer>{/_ END_CRM_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.contacts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListContactsRequest`

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

Returns a list of `CustomObjectClass` objects.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.customObjectClasses.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListCustomObjectClassesRequest`

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

Returns a `CustomObjectClass` object with the given `id`.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveCustomObjectClassesRequest`

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

Returns a list of `AssociationType` objects.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.associationTypes.customObjectClassesAssociationTypesList("custom_object_class_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

**request:** `Merge.crm.CustomObjectClassesAssociationTypesListAssociationTypesRequest`

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

Creates an `AssociationType` object with the given values.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_CREATE_SUPPORTED_FIELDS _ /}{/_ END_CRM_CUSTOMOBJECTCLASS_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `AssociationType` object with the given `id`.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.CustomObjectClassesAssociationTypesRetrieveAssociationTypesRequest`

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

<details><summary><code>client.crm.associationTypes.<a href="/src/api/resources/crm/resources/associationTypes/client/Client.ts">customObjectClassesAssociationTypesMetaPostRetrieve</a>(customObjectClassId, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMAssociationType` POSTs.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.CustomObjectClassesAssociationTypesMetaPostRetrieveAssociationTypesRequest`

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

Returns a list of `CustomObject` objects.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.customObjects.customObjectClassesCustomObjectsList("custom_object_class_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

**request:** `Merge.crm.CustomObjectClassesCustomObjectsListCustomObjectsRequest`

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

Creates a `CustomObject` object with the given values.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_CREATE_SUPPORTED_FIELDS _ /}{/_ END_CRM_CUSTOMOBJECTCLASS_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `CustomObject` object with the given `id`.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.CustomObjectClassesCustomObjectsRetrieveCustomObjectsRequest`

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

<details><summary><code>client.crm.customObjects.<a href="/src/api/resources/crm/resources/customObjects/client/Client.ts">customObjectClassesCustomObjectsMetaPostRetrieve</a>(customObjectClassId, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CRMCustomObject` POSTs.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.CustomObjectClassesCustomObjectsMetaPostRetrieveCustomObjectsRequest`

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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.customObjects.customObjectClassesCustomObjectsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsRemoteFieldClassesListCustomObjectsRequest`

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

Returns a list of `Association` objects.{/_ BEGIN_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VSXU/bUAz9K8iPVT5WSoeINE0l7WgrJWUlTEMIRc6Nm972Jje9Hy0L4r9PaRmDje1pL3u0fXxsH58HYGiokOobBMBUCQ6UMicBAYRWG1nOshUxEwrUGhzAmsdYEgQQkSroKJxHR4PLCTigbV1LZSj/xEnkeqxoAQH4ZQtzbcUXnHJ/qbj2mdySwoL85xZ3se8BBwSv1pQPGJO2Mn8jOQBdPCB/CduyNuBAjVqbpZK2WM5pY0n/iXNdyZ2gvCA3Q33YTFBJlUHh5mjQf8HkqgPVW7n2hpwEGcqHaHBIhpjhsnqaujSm1oHvL0nU3n4DL6etT5WPynAmSPv93tnx6VnffWLZT/+YFuJDt7PaZDI77aQFEynaTpSw+ziZ7OJVcRKHJ/dxc92Pm3UTr9bvOmmBnSiJ+rPkpjcbDrqzNwDp1fuvZ1/Oh+fTuMOaUS9e3ezihHWjhK2zZtKbXrDddPz5Pm5ujqPhdS9ORv3phezOwrmOwrmMBp4HDvDKUKGwPVNDcPvwMvFklrHNrmppXoMnJRb0QpTDR7Dmbm0zwZmnex6W2MgKd9pjsvRLyjn6Y5vpWppUbywq8lZ18UN0LqtnxSGAUTwexOFo+NoIgy1ygZkgCIyy9JtzIbgFtrd+Kvfeb3+6N2iq2ZJK3PsUMxJpLaxC8RxqXhVWoAIHqvZuBxSV0lDKc7hrg43livJLVFiSIdWOunt03hLsCgXphVSM/o1mlwLNQqryJ69XV/+3bneP3wEsexsFvAQAAA==" /></Footer>{/_ END_CRM_CUSTOMOBJECTCLASS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.associations.customObjectClassesCustomObjectsAssociationsList("custom_object_class_id", "object_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

**request:** `Merge.crm.CustomObjectClassesCustomObjectsAssociationsListAssociationsRequest`

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

<details><summary><code>client.crm.associations.<a href="/src/api/resources/crm/resources/associations/client/Client.ts">customObjectClassesCustomObjectsAssociationsUpdate</a>(sourceClassId, sourceObjectId, targetClassId, targetObjectId, associationTypeId, { ...params }) -> Merge.Association</code></summary>
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
    "source_class_id",
    "source_object_id",
    "target_class_id",
    "target_object_id",
    "association_type_id",
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

**associationTypeId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.CustomObjectClassesCustomObjectsAssociationsUpdateAssociationsRequest`

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

Returns a list of `EngagementType` objects.{/_ BEGIN_CRM_ENGAGEMENTTYPE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WXb2/aSBCHvwral8jgSyhpg1SdqMkVcrKTA7d3aRVZw3pYL6y9m901BKp+98rmT5O7XNUmTikvMevH3se/mbE/EQoWmdRL0iFUp8QhqYxRkA45yxgwTDGz4VIhcQgoHkCKpEN81Axr3tCvdS8HxCEmV0pqi/EfHEVs+honpEPctFjWyDM+4Ri7iebGpXKOGhi6u1Mak/Ic4hDBsxnGXUplntlvQdYLG7Be+a+fxd/GEocoMMYmWuYsGeJNjub/mLNMLgTGDBtjMOs7E+W+QTRisODeITX0GvXQsWIPMQq0GPfAQg8tUstltrlqYq0yHddNUKhmeQfNGOcuZi5oy6lA47Zbp8cvT9uNDaW8+u8RE6+P6tObsRy/rEeMigjyuh/S2yAcLIIpexF4L26D1bt2sJqtgunst3rEoO6HfvsivGpd9LpHFw8siEYn/5y+f9N7cx7U6eqsFUyvFkFIj/yQzsarQev8LV2c9/+6DVZXx37vXSsIz9rnb+XRhTc0vjeUfrfZJA7hmUWmodimIZ2Pn+4e2ISlSykKeX/tIAWGd5ysHwgo3lD5WHDaNK0mpLCSGSxMk8rUTTHm4F4KsBOpUyiZkbnJQWNTZWyrnsts573IcNDvBt5Z734cunPgAsYCScfqHP+TX9L5SIBaPud2Gdl1+HFXDcQhWbGza4cUD55rjC9BQ4oWdXHq9WfnYQ2Wz9GDVAFnWTU67jO3OqbqAHR4oEwusNpYbKB7CkQhIJUWIx7/sA0hTdUuCuSesrAzUTSw+78iBTb5YT1SKdQV+ymZv6qgJ2Spn49HStpqbPXzsVHS7qe1mEf2lkFmOEusWFbjYIfb77x5QiT+RFDVVs8MQR3U+PU51dLIia31lhmknJpa66RdG4FAU62aLb910i7p+9H02NoJcmsSFKIaJ1va4ZXMJVcYaz6veCrvsPtqpc85ecq4TwToiqV95f6q4/pRoqSmzyKq4P78gnt66xnlDLQ39Kt1Ygoq1elBTasQIRUIcVUvvV95h9eJi3tfSD2rVR6NLTnyhv5+P56fsyu/t5xV/fE0L5kHVVIfMIvRzGqjyl5utjI25OjVwh6H4d8HokMmsvqKWslE7q3Xfsfcuf78BQQkh9HxFgAA" /></Footer>{/_ END_CRM_ENGAGEMENTTYPE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagementTypes.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListEngagementTypesRequest`

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

Returns an `EngagementType` object with the given `id`.{/_ BEGIN_CRM_ENGAGEMENTTYPE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WXb2/aSBCHvwral8jgSyhpg1SdqMkVcrKTA7d3aRVZw3pYL6y9m901BKp+98rmT5O7XNUmTikvMevH3se/mbE/EQoWmdRL0iFUp8QhqYxRkA45yxgwTDGz4VIhcQgoHkCKpEN81Axr3tCvdS8HxCEmV0pqi/EfHEVs+honpEPctFjWyDM+4Ri7iebGpXKOGhi6u1Mak/Ic4hDBsxnGXUplntlvQdYLG7Be+a+fxd/GEocoMMYmWuYsGeJNjub/mLNMLgTGDBtjMOs7E+W+QTRisODeITX0GvXQsWIPMQq0GPfAQg8tUstltrlqYq0yHddNUKhmeQfNGOcuZi5oy6lA47Zbp8cvT9uNDaW8+u8RE6+P6tObsRy/rEeMigjyuh/S2yAcLIIpexF4L26D1bt2sJqtgunst3rEoO6HfvsivGpd9LpHFw8siEYn/5y+f9N7cx7U6eqsFUyvFkFIj/yQzsarQev8LV2c9/+6DVZXx37vXSsIz9rnb+XRhTc0vjeUfrfZJA7hmUWmodimIZ2Pn+4e2ISlSykKeX/tIAWGd5ysHwgo3lD5WHDaNK0mpLCSGSxMk8rUTTHm4F4KsBOpUyiZkbnJQWNTZWyrnsts573IcNDvBt5Z734cunPgAsYCScfqHP+TX9L5SIBaPud2Gdl1+HFXDcQhWbGza4cUD55rjC9BQ4oWdXHq9WfnYQ2Wz9GDVAFnWTU67jO3OqbqAHR4oEwusNpYbKB7CkQhIJUWIx7/sA0hTdUuCuSesrAzUTSw+78iBTb5YT1SKdQV+ymZv6qgJ2Spn49HStpqbPXzsVHS7qe1mEf2lkFmOEusWFbjYIfb77x5QiT+RFDVVs8MQR3U+PU51dLIia31lhmknJpa66RdG4FAU62aLb910i7p+9H02NoJcmsSFKIaJ1va4ZXMJVcYaz6veCrvsPtqpc85ecq4TwToiqV95f6q4/pRoqSmzyKq4P78gnt66xnlDLQ39Kt1Ygoq1elBTasQIRUIcVUvvV95h9eJi3tfSD2rVR6NLTnyhv5+P56fsyu/t5xV/fE0L5kHVVIfMIvRzGqjyl5utjI25OjVwh6H4d8HokMmsvqKWslE7q3Xfsfcuf78BQQkh9HxFgAA" /></Footer>{/_ END_CRM_ENGAGEMENTTYPE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveEngagementTypesRequest`

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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_ENGAGEMENTTYPE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WXb2/aSBCHvwral8jgSyhpg1SdqMkVcrKTA7d3aRVZw3pYL6y9m901BKp+98rmT5O7XNUmTikvMevH3se/mbE/EQoWmdRL0iFUp8QhqYxRkA45yxgwTDGz4VIhcQgoHkCKpEN81Axr3tCvdS8HxCEmV0pqi/EfHEVs+honpEPctFjWyDM+4Ri7iebGpXKOGhi6u1Mak/Ic4hDBsxnGXUplntlvQdYLG7Be+a+fxd/GEocoMMYmWuYsGeJNjub/mLNMLgTGDBtjMOs7E+W+QTRisODeITX0GvXQsWIPMQq0GPfAQg8tUstltrlqYq0yHddNUKhmeQfNGOcuZi5oy6lA47Zbp8cvT9uNDaW8+u8RE6+P6tObsRy/rEeMigjyuh/S2yAcLIIpexF4L26D1bt2sJqtgunst3rEoO6HfvsivGpd9LpHFw8siEYn/5y+f9N7cx7U6eqsFUyvFkFIj/yQzsarQev8LV2c9/+6DVZXx37vXSsIz9rnb+XRhTc0vjeUfrfZJA7hmUWmodimIZ2Pn+4e2ISlSykKeX/tIAWGd5ysHwgo3lD5WHDaNK0mpLCSGSxMk8rUTTHm4F4KsBOpUyiZkbnJQWNTZWyrnsts573IcNDvBt5Z734cunPgAsYCScfqHP+TX9L5SIBaPud2Gdl1+HFXDcQhWbGza4cUD55rjC9BQ4oWdXHq9WfnYQ2Wz9GDVAFnWTU67jO3OqbqAHR4oEwusNpYbKB7CkQhIJUWIx7/sA0hTdUuCuSesrAzUTSw+78iBTb5YT1SKdQV+ymZv6qgJ2Spn49HStpqbPXzsVHS7qe1mEf2lkFmOEusWFbjYIfb77x5QiT+RFDVVs8MQR3U+PU51dLIia31lhmknJpa66RdG4FAU62aLb910i7p+9H02NoJcmsSFKIaJ1va4ZXMJVcYaz6veCrvsPtqpc85ecq4TwToiqV95f6q4/pRoqSmzyKq4P78gnt66xnlDLQ39Kt1Ygoq1elBTasQIRUIcVUvvV95h9eJi3tfSD2rVR6NLTnyhv5+P56fsyu/t5xV/fE0L5kHVVIfMIvRzGqjyl5utjI25OjVwh6H4d8HokMmsvqKWslE7q3Xfsfcuf78BQQkh9HxFgAA" /></Footer>{/_ END_CRM_ENGAGEMENTTYPE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagementTypes.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListEngagementTypesRequest`

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

Returns a list of `Engagement` objects.{/_ BEGIN_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Y72/iNhjH/xXklwjIWo7eFWmaOGAHnZJ2kOvWnaroifOQGJzYtR1oOd3/PiX8aLv10O5k6FXrO2Kcr+2Pv36ex/lMKBiMhbojbUJVSmokFRFy0ib9LIYYU8wMqRGQzIMUSZu4qGKsdEdupXMxJDWicymFMhj9ypBHeqBwQtrESYtu9TxjE4aRkyimHSrmqCBGZ/tKfVK+Q2qEs2yGUYdSkWdml8iqYx1WPf/xWPyti+lK0NokSuRxMsKbHPXXNGeZWHCMYqyHoFcz4+WagdcjMOA8UKqrldRTbcUaIuRoMOqBgR4apIaJbD1qYozUbcdJkMtGOYNGhHMHMweUYZSjdlrN0+O3p636WqUc/Zcg5j8fVac3oQjfVoOY8gDyquvTW88fLrxp/Mbrvrn1lh9b3nK29Kazn6pBDFXXd1vn/lXzvNc5On+iQzA++fP08n3v/ZlXpct+05teLTyfHrk+nYXLYfPsA12cDX6/9ZZXx27vY9Pz+62zD+LovDvSbnck3E6jQWqEZQZjBcUyNWl/+vywYW2WDqXIxeO+wxRifMBktSEgWV3mIWe0oZsNSGEpMljoBhWpk2LEwLngYCZCpVBqBvomB4UNmcUb9ExkW+6Ff71Bx+v2e4/t0JkD4xByJG2jcvyXf0n7E1m7idQIFZlZHQDMosCwFMufm4MRmDtZtIhFhorUiMJUGAyKrXv8FEgwyX0Ti4qDY0CZjabOwylSQ66LPjc5UxhdgIIUDapiTtdfak/zNWyOXUglsDizw/mx5obzVB6Ksx2438ezC1LnHO0adi16QKtaQPit4LjQtrEVkgfzXcTUWvnZPSikLAezybLU3DPM58U2yMOxFMYOt0EeainM4YIf0LKE+JofLeaebcllOxcNM83ixPA7O1uwlXvN9AW+3xCk3ZgwQ5D7ZPvA1juRHhyly6gSWkxMpXeXQcqorjRPWpUxcNR2EW/0myetUv1wVj5cPLG2LV5udIKc29mCjdrerP0jB4sLJjFSbG65ItvK7kiIXscfXvat2/dlpMDykE84KMvg73X3XsL9iHZeLV8ouheshe6OKLEnQ7+8+m6cx6C6I9fuHuhClar0NTXuQO8jpBwhsnUtvNf7X6bHYvkLoWYV627eKAfdkbvPy6P972UWsF4aFtv+cDEvNV+vgAXDvzCLUM8qY2tF8obyWjl4tzDHvv/H8wdh28y/lbRIhP3gsBSJ+E+Z7qWVHN/j8OsvfwPk5FuQexwAAA==" /></Footer>{/_ END_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagements.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListEngagementsRequest`

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

Creates an `Engagement` object with the given values.{/_ BEGIN_CRM_ENGAGEMENT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE72WbU/bMBSF/wryxypNVkrHqDRNpe1okRIYBDaGUHRj36ZunTi1nRaK+O9T0hdeRmFMgW+2c31sPz45yS2hYDCS6oY0CVUxsUgsGQrSJN0kgghjTAyxCKTcgxhJk7ioItxqn7hbreM+sYjO0lQqg+w7R8F0T+GANIkT52XVLOEDjswZKq4dKqeoIEJnPaU6KOYQiwiejJG1KJVZYl4SWRRWYVH5pJs/1vl2U9DaDJXMouEJTjLUmzTHiZwJZBFWQ9CLnYnizCCqDAw4D5SqaiH13Fh+BoYCDbIOGOigQWq4TJarDo1JddNxhihSu9iBzXDqYOKAMpwK1E6jvre9u9eoLlWK1b8Fkfhaq4wmoQx3K0FERQBZxfXptef3Z94o2vHaO9fe/KzhzcdzbzT+VAkiqLi+2zjyL+pHnVbt6JmC4PTzr73z/c7+oVeh827dG13MPJ/WXJ+Ow3m/fnhAZ4e9H9fe/GLb7ZzVPb/bODyQtaP2iXbbJ9Jt2TaxCE8MRgryY2rSvLx9OLA0S1umKarHtf0YInzAZHEhkPJqmoWCU1vXbYhhLhOYaZvK2ImRcXCOBZiBVPFC0x6l0Yo5l8kaeG5cr9fy2t3OYx+0psAFhAJJ06gM/zIuaV4SXFs+MDcpEovIWVLsX2EsDQacFY4PR0gNucqHJxlXyI5BQYwGVS5zdWc9x6KXhaepNOXA6GWhTqUJ9CQDhe8CY/lOEYtQmRighcfz5iIRGFfLRSyCCQsMj7Fo/hNCA8qsprzG8xnNpdYiPuyHvYAK0JpsuINjniJTfIrlWnIt+8JFeC2/f94t6RpepbwO1rcY93WsT8lPQWS4CfYpCNQDqWjJtO917TT5ENz3ri8nIf7H0W9Cf254VHbuTgvNVeJsJl9W4qyAv2e0bMD3GxOGerx1ikKUC3GpHHyZmW3f//lhGB+n9Rs5vpWeHMr8B7FccnM5lFTFr/uvnDf/oz9yV3dXd38Ai15G640LAAA=" /></Footer>{/_ END_CRM_ENGAGEMENT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Engagement` object with the given `id`.{/_ BEGIN_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Y72/iNhjH/xXklwjIWo7eFWmaOGAHnZJ2kOvWnaroifOQGJzYtR1oOd3/PiX8aLv10O5k6FXrO2Kcr+2Pv36ex/lMKBiMhbojbUJVSmokFRFy0ib9LIYYU8wMqRGQzIMUSZu4qGKsdEdupXMxJDWicymFMhj9ypBHeqBwQtrESYtu9TxjE4aRkyimHSrmqCBGZ/tKfVK+Q2qEs2yGUYdSkWdml8iqYx1WPf/xWPyti+lK0NokSuRxMsKbHPXXNGeZWHCMYqyHoFcz4+WagdcjMOA8UKqrldRTbcUaIuRoMOqBgR4apIaJbD1qYozUbcdJkMtGOYNGhHMHMweUYZSjdlrN0+O3p636WqUc/Zcg5j8fVac3oQjfVoOY8gDyquvTW88fLrxp/Mbrvrn1lh9b3nK29Kazn6pBDFXXd1vn/lXzvNc5On+iQzA++fP08n3v/ZlXpct+05teLTyfHrk+nYXLYfPsA12cDX6/9ZZXx27vY9Pz+62zD+LovDvSbnck3E6jQWqEZQZjBcUyNWl/+vywYW2WDqXIxeO+wxRifMBktSEgWV3mIWe0oZsNSGEpMljoBhWpk2LEwLngYCZCpVBqBvomB4UNmcUb9ExkW+6Ff71Bx+v2e4/t0JkD4xByJG2jcvyXf0n7E1m7idQIFZlZHQDMosCwFMufm4MRmDtZtIhFhorUiMJUGAyKrXv8FEgwyX0Ti4qDY0CZjabOwylSQ66LPjc5UxhdgIIUDapiTtdfak/zNWyOXUglsDizw/mx5obzVB6Ksx2438ezC1LnHO0adi16QKtaQPit4LjQtrEVkgfzXcTUWvnZPSikLAezybLU3DPM58U2yMOxFMYOt0EeainM4YIf0LKE+JofLeaebcllOxcNM83ixPA7O1uwlXvN9AW+3xCk3ZgwQ5D7ZPvA1juRHhyly6gSWkxMpXeXQcqorjRPWpUxcNR2EW/0myetUv1wVj5cPLG2LV5udIKc29mCjdrerP0jB4sLJjFSbG65ItvK7kiIXscfXvat2/dlpMDykE84KMvg73X3XsL9iHZeLV8ouheshe6OKLEnQ7+8+m6cx6C6I9fuHuhClar0NTXuQO8jpBwhsnUtvNf7X6bHYvkLoWYV627eKAfdkbvPy6P972UWsF4aFtv+cDEvNV+vgAXDvzCLUM8qY2tF8obyWjl4tzDHvv/H8wdh28y/lbRIhP3gsBSJ+E+Z7qWVHN/j8OsvfwPk5FuQexwAAA==" /></Footer>{/_ END_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveEngagementsRequest`

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

Updates an `Engagement` object with the given `id`.{/_ BEGIN_CRM_ENGAGEMENT_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE62Tb0/bMBDGvwq6l1X+rJQOEWmaStvRVorLSkBDCEUX55q6deLUdigE8d2ntB2DDbY3vMzl8XN3Pz9+BI6WMqUfIACuc3AgVylJCGBYZJhRToUFB7AUDHOCAELSGR30Z+FB73wMDpiqLJW2lH4TJFMz0jSHAPy8kblVIeaCUn+hhfG5uiONGfnPR9z59gw4IEWxorTHuaoK+y+TndDFnfKPz+a3acYt0Ri70KrKFjNaV2Te81wVaiMpzchN0Owmk9udUbopWvRfOLl6Z/VWrdkhJUmW0gFaHJAlboUq9l0X1pYm8P0FydLbTuCldOdT4aO2gksyfrdzcnh80nX3LtvuX+NMfmm3lutEJcetOOMyxqoVRvyeReMNW2ZHrH90z+rLLqtXNVuuPrXiDFthFHan0XVnOui1p28I4ovPP06uTgenE9bi9bDDltcbFvF2GPFVUo87kzO+mYy+37P6+jAcXHZYNOxOzlR72p+ZsD9TYc/zwAFRWMo0NmsaCG4eXxb2YRlVyUWp7GvxOMeMXkDZ3QiWwi2rRArumY6HOdaqwI3xuMr9nFKB/qhKTKlsbNYVavKWZfYLulDFM/EmuWzUY/3h4HUQencoJCaSILC6or+SC8EN7HMEDnBV2F30U6H3zg7Q85uI7UNJ4IDaFKTBAU25shSLdPskkiVxC7dNeV0JTek5aszJkm7a3D45b8G6QElmrjSnj+F1LtHOlc5/+3pl8R4z1ovGV8OPIfY+pf+TuX36CdDOLk6TBAAA" /></Footer>{/_ END_CRM_ENGAGEMENT_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

<details><summary><code>client.crm.engagements.<a href="/src/api/resources/crm/resources/engagements/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Engagement` PATCHs.{/_ BEGIN_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Y72/iNhjH/xXklwjIWo7eFWmaOGAHnZJ2kOvWnaroifOQGJzYtR1oOd3/PiX8aLv10O5k6FXrO2Kcr+2Pv36ex/lMKBiMhbojbUJVSmokFRFy0ib9LIYYU8wMqRGQzIMUSZu4qGKsdEdupXMxJDWicymFMhj9ypBHeqBwQtrESYtu9TxjE4aRkyimHSrmqCBGZ/tKfVK+Q2qEs2yGUYdSkWdml8iqYx1WPf/xWPyti+lK0NokSuRxMsKbHPXXNGeZWHCMYqyHoFcz4+WagdcjMOA8UKqrldRTbcUaIuRoMOqBgR4apIaJbD1qYozUbcdJkMtGOYNGhHMHMweUYZSjdlrN0+O3p636WqUc/Zcg5j8fVac3oQjfVoOY8gDyquvTW88fLrxp/Mbrvrn1lh9b3nK29Kazn6pBDFXXd1vn/lXzvNc5On+iQzA++fP08n3v/ZlXpct+05teLTyfHrk+nYXLYfPsA12cDX6/9ZZXx27vY9Pz+62zD+LovDvSbnck3E6jQWqEZQZjBcUyNWl/+vywYW2WDqXIxeO+wxRifMBktSEgWV3mIWe0oZsNSGEpMljoBhWpk2LEwLngYCZCpVBqBvomB4UNmcUb9ExkW+6Ff71Bx+v2e4/t0JkD4xByJG2jcvyXf0n7E1m7idQIFZlZHQDMosCwFMufm4MRmDtZtIhFhorUiMJUGAyKrXv8FEgwyX0Ti4qDY0CZjabOwylSQ66LPjc5UxhdgIIUDapiTtdfak/zNWyOXUglsDizw/mx5obzVB6Ksx2438ezC1LnHO0adi16QKtaQPit4LjQtrEVkgfzXcTUWvnZPSikLAezybLU3DPM58U2yMOxFMYOt0EeainM4YIf0LKE+JofLeaebcllOxcNM83ixPA7O1uwlXvN9AW+3xCk3ZgwQ5D7ZPvA1juRHhyly6gSWkxMpXeXQcqorjRPWpUxcNR2EW/0myetUv1wVj5cPLG2LV5udIKc29mCjdrerP0jB4sLJjFSbG65ItvK7kiIXscfXvat2/dlpMDykE84KMvg73X3XsL9iHZeLV8ouheshe6OKLEnQ7+8+m6cx6C6I9fuHuhClar0NTXuQO8jpBwhsnUtvNf7X6bHYvkLoWYV627eKAfdkbvPy6P972UWsF4aFtv+cDEvNV+vgAXDvzCLUM8qY2tF8obyWjl4tzDHvv/H8wdh28y/lbRIhP3gsBSJ+E+Z7qWVHN/j8OsvfwPk5FuQexwAAA==" /></Footer>{/_ END_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.MetaPatchRetrieveEngagementsRequest`

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

Returns metadata for `Engagement` POSTs.{/_ BEGIN_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Y72/iNhjH/xXklwjIWo7eFWmaOGAHnZJ2kOvWnaroifOQGJzYtR1oOd3/PiX8aLv10O5k6FXrO2Kcr+2Pv36ex/lMKBiMhbojbUJVSmokFRFy0ib9LIYYU8wMqRGQzIMUSZu4qGKsdEdupXMxJDWicymFMhj9ypBHeqBwQtrESYtu9TxjE4aRkyimHSrmqCBGZ/tKfVK+Q2qEs2yGUYdSkWdml8iqYx1WPf/xWPyti+lK0NokSuRxMsKbHPXXNGeZWHCMYqyHoFcz4+WagdcjMOA8UKqrldRTbcUaIuRoMOqBgR4apIaJbD1qYozUbcdJkMtGOYNGhHMHMweUYZSjdlrN0+O3p636WqUc/Zcg5j8fVac3oQjfVoOY8gDyquvTW88fLrxp/Mbrvrn1lh9b3nK29Kazn6pBDFXXd1vn/lXzvNc5On+iQzA++fP08n3v/ZlXpct+05teLTyfHrk+nYXLYfPsA12cDX6/9ZZXx27vY9Pz+62zD+LovDvSbnck3E6jQWqEZQZjBcUyNWl/+vywYW2WDqXIxeO+wxRifMBktSEgWV3mIWe0oZsNSGEpMljoBhWpk2LEwLngYCZCpVBqBvomB4UNmcUb9ExkW+6Ff71Bx+v2e4/t0JkD4xByJG2jcvyXf0n7E1m7idQIFZlZHQDMosCwFMufm4MRmDtZtIhFhorUiMJUGAyKrXv8FEgwyX0Ti4qDY0CZjabOwylSQ66LPjc5UxhdgIIUDapiTtdfak/zNWyOXUglsDizw/mx5obzVB6Ksx2438ezC1LnHO0adi16QKtaQPit4LjQtrEVkgfzXcTUWvnZPSikLAezybLU3DPM58U2yMOxFMYOt0EeainM4YIf0LKE+JofLeaebcllOxcNM83ixPA7O1uwlXvN9AW+3xCk3ZgwQ5D7ZPvA1juRHhyly6gSWkxMpXeXQcqorjRPWpUxcNR2EW/0myetUv1wVj5cPLG2LV5udIKc29mCjdrerP0jB4sLJjFSbG65ItvK7kiIXscfXvat2/dlpMDykE84KMvg73X3XsL9iHZeLV8ouheshe6OKLEnQ7+8+m6cx6C6I9fuHuhClar0NTXuQO8jpBwhsnUtvNf7X6bHYvkLoWYV627eKAfdkbvPy6P972UWsF4aFtv+cDEvNV+vgAXDvzCLUM8qY2tF8obyWjl4tzDHvv/H8wdh28y/lbRIhP3gsBSJ+E+Z7qWVHN/j8OsvfwPk5FuQexwAAA==" /></Footer>{/_ END_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2Y72/iNhjH/xXklwjIWo7eFWmaOGAHnZJ2kOvWnaroifOQGJzYtR1oOd3/PiX8aLv10O5k6FXrO2Kcr+2Pv36ex/lMKBiMhbojbUJVSmokFRFy0ib9LIYYU8wMqRGQzIMUSZu4qGKsdEdupXMxJDWicymFMhj9ypBHeqBwQtrESYtu9TxjE4aRkyimHSrmqCBGZ/tKfVK+Q2qEs2yGUYdSkWdml8iqYx1WPf/xWPyti+lK0NokSuRxMsKbHPXXNGeZWHCMYqyHoFcz4+WagdcjMOA8UKqrldRTbcUaIuRoMOqBgR4apIaJbD1qYozUbcdJkMtGOYNGhHMHMweUYZSjdlrN0+O3p636WqUc/Zcg5j8fVac3oQjfVoOY8gDyquvTW88fLrxp/Mbrvrn1lh9b3nK29Kazn6pBDFXXd1vn/lXzvNc5On+iQzA++fP08n3v/ZlXpct+05teLTyfHrk+nYXLYfPsA12cDX6/9ZZXx27vY9Pz+62zD+LovDvSbnck3E6jQWqEZQZjBcUyNWl/+vywYW2WDqXIxeO+wxRifMBktSEgWV3mIWe0oZsNSGEpMljoBhWpk2LEwLngYCZCpVBqBvomB4UNmcUb9ExkW+6Ff71Bx+v2e4/t0JkD4xByJG2jcvyXf0n7E1m7idQIFZlZHQDMosCwFMufm4MRmDtZtIhFhorUiMJUGAyKrXv8FEgwyX0Ti4qDY0CZjabOwylSQ66LPjc5UxhdgIIUDapiTtdfak/zNWyOXUglsDizw/mx5obzVB6Ksx2438ezC1LnHO0adi16QKtaQPit4LjQtrEVkgfzXcTUWvnZPSikLAezybLU3DPM58U2yMOxFMYOt0EeainM4YIf0LKE+JofLeaebcllOxcNM83ixPA7O1uwlXvN9AW+3xCk3ZgwQ5D7ZPvA1juRHhyly6gSWkxMpXeXQcqorjRPWpUxcNR2EW/0myetUv1wVj5cPLG2LV5udIKc29mCjdrerP0jB4sLJjFSbG65ItvK7kiIXscfXvat2/dlpMDykE84KMvg73X3XsL9iHZeLV8ouheshe6OKLEnQ7+8+m6cx6C6I9fuHuhClar0NTXuQO8jpBwhsnUtvNf7X6bHYvkLoWYV627eKAfdkbvPy6P972UWsF4aFtv+cDEvNV+vgAXDvzCLUM8qY2tF8obyWjl4tzDHvv/H8wdh28y/lbRIhP3gsBSJ+E+Z7qWVHN/j8OsvfwPk5FuQexwAAA==" /></Footer>{/_ END_CRM_ENGAGEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.engagements.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListEngagementsRequest`

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

**request:** `Merge.crm.FieldMappingsRetrieveFieldMappingRequest`

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

<details><summary><code>client.crm.fieldMapping.<a href="/src/api/resources/crm/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**request:** `Merge.crm.FieldMappingsDestroyFieldMappingRequest`

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

**request:** `Merge.crm.RemoteFieldsRetrieveFieldMappingRequest`

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
await client.crm.issues.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListIssuesRequest`

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

<details><summary><code>client.crm.issues.<a href="/src/api/resources/crm/resources/issues/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Issue</code></summary>
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

**request:** `Merge.crm.RetrieveIssuesRequest`

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

Returns a list of `Lead` objects.{/_ BEGIN_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abXPaOBD+K4w+Zni5hNJembm5oZBrkjs7OUJzl+t0PIu0GAXZciQZGjr97ze2IZgE0pLYwWTyCXtXPF5Jz6521/5GKBh0pbohTUKVR8rEkwwFaZK/EBgpEwi4DR6SJrFQuVhqd61S6+yYlIkOg0Aqg+wPjoLpI4UD0iQ1LxpWCX0+4MhqQ8V1jcoxKnCxdvuXyiD+DykTwf0RshalMvTNQyDJwAokI+/cRmptSJkEoLUZKhm6wy5eh6jXYY58ORHIXKz0QSeWCfTQNyAqDAzUUkgVlUCtkkVzYCjQIOuAgQ4apIZLf/bUoTGBbtZqQxRBNbagynBcQ78GynAqUNca9fcH7943KjOU+Om/O674bX/v6rov++/2HJcKB8I9q0e/2r3jiX3lvrHbb77a008Nezqa2lejX/YcF/asntU47V3WTzut/dMVA5zzt/++v/jQ+XBi79HpYd2+upzYPbpv9eioPz2un3ykk5Ojv7/a08sDq/OpbvcOGycf5f5pu6utdldarWqVlAn3DboKomlq0vz8LS2YkaVFKQq5PPbYAxdTa5JsCAS8EoR9wWlV16vgwVT6MNFVKr2ah4xD7UyAGUjlQYzp6OsQFFYD350vPZf+7bqTJjm0j1p2+7CzTIfWGLiAvkDSNCrEe/wlzc+k3bVajCnUujonFimnpZSbmzuSaJS6IwykNiAcKhkuKxR60qDD2bJYGzB4V6QQjbO/UnqQSA894GJhiG+Azg1eUmF040Byl+jPhtJHO/T6qO5MNa1Zxkxrguja8eMbUiZy4se/s/lRhWCQOWAWsojWy3dOAGa4EMWLMrsOA7YAMNwIJF8i5XXIFbIzUOChQRVt2pfv5dUENHyMbfAC4K6fDRGXMedEvApyIWJGm/uTW7jp6g4G3E98IYt1naHl7NqPW9ENV6YtpMZs414MmRfNHo53s0VwzE2AuUTCWVRYrZgHiK1GyvX61KosDbo3tXXa1PwyjscPaFNWp4fcM3qNMrF5U6eQQRDblaVXxJjbcYtV5E/vTLFcIm/yv2zuHoX980CabMh7FPZ1IM2PUwe71Tu+OCwadQUC0z/J5l2I1Kn5PJXEa6A25/bMZIzAqPQC8G/iK3+MKk6JE+OWZDOzSJksTTvGGHCljeNHZC4TAalrBOZoGSqKqQw+bZLOK6OPuBHqx6b2x77m7tCIjLLPW7itVpb5ZVp5ng/PH/o3d4mFjCULsaFHFKem/RMhyDaJGiEEO0T7p+dYO99p+aGLbMgpi1MltRyYUufGB49TXaq/bZTOQcSnR4Zcm+PX3zZi9JfIu00SpML0Al9Top1PiezQ6CEKkY3HztGK02PfxcBfyNp5Q16d8QCZ4uOMO5q3sDtXAW8ly96YSdtNuJ8xv759jZxveI34KrifWQtzDpdnCrT5vhWv4InzxIEAlXH8WeC+9o8fnYfuUE30xI7xuhGcPY7QMgmAmRM6wn0gluR2ohagmHq24/fl1Uf3+mOFKpie6YQ/D11Q7a6VrVvqCJUq7yW2Onat0lrnxatezs/Pwm22t5/shcVJ43oIXmRjVvnzAu8ldSge/fr/OavM1w9dfsj0iVSjUuZHyRzZaXetnL88LGT7pOjvZYoXdS8Md7P+6GocYxbyO808NnVxGu/s2fsf+gz1qHSe2duBORdmyM6vE3PQ6/3zmtzudp350grHjN1IDmX2h/pUDuVPlYevrZstVIav/Z2d7O98+f4/qEEYn9Y4AAA=" /></Footer>{/_ END_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.leads.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListLeadsRequest`

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

Creates a `Lead` object with the given values.{/_ BEGIN_CRM_LEAD_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE+2VbU/bMBDHvwryyypNBqVDRJqm0jJotaRdCWgMoehqX1O3jh1sp4UgvvuUBmgZZdMY4tXe2Xfnv+/hF+eWULCYKH1DfEJ1ShySKoaC+OQrAiMOgYyHkCLxSYA6wa32MNhqDbrEISbPMqUtsi8cBTPHGsfEJ15ahtVzycccmTfR3HhUzVFDgt7jkfp4eYY4RHA5Q9aiVOXS/k6kCqxDFfnLtnQbSxySgTF2olWeTIZ4laN5SXMm1UIgS7A+AlNlJjBFaUHUGVjw1pTqupLaZCtrYCjQIuuAhQ5apJYreX/rxNrM+J43QZG5ywxchnMPpQfacirQeM3G/s7efrN+r7K8/XOciE/btenVSI32anFCRQx5LYjodRh1F+E02Q3bu9dhcdoMi1kRTmcfanECtSAKmv3ovNHvtLb7GwLik4/f988OOge9sEaLw0Y4PV+EEd0OIjobFd1G74guesffrsPifCfonDbC6LDZO1Lb/fbQBO2hClquSxzCpcVEQ1mmIf7F7brhHpYBz5BpPsen4d0UElxrSzUTyHg9y0eCU9c0XEihUBIWxqUq9VJkHLyBADtWOn2UdadZ8tB5ruRj24lPwlbUPTt8ykJrDlzASCDxrc7xGbzEvyDAmEZjsJwoVWkG8oY4BFPgIl73jbk2NpZlnQ4RsLZGYLFRuablTi0k6jKLiZIYyzwdoS6Pa0yVxZhqBIssBruycbZa5xlb+S23Asll6bzKuUY2AA0p2lLRv1hvcJyVHuMqnYDkRWVb6m4IylCbB/f9tdV36a7vYirAmGchcxA5rnK7czZhcAICzVhVHXlDDla6bibfBwSq5Bz1ciTVm/PERpW0QJ/aygG+M0GPz+o/ErUqez29VzLyAhs/1ESVv5O3JaNQE0V1GpurHPR/Ol5Hh7Fgc/NnTP4Kjsu7y7ufJ2RcMXAIAAA=" /></Footer>{/_ END_CRM_LEAD_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Lead` object with the given `id`.{/_ BEGIN_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abXPaOBD+K4w+Zni5hNJembm5oZBrkjs7OUJzl+t0PIu0GAXZciQZGjr97ze2IZgE0pLYwWTyCXtXPF5Jz6521/5GKBh0pbohTUKVR8rEkwwFaZK/EBgpEwi4DR6SJrFQuVhqd61S6+yYlIkOg0Aqg+wPjoLpI4UD0iQ1LxpWCX0+4MhqQ8V1jcoxKnCxdvuXyiD+DykTwf0RshalMvTNQyDJwAokI+/cRmptSJkEoLUZKhm6wy5eh6jXYY58ORHIXKz0QSeWCfTQNyAqDAzUUkgVlUCtkkVzYCjQIOuAgQ4apIZLf/bUoTGBbtZqQxRBNbagynBcQ78GynAqUNca9fcH7943KjOU+Om/O674bX/v6rov++/2HJcKB8I9q0e/2r3jiX3lvrHbb77a008Nezqa2lejX/YcF/asntU47V3WTzut/dMVA5zzt/++v/jQ+XBi79HpYd2+upzYPbpv9eioPz2un3ykk5Ojv7/a08sDq/OpbvcOGycf5f5pu6utdldarWqVlAn3DboKomlq0vz8LS2YkaVFKQq5PPbYAxdTa5JsCAS8EoR9wWlV16vgwVT6MNFVKr2ah4xD7UyAGUjlQYzp6OsQFFYD350vPZf+7bqTJjm0j1p2+7CzTIfWGLiAvkDSNCrEe/wlzc+k3bVajCnUujonFimnpZSbmzuSaJS6IwykNiAcKhkuKxR60qDD2bJYGzB4V6QQjbO/UnqQSA894GJhiG+Azg1eUmF040Byl+jPhtJHO/T6qO5MNa1Zxkxrguja8eMbUiZy4se/s/lRhWCQOWAWsojWy3dOAGa4EMWLMrsOA7YAMNwIJF8i5XXIFbIzUOChQRVt2pfv5dUENHyMbfAC4K6fDRGXMedEvApyIWJGm/uTW7jp6g4G3E98IYt1naHl7NqPW9ENV6YtpMZs414MmRfNHo53s0VwzE2AuUTCWVRYrZgHiK1GyvX61KosDbo3tXXa1PwyjscPaFNWp4fcM3qNMrF5U6eQQRDblaVXxJjbcYtV5E/vTLFcIm/yv2zuHoX980CabMh7FPZ1IM2PUwe71Tu+OCwadQUC0z/J5l2I1Kn5PJXEa6A25/bMZIzAqPQC8G/iK3+MKk6JE+OWZDOzSJksTTvGGHCljeNHZC4TAalrBOZoGSqKqQw+bZLOK6OPuBHqx6b2x77m7tCIjLLPW7itVpb5ZVp5ng/PH/o3d4mFjCULsaFHFKem/RMhyDaJGiEEO0T7p+dYO99p+aGLbMgpi1MltRyYUufGB49TXaq/bZTOQcSnR4Zcm+PX3zZi9JfIu00SpML0Al9Top1PiezQ6CEKkY3HztGK02PfxcBfyNp5Q16d8QCZ4uOMO5q3sDtXAW8ly96YSdtNuJ8xv759jZxveI34KrifWQtzDpdnCrT5vhWv4InzxIEAlXH8WeC+9o8fnYfuUE30xI7xuhGcPY7QMgmAmRM6wn0gluR2ohagmHq24/fl1Uf3+mOFKpie6YQ/D11Q7a6VrVvqCJUq7yW2Onat0lrnxatezs/Pwm22t5/shcVJ43oIXmRjVvnzAu8ldSge/fr/OavM1w9dfsj0iVSjUuZHyRzZaXetnL88LGT7pOjvZYoXdS8Md7P+6GocYxbyO808NnVxGu/s2fsf+gz1qHSe2duBORdmyM6vE3PQ6/3zmtzudp350grHjN1IDmX2h/pUDuVPlYevrZstVIav/Z2d7O98+f4/qEEYn9Y4AAA=" /></Footer>{/_ END_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveLeadsRequest`

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

Returns metadata for `Lead` POSTs.{/_ BEGIN_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abXPaOBD+K4w+Zni5hNJembm5oZBrkjs7OUJzl+t0PIu0GAXZciQZGjr97ze2IZgE0pLYwWTyCXtXPF5Jz6521/5GKBh0pbohTUKVR8rEkwwFaZK/EBgpEwi4DR6SJrFQuVhqd61S6+yYlIkOg0Aqg+wPjoLpI4UD0iQ1LxpWCX0+4MhqQ8V1jcoxKnCxdvuXyiD+DykTwf0RshalMvTNQyDJwAokI+/cRmptSJkEoLUZKhm6wy5eh6jXYY58ORHIXKz0QSeWCfTQNyAqDAzUUkgVlUCtkkVzYCjQIOuAgQ4apIZLf/bUoTGBbtZqQxRBNbagynBcQ78GynAqUNca9fcH7943KjOU+Om/O674bX/v6rov++/2HJcKB8I9q0e/2r3jiX3lvrHbb77a008Nezqa2lejX/YcF/asntU47V3WTzut/dMVA5zzt/++v/jQ+XBi79HpYd2+upzYPbpv9eioPz2un3ykk5Ojv7/a08sDq/OpbvcOGycf5f5pu6utdldarWqVlAn3DboKomlq0vz8LS2YkaVFKQq5PPbYAxdTa5JsCAS8EoR9wWlV16vgwVT6MNFVKr2ah4xD7UyAGUjlQYzp6OsQFFYD350vPZf+7bqTJjm0j1p2+7CzTIfWGLiAvkDSNCrEe/wlzc+k3bVajCnUujonFimnpZSbmzuSaJS6IwykNiAcKhkuKxR60qDD2bJYGzB4V6QQjbO/UnqQSA894GJhiG+Azg1eUmF040Byl+jPhtJHO/T6qO5MNa1Zxkxrguja8eMbUiZy4se/s/lRhWCQOWAWsojWy3dOAGa4EMWLMrsOA7YAMNwIJF8i5XXIFbIzUOChQRVt2pfv5dUENHyMbfAC4K6fDRGXMedEvApyIWJGm/uTW7jp6g4G3E98IYt1naHl7NqPW9ENV6YtpMZs414MmRfNHo53s0VwzE2AuUTCWVRYrZgHiK1GyvX61KosDbo3tXXa1PwyjscPaFNWp4fcM3qNMrF5U6eQQRDblaVXxJjbcYtV5E/vTLFcIm/yv2zuHoX980CabMh7FPZ1IM2PUwe71Tu+OCwadQUC0z/J5l2I1Kn5PJXEa6A25/bMZIzAqPQC8G/iK3+MKk6JE+OWZDOzSJksTTvGGHCljeNHZC4TAalrBOZoGSqKqQw+bZLOK6OPuBHqx6b2x77m7tCIjLLPW7itVpb5ZVp5ng/PH/o3d4mFjCULsaFHFKem/RMhyDaJGiEEO0T7p+dYO99p+aGLbMgpi1MltRyYUufGB49TXaq/bZTOQcSnR4Zcm+PX3zZi9JfIu00SpML0Al9Top1PiezQ6CEKkY3HztGK02PfxcBfyNp5Q16d8QCZ4uOMO5q3sDtXAW8ly96YSdtNuJ8xv759jZxveI34KrifWQtzDpdnCrT5vhWv4InzxIEAlXH8WeC+9o8fnYfuUE30xI7xuhGcPY7QMgmAmRM6wn0gluR2ohagmHq24/fl1Uf3+mOFKpie6YQ/D11Q7a6VrVvqCJUq7yW2Onat0lrnxatezs/Pwm22t5/shcVJ43oIXmRjVvnzAu8ldSge/fr/OavM1w9dfsj0iVSjUuZHyRzZaXetnL88LGT7pOjvZYoXdS8Md7P+6GocYxbyO808NnVxGu/s2fsf+gz1qHSe2duBORdmyM6vE3PQ6/3zmtzudp350grHjN1IDmX2h/pUDuVPlYevrZstVIav/Z2d7O98+f4/qEEYn9Y4AAA=" /></Footer>{/_ END_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abXPaOBD+K4w+Zni5hNJembm5oZBrkjs7OUJzl+t0PIu0GAXZciQZGjr97ze2IZgE0pLYwWTyCXtXPF5Jz6521/5GKBh0pbohTUKVR8rEkwwFaZK/EBgpEwi4DR6SJrFQuVhqd61S6+yYlIkOg0Aqg+wPjoLpI4UD0iQ1LxpWCX0+4MhqQ8V1jcoxKnCxdvuXyiD+DykTwf0RshalMvTNQyDJwAokI+/cRmptSJkEoLUZKhm6wy5eh6jXYY58ORHIXKz0QSeWCfTQNyAqDAzUUkgVlUCtkkVzYCjQIOuAgQ4apIZLf/bUoTGBbtZqQxRBNbagynBcQ78GynAqUNca9fcH7943KjOU+Om/O674bX/v6rov++/2HJcKB8I9q0e/2r3jiX3lvrHbb77a008Nezqa2lejX/YcF/asntU47V3WTzut/dMVA5zzt/++v/jQ+XBi79HpYd2+upzYPbpv9eioPz2un3ykk5Ojv7/a08sDq/OpbvcOGycf5f5pu6utdldarWqVlAn3DboKomlq0vz8LS2YkaVFKQq5PPbYAxdTa5JsCAS8EoR9wWlV16vgwVT6MNFVKr2ah4xD7UyAGUjlQYzp6OsQFFYD350vPZf+7bqTJjm0j1p2+7CzTIfWGLiAvkDSNCrEe/wlzc+k3bVajCnUujonFimnpZSbmzuSaJS6IwykNiAcKhkuKxR60qDD2bJYGzB4V6QQjbO/UnqQSA894GJhiG+Azg1eUmF040Byl+jPhtJHO/T6qO5MNa1Zxkxrguja8eMbUiZy4se/s/lRhWCQOWAWsojWy3dOAGa4EMWLMrsOA7YAMNwIJF8i5XXIFbIzUOChQRVt2pfv5dUENHyMbfAC4K6fDRGXMedEvApyIWJGm/uTW7jp6g4G3E98IYt1naHl7NqPW9ENV6YtpMZs414MmRfNHo53s0VwzE2AuUTCWVRYrZgHiK1GyvX61KosDbo3tXXa1PwyjscPaFNWp4fcM3qNMrF5U6eQQRDblaVXxJjbcYtV5E/vTLFcIm/yv2zuHoX980CabMh7FPZ1IM2PUwe71Tu+OCwadQUC0z/J5l2I1Kn5PJXEa6A25/bMZIzAqPQC8G/iK3+MKk6JE+OWZDOzSJksTTvGGHCljeNHZC4TAalrBOZoGSqKqQw+bZLOK6OPuBHqx6b2x77m7tCIjLLPW7itVpb5ZVp5ng/PH/o3d4mFjCULsaFHFKem/RMhyDaJGiEEO0T7p+dYO99p+aGLbMgpi1MltRyYUufGB49TXaq/bZTOQcSnR4Zcm+PX3zZi9JfIu00SpML0Al9Top1PiezQ6CEKkY3HztGK02PfxcBfyNp5Q16d8QCZ4uOMO5q3sDtXAW8ly96YSdtNuJ8xv759jZxveI34KrifWQtzDpdnCrT5vhWv4InzxIEAlXH8WeC+9o8fnYfuUE30xI7xuhGcPY7QMgmAmRM6wn0gluR2ohagmHq24/fl1Uf3+mOFKpie6YQ/D11Q7a6VrVvqCJUq7yW2Onat0lrnxatezs/Pwm22t5/shcVJ43oIXmRjVvnzAu8ldSge/fr/OavM1w9dfsj0iVSjUuZHyRzZaXetnL88LGT7pOjvZYoXdS8Md7P+6GocYxbyO808NnVxGu/s2fsf+gz1qHSe2duBORdmyM6vE3PQ6/3zmtzudp350grHjN1IDmX2h/pUDuVPlYevrZstVIav/Z2d7O98+f4/qEEYn9Y4AAA=" /></Footer>{/_ END_CRM_LEAD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.leads.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListLeadsRequest`

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
await client.crm.linkedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListLinkedAccountsRequest`

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

Returns a list of `Note` objects.{/_ BEGIN_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XYW/bNhCG/4rBj4ZtLXGdLgKGwbW92hmkZLbaLS0C4UydJdoUyZBUnLjofx8kW3aSZUGLKo275ZtInV6eHr46nj4RChZjqW+IS6hOSYOkMkJOXOJLi6RBQDEfUiQu8VDHWOuNvVr3bEQaxGRKSW0x+o0hj8xQ44y4xEnzsGYm2Ixh5CSaGYfKK9QQo7N9pDkrniENwplYYNSlVGbCPiayDmzCOvLeML9tLGkQBcbYRMssTsZ4maH5N82FkEuOUYzNKZh1ZhxTFBZ4MwILzi2lpl5LPTSXv0OEHC1GfbDQR4vUMik2qybWKuM6ToJctYoMWhFeOSgc0JZRjsbptI8PXx93mhuVYvVfw5j/clCfX07l9HU9jCkPIat7Ab32g9HSn8ev/N6ra3/1ruOvFit/vvipHsZQ9wKvcxqct0/73YPTBwLCydFfx+/f9N+c+HW6GrT9+fnSD+iBF9DFdDVqn7yly5PhH9f+6vzQ679r+8Ggc/JWHpz2xsbrjaXXbbVIgzBhMdaQv6Yh7sdPtyc2ZulSilzejR2lEOMtJusNAcWaKptyRlum3YIUVlLA0rSoTJ0UIwbOGQc7kzqFQjM0lxlobCkRl+iZFFvuxCUDf9j1e4P+XTt0r4BxmHIkrtUZ/sO/xP1IqBQWRe4jWdzLBLM3+WgpUJMG0ZhKiyHVCBajEOxuLt+1u6NQgU12UyzaXWcqKgUu8snLjGmMzkBDihZ1nsvF58aDXGcztkmqArKl2lMy3XyhpFHQBVpePcT5G/l+JcseKJNxrNakG9FnR7k/lu1xaaqGnEu25uq7I94fqFKpIpUqqRaaT4J1HxEOs+lESVsNw2E2NUraspA+gzUr//q3LVql1EfCsDixvKITbCv3jEfY3jj6dwRVbUlYIKgXsi7xGNXSyJmt9W8EpIyaWvuoU5sAR1Mt8VK/fdQp1PelNdufvfAzaxLkvBrupdqT/U/cx/p9e9wzpjDS7KriBmwr+8hJ53eD0fvB/rvyac65nBBnorIerZR7qQf3SRdlciY1rdjjO91HYP+/TT7JYtC9sVcteJOrUp2+WP0+7wAhXUq9qFXOvFQOe2Pvv/QTUw33DygiNIvapLK2o+S+UQ5/XtrDIPjzxes75jKR1ft8JRP5RaXlRynsXw374vPf94RLa/UZAAA=" /></Footer>{/_ END_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.notes.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListNotesRequest`

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

Creates a `Note` object with the given values.{/_ BEGIN_CRM_NOTE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE91U224aMRD9lciPaC8lhFZZqaoI0ADSGko2UaMoWs3aw2LwrhfbCwlR/r3iEiDN5aWpKvXNc+b4jD1n7AfCwGKq9D0JCNMZcUimOEoSEKosEodAIShkSAISok7xqDkMjxqDLnGIKYtCaYv8u0DJTUfjiATEz1Y0t8zFSCD3x1oYn6k5akjR321xR+s9xCFS5FPkDcZUmdv3RDZEFzbM38JV2ljikAKMsWOtynQ8xFmJ5i3Naa4WEnmKbgJmczKJGeYWpMvBgn+g5OqN1GvY6g4cJVrkLbDQQovMCpVvq46tLUzg+2OUhbc+gcdx7mPug7aCSTR+vXZ6/OW07m5V1tW/xan8Wq1MZolKvlTilMkYykoYsTsadRd0kp7Q5skdXV7W6XK6pJPpp0qcQiWMwno/uq71W41q/xVCfPH55+nVWeusRyts2a7RyfWCRqwaRmyaLLu13jlb9Do/7ujy+jhsXdZo1K73zlW13xyasDlUYcPziENEbjHVsLqmIcHNwyGwHZZOmVwUyj4ndzNI8aApG0egEG5RJlIwz9Q8yGCpclgYj6nMz5AL8DtlYgplYzMrQaM3KdKnpguV7zpOAtKmnQZttlvPB6ExByEhkUgCq0t8MbkkuCHbOSIOYSq3wJ5WuMbUml/mwt6vokWOmjhEY6YsxkwjWOQx2D0m+H5dFvwpf7sCZ6XQyAegIUOLel1+X2q7afM+vMMoZhKMeUGZgyyR3D46r9kwEAVyLeb4MUYMJNiR0tlO9h0vaCPqXrX/uRO7j+bvO/OGBxcg0YyUZh9swl7XK/L/3IWDtsXFKmOe93ILelZYiX/yim4ffwF17BIGEwcAAA==" /></Footer>{/_ END_CRM_NOTE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Note` object with the given `id`.{/_ BEGIN_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XYW/bNhCG/4rBj4ZtLXGdLgKGwbW92hmkZLbaLS0C4UydJdoUyZBUnLjofx8kW3aSZUGLKo275ZtInV6eHr46nj4RChZjqW+IS6hOSYOkMkJOXOJLi6RBQDEfUiQu8VDHWOuNvVr3bEQaxGRKSW0x+o0hj8xQ44y4xEnzsGYm2Ixh5CSaGYfKK9QQo7N9pDkrniENwplYYNSlVGbCPiayDmzCOvLeML9tLGkQBcbYRMssTsZ4maH5N82FkEuOUYzNKZh1ZhxTFBZ4MwILzi2lpl5LPTSXv0OEHC1GfbDQR4vUMik2qybWKuM6ToJctYoMWhFeOSgc0JZRjsbptI8PXx93mhuVYvVfw5j/clCfX07l9HU9jCkPIat7Ab32g9HSn8ev/N6ra3/1ruOvFit/vvipHsZQ9wKvcxqct0/73YPTBwLCydFfx+/f9N+c+HW6GrT9+fnSD+iBF9DFdDVqn7yly5PhH9f+6vzQ679r+8Ggc/JWHpz2xsbrjaXXbbVIgzBhMdaQv6Yh7sdPtyc2ZulSilzejR2lEOMtJusNAcWaKptyRlum3YIUVlLA0rSoTJ0UIwbOGQc7kzqFQjM0lxlobCkRl+iZFFvuxCUDf9j1e4P+XTt0r4BxmHIkrtUZ/sO/xP1IqBQWRe4jWdzLBLM3+WgpUJMG0ZhKiyHVCBajEOxuLt+1u6NQgU12UyzaXWcqKgUu8snLjGmMzkBDihZ1nsvF58aDXGcztkmqArKl2lMy3XyhpFHQBVpePcT5G/l+JcseKJNxrNakG9FnR7k/lu1xaaqGnEu25uq7I94fqFKpIpUqqRaaT4J1HxEOs+lESVsNw2E2NUraspA+gzUr//q3LVql1EfCsDixvKITbCv3jEfY3jj6dwRVbUlYIKgXsi7xGNXSyJmt9W8EpIyaWvuoU5sAR1Mt8VK/fdQp1PelNdufvfAzaxLkvBrupdqT/U/cx/p9e9wzpjDS7KriBmwr+8hJ53eD0fvB/rvyac65nBBnorIerZR7qQf3SRdlciY1rdjjO91HYP+/TT7JYtC9sVcteJOrUp2+WP0+7wAhXUq9qFXOvFQOe2Pvv/QTUw33DygiNIvapLK2o+S+UQ5/XtrDIPjzxes75jKR1ft8JRP5RaXlRynsXw374vPf94RLa/UZAAA=" /></Footer>{/_ END_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveNotesRequest`

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

Returns metadata for `Note` POSTs.{/_ BEGIN_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XYW/bNhCG/4rBj4ZtLXGdLgKGwbW92hmkZLbaLS0C4UydJdoUyZBUnLjofx8kW3aSZUGLKo275ZtInV6eHr46nj4RChZjqW+IS6hOSYOkMkJOXOJLi6RBQDEfUiQu8VDHWOuNvVr3bEQaxGRKSW0x+o0hj8xQ44y4xEnzsGYm2Ixh5CSaGYfKK9QQo7N9pDkrniENwplYYNSlVGbCPiayDmzCOvLeML9tLGkQBcbYRMssTsZ4maH5N82FkEuOUYzNKZh1ZhxTFBZ4MwILzi2lpl5LPTSXv0OEHC1GfbDQR4vUMik2qybWKuM6ToJctYoMWhFeOSgc0JZRjsbptI8PXx93mhuVYvVfw5j/clCfX07l9HU9jCkPIat7Ab32g9HSn8ev/N6ra3/1ruOvFit/vvipHsZQ9wKvcxqct0/73YPTBwLCydFfx+/f9N+c+HW6GrT9+fnSD+iBF9DFdDVqn7yly5PhH9f+6vzQ679r+8Ggc/JWHpz2xsbrjaXXbbVIgzBhMdaQv6Yh7sdPtyc2ZulSilzejR2lEOMtJusNAcWaKptyRlum3YIUVlLA0rSoTJ0UIwbOGQc7kzqFQjM0lxlobCkRl+iZFFvuxCUDf9j1e4P+XTt0r4BxmHIkrtUZ/sO/xP1IqBQWRe4jWdzLBLM3+WgpUJMG0ZhKiyHVCBajEOxuLt+1u6NQgU12UyzaXWcqKgUu8snLjGmMzkBDihZ1nsvF58aDXGcztkmqArKl2lMy3XyhpFHQBVpePcT5G/l+JcseKJNxrNakG9FnR7k/lu1xaaqGnEu25uq7I94fqFKpIpUqqRaaT4J1HxEOs+lESVsNw2E2NUraspA+gzUr//q3LVql1EfCsDixvKITbCv3jEfY3jj6dwRVbUlYIKgXsi7xGNXSyJmt9W8EpIyaWvuoU5sAR1Mt8VK/fdQp1PelNdufvfAzaxLkvBrupdqT/U/cx/p9e9wzpjDS7KriBmwr+8hJ53eD0fvB/rvyac65nBBnorIerZR7qQf3SRdlciY1rdjjO91HYP+/TT7JYtC9sVcteJOrUp2+WP0+7wAhXUq9qFXOvFQOe2Pvv/QTUw33DygiNIvapLK2o+S+UQ5/XtrDIPjzxes75jKR1ft8JRP5RaXlRynsXw374vPf94RLa/UZAAA=" /></Footer>{/_ END_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XYW/bNhCG/4rBj4ZtLXGdLgKGwbW92hmkZLbaLS0C4UydJdoUyZBUnLjofx8kW3aSZUGLKo275ZtInV6eHr46nj4RChZjqW+IS6hOSYOkMkJOXOJLi6RBQDEfUiQu8VDHWOuNvVr3bEQaxGRKSW0x+o0hj8xQ44y4xEnzsGYm2Ixh5CSaGYfKK9QQo7N9pDkrniENwplYYNSlVGbCPiayDmzCOvLeML9tLGkQBcbYRMssTsZ4maH5N82FkEuOUYzNKZh1ZhxTFBZ4MwILzi2lpl5LPTSXv0OEHC1GfbDQR4vUMik2qybWKuM6ToJctYoMWhFeOSgc0JZRjsbptI8PXx93mhuVYvVfw5j/clCfX07l9HU9jCkPIat7Ab32g9HSn8ev/N6ra3/1ruOvFit/vvipHsZQ9wKvcxqct0/73YPTBwLCydFfx+/f9N+c+HW6GrT9+fnSD+iBF9DFdDVqn7yly5PhH9f+6vzQ679r+8Ggc/JWHpz2xsbrjaXXbbVIgzBhMdaQv6Yh7sdPtyc2ZulSilzejR2lEOMtJusNAcWaKptyRlum3YIUVlLA0rSoTJ0UIwbOGQc7kzqFQjM0lxlobCkRl+iZFFvuxCUDf9j1e4P+XTt0r4BxmHIkrtUZ/sO/xP1IqBQWRe4jWdzLBLM3+WgpUJMG0ZhKiyHVCBajEOxuLt+1u6NQgU12UyzaXWcqKgUu8snLjGmMzkBDihZ1nsvF58aDXGcztkmqArKl2lMy3XyhpFHQBVpePcT5G/l+JcseKJNxrNakG9FnR7k/lu1xaaqGnEu25uq7I94fqFKpIpUqqRaaT4J1HxEOs+lESVsNw2E2NUraspA+gzUr//q3LVql1EfCsDixvKITbCv3jEfY3jj6dwRVbUlYIKgXsi7xGNXSyJmt9W8EpIyaWvuoU5sAR1Mt8VK/fdQp1PelNdufvfAzaxLkvBrupdqT/U/cx/p9e9wzpjDS7KriBmwr+8hJ53eD0fvB/rvyac65nBBnorIerZR7qQf3SRdlciY1rdjjO91HYP+/TT7JYtC9sVcteJOrUp2+WP0+7wAhXUq9qFXOvFQOe2Pvv/QTUw33DygiNIvapLK2o+S+UQ5/XtrDIPjzxes75jKR1ft8JRP5RaXlRynsXw374vPf94RLa/UZAAA=" /></Footer>{/_ END_CRM_NOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.notes.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListNotesRequest`

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

Returns a list of `Opportunity` objects.{/_ BEGIN_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1YYW/iOBD9K8gfUSDXsnSvSKcTC9yWSgk9mu1dd1VFgzMkBidObQdaVvvfTwmBlr1ud5F8NHfXTxAzebbfG78Z/JlQ0BgKeU86hMqYWCQWAXLSIaM0FVJnCdP3xCKQMhdiJB3ioAyx1hs7te7FkFhEZUUgBr8x5IE6kzglHWLHeVgjS9iUYWBHkimbigVKCNHevtKYFu8Qi3CWzDHoUiqyRD8Hsg5swDryq8f8Z6WJRVJQSkdSZGE0xtsM1bcw54lYcgxCbExArVfGMcZEA28EoMF+hNSQa6inxvI9BMhRY9AHDX3USDUTSTlrpHWqOrYdIU+bxQqaAS5sTGyQmlGOym63To/fnrYbJUox+69+yH85qs9uJ2Lytu6HlPuQ1R2P3rnecOnOwjdu782du/rQdlfzlTub/1T3Q6g7ntMeedetUb97NHoiwL88+fP06l3/3blbp6tBy51dL12PHjkenU9Ww9b5e7o8P/v9zl1dHzv9Dy3XG7TP34ujUW+snN5YON1mk1iEJRpDCfk2Fel8+vx4oEyWLqXIxW7sMIYQH3GyFgRS1kizCWe0qVpNiGElEliqJhWxHWPAwL7goKdCxlBg+uo2A4nNNAk31DORbHknHTJwz7pub9DfTYfuAhiHCUfS0TLDv+Uv6XwiZTblaR+XXygXCv0ANBazKSpZWsxjEQ5K+0A1WzB970MeneS7t0giNOaJIZYJSmIRibHQ6FOJoDFYh5Zjudq7T34KOnoYYkF+1nRO3U0+eJsxicEFSIhRo8zXffPFeloDzRbYgzgFFiZmtNjF3GgxSw+ixY/Sb5j24lNnam/+p1NWuqgJ5ku0w+T/V4m8B2t7ktSDVGUczTpFCfrqEd+nP1+6YfJzyENZwjPUvzCxIk2L6U0yW2BWgNrKW+9ZNrlMhTZD/1k2UanQ3y92btcbXg0qYCkPHbyvQc0N6bLt2c3pNEwUCyPNDdXILdy/oUmsyFFxGJVCiamu9e8TiBlVtdZJu3YJvMglg/a1wW+dtAv06oh0mPNjQCw30ypCzs0Is0GrgAKVPyYXLMVAsoXhZmkL+wJl5b9USHIeOUuMdVwbuOp6VDWORWHkUw7S8Ll4wH2RdrfydrTmR0j6j/Ce4z6T8q997t5yZSHI3tgxK5bKUamMX03qefY9hJgjBKaqwwNedSivENVLIec148m+QfZ7Y+fA98477Fczxa80C01fNy0KzOqYy8GK8p7cf8QkQDWvXRr7Y7ZRoET2f17qY8/741AaVP3S+qOIhHmDWYlI/FAx/f+2P9/W6ebLX2xd5ntSIAAA" /></Footer>{/_ END_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.opportunities.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListOpportunitiesRequest`

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

Creates an `Opportunity` object with the given values.{/_ BEGIN_CRM_OPPORTUNITY_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE91YYW/aOhT9K8gfUUhey+hekaYnBrxBpYS+NuteN1XRxb4Eg2OntgOFaf/9KSFlZWvXrkrbvX2CONfH9jnnHiM+EwoWY6VXpE2oTohDEsVQkDYZpanSNpPcrohDIOUBJEjaxEcdY6174tc6x0PiEJMVhcj+5iiYGWickDbxkryskUk+4ci8qebGo2qBGmL0tlMak2IOcYjgco6sQ6nKpP0RyKawAZvKbx7z18YSh6RgjJ1qlcXTE7zM0NyFOZdqKZDF2BiD2exMYILSgmgwsODdQGroDdRtY/kZGAq0yHpgoYcWqeVKlqtOrU1N2/OmKFK32IHLcOGh9EBbTgUar9U83H992GqUKMXqf0WxeLNXn12O1fh1PYqpiCCr+yG9CsLhMpjFr4Luq6tg/b4VrOfrYDb/ox7FUPdDvzUKz5ujXmdvdEtBdHrw7+HZ297bo6BO1/1mMDtfBiHd80M6H6+HzaN3dHk0+OcqWJ/v+733zSDst47eqb1R98T43RPld1yXOIRLi7GG/JiGtD99vjlQmqVDLV9gF5IUeCx35wwTiPEGNxthIOWNNBsLTl3TdCGBtZKwNC5ViZcg4+DtYkbmMgON7iyNryXgSm75J23SDwadoNvv7dqiswAuYCyQtK3O8Dsfk/YnUroqt39SfmFoqOZpAe0QAcZGkO+H21UEeYHMD+4QtZSoiUM0JspiRDWCRbYpKcc4y7vH5iQUnzYz5CJ/e5lxjewYNCRoUedbufji3EZvF1KTCayG12MBdqJ0UoK6qXwBRh9F30+yNsjGp6my1bA2yMYmVfZ+GwadcHjWr4QyKpTBiIHFah25TeNHOHQXw735FFEBxny7jLsAkSG5Q6OhNDyeWrGqRqUt3LVOz2Tup1KqguzwOdXKqImt9VYSEk5NrXnQqp2CQFNtoFzjNw9aBfqTavAA5p8jY455ikzzRcXZvIV9gaB5uWgpl6k2YQorTpSmFUv0FfcHBv/dL4P7u++RYm7b8XZRQ4REILDicBWI+hXvF7gxnvV6OLM8rorF69ZYFJi/3xX8kDa4g+aPKBmaee0UhaiW7BI5+nNp98Pww3PR/eSc7qDdxaqaqvwvimoZXaupojq537//g3R/0C+biy//AVfgGZQgEgAA" /></Footer>{/_ END_CRM_OPPORTUNITY_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Opportunity` object with the given `id`.{/_ BEGIN_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1YYW/iOBD9K8gfUSDXsnSvSKcTC9yWSgk9mu1dd1VFgzMkBidObQdaVvvfTwmBlr1ud5F8NHfXTxAzebbfG78Z/JlQ0BgKeU86hMqYWCQWAXLSIaM0FVJnCdP3xCKQMhdiJB3ioAyx1hs7te7FkFhEZUUgBr8x5IE6kzglHWLHeVgjS9iUYWBHkimbigVKCNHevtKYFu8Qi3CWzDHoUiqyRD8Hsg5swDryq8f8Z6WJRVJQSkdSZGE0xtsM1bcw54lYcgxCbExArVfGMcZEA28EoMF+hNSQa6inxvI9BMhRY9AHDX3USDUTSTlrpHWqOrYdIU+bxQqaAS5sTGyQmlGOym63To/fnrYbJUox+69+yH85qs9uJ2Lytu6HlPuQ1R2P3rnecOnOwjdu782du/rQdlfzlTub/1T3Q6g7ntMeedetUb97NHoiwL88+fP06l3/3blbp6tBy51dL12PHjkenU9Ww9b5e7o8P/v9zl1dHzv9Dy3XG7TP34ujUW+snN5YON1mk1iEJRpDCfk2Fel8+vx4oEyWLqXIxW7sMIYQH3GyFgRS1kizCWe0qVpNiGElEliqJhWxHWPAwL7goKdCxlBg+uo2A4nNNAk31DORbHknHTJwz7pub9DfTYfuAhiHCUfS0TLDv+Uv6XwiZTblaR+XXygXCv0ANBazKSpZWsxjEQ5K+0A1WzB970MeneS7t0giNOaJIZYJSmIRibHQ6FOJoDFYh5Zjudq7T34KOnoYYkF+1nRO3U0+eJsxicEFSIhRo8zXffPFeloDzRbYgzgFFiZmtNjF3GgxSw+ixY/Sb5j24lNnam/+p1NWuqgJ5ku0w+T/V4m8B2t7ktSDVGUczTpFCfrqEd+nP1+6YfJzyENZwjPUvzCxIk2L6U0yW2BWgNrKW+9ZNrlMhTZD/1k2UanQ3y92btcbXg0qYCkPHbyvQc0N6bLt2c3pNEwUCyPNDdXILdy/oUmsyFFxGJVCiamu9e8TiBlVtdZJu3YJvMglg/a1wW+dtAv06oh0mPNjQCw30ypCzs0Is0GrgAKVPyYXLMVAsoXhZmkL+wJl5b9USHIeOUuMdVwbuOp6VDWORWHkUw7S8Ll4wH2RdrfydrTmR0j6j/Ce4z6T8q997t5yZSHI3tgxK5bKUamMX03qefY9hJgjBKaqwwNedSivENVLIec148m+QfZ7Y+fA98477Fczxa80C01fNy0KzOqYy8GK8p7cf8QkQDWvXRr7Y7ZRoET2f17qY8/741AaVP3S+qOIhHmDWYlI/FAx/f+2P9/W6ebLX2xd5ntSIAAA" /></Footer>{/_ END_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveOpportunitiesRequest`

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

Updates an `Opportunity` object with the given `id`.{/_ BEGIN_CRM_OPPORTUNITY_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE+VWYW/aMBD9K9N9RCFZx9jUSNPEgA2QEljLqnVVFR3OEQxObGwHWqr+9ymBsbZru26jqqp9smzfvfO9dz77AhhaSqQ+Bx+YTsGBVMYkwIe+UlLbPOP2HBxAxUNMCXwISCf0onkQvGgMuuCAyUtDij9yErHpaBqDD15amFXzjI85xd5Ec+MxuSCNCXlbl+q49AEHBM9mFDcYk3lm7wNZG1ZxbXljWmwbCw4oNMZOtMyTyQHNczJ3Yc4yuRQUJ1QdoVmfTFBKmUVRjdGidwWpqtdQt60VOcQkyFLcQostssQsl9km6sRaZXzPm5BQbnkCN6aFR5mH2nImyHj12v6rt/v16galjP4+SsS7vcp0PpKjt5UoYSLCvBIM2Vk47C7DafI6bL4+C1df6uFqtgqns5eVKMFKMAzq/eFxrd9q7PVvMYgO33zdP/rQ+tALK2zVroXT42U4ZHvBkM1Gq26t94kte53PZ+Hq+FXQ+lILh+1675Pc6zcPTNA8kEHDdcEBnllKNBZpGvBPLq4ubIqlicrkgq4bd1NM6Aopa0VQ8arKR4Iz19RcTHElM1wal8nUSynm6A0E2rHU6QbUVVnyg3Uusy3l4EM77DTCZrt1vRIaC+QCR4LAtzqnX0oX/BPAtKgjcIAJaSiK0VIZwzDNVYnuQFbk5oBcZqTBAU2ptBQxTWgpjrDwNrZI8bTYnOdcUzxAjSlZ0kWU00vnVrKkUiXiLrkqMd2pegSq1neuaA5/TRqPt2SVo83Nn7LWyUeHStrd0NbJR0ZJG5l5jpruoS1sDLtH7ccmTaCxETLLF9yeryvrAcW3Wdv21gfye93PvTqLmEBjbkK7CxQ5wR26DLiiWPPFji//FvYJxHnOchyiIDMWqHesx0/cJ2ky/yTJDrrPOn2p2aPQWuDe88z9l03oDiG+yYksfqW7lWElJ5Lp9Md78Dyl+N1n5PTyOzQjv10HDAAA" /></Footer>{/_ END_CRM_OPPORTUNITY_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

<details><summary><code>client.crm.opportunities.<a href="/src/api/resources/crm/resources/opportunities/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Opportunity` PATCHs.{/_ BEGIN_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1YYW/iOBD9K8gfUSDXsnSvSKcTC9yWSgk9mu1dd1VFgzMkBidObQdaVvvfTwmBlr1ud5F8NHfXTxAzebbfG78Z/JlQ0BgKeU86hMqYWCQWAXLSIaM0FVJnCdP3xCKQMhdiJB3ioAyx1hs7te7FkFhEZUUgBr8x5IE6kzglHWLHeVgjS9iUYWBHkimbigVKCNHevtKYFu8Qi3CWzDHoUiqyRD8Hsg5swDryq8f8Z6WJRVJQSkdSZGE0xtsM1bcw54lYcgxCbExArVfGMcZEA28EoMF+hNSQa6inxvI9BMhRY9AHDX3USDUTSTlrpHWqOrYdIU+bxQqaAS5sTGyQmlGOym63To/fnrYbJUox+69+yH85qs9uJ2Lytu6HlPuQ1R2P3rnecOnOwjdu782du/rQdlfzlTub/1T3Q6g7ntMeedetUb97NHoiwL88+fP06l3/3blbp6tBy51dL12PHjkenU9Ww9b5e7o8P/v9zl1dHzv9Dy3XG7TP34ujUW+snN5YON1mk1iEJRpDCfk2Fel8+vx4oEyWLqXIxW7sMIYQH3GyFgRS1kizCWe0qVpNiGElEliqJhWxHWPAwL7goKdCxlBg+uo2A4nNNAk31DORbHknHTJwz7pub9DfTYfuAhiHCUfS0TLDv+Uv6XwiZTblaR+XXygXCv0ANBazKSpZWsxjEQ5K+0A1WzB970MeneS7t0giNOaJIZYJSmIRibHQ6FOJoDFYh5Zjudq7T34KOnoYYkF+1nRO3U0+eJsxicEFSIhRo8zXffPFeloDzRbYgzgFFiZmtNjF3GgxSw+ixY/Sb5j24lNnam/+p1NWuqgJ5ku0w+T/V4m8B2t7ktSDVGUczTpFCfrqEd+nP1+6YfJzyENZwjPUvzCxIk2L6U0yW2BWgNrKW+9ZNrlMhTZD/1k2UanQ3y92btcbXg0qYCkPHbyvQc0N6bLt2c3pNEwUCyPNDdXILdy/oUmsyFFxGJVCiamu9e8TiBlVtdZJu3YJvMglg/a1wW+dtAv06oh0mPNjQCw30ypCzs0Is0GrgAKVPyYXLMVAsoXhZmkL+wJl5b9USHIeOUuMdVwbuOp6VDWORWHkUw7S8Ll4wH2RdrfydrTmR0j6j/Ce4z6T8q997t5yZSHI3tgxK5bKUamMX03qefY9hJgjBKaqwwNedSivENVLIec148m+QfZ7Y+fA98477Fczxa80C01fNy0KzOqYy8GK8p7cf8QkQDWvXRr7Y7ZRoET2f17qY8/741AaVP3S+qOIhHmDWYlI/FAx/f+2P9/W6ebLX2xd5ntSIAAA" /></Footer>{/_ END_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.MetaPatchRetrieveOpportunitiesRequest`

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

Returns metadata for `Opportunity` POSTs.{/_ BEGIN_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1YYW/iOBD9K8gfUSDXsnSvSKcTC9yWSgk9mu1dd1VFgzMkBidObQdaVvvfTwmBlr1ud5F8NHfXTxAzebbfG78Z/JlQ0BgKeU86hMqYWCQWAXLSIaM0FVJnCdP3xCKQMhdiJB3ioAyx1hs7te7FkFhEZUUgBr8x5IE6kzglHWLHeVgjS9iUYWBHkimbigVKCNHevtKYFu8Qi3CWzDHoUiqyRD8Hsg5swDryq8f8Z6WJRVJQSkdSZGE0xtsM1bcw54lYcgxCbExArVfGMcZEA28EoMF+hNSQa6inxvI9BMhRY9AHDX3USDUTSTlrpHWqOrYdIU+bxQqaAS5sTGyQmlGOym63To/fnrYbJUox+69+yH85qs9uJ2Lytu6HlPuQ1R2P3rnecOnOwjdu782du/rQdlfzlTub/1T3Q6g7ntMeedetUb97NHoiwL88+fP06l3/3blbp6tBy51dL12PHjkenU9Ww9b5e7o8P/v9zl1dHzv9Dy3XG7TP34ujUW+snN5YON1mk1iEJRpDCfk2Fel8+vx4oEyWLqXIxW7sMIYQH3GyFgRS1kizCWe0qVpNiGElEliqJhWxHWPAwL7goKdCxlBg+uo2A4nNNAk31DORbHknHTJwz7pub9DfTYfuAhiHCUfS0TLDv+Uv6XwiZTblaR+XXygXCv0ANBazKSpZWsxjEQ5K+0A1WzB970MeneS7t0giNOaJIZYJSmIRibHQ6FOJoDFYh5Zjudq7T34KOnoYYkF+1nRO3U0+eJsxicEFSIhRo8zXffPFeloDzRbYgzgFFiZmtNjF3GgxSw+ixY/Sb5j24lNnam/+p1NWuqgJ5ku0w+T/V4m8B2t7ktSDVGUczTpFCfrqEd+nP1+6YfJzyENZwjPUvzCxIk2L6U0yW2BWgNrKW+9ZNrlMhTZD/1k2UanQ3y92btcbXg0qYCkPHbyvQc0N6bLt2c3pNEwUCyPNDdXILdy/oUmsyFFxGJVCiamu9e8TiBlVtdZJu3YJvMglg/a1wW+dtAv06oh0mPNjQCw30ypCzs0Is0GrgAKVPyYXLMVAsoXhZmkL+wJl5b9USHIeOUuMdVwbuOp6VDWORWHkUw7S8Ll4wH2RdrfydrTmR0j6j/Ce4z6T8q997t5yZSHI3tgxK5bKUamMX03qefY9hJgjBKaqwwNedSivENVLIec148m+QfZ7Y+fA98477Fczxa80C01fNy0KzOqYy8GK8p7cf8QkQDWvXRr7Y7ZRoET2f17qY8/741AaVP3S+qOIhHmDWYlI/FAx/f+2P9/W6ebLX2xd5ntSIAAA" /></Footer>{/_ END_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1YYW/iOBD9K8gfUSDXsnSvSKcTC9yWSgk9mu1dd1VFgzMkBidObQdaVvvfTwmBlr1ud5F8NHfXTxAzebbfG78Z/JlQ0BgKeU86hMqYWCQWAXLSIaM0FVJnCdP3xCKQMhdiJB3ioAyx1hs7te7FkFhEZUUgBr8x5IE6kzglHWLHeVgjS9iUYWBHkimbigVKCNHevtKYFu8Qi3CWzDHoUiqyRD8Hsg5swDryq8f8Z6WJRVJQSkdSZGE0xtsM1bcw54lYcgxCbExArVfGMcZEA28EoMF+hNSQa6inxvI9BMhRY9AHDX3USDUTSTlrpHWqOrYdIU+bxQqaAS5sTGyQmlGOym63To/fnrYbJUox+69+yH85qs9uJ2Lytu6HlPuQ1R2P3rnecOnOwjdu782du/rQdlfzlTub/1T3Q6g7ntMeedetUb97NHoiwL88+fP06l3/3blbp6tBy51dL12PHjkenU9Ww9b5e7o8P/v9zl1dHzv9Dy3XG7TP34ujUW+snN5YON1mk1iEJRpDCfk2Fel8+vx4oEyWLqXIxW7sMIYQH3GyFgRS1kizCWe0qVpNiGElEliqJhWxHWPAwL7goKdCxlBg+uo2A4nNNAk31DORbHknHTJwz7pub9DfTYfuAhiHCUfS0TLDv+Uv6XwiZTblaR+XXygXCv0ANBazKSpZWsxjEQ5K+0A1WzB970MeneS7t0giNOaJIZYJSmIRibHQ6FOJoDFYh5Zjudq7T34KOnoYYkF+1nRO3U0+eJsxicEFSIhRo8zXffPFeloDzRbYgzgFFiZmtNjF3GgxSw+ixY/Sb5j24lNnam/+p1NWuqgJ5ku0w+T/V4m8B2t7ktSDVGUczTpFCfrqEd+nP1+6YfJzyENZwjPUvzCxIk2L6U0yW2BWgNrKW+9ZNrlMhTZD/1k2UanQ3y92btcbXg0qYCkPHbyvQc0N6bLt2c3pNEwUCyPNDdXILdy/oUmsyFFxGJVCiamu9e8TiBlVtdZJu3YJvMglg/a1wW+dtAv06oh0mPNjQCw30ypCzs0Is0GrgAKVPyYXLMVAsoXhZmkL+wJl5b9USHIeOUuMdVwbuOp6VDWORWHkUw7S8Ll4wH2RdrfydrTmR0j6j/Ce4z6T8q997t5yZSHI3tgxK5bKUamMX03qefY9hJgjBKaqwwNedSivENVLIec148m+QfZ7Y+fA98477Fczxa80C01fNy0KzOqYy8GK8p7cf8QkQDWvXRr7Y7ZRoET2f17qY8/741AaVP3S+qOIhHmDWYlI/FAx/f+2P9/W6ebLX2xd5ntSIAAA" /></Footer>{/_ END_CRM_OPPORTUNITY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.opportunities.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListOpportunitiesRequest`

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

Returns a list of `Stage` objects.{/_ BEGIN_CRM_STAGE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92XYW/bNhCG/4rBj4ZtLXGdLgKGwZW92gGkZLaaLS0C4UydJdoUyZCUnbjofx8k20nTZkMLsEOhj6SOD3kvXx6pj4SCxUzqB+ITqgvSIYVMkROfzC1kSDoEFIugQOKTEHWGrWAWtoZXU9IhplRKaovpHwx5aiYal8QnXlGFdUvBlgxTL9fMeFRuUEOG3uOQ7rIeQzqEM7HGdEipLIX9L8g+sAv7yC+a1WdjSYcoMMbmWpZZPsO7Es2/MddCbjmmGXYXYPYr41igsMC7KVjwPiN19R71Ul+VQ4ocLaYjsDBCi9QyKQ6z5tYq43tejlz16hX0Utx4KDzQllGOxhv0z09fnw+6B0o9++9Jxn87aa/uFnLxup1klCdQtsOY3kfxdButsldR8Oo+2r0bRLv1Llqtf2knGbTDOBxcxjf9y9Hw5PKFgGR+9vf59ZvRm4uoTXfjfrS62UYxPQljul7spv2Lt3R7MfnzPtrdnIajd/0oHg8u3sqTy2BmwmAmw2GvRzqECYuZhipNQ/wPHz/vOJhlSCly+Tx2WlSWetJkvyGgWFeVC85oz/R7UMBOCtiaHpWFV2DKwLviYJdSF1AzE3NXgsaeEtlReibFo+7EJ+NoMoyC8ei5HYYbYBwWHIlvdYlf+Zf4H4ioFt8hsv5QCmYZVvursZAWk2pjnrcSBTZ/6mIpua0adyXTmF6BhgIt6gp9+6nzskyWbTCAQgHLhBu5njOPcq1UA+QKQJmSo1tbHaDNMFTApXGtT4VsiH+kUqgdy1Mzm6HPpFzMlbRuBJqUC6OkbVQBmgrDstzyBzcSPeIadamFjGpp5NK2Rg8CCkZNq382aM2B1xM7PHtHfv9sUNP/dxm/U5motCZHzt2ocKQ1wzVXTGGq2cbx7fWIbUYBqtLhTDi7xI64RhWguhYsOWjHXnriNsNM+3ykpj9Ep4rbED+VGehgFrpVyVRUqouf/dKKEQqOkLqqOU+8Zrijymcr9brl3CFHchLMwkY9o68ty1z/h21q5s9+mN6jSNGsW3Nnr8Bj/gdy8uvWnsbxX804W+9lLt2fq53M5TcV3mgYT6/HP9wpt5/+AaL6tzCJFwAA" /></Footer>{/_ END_CRM_STAGE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.stages.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListStagesRequest`

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

Returns a `Stage` object with the given `id`.{/_ BEGIN_CRM_STAGE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92XYW/bNhCG/4rBj4ZtLXGdLgKGwZW92gGkZLaaLS0C4UydJdoUyZCUnbjofx8k20nTZkMLsEOhj6SOD3kvXx6pj4SCxUzqB+ITqgvSIYVMkROfzC1kSDoEFIugQOKTEHWGrWAWtoZXU9IhplRKaovpHwx5aiYal8QnXlGFdUvBlgxTL9fMeFRuUEOG3uOQ7rIeQzqEM7HGdEipLIX9L8g+sAv7yC+a1WdjSYcoMMbmWpZZPsO7Es2/MddCbjmmGXYXYPYr41igsMC7KVjwPiN19R71Ul+VQ4ocLaYjsDBCi9QyKQ6z5tYq43tejlz16hX0Utx4KDzQllGOxhv0z09fnw+6B0o9++9Jxn87aa/uFnLxup1klCdQtsOY3kfxdButsldR8Oo+2r0bRLv1Llqtf2knGbTDOBxcxjf9y9Hw5PKFgGR+9vf59ZvRm4uoTXfjfrS62UYxPQljul7spv2Lt3R7MfnzPtrdnIajd/0oHg8u3sqTy2BmwmAmw2GvRzqECYuZhipNQ/wPHz/vOJhlSCly+Tx2WlSWetJkvyGgWFeVC85oz/R7UMBOCtiaHpWFV2DKwLviYJdSF1AzE3NXgsaeEtlReibFo+7EJ+NoMoyC8ei5HYYbYBwWHIlvdYlf+Zf4H4ioFt8hsv5QCmYZVvursZAWk2pjnrcSBTZ/6mIpua0adyXTmF6BhgIt6gp9+6nzskyWbTCAQgHLhBu5njOPcq1UA+QKQJmSo1tbHaDNMFTApXGtT4VsiH+kUqgdy1Mzm6HPpFzMlbRuBJqUC6OkbVQBmgrDstzyBzcSPeIadamFjGpp5NK2Rg8CCkZNq382aM2B1xM7PHtHfv9sUNP/dxm/U5motCZHzt2ocKQ1wzVXTGGq2cbx7fWIbUYBqtLhTDi7xI64RhWguhYsOWjHXnriNsNM+3ykpj9Ep4rbED+VGehgFrpVyVRUqouf/dKKEQqOkLqqOU+8Zrijymcr9brl3CFHchLMwkY9o68ty1z/h21q5s9+mN6jSNGsW3Nnr8Bj/gdy8uvWnsbxX804W+9lLt2fq53M5TcV3mgYT6/HP9wpt5/+AaL6tzCJFwAA" /></Footer>{/_ END_CRM_STAGE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveStagesRequest`

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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_STAGE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92XYW/bNhCG/4rBj4ZtLXGdLgKGwZW92gGkZLaaLS0C4UydJdoUyZCUnbjofx8k20nTZkMLsEOhj6SOD3kvXx6pj4SCxUzqB+ITqgvSIYVMkROfzC1kSDoEFIugQOKTEHWGrWAWtoZXU9IhplRKaovpHwx5aiYal8QnXlGFdUvBlgxTL9fMeFRuUEOG3uOQ7rIeQzqEM7HGdEipLIX9L8g+sAv7yC+a1WdjSYcoMMbmWpZZPsO7Es2/MddCbjmmGXYXYPYr41igsMC7KVjwPiN19R71Ul+VQ4ocLaYjsDBCi9QyKQ6z5tYq43tejlz16hX0Utx4KDzQllGOxhv0z09fnw+6B0o9++9Jxn87aa/uFnLxup1klCdQtsOY3kfxdButsldR8Oo+2r0bRLv1Llqtf2knGbTDOBxcxjf9y9Hw5PKFgGR+9vf59ZvRm4uoTXfjfrS62UYxPQljul7spv2Lt3R7MfnzPtrdnIajd/0oHg8u3sqTy2BmwmAmw2GvRzqECYuZhipNQ/wPHz/vOJhlSCly+Tx2WlSWetJkvyGgWFeVC85oz/R7UMBOCtiaHpWFV2DKwLviYJdSF1AzE3NXgsaeEtlReibFo+7EJ+NoMoyC8ei5HYYbYBwWHIlvdYlf+Zf4H4ioFt8hsv5QCmYZVvursZAWk2pjnrcSBTZ/6mIpua0adyXTmF6BhgIt6gp9+6nzskyWbTCAQgHLhBu5njOPcq1UA+QKQJmSo1tbHaDNMFTApXGtT4VsiH+kUqgdy1Mzm6HPpFzMlbRuBJqUC6OkbVQBmgrDstzyBzcSPeIadamFjGpp5NK2Rg8CCkZNq382aM2B1xM7PHtHfv9sUNP/dxm/U5motCZHzt2ocKQ1wzVXTGGq2cbx7fWIbUYBqtLhTDi7xI64RhWguhYsOWjHXnriNsNM+3ykpj9Ep4rbED+VGehgFrpVyVRUqouf/dKKEQqOkLqqOU+8Zrijymcr9brl3CFHchLMwkY9o68ty1z/h21q5s9+mN6jSNGsW3Nnr8Bj/gdy8uvWnsbxX804W+9lLt2fq53M5TcV3mgYT6/HP9wpt5/+AaL6tzCJFwAA" /></Footer>{/_ END_CRM_STAGE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.stages.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListStagesRequest`

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
await client.crm.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListSyncStatusRequest`

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

Returns a list of `Task` objects.{/_ BEGIN_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XbW/bNhDHv4rBl4YsLXGdLgKGwbW92hmkZI7aLS0C4USdJVqUyJBUnLjodx8kPyTZ0mAr5MZd9lLH05/k74535CdCwWAi1C1xCVU5sUguYuTEJQHojFgEJPMhR+ISD1WCrcHUa/XPJsQiupRSKIPxLwx5rMcKZ8QlTl65dcqCzRjGTqqYdqi4RgUJOttfOrP6H2IRzooM4z6loizMUyIrxw6sPP/yWQ1rQywiQWuTKlEm6RSvStRf0swKseAYJ9iJQK9WxjHHwgDvxGDAuafUUSupx2zVHmLkaDAegoEhGqSGiWI9a2qM1K7jpMilXa/AjvHawcIBZRjlqJ1e9/jw9XGvs1apZ/85TPhPB+35VSSi1+0woTyEsu0F9MYPJgt/nrzyB69u/OW7nr/Mlv48+6EdJtD2Aq93Glx0T4f9g9NHHMLzoz+O378Zvjnx23Q56vrzi4Uf0AMvoFm0nHRP3tLFyfi3G395cegN33X9YNQ7eSsOTgdT7Q2mwuvbNrEIKwwmCqptauJ+/HTfsE6WPqXIxUPfSQ4J3mOyCghI1pFlxBm1ddeGHJaigIW2qcidHGMGzhkHMxMqh1oz1FclKLRlkWzQM1FsuROXjPxx3x+Mhg/ToX8NjEPEkbhGlfi3/CXuR7LOJmIRKnJZhyOMwWBtKAzWQ3GJG6NYFKiIRRTmwtRWePgVSjDpnYnF1bkxYEpdH6BojtSQy2r8qmQK4zNQkKNBVS3n8rP1GNoBSF1ybJbtWnTHVJ8dHRe6aXCVpD2X/2lsQsp61ia51Zo7BrfHp3hcRudSmGagjstIS2E2pXEvoNYKZcHM7Vcg3l4PmkQ+KTRLUsNvm4G+lXvxHelXBNlsdcgQ5IvH6jGqhBYz0xreFpAzqlvdo17rHDjqZnFv9LtHvVr9GdEDNbspKY2ExC+NTpHzZvBv1HbCeY8T+4xJjBW7bvgqtpV9ogH6/WDyfvT9ZO1OGmF9xmccVMMBuNP91leQZ0nj1XaFojvBWOk+URj+T+QqAmUCajD1muWvK1Wq8m/VBfelLAcIOUeIm3rq3em9tAZX7XwhVNZqPDc3yuFg6u3yubfHcD9gEaPOWueN3cM2cNfK4Y8LcxgEv+/jy+M+wX/LTaSi+YRcilT8o1q5o4b1zK+Ey89/AhNW0cNDGQAA" /></Footer>{/_ END_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.tasks.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListTasksRequest`

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

Creates a `Task` object with the given values.{/_ BEGIN_CRM_TASK_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE71TYW/aMBD9K9V9RCEZpWxqpGmiwApICYym1aoKRRfnCAYnTm0HWqr+94lAGV1ZNW3tPt75+Z393rsHYGgokeoeXGAqBQtSGZMAFwLUc7AAc+5jSuCCRyqho9bIO2oOe2CBLvJcKkPxV04i1l1FE3DBSdewapHxCafYmSquHSYXpDAhZ3elOinvgAWCZ3OKm4zJIjOvkWyAVdwgfynXx9qABTlqbaZKFsl0RLcF6d9xzjO5FBQnVI1Qb14mKKXMoKjGaNDZY6qqDdWh3voPMQkyFLfRYJsMMcNltp06NSbXruNMSeR2+QI7poVDmYPKcCZIO4366fGn00Z1y1JO/xIm4nOtMruNZPSpEiZMhFhUvIDd+UFv6c+SE791cuevLhv+ar7yZ/MPlTDBihd4jUFwXR+0m7XBAUB48fH76dVZ+6zvV9iqU/dn10s/YDUvYPNo1av3z9my3/1256+uj732Zd0POo3+uawNWiPttUbSa9o2WMAzQ4nC9Tc1uDcP+41tWLpFdJFL8xzcSzGhPVE2jmDOq3kRCc5sXbcxxZXMcKltJlMnpZij0y0inUsT6tsCFdmzPHkSnctspzi40PG7Tb/VaT8PQnOBXGAkCFyjCnqRXHBvYJsjsIDJNC+NCGM0VDYyQ+VRXNBTU5YMRcbN/bpaZqTAAkWpNBTyeL0eBk2hyz2JZsQMjNfntwVXFA9RYUqGVDl7j3ZLsNkOe78KmUCtX0AWKAqC8aN1yIQhzylWfEFvY8NQoJlIle5oX3HCbwa9q86/+fDOsv+B1juOw/peoCA9kYq9scA/ee08e0+F/3fS/zLeuxHjx/HjD64N4oKzBgAA" /></Footer>{/_ END_CRM_TASK_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Task` object with the given `id`.{/_ BEGIN_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XbW/bNhDHv4rBl4YsLXGdLgKGwbW92hmkZI7aLS0C4USdJVqUyJBUnLjodx8kPyTZ0mAr5MZd9lLH05/k74535CdCwWAi1C1xCVU5sUguYuTEJQHojFgEJPMhR+ISD1WCrcHUa/XPJsQiupRSKIPxLwx5rMcKZ8QlTl65dcqCzRjGTqqYdqi4RgUJOttfOrP6H2IRzooM4z6loizMUyIrxw6sPP/yWQ1rQywiQWuTKlEm6RSvStRf0swKseAYJ9iJQK9WxjHHwgDvxGDAuafUUSupx2zVHmLkaDAegoEhGqSGiWI9a2qM1K7jpMilXa/AjvHawcIBZRjlqJ1e9/jw9XGvs1apZ/85TPhPB+35VSSi1+0woTyEsu0F9MYPJgt/nrzyB69u/OW7nr/Mlv48+6EdJtD2Aq93Glx0T4f9g9NHHMLzoz+O378Zvjnx23Q56vrzi4Uf0AMvoFm0nHRP3tLFyfi3G395cegN33X9YNQ7eSsOTgdT7Q2mwuvbNrEIKwwmCqptauJ+/HTfsE6WPqXIxUPfSQ4J3mOyCghI1pFlxBm1ddeGHJaigIW2qcidHGMGzhkHMxMqh1oz1FclKLRlkWzQM1FsuROXjPxx3x+Mhg/ToX8NjEPEkbhGlfi3/CXuR7LOJmIRKnJZhyOMwWBtKAzWQ3GJG6NYFKiIRRTmwtRWePgVSjDpnYnF1bkxYEpdH6BojtSQy2r8qmQK4zNQkKNBVS3n8rP1GNoBSF1ybJbtWnTHVJ8dHRe6aXCVpD2X/2lsQsp61ia51Zo7BrfHp3hcRudSmGagjstIS2E2pXEvoNYKZcHM7Vcg3l4PmkQ+KTRLUsNvm4G+lXvxHelXBNlsdcgQ5IvH6jGqhBYz0xreFpAzqlvdo17rHDjqZnFv9LtHvVr9GdEDNbspKY2ExC+NTpHzZvBv1HbCeY8T+4xJjBW7bvgqtpV9ogH6/WDyfvT9ZO1OGmF9xmccVMMBuNP91leQZ0nj1XaFojvBWOk+URj+T+QqAmUCajD1muWvK1Wq8m/VBfelLAcIOUeIm3rq3em9tAZX7XwhVNZqPDc3yuFg6u3yubfHcD9gEaPOWueN3cM2cNfK4Y8LcxgEv+/jy+M+wX/LTaSi+YRcilT8o1q5o4b1zK+Ey89/AhNW0cNDGQAA" /></Footer>{/_ END_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveTasksRequest`

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

Updates a `Task` object with the given `id`.{/_ BEGIN_CRM_TASK_EDIT_SUPPORTED_FIELDS _ /}{/_ END_CRM_TASK_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

<details><summary><code>client.crm.tasks.<a href="/src/api/resources/crm/resources/tasks/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Task` PATCHs.{/_ BEGIN_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XbW/bNhDHv4rBl4YsLXGdLgKGwbW92hmkZI7aLS0C4USdJVqUyJBUnLjodx8kPyTZ0mAr5MZd9lLH05/k74535CdCwWAi1C1xCVU5sUguYuTEJQHojFgEJPMhR+ISD1WCrcHUa/XPJsQiupRSKIPxLwx5rMcKZ8QlTl65dcqCzRjGTqqYdqi4RgUJOttfOrP6H2IRzooM4z6loizMUyIrxw6sPP/yWQ1rQywiQWuTKlEm6RSvStRf0swKseAYJ9iJQK9WxjHHwgDvxGDAuafUUSupx2zVHmLkaDAegoEhGqSGiWI9a2qM1K7jpMilXa/AjvHawcIBZRjlqJ1e9/jw9XGvs1apZ/85TPhPB+35VSSi1+0woTyEsu0F9MYPJgt/nrzyB69u/OW7nr/Mlv48+6EdJtD2Aq93Glx0T4f9g9NHHMLzoz+O378Zvjnx23Q56vrzi4Uf0AMvoFm0nHRP3tLFyfi3G395cegN33X9YNQ7eSsOTgdT7Q2mwuvbNrEIKwwmCqptauJ+/HTfsE6WPqXIxUPfSQ4J3mOyCghI1pFlxBm1ddeGHJaigIW2qcidHGMGzhkHMxMqh1oz1FclKLRlkWzQM1FsuROXjPxx3x+Mhg/ToX8NjEPEkbhGlfi3/CXuR7LOJmIRKnJZhyOMwWBtKAzWQ3GJG6NYFKiIRRTmwtRWePgVSjDpnYnF1bkxYEpdH6BojtSQy2r8qmQK4zNQkKNBVS3n8rP1GNoBSF1ybJbtWnTHVJ8dHRe6aXCVpD2X/2lsQsp61ia51Zo7BrfHp3hcRudSmGagjstIS2E2pXEvoNYKZcHM7Vcg3l4PmkQ+KTRLUsNvm4G+lXvxHelXBNlsdcgQ5IvH6jGqhBYz0xreFpAzqlvdo17rHDjqZnFv9LtHvVr9GdEDNbspKY2ExC+NTpHzZvBv1HbCeY8T+4xJjBW7bvgqtpV9ogH6/WDyfvT9ZO1OGmF9xmccVMMBuNP91leQZ0nj1XaFojvBWOk+URj+T+QqAmUCajD1muWvK1Wq8m/VBfelLAcIOUeIm3rq3em9tAZX7XwhVNZqPDc3yuFg6u3yubfHcD9gEaPOWueN3cM2cNfK4Y8LcxgEv+/jy+M+wX/LTaSi+YRcilT8o1q5o4b1zK+Ey89/AhNW0cNDGQAA" /></Footer>{/_ END_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.MetaPatchRetrieveTasksRequest`

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

Returns metadata for `Task` POSTs.{/_ BEGIN_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XbW/bNhDHv4rBl4YsLXGdLgKGwbW92hmkZI7aLS0C4USdJVqUyJBUnLjodx8kPyTZ0mAr5MZd9lLH05/k74535CdCwWAi1C1xCVU5sUguYuTEJQHojFgEJPMhR+ISD1WCrcHUa/XPJsQiupRSKIPxLwx5rMcKZ8QlTl65dcqCzRjGTqqYdqi4RgUJOttfOrP6H2IRzooM4z6loizMUyIrxw6sPP/yWQ1rQywiQWuTKlEm6RSvStRf0swKseAYJ9iJQK9WxjHHwgDvxGDAuafUUSupx2zVHmLkaDAegoEhGqSGiWI9a2qM1K7jpMilXa/AjvHawcIBZRjlqJ1e9/jw9XGvs1apZ/85TPhPB+35VSSi1+0woTyEsu0F9MYPJgt/nrzyB69u/OW7nr/Mlv48+6EdJtD2Aq93Glx0T4f9g9NHHMLzoz+O378Zvjnx23Q56vrzi4Uf0AMvoFm0nHRP3tLFyfi3G395cegN33X9YNQ7eSsOTgdT7Q2mwuvbNrEIKwwmCqptauJ+/HTfsE6WPqXIxUPfSQ4J3mOyCghI1pFlxBm1ddeGHJaigIW2qcidHGMGzhkHMxMqh1oz1FclKLRlkWzQM1FsuROXjPxx3x+Mhg/ToX8NjEPEkbhGlfi3/CXuR7LOJmIRKnJZhyOMwWBtKAzWQ3GJG6NYFKiIRRTmwtRWePgVSjDpnYnF1bkxYEpdH6BojtSQy2r8qmQK4zNQkKNBVS3n8rP1GNoBSF1ybJbtWnTHVJ8dHRe6aXCVpD2X/2lsQsp61ia51Zo7BrfHp3hcRudSmGagjstIS2E2pXEvoNYKZcHM7Vcg3l4PmkQ+KTRLUsNvm4G+lXvxHelXBNlsdcgQ5IvH6jGqhBYz0xreFpAzqlvdo17rHDjqZnFv9LtHvVr9GdEDNbspKY2ExC+NTpHzZvBv1HbCeY8T+4xJjBW7bvgqtpV9ogH6/WDyfvT9ZO1OGmF9xmccVMMBuNP91leQZ0nj1XaFojvBWOk+URj+T+QqAmUCajD1muWvK1Wq8m/VBfelLAcIOUeIm3rq3em9tAZX7XwhVNZqPDc3yuFg6u3yubfHcD9gEaPOWueN3cM2cNfK4Y8LcxgEv+/jy+M+wX/LTaSi+YRcilT8o1q5o4b1zK+Ey89/AhNW0cNDGQAA" /></Footer>{/_ END_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2XbW/bNhDHv4rBl4YsLXGdLgKGwbW92hmkZI7aLS0C4USdJVqUyJBUnLjodx8kPyTZ0mAr5MZd9lLH05/k74535CdCwWAi1C1xCVU5sUguYuTEJQHojFgEJPMhR+ISD1WCrcHUa/XPJsQiupRSKIPxLwx5rMcKZ8QlTl65dcqCzRjGTqqYdqi4RgUJOttfOrP6H2IRzooM4z6loizMUyIrxw6sPP/yWQ1rQywiQWuTKlEm6RSvStRf0swKseAYJ9iJQK9WxjHHwgDvxGDAuafUUSupx2zVHmLkaDAegoEhGqSGiWI9a2qM1K7jpMilXa/AjvHawcIBZRjlqJ1e9/jw9XGvs1apZ/85TPhPB+35VSSi1+0woTyEsu0F9MYPJgt/nrzyB69u/OW7nr/Mlv48+6EdJtD2Aq93Glx0T4f9g9NHHMLzoz+O378Zvjnx23Q56vrzi4Uf0AMvoFm0nHRP3tLFyfi3G395cegN33X9YNQ7eSsOTgdT7Q2mwuvbNrEIKwwmCqptauJ+/HTfsE6WPqXIxUPfSQ4J3mOyCghI1pFlxBm1ddeGHJaigIW2qcidHGMGzhkHMxMqh1oz1FclKLRlkWzQM1FsuROXjPxx3x+Mhg/ToX8NjEPEkbhGlfi3/CXuR7LOJmIRKnJZhyOMwWBtKAzWQ3GJG6NYFKiIRRTmwtRWePgVSjDpnYnF1bkxYEpdH6BojtSQy2r8qmQK4zNQkKNBVS3n8rP1GNoBSF1ybJbtWnTHVJ8dHRe6aXCVpD2X/2lsQsp61ia51Zo7BrfHp3hcRudSmGagjstIS2E2pXEvoNYKZcHM7Vcg3l4PmkQ+KTRLUsNvm4G+lXvxHelXBNlsdcgQ5IvH6jGqhBYz0xreFpAzqlvdo17rHDjqZnFv9LtHvVr9GdEDNbspKY2ExC+NTpHzZvBv1HbCeY8T+4xJjBW7bvgqtpV9ogH6/WDyfvT9ZO1OGmF9xmccVMMBuNP91leQZ0nj1XaFojvBWOk+URj+T+QqAmUCajD1muWvK1Wq8m/VBfelLAcIOUeIm3rq3em9tAZX7XwhVNZqPDc3yuFg6u3yubfHcD9gEaPOWueN3cM2cNfK4Y8LcxgEv+/jy+M+wX/LTaSi+YRcilT8o1q5o4b1zK+Ey89/AhNW0cNDGQAA" /></Footer>{/_ END_CRM_TASK_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.tasks.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListTasksRequest`

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

Returns a list of `User` objects.{/_ BEGIN_CRM_USER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW/aSBDHvwral8jgSyjpBamqKHCFnOzkwMldWkXWsB7shfWus7uGhKrf/WTzkIfL5a6NwVHVV2jX67/Hv/0zM+svhILBUKpb0iJUxcQisQyQkxY516iIRSBhLsRIWsRBFWKlM3Qq7bMBsYhOk0Qqg8FvDHmg+wonpEXsOFtWSwWbMAzsSDFtUzlHBSHa21tqk/weYhHOxAyDNqUyFeY5kdXCGqxWPhpml7UhFklAaxMpmYbREK9T1P+mORNywTEIsTYGvYqMY4zCAK8FYMC+p1RTK6mn5rJ3CJCjwaALBrpokBomxfqpkTGJbtl2hDyp5xHUA5zbKGxQhlGO2m42jg/fHjdra5X86e/9kL87qE6vx3L8tuqHlPuQVh2P3rjeYOFOwzdu582NuzxvusvZ0p3Ofqn6IVQdz2meepeN02774PSJBf7o6K/jiw/dDydulS57DXd6uXA9euB4dDZeDhonH+nipP/Hjbu8PHS65w3X6zVPPsqD085QO52hdNr1OrEIEwZDBdlratL6/OX+xNosbUqRy4drBzGEeI/JakMgYbUkHXNG67pRhxiWUsBC16mM7RgDBvYZBzORKoZc09fXKSisJyLcoGdSbLmTFum5/bbb6XUf2qE9B8ZhzJG0jErxH/4lrc9k4yZiEYyB8exXhBDmxshmmfaBGjbHzLkIuYNF9sYWEdJgNpS5aiqYYflYYSwN+tmuPhz5CZjobooFxCIG9EyTq2zyOmUKgzNQEKNBlcV39dV6mnUWUQfiBFgoimH+UHPDfJqUwHzN9wVcv5FnBxKdcizWvGvR8m1bul07XOqi4WaSO3Hns5YskaFMkrw8Fwkx1yz1P14e0H46HiXSFEO0n451Is1/Z0237Q0uei/iSaUwQMspWdsm7sX4B0KzMDL8tpgN2Mr9bBYek/4dISk2b8wQkl1y3sB9pojtHpvDqJJaTkyleysgZlRXGkfNygh4HkCBODf6jaNmrr4nC5eZR75/W9zU6Ag5L2YLNmrlp4uX97zfCfSMJRioVRAFmnoru+v24scohxkuzkRhHd5Gbs/lcLcp4xuZ5sl0wkEVbO073XJa51eRNlYQpKI7gZvp/sj1r7jEMUpDUJ2hU+wu6EyVqvhnN/2Yt4cQZ8EUlanv9MqHXFoyySAspJpVCjfyRtnvDJ1Sv2m+SjNfGBYW/VFpnmvu43j4vwHvr+X4hCJAPauMCjuhbLCulf1fF+bQ8/4sP1m8GhN/kpEsPnEsZST3VwBf/Vn86uvftawDiTkeAAA=" /></Footer>{/_ END_CRM_USER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.users.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.ListUsersRequest`

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

Returns a `User` object with the given `id`.{/_ BEGIN_CRM_USER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW/aSBDHvwral8jgSyjpBamqKHCFnOzkwMldWkXWsB7shfWus7uGhKrf/WTzkIfL5a6NwVHVV2jX67/Hv/0zM+svhILBUKpb0iJUxcQisQyQkxY516iIRSBhLsRIWsRBFWKlM3Qq7bMBsYhOk0Qqg8FvDHmg+wonpEXsOFtWSwWbMAzsSDFtUzlHBSHa21tqk/weYhHOxAyDNqUyFeY5kdXCGqxWPhpml7UhFklAaxMpmYbREK9T1P+mORNywTEIsTYGvYqMY4zCAK8FYMC+p1RTK6mn5rJ3CJCjwaALBrpokBomxfqpkTGJbtl2hDyp5xHUA5zbKGxQhlGO2m42jg/fHjdra5X86e/9kL87qE6vx3L8tuqHlPuQVh2P3rjeYOFOwzdu582NuzxvusvZ0p3Ofqn6IVQdz2meepeN02774PSJBf7o6K/jiw/dDydulS57DXd6uXA9euB4dDZeDhonH+nipP/Hjbu8PHS65w3X6zVPPsqD085QO52hdNr1OrEIEwZDBdlratL6/OX+xNosbUqRy4drBzGEeI/JakMgYbUkHXNG67pRhxiWUsBC16mM7RgDBvYZBzORKoZc09fXKSisJyLcoGdSbLmTFum5/bbb6XUf2qE9B8ZhzJG0jErxH/4lrc9k4yZiEYyB8exXhBDmxshmmfaBGjbHzLkIuYNF9sYWEdJgNpS5aiqYYflYYSwN+tmuPhz5CZjobooFxCIG9EyTq2zyOmUKgzNQEKNBlcV39dV6mnUWUQfiBFgoimH+UHPDfJqUwHzN9wVcv5FnBxKdcizWvGvR8m1bul07XOqi4WaSO3Hns5YskaFMkrw8Fwkx1yz1P14e0H46HiXSFEO0n451Is1/Z0237Q0uei/iSaUwQMspWdsm7sX4B0KzMDL8tpgN2Mr9bBYek/4dISk2b8wQkl1y3sB9pojtHpvDqJJaTkyleysgZlRXGkfNygh4HkCBODf6jaNmrr4nC5eZR75/W9zU6Ag5L2YLNmrlp4uX97zfCfSMJRioVRAFmnoru+v24scohxkuzkRhHd5Gbs/lcLcp4xuZ5sl0wkEVbO073XJa51eRNlYQpKI7gZvp/sj1r7jEMUpDUJ2hU+wu6EyVqvhnN/2Yt4cQZ8EUlanv9MqHXFoyySAspJpVCjfyRtnvDJ1Sv2m+SjNfGBYW/VFpnmvu43j4vwHvr+X4hCJAPauMCjuhbLCulf1fF+bQ8/4sP1m8GhN/kpEsPnEsZST3VwBf/Vn86uvftawDiTkeAAA=" /></Footer>{/_ END_CRM_USER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.crm.RetrieveUsersRequest`

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

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.{/_ BEGIN_CRM_USER_CREATE_SUPPORTED_FIELDS _ /}{/_ END_CRM_USER_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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
    body: {
        reason: "GENERAL_CUSTOMER_REQUEST",
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

**modelId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.crm.IgnoreCreateUsersRequest`

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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_CRM_USER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW/aSBDHvwral8jgSyjpBamqKHCFnOzkwMldWkXWsB7shfWus7uGhKrf/WTzkIfL5a6NwVHVV2jX67/Hv/0zM+svhILBUKpb0iJUxcQisQyQkxY516iIRSBhLsRIWsRBFWKlM3Qq7bMBsYhOk0Qqg8FvDHmg+wonpEXsOFtWSwWbMAzsSDFtUzlHBSHa21tqk/weYhHOxAyDNqUyFeY5kdXCGqxWPhpml7UhFklAaxMpmYbREK9T1P+mORNywTEIsTYGvYqMY4zCAK8FYMC+p1RTK6mn5rJ3CJCjwaALBrpokBomxfqpkTGJbtl2hDyp5xHUA5zbKGxQhlGO2m42jg/fHjdra5X86e/9kL87qE6vx3L8tuqHlPuQVh2P3rjeYOFOwzdu582NuzxvusvZ0p3Ofqn6IVQdz2meepeN02774PSJBf7o6K/jiw/dDydulS57DXd6uXA9euB4dDZeDhonH+nipP/Hjbu8PHS65w3X6zVPPsqD085QO52hdNr1OrEIEwZDBdlratL6/OX+xNosbUqRy4drBzGEeI/JakMgYbUkHXNG67pRhxiWUsBC16mM7RgDBvYZBzORKoZc09fXKSisJyLcoGdSbLmTFum5/bbb6XUf2qE9B8ZhzJG0jErxH/4lrc9k4yZiEYyB8exXhBDmxshmmfaBGjbHzLkIuYNF9sYWEdJgNpS5aiqYYflYYSwN+tmuPhz5CZjobooFxCIG9EyTq2zyOmUKgzNQEKNBlcV39dV6mnUWUQfiBFgoimH+UHPDfJqUwHzN9wVcv5FnBxKdcizWvGvR8m1bul07XOqi4WaSO3Hns5YskaFMkrw8Fwkx1yz1P14e0H46HiXSFEO0n451Is1/Z0237Q0uei/iSaUwQMspWdsm7sX4B0KzMDL8tpgN2Mr9bBYek/4dISk2b8wQkl1y3sB9pojtHpvDqJJaTkyleysgZlRXGkfNygh4HkCBODf6jaNmrr4nC5eZR75/W9zU6Ag5L2YLNmrlp4uX97zfCfSMJRioVRAFmnoru+v24scohxkuzkRhHd5Gbs/lcLcp4xuZ5sl0wkEVbO073XJa51eRNlYQpKI7gZvp/sj1r7jEMUpDUJ2hU+wu6EyVqvhnN/2Yt4cQZ8EUlanv9MqHXFoyySAspJpVCjfyRtnvDJ1Sv2m+SjNfGBYW/VFpnmvu43j4vwHvr+X4hCJAPauMCjuhbLCulf1fF+bQ8/4sP1m8GhN/kpEsPnEsZST3VwBf/Vn86uvftawDiTkeAAA=" /></Footer>{/_ END_CRM_USER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.crm.users.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.crm.RemoteFieldClassesListUsersRequest`

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

## Hris

<details><summary><code>client.hris.<a href="/src/api/resources/hris/client/Client.ts">fieldMappingsCreate</a>({ ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.hris.fieldMappingsCreate({
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

**requestOptions:** `Hris.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.<a href="/src/api/resources/hris/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.hris.fieldMappingsDestroy("field_mapping_id");
```

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

**request:** `Merge.hris.FieldMappingsDestroyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Hris.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.<a href="/src/api/resources/hris/client/Client.ts">fieldMappingsPartialUpdate</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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
await client.hris.fieldMappingsPartialUpdate("field_mapping_id");
```

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

**requestOptions:** `Hris.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.<a href="/src/api/resources/hris/client/Client.ts">remoteFieldsRetrieve</a>({ ...params }) -> Merge.RemoteFieldApiResponse</code></summary>
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
await client.hris.remoteFieldsRetrieve();
```

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

**requestOptions:** `Hris.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.hris.<a href="/src/api/resources/hris/client/Client.ts">targetFieldsRetrieve</a>() -> Merge.ExternalTargetFieldApiResponse</code></summary>
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
await client.hris.targetFieldsRetrieve();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Hris.RequestOptions`

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

<details><summary><code>client.hris.accountToken.<a href="/src/api/resources/hris/resources/accountToken/client/Client.ts">retrieve</a>(publicToken, { ...params }) -> Merge.AccountToken</code></summary>
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

**request:** `Merge.hris.AccountTokenRetrieveRequest`

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

<details><summary><code>client.hris.asyncPassthrough.<a href="/src/api/resources/hris/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId, { ...params }) -> Merge.RemoteResponse</code></summary>
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

**request:** `Merge.hris.AsyncPassthroughRetrieveRequest`

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
await client.hris.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

## Hris BankInfo

<details><summary><code>client.hris.bankInfo.<a href="/src/api/resources/hris/resources/bankInfo/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedBankInfoList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BankInfo` objects.{/_ BEGIN_HRIS_BANKINFO_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WYa3PaOBSG/wqjjwzgUsp2w8xOh0vAJMFhgew228l4DvLBFsiSkeVw6fS/7xhDGrrpTjvRQrJ8w0J+ZT16dY6OPhMKGn2pVqRGAsViUiCh9JCTGmmAmHXFRJICgYg5ECKpkR4qH3P2oDvM1ftdUiBxEkVSafTaDLkX2wonpEasMO1XTASbMPSsVNmi8h4V+Gg9vFKcbN4hBcKZmKFXp1QmQv+bSNaxCFnPbx7Tv2NNCiSCONaBkokfDHCeYPw9zZmQC46ej8UxxNmXcQxRaOBFDzRYj5SKKpN6qi2dg4ccNXot0NBCjVQzKbajBlpHcc2yAuRRafMFJQ/vLRQWKM0ox9iqVs7evj+rFrcqm9E/uD7/rZyfzsdy/D7v+pS7kOR7I7p0Rt2FM/XfOc13S2d9U3XWs7Uznb3Juz7ke6Ne9Xp0W7lu1cvXT3Rwh798PPuj0WpcOHm6Pq8409uFM6Ll3ojOxutu5aJDFxf270tnffu217qpOKPz6kVHlq+bg7jXHMhevVQiBcKERl9BOs2Y1D59ftywdUtDIegA9zt3Q/DxEZRsRSBixSgZc0ZLcaUEIaylgEVcojK0QvQYWFsxdzhPQKF7JX3ptm/P/vKnYWka+bsVYFI84Cc1cu7Ydad53tp3Rf0eGIcxR1LTKsF/2JjUPpGtqVyRhGNUpEDGIGauSGdWIBhGXK4w/akwlBrddMH2n9wIdJA2yUQz4e+E7tJO84Qp9PqgIESNKh3w7kvhKYbNABRnhhhuxezBY4qlSPxv6bWBaqkYcDP8HuT+c35HwqUwDjRCaAjXTm6L64U7LWti3rMx2sA4rnL2wAzGPgc9kSrMZF178MI57rMrkESweZKCRaHTvPvzPNlYjg2zTCUPw3HXoFcRHi0Q2oM/pZrFhiFmoofB+OOsfhZNEgIIQ2i2Ynv54QWcTmh6eELPBX3YSNgdSn6PnlnbsXgjekK79xLFVJqFuJF04xeQl59F5iqhFMyQ2UgdZrMe51jSh1UTIg1MGLISrGimd1Af/eCOfC4qGuDSHKcAl4evub4hddxDXEpBGiosdkEs0zxVmMoszGij+RK38kFDJJeU6ZWxnZ/J7d1aXXXCctsTp2hblBFHY3XxVs2tU4px/DouGZ5nTw7CA1Pm3AXRTPSVV3HDej83TDZGyG7pDBV0+5p7+7hBP0q//eZYR8anajoDIXCkmIM6Zw9yO4OYATlSTKB2yyeaWW4uO7m+MlTE3Vx2TjtPpzQHCJ6hUPiVp+sj2L/O+6+Lq/FEnd7rGU80W9HXjPb7GO++/A3p7eqqTR8AAA==" /></Footer>{/_ END_HRIS_BANKINFO_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.bankInfo.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `BankInfo` object with the given `id`.{/_ BEGIN_HRIS_BANKINFO_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WYa3PaOBSG/wqjjwzgUsp2w8xOh0vAJMFhgew228l4DvLBFsiSkeVw6fS/7xhDGrrpTjvRQrJ8w0J+ZT16dY6OPhMKGn2pVqRGAsViUiCh9JCTGmmAmHXFRJICgYg5ECKpkR4qH3P2oDvM1ftdUiBxEkVSafTaDLkX2wonpEasMO1XTASbMPSsVNmi8h4V+Gg9vFKcbN4hBcKZmKFXp1QmQv+bSNaxCFnPbx7Tv2NNCiSCONaBkokfDHCeYPw9zZmQC46ej8UxxNmXcQxRaOBFDzRYj5SKKpN6qi2dg4ccNXot0NBCjVQzKbajBlpHcc2yAuRRafMFJQ/vLRQWKM0ox9iqVs7evj+rFrcqm9E/uD7/rZyfzsdy/D7v+pS7kOR7I7p0Rt2FM/XfOc13S2d9U3XWs7Uznb3Juz7ke6Ne9Xp0W7lu1cvXT3Rwh798PPuj0WpcOHm6Pq8409uFM6Ll3ojOxutu5aJDFxf270tnffu217qpOKPz6kVHlq+bg7jXHMhevVQiBcKERl9BOs2Y1D59ftywdUtDIegA9zt3Q/DxEZRsRSBixSgZc0ZLcaUEIaylgEVcojK0QvQYWFsxdzhPQKF7JX3ptm/P/vKnYWka+bsVYFI84Cc1cu7Ydad53tp3Rf0eGIcxR1LTKsF/2JjUPpGtqVyRhGNUpEDGIGauSGdWIBhGXK4w/akwlBrddMH2n9wIdJA2yUQz4e+E7tJO84Qp9PqgIESNKh3w7kvhKYbNABRnhhhuxezBY4qlSPxv6bWBaqkYcDP8HuT+c35HwqUwDjRCaAjXTm6L64U7LWti3rMx2sA4rnL2wAzGPgc9kSrMZF178MI57rMrkESweZKCRaHTvPvzPNlYjg2zTCUPw3HXoFcRHi0Q2oM/pZrFhiFmoofB+OOsfhZNEgIIQ2i2Ynv54QWcTmh6eELPBX3YSNgdSn6PnlnbsXgjekK79xLFVJqFuJF04xeQl59F5iqhFMyQ2UgdZrMe51jSh1UTIg1MGLISrGimd1Af/eCOfC4qGuDSHKcAl4evub4hddxDXEpBGiosdkEs0zxVmMoszGij+RK38kFDJJeU6ZWxnZ/J7d1aXXXCctsTp2hblBFHY3XxVs2tU4px/DouGZ5nTw7CA1Pm3AXRTPSVV3HDej83TDZGyG7pDBV0+5p7+7hBP0q//eZYR8anajoDIXCkmIM6Zw9yO4OYATlSTKB2yyeaWW4uO7m+MlTE3Vx2TjtPpzQHCJ6hUPiVp+sj2L/O+6+Lq/FEnd7rGU80W9HXjPb7GO++/A3p7eqqTR8AAA==" /></Footer>{/_ END_HRIS_BANKINFO_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Benefit` objects.{/_ BEGIN_HRIS_BENEFIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91XYXPaOBD9K4w+MgYfpbQNMzc3EBIgLcZHyF1znYxmLS1GIEtGlkNMp//9xpim0Es704tJpv1mSbtP0ntv1/ZHwsBiqE1G2mRuREIcEmmOkrRJFxXOhCUOgVh4ECFpkxGaECuDyfCy0vGHxCFJGsfaWOTnAiVPBgZnpE3cKI+rpUrMBHI3B3aZvkUDIbr3KbXZNoc4RAq1RN5hTKfKfg+kCKxBEfnVMF9O8vPGkCR2bnQazie4SjH5FuZS6bVEHmItgKQ4mcQIlQVZ42DB3UOqmQLqobn8DhwlWuQ9sNBDi8wKrXa7zq2Nk7brzlHG9e0J6hxvXVQuGCuYxMRtNU9evD5p1XYo293/oKH8vVFdrAIdvK7SkEkKaXU0ZXfedLj2FuFL7/Tlnbe5anmb5cZbLH+r0hCqo+moNZ5eN8e9TmP8QAC9fPX+5K9ur3vhVdnmrOktrtfelDVGU7YMNsPmRZ+tLwZ/3nmb6xej3lXTm561Lvq6MT6dJKPTiR516nXiEKEshgbyayak/eHj/sTOLZ2eX/lbm+VMG4YVT68P04YRhLhHT6ENxKIWp4EUrJ406xDBRitYJ3WmIzdCLsDt9Hx6D0s9vaaXqxQM1mMVfhZCaHWvAmmTM2/Q8U7Peofm6NyCkBBIJG1rUvyPm0n7AwmKKqCxBEVtFiNxCNNRDCqjTCtrRJBuN3EIRrHUGeLe4zdCDA3uiwsVpxxsnhUbfSs4Gqpy/hxiMNIW81U4HNEY7DyvPgvGFtk3ecAqFQa5DwYitGjyC9x8ch6URlo0UPEhM1rKknTZYu7EoO90qJ9OEZCMMs3xKxm+cHtELrsQBVoPJuWw+BntgMdFXD6Pj3Dxs1i2axDsHEtiuQDbJ5meX5/8Ey6iX4js3ZTgjyK+nyZWl0O7L8HOtIm2kDQpyBc52M/ZvB+hyA+KMJhUfDBWoSlHicFkB3f0PvM/RXh224+zxKIpq60XaDvLH8Xse+Q9nS19yNgc70rqDgXY83xBHOmb7onM6kMmNRM2K02JAu7gBfmuHzXOuXoyTY5P/h7hDkmVWKW5Eqhs/n9oflSEq7f9im9KelVeve0fs1uUXAPP3q1z7icIvKQC+MI+DREGb1b+UVT4ebrOzad/AZKGE/QsEgAA" /></Footer>{/_ END_HRIS_BENEFIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.benefits.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `Benefit` object with the given `id`.{/_ BEGIN_HRIS_BENEFIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91XYXPaOBD9K4w+MgYfpbQNMzc3EBIgLcZHyF1znYxmLS1GIEtGlkNMp//9xpim0Es704tJpv1mSbtP0ntv1/ZHwsBiqE1G2mRuREIcEmmOkrRJFxXOhCUOgVh4ECFpkxGaECuDyfCy0vGHxCFJGsfaWOTnAiVPBgZnpE3cKI+rpUrMBHI3B3aZvkUDIbr3KbXZNoc4RAq1RN5hTKfKfg+kCKxBEfnVMF9O8vPGkCR2bnQazie4SjH5FuZS6bVEHmItgKQ4mcQIlQVZ42DB3UOqmQLqobn8DhwlWuQ9sNBDi8wKrXa7zq2Nk7brzlHG9e0J6hxvXVQuGCuYxMRtNU9evD5p1XYo293/oKH8vVFdrAIdvK7SkEkKaXU0ZXfedLj2FuFL7/Tlnbe5anmb5cZbLH+r0hCqo+moNZ5eN8e9TmP8QAC9fPX+5K9ur3vhVdnmrOktrtfelDVGU7YMNsPmRZ+tLwZ/3nmb6xej3lXTm561Lvq6MT6dJKPTiR516nXiEKEshgbyayak/eHj/sTOLZ2eX/lbm+VMG4YVT68P04YRhLhHT6ENxKIWp4EUrJ406xDBRitYJ3WmIzdCLsDt9Hx6D0s9vaaXqxQM1mMVfhZCaHWvAmmTM2/Q8U7Peofm6NyCkBBIJG1rUvyPm0n7AwmKKqCxBEVtFiNxCNNRDCqjTCtrRJBuN3EIRrHUGeLe4zdCDA3uiwsVpxxsnhUbfSs4Gqpy/hxiMNIW81U4HNEY7DyvPgvGFtk3ecAqFQa5DwYitGjyC9x8ch6URlo0UPEhM1rKknTZYu7EoO90qJ9OEZCMMs3xKxm+cHtELrsQBVoPJuWw+BntgMdFXD6Pj3Dxs1i2axDsHEtiuQDbJ5meX5/8Ey6iX4js3ZTgjyK+nyZWl0O7L8HOtIm2kDQpyBc52M/ZvB+hyA+KMJhUfDBWoSlHicFkB3f0PvM/RXh224+zxKIpq60XaDvLH8Xse+Q9nS19yNgc70rqDgXY83xBHOmb7onM6kMmNRM2K02JAu7gBfmuHzXOuXoyTY5P/h7hDkmVWKW5Eqhs/n9oflSEq7f9im9KelVeve0fs1uUXAPP3q1z7icIvKQC+MI+DREGb1b+UVT4ebrOzad/AZKGE/QsEgAA" /></Footer>{/_ END_HRIS_BENEFIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Company` objects.{/_ BEGIN_HRIS_COMPANY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+Wb72/iNhiA/xXkjxU/jnLdtUjTRKEUuJJmQLfrnarIJC/B4Nip7ZTC6f73yUmAdnc3jc6QNvvUkoQn+Mn72q+N+YpcrMDnYonqaCqIREUUcA8oqqMmD0LMlqiIcEgsHACqoz4IHwqdQXdYaNhdVEQyCkMuFHhtAtSTHQETVEeVQF9XihiZEPAqGlxx+QMI7ENl85bSJH4PKiJK2By8huvyiKl/giQXlnBy5d9e6tNSoSIKsZRqKnjkTwdwH4H8GXPO+IKC50NpjGXyySgEwBSmJQ8rXHlCKokE9aNjug0eUFDgtbDCLVDgKsJZetepUqGsVypToGE5/gRlDx4qwCpYKOJSkJWT2tnxh7OTUkqJ7/6b49Nfq0ez+zEffzhyfJc6ODrqj9xHa9RdWDP/vdV8/2itbk6s1XxlzebvjhwfH/VH/ZPr0W3tutWoXv/gAmf4y6ezP85b5z3ryF1d1KzZ7cIaudX+yJ2PV91a79Jd9Dq/P1qr2+N+66ZmjS5Oepe8et0cyH5zwPuNchkVEWEKfIF1MyWqf/n69EAaLR/klExiOU/OdQPswxMpyRPBISmF0ZgStyxrZRzgFWd4IcsuDyoBeARXbIrVhIsghTq24CEItXSOu1v49mhteB9hAdsD77f/VU9OHRmfLofMXz87wtnmwaE6urA6Dat50XoeT40HTCgeU0B1JSL4LgFQ/QvyiAwpXjpMWygiCELKlwBxoIOP6fqEgIArcPSjfv7KCbGabg8RD93pF/cREeDZWOAAFAh9r7tvxR+Jb7Tswp9czCdcuFCw+MLMI2i0bGeDdSy+cIaZWHy5F6pA4IKNl4JTakhKzExNOFfc5xnpMBI55wKwmoIZNSnsqRunfXv22Z8F5VmYlSPDxpqwwozpQdGMtJRXOlwHdaBOqTnFghJDoZXCOoNXknh7cKU6PDQnS9OOMxr19uephcWCsDF/NCNqgztg9hkZ2FoAhoazdZmlifmJk4v4LrqyL3RAcDOqttCShmYbM3uQdgkMBHELw/bINmPMT4iOnKgw7YucoFd7fNe9OYg2wuS/KMhfYCqSylBQrfMvRq4dEQ17RYb2EGwdTCgsjVVRa40J1ukM8pOWHTLmY8OWNHIvhoyMbp1BwcZCMRBmmt0ZpLhnxeOBZyS75NWuvqIAY2Zo3SWFvRVV/yHMukyGIIhaFmwBATEVbeskI2t87qpwvQBHKTHVd29wB4+5zEa/7pDTB/AMB5yMofmuG3pREDYpjwy50zhX43KXpL1IqgUXc0PDwgb3PxgYPgKbGS7vY2S2Mba7h6vIdbEZDzEqP4vA+g9dmlGTsN5OWkWM3EdaGjClv1YVO8sLxsJQrxSjslwSPlCPdD2ZEJcAU2a0bXC5G/Wu58pQj6VJB9SzRyUMrrhPmCEtKS2TyNm15UupQJiapiS0Q7b7+yJ7f1Fi42UThwqbihMbL92El++tF7qdUzD0fVQKO/iAltlsTjeYB2ZL7YSZxwR1ueElqjBm5rhLaxNDFdOT4JqQ/JVNNl5S7hJlaEqzwT3bCnR1GVTbHnudcbarMOAhBWPfXqU0p+G6IGUm2+x2FUAx87CpeFlnVwJ92/W2LTgl2NRUbU3Lcn1gf64G8MBppApJApgxljLf2l7VAQlDSuIPazCjREp1xOD0sTa2clqFDxt2YRjFnWcbu4qbWl96znw2mp27n7jffve61+peLhRkcguDsZgw8xqBJLmnoQp9g8uoGzuQtZEgFhgaKUeCMFC5FlXQO2PSbDIpzanme5nh5uNlwTa1DfTm42W2M+YDShsA9gzV+Fttjg+4c3pv51uf/uGU8QlSCs3PwsNnoIZXaDRxz1sbf97Gu29/AQX/gkNiOwAA" /></Footer>{/_ END_HRIS_COMPANY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.companies.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `Company` object with the given `id`.{/_ BEGIN_HRIS_COMPANY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+Wb72/iNhiA/xXkjxU/jnLdtUjTRKEUuJJmQLfrnarIJC/B4Nip7ZTC6f73yUmAdnc3jc6QNvvUkoQn+Mn72q+N+YpcrMDnYonqaCqIREUUcA8oqqMmD0LMlqiIcEgsHACqoz4IHwqdQXdYaNhdVEQyCkMuFHhtAtSTHQETVEeVQF9XihiZEPAqGlxx+QMI7ENl85bSJH4PKiJK2By8huvyiKl/giQXlnBy5d9e6tNSoSIKsZRqKnjkTwdwH4H8GXPO+IKC50NpjGXyySgEwBSmJQ8rXHlCKokE9aNjug0eUFDgtbDCLVDgKsJZetepUqGsVypToGE5/gRlDx4qwCpYKOJSkJWT2tnxh7OTUkqJ7/6b49Nfq0ez+zEffzhyfJc6ODrqj9xHa9RdWDP/vdV8/2itbk6s1XxlzebvjhwfH/VH/ZPr0W3tutWoXv/gAmf4y6ezP85b5z3ryF1d1KzZ7cIaudX+yJ2PV91a79Jd9Dq/P1qr2+N+66ZmjS5Oepe8et0cyH5zwPuNchkVEWEKfIF1MyWqf/n69EAaLR/klExiOU/OdQPswxMpyRPBISmF0ZgStyxrZRzgFWd4IcsuDyoBeARXbIrVhIsghTq24CEItXSOu1v49mhteB9hAdsD77f/VU9OHRmfLofMXz87wtnmwaE6urA6Dat50XoeT40HTCgeU0B1JSL4LgFQ/QvyiAwpXjpMWygiCELKlwBxoIOP6fqEgIArcPSjfv7KCbGabg8RD93pF/cREeDZWOAAFAh9r7tvxR+Jb7Tswp9czCdcuFCw+MLMI2i0bGeDdSy+cIaZWHy5F6pA4IKNl4JTakhKzExNOFfc5xnpMBI55wKwmoIZNSnsqRunfXv22Z8F5VmYlSPDxpqwwozpQdGMtJRXOlwHdaBOqTnFghJDoZXCOoNXknh7cKU6PDQnS9OOMxr19uephcWCsDF/NCNqgztg9hkZ2FoAhoazdZmlifmJk4v4LrqyL3RAcDOqttCShmYbM3uQdgkMBHELw/bINmPMT4iOnKgw7YucoFd7fNe9OYg2wuS/KMhfYCqSylBQrfMvRq4dEQ17RYb2EGwdTCgsjVVRa40J1ukM8pOWHTLmY8OWNHIvhoyMbp1BwcZCMRBmmt0ZpLhnxeOBZyS75NWuvqIAY2Zo3SWFvRVV/yHMukyGIIhaFmwBATEVbeskI2t87qpwvQBHKTHVd29wB4+5zEa/7pDTB/AMB5yMofmuG3pREDYpjwy50zhX43KXpL1IqgUXc0PDwgb3PxgYPgKbGS7vY2S2Mba7h6vIdbEZDzEqP4vA+g9dmlGTsN5OWkWM3EdaGjClv1YVO8sLxsJQrxSjslwSPlCPdD2ZEJcAU2a0bXC5G/Wu58pQj6VJB9SzRyUMrrhPmCEtKS2TyNm15UupQJiapiS0Q7b7+yJ7f1Fi42UThwqbihMbL92El++tF7qdUzD0fVQKO/iAltlsTjeYB2ZL7YSZxwR1ueElqjBm5rhLaxNDFdOT4JqQ/JVNNl5S7hJlaEqzwT3bCnR1GVTbHnudcbarMOAhBWPfXqU0p+G6IGUm2+x2FUAx87CpeFlnVwJ92/W2LTgl2NRUbU3Lcn1gf64G8MBppApJApgxljLf2l7VAQlDSuIPazCjREp1xOD0sTa2clqFDxt2YRjFnWcbu4qbWl96znw2mp27n7jffve61+peLhRkcguDsZgw8xqBJLmnoQp9g8uoGzuQtZEgFhgaKUeCMFC5FlXQO2PSbDIpzanme5nh5uNlwTa1DfTm42W2M+YDShsA9gzV+Fttjg+4c3pv51uf/uGU8QlSCs3PwsNnoIZXaDRxz1sbf97Gu29/AQX/gkNiOwAA" /></Footer>{/_ END_HRIS_COMPANY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Dependent` objects.{/_ BEGIN_HRIS_DEPENDENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81T70/bMBD9V6r7WKXJoHSMSNNUaNcfrKErZRpCKLrE18StY6e2Q6GI/31KWxhsMI2BND7e+e753rt31xCjpUTpK/Ah1dyAA5liJMCHFuUkGUkLDmDOA8wIfBiQTqjSHfWOK81hDxwwRZ4rbYl95iSY6WqagA9eVtbVCsknnJhXQnuxuiCNCXl3LbXJqgccEFzOiDXjWBXS/glkXVjDdeUvYflsynlzNMamWhVJOqJ5QeYpzJlUC0EsoVqEZj2ZoIykRVFjaNG7h1TTa6jHciUHRoIssRZabJGl2HIlN7+m1ubG97yURO6uJnAZXXgkPdSWx4KM16jvbe/uNWoblNXvn8JEfNyqTueRinarYRKLEIvqYBxfBuPeIpgmO8HBzmWwPGkEy9kymM7eVcMEq4PxoHE0Pq0ftZpbR48UhMfvv+9922/t94NqvGzXg+npIhjHW4NxPIuWvXq/Ey/63a+XwfJ0e9A6qQfjdqPfUVtHByMzOBipQdN1wQEuLSUaS5oG/LPr+4mNW/Yxi5Tqjh5W9zJM6J4q65Vgzmt5EQkeu6buYoZLJXFh3FhlXkaMo3eLFh7PC9QUflGJcqd5cqs9V/JOePChHXSbwUG79dAPzQvkAiNB4Ftd0G8GBv8MGFoK1SSMuLYpOEBZLtQVETgw4drYUJb0HEjKA9HgQKoyCoWKV/RKsiY0ttgcj8CfHRlnTNBtlKdKUiiLLFqhaBJrNVOer8JMWQpLIzyMwhxXY21SnJVnaCScl6l5wTWxIWrMyJIu+ZzfOI8tp4VXE6Vjep3lDAXaidLZLaqbyzewmCcX8Vyt/0Hf7qgyRG3lepCXK9wdbeDejP9fzb/PVPbksFMZEbKr1xH25LATmrWkCWH3w3z4X837Epv+jaTnNz8A9byc3PcHAAA=" /></Footer>{/_ END_HRIS_DEPENDENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.dependents.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `Dependent` object with the given `id`.{/_ BEGIN_HRIS_DEPENDENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81T70/bMBD9V6r7WKXJoHSMSNNUaNcfrKErZRpCKLrE18StY6e2Q6GI/31KWxhsMI2BND7e+e753rt31xCjpUTpK/Ah1dyAA5liJMCHFuUkGUkLDmDOA8wIfBiQTqjSHfWOK81hDxwwRZ4rbYl95iSY6WqagA9eVtbVCsknnJhXQnuxuiCNCXl3LbXJqgccEFzOiDXjWBXS/glkXVjDdeUvYflsynlzNMamWhVJOqJ5QeYpzJlUC0EsoVqEZj2ZoIykRVFjaNG7h1TTa6jHciUHRoIssRZabJGl2HIlN7+m1ubG97yURO6uJnAZXXgkPdSWx4KM16jvbe/uNWoblNXvn8JEfNyqTueRinarYRKLEIvqYBxfBuPeIpgmO8HBzmWwPGkEy9kymM7eVcMEq4PxoHE0Pq0ftZpbR48UhMfvv+9922/t94NqvGzXg+npIhjHW4NxPIuWvXq/Ey/63a+XwfJ0e9A6qQfjdqPfUVtHByMzOBipQdN1wQEuLSUaS5oG/LPr+4mNW/Yxi5Tqjh5W9zJM6J4q65Vgzmt5EQkeu6buYoZLJXFh3FhlXkaMo3eLFh7PC9QUflGJcqd5cqs9V/JOePChHXSbwUG79dAPzQvkAiNB4Ftd0G8GBv8MGFoK1SSMuLYpOEBZLtQVETgw4drYUJb0HEjKA9HgQKoyCoWKV/RKsiY0ttgcj8CfHRlnTNBtlKdKUiiLLFqhaBJrNVOer8JMWQpLIzyMwhxXY21SnJVnaCScl6l5wTWxIWrMyJIu+ZzfOI8tp4VXE6Vjep3lDAXaidLZLaqbyzewmCcX8Vyt/0Hf7qgyRG3lepCXK9wdbeDejP9fzb/PVPbksFMZEbKr1xH25LATmrWkCWH3w3z4X837Epv+jaTnNz8A9byc3PcHAAA=" /></Footer>{/_ END_HRIS_DEPENDENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `EmployeePayrollRun` objects.{/_ BEGIN_HRIS_EMPLOYEEPAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abW/bNhD+KwI/bYFfmqZpVwPD4NpJnKRWNNvZWhSFcKYuMmOKlCkqfin63wdKcmylzlJnsvOyfJOO1EOK9zx35EnfCAWNvlRTUiMDxSJSIoH0kJMaOQhCLqeIDkyV5LwTC1IiEDIbAiQ10kblo9XqHHetunNMSiSKw1Aqjd4hQ+5FLYUXpEaqgelXjgW7YOhVzRhVKq9QgY/V60fKF8kzpEQ4E0P06pTKWOh/A0k7liHteePWNEealEgIUaQHSsb+oIOjGKPbMIdCjjl6Ppb7EKUz4xig0MDLHmioLiGVVQq1ymbewUOOGr0maGiiRqqZFNmoA63DqFatDpCHlWQGFQ+vqiiqoDSjHKPq/t771+/e75czlGT0P1yf/767cznqy/67Hden3IV4p92jE7t3PLYv/Td2483Enp3v27PhzL4cvtpxfdhp99r7Z73Pe2fN+u7Zig5u9+2n9399aH44sXfo7GDPvvw8tnt0t92jw/7seO/kiI5PWn9O7Nnn1+3m+Z7dO9g/OZK7Z41O1G50ZLteqZASYUKjr8C8ZkRqX74tGzK21JuO1Tm3852PA/BxaVFSj0DIymHc54xWor0KBDCTAsZRhcqgGqDHoFpvOm7n3Ha7oxgUVkLhzxedSXG94obCdqtuNw6aeSLUr4Bx6HMkNa1i/IG5pPaFHIASTPgVCAydSOnagJkq3DCVhasSXcybFQZSo2t8ttrqhqAHpEQwbTJ0mUOaS+GZXuYyj7QCITMxz2hPg9Lpk19NyyhmCj0HFASoUZlX+vq9dJtj/pZqeCEVRcuW4+JcdA3r2nK8SWc10YsTlIV3vLmJlFY155236CDMoiwb8l5YaZ/7476U0dPQjNmDyeJRc3PLY0tNytUwyUzZzOkA6XBOoetFiH6GcL6SUWQGIyUiUGdX+cHvJOUSEUtEwwTNeLFgo9gwFYU20VatS9ImTBMiFcNNh4O+kCqYoz7NAHKjKQkDNyiVI8Od/s/P5/4RJd03mNRptVDJYny2AC0b0HK0uWiyenUWithSYD6KI13Q4s0Jn0C66dK5zIBtOBxTGYQgpndF4ycUrNeWZ6HR3VzmZ3DDMh/9odPALRKYp4Q1pdBifdkvVgoJ5LMN/KudvIbX1nTQmQLK0WpwGXtWKw5AWA0ImQZutUGAnxykrF9ajfavxbgxHdDdYBZ4CkFs0fjjDmv7IW5+u2ouWw5/xrxqGoWHxS0HwrNppFG1OgWJKEHbpIgec5Zdl1OrGXLvDHkv/zswpQOcFJQKU7DsYO5+lL58xqfzHxpzefMhk/XT2Ro+ku2gA1MuKdPTwnSQwi0rwf14FOweeuJlb/F/18uSOZnN8zpaORyEB0UpKTtcZaAb0U6+pnW/yvn9izKOkpxBwrwi1itDy6Xgy/AJpODnWev+73Lqgo+WgzLkBdWqDaCbAs5ZQifdY3p6+bQ37GsXL5Y9tkGBd+uO1Y0pxSg6BKqligryYw4zt9P4QD9J//DVRoS/JZ2u96HhEabBnmI2FhTVe4oJ1I9j4/jTO8MiC0hbrQdtpczzoNw8Pz2ynKK+o52fHr1UTR/ryaYoxbwccW7qp4PgFXTIWSjI9RFav42cFyU9WyW91A/uEJf5x6vw+kEG+oyr0Y/p29xDEzJHwnV+Ffv6/R8pI4n+vywAAA==" /></Footer>{/_ END_HRIS_EMPLOYEEPAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employeePayrollRuns.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns an `EmployeePayrollRun` object with the given `id`.{/_ BEGIN_HRIS_EMPLOYEEPAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abW/bNhD+KwI/bYFfmqZpVwPD4NpJnKRWNNvZWhSFcKYuMmOKlCkqfin63wdKcmylzlJnsvOyfJOO1EOK9zx35EnfCAWNvlRTUiMDxSJSIoH0kJMaOQhCLqeIDkyV5LwTC1IiEDIbAiQ10kblo9XqHHetunNMSiSKw1Aqjd4hQ+5FLYUXpEaqgelXjgW7YOhVzRhVKq9QgY/V60fKF8kzpEQ4E0P06pTKWOh/A0k7liHteePWNEealEgIUaQHSsb+oIOjGKPbMIdCjjl6Ppb7EKUz4xig0MDLHmioLiGVVQq1ymbewUOOGr0maGiiRqqZFNmoA63DqFatDpCHlWQGFQ+vqiiqoDSjHKPq/t771+/e75czlGT0P1yf/767cznqy/67Hden3IV4p92jE7t3PLYv/Td2483Enp3v27PhzL4cvtpxfdhp99r7Z73Pe2fN+u7Zig5u9+2n9399aH44sXfo7GDPvvw8tnt0t92jw/7seO/kiI5PWn9O7Nnn1+3m+Z7dO9g/OZK7Z41O1G50ZLteqZASYUKjr8C8ZkRqX74tGzK21JuO1Tm3852PA/BxaVFSj0DIymHc54xWor0KBDCTAsZRhcqgGqDHoFpvOm7n3Ha7oxgUVkLhzxedSXG94obCdqtuNw6aeSLUr4Bx6HMkNa1i/IG5pPaFHIASTPgVCAydSOnagJkq3DCVhasSXcybFQZSo2t8ttrqhqAHpEQwbTJ0mUOaS+GZXuYyj7QCITMxz2hPg9Lpk19NyyhmCj0HFASoUZlX+vq9dJtj/pZqeCEVRcuW4+JcdA3r2nK8SWc10YsTlIV3vLmJlFY155236CDMoiwb8l5YaZ/7476U0dPQjNmDyeJRc3PLY0tNytUwyUzZzOkA6XBOoetFiH6GcL6SUWQGIyUiUGdX+cHvJOUSEUtEwwTNeLFgo9gwFYU20VatS9ImTBMiFcNNh4O+kCqYoz7NAHKjKQkDNyiVI8Od/s/P5/4RJd03mNRptVDJYny2AC0b0HK0uWiyenUWithSYD6KI13Q4s0Jn0C66dK5zIBtOBxTGYQgpndF4ycUrNeWZ6HR3VzmZ3DDMh/9odPALRKYp4Q1pdBifdkvVgoJ5LMN/KudvIbX1nTQmQLK0WpwGXtWKw5AWA0ImQZutUGAnxykrF9ajfavxbgxHdDdYBZ4CkFs0fjjDmv7IW5+u2ouWw5/xrxqGoWHxS0HwrNppFG1OgWJKEHbpIgec5Zdl1OrGXLvDHkv/zswpQOcFJQKU7DsYO5+lL58xqfzHxpzefMhk/XT2Ro+ku2gA1MuKdPTwnSQwi0rwf14FOweeuJlb/F/18uSOZnN8zpaORyEB0UpKTtcZaAb0U6+pnW/yvn9izKOkpxBwrwi1itDy6Xgy/AJpODnWev+73Lqgo+WgzLkBdWqDaCbAs5ZQifdY3p6+bQ37GsXL5Y9tkGBd+uO1Y0pxSg6BKqligryYw4zt9P4QD9J//DVRoS/JZ2u96HhEabBnmI2FhTVe4oJ1I9j4/jTO8MiC0hbrQdtpczzoNw8Pz2ynKK+o52fHr1UTR/ryaYoxbwccW7qp4PgFXTIWSjI9RFav42cFyU9WyW91A/uEJf5x6vw+kEG+oyr0Y/p29xDEzJHwnV+Ffv6/R8pI4n+vywAAA==" /></Footer>{/_ END_HRIS_EMPLOYEEPAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Employee` objects.{/_ BEGIN_HRIS_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1da1PbSBb9Ky592k3xCCEMgaqtLWIDNsHGY2B2kqkpVVu6lhu31EqrhTFT89+3Wg9jJsD4cbvdYviUWJhjoz66z3O7/3A8IiHgYuIcOkNBE2fDCbkPzDl0jsOY8QmAs+GQmHZICM6h0wYRQK3Za13WjrotZ8NJ0jjmQoJ/QoH5SVPAwDl0tkP1vs00ogMK/rZC3vb4LQgSwPb0VzYH2e84Gw6j0Qj8I8/jaSRfAsnfuEnyd/7lpfpxIp0NJyZJIoeCp8GwB99TSJ7DHEV8zMAPYLNPkvybMQghkoRt+kSS7RmkTZFDPXVN/Q0+MJDgN4gkDZDgScqj4lOHUsbJ4fb2EFi8lX2DLR9utyHaJkJSj0Gyvbd78GH/YG+zQMk+/b9uwP6z8+7me5/399+5gcdckr5rX3l3navWuHMTfOzUP9517q/3Ovej+87N6P07NyDv2lftvYurr7sXjaOdiyfe4F7+9OvBL58bn88677z7493Ozddx58rbaV95o/59a/fs1BufNX++69x//dBuXO92ro73zk75zkW9l7TrPd4+2tpyNhwaSQgEUX9m4hz+9sfshYIt+8mQDrKbM/OzVkgCmLkp+YqQmG7GaZ9RbyvZ3SIhuecRGSdbHg+3Q/Ap2e4yIgdchAWo2xU8BiEn7ofWA/jD1d3L7ykR8HDh48P/dvY+uUn24604Csq1ozyaLpzif6d51KkfNx7z6eiWUEb6DJxDKVL44QFwDn9zyC2RRDgbjsfDmEQT9QFEgssHbp8KOVSvaRIzMnEHKWNupO7WhgPFA+dGadgHMb2i+Ogmksg0eXRNvRpQkcgSIBA8jdXVIQ/BZdzLbol6vMjDm0LepwzceMijmU8SEHIJrmLd41duTLIvXFyivnrmJRFS/VThjbkYuRASypzf1du+p1SA3yWChCBBqBvy+58bT7HjqNGtNY7rrUbruo1DkaNG122AR32ahu6lxgWOY8FvwXclDdWyDlZcYYBZpPJasgQDIPIz3PmoQCISZG8PiaCSsIfPiAUMQAjwy/cuTxAJIqRR/nT+yJnixfQbLsGhDtzJ2ilEeBxSiO4pRDo5hM+X6TW3TxiJvBkCvUAmOYyoR+VEG5WeNjgxiIRHhE1psCLjksg473rXHTzK9a47Wi1W6ZJWpF1MJoIz5oo0motdj0zVIlyjAspVqxzvSGiCfv/jYjTgwoNah4/xiDiFdTt8bISSfYhgQDOG4ARMz/MUz2xWl9ieACLBd4msCtkZo2pdmnWkMLHMJJq9ElpnNjA/k7Eopjn6z1jw8oovvMISBKl184cWyZZlmIUBc895wLWs7urGy6z50Wpy1s2jzyTsc97s4TCoRHvEoZvYjCf8gUIQq8XMF3xduYKdrDMYwam7lgwBpAuRFDS7U3iO7rPyzENAYm8ONkte9+TrwbfgJtRD4idqIg/EJtHILaq0miK+pQso1vB4lRKL/iisDvckilTtH4efBd6mFZHXU4yynD1k4mbIGiyisSpKfUgEo0gGrwD7i782Vf59ztStGBTiuuwKmbf1pJqKQ7LJYzxGKrQPFjeb1mXljIR2xunDyATLP5ZFihyzYJD7vjmO9hrn1rnLua3OLB2WXcxFV4VzVicCy80UaHlEXbia4GN/4u9fV3dZFn2O15KpvRiXLEqKSR/EkRghkaJAc4d3Bxfx/lgPEVDC16cVA4tY6ZXryE/Y4DQBUXz88uWfBhFjGvX5Hc6iTuF05ihY+a/JAPBJVmSyMTdNsxV+LvhbofdgLClpkEnW/8J14yWqGRexQrHQ3s5Z1YqIOjkKgNQmmfITgNlk4JD0UIuRx7zZetrvrciO4+kNqTVBcByiPIBuKlCdPnFV/eRcIpU53KFVFsaYbTkhnuSCEiQDM4XT34p9XHlbh7lZTzWkcoqOE85GCVonoXRhGaqRUpst2s21MVEP8XQyTkAyLKiNYdRKuL8XyHWOrlq/HOttMvzjWqfGml/6beEpRCCoV7s8uerikDPIEd1kIOOybhye7d69b+kpUL7IVJ39/Srnn8swWLe51ZKMnHIeMMjUyklMsMoqOao7RZ3D7y9tiKdeX2P9dRXvjFCPNWDm0kQiZaJlvJdBlgaOKjDbdeorTU+sTViu0dmuJ/1oEspggp5/5LBus2ciu12/bm4N+YaduUWT9nkfmUoKUrM108Snt/5BtWszzV6tznjq4xC62XMzNO0a+mpqPV+DMLjZq3WJkFH23VEoU8Bp58x8Ad3cvdR/iCc1wagsr8Me9stAjTrVt9BsqdBM75RNMw0JiZDYVYDpHxHTLzmvVp/CHpmHAXuYhhSHrsM0pFonbvT7x4WMFX5QbiyrbEVJDILKSa0rIKRY0VXpDmkJr7Nhape4cfECmSWk0lKXV5umMUaximBTOO2u0C5S2ZLn6bREarfHOkk84iN1bxSiWyC+DYBaIwYyx6hLzm4BqcQ09WhJBmpJ1VQ/rSoXKGsk1FkaxohVSwXnZWVLM8GRdr9leZtZS4BzliZyjFdHmsJVJsCpRv1oXWIXPKJ9IYxRP0XiWYlWASHrK2nRWV37+QIjgkOsEYxIBUhlp9V6SQNjd3vuC0Q3yMKrDFInld60Ln+z0/qKnDgnERIlFJL2wZ7ldszE2XZi+Wn0cyIl9fLDMnBuNssRS8nj8PTs2+6oWdnKydqG0Q3ntovyBkic8BCp1Fba7BLVrOufJcRSw5amy15aMtHz1POQgrgM6lV3mC23HVXIGdrUEzzhA1k7jqQgtVYDaQRcobmtRumADur358HPVxpmLvS4n9W3vnklvT/1D5vgkCLHMrdHstn231vxYiWehX2BVBbLoLRnGnrI9bzDskyJNwcjFmTAxWBAPQpZ1IDAgimcgXG/9W5c8xo3Z12UOyOJFDUrJK1HfCy9JSPW+X34gYmWFY3gnAcU6aS2Em39TVp9AafxpuuiKyqIxyCfGKopMXRUq5NYmaBaO/vTsl2o/tWst/+NtOjZB9pxXs+8KW0xEifS6PXFn5Xck+BikkgQWNLHHE1rP0TX5PmPbLX7sFlUb9QlkzqJJcHyR10y8XI8I21W3TW5Hyc8dOrVKrNrilENk6LUEJD2My7ATO/DZ/B4x2oqdq0u4SjScKRd08peVI5ZSetYsahNe3la76hmRhTkwac4w/xHqVdso6PtBu+EIpUrZwzegM5RszRduF57r9XwRj+LU4Hx4rnBib9yuEdnMp6fhjsnfmQwEnvFgdh8dulxh9+S7c3SiH5P1S9CJOkgn/dFtGrAYwZoO54VaO6R50GSmDkl3javaq9ZNO4ys69LsVTGBVppJU/4L+R0/yWViaFa71q2w5jT0JkfD13PEcldGgUXEZY2kkZBK7O3erdBmFe/vHh9FaE9pKcv1GUk8glW4FSG0TnoOg6PWLyQvkAlFa0JvKZt+p965KcsWpQ4giYhVpwSK7Ch1mT/JcWzXZoPrZp4Y8OWXcEZJVh6ohLN1pnel8KL19xVtnPQt5d9Ng7z8r+j2PyEmTypvEpqNou0CZg0uuUslbU8i8ahU4FpJBNfTRM1j6TgOTbMODBL3VOPxjGj2d1HDHxFgeqK3qe73X7HhvXVNPX3zBhYRaKTSxIA2rkCCsyd2VBttz/+uN+u2uy+NTuGWlFpW4ZPmH4i41QOWPLKu7tseV9uzAujzZ4UsIinWayEorXgdXnUrV2mWZk9P0kTaZ7mMeajjtRn71cenLzXs+X626kTFVTlGtW8XUJCsKffc0wrDyteQYG7INnsoljBqhV8I81vIZI+aApnOod6a19aofvJV73WzR0JEqdyr6r97Julx8/m3DFnlQVdcBmuBO0AUnX3StAIpEV6K6tLto+EMFWUKufUqanziAq3j0kjd+dN37L+wFYDAaf5m0rfJqiMvP5yWusKJF3M9ZdTg6plg1MbVU7ILBEPolM2O695wIUHM3O82Dx2fXLw8/u9z+uXdmkzm4uxbtmdCRHWvAfER5LrzCxwAKT56XvX/LHzS1mzuU/6e331Jzt2UVxSU7gg3ZVpQ9emFaDVjBHtZa9Vh5obqqq+KKfDtPvfgCEPOilEi/Jtoz3qah/y9I0POWqnUQEWnUadRzyhdK6N+Fq7yu/PaZuep83vf/4fIKodBi6+AAA=" /></Footer>{/_ END_HRIS_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employees.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

<details><summary><code>client.hris.employees.<a href="/src/api/resources/hris/resources/employees/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Employee</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns an `Employee` object with the given `id`.{/_ BEGIN_HRIS_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1da1PbSBb9Ky592k3xCCEMgaqtLWIDNsHGY2B2kqkpVVu6lhu31EqrhTFT89+3Wg9jJsD4cbvdYviUWJhjoz66z3O7/3A8IiHgYuIcOkNBE2fDCbkPzDl0jsOY8QmAs+GQmHZICM6h0wYRQK3Za13WjrotZ8NJ0jjmQoJ/QoH5SVPAwDl0tkP1vs00ogMK/rZC3vb4LQgSwPb0VzYH2e84Gw6j0Qj8I8/jaSRfAsnfuEnyd/7lpfpxIp0NJyZJIoeCp8GwB99TSJ7DHEV8zMAPYLNPkvybMQghkoRt+kSS7RmkTZFDPXVN/Q0+MJDgN4gkDZDgScqj4lOHUsbJ4fb2EFi8lX2DLR9utyHaJkJSj0Gyvbd78GH/YG+zQMk+/b9uwP6z8+7me5/399+5gcdckr5rX3l3navWuHMTfOzUP9517q/3Ovej+87N6P07NyDv2lftvYurr7sXjaOdiyfe4F7+9OvBL58bn88677z7493Ozddx58rbaV95o/59a/fs1BufNX++69x//dBuXO92ro73zk75zkW9l7TrPd4+2tpyNhwaSQgEUX9m4hz+9sfshYIt+8mQDrKbM/OzVkgCmLkp+YqQmG7GaZ9RbyvZ3SIhuecRGSdbHg+3Q/Ap2e4yIgdchAWo2xU8BiEn7ofWA/jD1d3L7ykR8HDh48P/dvY+uUn24604Csq1ozyaLpzif6d51KkfNx7z6eiWUEb6DJxDKVL44QFwDn9zyC2RRDgbjsfDmEQT9QFEgssHbp8KOVSvaRIzMnEHKWNupO7WhgPFA+dGadgHMb2i+Ogmksg0eXRNvRpQkcgSIBA8jdXVIQ/BZdzLbol6vMjDm0LepwzceMijmU8SEHIJrmLd41duTLIvXFyivnrmJRFS/VThjbkYuRASypzf1du+p1SA3yWChCBBqBvy+58bT7HjqNGtNY7rrUbruo1DkaNG122AR32ahu6lxgWOY8FvwXclDdWyDlZcYYBZpPJasgQDIPIz3PmoQCISZG8PiaCSsIfPiAUMQAjwy/cuTxAJIqRR/nT+yJnixfQbLsGhDtzJ2ilEeBxSiO4pRDo5hM+X6TW3TxiJvBkCvUAmOYyoR+VEG5WeNjgxiIRHhE1psCLjksg473rXHTzK9a47Wi1W6ZJWpF1MJoIz5oo0motdj0zVIlyjAspVqxzvSGiCfv/jYjTgwoNah4/xiDiFdTt8bISSfYhgQDOG4ARMz/MUz2xWl9ieACLBd4msCtkZo2pdmnWkMLHMJJq9ElpnNjA/k7Eopjn6z1jw8oovvMISBKl184cWyZZlmIUBc895wLWs7urGy6z50Wpy1s2jzyTsc97s4TCoRHvEoZvYjCf8gUIQq8XMF3xduYKdrDMYwam7lgwBpAuRFDS7U3iO7rPyzENAYm8ONkte9+TrwbfgJtRD4idqIg/EJtHILaq0miK+pQso1vB4lRKL/iisDvckilTtH4efBd6mFZHXU4yynD1k4mbIGiyisSpKfUgEo0gGrwD7i782Vf59ztStGBTiuuwKmbf1pJqKQ7LJYzxGKrQPFjeb1mXljIR2xunDyATLP5ZFihyzYJD7vjmO9hrn1rnLua3OLB2WXcxFV4VzVicCy80UaHlEXbia4GN/4u9fV3dZFn2O15KpvRiXLEqKSR/EkRghkaJAc4d3Bxfx/lgPEVDC16cVA4tY6ZXryE/Y4DQBUXz88uWfBhFjGvX5Hc6iTuF05ihY+a/JAPBJVmSyMTdNsxV+LvhbofdgLClpkEnW/8J14yWqGRexQrHQ3s5Z1YqIOjkKgNQmmfITgNlk4JD0UIuRx7zZetrvrciO4+kNqTVBcByiPIBuKlCdPnFV/eRcIpU53KFVFsaYbTkhnuSCEiQDM4XT34p9XHlbh7lZTzWkcoqOE85GCVonoXRhGaqRUpst2s21MVEP8XQyTkAyLKiNYdRKuL8XyHWOrlq/HOttMvzjWqfGml/6beEpRCCoV7s8uerikDPIEd1kIOOybhye7d69b+kpUL7IVJ39/Srnn8swWLe51ZKMnHIeMMjUyklMsMoqOao7RZ3D7y9tiKdeX2P9dRXvjFCPNWDm0kQiZaJlvJdBlgaOKjDbdeorTU+sTViu0dmuJ/1oEspggp5/5LBus2ciu12/bm4N+YaduUWT9nkfmUoKUrM108Snt/5BtWszzV6tznjq4xC62XMzNO0a+mpqPV+DMLjZq3WJkFH23VEoU8Bp58x8Ad3cvdR/iCc1wagsr8Me9stAjTrVt9BsqdBM75RNMw0JiZDYVYDpHxHTLzmvVp/CHpmHAXuYhhSHrsM0pFonbvT7x4WMFX5QbiyrbEVJDILKSa0rIKRY0VXpDmkJr7Nhape4cfECmSWk0lKXV5umMUaximBTOO2u0C5S2ZLn6bREarfHOkk84iN1bxSiWyC+DYBaIwYyx6hLzm4BqcQ09WhJBmpJ1VQ/rSoXKGsk1FkaxohVSwXnZWVLM8GRdr9leZtZS4BzliZyjFdHmsJVJsCpRv1oXWIXPKJ9IYxRP0XiWYlWASHrK2nRWV37+QIjgkOsEYxIBUhlp9V6SQNjd3vuC0Q3yMKrDFInld60Ln+z0/qKnDgnERIlFJL2wZ7ldszE2XZi+Wn0cyIl9fLDMnBuNssRS8nj8PTs2+6oWdnKydqG0Q3ntovyBkic8BCp1Fba7BLVrOufJcRSw5amy15aMtHz1POQgrgM6lV3mC23HVXIGdrUEzzhA1k7jqQgtVYDaQRcobmtRumADur358HPVxpmLvS4n9W3vnklvT/1D5vgkCLHMrdHstn231vxYiWehX2BVBbLoLRnGnrI9bzDskyJNwcjFmTAxWBAPQpZ1IDAgimcgXG/9W5c8xo3Z12UOyOJFDUrJK1HfCy9JSPW+X34gYmWFY3gnAcU6aS2Em39TVp9AafxpuuiKyqIxyCfGKopMXRUq5NYmaBaO/vTsl2o/tWst/+NtOjZB9pxXs+8KW0xEifS6PXFn5Xck+BikkgQWNLHHE1rP0TX5PmPbLX7sFlUb9QlkzqJJcHyR10y8XI8I21W3TW5Hyc8dOrVKrNrilENk6LUEJD2My7ATO/DZ/B4x2oqdq0u4SjScKRd08peVI5ZSetYsahNe3la76hmRhTkwac4w/xHqVdso6PtBu+EIpUrZwzegM5RszRduF57r9XwRj+LU4Hx4rnBib9yuEdnMp6fhjsnfmQwEnvFgdh8dulxh9+S7c3SiH5P1S9CJOkgn/dFtGrAYwZoO54VaO6R50GSmDkl3javaq9ZNO4ys69LsVTGBVppJU/4L+R0/yWViaFa71q2w5jT0JkfD13PEcldGgUXEZY2kkZBK7O3erdBmFe/vHh9FaE9pKcv1GUk8glW4FSG0TnoOg6PWLyQvkAlFa0JvKZt+p965KcsWpQ4giYhVpwSK7Ch1mT/JcWzXZoPrZp4Y8OWXcEZJVh6ohLN1pnel8KL19xVtnPQt5d9Ng7z8r+j2PyEmTypvEpqNou0CZg0uuUslbU8i8ahU4FpJBNfTRM1j6TgOTbMODBL3VOPxjGj2d1HDHxFgeqK3qe73X7HhvXVNPX3zBhYRaKTSxIA2rkCCsyd2VBttz/+uN+u2uy+NTuGWlFpW4ZPmH4i41QOWPLKu7tseV9uzAujzZ4UsIinWayEorXgdXnUrV2mWZk9P0kTaZ7mMeajjtRn71cenLzXs+X626kTFVTlGtW8XUJCsKffc0wrDyteQYG7INnsoljBqhV8I81vIZI+aApnOod6a19aofvJV73WzR0JEqdyr6r97Julx8/m3DFnlQVdcBmuBO0AUnX3StAIpEV6K6tLto+EMFWUKufUqanziAq3j0kjd+dN37L+wFYDAaf5m0rfJqiMvP5yWusKJF3M9ZdTg6plg1MbVU7ILBEPolM2O695wIUHM3O82Dx2fXLw8/u9z+uXdmkzm4uxbtmdCRHWvAfER5LrzCxwAKT56XvX/LHzS1mzuU/6e331Jzt2UVxSU7gg3ZVpQ9emFaDVjBHtZa9Vh5obqqq+KKfDtPvfgCEPOilEi/Jtoz3qah/y9I0POWqnUQEWnUadRzyhdK6N+Fq7yu/PaZuep83vf/4fIKodBi6+AAA=" /></Footer>{/_ END_HRIS_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Ignores a specific row based on the `model_id` in the url. These records will have their properties set to null, and will not be updated in future syncs. The "reason" and "message" fields in the request body will be stored for audit purposes.{/_ BEGIN_HRIS_EMPLOYEE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9VXa2/iOBT9K5U/opBsh+lWRVqtaOkUOkvabeloq1Fl3cSXYHDs1HagMOp/XyU8Gmigj6H7+AS2j899nXsNP0gIFiOlJ6RO+pob4pBYMRSkTk7jRKgJInEIJNyHGEmddFBHuNe6al/vNS7bxCEmTRKlLbIvHAUzLY09UidenOGqqeQ9jszLmL1QjVBDhN7ySrWX3yEOEVwOkTXCUKXSbiOZAaswQ64ts2NjiUMSMMb2tUqj/hXep2g2cQ6lGgtkEVYDMDPPBMYoLYgqAwtegamqZ1Rle1kMDAVaZE2w0ESLoeVKzq32rU1M3fP6KBI398BlOPJQeqAtDwUa76B29Onw6KA6Z8mt/04j8dt+ZXAfqOCwQqNQUEgrnW744HfbY38QffZPPj/405sDfzqc+oPhLxUaQaXT7RxcdG9rF83G/kUJgF7/+tfRt+Pm8blfCaenNX9wO/a74X6nGw6Dabt2fhaOz1t/PvjT20+d5k3N754enJ+p/YuTK9M5uVKdhusSh3BpMdKQhWlI/fuP4sZcLccQB0q1rlbR7RgiLGRlVhJIeDVJA8FD19RciGGqJIyNG6rYi5Fx8BZs9Po+BY30DxUpd5BEi9xzJZeJz/Trtxr+yWlzVQ+NEXABgUBStzrFZwIm9e8ERmBBZ7RgkaoeDbi2/WzNTSJgQnupEFRmMToE521CZRoHqAs7Zvk9UxQ1Fmy6upevbF/ykNsJcUiPa2MXxBFKlvP1VYxUqDBPXtYs8ASKQUKUo2LQ3IJ4MhOrgAukSV/JgnMJaqMkCIoxcEEcojFWFilnWTObjN9Y0JZmsROHWIQ4/9Axl7kHi5Ox0sMlS75Y+niX0d6nXCO7BA0xWtR5Zgt37h6dMsm00hhAmt0oZk724YIJVZyAnLxJMW+oP9e4SPpK7d9R4JLSvqeOhRDcgQqo5VbgegBFX1cMb7NYroq2tCgE39UkWdJ9uDJ+ZoIsFPKOqfB2ZaQG9fx2sUm3C6Do85P9DTXMPsRkNwWccf0n+/r/8xLAhEZapcm//ipsnBrP3Co4sUFll/kVrnajswXbQmlf1Dc4O+y6ifyAUbH1qdgkmnKh5HU1a9nc+BDstGYvP/E3X8/2LvWOKnTz9YyavDgfUpR/dgL8TNcX23le6VAjWGQU7MsdXT7/Xy2HzXlam3GFHw7Y62UVGi1/3KwcPiXLTpL10yzYBDVXrORAz9nePE5X1u786tpm9j9TP9/PCooluxrR0v1nB1Oe0FAxXO0BmmQ5Ne4xSuxxS69RcqW5ndDmjL0E+xpMMOczSyzbiGXI0rxt6OLWQlTbwGYbCkFLLqOtmB4y1CBojwsuo6f+KIFmSRQ01yWX1MID1Wg4W2mrkmsrIHyNIRP2kaUCGe2rVG8CvSKnr7aYB1WOfrnpnzX13ePd498OA3I04REAAA==" /></Footer>{/_ END_HRIS_EMPLOYEE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns metadata for `Employee` POSTs.{/_ BEGIN_HRIS_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_HRIS_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `EmployerBenefit` objects.{/_ BEGIN_HRIS_EMPLOYERBENEFIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE82TbW/aMBDHvwrySwRklLKtSNOUAuWhJTAK26qqsg77CAYnDrZTHqp+9ymEtrB2myrRqS99vvuf/bv/3REGFn2lV6RCJloYkiOB4ihJhdSDSKoV6lMMcSwsyRGIhAcBkgrpoPYx0+y3LjNur0VyxMRRpLRFfiZQctPUOCYV4gRJXj4OxVggd5IGDlO3qMFH57EkP97UkByRIpwhdxlTcWj/JpIm5iHN/O2YXJvkvREYYydaxf6kj/MYzZ80Z6FaSOQ+5kdg0pdJDDC0IPMcLDg7SnmdSr0US/7AUaJFXgMLNbTIrFDhtuvE2shUHGeCMipsXlDgeOtg6IC2gkk0Trl0cvTppJzfqmy6f6W+/FLMTucjNfqUpT6TFOJsZ8CW3qC18Kb+sVc9XnrrYdlbz9bedPYhS33IdgadcndwVerW3GL3hQR6+fHnyffT2mnby7J1veRNrxbegBU7AzYbrVuldoMt2s1vS299ddSpDUveoF5uN1SxW+2bTrWvOm6hQHJEhBZ9Dck3Dalc3+0Gtm5xa73MD6VnY6UZZjy12C9rBeDjDp50NhCJfBSPpGAFUypAAGsVwsIUmAqcALkAx6316KMs9dSCXs5j0FiIQv9hEEKFj1NIPO01Xa9ar+2bw70FIWEkkVSsjvGZm0nlmozSLaCRhJDaVYQk9xBLp87jTRPKFE/uwuTrNzmSOENo5D3QEKBFnajd3Ode4tSIjVWHYdOTYMdKBxtJajZcqEjE3gUdjoZpEW36blklqAJlkSaW3z/RCOzkKST4a8H2YMUmuDwQ2lRsazZ6oXz1Lpj+D4pSMWFXB+OYyu2SpBeNoHjGw7ck+sRxj+0zoP8g+Up6w/NGpo/AD0RveN54WGsfofl53ntLZOZNd/bm/hfUlUeiiAgAAA==" /></Footer>{/_ END_HRIS_EMPLOYERBENEFIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employerBenefits.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns an `EmployerBenefit` object with the given `id`.{/_ BEGIN_HRIS_EMPLOYERBENEFIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE82TbW/aMBDHvwrySwRklLKtSNOUAuWhJTAK26qqsg77CAYnDrZTHqp+9ymEtrB2myrRqS99vvuf/bv/3REGFn2lV6RCJloYkiOB4ihJhdSDSKoV6lMMcSwsyRGIhAcBkgrpoPYx0+y3LjNur0VyxMRRpLRFfiZQctPUOCYV4gRJXj4OxVggd5IGDlO3qMFH57EkP97UkByRIpwhdxlTcWj/JpIm5iHN/O2YXJvkvREYYydaxf6kj/MYzZ80Z6FaSOQ+5kdg0pdJDDC0IPMcLDg7SnmdSr0US/7AUaJFXgMLNbTIrFDhtuvE2shUHGeCMipsXlDgeOtg6IC2gkk0Trl0cvTppJzfqmy6f6W+/FLMTucjNfqUpT6TFOJsZ8CW3qC18Kb+sVc9XnrrYdlbz9bedPYhS33IdgadcndwVerW3GL3hQR6+fHnyffT2mnby7J1veRNrxbegBU7AzYbrVuldoMt2s1vS299ddSpDUveoF5uN1SxW+2bTrWvOm6hQHJEhBZ9Dck3Dalc3+0Gtm5xa73MD6VnY6UZZjy12C9rBeDjDp50NhCJfBSPpGAFUypAAGsVwsIUmAqcALkAx6316KMs9dSCXs5j0FiIQv9hEEKFj1NIPO01Xa9ar+2bw70FIWEkkVSsjvGZm0nlmozSLaCRhJDaVYQk9xBLp87jTRPKFE/uwuTrNzmSOENo5D3QEKBFnajd3Ode4tSIjVWHYdOTYMdKBxtJajZcqEjE3gUdjoZpEW36blklqAJlkSaW3z/RCOzkKST4a8H2YMUmuDwQ2lRsazZ6oXz1Lpj+D4pSMWFXB+OYyu2SpBeNoHjGw7ck+sRxj+0zoP8g+Up6w/NGpo/AD0RveN54WGsfofl53ntLZOZNd/bm/hfUlUeiiAgAAA==" /></Footer>{/_ END_HRIS_EMPLOYERBENEFIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Employment` objects.{/_ BEGIN_HRIS_EMPLOYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_HRIS_EMPLOYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.employments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns an `Employment` object with the given `id`.{/_ BEGIN_HRIS_EMPLOYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_HRIS_EMPLOYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Group` objects.{/_ BEGIN_HRIS_GROUP_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_HRIS_GROUP_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.groups.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `Group` object with the given `id`.{/_ BEGIN_HRIS_GROUP_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_HRIS_GROUP_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
await client.hris.issues.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

<details><summary><code>client.hris.issues.<a href="/src/api/resources/hris/resources/issues/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Issue</code></summary>
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

**request:** `Merge.hris.IssuesRetrieveRequest`

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
await client.hris.linkedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a list of `Location` objects.{/_ BEGIN_HRIS_LOCATION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_HRIS_LOCATION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.locations.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `Location` object with the given `id`.{/_ BEGIN_HRIS_LOCATION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_HRIS_LOCATION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `PayGroup` objects.{/_ BEGIN_HRIS_PAYGROUP_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Xa4/iNhSG/wryRxTIsCzdDlJVZchwmyWTQmh3tBpFB+cQDI4dbGcYWO1/r8JlLu206uwGOtqPNsdvch5ev3a+EAoGY6nWpElmimlikURGyEmT+LDuKJmlxCKQMg8SJE0yQBVjqTvsjUqO3yMW0VmaSmUwajPkke4qnJImsZO8rpIJNmUY2bmyTeUdKojRflhSmW7XEItwJhYYOZTKTJh/E9kVVmBX+Zdh/rM2xCIpaG1mSmbxbIjLDPU/aS6EXHGMYqxMQO/ejGOCwgCvRGDAfqJUUTupl+byHiLkaDBywYCLBqlhUuyfOjMm1U3bniFPq9s3qEZ4Z6OwQRlGOWq7UT9/9+G8UdmrbJ/+axjzX2rl+XIiJx/KYUx5CFl5ENB7L+itvHn83mu9v/c244a3WWy8+eKsHMZQHgSDxnVwU792ndr1CwXh6KdP579fuBd9r0w3l3VvfrPyAlobBHQx2fTq/Q5d9bu/3Xubm3cDd1z3gstGvyNr162hHrSGcuBUq8QiTBiMFeRtatL8/OXpxN4tjuuXhmPveXEvgRifQNn9I5CySppNOKNVXa9CAhspYKWrVCZ2ghED23H9cDj2wtEyA4XVVMQH6EyKB+KkSS69ruO1Lt3nRnDugHGYcCRNozL8m3NJ8zNRmEiDYc6eWE9HYQpm9jjFInKbD5YZUxj5oCBBgyrXuP1qvUiCcwaCYrc1KIaGz8FMpUq6w4N0qI8HBpOUy3W+MfR28TqM82gIRd7dK1G0cANC5CFSDIm9XuXo7SO+0Lx1RNO4sJ5KRbFYxxxUT2+UY7JqK9Qzg5AUA+tB7phxc7DVaUl1UKBitDRqB34xsOKdYqinJt2nUJj06/dnvfHRt+N/M9w3UMq0kcVuvK3kgQ/LxX6ksOqNJL/DqFhkTG9Fj8LphGyucAHFgFngAo5/0J86knxYtyA1wERB9oE13emdiNVjCn1D61xSZtaFdb6T259b4UcZy/BjJ6m1I/Hm4uaVrEaOXxpllKLWbaBGKl0MtOeaz8hd0E8ybp9V5+n/dVd6/W4KFPPQFIMmUEygeXPG+Q4646tOyVcFHe3jq84pEqZYf+QEhghRQZHzyCCMEbo/L/0f68viD6kWERSVz/uLzV70jVyPv4/a7dc/AWVpgn9HFAAA" /></Footer>{/_ END_HRIS_PAYGROUP_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.payGroups.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `PayGroup` object with the given `id`.{/_ BEGIN_HRIS_PAYGROUP_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Xa4/iNhSG/wryRxTIsCzdDlJVZchwmyWTQmh3tBpFB+cQDI4dbGcYWO1/r8JlLu206uwGOtqPNsdvch5ev3a+EAoGY6nWpElmimlikURGyEmT+LDuKJmlxCKQMg8SJE0yQBVjqTvsjUqO3yMW0VmaSmUwajPkke4qnJImsZO8rpIJNmUY2bmyTeUdKojRflhSmW7XEItwJhYYOZTKTJh/E9kVVmBX+Zdh/rM2xCIpaG1mSmbxbIjLDPU/aS6EXHGMYqxMQO/ejGOCwgCvRGDAfqJUUTupl+byHiLkaDBywYCLBqlhUuyfOjMm1U3bniFPq9s3qEZ4Z6OwQRlGOWq7UT9/9+G8UdmrbJ/+axjzX2rl+XIiJx/KYUx5CFl5ENB7L+itvHn83mu9v/c244a3WWy8+eKsHMZQHgSDxnVwU792ndr1CwXh6KdP579fuBd9r0w3l3VvfrPyAlobBHQx2fTq/Q5d9bu/3Xubm3cDd1z3gstGvyNr162hHrSGcuBUq8QiTBiMFeRtatL8/OXpxN4tjuuXhmPveXEvgRifQNn9I5CySppNOKNVXa9CAhspYKWrVCZ2ghED23H9cDj2wtEyA4XVVMQH6EyKB+KkSS69ruO1Lt3nRnDugHGYcCRNozL8m3NJ8zNRmEiDYc6eWE9HYQpm9jjFInKbD5YZUxj5oCBBgyrXuP1qvUiCcwaCYrc1KIaGz8FMpUq6w4N0qI8HBpOUy3W+MfR28TqM82gIRd7dK1G0cANC5CFSDIm9XuXo7SO+0Lx1RNO4sJ5KRbFYxxxUT2+UY7JqK9Qzg5AUA+tB7phxc7DVaUl1UKBitDRqB34xsOKdYqinJt2nUJj06/dnvfHRt+N/M9w3UMq0kcVuvK3kgQ/LxX6ksOqNJL/DqFhkTG9Fj8LphGyucAHFgFngAo5/0J86knxYtyA1wERB9oE13emdiNVjCn1D61xSZtaFdb6T259b4UcZy/BjJ6m1I/Hm4uaVrEaOXxpllKLWbaBGKl0MtOeaz8hd0E8ybp9V5+n/dVd6/W4KFPPQFIMmUEygeXPG+Q4646tOyVcFHe3jq84pEqZYf+QEhghRQZHzyCCMEbo/L/0f68viD6kWERSVz/uLzV70jVyPv4/a7dc/AWVpgn9HFAAA" /></Footer>{/_ END_HRIS_PAYGROUP_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `PayrollRun` objects.{/_ BEGIN_HRIS_PAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WX8W/aOBTH/xXkHxGQMcZtRZomWlqgGyEH9G7VVFkP+xEMjh1spzRM+99PIbQHd91JbdNe91tiP38df/x98fN3wsBhqE1KWmRuhCUVEmmOkrRIAKnRUo4SRSoEYuFDhKRFBmhCLPVG/XGpHfRJhdgkjrVxyM8ESm57BmekRbwoi6smSswEci/T9pi+RgMhendDqrPtGFIhUqgl8jZjOlHuv0TywCrkkf94zbqtIxUSg7VubnQSzke4StD+THOp9FoiD7E6BZt/mcQIlQNZ5eDA21OqmlzqvrZsDRwlOuQdcNBBh8wJrXazzp2Lbcvz5ijj2vYLahyvPVQeGCeYROs1G0dv3x81qzuV7eyfaCg/1suL1VRP35dpyCSFpDyYsBt/0l/7i/Cdf/Luxt9cNP3NcuMvlm/KNITyYDJoDieXjWGnXR/eE0DHv309+uO4c3zul9nmtOEvLtf+hNUHE7acbvqN8y5bn/d+v/E3l28HnYuGPzltnnd1fXgysoOTkR60azVSIUI5DA1ky7Sk9e37fsPOLe1OUPpTm+VMG4YlX68Ph/UjCHEPT743EItqnEylYDXbqEEEG61gbWtMR16EXIDX7gT0Tpb6ek3HqwQM1mIV3m6E0OpuF0iLnPq9tn9y2jk0R/sahISpRNJyJsF/uZm0vhE2R7akHBySCsEoljpFpHGeHtQkKtt7VPw2xGCkHVLBs+RwYFzecZX1rBJhkAdgIEKHJtO/+lG5j1wH0u3qigEWSHAzbaJb1dcEKjP64RuNwc2zpkRR6/LgPZIVkiixSjLEqFyWx+ahdLuJdbpYtFtJarc+pCIT+0Ug79l1H3j27NIYn+Ti/ljLa+TFkhZ2K/oCeF8LxmFqHZreqBiOudrOqs9C8We+fCTFB9IKIGVzvCnIdLnY7oChX3Sof+28frwLA0ilZsKlhZHN5fbZ0i/dqH7G1WtifIfwyXk8bgelccIYWnsGzGlji0F5qHnA85h91eHZm9oifrk030P4eFYTI3x0xfCZGKHQvZyndjzM9u700IrnyS67+NwtBaag8ubic/c5T4qnpmShx2wGboTAC/rB/Y2Ohgi9D6vgNSH8n0qZ7NrGoagjZFcR7kRftJZ5PqIPu99c/fgLWAARqcYRAAA=" /></Footer>{/_ END_HRIS_PAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.payrollRuns.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `PayrollRun` object with the given `id`.{/_ BEGIN_HRIS_PAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WX8W/aOBTH/xXkHxGQMcZtRZomWlqgGyEH9G7VVFkP+xEMjh1spzRM+99PIbQHd91JbdNe91tiP38df/x98fN3wsBhqE1KWmRuhCUVEmmOkrRIAKnRUo4SRSoEYuFDhKRFBmhCLPVG/XGpHfRJhdgkjrVxyM8ESm57BmekRbwoi6smSswEci/T9pi+RgMhendDqrPtGFIhUqgl8jZjOlHuv0TywCrkkf94zbqtIxUSg7VubnQSzke4StD+THOp9FoiD7E6BZt/mcQIlQNZ5eDA21OqmlzqvrZsDRwlOuQdcNBBh8wJrXazzp2Lbcvz5ijj2vYLahyvPVQeGCeYROs1G0dv3x81qzuV7eyfaCg/1suL1VRP35dpyCSFpDyYsBt/0l/7i/Cdf/Luxt9cNP3NcuMvlm/KNITyYDJoDieXjWGnXR/eE0DHv309+uO4c3zul9nmtOEvLtf+hNUHE7acbvqN8y5bn/d+v/E3l28HnYuGPzltnnd1fXgysoOTkR60azVSIUI5DA1ky7Sk9e37fsPOLe1OUPpTm+VMG4YlX68Ph/UjCHEPT743EItqnEylYDXbqEEEG61gbWtMR16EXIDX7gT0Tpb6ek3HqwQM1mIV3m6E0OpuF0iLnPq9tn9y2jk0R/sahISpRNJyJsF/uZm0vhE2R7akHBySCsEoljpFpHGeHtQkKtt7VPw2xGCkHVLBs+RwYFzecZX1rBJhkAdgIEKHJtO/+lG5j1wH0u3qigEWSHAzbaJb1dcEKjP64RuNwc2zpkRR6/LgPZIVkiixSjLEqFyWx+ahdLuJdbpYtFtJarc+pCIT+0Ug79l1H3j27NIYn+Ti/ljLa+TFkhZ2K/oCeF8LxmFqHZreqBiOudrOqs9C8We+fCTFB9IKIGVzvCnIdLnY7oChX3Sof+28frwLA0ilZsKlhZHN5fbZ0i/dqH7G1WtifIfwyXk8bgelccIYWnsGzGlji0F5qHnA85h91eHZm9oifrk030P4eFYTI3x0xfCZGKHQvZyndjzM9u700IrnyS67+NwtBaag8ubic/c5T4qnpmShx2wGboTAC/rB/Y2Ohgi9D6vgNSH8n0qZ7NrGoagjZFcR7kRftJZ5PqIPu99c/fgLWAARqcYRAAA=" /></Footer>{/_ END_HRIS_PAYROLLRUN_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
await client.hris.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

**requestOptions:** `ForceResync.RequestOptions`

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

Returns a list of `TimeOff` objects.{/_ BEGIN_HRIS_TIMEOFF_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2ba3PaOBSG/4pHn3YzXJKl2WyY2dkhkABJcSiQbrOdjucgH4xAthxJLoFO//uOLxBom51JImhg+YaN/Fo8en10JB++EAoaPSGnpEyGkimSI75wkZMy6TEfrwcDkiMQMht8JGXSQumh1eg0u1al3SQ5oqIwFFKje8GQu6ohcUDKpOjH7fJRwAYM3WIsXKTiM0rwsLi4JD9IriE5wlkwRrdCqYgC/V8iacM8pC2/OYy/VprkSAhK6aEUkTfs4F2E6jHNcSAmHF0P831Qac84+hho4HkXNBSXlPIylfrRufg3uMhRo1sDDTXUSDUTQXbXodahKheLQ+RhIelBwcXPRQyKIDWjHFXxuHT628npcT5TSe7+l+PxP48ORnd90T85cDzKHYgOWj16b/eaE3vkvbGrb+7t2c2xPRvP7NH48MDx4KDVax1f925L17XK0fUPGjjd3z+cvj+rnV3aB3R2XrJHtxO7R49aPTruz5qlyzqdXDbe3duz299atZuS3Ts/vqyLo+tqR7WqHdGqFAokR1ig0ZMQ/0xFyh+/LJ/I3FKpta3aebVZa960Vq9o+uDhEpl0WCBk+TDqc0YLqlQAH2YigIkqUOEXfXQZFCu1tlNDylwW+U73LgKJhTDw5viZCBbsSZmc242KXT2vrVqi8hkYhz5HUtYywu88TMofCYShjP1KcgT9kIsp4tJHJxA6OQ5cRzM//ijRFxqdeNhWj5wQ9PDhFHPjh0aD1PMrlQYdxQaKAqYV+RQ3vYuYRLcNEnzUKOMuffqaewyxjffaqmNgDnGs6NQxWCtiP35m1wM4eywdPQ3RPO+/hRwPhKRo2WJiDvpC1rHFZE/+W/Jn4PeFaHTMAJ+rZZydt8IThVG4h53Blgh6iIZYp2LLqJ2L29N/vJG/XuTrjeLro18dguTMEP1M7BurrzWubCv3GkyTAGwGfJuDHgjpz1V3NpbfRfEFGOg4qZbPho/IDYNH5DsL/emAL4BqIRkYoryQ21xc2S7cgo+VZSpfmXs6UXXU7iWHz2MsUQ01gm/I0nO5jWTf2zpL1jFAyajVvei1zXD3UkVHDXSYedvxL0v3h82b1zkEaybcAMZxajx2pLJOo7O5wPEk864NJ+uLvmGUseQrxbgRh3asNkgdJI+OAa6NTia3X48/wjveHVKGTZyK7lQa8ULMkQ8QGMKciW3O0duaUDQin5lBPox8lt/B5PhlfC8jpSfmwsdCbh+rf4j7CsdghvQYx7CLa72X8g1GwuxMmEi+PtKmXxa+jSg1ZM1E6qdMZ6/Oj9eDAaMMkz4bILuQ27QfXwtOCZSjVeUicq04hwqsKoRMA7daEICX1GdYvzSqrV8NAU9u+Pqe/p8+EFOlUZrahEjVdpjyE+m2YUqFodXzfBoLE80dZvxMJ7dRhByNbadlak6FUlRqX6nxPW6pRMBM5WiZ2ny1cSHeQ/2kt+f9wJtD4MLUbCzJRNeC+ZnpnIGo20lUzZBKe5htN/B9UcUjyLuQVAybYR6LOUulLKX+5M1Jax8LVmmnM5RB4qngnDq97zbp1WjrqL/8fXO30ra6UTLtp+UPhrbUVjVXCuXO6AfhXRzu99ceBgEV+IbcPZ/tUs3/8Qu9Lkt7Z2hFspDb1uzYINqeZDZqK35lmrnNDOOeZAFq52jr2K7PxTdXdastxVKF/sOWkRnoN1f1eYWKC6fvDo/P9vhX8HcQXENLkSXWHkLjj7v2Jv/rYzBwPBFj7F7j67lM9Ke51Vj9z5OrjT99/ReFWNbR5jgAAA==" /></Footer>{/_ END_HRIS_TIMEOFF_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timeOff.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Creates a `TimeOff` object with the given values.{/_ BEGIN_HRIS_TIMEOFF_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9VWa2/aMBT9K8gfESTtKKsaaZrSphSqJTDIHtVUWRfnEgxxnNpOKUz971N4VHSjW6tFrPsW29fnOuccX9/vhIHBWKo5cchYcU1qRMgIE+KQkAvsjkakRiDjAQgkDvFRxVhp9zuDitvrkBrReZZJZTBqcUwi3VY4Ig6xRRFXz1M+4hjZBbDN5C0qiNF+2FIfLfeQGkl4OsXIZUzmqfkdyCqwDqvIn4bFsjakRjLQ2oyVzONxH29y1E9hTlM5SzCKsT4EvTpZggJTA0k9AgP2FlJdraB2zRX/EGGCBiMPDHhokBku03XWsTGZdmx7jElmLU9gRXhrY2qDMpwlqO1m4+TN8UmzvkZZZn9P4+TdYXVyM5TD4yqNWUIhr/ohuwvCziyYxEfB2dFdsPjUDBbTRTCZHlRpDFU/9Jvd8KrR9dzD7o4AOnj79eTzqXd6GVTZ4rwRTK5mQcgO/ZBNh4tO4/KCzS7bH++CxdUb3/vUCMLz5uWFPOye9bV/1pe+a1mkRnhqMFZQ/KYmzrfv2xNrt7her/JFqulIKoaVQM4eb+sIiHGLnpU2kPF6lg8TzizdsEDAQqYw0xaTwhYYcbBdr0cfYGkgZ3Rwk4NCK0vjjRBcpg8qEIecB203ODv3HpvDvQWewDBB4hiV4y9uJs43AqKwFqkRFFki54hbnzSVZjlOI2q4KD7XhqBmnhVDbUCZzZo2YPLCKnnKjSbXq2iuMOqBAoEGVZHy+r62i8xTEEMp2/1yONygramjH2QsrUn2CvgT0iDlUTlcbmfdYo1mRZDeOWmxXBsp6KPsT2jiwXxpwnI06SVgRlKJDerr8PPL9bjJiw2YmqLIqhdp9Kyb9IQYLYV6bBBEOWo8wO2lukCWqeKB/OcX5UU17Qkl2rkASHU5OqzB9leoXo0Uf6lCD5WWKZclFac12kaHlvwMF8fh/1qj9sD/AJatcjn0F2B067luDGdHx/7/xP7zSX/Oyztwe5VBzhhq3QJmpCqp2jzG3C469JR9lXHrYH9d0r4d/mdLF113BPNy25016D/z8j5anF3n2HU77q/vfwCla8Cokw8AAA==" /></Footer>{/_ END_HRIS_TIMEOFF_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `TimeOff` object with the given `id`.{/_ BEGIN_HRIS_TIMEOFF_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2ba3PaOBSG/4pHn3YzXJKl2WyY2dkhkABJcSiQbrOdjucgH4xAthxJLoFO//uOLxBom51JImhg+YaN/Fo8en10JB++EAoaPSGnpEyGkimSI75wkZMy6TEfrwcDkiMQMht8JGXSQumh1eg0u1al3SQ5oqIwFFKje8GQu6ohcUDKpOjH7fJRwAYM3WIsXKTiM0rwsLi4JD9IriE5wlkwRrdCqYgC/V8iacM8pC2/OYy/VprkSAhK6aEUkTfs4F2E6jHNcSAmHF0P831Qac84+hho4HkXNBSXlPIylfrRufg3uMhRo1sDDTXUSDUTQXbXodahKheLQ+RhIelBwcXPRQyKIDWjHFXxuHT628npcT5TSe7+l+PxP48ORnd90T85cDzKHYgOWj16b/eaE3vkvbGrb+7t2c2xPRvP7NH48MDx4KDVax1f925L17XK0fUPGjjd3z+cvj+rnV3aB3R2XrJHtxO7R49aPTruz5qlyzqdXDbe3duz299atZuS3Ts/vqyLo+tqR7WqHdGqFAokR1ig0ZMQ/0xFyh+/LJ/I3FKpta3aebVZa960Vq9o+uDhEpl0WCBk+TDqc0YLqlQAH2YigIkqUOEXfXQZFCu1tlNDylwW+U73LgKJhTDw5viZCBbsSZmc242KXT2vrVqi8hkYhz5HUtYywu88TMofCYShjP1KcgT9kIsp4tJHJxA6OQ5cRzM//ijRFxqdeNhWj5wQ9PDhFHPjh0aD1PMrlQYdxQaKAqYV+RQ3vYuYRLcNEnzUKOMuffqaewyxjffaqmNgDnGs6NQxWCtiP35m1wM4eywdPQ3RPO+/hRwPhKRo2WJiDvpC1rHFZE/+W/Jn4PeFaHTMAJ+rZZydt8IThVG4h53Blgh6iIZYp2LLqJ2L29N/vJG/XuTrjeLro18dguTMEP1M7BurrzWubCv3GkyTAGwGfJuDHgjpz1V3NpbfRfEFGOg4qZbPho/IDYNH5DsL/emAL4BqIRkYoryQ21xc2S7cgo+VZSpfmXs6UXXU7iWHz2MsUQ01gm/I0nO5jWTf2zpL1jFAyajVvei1zXD3UkVHDXSYedvxL0v3h82b1zkEaybcAMZxajx2pLJOo7O5wPEk864NJ+uLvmGUseQrxbgRh3asNkgdJI+OAa6NTia3X48/wjveHVKGTZyK7lQa8ULMkQ8QGMKciW3O0duaUDQin5lBPox8lt/B5PhlfC8jpSfmwsdCbh+rf4j7CsdghvQYx7CLa72X8g1GwuxMmEi+PtKmXxa+jSg1ZM1E6qdMZ6/Oj9eDAaMMkz4bILuQ27QfXwtOCZSjVeUicq04hwqsKoRMA7daEICX1GdYvzSqrV8NAU9u+Pqe/p8+EFOlUZrahEjVdpjyE+m2YUqFodXzfBoLE80dZvxMJ7dRhByNbadlak6FUlRqX6nxPW6pRMBM5WiZ2ny1cSHeQ/2kt+f9wJtD4MLUbCzJRNeC+ZnpnIGo20lUzZBKe5htN/B9UcUjyLuQVAybYR6LOUulLKX+5M1Jax8LVmmnM5RB4qngnDq97zbp1WjrqL/8fXO30ra6UTLtp+UPhrbUVjVXCuXO6AfhXRzu99ceBgEV+IbcPZ/tUs3/8Qu9Lkt7Z2hFspDb1uzYINqeZDZqK35lmrnNDOOeZAFq52jr2K7PxTdXdastxVKF/sOWkRnoN1f1eYWKC6fvDo/P9vhX8HcQXENLkSXWHkLjj7v2Jv/rYzBwPBFj7F7j67lM9Ke51Vj9z5OrjT99/ReFWNbR5jgAAA==" /></Footer>{/_ END_HRIS_TIMEOFF_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns metadata for `TimeOff` POSTs.{/_ BEGIN_HRIS_TIMEOFF_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2ba3PaOBSG/4pHn3YzXJKl2WyY2dkhkABJcSiQbrOdjucgH4xAthxJLoFO//uOLxBom51JImhg+YaN/Fo8en10JB++EAoaPSGnpEyGkimSI75wkZMy6TEfrwcDkiMQMht8JGXSQumh1eg0u1al3SQ5oqIwFFKje8GQu6ohcUDKpOjH7fJRwAYM3WIsXKTiM0rwsLi4JD9IriE5wlkwRrdCqYgC/V8iacM8pC2/OYy/VprkSAhK6aEUkTfs4F2E6jHNcSAmHF0P831Qac84+hho4HkXNBSXlPIylfrRufg3uMhRo1sDDTXUSDUTQXbXodahKheLQ+RhIelBwcXPRQyKIDWjHFXxuHT628npcT5TSe7+l+PxP48ORnd90T85cDzKHYgOWj16b/eaE3vkvbGrb+7t2c2xPRvP7NH48MDx4KDVax1f925L17XK0fUPGjjd3z+cvj+rnV3aB3R2XrJHtxO7R49aPTruz5qlyzqdXDbe3duz299atZuS3Ts/vqyLo+tqR7WqHdGqFAokR1ig0ZMQ/0xFyh+/LJ/I3FKpta3aebVZa960Vq9o+uDhEpl0WCBk+TDqc0YLqlQAH2YigIkqUOEXfXQZFCu1tlNDylwW+U73LgKJhTDw5viZCBbsSZmc242KXT2vrVqi8hkYhz5HUtYywu88TMofCYShjP1KcgT9kIsp4tJHJxA6OQ5cRzM//ijRFxqdeNhWj5wQ9PDhFHPjh0aD1PMrlQYdxQaKAqYV+RQ3vYuYRLcNEnzUKOMuffqaewyxjffaqmNgDnGs6NQxWCtiP35m1wM4eywdPQ3RPO+/hRwPhKRo2WJiDvpC1rHFZE/+W/Jn4PeFaHTMAJ+rZZydt8IThVG4h53Blgh6iIZYp2LLqJ2L29N/vJG/XuTrjeLro18dguTMEP1M7BurrzWubCv3GkyTAGwGfJuDHgjpz1V3NpbfRfEFGOg4qZbPho/IDYNH5DsL/emAL4BqIRkYoryQ21xc2S7cgo+VZSpfmXs6UXXU7iWHz2MsUQ01gm/I0nO5jWTf2zpL1jFAyajVvei1zXD3UkVHDXSYedvxL0v3h82b1zkEaybcAMZxajx2pLJOo7O5wPEk864NJ+uLvmGUseQrxbgRh3asNkgdJI+OAa6NTia3X48/wjveHVKGTZyK7lQa8ULMkQ8QGMKciW3O0duaUDQin5lBPox8lt/B5PhlfC8jpSfmwsdCbh+rf4j7CsdghvQYx7CLa72X8g1GwuxMmEi+PtKmXxa+jSg1ZM1E6qdMZ6/Oj9eDAaMMkz4bILuQ27QfXwtOCZSjVeUicq04hwqsKoRMA7daEICX1GdYvzSqrV8NAU9u+Pqe/p8+EFOlUZrahEjVdpjyE+m2YUqFodXzfBoLE80dZvxMJ7dRhByNbadlak6FUlRqX6nxPW6pRMBM5WiZ2ny1cSHeQ/2kt+f9wJtD4MLUbCzJRNeC+ZnpnIGo20lUzZBKe5htN/B9UcUjyLuQVAybYR6LOUulLKX+5M1Jax8LVmmnM5RB4qngnDq97zbp1WjrqL/8fXO30ra6UTLtp+UPhrbUVjVXCuXO6AfhXRzu99ceBgEV+IbcPZ/tUs3/8Qu9Lkt7Z2hFspDb1uzYINqeZDZqK35lmrnNDOOeZAFq52jr2K7PxTdXdastxVKF/sOWkRnoN1f1eYWKC6fvDo/P9vhX8HcQXENLkSXWHkLjj7v2Jv/rYzBwPBFj7F7j67lM9Ke51Vj9z5OrjT99/ReFWNbR5jgAAA==" /></Footer>{/_ END_HRIS_TIMEOFF_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `TimeOffBalance` objects.{/_ BEGIN_HRIS_TIMEOFFBALANCE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WYW2/bNhSA/4rBR8O2kjpZFgPD4NjxJZkVzZeuQREIR9SxTJsiZZKKL0X/+yBbzuK22ZCE69zsTRfyo/jpHPJInwgFg5FUK1IjE8U0KZFYhshJjQxZjDfj8QVwEBRJiUDCXIiR1EgPVYSFTr87KNS9LikRnSaJVAbDFkMe6o7CMakRJ87alVPBxgxDJ+M7VN6jggidhy7l8aYPKRHOxAzDOqUyFebvINuGZdi2/OI0u60NKZEEtDYTJdNo0sd5ivop5kzIBccwwnIAevtkHGMUBng5BAPOI1JZbVHfupbNIUSOBsMmGGiiQWqYFPmoE2MSXXOcCfKksnmCSoj3DgoHlGGUo3ZOq+fvzs5PyzllM/qvfsR/OS5O54EMzop+RLkPabE3pEt32F240+jEbZws3fXo1F3P1u50dlT0Iyj2hr3Tm+Ft9aZZP775RgN/8NOH8/cXzYsrt0jXl1V3ertwh/S4N6SzYN2tXrXp4qrz+9Jd377rNUdVd3h5etWWxzeNvu41+rJXr1RIiTBhMFKQTVOT2sdPjy/k0VJvegUXl6bQRrHfoxtDhI/MbF8LJKycpAFntKKrFYhhLQUsdIXK2IkxZODUm56fEf02Cn8wT0FhJRHRTj+T4sE9qZFLt1N3G5fN/ZCo3wPjEHAkNaNS/CqGSe0jCR5iH+OEyxVmh4nkjK58s0qyM4WxNOhnL2r/zE/ATEiJpBpDcpfdmqdMYeiBghgNqmyEu8+lp4z9IdVsLBXFgisX9rQ9YH1XLt6kO25QQcGDlZKcWxK3Yea2/N9kJN+UsguIAyk7fTuydrQ9XdPk7ehqTEBxhnZs5bAvdH236PpHQfklFr5QVhNWm+XGji2PgxlLFe+oh5uGgs3TTBsKkxUZ6rneWpLPdMFWTu68bai+PpRV/zVZ2EaBitHCoDX07EiKtkRfj02SO/Ljq+ryqDv6j129OPs6LJCB3RDaIA8gduxFUieNAYS2oymH/RCb32ujy4NVAxIDzFJZ78GKbnnffYl60fRRaSmYtDT5nLaLnJZ8D+2z4cFm2quDh4MIYWV3ccqh/4q0l1VNz7WiJGcgjCUtOe1/sRoNYPNPyo65DOY/KsqrweLkrHewyfh1ufkKhx7KhFsq2Dcet8CdS7ocdOn19CC/cZ6rq+4VBimlqHULqJHKUhGxz3ycvf4F/SCj1tEPkMXPdDm6bhc8ZWkzHV23D+crx16lmjnqI4SWds2/LPkRQufnuXeQSfkyV9mPTuv1RQ490KB62tDd5z8B1dymneoZAAA=" /></Footer>{/_ END_HRIS_TIMEOFFBALANCE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timeOffBalances.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Returns a `TimeOffBalance` object with the given `id`.{/_ BEGIN_HRIS_TIMEOFFBALANCE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WYW2/bNhSA/4rBR8O2kjpZFgPD4NjxJZkVzZeuQREIR9SxTJsiZZKKL0X/+yBbzuK22ZCE69zsTRfyo/jpHPJInwgFg5FUK1IjE8U0KZFYhshJjQxZjDfj8QVwEBRJiUDCXIiR1EgPVYSFTr87KNS9LikRnSaJVAbDFkMe6o7CMakRJ87alVPBxgxDJ+M7VN6jggidhy7l8aYPKRHOxAzDOqUyFebvINuGZdi2/OI0u60NKZEEtDYTJdNo0sd5ivop5kzIBccwwnIAevtkHGMUBng5BAPOI1JZbVHfupbNIUSOBsMmGGiiQWqYFPmoE2MSXXOcCfKksnmCSoj3DgoHlGGUo3ZOq+fvzs5PyzllM/qvfsR/OS5O54EMzop+RLkPabE3pEt32F240+jEbZws3fXo1F3P1u50dlT0Iyj2hr3Tm+Ft9aZZP775RgN/8NOH8/cXzYsrt0jXl1V3ertwh/S4N6SzYN2tXrXp4qrz+9Jd377rNUdVd3h5etWWxzeNvu41+rJXr1RIiTBhMFKQTVOT2sdPjy/k0VJvegUXl6bQRrHfoxtDhI/MbF8LJKycpAFntKKrFYhhLQUsdIXK2IkxZODUm56fEf02Cn8wT0FhJRHRTj+T4sE9qZFLt1N3G5fN/ZCo3wPjEHAkNaNS/CqGSe0jCR5iH+OEyxVmh4nkjK58s0qyM4WxNOhnL2r/zE/ATEiJpBpDcpfdmqdMYeiBghgNqmyEu8+lp4z9IdVsLBXFgisX9rQ9YH1XLt6kO25QQcGDlZKcWxK3Yea2/N9kJN+UsguIAyk7fTuydrQ9XdPk7ehqTEBxhnZs5bAvdH236PpHQfklFr5QVhNWm+XGji2PgxlLFe+oh5uGgs3TTBsKkxUZ6rneWpLPdMFWTu68bai+PpRV/zVZ2EaBitHCoDX07EiKtkRfj02SO/Ljq+ryqDv6j129OPs6LJCB3RDaIA8gduxFUieNAYS2oymH/RCb32ujy4NVAxIDzFJZ78GKbnnffYl60fRRaSmYtDT5nLaLnJZ8D+2z4cFm2quDh4MIYWV3ccqh/4q0l1VNz7WiJGcgjCUtOe1/sRoNYPNPyo65DOY/KsqrweLkrHewyfh1ufkKhx7KhFsq2Dcet8CdS7ocdOn19CC/cZ6rq+4VBimlqHULqJHKUhGxz3ycvf4F/SCj1tEPkMXPdDm6bhc8ZWkzHV23D+crx16lmjnqI4SWds2/LPkRQufnuXeQSfkyV9mPTuv1RQ490KB62tDd5z8B1dymneoZAAA=" /></Footer>{/_ END_HRIS_TIMEOFFBALANCE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `TimesheetEntry` objects.{/_ BEGIN_HRIS_TIMESHEETENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92WXW/aMBSG/wryJQrJKGVdI00TBcpHl8AgdKuqKjo4h2Bw4mA75aPqf5/SQNdu3W6Wi4q72D5+bD9+E+WBUNAYCrklNplLpohBIhEgJzbxWIRqjqjbsZZbYhBImAsREps4KEMsdUe9cakx7BGDqDRJhNQYXDLkgepKnBGbWFFWV0ljNmMYWBnfouIeJYRoPU+pzJ7mEINwFi8xaFAq0lj/C5IXViCv/K2ZDStNDJKAUnouRRrOR7hKUf2NuYzFmmMQYmUKKt8ZxwhjDbwSgAbrBakic9RbfdkZAuSoMWiBhhZqpJqJeL/qXOtE2ZY1R56YTzswA7y3MLZAakY5KqteOz85O69X9pSn1b/4If9cLS9WUzE9K/sh5T6kZcejG9frrd1FeOo2TzfublJ3d8udu1h+KPshlB3PqQ+8m9qg1agO3ijwxx9/nF9ftC76bpnu2jV3cbN2PVp1PLqc7nq1foeu+91vG3d3c+K0JjXXa9f7HVEdNEfKaY6E0zBNYhAWawwlZMdUxL59eNmxT8sFRFMhuqPX1b0IQnxhJb8SSFglSaecUVPVTIhgJ2JYK5OKyIowYGAdaP54lYJE/6sIhblIwoN7JuJn8cQmbbfbcJvt1us8NO6BcZhyJLaWKf4RYGLfEowSLraIxCAYB75mUfY4F6lU/lrIJQbEIBIjodHP7ul1y09Az391saxYaZA6B91lI6uUSQyGICFCjTJb9e7ReEthd/RdyKUqxuCQg54JGe2hZhIft7whbKmIinWXM9+xuv/QhVKJmImChO1ph9f1UlxD58x7x+YKCh2HOIBtwanLoUcvbwwhloYoEo7FCMyAfg48BJFuxj16tTh6l55kLupSd1Q6pKgYpZ5kMWq/evQCJ1ed0gghKOhdnlx1fJVHMETofloNj95g9ptR+LdwDz0meXePPwHJWVYtkA0AAA==" /></Footer>{/_ END_HRIS_TIMESHEETENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.hris.timesheetEntries.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

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

Creates a `TimesheetEntry` object with the given values.{/_ BEGIN_HRIS_TIMESHEETENTRY_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE92SXW/aMBSG/0p1LlE+RinrGmmaKDA+ugRGw7SqqqKDcwgGJw62A4Wq/30K0Krdul0hTdudY79+bD95H4ChoUSqDXgwU1yDBamMSYAHIU9Jz4hMOzNqAxZgzgNMCTzwSSV00h31rk8awx5YoIs8l8pQ/JmTiHVX0RQ8cNMyZxcZn3KK3ZLvMrkihQm5z1vs6W4PWCB4tqC4wZgsMvMnyD5o4z7502e5rA1YkKPWZqZkkcxGtCxI/465yORaUJyQPUG9v5mglDKDwo7RoPuCZKs96q258g0xCTIUt9Bgiwwxw2V2OHVmTK49152RyJ3dDZyYVi5lLirDmSDt1msXp+cXdftA2Z3+KUrEx2plvpzIyXklSpiIsKj4IbsPwt46mCdnQfPsPtiO68F2sQ3mi3eVKMGKH/r1QXhTG7Qa1cEbgej6/feLb5ety35QYdt2LZjfrIOQVf2QLSbbXq3fYet+9+t9sL059VvjWhC26/2OrA6aI+03R9JvOA5YwDNDicLymRq824eXE4e2XGI6kbI7ep3upZjQCyv7X4I5t/NiIjhzdM3BFLcyw7V2mEzdlGKO7hMtul4WqCj6IhPpzPPkyT2X2bN48KAddBtBs9163YfGCrnAiSDwjCrolwKDdwuU5kJuiMACyuLI8LQczmShdLSWakExWKAolYYiXo61QWX2ubtyZVlwRfEQFaZkSL2G3j1ab7lq4WYqFaPjuBoKNFOp0ieqk2f/iachbphUx7WU75iR3vXq76k6hp7xVedkRBhvjmNofNU5aIkSwu6H5fCfbNLd4w9xMqSD8AYAAA==" /></Footer>{/_ END_HRIS_TIMESHEETENTRY_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `TimesheetEntry` object with the given `id`.{/_ BEGIN_HRIS_TIMESHEETENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92WXW/aMBSG/wryJQrJKGVdI00TBcpHl8AgdKuqKjo4h2Bw4mA75aPqf5/SQNdu3W6Wi4q72D5+bD9+E+WBUNAYCrklNplLpohBIhEgJzbxWIRqjqjbsZZbYhBImAsREps4KEMsdUe9cakx7BGDqDRJhNQYXDLkgepKnBGbWFFWV0ljNmMYWBnfouIeJYRoPU+pzJ7mEINwFi8xaFAq0lj/C5IXViCv/K2ZDStNDJKAUnouRRrOR7hKUf2NuYzFmmMQYmUKKt8ZxwhjDbwSgAbrBakic9RbfdkZAuSoMWiBhhZqpJqJeL/qXOtE2ZY1R56YTzswA7y3MLZAakY5KqteOz85O69X9pSn1b/4If9cLS9WUzE9K/sh5T6kZcejG9frrd1FeOo2TzfublJ3d8udu1h+KPshlB3PqQ+8m9qg1agO3ijwxx9/nF9ftC76bpnu2jV3cbN2PVp1PLqc7nq1foeu+91vG3d3c+K0JjXXa9f7HVEdNEfKaY6E0zBNYhAWawwlZMdUxL59eNmxT8sFRFMhuqPX1b0IQnxhJb8SSFglSaecUVPVTIhgJ2JYK5OKyIowYGAdaP54lYJE/6sIhblIwoN7JuJn8cQmbbfbcJvt1us8NO6BcZhyJLaWKf4RYGLfEowSLraIxCAYB75mUfY4F6lU/lrIJQbEIBIjodHP7ul1y09Az391saxYaZA6B91lI6uUSQyGICFCjTJb9e7ReEthd/RdyKUqxuCQg54JGe2hZhIft7whbKmIinWXM9+xuv/QhVKJmImChO1ph9f1UlxD58x7x+YKCh2HOIBtwanLoUcvbwwhloYoEo7FCMyAfg48BJFuxj16tTh6l55kLupSd1Q6pKgYpZ5kMWq/evQCJ1ed0gghKOhdnlx1fJVHMETofloNj95g9ptR+LdwDz0meXePPwHJWVYtkA0AAA==" /></Footer>{/_ END_HRIS_TIMESHEETENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns metadata for `TimesheetEntry` POSTs.{/_ BEGIN_HRIS_TIMESHEETENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92WXW/aMBSG/wryJQrJKGVdI00TBcpHl8AgdKuqKjo4h2Bw4mA75aPqf5/SQNdu3W6Wi4q72D5+bD9+E+WBUNAYCrklNplLpohBIhEgJzbxWIRqjqjbsZZbYhBImAsREps4KEMsdUe9cakx7BGDqDRJhNQYXDLkgepKnBGbWFFWV0ljNmMYWBnfouIeJYRoPU+pzJ7mEINwFi8xaFAq0lj/C5IXViCv/K2ZDStNDJKAUnouRRrOR7hKUf2NuYzFmmMQYmUKKt8ZxwhjDbwSgAbrBakic9RbfdkZAuSoMWiBhhZqpJqJeL/qXOtE2ZY1R56YTzswA7y3MLZAakY5KqteOz85O69X9pSn1b/4If9cLS9WUzE9K/sh5T6kZcejG9frrd1FeOo2TzfublJ3d8udu1h+KPshlB3PqQ+8m9qg1agO3ijwxx9/nF9ftC76bpnu2jV3cbN2PVp1PLqc7nq1foeu+91vG3d3c+K0JjXXa9f7HVEdNEfKaY6E0zBNYhAWawwlZMdUxL59eNmxT8sFRFMhuqPX1b0IQnxhJb8SSFglSaecUVPVTIhgJ2JYK5OKyIowYGAdaP54lYJE/6sIhblIwoN7JuJn8cQmbbfbcJvt1us8NO6BcZhyJLaWKf4RYGLfEowSLraIxCAYB75mUfY4F6lU/lrIJQbEIBIjodHP7ul1y09Az391saxYaZA6B91lI6uUSQyGICFCjTJb9e7ReEthd/RdyKUqxuCQg54JGe2hZhIft7whbKmIinWXM9+xuv/QhVKJmImChO1ph9f1UlxD58x7x+YKCh2HOIBtwanLoUcvbwwhloYoEo7FCMyAfg48BJFuxj16tTh6l55kLupSd1Q6pKgYpZ5kMWq/evQCJ1ed0gghKOhdnlx1fJVHMETofloNj95g9ptR+LdwDz0meXePPwHJWVYtkA0AAA==" /></Footer>{/_ END_HRIS_TIMESHEETENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

<details><summary><code>client.accounting.accountToken.<a href="/src/api/resources/accounting/resources/accountToken/client/Client.ts">retrieve</a>(publicToken, { ...params }) -> Merge.AccountToken</code></summary>
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

**request:** `Merge.accounting.RetrieveAccountTokenRequest`

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

Returns a list of `AccountingPeriod` objects.{/_ BEGIN_ACCOUNTING_PERIOD_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_PERIOD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accountingPeriods.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListAccountingPeriodsRequest`

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

Returns an `AccountingPeriod` object with the given `id`.{/_ BEGIN_ACCOUNTING_PERIOD_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_PERIOD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveAccountingPeriodsRequest`

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

Returns a list of `Account` objects.{/_ BEGIN_ACCOUNTING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VZa0/jOBT9K5U/oj4GOgVRabTqi6HsNmWgzMKOkHXr3KZuEzvYTqEdzX9fJU36YFqWlrSw3xrjnGvfc+7JtflJGBh0pBqTMgHGZCAMFw7JEk/a6JIyqUwHSZaAzy3wkJRJC5WDmcpseqZy2SRZogPfl8qgfcbRtfW5wh4pk4IXzs4Fgvc42oW+4rrA5AgVOFiYvZLrRe+QLHG5GKIdg78EMp2Yi1f97DH8sw5X7YPWpq9k4PSv8CFAvQ5zKOSji7aDuS7o6cpc9FAYcHM2GCgsIOXUFGrVWLgHG100aNfBQB0NMsOliKP2jfF1uVDoo+vnoxXkbRwVUBRAGc5c1IVS8fTo5LSUi1Gi6H9Qx/1yeDB46MruyQF1mEshOGh12JPVaT5aA+ezVfv8ZE1uStZkOLEGw08H1IGDVqdVanfuiu165bC9YgK9Pr49/V6tVy+sAzZpFK3B3aPVYYetDht2J83ixVf2eHH+7cma3B216jdFq9MoXXyVh+3alW7VrmSrks+TLOHCoKMg3KYm5R8/FwdizdRcBJWpSjnUyy80PXBwITFTVsDnOT/oupzldTEPHkykgEedZ9IreGhzKESANAKk1w8BKKR/SUfmB76TMMClmKWflEnDOq9YtUZ9WRWVEXAXui6SslEB/iZjUv6RVAYVgddFRbKEBUqhYOPZT0O74IJgSLJEhDvOEoWeNEhD9pafqA+mPx/iNskSM/aR3IdjDwFXaF+CAg8NqjD+/a/sqpSeKcSKg1FxppDQSxdMTyqvpxAhhKV6mtbhlRnXvx7lfbGPzLqgNe9xFu0liqeZ4n78hE8+Co1TDY0kZ0hdLpByg144OJCBEuBGg3rOhQ8RRzAzs43I0UE3eVVvQZLupyj7Od47qP45Ny+WwQJVH46VFmdKatkzmfpYgMeZzhSPS5lqoMMV6kwNhVHgpkPZLBhNgtHicYkmwWgcjNakKxU9fWqcHR+f7Kfa5p98o0BoiEKELIX1tJJx6fkgIsIV2twIaXBx/kuCWK7kjco3UKwPGqWyUS2E27nFrtDJGRfhfjIg7Ezbx+Srl6oFr1BMHJbSecw9GfKM8Q2yvWmapcBxlys75TQmsHvK1Fz8K8W9zvV8GHu4hf8ZMIF+boTb6dxCcx1wg+nk30KjQ7S4gXgh+1al0/zeSM/IaLT5Nb62M79b8dWbOVjyrDDcw/Ph8KeDAkP7jw4fii4sbDY7njKd8Wzlb+2E5upLXHYGkYrtanBRzyBfFG2WjFDYUtFprhf3s6GevwWcDaMuKVNHPTTST9dZ5vgUqwNxEzzu9XudyHyzhmz5+7ubnixFT1rgsD1X+pspnMPm4vPNTe/ouHpy+L+2qWnBhO607AIbCGKNc73SonbtQTQyoWX4j+9D1+DgwqnClYG9cG+WjqDDGLRaqyTnwT9Ht6Pi9WAnhrTGcBZFtZbztRS/gcZtfCXipCkMMJbSzUnEQIyYsDAacUufwEcxlTf0OFt3NOm0K7uQzaz6Uy73v2GE8QGRp3V7kLQcITY979lPR5/MO13FvfV0v83F6DJVm/Ih1dCGccpETEHfiYM1dbK/nN6ikukkNETK/ecRcXfd85Zd1vorr037qR0b5C6Pbykb5z+yL9P851CI9/sl+Z7vy155Y/Bq1Wwni504w/2vfwHbPP6MOh4AAA==" /></Footer>{/_ END_ACCOUNTING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.accounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListAccountsRequest`

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

Creates an `Account` object with the given values.{/_ BEGIN_ACCOUNTING_ACCOUNT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE61U207jMBD9lcqPVS5bShcRabXqbaHVJuVSEAihaOJMU7eOndoOhSL+fZU0dMtSQCv1LRkfn5k5Z8bPhILBRKon4hGgVObCMJEQi6QyRk480l4HiUUgYwGkSDzio0qw1t7Aa+2zAbGIzrNMKoPxL4Y81qcKJ8Qjblqg7VywCcPYnSqmXSofUEGC7uaKPSnvEItwJuYYV+SfkayBdlX1P7/FsS6qzkBrM1UyT6YXuMhRf8Q5F3LJMU7QjkCvK+OYojDA7RgMuFtMtlpT7YoVPcTI0WDcAwM9NEgNk6LKOjUm057rTpFnTlmBE+ODi8IFZRjlqN1W8/jg6LhlVyxl9p9hwn806rNFJKOjephQHkJe98f0MRgPlsEsOQy6h4/B6qoVrOarYDb/Vg8TqPtjvzUa3zZHvXZjtAMQXn6/Ob7u9DrDoE5X/WYwu10GY9rwx3QerQbN4QldDk/PH4PV7YHfu2oG435reCIbo+6F9rsX0m87DrEIEwYTBUWbmnh3z9uBama6HEHVOlLO9dsLgxQS3BJm7QpkzM7yiDPq6KYDKaykgKV2qEzdFGMGbkkYloTh5SIHheFvmUhnliWvDjApNvITj/SD03bQ7ffeTkX7ARiHiCPxjMrx3RgT7+51M0KRpxEqYhGaK4WCPm0+TRgBB0GRWEQUHVtEYSoNhiwmFjFPGZL7IrbImcL4DBSkaFDtpt+SJ8wKqHa0VCakMt4kuH+xdul8njM6L1WpjQRnAvej9l9aW6/FvpocfO8cNZxMfKR30B4Prvv7UJuD1mzCaNnCV/LHqKliWQWtzMigRMHmNdt2RxswuS5fsOgVor907V1VO1M5W/7vduwGldyPSQVTZc8ntuxzDT4xZscWbHT+z3WoqCoR71/+AAl61g62BgAA" /></Footer>{/_ END_ACCOUNTING_ACCOUNT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Account` object with the given `id`.{/_ BEGIN_ACCOUNTING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VZa0/jOBT9K5U/oj4GOgVRabTqi6HsNmWgzMKOkHXr3KZuEzvYTqEdzX9fJU36YFqWlrSw3xrjnGvfc+7JtflJGBh0pBqTMgHGZCAMFw7JEk/a6JIyqUwHSZaAzy3wkJRJC5WDmcpseqZy2SRZogPfl8qgfcbRtfW5wh4pk4IXzs4Fgvc42oW+4rrA5AgVOFiYvZLrRe+QLHG5GKIdg78EMp2Yi1f97DH8sw5X7YPWpq9k4PSv8CFAvQ5zKOSji7aDuS7o6cpc9FAYcHM2GCgsIOXUFGrVWLgHG100aNfBQB0NMsOliKP2jfF1uVDoo+vnoxXkbRwVUBRAGc5c1IVS8fTo5LSUi1Gi6H9Qx/1yeDB46MruyQF1mEshOGh12JPVaT5aA+ezVfv8ZE1uStZkOLEGw08H1IGDVqdVanfuiu165bC9YgK9Pr49/V6tVy+sAzZpFK3B3aPVYYetDht2J83ixVf2eHH+7cma3B216jdFq9MoXXyVh+3alW7VrmSrks+TLOHCoKMg3KYm5R8/FwdizdRcBJWpSjnUyy80PXBwITFTVsDnOT/oupzldTEPHkykgEedZ9IreGhzKESANAKk1w8BKKR/SUfmB76TMMClmKWflEnDOq9YtUZ9WRWVEXAXui6SslEB/iZjUv6RVAYVgddFRbKEBUqhYOPZT0O74IJgSLJEhDvOEoWeNEhD9pafqA+mPx/iNskSM/aR3IdjDwFXaF+CAg8NqjD+/a/sqpSeKcSKg1FxppDQSxdMTyqvpxAhhKV6mtbhlRnXvx7lfbGPzLqgNe9xFu0liqeZ4n78hE8+Co1TDY0kZ0hdLpByg144OJCBEuBGg3rOhQ8RRzAzs43I0UE3eVVvQZLupyj7Od47qP45Ny+WwQJVH46VFmdKatkzmfpYgMeZzhSPS5lqoMMV6kwNhVHgpkPZLBhNgtHicYkmwWgcjNakKxU9fWqcHR+f7Kfa5p98o0BoiEKELIX1tJJx6fkgIsIV2twIaXBx/kuCWK7kjco3UKwPGqWyUS2E27nFrtDJGRfhfjIg7Ezbx+Srl6oFr1BMHJbSecw9GfKM8Q2yvWmapcBxlys75TQmsHvK1Fz8K8W9zvV8GHu4hf8ZMIF+boTb6dxCcx1wg+nk30KjQ7S4gXgh+1al0/zeSM/IaLT5Nb62M79b8dWbOVjyrDDcw/Ph8KeDAkP7jw4fii4sbDY7njKd8Wzlb+2E5upLXHYGkYrtanBRzyBfFG2WjFDYUtFprhf3s6GevwWcDaMuKVNHPTTST9dZ5vgUqwNxEzzu9XudyHyzhmz5+7ubnixFT1rgsD1X+pspnMPm4vPNTe/ouHpy+L+2qWnBhO607AIbCGKNc73SonbtQTQyoWX4j+9D1+DgwqnClYG9cG+WjqDDGLRaqyTnwT9Ht6Pi9WAnhrTGcBZFtZbztRS/gcZtfCXipCkMMJbSzUnEQIyYsDAacUufwEcxlTf0OFt3NOm0K7uQzaz6Uy73v2GE8QGRp3V7kLQcITY979lPR5/MO13FvfV0v83F6DJVm/Ih1dCGccpETEHfiYM1dbK/nN6ikukkNETK/ecRcXfd85Zd1vorr037qR0b5C6Pbykb5z+yL9P851CI9/sl+Z7vy155Y/Bq1Wwni504w/2vfwHbPP6MOh4AAA==" /></Footer>{/_ END_ACCOUNTING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveAccountsRequest`

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

Returns metadata for `Account` POSTs.{/_ BEGIN_ACCOUNTING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VZa0/jOBT9K5U/oj4GOgVRabTqi6HsNmWgzMKOkHXr3KZuEzvYTqEdzX9fJU36YFqWlrSw3xrjnGvfc+7JtflJGBh0pBqTMgHGZCAMFw7JEk/a6JIyqUwHSZaAzy3wkJRJC5WDmcpseqZy2SRZogPfl8qgfcbRtfW5wh4pk4IXzs4Fgvc42oW+4rrA5AgVOFiYvZLrRe+QLHG5GKIdg78EMp2Yi1f97DH8sw5X7YPWpq9k4PSv8CFAvQ5zKOSji7aDuS7o6cpc9FAYcHM2GCgsIOXUFGrVWLgHG100aNfBQB0NMsOliKP2jfF1uVDoo+vnoxXkbRwVUBRAGc5c1IVS8fTo5LSUi1Gi6H9Qx/1yeDB46MruyQF1mEshOGh12JPVaT5aA+ezVfv8ZE1uStZkOLEGw08H1IGDVqdVanfuiu165bC9YgK9Pr49/V6tVy+sAzZpFK3B3aPVYYetDht2J83ixVf2eHH+7cma3B216jdFq9MoXXyVh+3alW7VrmSrks+TLOHCoKMg3KYm5R8/FwdizdRcBJWpSjnUyy80PXBwITFTVsDnOT/oupzldTEPHkykgEedZ9IreGhzKESANAKk1w8BKKR/SUfmB76TMMClmKWflEnDOq9YtUZ9WRWVEXAXui6SslEB/iZjUv6RVAYVgddFRbKEBUqhYOPZT0O74IJgSLJEhDvOEoWeNEhD9pafqA+mPx/iNskSM/aR3IdjDwFXaF+CAg8NqjD+/a/sqpSeKcSKg1FxppDQSxdMTyqvpxAhhKV6mtbhlRnXvx7lfbGPzLqgNe9xFu0liqeZ4n78hE8+Co1TDY0kZ0hdLpByg144OJCBEuBGg3rOhQ8RRzAzs43I0UE3eVVvQZLupyj7Od47qP45Ny+WwQJVH46VFmdKatkzmfpYgMeZzhSPS5lqoMMV6kwNhVHgpkPZLBhNgtHicYkmwWgcjNakKxU9fWqcHR+f7Kfa5p98o0BoiEKELIX1tJJx6fkgIsIV2twIaXBx/kuCWK7kjco3UKwPGqWyUS2E27nFrtDJGRfhfjIg7Ezbx+Srl6oFr1BMHJbSecw9GfKM8Q2yvWmapcBxlys75TQmsHvK1Fz8K8W9zvV8GHu4hf8ZMIF+boTb6dxCcx1wg+nk30KjQ7S4gXgh+1al0/zeSM/IaLT5Nb62M79b8dWbOVjyrDDcw/Ph8KeDAkP7jw4fii4sbDY7njKd8Wzlb+2E5upLXHYGkYrtanBRzyBfFG2WjFDYUtFprhf3s6GevwWcDaMuKVNHPTTST9dZ5vgUqwNxEzzu9XudyHyzhmz5+7ubnixFT1rgsD1X+pspnMPm4vPNTe/ouHpy+L+2qWnBhO607AIbCGKNc73SonbtQTQyoWX4j+9D1+DgwqnClYG9cG+WjqDDGLRaqyTnwT9Ht6Pi9WAnhrTGcBZFtZbztRS/gcZtfCXipCkMMJbSzUnEQIyYsDAacUufwEcxlTf0OFt3NOm0K7uQzaz6Uy73v2GE8QGRp3V7kLQcITY979lPR5/MO13FvfV0v83F6DJVm/Ih1dCGccpETEHfiYM1dbK/nN6ikukkNETK/ecRcXfd85Zd1vorr037qR0b5C6Pbykb5z+yL9P851CI9/sl+Z7vy155Y/Bq1Wwni504w/2vfwHbPP6MOh4AAA==" /></Footer>{/_ END_ACCOUNTING_ACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Address` object with the given `id`.{/_ BEGIN_ACCOUNTING_ADDRESS_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VYbXPaOBD+Kx59ZAAXKDBh5qbDWxpyh0kD6SXXyWgWaTECW3IkmbdO//uNDQRy5d56Ti+5+4QkS8+un2dXu/gzYWDRV3pNGgQYU7G0QvokT0LFMSAN0uRcozEkTyASHoRIGqSP2ken+bjdaV71SJ6YOIqUtsjPBQbcXGickAZxw2R3IZZiIpC7Uy2My9QCNfjoPh4pTNIzJE8CIefId+B/BLLdWNh5/Ztp8thYkicRGGOnWsX+9BofYjS/hzmXahkg97EwBrP1LMAQpYWgwMGCe4RU0FuoU2vJO3AM0CLvgIUOWmRWKLmzOrU2Mg3XnWIQFVMPihwXLkoXtBUsQONWK2fl+lm1sENJrb+jfvBDKTd7GKtxPUd9FlCIc/0RW3mj3tKb+W+99tuVt7mpepv5xpvN3+SoD7n+qF8djO4qg06zNDixgQ5rt2cfW53WpZdjm27Fm90tvREr9UdsPt70Kpfv2fLy4sPK29yV+52bijfqVi/fq9KgfW367WvVbxaLJE+EtOhrSF7TkManz8cLu5g512imLaXm5un+Xgg+HvGyFQUiUYjicSBY0VSKEMJGSViaIlOhGyIX4B7w6PAhBo30J+Wr4izy9/wLJR/JJw3S9S6aXrvbeRoTzQWIAMYBkobVMX4VxKTxiTBh1yRPmAojkGsq5ESlU2mB2XQUS6vXhxE18ZiLhTCJ5TzRGCqLNJHx6YxGYKeHJcGTJLJgMf3ViJaWDsMyyRO7jpKHGxFRpjiS++TwQyw08ivQEKJFnfh8/yV/SoS+YFoZNbFOZy0hFMw4lVrVacVGSDTGaaO0GoJsFHo0RvfGaKVWpXtjdGeMtlWgND1bdc9rtXoxki9PwCjWbAoGqdI84ff7q3QuJEiGDkjuDCLcp1omOl0FYCdKhyf02pml9GDzlQj0NKVOifTN6iiJ67HQPGP297D/MsF/ellly6aHdhiLNJcyINNDaxI0atKS8CJj9e9VAwjQHF87z3DdfIgFm6eV1OmgmVsVZRvZB3yKrZm8iZevU5dnvfOPRBjIQMiMEuIAW9imBL2ZlGuteul1SvDdGqUh+HjUFgUq5kf/d7LRJrFBW+3mvn/9cXG7qAxn/wVlsqwQqRS9xNHU06yI3yHuyV8shGfq8Lzk/1W2nyWkf4YF7vpIkVWLv7/iE2x6MeGr8hv7/+pfblGrbLhMkAovom/5h5XwW6n8RU2Vk+EXggTv6w8EL4LaTAvY/ZdfATf99KTGEwAA" /></Footer>{/_ END_ACCOUNTING_ADDRESS_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveAddressesRequest`

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

<details><summary><code>client.accounting.asyncPassthrough.<a href="/src/api/resources/accounting/resources/asyncPassthrough/client/Client.ts">retrieve</a>(asyncPassthroughReceiptId, { ...params }) -> Merge.RemoteResponse</code></summary>
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

**request:** `Merge.accounting.RetrieveAsyncPassthroughRequest`

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

<details><summary><code>client.accounting.asyncTasks.<a href="/src/api/resources/accounting/resources/asyncTasks/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.AsyncPostTask</code></summary>
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

**request:** `Merge.accounting.RetrieveAsyncTasksRequest`

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

Returns a list of `AccountingAttachment` objects.{/_ BEGIN_ACCOUNTING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.attachments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListAttachmentsRequest`

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

Creates an `AccountingAttachment` object with the given values.{/_ BEGIN_ACCOUNTING_ATTACHMENT_CREATE_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_ATTACHMENT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `AccountingAttachment` object with the given `id`.{/_ BEGIN_ACCOUNTING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveAttachmentsRequest`

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

Returns metadata for `AccountingAttachment` POSTs.{/_ BEGIN_ACCOUNTING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_ATTACHMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
await client.accounting.auditTrail.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListAuditTrailRequest`

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

## Accounting BalanceSheets

<details><summary><code>client.accounting.balanceSheets.<a href="/src/api/resources/accounting/resources/balanceSheets/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedBalanceSheetList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `BalanceSheet` objects.{/_ BEGIN_ACCOUNTING_BALANCESHEET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81TYU/iQBD9K2Y/EtoeImdscrmAoGKOoogXjTGbYTu0C9vdursFxfjfLy2cWk89zaG5j30z+2b65r1bwsBipPQN8QkwpjJpuYxIlSQqREF80gIBkuFJjGhJlUDKA0iQ+KSHOsKN5v2bjeZRl1SJydJUaYvhHkcRmgONY+ITL8m7nUzyMcfQizU3HlMz1BChd//EGRdvSJUILqcYrshfI1k2OqvVn3zmZZNvnYIxNtYqi+IBXmVoXuKcSjUXGEbojMAsNxOYoLQgnBAseI+YHL2keg7L/yFEgRbDNlhoo0VmuZKrqbG1qfE9L0aRusUGbogzD6UH2nIm0HiN+s7m9k7DWbEU07/TSHyrVSZXIzXartCICQpZpTdk18GwOw8m0Vawu3UdLE4bwWK6CCbTLxUaQaU37DX6w/N6v92s9Z9poCdfz3Z+ttqtw6DCFp16MDmfB0NW6w3ZdLTo1g/32fzw4Pg6WJxv9tqn9WDYaRzuq1p/d2B6uwPVa7ouqRIuLUYa8t80xL+4fQysPLOn0cQtpaam3N9NIMJHuiyPAil30mwkOHNN3YUEFkrC3LhMJV6CIQfvgY+eXGWgkf5QkXInafRbf67kvfjEJ53goBnsdtplTzRnwAWMBBLf6gz/MDHxL8gAc6RrMXFHy0hQs8rEoxIDE9OxUHNqLNjCOeUGLplK8KWqzGUqIUqHqMtQChqlpdxiUi5oTJRFmjvlxQJNwcblqslGBZkpw/YmfbLLDESWQyzTGiW7yTUGmyMSLQVjsPB9eY1nZuuCcjXzMv++yrjG8Ag0JGhR54Jf3lWfc1CA9iTjxdA1+CdAa3I2agr3uKn8UOO89/gr7Xj4tsu8U8rjjLNpEZ6NvhRcrknTB1pnqSo9HW9+bW3XPlrdz4zl3zL49GTryNhyiTekq4AilKjBYkjB/mPmzlCr9XgjZ3I+J2uvuOG/O/ZnXvjy7hcaHlrV9AkAAA==" /></Footer>{/_ END_ACCOUNTING_BALANCESHEET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.balanceSheets.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListBalanceSheetsRequest`

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

Returns a `BalanceSheet` object with the given `id`.{/_ BEGIN_ACCOUNTING_BALANCESHEET_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81TYU/iQBD9K2Y/EtoeImdscrmAoGKOoogXjTGbYTu0C9vdursFxfjfLy2cWk89zaG5j30z+2b65r1bwsBipPQN8QkwpjJpuYxIlSQqREF80gIBkuFJjGhJlUDKA0iQ+KSHOsKN5v2bjeZRl1SJydJUaYvhHkcRmgONY+ITL8m7nUzyMcfQizU3HlMz1BChd//EGRdvSJUILqcYrshfI1k2OqvVn3zmZZNvnYIxNtYqi+IBXmVoXuKcSjUXGEbojMAsNxOYoLQgnBAseI+YHL2keg7L/yFEgRbDNlhoo0VmuZKrqbG1qfE9L0aRusUGbogzD6UH2nIm0HiN+s7m9k7DWbEU07/TSHyrVSZXIzXartCICQpZpTdk18GwOw8m0Vawu3UdLE4bwWK6CCbTLxUaQaU37DX6w/N6v92s9Z9poCdfz3Z+ttqtw6DCFp16MDmfB0NW6w3ZdLTo1g/32fzw4Pg6WJxv9tqn9WDYaRzuq1p/d2B6uwPVa7ouqRIuLUYa8t80xL+4fQysPLOn0cQtpaam3N9NIMJHuiyPAil30mwkOHNN3YUEFkrC3LhMJV6CIQfvgY+eXGWgkf5QkXInafRbf67kvfjEJ53goBnsdtplTzRnwAWMBBLf6gz/MDHxL8gAc6RrMXFHy0hQs8rEoxIDE9OxUHNqLNjCOeUGLplK8KWqzGUqIUqHqMtQChqlpdxiUi5oTJRFmjvlxQJNwcblqslGBZkpw/YmfbLLDESWQyzTGiW7yTUGmyMSLQVjsPB9eY1nZuuCcjXzMv++yrjG8Ag0JGhR54Jf3lWfc1CA9iTjxdA1+CdAa3I2agr3uKn8UOO89/gr7Xj4tsu8U8rjjLNpEZ6NvhRcrknTB1pnqSo9HW9+bW3XPlrdz4zl3zL49GTryNhyiTekq4AilKjBYkjB/mPmzlCr9XgjZ3I+J2uvuOG/O/ZnXvjy7hcaHlrV9AkAAA==" /></Footer>{/_ END_ACCOUNTING_BALANCESHEET_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveBalanceSheetsRequest`

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

Returns a list of `BankFeedAccount` objects.{/_ BEGIN_ACCOUNTING_BANKFEEDACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31TbU/iQBD+K2Y+kr4cImdscrkgoELS4nn1ojGmGXaHsrDdLbtb0Rr/+6WAnN55fpxnZp555u0ZGDrKtXmCCJAxXSknVA4eFJqThAhOUS3PiHhv6wQPsBQJFgQRxGRyOujt0w56lyPwwFZlqY0jfiZIcnthaAYRhEUT7VdKzATxcG6EDZl+IIM5hfsUf7bJAQ+kUMt92c9ItoH+Tv1fZuO2jeoSrXVzo6t8fkWriuz/OJdKryXxnPwp2q0ySQUph9Ln6DB8w+SbLdVHWNMDJ0mO+AAdDsgRc0KrXdW5c6WNwnBOsgw2CgJODyGpEI0TTJINu52Tw+OTrr9j2VT/nuXyW7u1WE319LiV5UxmWLXilD0m6WidLPKjpH/0mNTX3aRe1sli+aWV5diK07g7SW87k0GvPfkgIPv59ebk1+ngdJy0WD3sJIvbdZKydpyy5bQedcbnbD2++PGY1LeH8eC6k6TD7vhctyf9Kxv3r3TcCwLwQChHucGmTQvR3fNbYHczN2T0+8hRgTm9mch2HVgKv6ymUrDAdgIssNYK1zZguggL4gLDhsm3qwoNBeXmZjeDElrtZw0RDJOLXtIfDt6fQO8BhcSpJIicqeifm4Xo7vUdMvdUEnjAKmNIsSfwYEbEM+vQVc2SDRXaUdZs572VlejmfyDBm9/QlWGUvXJvMIcmJ/cppprh3TdUq0oY4pdosCBHplF6/3L/8hvOwA3nyQMAAA==" /></Footer>{/_ END_ACCOUNTING_BANKFEEDACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListBankFeedAccountsRequest`

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

Creates a `BankFeedAccount` object with the given values.{/_ BEGIN_ACCOUNTING_BANKFEEDACCOUNT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE81T207jMBD9FeTHKpctpSAirVa9Aa2UlEtZgRCKJs40dePYwXYoFPHvq/S2hWZXPLBaHj2eOXPOnJkXQsFgItUz8QhQKgthmEiIRTIZIyceaYNITxDj1vKTWARyFkCGxCM+qgT3WpuyvdZ5n1hEF3kulcH4hCGP9ZnCMfGIm5XZdiHYmGHsThTTLpWPqCBBd1Nijxc1xCKciXTT9m8gy0R7xf7ds/zWJesctDYTJYtkcokPBeo/YaZCzjjGCdoR6CUzjhkKA9yOwYC7hWSrJVRVrNQQI0eDcRcMdNEgNUyKVdeJMbn2XHeCPHcWDJwYH10ULijDKEftNhvH+0fHTXuFsuj+I0z493pt+hDJ6KgWJpSHUNT8EX0KRv1ZME0Ogs7BUzC/bgbzdB5M02+1MIGaP/Kbw9FtY9ht1YcVCeHV4c3xz3a3PQhqdN5rBNPbWTCidX9E02jebwxO6WxwdvEUzG/3/e51Ixj1moNTWR92LrXfuZR+y3GIRZgwmCgoZWri3b1sB1Y7E6C5KpjBt9n9DBLcmsrSEsiZnRcRZ9TRDQcymEsBM+1QmbkZxgzcAI0u0UL9UIBCJ1/s7mJgTIrNzIlHesFZK+j0um9XofUIjEPEkXhGFbizu8S7W59FaJ7zkjUtlEJBn4lFxohxqA0oE8awkLSOmKK0X8tCUQzXABFwEBR3P1i8GxPluHajRRahIhYxoBI0bxHexRYI9xYp95EpjM9BQYYGVZWqjzPa7Xz/alU5fVEwmralTPXeUHAmPsny37D20vTwerx/2D6q/yfz/7HVn2ngCrHarhtU8nMcKpHsL3mQCjNpsHI4X/k4txRu2RPmZY2uDDobBJmiqE55z2jNvkr/hxW93r/+Ag0ssBpUCAAA" /></Footer>{/_ END_ACCOUNTING_BANKFEEDACCOUNT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `BankFeedAccount` object with the given `id`.{/_ BEGIN_ACCOUNTING_BANKFEEDACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31TbU/iQBD+K2Y+kr4cImdscrkgoELS4nn1ojGmGXaHsrDdLbtb0Rr/+6WAnN55fpxnZp555u0ZGDrKtXmCCJAxXSknVA4eFJqThAhOUS3PiHhv6wQPsBQJFgQRxGRyOujt0w56lyPwwFZlqY0jfiZIcnthaAYRhEUT7VdKzATxcG6EDZl+IIM5hfsUf7bJAQ+kUMt92c9ItoH+Tv1fZuO2jeoSrXVzo6t8fkWriuz/OJdKryXxnPwp2q0ySQUph9Ln6DB8w+SbLdVHWNMDJ0mO+AAdDsgRc0KrXdW5c6WNwnBOsgw2CgJODyGpEI0TTJINu52Tw+OTrr9j2VT/nuXyW7u1WE319LiV5UxmWLXilD0m6WidLPKjpH/0mNTX3aRe1sli+aWV5diK07g7SW87k0GvPfkgIPv59ebk1+ngdJy0WD3sJIvbdZKydpyy5bQedcbnbD2++PGY1LeH8eC6k6TD7vhctyf9Kxv3r3TcCwLwQChHucGmTQvR3fNbYHczN2T0+8hRgTm9mch2HVgKv6ymUrDAdgIssNYK1zZguggL4gLDhsm3qwoNBeXmZjeDElrtZw0RDJOLXtIfDt6fQO8BhcSpJIicqeifm4Xo7vUdMvdUEnjAKmNIsSfwYEbEM+vQVc2SDRXaUdZs572VlejmfyDBm9/QlWGUvXJvMIcmJ/cppprh3TdUq0oY4pdosCBHplF6/3L/8hvOwA3nyQMAAA==" /></Footer>{/_ END_ACCOUNTING_BANKFEEDACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveBankFeedAccountsRequest`

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

Returns metadata for `BankFeedAccount` POSTs.{/_ BEGIN_ACCOUNTING_BANKFEEDACCOUNT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31TbU/iQBD+K2Y+kr4cImdscrkgoELS4nn1ojGmGXaHsrDdLbtb0Rr/+6WAnN55fpxnZp555u0ZGDrKtXmCCJAxXSknVA4eFJqThAhOUS3PiHhv6wQPsBQJFgQRxGRyOujt0w56lyPwwFZlqY0jfiZIcnthaAYRhEUT7VdKzATxcG6EDZl+IIM5hfsUf7bJAQ+kUMt92c9ItoH+Tv1fZuO2jeoSrXVzo6t8fkWriuz/OJdKryXxnPwp2q0ySQUph9Ln6DB8w+SbLdVHWNMDJ0mO+AAdDsgRc0KrXdW5c6WNwnBOsgw2CgJODyGpEI0TTJINu52Tw+OTrr9j2VT/nuXyW7u1WE319LiV5UxmWLXilD0m6WidLPKjpH/0mNTX3aRe1sli+aWV5diK07g7SW87k0GvPfkgIPv59ebk1+ngdJy0WD3sJIvbdZKydpyy5bQedcbnbD2++PGY1LeH8eC6k6TD7vhctyf9Kxv3r3TcCwLwQChHucGmTQvR3fNbYHczN2T0+8hRgTm9mch2HVgKv6ymUrDAdgIssNYK1zZguggL4gLDhsm3qwoNBeXmZjeDElrtZw0RDJOLXtIfDt6fQO8BhcSpJIicqeifm4Xo7vUdMvdUEnjAKmNIsSfwYEbEM+vQVc2SDRXaUdZs572VlejmfyDBm9/QlWGUvXJvMIcmJ/cppprh3TdUq0oY4pdosCBHplF6/3L/8hvOwA3nyQMAAA==" /></Footer>{/_ END_ACCOUNTING_BANKFEEDACCOUNT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `BankFeedTransaction` objects.{/_ BEGIN_ACCOUNTING_BANKFEEDTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_BANKFEEDTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.bankFeedTransactions.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListBankFeedTransactionsRequest`

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

Creates a `BankFeedTransaction` object with the given values.{/_ BEGIN_ACCOUNTING_BANKFEEDTRANSACTION_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE81Ta0/bQBD8K2g/Rn40pCnCUlUlhBaQ4vAIFQgha323cQ7bd+buTCCI/17ZcSFpw6MSVfvR69m5mZ3de2BoKVH6DgJAxlQprZAJOJArThkE0EeZfiXiY43SILNCSXAACxFiThDAkHRCG73H1o3e4T44YMqiUNoS/yoo42ZP0wQC8PMK7ZZSTARxf6qF8Zm6IY0J+Y8t7qTuAQcyIVPiDflLJAug2zj45bP6bSw4UKAxdqpVmUyP6bok8xxnKtUsI56QG6NZKMsoJ2kxczla9JeYXL2gWlerPHDKyBIfoMUBWaon2Lw6tbYwge9PKSu8WoHH6cYn6aO2gmVk/G5ne3Nru+s2LPXrX6Ik+9xuXV3HKt5qRQnLIixbwzG7Dcf7s/Aq+RjufLwN56fdcJ7Ow6v0QytKsDUcD7uj8XlnNOi1R2sA0cmns+3v/UH/IGyx+W4nvDqfhWPWHo5ZGs/3Owff2Oxg7+g2nJ9vDgennXC82z34ptqjnWMz3DlWw57ngQNCWko0VjYNBBf3y4VmZ0KyJ6WwtIrezzGhpaksIsFCuEUZZ4J5puNhjnMlcWY8pnI/Jy7QD8maii0y1yVq8op6f+uBCSUfZw4B7IZ7vXBnd7C6Cr0bFBnGGUFgdUm/7S4EF4B5tUjgQIwyjSZEPGqWCxxgmriwkdIRp1jY+nHDtCiaYynwjiqvRpWaUWSfLikSHBxYLnCsx7JcsncFwaUD1U4JTfwQNeZkSdfK1gla/9Dlg7MujKNSsLSvVGo2RjIT8p1SeaJ1F7lEp5PNT/2t9v+bT6GMJf4zgr+S1h/pfCawM9LqfTKqmNz//WpWU9GUK0uLJP59Qr9qXsokKipas7bokeRRjBlKRq8CokdFr+B+F/dKgzCvIZvprflrLGr7socVyIsuVpFv8rHa8rKTBbbx8pYjv3y4fPgBfOGEzBoJAAA=" /></Footer>{/_ END_ACCOUNTING_BANKFEEDTRANSACTION_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `BankFeedTransaction` object with the given `id`.{/_ BEGIN_ACCOUNTING_BANKFEEDTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_BANKFEEDTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveBankFeedTransactionsRequest`

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

Returns metadata for `BankFeedTransaction` POSTs.{/_ BEGIN_ACCOUNTING_BANKFEEDTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_BANKFEEDTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `CashFlowStatement` objects.{/_ BEGIN_ACCOUNTING_CASHFLOWSTATEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81T70/bOhT9V5A/Vk2y0nWISNNUWhhFr+kG5WloQtaNfeu4dexgOxQ67X+fknZdw4P9kNj2Pubc65Nzzz33E2HgURh7T2ICjJlSe6kFaZPccFQkJgNw2YkyywsPHnPUnrQJFDKBHElMxmgF7vW3D/f670akTVxZFMZ65CcSFXenFmckJlFedQelljOJPMqsdBEzt2hBYLR9EszqN6RNlNQL5Bvy75GsG4ON/gefVdlVqgtwzmfWlCI7x5sS3VOcC22WCrnAIAW3Vqbq0UEFHDxEO0yBXVM9hlUzcFTokQ/BwxA9Mi+N3vw1875wcRRlqIqwVhByvI1QR2C9ZApd1Ose7h8c9oINS/33N1So153W/CY16UGLCqYolK3xlN0l09EymYuXyeDlXbK67CWrxSqZL160qIDWeDruTaZX3cmw35k80kAvXn04/PdoeHSWtNjquJvMr5bJlHXGU7ZIV6Pu2Vu2PDt9f5esrvbHw8tuMj3unb01ncng3I0H52bcD0PSJlJ7FBaqMR2JP37aBTaZObHosiNjFq7ZP8pB4I4v66VAIYOiTJVkoeuGkMPKaFi6kJk8ypFLiL7x0YubEizSf4ww4bwQX/2XRm/NJzE5Tk77yeB42MxE/xakglQhib0t8T8hJvFHco4VMvKYhyko0AypyxCrdO2UGLiMzpRZUrdzNDsNUjOT41NVXdnUQIzlaJtQARa1p9Jj3ixYzI1HWiXlyQItwGfNqivTmsw1YX9fPNByC6qsoHpI8DRFIbWWWlAzowVaafhOFTVv4qW1qNk9aZOqtMWbqh+RamsFW4nOg/Vfn19X5ZtSWuTvwEKOHm21ruvP7cfyl6C/KKXH50lfgt5VbNTV2QsL/Vtj96vR2Vgp+c/t9RetfF9KtqhPb2+ildTP5Ok32mDtKr2c7b86Ouj8bnf/5FH/6IIfruwvX+hmgJ841BoSqNGCR07BP+/5fkBrnidmFVPwZ872O8H6n+Xm6W1cf/4CeWzfvi4KAAA=" /></Footer>{/_ END_ACCOUNTING_CASHFLOWSTATEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.cashFlowStatements.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListCashFlowStatementsRequest`

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

Returns a `CashFlowStatement` object with the given `id`.{/_ BEGIN_ACCOUNTING_CASHFLOWSTATEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81T70/bOhT9V5A/Vk2y0nWISNNUWhhFr+kG5WloQtaNfeu4dexgOxQ67X+fknZdw4P9kNj2Pubc65Nzzz33E2HgURh7T2ICjJlSe6kFaZPccFQkJgNw2YkyywsPHnPUnrQJFDKBHElMxmgF7vW3D/f670akTVxZFMZ65CcSFXenFmckJlFedQelljOJPMqsdBEzt2hBYLR9EszqN6RNlNQL5Bvy75GsG4ON/gefVdlVqgtwzmfWlCI7x5sS3VOcC22WCrnAIAW3Vqbq0UEFHDxEO0yBXVM9hlUzcFTokQ/BwxA9Mi+N3vw1875wcRRlqIqwVhByvI1QR2C9ZApd1Ose7h8c9oINS/33N1So153W/CY16UGLCqYolK3xlN0l09EymYuXyeDlXbK67CWrxSqZL160qIDWeDruTaZX3cmw35k80kAvXn04/PdoeHSWtNjquJvMr5bJlHXGU7ZIV6Pu2Vu2PDt9f5esrvbHw8tuMj3unb01ncng3I0H52bcD0PSJlJ7FBaqMR2JP37aBTaZObHosiNjFq7ZP8pB4I4v66VAIYOiTJVkoeuGkMPKaFi6kJk8ypFLiL7x0YubEizSf4ww4bwQX/2XRm/NJzE5Tk77yeB42MxE/xakglQhib0t8T8hJvFHco4VMvKYhyko0AypyxCrdO2UGLiMzpRZUrdzNDsNUjOT41NVXdnUQIzlaJtQARa1p9Jj3ixYzI1HWiXlyQItwGfNqivTmsw1YX9fPNByC6qsoHpI8DRFIbWWWlAzowVaafhOFTVv4qW1qNk9aZOqtMWbqh+RamsFW4nOg/Vfn19X5ZtSWuTvwEKOHm21ruvP7cfyl6C/KKXH50lfgt5VbNTV2QsL/Vtj96vR2Vgp+c/t9RetfF9KtqhPb2+ildTP5Ok32mDtKr2c7b86Ouj8bnf/5FH/6IIfruwvX+hmgJ841BoSqNGCR07BP+/5fkBrnidmFVPwZ872O8H6n+Xm6W1cf/4CeWzfvi4KAAA=" /></Footer>{/_ END_ACCOUNTING_CASHFLOWSTATEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveCashFlowStatementsRequest`

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

Returns a list of `CompanyInfo` objects.{/_ BEGIN_ACCOUNTING_COMPANYINFO_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VYa0/jOBT9K5U/oj4GOgVRabTqA4ay28BAmceORtatc5u6dexgO6XtaP77ymlKGyiwMCnsfqpy69zrnHN9ju2fhIHFQOkZqRNgTMXSchmQIgmVj4LUSUuFEchZRw4UKRKIuAchkjrpog6w0Lh9pdA475AiMXEUKW3RP+YofHOicUDqpBK60aVY8gFHvzLU3FSYmqCGACu3r5QGyTukSASXY/TT5I8lWQwspTO/8+j+NpYUSQTG2KFWcTC8wOsYzUM5x1LdCPQDLPXBLGYmMERpQZR8sFBZy1TSi1SbYu4bfBRo0W+DhTZaZJYrmVYdWhuZeqUyRBGVkxmUfZxUUFZAW84Emkqterh3cFgrpVmS6n/QQHzY3Rld91X/YIcGTFCId7o9NvV6nRtvFLz3Wu+n3vyq5s3Hc280frdDA9jp9rq1s9636lm7sXu2YQC93P96+LnZbp56O2x+VPVG3268Htvt9ti4P+9UTz+ym9OTT1Nv/m2v276qer2j2ulHtXvWujDd1oXqNsplUiRcWgw0uM80pP7953og7ZljjdgIUNrs8E4IAa7BsuAEIl6K4r7grGyqZQhhriTcmDJTYSVEn0PlXIAdKB0ONCK4tNRcx6CRji/srP1xrxwlnZxAyJW8ZYHUyZF30vBaR+1sczQmwAX0BZK61THe62ZS/05YrDVKNiNFIt1XFYnGUFmkTCNY9CnYVcyxln2iEdjhKsR98sM9XMdco38OGkK0qF2lH7+KD2Bohk2lxiYfEFf56OUCvb9UoMqjKH/owPc1GoNmhV00VBKpjMO+++ht4tblTCujBrbQnkkIOTOF6n6t0IwNl2hMoYXSahD5gHpbjC6L0ep+jS6L0bQYbSmhND2cHh3v7x9spV2XUui0ew1+pqQFloSZRp9bKh2sgkuk3GJ454/kcdX4GEZCzTAJByjRfYrVIA0kE86m2TDAhUcq1hIEdUhwXI+4txMTwAAETRtl2S8wc3JsNrROFGs2BINUaT/TTC9dmEViYZoWcA8a2JjLgKaO6Sb9+z14zCVIhgWQfuEswqV+5qqPG7oxLUvpquYbtd+S2Ax72Q56kNlns/hcvpTEWZ9rP2c+lmm3A/m/VtlcFsYzIfXQXsbcYj6IemiNy5Ya/yN4eo1e5/PRixvYrftIqxEumvZZqvqIeOI0QmmQanR1b5UvG16LrOtpsk/V93T38SG/o9hcMhUiNRYsLkWYy4niLCnq3qaDWAy4ELd/pxnvi/1T4r49OTAg0KzlNdmYuaf7MKUaFjRu8oAiibVwPxOUvtI0ZT4z5cxfz7aNTzFn42SLVmijGVsV5atHq/wUmyN5Fd9sXZjW1sOAGwaCzhA0RenTUMmEs40d8tztYkLNy+E+k47GfNBepS2lx5Srwd5+82D3fwb2K51zLiHAtd25ULG/dtuQDyWuBm22GsuTz5+Tr5Pq5egtCfHhMZpewc9ftmYStjrO/VhOh/uEmzTjkp/JhHvmALZq86nLZ00+v+PS0to3W/1/fgeQuH127J0tQD5nu5fYf17nvCf9fmtG/wUmmJ4IeV5XEUuTd7npycCf7r2zrylw25Ksl6jUF6XHC4HNE9hF0m1fNj619u6vuez15BYs+itqlQ+WLlPpyTPcG5vvK+yRcnDiv9VQFXK8H3b57l8Pv/lV5V2LXbnjQ/S9nnltoycec6SHO+THr38AQVkD9uEbAAA=" /></Footer>{/_ END_ACCOUNTING_COMPANYINFO_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.companyInfo.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListCompanyInfoRequest`

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

Returns a `CompanyInfo` object with the given `id`.{/_ BEGIN_ACCOUNTING_COMPANYINFO_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VYa0/jOBT9K5U/oj4GOgVRabTqA4ay28BAmceORtatc5u6dexgO6XtaP77ymlKGyiwMCnsfqpy69zrnHN9ju2fhIHFQOkZqRNgTMXSchmQIgmVj4LUSUuFEchZRw4UKRKIuAchkjrpog6w0Lh9pdA475AiMXEUKW3RP+YofHOicUDqpBK60aVY8gFHvzLU3FSYmqCGACu3r5QGyTukSASXY/TT5I8lWQwspTO/8+j+NpYUSQTG2KFWcTC8wOsYzUM5x1LdCPQDLPXBLGYmMERpQZR8sFBZy1TSi1SbYu4bfBRo0W+DhTZaZJYrmVYdWhuZeqUyRBGVkxmUfZxUUFZAW84Emkqterh3cFgrpVmS6n/QQHzY3Rld91X/YIcGTFCId7o9NvV6nRtvFLz3Wu+n3vyq5s3Hc280frdDA9jp9rq1s9636lm7sXu2YQC93P96+LnZbp56O2x+VPVG3268Htvt9ti4P+9UTz+ym9OTT1Nv/m2v276qer2j2ulHtXvWujDd1oXqNsplUiRcWgw0uM80pP7953og7ZljjdgIUNrs8E4IAa7BsuAEIl6K4r7grGyqZQhhriTcmDJTYSVEn0PlXIAdKB0ONCK4tNRcx6CRji/srP1xrxwlnZxAyJW8ZYHUyZF30vBaR+1sczQmwAX0BZK61THe62ZS/05YrDVKNiNFIt1XFYnGUFmkTCNY9CnYVcyxln2iEdjhKsR98sM9XMdco38OGkK0qF2lH7+KD2Bohk2lxiYfEFf56OUCvb9UoMqjKH/owPc1GoNmhV00VBKpjMO+++ht4tblTCujBrbQnkkIOTOF6n6t0IwNl2hMoYXSahD5gHpbjC6L0ep+jS6L0bQYbSmhND2cHh3v7x9spV2XUui0ew1+pqQFloSZRp9bKh2sgkuk3GJ454/kcdX4GEZCzTAJByjRfYrVIA0kE86m2TDAhUcq1hIEdUhwXI+4txMTwAAETRtl2S8wc3JsNrROFGs2BINUaT/TTC9dmEViYZoWcA8a2JjLgKaO6Sb9+z14zCVIhgWQfuEswqV+5qqPG7oxLUvpquYbtd+S2Ax72Q56kNlns/hcvpTEWZ9rP2c+lmm3A/m/VtlcFsYzIfXQXsbcYj6IemiNy5Ya/yN4eo1e5/PRixvYrftIqxEumvZZqvqIeOI0QmmQanR1b5UvG16LrOtpsk/V93T38SG/o9hcMhUiNRYsLkWYy4niLCnq3qaDWAy4ELd/pxnvi/1T4r49OTAg0KzlNdmYuaf7MKUaFjRu8oAiibVwPxOUvtI0ZT4z5cxfz7aNTzFn42SLVmijGVsV5atHq/wUmyN5Fd9sXZjW1sOAGwaCzhA0RenTUMmEs40d8tztYkLNy+E+k47GfNBepS2lx5Srwd5+82D3fwb2K51zLiHAtd25ULG/dtuQDyWuBm22GsuTz5+Tr5Pq5egtCfHhMZpewc9ftmYStjrO/VhOh/uEmzTjkp/JhHvmALZq86nLZ00+v+PS0to3W/1/fgeQuH127J0tQD5nu5fYf17nvCf9fmtG/wUmmJ4IeV5XEUuTd7npycCf7r2zrylw25Ksl6jUF6XHC4HNE9hF0m1fNj619u6vuez15BYs+itqlQ+WLlPpyTPcG5vvK+yRcnDiv9VQFXK8H3b57l8Pv/lV5V2LXbnjQ/S9nnltoycec6SHO+THr38AQVkD9uEbAAA=" /></Footer>{/_ END_ACCOUNTING_COMPANYINFO_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveCompanyInfoRequest`

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

Returns a list of `Contact` objects.{/_ BEGIN_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Za1PbOBT9Kxl9ZPIopIEhM52dPKDAbhwKoQvb6Whu5BtHiSwZSQ5JOv3vO3KcEF6lAbtl96Od63Ple47P1VW+EQYWA6VnpE6AMRVLy2VAiiRUPgpSJy0lLTBLigQi7kGIpE46qAMsNFbhhcbpMSkSE0eR0hb9Q47CN0caB6ROKqGLLsWSDzj6laHmpsLUBDUEWFk9Uhokz5AiEVyO0U/BfwSyCCylq7536X42btURGGOHWsXB8AyvYzRPYY6luhHoB1jqg1msTGCI0oIo+WChsoZU0guox+65d/BRoEW/DRbaaJFZrmSadWhtZOqVyhBFVE5WUPZxUkFZAW05E2gqter+zt5+rZSiJNn/oIH4sL01uu6r/t4WDZigEG91emzq9Y5vvFHw3mu9n3rzi5o3H8+90fjdFg1gq9Pr1Lq9q2q33djuPhJAz3cv9z83280Tb4vND6re6OrG67HtTo+N+/Pj6slHdnNy9Gnqza92Ou2Lqtc7qJ18VNvd1pnptM5Up1EukyLh0mKgwb2mIfUv39ZvpJppCQRdaCo1NncfOA4hwLXCLFiBiJeiuC84K5tqGUKYKwk3psxUWAnR51BJAGkCSM+vY9BI/1KBKo+iYMkAV3JVflInB95Rw2sdtO+qojEBLqAvkNStjvGBjEn9C8EQuKDg+xpNsnxDWWysClEvrhK18ORKuvctEo2hskgdd3evaAR2eHsrjnyw6FNwYrUwpTIO+6jJVxdxHXON/iloCNGidmv5+r34WHkPNWIjQGmzKe6pADtQOhxoRHCw1CxKPD6zs/bHnXIkf0GV5URxhmbzonL/iQIbCzY2r620GWao41u83GWcljapKIu1RslmpPig7jiNUC6i1ij4Cc1HMAsXEoyGSmJaYPNGiOtwppVRA1tozySEnJlCdbdWaMaGSzSm0EJpNYhsWF0lo8tktLpbo8tkNE1GW0ooTfenB4e7u3u5fFV3SFdhBNJxzjT63FKp7HNqCFCiW6nVIA2whce/UBkmD2msKaJIJih9pWkUazYEg1Rp36V5vVQOuQTJsADSL3QjXDa7TN32EdGkaSm9zfkrVfK0LH6G9NcwnQerSuKsz7WfMWtL2NyJeb5B5ujALzdeD+15zC1mU3YPrXFo6Y7kB0X3Gr3jzwcvKPlqsKGRViNkiW+91kfTrko1unxUuD5wt9kunTaZQvS64a6if2zGSRjlFsMNHNqF00EsBlyIpUcv02WmqtV092yfB4Fm+X2vtf3UARblNplZwqeYs3Gy+Sq00YytirL1hlt8is2RvIhv8nfvl3n2fcrf4AZujayudOvNhqtb2FI65FwMdnabe9u5WkvqLPeNZWM7eTM+krlnbCSl3BziHAJcmxGEiv21k69sFOhy0GarsRwA/5xcTqrno99qFW9l8Hu5XSTMHbvTS5bRqUjCU4q45Goy4Z7Zg9/hFa/YhNxzjfubkv+Jg/z8ruNRR4klv47dUyitOyPO0WX+hgmmIybP6ghiuQdx2PRo4E933tn/kKXk1DU2JUbpsQ+zjBlZgOZCxusJuPcZvnRq37DQl6hVNlV2SKVnh8OM5L6p876p3vpLN1L/qKHK8v8fh/fw2PwtnqBuTv2TnTB/F/z6/V8uh5faFB4AAA==" /></Footer>{/_ END_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListContactsRequest`

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

Creates a `Contact` object with the given values.{/_ BEGIN_ACCOUNTING_CONTACT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9VWa2/iOBT9K8gfEUmGMoAaabXi1SnVEmZaOpqqqqyLcwmGxA5+AGU0/31lSGm723bailntfPN1js99nHsdfycMDCZS3ZKQAGPSCsNFQiokkzGmJCQdKQwwQyoEch5BhiQkA1QJllp7eKn1uU8qRNs8l8pgfMIxjfWpwgkJSZA5tGcFn3CMg6niOmByiQoSDPZHvMn2DKmQlIs5xgX5SyQ7oFdE/Q/TfdYu6hy0NlMlbTI9x4VF/RznXMhVinGC3hj0LrIUMxQGUi8GA8EDJk/tqJ7acznEmKLBuAsGumiQGS5F4XVqTK7DIJhimvvbCPwYlwGKAJThLEUd1GvHR83julewbL3/SZP0j2p5thjLcbNME5ZSsOXBiK2jUX8VzZKPUefjOtpc1qPNfBPN5h/KNIHyYDSoD0dXtWG3VR0+AaAXjW/HX9vd9llUZpteLZpdraIRqw5GbD7e9Gtnn9jq7PTLOtpcHQ26l7Vo1KuffZLVYedcDzrnctDyfVIhXBhMFLg0NQmvvz/cKHrmRKGetqWc68f4fgYJPqjLThTIuZfbccqZr2s+ZLCRAlbaZzILMow5BPd89GJhQSH9SybSn+XJXf25FPvik5D0otNW1Ol1H/dEawk8hXGKJDTK4r+amITXBOJYodboImcyy0HcupVVCgVzS8yAp7SAufQ0ZVYbmaHaWdtm4ltLuHJUSD6VAqmw2RiVO6IwkwbpfgoKm8f3a5vHYDCm4NpaGzDWAQ2sCxpy46ALyxXGn0FBhsZxh9f7oG9+VJ6SZsCZklpOTKl7KyDjTJdqjXqpbTUXqHWpg8IoSA+j294ZvXNGa406vXNGC2e0I1Op6PG6d9JoNP1c/NayPivjW9R7RQDPCByhubDc4GEUjNBox0b1du5e0CZqjfpfe/9rZd46cK9R6b7ENHcY/eSmzzXNUWkpXpfAo4D9hxZlKWj9nPhfLGfz7UVZGoqUiwN1wT2tt+sDejk5arSb1V/dD//pfL7pmn1pBC8gwVLfPaW2b6kDCOAYacF49wtcLnmkm/CbjOR7il8hVvCFdadQGPdy+5kg75+cb6jkYbRyTN5Pr8sD/cp+2YC8ZxhufvwNeZyz7WMMAAA=" /></Footer>{/_ END_ACCOUNTING_CONTACT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Contact` object with the given `id`.{/_ BEGIN_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Za1PbOBT9Kxl9ZPIopIEhM52dPKDAbhwKoQvb6Whu5BtHiSwZSQ5JOv3vO3KcEF6lAbtl96Od63Ple47P1VW+EQYWA6VnpE6AMRVLy2VAiiRUPgpSJy0lLTBLigQi7kGIpE46qAMsNFbhhcbpMSkSE0eR0hb9Q47CN0caB6ROKqGLLsWSDzj6laHmpsLUBDUEWFk9Uhokz5AiEVyO0U/BfwSyCCylq7536X42btURGGOHWsXB8AyvYzRPYY6luhHoB1jqg1msTGCI0oIo+WChsoZU0guox+65d/BRoEW/DRbaaJFZrmSadWhtZOqVyhBFVE5WUPZxUkFZAW05E2gqter+zt5+rZSiJNn/oIH4sL01uu6r/t4WDZigEG91emzq9Y5vvFHw3mu9n3rzi5o3H8+90fjdFg1gq9Pr1Lq9q2q33djuPhJAz3cv9z83280Tb4vND6re6OrG67HtTo+N+/Pj6slHdnNy9Gnqza92Ou2Lqtc7qJ18VNvd1pnptM5Up1EukyLh0mKgwb2mIfUv39ZvpJppCQRdaCo1NncfOA4hwLXCLFiBiJeiuC84K5tqGUKYKwk3psxUWAnR51BJAGkCSM+vY9BI/1KBKo+iYMkAV3JVflInB95Rw2sdtO+qojEBLqAvkNStjvGBjEn9C8EQuKDg+xpNsnxDWWysClEvrhK18ORKuvctEo2hskgdd3evaAR2eHsrjnyw6FNwYrUwpTIO+6jJVxdxHXON/iloCNGidmv5+r34WHkPNWIjQGmzKe6pADtQOhxoRHCw1CxKPD6zs/bHnXIkf0GV5URxhmbzonL/iQIbCzY2r620GWao41u83GWcljapKIu1RslmpPig7jiNUC6i1ij4Cc1HMAsXEoyGSmJaYPNGiOtwppVRA1tozySEnJlCdbdWaMaGSzSm0EJpNYhsWF0lo8tktLpbo8tkNE1GW0ooTfenB4e7u3u5fFV3SFdhBNJxzjT63FKp7HNqCFCiW6nVIA2whce/UBkmD2msKaJIJih9pWkUazYEg1Rp36V5vVQOuQTJsADSL3QjXDa7TN32EdGkaSm9zfkrVfK0LH6G9NcwnQerSuKsz7WfMWtL2NyJeb5B5ujALzdeD+15zC1mU3YPrXFo6Y7kB0X3Gr3jzwcvKPlqsKGRViNkiW+91kfTrko1unxUuD5wt9kunTaZQvS64a6if2zGSRjlFsMNHNqF00EsBlyIpUcv02WmqtV092yfB4Fm+X2vtf3UARblNplZwqeYs3Gy+Sq00YytirL1hlt8is2RvIhv8nfvl3n2fcrf4AZujayudOvNhqtb2FI65FwMdnabe9u5WkvqLPeNZWM7eTM+krlnbCSl3BziHAJcmxGEiv21k69sFOhy0GarsRwA/5xcTqrno99qFW9l8Hu5XSTMHbvTS5bRqUjCU4q45Goy4Z7Zg9/hFa/YhNxzjfubkv+Jg/z8ruNRR4klv47dUyitOyPO0WX+hgmmIybP6ghiuQdx2PRo4E933tn/kKXk1DU2JUbpsQ+zjBlZgOZCxusJuPcZvnRq37DQl6hVNlV2SKVnh8OM5L6p876p3vpLN1L/qKHK8v8fh/fw2PwtnqBuTv2TnTB/F/z6/V8uh5faFB4AAA==" /></Footer>{/_ END_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveContactsRequest`

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

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.ContactResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `Contact` object with the given `id`.{/_ BEGIN_ACCOUNTING_CONTACT_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE91U204bMRD9FeTHaC8NISBWqqqQpBCkOFwCAiG0mtjDxsRrL74kIYh/r5ykFFpoX2hV8TiemTMz54zngTBwWGhzTzICjGmvnFAFiUipOUqSkbZWDpgjEYFKUCiRZKSPpsCN1lP4RuuoRyJifVVp45B/FSi5PTB4QzKSliE69krcCOTp2AibMj1FAwWmTynxzTKHREQKNUG+Bv8dyCowXnf9kxncNnRdgbVubLQvxid459G+hTlReiaRFxiPwK46k1iiciBjDg7SZ0ixWUG99hZm4CjRIe+Agw46ZE5ota46dq6yWZqOUVbJsoOE4zRFlYJxgkm0abOxu7mz24zXKMvqX/JCfq7Xbu9GerRTywsmc/C1/pDN6bA3o7fFFm1vzenirEkXkwW9nXyq5QXU+sN+czC8bAw6rfrglYD8dPti93yvs3dIa2zRbdDbyxkdsnp/yCajRa9xuM9mhwfHc7q43Ox3zhp02G0e7uv6oH1i++0T3W8lCYmIUA4LA2FMS7Krh+cP652h6E69cPgyuldCgc9YWUkClYgrP5KCJbaRQAkLrWBmE6bLtEQuIKXobEDL7Z0Hg0m13NklYUKrJ85D3dawd959uQitKQgJI4kkc8bjL5tLsisCnBu0FoOczBuDit2TiGAJQuZrZ5jF5sxbp0s0K2u5N2JpqTB5RKqxVpgrX47QhBSDpXaY+4qDQ55D2FLrwHlLroP3zguD/AgMlOhCSnZ1/Ri9xumxF2yyp/XEbgyUFOqdyP0BG6/ozc9uNrf3duofheaIOJivQ9/k/DvA6jAlz62cSbCWvKHKKRS40QtXc3k230GQgJivEfPTlSTTqaB2B/62JLqsQN1/HHEu0Oj3ESUgxX88P1160KLtbuc//BmC/yMhrh+/AdXM4FFnCAAA" /></Footer>{/_ END_ACCOUNTING_CONTACT_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.PatchedContactEndpointRequest`

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

<details><summary><code>client.accounting.contacts.<a href="/src/api/resources/accounting/resources/contacts/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Contact` PATCHs.{/_ BEGIN_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Za1PbOBT9Kxl9ZPIopIEhM52dPKDAbhwKoQvb6Whu5BtHiSwZSQ5JOv3vO3KcEF6lAbtl96Od63Ple47P1VW+EQYWA6VnpE6AMRVLy2VAiiRUPgpSJy0lLTBLigQi7kGIpE46qAMsNFbhhcbpMSkSE0eR0hb9Q47CN0caB6ROKqGLLsWSDzj6laHmpsLUBDUEWFk9Uhokz5AiEVyO0U/BfwSyCCylq7536X42btURGGOHWsXB8AyvYzRPYY6luhHoB1jqg1msTGCI0oIo+WChsoZU0guox+65d/BRoEW/DRbaaJFZrmSadWhtZOqVyhBFVE5WUPZxUkFZAW05E2gqter+zt5+rZSiJNn/oIH4sL01uu6r/t4WDZigEG91emzq9Y5vvFHw3mu9n3rzi5o3H8+90fjdFg1gq9Pr1Lq9q2q33djuPhJAz3cv9z83280Tb4vND6re6OrG67HtTo+N+/Pj6slHdnNy9Gnqza92Ou2Lqtc7qJ18VNvd1pnptM5Up1EukyLh0mKgwb2mIfUv39ZvpJppCQRdaCo1NncfOA4hwLXCLFiBiJeiuC84K5tqGUKYKwk3psxUWAnR51BJAGkCSM+vY9BI/1KBKo+iYMkAV3JVflInB95Rw2sdtO+qojEBLqAvkNStjvGBjEn9C8EQuKDg+xpNsnxDWWysClEvrhK18ORKuvctEo2hskgdd3evaAR2eHsrjnyw6FNwYrUwpTIO+6jJVxdxHXON/iloCNGidmv5+r34WHkPNWIjQGmzKe6pADtQOhxoRHCw1CxKPD6zs/bHnXIkf0GV5URxhmbzonL/iQIbCzY2r620GWao41u83GWcljapKIu1RslmpPig7jiNUC6i1ij4Cc1HMAsXEoyGSmJaYPNGiOtwppVRA1tozySEnJlCdbdWaMaGSzSm0EJpNYhsWF0lo8tktLpbo8tkNE1GW0ooTfenB4e7u3u5fFV3SFdhBNJxzjT63FKp7HNqCFCiW6nVIA2whce/UBkmD2msKaJIJih9pWkUazYEg1Rp36V5vVQOuQTJsADSL3QjXDa7TN32EdGkaSm9zfkrVfK0LH6G9NcwnQerSuKsz7WfMWtL2NyJeb5B5ujALzdeD+15zC1mU3YPrXFo6Y7kB0X3Gr3jzwcvKPlqsKGRViNkiW+91kfTrko1unxUuD5wt9kunTaZQvS64a6if2zGSRjlFsMNHNqF00EsBlyIpUcv02WmqtV092yfB4Fm+X2vtf3UARblNplZwqeYs3Gy+Sq00YytirL1hlt8is2RvIhv8nfvl3n2fcrf4AZujayudOvNhqtb2FI65FwMdnabe9u5WkvqLPeNZWM7eTM+krlnbCSl3BziHAJcmxGEiv21k69sFOhy0GarsRwA/5xcTqrno99qFW9l8Hu5XSTMHbvTS5bRqUjCU4q45Goy4Z7Zg9/hFa/YhNxzjfubkv+Jg/z8ruNRR4klv47dUyitOyPO0WX+hgmmIybP6ghiuQdx2PRo4E933tn/kKXk1DU2JUbpsQ+zjBlZgOZCxusJuPcZvnRq37DQl6hVNlV2SKVnh8OM5L6p876p3vpLN1L/qKHK8v8fh/fw2PwtnqBuTv2TnTB/F/z6/V8uh5faFB4AAA==" /></Footer>{/_ END_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.MetaPatchRetrieveContactsRequest`

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

Returns metadata for `Contact` POSTs.{/_ BEGIN_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Za1PbOBT9Kxl9ZPIopIEhM52dPKDAbhwKoQvb6Whu5BtHiSwZSQ5JOv3vO3KcEF6lAbtl96Od63Ple47P1VW+EQYWA6VnpE6AMRVLy2VAiiRUPgpSJy0lLTBLigQi7kGIpE46qAMsNFbhhcbpMSkSE0eR0hb9Q47CN0caB6ROKqGLLsWSDzj6laHmpsLUBDUEWFk9Uhokz5AiEVyO0U/BfwSyCCylq7536X42btURGGOHWsXB8AyvYzRPYY6luhHoB1jqg1msTGCI0oIo+WChsoZU0guox+65d/BRoEW/DRbaaJFZrmSadWhtZOqVyhBFVE5WUPZxUkFZAW05E2gqter+zt5+rZSiJNn/oIH4sL01uu6r/t4WDZigEG91emzq9Y5vvFHw3mu9n3rzi5o3H8+90fjdFg1gq9Pr1Lq9q2q33djuPhJAz3cv9z83280Tb4vND6re6OrG67HtTo+N+/Pj6slHdnNy9Gnqza92Ou2Lqtc7qJ18VNvd1pnptM5Up1EukyLh0mKgwb2mIfUv39ZvpJppCQRdaCo1NncfOA4hwLXCLFiBiJeiuC84K5tqGUKYKwk3psxUWAnR51BJAGkCSM+vY9BI/1KBKo+iYMkAV3JVflInB95Rw2sdtO+qojEBLqAvkNStjvGBjEn9C8EQuKDg+xpNsnxDWWysClEvrhK18ORKuvctEo2hskgdd3evaAR2eHsrjnyw6FNwYrUwpTIO+6jJVxdxHXON/iloCNGidmv5+r34WHkPNWIjQGmzKe6pADtQOhxoRHCw1CxKPD6zs/bHnXIkf0GV5URxhmbzonL/iQIbCzY2r620GWao41u83GWcljapKIu1RslmpPig7jiNUC6i1ij4Cc1HMAsXEoyGSmJaYPNGiOtwppVRA1tozySEnJlCdbdWaMaGSzSm0EJpNYhsWF0lo8tktLpbo8tkNE1GW0ooTfenB4e7u3u5fFV3SFdhBNJxzjT63FKp7HNqCFCiW6nVIA2whce/UBkmD2msKaJIJih9pWkUazYEg1Rp36V5vVQOuQTJsADSL3QjXDa7TN32EdGkaSm9zfkrVfK0LH6G9NcwnQerSuKsz7WfMWtL2NyJeb5B5ujALzdeD+15zC1mU3YPrXFo6Y7kB0X3Gr3jzwcvKPlqsKGRViNkiW+91kfTrko1unxUuD5wt9kunTaZQvS64a6if2zGSRjlFsMNHNqF00EsBlyIpUcv02WmqtV092yfB4Fm+X2vtf3UARblNplZwqeYs3Gy+Sq00YytirL1hlt8is2RvIhv8nfvl3n2fcrf4AZujayudOvNhqtb2FI65FwMdnabe9u5WkvqLPeNZWM7eTM+krlnbCSl3BziHAJcmxGEiv21k69sFOhy0GarsRwA/5xcTqrno99qFW9l8Hu5XSTMHbvTS5bRqUjCU4q45Goy4Z7Zg9/hFa/YhNxzjfubkv+Jg/z8ruNRR4klv47dUyitOyPO0WX+hgmmIybP6ghiuQdx2PRo4E933tn/kKXk1DU2JUbpsQ+zjBlZgOZCxusJuPcZvnRq37DQl6hVNlV2SKVnh8OM5L6p876p3vpLN1L/qKHK8v8fh/fw2PwtnqBuTv2TnTB/F/z6/V8uh5faFB4AAA==" /></Footer>{/_ END_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Za1PbOBT9Kxl9ZPIopIEhM52dPKDAbhwKoQvb6Whu5BtHiSwZSQ5JOv3vO3KcEF6lAbtl96Od63Ple47P1VW+EQYWA6VnpE6AMRVLy2VAiiRUPgpSJy0lLTBLigQi7kGIpE46qAMsNFbhhcbpMSkSE0eR0hb9Q47CN0caB6ROKqGLLsWSDzj6laHmpsLUBDUEWFk9Uhokz5AiEVyO0U/BfwSyCCylq7536X42btURGGOHWsXB8AyvYzRPYY6luhHoB1jqg1msTGCI0oIo+WChsoZU0guox+65d/BRoEW/DRbaaJFZrmSadWhtZOqVyhBFVE5WUPZxUkFZAW05E2gqter+zt5+rZSiJNn/oIH4sL01uu6r/t4WDZigEG91emzq9Y5vvFHw3mu9n3rzi5o3H8+90fjdFg1gq9Pr1Lq9q2q33djuPhJAz3cv9z83280Tb4vND6re6OrG67HtTo+N+/Pj6slHdnNy9Gnqza92Ou2Lqtc7qJ18VNvd1pnptM5Up1EukyLh0mKgwb2mIfUv39ZvpJppCQRdaCo1NncfOA4hwLXCLFiBiJeiuC84K5tqGUKYKwk3psxUWAnR51BJAGkCSM+vY9BI/1KBKo+iYMkAV3JVflInB95Rw2sdtO+qojEBLqAvkNStjvGBjEn9C8EQuKDg+xpNsnxDWWysClEvrhK18ORKuvctEo2hskgdd3evaAR2eHsrjnyw6FNwYrUwpTIO+6jJVxdxHXON/iloCNGidmv5+r34WHkPNWIjQGmzKe6pADtQOhxoRHCw1CxKPD6zs/bHnXIkf0GV5URxhmbzonL/iQIbCzY2r620GWao41u83GWcljapKIu1RslmpPig7jiNUC6i1ij4Cc1HMAsXEoyGSmJaYPNGiOtwppVRA1tozySEnJlCdbdWaMaGSzSm0EJpNYhsWF0lo8tktLpbo8tkNE1GW0ooTfenB4e7u3u5fFV3SFdhBNJxzjT63FKp7HNqCFCiW6nVIA2whce/UBkmD2msKaJIJih9pWkUazYEg1Rp36V5vVQOuQTJsADSL3QjXDa7TN32EdGkaSm9zfkrVfK0LH6G9NcwnQerSuKsz7WfMWtL2NyJeb5B5ujALzdeD+15zC1mU3YPrXFo6Y7kB0X3Gr3jzwcvKPlqsKGRViNkiW+91kfTrko1unxUuD5wt9kunTaZQvS64a6if2zGSRjlFsMNHNqF00EsBlyIpUcv02WmqtV092yfB4Fm+X2vtf3UARblNplZwqeYs3Gy+Sq00YytirL1hlt8is2RvIhv8nfvl3n2fcrf4AZujayudOvNhqtb2FI65FwMdnabe9u5WkvqLPeNZWM7eTM+krlnbCSl3BziHAJcmxGEiv21k69sFOhy0GarsRwA/5xcTqrno99qFW9l8Hu5XSTMHbvTS5bRqUjCU4q45Goy4Z7Zg9/hFa/YhNxzjfubkv+Jg/z8ruNRR4klv47dUyitOyPO0WX+hgmmIybP6ghiuQdx2PRo4E933tn/kKXk1DU2JUbpsQ+zjBlZgOZCxusJuPcZvnRq37DQl6hVNlV2SKVnh8OM5L6p876p3vpLN1L/qKHK8v8fh/fw2PwtnqBuTv2TnTB/F/z6/V8uh5faFB4AAA==" /></Footer>{/_ END_ACCOUNTING_CONTACT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.contacts.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListContactsRequest`

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

Returns a list of `CreditNote` objects.{/_ BEGIN_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1ZbW/iOBD+K8gfKyDXslAV6XTirVt6S9pt6aq9VWUZZwiGxE5thwKr/e8nh9DwEmh7pS3dvW+JPZ4Zj2eembF/IEo0uEKOURkRSkXINeMuyiJfOOChMqpJcJi2hQaURSRgNvEBlVELpAuZysOKTOW8ibJIhUEgpAbnmIHnqBMJXVRGlm+ocyFnXQaO1ZNMWVQMQRIXrIcluW60BmWRx/gAnJj5JiZTwlys+NKvmVYaZVFAlNI9KUK3dwF3Iah1PAdc3HvguJDrEDXVzAMfuCZeziGaWHOccnLKKm3M7MEBDzQ4daJJHTRQzQSPpfa0DlTZsnrgBflIg7wDQwu4RaRm1ANlFQtHB4dHxVzMJZL+F3a9P/f3+ncd0Tncwy71MAn3Wm06stvNe7vvfrJrn0b25KpoTwYTuz/4Yw+7ZK/VbhXP2jeFs3pl/yyFAF+Wro++VevVU3uPThoFu39zb7fpfqtNB51Js3D6md6fnnwd2ZObg1b9qmC3G8XTz2L/rHahWrUL0ark8yiLGNfgSmK2qVD5+4/5gdhnjiWoXlWIgVqkb/rEhTm7TA+FBCwXhB2P0bwq5IlPJoKTe5Wnwrd8cBixEn748i4kEvAX4Yp8P3Bn9meCPxgflVHDPqnYtUZ90ScqQ8I80vEAlbUMYcWJUfk7oqGUwOkYZRE3mzEMxsYzzFYk+EIDNme0+IcDonvJEHNMhGiiQ7NKC008THzjquZXEq5IpKlZa0TocQDo1iy/C5kE55xI4oMGaVS6/ZlNs3GLUSmU6OpMfcyJz6jKFErFTDVUjINSmRpwLYm3nQN4EIZnwnChVMQzYTgWhmvCExIfjRrHpdJhPuDbP58Epb4wDk0Nfj5GAZRNm6TCDwgfr5mMhjCfYl4KgQOKShZEWqcSMA1++sxdSLhmeo3keUdJmZ66jMc4JH6TRiYJHTDu4hjbGah0wpAzjQPJqNnn+dShE/sFgcfASSQtEzA+FOlL49hAWZTYmQquCY3GkliKtmKMZRTkod8BmYQLlUC0UUA/N8bi7zBwEgYb4i7FWFuKRhv0Zcii5VsINxu0MtywitBuQyDZlXbzW+MlYVQJAm9sDnTVDzYRxbZKI1kXVQlF4lDPDufHInbO554VrlEVhMNwXUQGUvSBrtHqZbFORlguW3NHkWDR/E/Hib4IJSceNmlivBFHktIUByCZcKJidKrWXCaeDWkR2UY9jkAwoj3CXZjZmnHqhYoNAYsu1mS0DFILDhGXAvPARRiP7B1ZZEex7Jkg9jVkdBCVWZkzboyxHTRL2OameIavugel6uH+/7j2JpWID754L9CLXX8zwSwafm3sXPKwd4DWJ8LoE8BzbTn3Jqj4JmB4SVyY66Y8ETpztyDbQUYjA1drlVlX+/fweli47L9K47Ta2O5AEttG6R0dVNM4beS12zqWmOPsaIZDZqtD8lukrGR2HYqnUqzC+ArZOhx/xRZ+c0PwaFpdRr63ayo+fAbddoZ8yjXE8sz87l/eMyymvd3rCV6U8K5Biu3gp+GU+42uLnYNL9/7VvPjQtZHKfpfpah/7EbkAekWX0R2C/T+Ww35j+iJzBYfrAy/1feqnXgPeW9weOGTx7u/ZPyqNcHtz38B2ynOBCMgAAA=" /></Footer>{/_ END_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.creditNotes.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListCreditNotesRequest`

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

Creates a `CreditNote` object with the given values.{/_ BEGIN_ACCOUNTING_CREDITNOTE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9VVbW/bNhD+KwE/Gnqp47pBDAyDE2etA1huE6doUATEmTzLjClSIU+24yL/faDkJc6WbN3gbtgXgTwen3t5nqO+MQGEuXX3rMdACFsZUiZnESusRM167NShVJRZQhYxKFUGBbIeG6HL8aD/eOOg/3HIIuarsrSOUP6iUEv/weGM9VhaBO+4MmqmUKZzp3wq7BId5Jg+Xoln9R0WMa3MAuUW/M9AGsd4m/jvtuHYE4tYCd7T3Nkqn1/gXYX+NcyFsSuNMsd4Cr7JTGOBhkDHEgjSHaTYNVAv2UINEjUSygEQDJBQkLJmG3VOVPpems5Rl0mdQSJxmaJJwZESGn3a7RwfHh134y1KHf1nnuuf2q3bu6mdHrV4LjSHqjWaiHU2Ga6y2/xtdvp2nW2uutlmscluF29aPIfWaDLqjifXnfGg3x6/4MAv3305/nwyODnPWmJz1slur1fZRLRHE7GYboad8/didf7h0zrbXB+OBledbHLWPX9v2+PTCz86vbCjfpKwiClDmDsIZXrW+/pt17DVTIZ0WalaSDuHwwJy3OlKQwmUKi6rqVYi8Z0ECthYAyufCFukBUoFaYbkAxr3dxU4TMpatnXDlDWPPQ9x+5Ph57PnQugvQWmYamQ9chX+Qbms93VnHniJTllZT0CpFUpOlmtlMDAtbFGCua9XhkAEyYnKOTQiGHEt5mBy5A62pQtdebVEbmecYN3oHbkiLAKcCc2KmKmKKToWMYcFKBOSEPUoNiZLGPZAKDns2JR8WlelfDr3BFQFfLIEmkMRSgtbB2JRozcPgaprIgfGQ91AHkDYTUC9q5RD+REcFEjo6iY9y/1pk4Qvu3mIXhLCp0qJxYm1C38wNuHOfhTxBBs3muBXs8N3J0ftH6GNl3TwHew/p3rPHO+Z2t8KeoXFS8jxYBhc6qL3QGBA5FtEftlQuFyqzB/Bv0Xh/3yU/yazz1jjZfDxSQn34Z/HC6S5la+x/wWd3Q/rASn+cY/4PxzUv+T2vyI1YnRffhe3rz3NTYTasA1z83Dz8Cuf6kSOCwoAAA==" /></Footer>{/_ END_ACCOUNTING_CREDITNOTE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `CreditNote` object with the given `id`.{/_ BEGIN_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1ZbW/iOBD+K8gfKyDXslAV6XTirVt6S9pt6aq9VWUZZwiGxE5thwKr/e8nh9DwEmh7pS3dvW+JPZ4Zj2eembF/IEo0uEKOURkRSkXINeMuyiJfOOChMqpJcJi2hQaURSRgNvEBlVELpAuZysOKTOW8ibJIhUEgpAbnmIHnqBMJXVRGlm+ocyFnXQaO1ZNMWVQMQRIXrIcluW60BmWRx/gAnJj5JiZTwlys+NKvmVYaZVFAlNI9KUK3dwF3Iah1PAdc3HvguJDrEDXVzAMfuCZeziGaWHOccnLKKm3M7MEBDzQ4daJJHTRQzQSPpfa0DlTZsnrgBflIg7wDQwu4RaRm1ANlFQtHB4dHxVzMJZL+F3a9P/f3+ncd0Tncwy71MAn3Wm06stvNe7vvfrJrn0b25KpoTwYTuz/4Yw+7ZK/VbhXP2jeFs3pl/yyFAF+Wro++VevVU3uPThoFu39zb7fpfqtNB51Js3D6md6fnnwd2ZObg1b9qmC3G8XTz2L/rHahWrUL0ark8yiLGNfgSmK2qVD5+4/5gdhnjiWoXlWIgVqkb/rEhTm7TA+FBCwXhB2P0bwq5IlPJoKTe5Wnwrd8cBixEn748i4kEvAX4Yp8P3Bn9meCPxgflVHDPqnYtUZ90ScqQ8I80vEAlbUMYcWJUfk7oqGUwOkYZRE3mzEMxsYzzFYk+EIDNme0+IcDonvJEHNMhGiiQ7NKC008THzjquZXEq5IpKlZa0TocQDo1iy/C5kE55xI4oMGaVS6/ZlNs3GLUSmU6OpMfcyJz6jKFErFTDVUjINSmRpwLYm3nQN4EIZnwnChVMQzYTgWhmvCExIfjRrHpdJhPuDbP58Epb4wDk0Nfj5GAZRNm6TCDwgfr5mMhjCfYl4KgQOKShZEWqcSMA1++sxdSLhmeo3keUdJmZ66jMc4JH6TRiYJHTDu4hjbGah0wpAzjQPJqNnn+dShE/sFgcfASSQtEzA+FOlL49hAWZTYmQquCY3GkliKtmKMZRTkod8BmYQLlUC0UUA/N8bi7zBwEgYb4i7FWFuKRhv0Zcii5VsINxu0MtywitBuQyDZlXbzW+MlYVQJAm9sDnTVDzYRxbZKI1kXVQlF4lDPDufHInbO554VrlEVhMNwXUQGUvSBrtHqZbFORlguW3NHkWDR/E/Hib4IJSceNmlivBFHktIUByCZcKJidKrWXCaeDWkR2UY9jkAwoj3CXZjZmnHqhYoNAYsu1mS0DFILDhGXAvPARRiP7B1ZZEex7Jkg9jVkdBCVWZkzboyxHTRL2OameIavugel6uH+/7j2JpWID754L9CLXX8zwSwafm3sXPKwd4DWJ8LoE8BzbTn3Jqj4JmB4SVyY66Y8ETpztyDbQUYjA1drlVlX+/fweli47L9K47Ta2O5AEttG6R0dVNM4beS12zqWmOPsaIZDZqtD8lukrGR2HYqnUqzC+ArZOhx/xRZ+c0PwaFpdRr63ayo+fAbddoZ8yjXE8sz87l/eMyymvd3rCV6U8K5Biu3gp+GU+42uLnYNL9/7VvPjQtZHKfpfpah/7EbkAekWX0R2C/T+Ww35j+iJzBYfrAy/1feqnXgPeW9weOGTx7u/ZPyqNcHtz38B2ynOBCMgAAA=" /></Footer>{/_ END_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveCreditNotesRequest`

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

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `CreditNote` object with the given `id`.{/_ BEGIN_ACCOUNTING_CREDITNOTE_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE8WTb0/bMBDGvwq6l1XSrJSCqDRNhTIoUlMGBQ1NyLo619TUsYP/tKUT331yWljZGNompr2zz/bvfPfc8xU4Osq1uYc2IOfaKydUDhEUOiMJbTg0lAmXakcQAZYixYKgDX0yOW11nl5sdc56EIH1ZamNo+yjIJnZE0NjaENShNuxV2IsKEsmRtiE6xkZzCl5ehKPqzcQgRRqStka/hpkdTFef/yHbTi2DiIo0Vo3Mdrnk3O682R/xZwqPZeU5RSP0K5+Jqkg5VDGGTpMNkixWaFeioUaMpLkKOuiwy454k5otc46ca607SSZkCzr1Q/qGc0SUgkaJ7gkm7Sa+9t7+614Tamyf2C5fN+o3d6N9GivxnIuGfpaf8gX6bA3T2/znfRwZ5EuL1vpcrpMb6fvaizHWn/Ybw2G181Bt9MYvHCBXex+3r866B6cpjW+PGqmt9fzdMgb/SGfjpa95ukxn5+efFqky+vtfveymQ6PWqfHujE4PLf9w3Pd79TrEIFQjnKDoUwL7S9fNwPrmUnJXXhRDdLGYa/AnDa6spIESxGXfiQFr9tmHQtcaoVzW+e6SArKBCYpORtozN55NFQvq7GtGia0eup5yNsZ9q6Ong9CZ4ZC4kgStJ3x9NPkQvvLhh9YSUboDCLguihR3Vcr5ZCH+eLeGFI8BGnBJ6hyYgarOqVQxISjwj5ainkvAkiFnkSgfDEiAxEYKlCokItXjluFtKOwR0cZw41YhVivfZl9P7cOnQ/JnHYoGRahgrA1yKcVfeV3QXYVVRarPrEAgZtAvfPCUHaGBgtyZEIvbh6ilxT95AWfHmg9tVsDFWp9G2m/Y+OVuOxyvL17sNf4ByL/uYx/KVmw8PMdK9FNfkPTt5USsCylCOxHoFAzLTjBL0T+TEa/ja6BFP8zu/6WkkJx6a2YEdNj5nDx38V9xbDP9YzA3ZevOfTm4RuspL79zgcAAA==" /></Footer>{/_ END_ACCOUNTING_CREDITNOTE_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.PatchedCreditNoteEndpointRequest`

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

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">applicationCreate</a>(id, { ...params }) -> Merge.CreditNoteResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new CreditNoteApplyLine to apply a credit note to an invoice{/_ BEGIN_ACCOUNTING_CREDITNOTE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9VVbW/bNhD+KwE/Gnqp47pBDAyDE2etA1huE6doUATEmTzLjClSIU+24yL/faDkJc6WbN3gbtgXgTwen3t5nqO+MQGEuXX3rMdACFsZUiZnESusRM167NShVJRZQhYxKFUGBbIeG6HL8aD/eOOg/3HIIuarsrSOUP6iUEv/weGM9VhaBO+4MmqmUKZzp3wq7BId5Jg+Xoln9R0WMa3MAuUW/M9AGsd4m/jvtuHYE4tYCd7T3Nkqn1/gXYX+NcyFsSuNMsd4Cr7JTGOBhkDHEgjSHaTYNVAv2UINEjUSygEQDJBQkLJmG3VOVPpems5Rl0mdQSJxmaJJwZESGn3a7RwfHh134y1KHf1nnuuf2q3bu6mdHrV4LjSHqjWaiHU2Ga6y2/xtdvp2nW2uutlmscluF29aPIfWaDLqjifXnfGg3x6/4MAv3305/nwyODnPWmJz1slur1fZRLRHE7GYboad8/didf7h0zrbXB+OBledbHLWPX9v2+PTCz86vbCjfpKwiClDmDsIZXrW+/pt17DVTIZ0WalaSDuHwwJy3OlKQwmUKi6rqVYi8Z0ECthYAyufCFukBUoFaYbkAxr3dxU4TMpatnXDlDWPPQ9x+5Ph57PnQugvQWmYamQ9chX+Qbms93VnHniJTllZT0CpFUpOlmtlMDAtbFGCua9XhkAEyYnKOTQiGHEt5mBy5A62pQtdebVEbmecYN3oHbkiLAKcCc2KmKmKKToWMYcFKBOSEPUoNiZLGPZAKDns2JR8WlelfDr3BFQFfLIEmkMRSgtbB2JRozcPgaprIgfGQ91AHkDYTUC9q5RD+REcFEjo6iY9y/1pk4Qvu3mIXhLCp0qJxYm1C38wNuHOfhTxBBs3muBXs8N3J0ftH6GNl3TwHew/p3rPHO+Z2t8KeoXFS8jxYBhc6qL3QGBA5FtEftlQuFyqzB/Bv0Xh/3yU/yazz1jjZfDxSQn34Z/HC6S5la+x/wWd3Q/rASn+cY/4PxzUv+T2vyI1YnRffhe3rz3NTYTasA1z83Dz8Cuf6kSOCwoAAA==" /></Footer>{/_ END_ACCOUNTING_CREDITNOTE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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
    appliedDate: new Date("2024-01-15T09:30:00.000Z"),
    appliedAmount: "applied_amount",
});
```

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

**requestOptions:** `CreditNotes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.creditNotes.<a href="/src/api/resources/accounting/resources/creditNotes/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `CreditNote` PATCHs.{/_ BEGIN_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1ZbW/iOBD+K8gfKyDXslAV6XTirVt6S9pt6aq9VWUZZwiGxE5thwKr/e8nh9DwEmh7pS3dvW+JPZ4Zj2eembF/IEo0uEKOURkRSkXINeMuyiJfOOChMqpJcJi2hQaURSRgNvEBlVELpAuZysOKTOW8ibJIhUEgpAbnmIHnqBMJXVRGlm+ocyFnXQaO1ZNMWVQMQRIXrIcluW60BmWRx/gAnJj5JiZTwlys+NKvmVYaZVFAlNI9KUK3dwF3Iah1PAdc3HvguJDrEDXVzAMfuCZeziGaWHOccnLKKm3M7MEBDzQ4daJJHTRQzQSPpfa0DlTZsnrgBflIg7wDQwu4RaRm1ANlFQtHB4dHxVzMJZL+F3a9P/f3+ncd0Tncwy71MAn3Wm06stvNe7vvfrJrn0b25KpoTwYTuz/4Yw+7ZK/VbhXP2jeFs3pl/yyFAF+Wro++VevVU3uPThoFu39zb7fpfqtNB51Js3D6md6fnnwd2ZObg1b9qmC3G8XTz2L/rHahWrUL0ark8yiLGNfgSmK2qVD5+4/5gdhnjiWoXlWIgVqkb/rEhTm7TA+FBCwXhB2P0bwq5IlPJoKTe5Wnwrd8cBixEn748i4kEvAX4Yp8P3Bn9meCPxgflVHDPqnYtUZ90ScqQ8I80vEAlbUMYcWJUfk7oqGUwOkYZRE3mzEMxsYzzFYk+EIDNme0+IcDonvJEHNMhGiiQ7NKC008THzjquZXEq5IpKlZa0TocQDo1iy/C5kE55xI4oMGaVS6/ZlNs3GLUSmU6OpMfcyJz6jKFErFTDVUjINSmRpwLYm3nQN4EIZnwnChVMQzYTgWhmvCExIfjRrHpdJhPuDbP58Epb4wDk0Nfj5GAZRNm6TCDwgfr5mMhjCfYl4KgQOKShZEWqcSMA1++sxdSLhmeo3keUdJmZ66jMc4JH6TRiYJHTDu4hjbGah0wpAzjQPJqNnn+dShE/sFgcfASSQtEzA+FOlL49hAWZTYmQquCY3GkliKtmKMZRTkod8BmYQLlUC0UUA/N8bi7zBwEgYb4i7FWFuKRhv0Zcii5VsINxu0MtywitBuQyDZlXbzW+MlYVQJAm9sDnTVDzYRxbZKI1kXVQlF4lDPDufHInbO554VrlEVhMNwXUQGUvSBrtHqZbFORlguW3NHkWDR/E/Hib4IJSceNmlivBFHktIUByCZcKJidKrWXCaeDWkR2UY9jkAwoj3CXZjZmnHqhYoNAYsu1mS0DFILDhGXAvPARRiP7B1ZZEex7Jkg9jVkdBCVWZkzboyxHTRL2OameIavugel6uH+/7j2JpWID754L9CLXX8zwSwafm3sXPKwd4DWJ8LoE8BzbTn3Jqj4JmB4SVyY66Y8ETpztyDbQUYjA1drlVlX+/fweli47L9K47Ta2O5AEttG6R0dVNM4beS12zqWmOPsaIZDZqtD8lukrGR2HYqnUqzC+ArZOhx/xRZ+c0PwaFpdRr63ayo+fAbddoZ8yjXE8sz87l/eMyymvd3rCV6U8K5Biu3gp+GU+42uLnYNL9/7VvPjQtZHKfpfpah/7EbkAekWX0R2C/T+Ww35j+iJzBYfrAy/1feqnXgPeW9weOGTx7u/ZPyqNcHtz38B2ynOBCMgAAA=" /></Footer>{/_ END_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.MetaPatchRetrieveCreditNotesRequest`

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

Returns metadata for `CreditNote` POSTs.{/_ BEGIN_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1ZbW/iOBD+K8gfKyDXslAV6XTirVt6S9pt6aq9VWUZZwiGxE5thwKr/e8nh9DwEmh7pS3dvW+JPZ4Zj2eembF/IEo0uEKOURkRSkXINeMuyiJfOOChMqpJcJi2hQaURSRgNvEBlVELpAuZysOKTOW8ibJIhUEgpAbnmIHnqBMJXVRGlm+ocyFnXQaO1ZNMWVQMQRIXrIcluW60BmWRx/gAnJj5JiZTwlys+NKvmVYaZVFAlNI9KUK3dwF3Iah1PAdc3HvguJDrEDXVzAMfuCZeziGaWHOccnLKKm3M7MEBDzQ4daJJHTRQzQSPpfa0DlTZsnrgBflIg7wDQwu4RaRm1ANlFQtHB4dHxVzMJZL+F3a9P/f3+ncd0Tncwy71MAn3Wm06stvNe7vvfrJrn0b25KpoTwYTuz/4Yw+7ZK/VbhXP2jeFs3pl/yyFAF+Wro++VevVU3uPThoFu39zb7fpfqtNB51Js3D6md6fnnwd2ZObg1b9qmC3G8XTz2L/rHahWrUL0ark8yiLGNfgSmK2qVD5+4/5gdhnjiWoXlWIgVqkb/rEhTm7TA+FBCwXhB2P0bwq5IlPJoKTe5Wnwrd8cBixEn748i4kEvAX4Yp8P3Bn9meCPxgflVHDPqnYtUZ90ScqQ8I80vEAlbUMYcWJUfk7oqGUwOkYZRE3mzEMxsYzzFYk+EIDNme0+IcDonvJEHNMhGiiQ7NKC008THzjquZXEq5IpKlZa0TocQDo1iy/C5kE55xI4oMGaVS6/ZlNs3GLUSmU6OpMfcyJz6jKFErFTDVUjINSmRpwLYm3nQN4EIZnwnChVMQzYTgWhmvCExIfjRrHpdJhPuDbP58Epb4wDk0Nfj5GAZRNm6TCDwgfr5mMhjCfYl4KgQOKShZEWqcSMA1++sxdSLhmeo3keUdJmZ66jMc4JH6TRiYJHTDu4hjbGah0wpAzjQPJqNnn+dShE/sFgcfASSQtEzA+FOlL49hAWZTYmQquCY3GkliKtmKMZRTkod8BmYQLlUC0UUA/N8bi7zBwEgYb4i7FWFuKRhv0Zcii5VsINxu0MtywitBuQyDZlXbzW+MlYVQJAm9sDnTVDzYRxbZKI1kXVQlF4lDPDufHInbO554VrlEVhMNwXUQGUvSBrtHqZbFORlguW3NHkWDR/E/Hib4IJSceNmlivBFHktIUByCZcKJidKrWXCaeDWkR2UY9jkAwoj3CXZjZmnHqhYoNAYsu1mS0DFILDhGXAvPARRiP7B1ZZEex7Jkg9jVkdBCVWZkzboyxHTRL2OameIavugel6uH+/7j2JpWID754L9CLXX8zwSwafm3sXPKwd4DWJ8LoE8BzbTn3Jqj4JmB4SVyY66Y8ETpztyDbQUYjA1drlVlX+/fweli47L9K47Ta2O5AEttG6R0dVNM4beS12zqWmOPsaIZDZqtD8lukrGR2HYqnUqzC+ArZOhx/xRZ+c0PwaFpdRr63ayo+fAbddoZ8yjXE8sz87l/eMyymvd3rCV6U8K5Biu3gp+GU+42uLnYNL9/7VvPjQtZHKfpfpah/7EbkAekWX0R2C/T+Ww35j+iJzBYfrAy/1feqnXgPeW9weOGTx7u/ZPyqNcHtz38B2ynOBCMgAAA=" /></Footer>{/_ END_ACCOUNTING_CREDITNOTE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `Employee` objects.{/_ BEGIN_ACCOUNTING_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81V708iMRD9V0g/kl32EIFIcrnw6xQTiqdozhjTDN1hKXTbte0CcvF/vxQQ9fS8y0UvfttOp+9N583r/iAcHCba3JIGAc51rpxQCQlIqmOUpEG6aSb1LSIJCGSCQoqkQfpoEiw0d/mF5kmPBMTmWaaNw/irQBnbI4Nj0iBR6rPDXImxwDiaGGEjrudoIMFodyQcr8+QgEihZhhvwV8D2SSG27J/Wfpt60hAMrDWTYzOk8kp3uRof4c5U3ohMU4wHIHdVCYxReVAhjE4iB4hhWYD9VLM3yFGiQ7jDjjooEPuhFZb1olzmW1E0QRlVlpXUIpxHqGKwDjBJdqoWjnYqx9Uwy3Kmv0LS+TncnF6M9KjepElXDLIi/0hX9Jhb0GnyT5t7y/p6rxKV7MVnc4+FVkCxf6wXx0MLyuDTrM8eCGBndW+H1y0Oq1jWuSrboVOLxd0yMv9IZ+NVr3K8SFfHB99W9LV5V6/c16hw271+FCXB+1T22+f6n6zVCIBEcphYsBf05LG1Y/HgfuZEdxoq8eu0LlVkApuC5VatdDKrVBobaGNyhmQT8F6KST4qGkbxSATYZaPpOAlWylBCiutYGFLXKdRirGAaEfG7slYpVZl92RsS8baWmrDDpbdr7VavZStJ3/ddaHVTjjvAnrUpO1u5+k8NecgJIwkkoYzOT4zAGlcEa7TDNQtCQimICSDODZo7Xq9cRZTeTpCQwIyFsY6pny/AiLh4dtgqh0yPwdPVywDN3kIidi70IHLLbn20ZtcGIxPwECKDo2v6PoueEkeiu4sFw7fpv8UnfVozN7kYPCVztLmsHfRfd++4jJDZZEZ9ChM+hl4Fn4Usb9qkaBCPy7r58EwZ0BZWN9gByYs49oPFXfac051bpQ/st3/z3J+ywWftbSe2cJA+RreRtcH2HCjLDsf79Va9fK7eOevlX0m2AdT4wwSLPSUA87d2wjhEdkWkZ1tpJjPBbV1+CBme9llr5jvqYBqrgXfoDDhMP2AHvuORr+Nmh4p/ONT+e9G+k8/luu7n6Ddkc5QCgAA" /></Footer>{/_ END_ACCOUNTING_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.employees.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListEmployeesRequest`

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

Returns an `Employee` object with the given `id`.{/_ BEGIN_ACCOUNTING_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81V708iMRD9V0g/kl32EIFIcrnw6xQTiqdozhjTDN1hKXTbte0CcvF/vxQQ9fS8y0UvfttOp+9N583r/iAcHCba3JIGAc51rpxQCQlIqmOUpEG6aSb1LSIJCGSCQoqkQfpoEiw0d/mF5kmPBMTmWaaNw/irQBnbI4Nj0iBR6rPDXImxwDiaGGEjrudoIMFodyQcr8+QgEihZhhvwV8D2SSG27J/Wfpt60hAMrDWTYzOk8kp3uRof4c5U3ohMU4wHIHdVCYxReVAhjE4iB4hhWYD9VLM3yFGiQ7jDjjooEPuhFZb1olzmW1E0QRlVlpXUIpxHqGKwDjBJdqoWjnYqx9Uwy3Kmv0LS+TncnF6M9KjepElXDLIi/0hX9Jhb0GnyT5t7y/p6rxKV7MVnc4+FVkCxf6wXx0MLyuDTrM8eCGBndW+H1y0Oq1jWuSrboVOLxd0yMv9IZ+NVr3K8SFfHB99W9LV5V6/c16hw271+FCXB+1T22+f6n6zVCIBEcphYsBf05LG1Y/HgfuZEdxoq8eu0LlVkApuC5VatdDKrVBobaGNyhmQT8F6KST4qGkbxSATYZaPpOAlWylBCiutYGFLXKdRirGAaEfG7slYpVZl92RsS8baWmrDDpbdr7VavZStJ3/ddaHVTjjvAnrUpO1u5+k8NecgJIwkkoYzOT4zAGlcEa7TDNQtCQimICSDODZo7Xq9cRZTeTpCQwIyFsY6pny/AiLh4dtgqh0yPwdPVywDN3kIidi70IHLLbn20ZtcGIxPwECKDo2v6PoueEkeiu4sFw7fpv8UnfVozN7kYPCVztLmsHfRfd++4jJDZZEZ9ChM+hl4Fn4Usb9qkaBCPy7r58EwZ0BZWN9gByYs49oPFXfac051bpQ/st3/z3J+ywWftbSe2cJA+RreRtcH2HCjLDsf79Va9fK7eOevlX0m2AdT4wwSLPSUA87d2wjhEdkWkZ1tpJjPBbV1+CBme9llr5jvqYBqrgXfoDDhMP2AHvuORr+Nmh4p/ONT+e9G+k8/luu7n6Ddkc5QCgAA" /></Footer>{/_ END_ACCOUNTING_EMPLOYEE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveEmployeesRequest`

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

## Accounting ExpenseReports

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedExpenseReportList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ExpenseReport` objects.{/_ BEGIN_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE71T224aMRD9lciPaC8lhEZZqaoI0AakNSmQqlEUrQbvZDF47Y3t5Rbl3ysv24S0SR+qtm8ee3zmzJwzD4SBxUzpLYkIMKZKabnMiEdylaIgEelvCpQGx1gobYlHoOAUciQRiVFneNR5+nTUuRwQj5iycKmYfuIoUnOh8Y5EJMxdtl9KfscxDeeam5CpFWrIMHz64t9Vf4hHBJdLTGvw34HsE/2a+0+hezaOdQHG2LlWZTYf432J5i3MpVRrgWmG/gzMnpnAHKUF4adgITxA8vUe6rU710OKAi2mPbDQQ4vMciXrqnNrCxOF4RxFEVQMghRXIcoQtOVMoAnbrbPj07O2X6NU1T8mmfjQbCzuZ2p22kgyJhIoG/GUbeh0sKaL7IR2TzZ0d9Wmu+WOLpbvGkkGjXgat0fT69ao12mOXklIJu+/nX09750PaYPt+i26uF7TKWvGU7ac7Qat4We2Hl582dDd9XHcu2rRab89/Kyao+7YxN2xijtBQDzCpcVMg2vTkOjm4fCi9gxFOym5xZfZgxwyPJjKXhIouF+UM8FZYFoB5LBTEtYmYCoPc0w5hBStcWiJuS9BY1BUzq0GxpV8mrlzMb3o0G6/99IKnRVwATOBJLK6xF+8S6Kbg6VICtRcpcQjTOUFyK07lVqjZNuqrGGaF1VBj2BeCLVF3FsZzY+NSsqSOwiNubKYOFFfRkkBdv58VSc7Vu4ZnyOeorTOtNotnQVbuiJWWRAJ5I6zCzWwpeNerzlHQ24dxH3JNaaXoCFHi9q1evvovSbZBDI8GkgLjNm/I5tDTGrEZFJJl6xWnJpT+CcS/plc/0Wht7W4ffwOGt4kNJwFAAA=" /></Footer>{/_ END_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListExpenseReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReports.RequestOptions`

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

Creates an `ExpenseReport` object with the given values.{/_ BEGIN_ACCOUNTING_EXPENSEREPORT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE7VTbW/aMBD+K5U/oryMUlY10jRRYCtIMR3QaVWFosO5BoMTB9vhrep/nxyyDjq6D1P3KT7n/Nxz9zz3RBgYTKTakoAAY7LIDM8S4pBUxihIQLqbHDONQ8ylMsQhkHMKKZKAhKgSPGu9PDpr3faIQ3SR21SMv3AUsb5R+EgC4qc22y0y/sgx9meKa5/JFSpI0H954j6Wb4hDBM8WGFfgfwPZJ7oV91eh/a0t6xy0NjMli2Q2xGWB+i3MRSbXAuME3SnoPTOBKWYGhBuDAf8AyVV7qFN3tocYBRqMO2CggwaZ4TKrqs6MyXXg+zMUuVcy8GJc+Zj5oAxnArXfbFydX1413QqlrP45SsSnem2+nMrpZS1KmIigqIVjtqHj3prOkwvavtjQ3V2T7hY7Ol98qEUJ1MJx2ByM7xuDTqs+OJEQjT7+uPp+3bnu0xrbdRt0fr+mY1YPx2wx3fUa/a9s3b/5tqG7+/Owc9eg426z/1XWB+2hDttDGbY8jziEZwYTBbZNTYKHp8OLyjMUzajgBo+zeykkeDCVvSSQczcvpoIzTzc8SGEnM1hrj8nUTzHm4FM02qJFelmAQi8vnVsOjMvsZebWxfSmRdvdzrEVWivgAqYCSWBUgX94lwQPB0sR5ai4jIlDmExzyLb2VCiFGduWZTVTPC8LOgTTXMgt4t7KqH9tVFQU3EIoTKXBqDrbolEM5VyqiMeYGetJZXfKgCkshpEGRASppWRDBWxhqVVbzFGTiYVYFlxhfAsKUjSoyk4OuJ5gV369itZ+DY+iiAnQ+jfzt1Mmz84p6UeQ4FkvM8CYeR/5LWJUIUaj0gLRasWpvoT/YoV/k/09lH5T09f13kXAY56T58nzT0Pt9rUnBgAA" /></Footer>{/_ END_ACCOUNTING_EXPENSEREPORT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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
    model: {
        trackingCategories: ["a1b2c3d4-e5f6-4a5b-9c3d-2e1f0a9b8c7d", "d4c3b2a1-9e8f-7g6h-5i4j-3k2l1m0n9o8p"],
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

**request:** `Merge.accounting.ExpenseReportEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">linesList</a>(expenseReportId, { ...params }) -> Merge.PaginatedExpenseReportLineList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `ExpenseReportLine` objects that point to a `ExpenseReport` with the given id.{/_ BEGIN_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE71T224aMRD9lciPaC8lhEZZqaoI0AakNSmQqlEUrQbvZDF47Y3t5Rbl3ysv24S0SR+qtm8ee3zmzJwzD4SBxUzpLYkIMKZKabnMiEdylaIgEelvCpQGx1gobYlHoOAUciQRiVFneNR5+nTUuRwQj5iycKmYfuIoUnOh8Y5EJMxdtl9KfscxDeeam5CpFWrIMHz64t9Vf4hHBJdLTGvw34HsE/2a+0+hezaOdQHG2LlWZTYf432J5i3MpVRrgWmG/gzMnpnAHKUF4adgITxA8vUe6rU710OKAi2mPbDQQ4vMciXrqnNrCxOF4RxFEVQMghRXIcoQtOVMoAnbrbPj07O2X6NU1T8mmfjQbCzuZ2p22kgyJhIoG/GUbeh0sKaL7IR2TzZ0d9Wmu+WOLpbvGkkGjXgat0fT69ao12mOXklIJu+/nX09750PaYPt+i26uF7TKWvGU7ac7Qat4We2Hl582dDd9XHcu2rRab89/Kyao+7YxN2xijtBQDzCpcVMg2vTkOjm4fCi9gxFOym5xZfZgxwyPJjKXhIouF+UM8FZYFoB5LBTEtYmYCoPc0w5hBStcWiJuS9BY1BUzq0GxpV8mrlzMb3o0G6/99IKnRVwATOBJLK6xF+8S6Kbg6VICtRcpcQjTOUFyK07lVqjZNuqrGGaF1VBj2BeCLVF3FsZzY+NSsqSOwiNubKYOFFfRkkBdv58VSc7Vu4ZnyOeorTOtNotnQVbuiJWWRAJ5I6zCzWwpeNerzlHQ24dxH3JNaaXoCFHi9q1evvovSbZBDI8GkgLjNm/I5tDTGrEZFJJl6xWnJpT+CcS/plc/0Wht7W4ffwOGt4kNJwFAAA=" /></Footer>{/_ END_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.linesList("expense_report_id", {
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**expenseReportId:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `Merge.accounting.LinesListExpenseReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReports.RequestOptions`

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

Returns an `ExpenseReport` object with the given `id`.{/_ BEGIN_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE71T224aMRD9lciPaC8lhEZZqaoI0AakNSmQqlEUrQbvZDF47Y3t5Rbl3ysv24S0SR+qtm8ee3zmzJwzD4SBxUzpLYkIMKZKabnMiEdylaIgEelvCpQGx1gobYlHoOAUciQRiVFneNR5+nTUuRwQj5iycKmYfuIoUnOh8Y5EJMxdtl9KfscxDeeam5CpFWrIMHz64t9Vf4hHBJdLTGvw34HsE/2a+0+hezaOdQHG2LlWZTYf432J5i3MpVRrgWmG/gzMnpnAHKUF4adgITxA8vUe6rU710OKAi2mPbDQQ4vMciXrqnNrCxOF4RxFEVQMghRXIcoQtOVMoAnbrbPj07O2X6NU1T8mmfjQbCzuZ2p22kgyJhIoG/GUbeh0sKaL7IR2TzZ0d9Wmu+WOLpbvGkkGjXgat0fT69ao12mOXklIJu+/nX09750PaYPt+i26uF7TKWvGU7ac7Qat4We2Hl582dDd9XHcu2rRab89/Kyao+7YxN2xijtBQDzCpcVMg2vTkOjm4fCi9gxFOym5xZfZgxwyPJjKXhIouF+UM8FZYFoB5LBTEtYmYCoPc0w5hBStcWiJuS9BY1BUzq0GxpV8mrlzMb3o0G6/99IKnRVwATOBJLK6xF+8S6Kbg6VICtRcpcQjTOUFyK07lVqjZNuqrGGaF1VBj2BeCLVF3FsZzY+NSsqSOwiNubKYOFFfRkkBdv58VSc7Vu4ZnyOeorTOtNotnQVbuiJWWRAJ5I6zCzWwpeNerzlHQ24dxH3JNaaXoCFHi9q1evvovSbZBDI8GkgLjNm/I5tDTGrEZFJJl6xWnJpT+CcS/plc/0Wht7W4ffwOGt4kNJwFAAA=" /></Footer>{/_ END_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.retrieve("id");
```

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

**request:** `Merge.accounting.RetrieveExpenseReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE71T224aMRD9lciPaC8lhEZZqaoI0AakNSmQqlEUrQbvZDF47Y3t5Rbl3ysv24S0SR+qtm8ee3zmzJwzD4SBxUzpLYkIMKZKabnMiEdylaIgEelvCpQGx1gobYlHoOAUciQRiVFneNR5+nTUuRwQj5iycKmYfuIoUnOh8Y5EJMxdtl9KfscxDeeam5CpFWrIMHz64t9Vf4hHBJdLTGvw34HsE/2a+0+hezaOdQHG2LlWZTYf432J5i3MpVRrgWmG/gzMnpnAHKUF4adgITxA8vUe6rU710OKAi2mPbDQQ4vMciXrqnNrCxOF4RxFEVQMghRXIcoQtOVMoAnbrbPj07O2X6NU1T8mmfjQbCzuZ2p22kgyJhIoG/GUbeh0sKaL7IR2TzZ0d9Wmu+WOLpbvGkkGjXgat0fT69ao12mOXklIJu+/nX09750PaYPt+i26uF7TKWvGU7ac7Qat4We2Hl582dDd9XHcu2rRab89/Kyao+7YxN2xijtBQDzCpcVMg2vTkOjm4fCi9gxFOym5xZfZgxwyPJjKXhIouF+UM8FZYFoB5LBTEtYmYCoPc0w5hBStcWiJuS9BY1BUzq0GxpV8mrlzMb3o0G6/99IKnRVwATOBJLK6xF+8S6Kbg6VICtRcpcQjTOUFyK07lVqjZNuqrGGaF1VBj2BeCLVF3FsZzY+NSsqSOwiNubKYOFFfRkkBdv58VSc7Vu4ZnyOeorTOtNotnQVbuiJWWRAJ5I6zCzWwpeNerzlHQ24dxH3JNaaXoCFHi9q1evvovSbZBDI8GkgLjNm/I5tDTGrEZFJJl6xWnJpT+CcS/plc/0Wht7W4ffwOGt4kNJwFAAA=" /></Footer>{/_ END_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LinesRemoteFieldClassesListExpenseReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReports.RequestOptions`

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

Returns metadata for `ExpenseReport` POSTs.{/_ BEGIN_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE71T224aMRD9lciPaC8lhEZZqaoI0AakNSmQqlEUrQbvZDF47Y3t5Rbl3ysv24S0SR+qtm8ee3zmzJwzD4SBxUzpLYkIMKZKabnMiEdylaIgEelvCpQGx1gobYlHoOAUciQRiVFneNR5+nTUuRwQj5iycKmYfuIoUnOh8Y5EJMxdtl9KfscxDeeam5CpFWrIMHz64t9Vf4hHBJdLTGvw34HsE/2a+0+hezaOdQHG2LlWZTYf432J5i3MpVRrgWmG/gzMnpnAHKUF4adgITxA8vUe6rU710OKAi2mPbDQQ4vMciXrqnNrCxOF4RxFEVQMghRXIcoQtOVMoAnbrbPj07O2X6NU1T8mmfjQbCzuZ2p22kgyJhIoG/GUbeh0sKaL7IR2TzZ0d9Wmu+WOLpbvGkkGjXgat0fT69ao12mOXklIJu+/nX09750PaYPt+i26uF7TKWvGU7ac7Qat4We2Hl582dDd9XHcu2rRab89/Kyao+7YxN2xijtBQDzCpcVMg2vTkOjm4fCi9gxFOym5xZfZgxwyPJjKXhIouF+UM8FZYFoB5LBTEtYmYCoPc0w5hBStcWiJuS9BY1BUzq0GxpV8mrlzMb3o0G6/99IKnRVwATOBJLK6xF+8S6Kbg6VICtRcpcQjTOUFyK07lVqjZNuqrGGaF1VBj2BeCLVF3FsZzY+NSsqSOwiNubKYOFFfRkkBdv58VSc7Vu4ZnyOeorTOtNotnQVbuiJWWRAJ5I6zCzWwpeNerzlHQ24dxH3JNaaXoCFHi9q1evvovSbZBDI8GkgLjNm/I5tDTGrEZFJJl6xWnJpT+CcS/plc/0Wht7W4ffwOGt4kNJwFAAA=" /></Footer>{/_ END_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**requestOptions:** `ExpenseReports.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.expenseReports.<a href="/src/api/resources/accounting/resources/expenseReports/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE71T224aMRD9lciPaC8lhEZZqaoI0AakNSmQqlEUrQbvZDF47Y3t5Rbl3ysv24S0SR+qtm8ee3zmzJwzD4SBxUzpLYkIMKZKabnMiEdylaIgEelvCpQGx1gobYlHoOAUciQRiVFneNR5+nTUuRwQj5iycKmYfuIoUnOh8Y5EJMxdtl9KfscxDeeam5CpFWrIMHz64t9Vf4hHBJdLTGvw34HsE/2a+0+hezaOdQHG2LlWZTYf432J5i3MpVRrgWmG/gzMnpnAHKUF4adgITxA8vUe6rU710OKAi2mPbDQQ4vMciXrqnNrCxOF4RxFEVQMghRXIcoQtOVMoAnbrbPj07O2X6NU1T8mmfjQbCzuZ2p22kgyJhIoG/GUbeh0sKaL7IR2TzZ0d9Wmu+WOLpbvGkkGjXgat0fT69ao12mOXklIJu+/nX09750PaYPt+i26uF7TKWvGU7ac7Qat4We2Hl582dDd9XHcu2rRab89/Kyao+7YxN2xijtBQDzCpcVMg2vTkOjm4fCi9gxFOym5xZfZgxwyPJjKXhIouF+UM8FZYFoB5LBTEtYmYCoPc0w5hBStcWiJuS9BY1BUzq0GxpV8mrlzMb3o0G6/99IKnRVwATOBJLK6xF+8S6Kbg6VICtRcpcQjTOUFyK07lVqjZNuqrGGaF1VBj2BeCLVF3FsZzY+NSsqSOwiNubKYOFFfRkkBdv58VSc7Vu4ZnyOeorTOtNotnQVbuiJWWRAJ5I6zCzWwpeNerzlHQ24dxH3JNaaXoCFHi9q1evvovSbZBDI8GkgLjNm/I5tDTGrEZFJJl6xWnJpT+CcS/plc/0Wht7W4ffwOGt4kNJwFAAA=" /></Footer>{/_ END_ACCOUNTING_EXPENSEREPORT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenseReports.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListExpenseReportsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExpenseReports.RequestOptions`

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

Returns a list of `Expense` objects.{/_ BEGIN_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXXW/aShD9K2gfkY0voTQK0tUVCTQhKiZNSNW0iqxhPZgFe9fsrvmq+t+vbAwYCm1onEZ59Oz6ePbMOTPr74SCRk/IOakRoFREXDPuEYMEwkWf1EhzFiJXSAwCIbMhQFIjbZQeFurr7YX6TYsYREVhKKRG9wND31VXEvukRqwg3m1GnPUZutZAMmVRMUEJHlrrV8x+8g4xiM/4CN0U/Fcgy41mmvXOY7ysNDFICErpgRSRN7jFcYTqEOaIi6mProdmD9QyMx8D5Bp80wUNVgbJlEuofbH4DC76qNFtgIYGaqSaCZ5+daB1qGqWNUA/LCUZlFycWMgtkJpRH5VVrZydnJ5VzRQl+fp/juf/Wy4Oxz3ROy06HvUdiIrtLp3Z3dbUHnrv7It3M3txX7UXo4U9HP1TdDwotrvtaqf7UOk06uXOng3O3fsvZ5/PG+fXdpEumhV7+DC1u7Tc7tJRb9GqXF/S6fXVp5m9eDhpN+4rdrdZvb4U5c7FrWpf3Ip2vVQiBmFcoychPqYitW/fs4FUMx8kYt1Drre3twLwMEPLsiYQMjOMej6jJVUpQQALwWGqSlQEVoAuA+vGB90XMuhLRIhhHTWOQKIzutXzxuVJKUxUnFDIBF9XIVa0fVW3L5qNbXHUJ8B86PlIalpG+JOaSe3byiDEIDSSEjmdE4NIDIRGh0oEja4DehOLC7f95ISgB5sQc4lBtNDgOxCk0FoCV5AkG7+C5DHePo6YRPcGJASoUcbpPP4wDhCtBudCjFQ+TG/wnLslxR+FJ0rD8EX5FVwD3WE6wEA8l9zkUcMsP75t1HcR05gP2zZqFaOlcv6FjO16t/W5eTzJaUP/yDiWNoRnoy4qKlmYfGd7BdfDIBtlGoOdUDI9nChKapBd4Kg31GcXQimGSHej4wi4Znq+E85WOBuPCytB7yaoJdAR456TDjuGamdHxJl2QsloMujWrGwmohOiZMJNpBmEwOeHRIpB6Is5xjg4owPgHq5SYpz6kWITdEQ/1uBy2CW5pNLeou0FGsseFp4r/08Ro6OkPRQ6PD5OPj7YwJppY7/vn7w/Py2/iiM2lX6TPknlcmBlJZ0nGexPnXSsV3aM8Ta8cAceFlrxQWlO15wY0UkRV+N3MmG2OoVXMsKq+f3eHplCP9E1Gzlsm2lbGq9qtPwddczIyvppPYUyfvrrJnqWXb6gFPnYJEYy3/aN6aAOcxfOvkZ89E3lKN2oqOck2vkrF/KvYiAKOf4AxXg///+8xP9l/kL7naqe18f2tqOn6CvvxvRiAnv88T+d5SsJIhMAAA==" /></Footer>{/_ END_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenses.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListExpensesRequest`

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

Creates an `Expense` object with the given values.{/_ BEGIN_ACCOUNTING_EXPENSE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE8WVa28aOxCG/0rkj2gvh1AaBenoiATaEB2WNCFVoyqyBu+wGLz2xvZyq/rfj3ZZwqWbpE1Jzzc8zL5+PfN4/I0wsBgpvSANAoypVFouI+KQWIUoSIO05wlKg8QhkPAAYiQN0kUd4VHzMf2oedUhDjFpkihtMfzAUYTmQuOQNIgfZ9luKvmQY+iPNDc+U1PUEKH/+Ik7zL8hDhFcTjAsxJ8TWSW6heu9Zfa3scQhCRhjR1ql0egaH1I0T2lOpJoJDCN0B2BWzgTGKC0INwQL/paSq1dSZbHsDCEKtBi2wEILLTLLlSx2HVmbmIbvj1AkXu7AC3Hqo/RBW84EGr9eOz0+Oa27hUq++z80En9XK+OHgRqcVGjEBIW00u2zedDvzIJx9C44fzcPlrf1YDlZBuPJXxUaQaXb79Z7/btar9Ws9koS6M37L6efz1pnl0GFLdu1YHw3C/qs2u2zyWDZqV1+ZLPLi0/zYHl33G3d1oJ+u375UVV759eme36tuk3PIw7h0mKkITumIY2v37YDBTMfNJrRmVITs5vfiSHCrbqsmgIJd5N0IDjzTM2DGJZKwsx4TMV+jCEHf6NHbx5S0Ej/VZHyxkm0rj9X8rH4GcjBRTM4b7d2mWhOgQsYCCQNq1P8AWLS+Lq+F8QhTMUJyEX+S1pgeSzVGiXLgjHGijhEY6wsUh4Sh1hlQVCIC4HV0sJ8K6RBGshd0hAskvtM4SHlGsMr0BCjRZ372Oy+VT+aZDmmNOgVzum2o5K09Qx4Kc9YGA53kgSXaLwisrrCOyvKBBizqclzKVYDm3AZ0cIOR0PuvztlMAVob1Ju8TAoBWhNpkZNDpKXyKcYCpr9zuf27xC0mbE0Qc1V+DJVGCdCLTA7LM7ZCGSEVEN++Lz8G/DymU3TNG9NUWOmESyGFOxryPyhIb/Ca9m9WTs+MDh7jsqp+ZRyNslHxlFPZgYOg89G1l0BRG+Hx+/PTqpvCtJLqOyh8RINJh3QHIE/TMbPTrIrWGRvcX+R4JtQ9AQyNxDhUSerNLOHoSVTpIXi+uWaTnlgTuCNeXkcMlu8PD9PfnWEvKL/u53ci3sS7Ub+zZv9BbU6TJMzJfcPvCblQ2CvqVwykRo+RaqG2TV+ss+vGwSveAxKTP9PHNx//w+tOqVOAg0AAA==" /></Footer>{/_ END_ACCOUNTING_EXPENSE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Expense` object with the given `id`.{/_ BEGIN_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXXW/aShD9K2gfkY0voTQK0tUVCTQhKiZNSNW0iqxhPZgFe9fsrvmq+t+vbAwYCm1onEZ59Oz6ePbMOTPr74SCRk/IOakRoFREXDPuEYMEwkWf1EhzFiJXSAwCIbMhQFIjbZQeFurr7YX6TYsYREVhKKRG9wND31VXEvukRqwg3m1GnPUZutZAMmVRMUEJHlrrV8x+8g4xiM/4CN0U/Fcgy41mmvXOY7ysNDFICErpgRSRN7jFcYTqEOaIi6mProdmD9QyMx8D5Bp80wUNVgbJlEuofbH4DC76qNFtgIYGaqSaCZ5+daB1qGqWNUA/LCUZlFycWMgtkJpRH5VVrZydnJ5VzRQl+fp/juf/Wy4Oxz3ROy06HvUdiIrtLp3Z3dbUHnrv7It3M3txX7UXo4U9HP1TdDwotrvtaqf7UOk06uXOng3O3fsvZ5/PG+fXdpEumhV7+DC1u7Tc7tJRb9GqXF/S6fXVp5m9eDhpN+4rdrdZvb4U5c7FrWpf3Ip2vVQiBmFcoychPqYitW/fs4FUMx8kYt1Drre3twLwMEPLsiYQMjOMej6jJVUpQQALwWGqSlQEVoAuA+vGB90XMuhLRIhhHTWOQKIzutXzxuVJKUxUnFDIBF9XIVa0fVW3L5qNbXHUJ8B86PlIalpG+JOaSe3byiDEIDSSEjmdE4NIDIRGh0oEja4DehOLC7f95ISgB5sQc4lBtNDgOxCk0FoCV5AkG7+C5DHePo6YRPcGJASoUcbpPP4wDhCtBudCjFQ+TG/wnLslxR+FJ0rD8EX5FVwD3WE6wEA8l9zkUcMsP75t1HcR05gP2zZqFaOlcv6FjO16t/W5eTzJaUP/yDiWNoRnoy4qKlmYfGd7BdfDIBtlGoOdUDI9nChKapBd4Kg31GcXQimGSHej4wi4Znq+E85WOBuPCytB7yaoJdAR456TDjuGamdHxJl2QsloMujWrGwmohOiZMJNpBmEwOeHRIpB6Is5xjg4owPgHq5SYpz6kWITdEQ/1uBy2CW5pNLeou0FGsseFp4r/08Ro6OkPRQ6PD5OPj7YwJppY7/vn7w/Py2/iiM2lX6TPknlcmBlJZ0nGexPnXSsV3aM8Ta8cAceFlrxQWlO15wY0UkRV+N3MmG2OoVXMsKq+f3eHplCP9E1Gzlsm2lbGq9qtPwddczIyvppPYUyfvrrJnqWXb6gFPnYJEYy3/aN6aAOcxfOvkZ89E3lKN2oqOck2vkrF/KvYiAKOf4AxXg///+8xP9l/kL7naqe18f2tqOn6CvvxvRiAnv88T+d5SsJIhMAAA==" /></Footer>{/_ END_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveExpensesRequest`

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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXXW/aShD9K2gfkY0voTQK0tUVCTQhKiZNSNW0iqxhPZgFe9fsrvmq+t+vbAwYCm1onEZ59Oz6ePbMOTPr74SCRk/IOakRoFREXDPuEYMEwkWf1EhzFiJXSAwCIbMhQFIjbZQeFurr7YX6TYsYREVhKKRG9wND31VXEvukRqwg3m1GnPUZutZAMmVRMUEJHlrrV8x+8g4xiM/4CN0U/Fcgy41mmvXOY7ysNDFICErpgRSRN7jFcYTqEOaIi6mProdmD9QyMx8D5Bp80wUNVgbJlEuofbH4DC76qNFtgIYGaqSaCZ5+daB1qGqWNUA/LCUZlFycWMgtkJpRH5VVrZydnJ5VzRQl+fp/juf/Wy4Oxz3ROy06HvUdiIrtLp3Z3dbUHnrv7It3M3txX7UXo4U9HP1TdDwotrvtaqf7UOk06uXOng3O3fsvZ5/PG+fXdpEumhV7+DC1u7Tc7tJRb9GqXF/S6fXVp5m9eDhpN+4rdrdZvb4U5c7FrWpf3Ip2vVQiBmFcoychPqYitW/fs4FUMx8kYt1Drre3twLwMEPLsiYQMjOMej6jJVUpQQALwWGqSlQEVoAuA+vGB90XMuhLRIhhHTWOQKIzutXzxuVJKUxUnFDIBF9XIVa0fVW3L5qNbXHUJ8B86PlIalpG+JOaSe3byiDEIDSSEjmdE4NIDIRGh0oEja4DehOLC7f95ISgB5sQc4lBtNDgOxCk0FoCV5AkG7+C5DHePo6YRPcGJASoUcbpPP4wDhCtBudCjFQ+TG/wnLslxR+FJ0rD8EX5FVwD3WE6wEA8l9zkUcMsP75t1HcR05gP2zZqFaOlcv6FjO16t/W5eTzJaUP/yDiWNoRnoy4qKlmYfGd7BdfDIBtlGoOdUDI9nChKapBd4Kg31GcXQimGSHej4wi4Znq+E85WOBuPCytB7yaoJdAR456TDjuGamdHxJl2QsloMujWrGwmohOiZMJNpBmEwOeHRIpB6Is5xjg4owPgHq5SYpz6kWITdEQ/1uBy2CW5pNLeou0FGsseFp4r/08Ro6OkPRQ6PD5OPj7YwJppY7/vn7w/Py2/iiM2lX6TPknlcmBlJZ0nGexPnXSsV3aM8Ta8cAceFlrxQWlO15wY0UkRV+N3MmG2OoVXMsKq+f3eHplCP9E1Gzlsm2lbGq9qtPwddczIyvppPYUyfvrrJnqWXb6gFPnYJEYy3/aN6aAOcxfOvkZ89E3lKN2oqOck2vkrF/KvYiAKOf4AxXg///+8xP9l/kL7naqe18f2tqOn6CvvxvRiAnv88T+d5SsJIhMAAA==" /></Footer>{/_ END_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenses.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LinesRemoteFieldClassesListExpensesRequest`

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

Returns metadata for `Expense` POSTs.{/_ BEGIN_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXXW/aShD9K2gfkY0voTQK0tUVCTQhKiZNSNW0iqxhPZgFe9fsrvmq+t+vbAwYCm1onEZ59Oz6ePbMOTPr74SCRk/IOakRoFREXDPuEYMEwkWf1EhzFiJXSAwCIbMhQFIjbZQeFurr7YX6TYsYREVhKKRG9wND31VXEvukRqwg3m1GnPUZutZAMmVRMUEJHlrrV8x+8g4xiM/4CN0U/Fcgy41mmvXOY7ysNDFICErpgRSRN7jFcYTqEOaIi6mProdmD9QyMx8D5Bp80wUNVgbJlEuofbH4DC76qNFtgIYGaqSaCZ5+daB1qGqWNUA/LCUZlFycWMgtkJpRH5VVrZydnJ5VzRQl+fp/juf/Wy4Oxz3ROy06HvUdiIrtLp3Z3dbUHnrv7It3M3txX7UXo4U9HP1TdDwotrvtaqf7UOk06uXOng3O3fsvZ5/PG+fXdpEumhV7+DC1u7Tc7tJRb9GqXF/S6fXVp5m9eDhpN+4rdrdZvb4U5c7FrWpf3Ip2vVQiBmFcoychPqYitW/fs4FUMx8kYt1Drre3twLwMEPLsiYQMjOMej6jJVUpQQALwWGqSlQEVoAuA+vGB90XMuhLRIhhHTWOQKIzutXzxuVJKUxUnFDIBF9XIVa0fVW3L5qNbXHUJ8B86PlIalpG+JOaSe3byiDEIDSSEjmdE4NIDIRGh0oEja4DehOLC7f95ISgB5sQc4lBtNDgOxCk0FoCV5AkG7+C5DHePo6YRPcGJASoUcbpPP4wDhCtBudCjFQ+TG/wnLslxR+FJ0rD8EX5FVwD3WE6wEA8l9zkUcMsP75t1HcR05gP2zZqFaOlcv6FjO16t/W5eTzJaUP/yDiWNoRnoy4qKlmYfGd7BdfDIBtlGoOdUDI9nChKapBd4Kg31GcXQimGSHej4wi4Znq+E85WOBuPCytB7yaoJdAR456TDjuGamdHxJl2QsloMujWrGwmohOiZMJNpBmEwOeHRIpB6Is5xjg4owPgHq5SYpz6kWITdEQ/1uBy2CW5pNLeou0FGsseFp4r/08Ro6OkPRQ6PD5OPj7YwJppY7/vn7w/Py2/iiM2lX6TPknlcmBlJZ0nGexPnXSsV3aM8Ta8cAceFlrxQWlO15wY0UkRV+N3MmG2OoVXMsKq+f3eHplCP9E1Gzlsm2lbGq9qtPwddczIyvppPYUyfvrrJnqWXb6gFPnYJEYy3/aN6aAOcxfOvkZ89E3lKN2oqOck2vkrF/KvYiAKOf4AxXg///+8xP9l/kL7naqe18f2tqOn6CvvxvRiAnv88T+d5SsJIhMAAA==" /></Footer>{/_ END_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXXW/aShD9K2gfkY0voTQK0tUVCTQhKiZNSNW0iqxhPZgFe9fsrvmq+t+vbAwYCm1onEZ59Oz6ePbMOTPr74SCRk/IOakRoFREXDPuEYMEwkWf1EhzFiJXSAwCIbMhQFIjbZQeFurr7YX6TYsYREVhKKRG9wND31VXEvukRqwg3m1GnPUZutZAMmVRMUEJHlrrV8x+8g4xiM/4CN0U/Fcgy41mmvXOY7ysNDFICErpgRSRN7jFcYTqEOaIi6mProdmD9QyMx8D5Bp80wUNVgbJlEuofbH4DC76qNFtgIYGaqSaCZ5+daB1qGqWNUA/LCUZlFycWMgtkJpRH5VVrZydnJ5VzRQl+fp/juf/Wy4Oxz3ROy06HvUdiIrtLp3Z3dbUHnrv7It3M3txX7UXo4U9HP1TdDwotrvtaqf7UOk06uXOng3O3fsvZ5/PG+fXdpEumhV7+DC1u7Tc7tJRb9GqXF/S6fXVp5m9eDhpN+4rdrdZvb4U5c7FrWpf3Ip2vVQiBmFcoychPqYitW/fs4FUMx8kYt1Drre3twLwMEPLsiYQMjOMej6jJVUpQQALwWGqSlQEVoAuA+vGB90XMuhLRIhhHTWOQKIzutXzxuVJKUxUnFDIBF9XIVa0fVW3L5qNbXHUJ8B86PlIalpG+JOaSe3byiDEIDSSEjmdE4NIDIRGh0oEja4DehOLC7f95ISgB5sQc4lBtNDgOxCk0FoCV5AkG7+C5DHePo6YRPcGJASoUcbpPP4wDhCtBudCjFQ+TG/wnLslxR+FJ0rD8EX5FVwD3WE6wEA8l9zkUcMsP75t1HcR05gP2zZqFaOlcv6FjO16t/W5eTzJaUP/yDiWNoRnoy4qKlmYfGd7BdfDIBtlGoOdUDI9nChKapBd4Kg31GcXQimGSHej4wi4Znq+E85WOBuPCytB7yaoJdAR456TDjuGamdHxJl2QsloMujWrGwmohOiZMJNpBmEwOeHRIpB6Is5xjg4owPgHq5SYpz6kWITdEQ/1uBy2CW5pNLeou0FGsseFp4r/08Ro6OkPRQ6PD5OPj7YwJppY7/vn7w/Py2/iiM2lX6TPknlcmBlJZ0nGexPnXSsV3aM8Ta8cAceFlrxQWlO15wY0UkRV+N3MmG2OoVXMsKq+f3eHplCP9E1Gzlsm2lbGq9qtPwddczIyvppPYUyfvrrJnqWXb6gFPnYJEYy3/aN6aAOcxfOvkZ89E3lKN2oqOck2vkrF/KvYiAKOf4AxXg///+8xP9l/kL7naqe18f2tqOn6CvvxvRiAnv88T+d5SsJIhMAAA==" /></Footer>{/_ END_ACCOUNTING_EXPENSE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.expenses.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListExpensesRequest`

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

**request:** `Merge.accounting.FieldMappingsRetrieveFieldMappingRequest`

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

<details><summary><code>client.accounting.fieldMapping.<a href="/src/api/resources/accounting/resources/fieldMapping/client/Client.ts">fieldMappingsDestroy</a>(fieldMappingId, { ...params }) -> Merge.FieldMappingInstanceResponse</code></summary>
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

**request:** `Merge.accounting.FieldMappingsDestroyFieldMappingRequest`

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

**request:** `Merge.accounting.RemoteFieldsRetrieveFieldMappingRequest`

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

Returns a list of `GeneralLedgerTransaction` objects.{/_ BEGIN_ACCOUNTING_GENERALLEDGERTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1XXW8aOxD9K5EfEcuWUBoF6aoiITclKkubkKpRFVmDPSyGXXvjDwhU/e9XXraBtAHCvXngqnlj7TNnPOOZ4+E7YWAxVnpGGgQYU05aIWNSJqnimJAGOUeJGpKPyGPUPQ3SALNCSVImkIkIUiQN0kEd40Hzwf6g+alNysS4LFPaIv9bYMLNB40D0iBh6tGBk2IgkIdDLUzI1AQ1xBg+mASD3IaUSSLkGHlBvolkAQyKMH759NvGkjLJwBg71MrFw0u8c2jWcY6lmiY+7KAPZnGyBFOUFpKAg4VwhSnQC6qn1nwMHBO0yFtgoYUW8wwWXofWZqYRhkNMskp+ggrHSYgyBG0FS9CE9drx4dFxPShYcu/vaZz8VS2N7vqqf1SiMUsouFKnx+6jXnsajeK30enb+2h+XY/m43k0Gr8p0RhKnV6n3u3d1LqtZrX7BIBevft6/OWkdXIRldj8rBaNbqZRj1U7PTbuz9u1i3M2vfjw+T6a3xx2Wte1qHdWvzhX1e7ppemcXqpOs1IhZSKkxViDD9OQxrfvqwtFzURor5yw+BjdTiHGlawsrgQyEWSunwhWMbUKpDBXEqamwlQapsgFhBFa49mouXOgsZLlRZwnTCj5kHPvt9lrfzl7XAjNCYgE+gmShtUOf6tc0vi2thE+ComVoshIeTPMFxJlTmuUbLYNzFSagXwGTFpgW10zjVxYCulzzsmxvwPWMC2yQhM2QjHNEjVD3Iq7Z0OQMVINdit4oDSKWNKdAvxptEug8WKT5pqgqX2khRsthcV0GybXW+qc4NuQmVYj3H7hGlNlkXqt2AFKM7DDZ+K3H9VqYGMhY1q8MgLNM0x+fq92yvJtohlqobzrZYOsvxqaCJk7zZTJrfmipIoQmEawyCnY5VqRsSeSshp38dtlfEngJEedzLyb1SOsmq2B2FmG5Naz3jmhkX8CDSla1F56bn+UnxLQz06w8YlSY3PQlT7Ml1HSJW2w0FJ6PTh8d3JU3VNN/T/p36uu7bWuvZxcbbRxUtw5rwcorR819Z+qYFcQ40Hbt29+7S8gXp6RFoz0aiFfk4mIzBHsqXz96SPhqyS+znD7M8PtKGBfUauXES7PFOz1f9d9UIt/35f720l7Uff/+eX3u79ONeub6fbHP7T+c6t5FAAA" /></Footer>{/_ END_ACCOUNTING_GENERALLEDGERTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.generalLedgerTransactions.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListGeneralLedgerTransactionsRequest`

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

Returns a `GeneralLedgerTransaction` object with the given `id`.{/_ BEGIN_ACCOUNTING_GENERALLEDGERTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1XXW8aOxD9K5EfEcuWUBoF6aoiITclKkubkKpRFVmDPSyGXXvjDwhU/e9XXraBtAHCvXngqnlj7TNnPOOZ4+E7YWAxVnpGGgQYU05aIWNSJqnimJAGOUeJGpKPyGPUPQ3SALNCSVImkIkIUiQN0kEd40Hzwf6g+alNysS4LFPaIv9bYMLNB40D0iBh6tGBk2IgkIdDLUzI1AQ1xBg+mASD3IaUSSLkGHlBvolkAQyKMH759NvGkjLJwBg71MrFw0u8c2jWcY6lmiY+7KAPZnGyBFOUFpKAg4VwhSnQC6qn1nwMHBO0yFtgoYUW8wwWXofWZqYRhkNMskp+ggrHSYgyBG0FS9CE9drx4dFxPShYcu/vaZz8VS2N7vqqf1SiMUsouFKnx+6jXnsajeK30enb+2h+XY/m43k0Gr8p0RhKnV6n3u3d1LqtZrX7BIBevft6/OWkdXIRldj8rBaNbqZRj1U7PTbuz9u1i3M2vfjw+T6a3xx2Wte1qHdWvzhX1e7ppemcXqpOs1IhZSKkxViDD9OQxrfvqwtFzURor5yw+BjdTiHGlawsrgQyEWSunwhWMbUKpDBXEqamwlQapsgFhBFa49mouXOgsZLlRZwnTCj5kHPvt9lrfzl7XAjNCYgE+gmShtUOf6tc0vi2thE+ComVoshIeTPMFxJlTmuUbLYNzFSagXwGTFpgW10zjVxYCulzzsmxvwPWMC2yQhM2QjHNEjVD3Iq7Z0OQMVINdit4oDSKWNKdAvxptEug8WKT5pqgqX2khRsthcV0GybXW+qc4NuQmVYj3H7hGlNlkXqt2AFKM7DDZ+K3H9VqYGMhY1q8MgLNM0x+fq92yvJtohlqobzrZYOsvxqaCJk7zZTJrfmipIoQmEawyCnY5VqRsSeSshp38dtlfEngJEedzLyb1SOsmq2B2FmG5Naz3jmhkX8CDSla1F56bn+UnxLQz06w8YlSY3PQlT7Ml1HSJW2w0FJ6PTh8d3JU3VNN/T/p36uu7bWuvZxcbbRxUtw5rwcorR819Z+qYFcQ40Hbt29+7S8gXp6RFoz0aiFfk4mIzBHsqXz96SPhqyS+znD7M8PtKGBfUauXES7PFOz1f9d9UIt/35f720l7Uff/+eX3u79ONeub6fbHP7T+c6t5FAAA" /></Footer>{/_ END_ACCOUNTING_GENERALLEDGERTRANSACTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveGeneralLedgerTransactionsRequest`

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

Returns a list of `IncomeStatement` objects.{/_ BEGIN_ACCOUNTING_INCOMESTATEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81U207jMBD9FeTHqkm2lC4i0mpVKJeibcqlrEAIWVNnmrh1bGM7LRTx76ukpbTcdlcCxGNmxmfOzDmTO8LAYaLMLQkJMKZy6bhMSJVkKkZBQtKWTGV46sBhhtKRKgHNI8iQhKSDJsG15uLZWvOoTarE5lor4zDe4yhie2BwQEISZEW1l0s+4BgHqeE2YGqMBhIMFk+8QfmGVIngcoTxHPwtkFmhN2f/5LNI24K1BmtdalSepCd4naN9DXMk1URgnKDXBztjJsrRQXgxOAiWkDwzg3opVswQo0CHcQsctNAhc1zJedfUOW3DIEhRaL9k4Mc4DlAGYBxnAm3QqG+tb241vDlK2f0nTcSPWmV43Vf9zQpNmKCQVzo9dhP12pNomGxEOxs30fSsEU1H02g4+lahCVQ6vU6j27uod1vNWveFAnr6/Xzr93Zr+zCqsOluPRpeTKIeq3V6bNSftuuH+2xyeHB8E00v1juts3rU220c7qtad+fEdnZOVKfp+6RKuHSYGCjGtCS8vFsOzD2zZ9Cm20qN7Gp9O4MEl/YyEwU093TeF5z5tu5DBlMlYWJ9prIgw5hD8IhHT69zMEh/qUT5Q5087J8ruVg+CcludNCMdnZbq55ojoEL6AskoTM5PjMxCS/JCRaRtsPM74MAyZDaFLFw11KKgU3pQKgJtUtHs1TAy4t6LSuLNa1ElInRrIY0GJSOcofZasJgphzSwimvJqgGl65mbd4vwexq2N3qJ1zGIPIixHJjULJbUiUoY6rRcBWTKkmMspZqowa8mEuio7Nx5x9KYyG3TB7Dq5Rf4GnK9gt+1oFxDx2vivR1zg3GR2AgQ4em0OrqvvqS+SJ0pzl3+D7Wi9DZAo3a0ni+lh/quf/1zXyVPP5nUVWmQT7TdI78jjIc55yNyptd60rB5Tvp8QjrzRShZ4P179ubtY9W5jP/Bn87/adyf9hpw+Kov9KFn6NR7+OmAsn7nMt+wz9fzh5f2xNX938Ayum6btIKAAA=" /></Footer>{/_ END_ACCOUNTING_INCOMESTATEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.incomeStatements.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListIncomeStatementsRequest`

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

Returns an `IncomeStatement` object with the given `id`.{/_ BEGIN_ACCOUNTING_INCOMESTATEMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE81U207jMBD9FeTHqkm2lC4i0mpVKJeibcqlrEAIWVNnmrh1bGM7LRTx76ukpbTcdlcCxGNmxmfOzDmTO8LAYaLMLQkJMKZy6bhMSJVkKkZBQtKWTGV46sBhhtKRKgHNI8iQhKSDJsG15uLZWvOoTarE5lor4zDe4yhie2BwQEISZEW1l0s+4BgHqeE2YGqMBhIMFk+8QfmGVIngcoTxHPwtkFmhN2f/5LNI24K1BmtdalSepCd4naN9DXMk1URgnKDXBztjJsrRQXgxOAiWkDwzg3opVswQo0CHcQsctNAhc1zJedfUOW3DIEhRaL9k4Mc4DlAGYBxnAm3QqG+tb241vDlK2f0nTcSPWmV43Vf9zQpNmKCQVzo9dhP12pNomGxEOxs30fSsEU1H02g4+lahCVQ6vU6j27uod1vNWveFAnr6/Xzr93Zr+zCqsOluPRpeTKIeq3V6bNSftuuH+2xyeHB8E00v1juts3rU220c7qtad+fEdnZOVKfp+6RKuHSYGCjGtCS8vFsOzD2zZ9Cm20qN7Gp9O4MEl/YyEwU093TeF5z5tu5DBlMlYWJ9prIgw5hD8IhHT69zMEh/qUT5Q5087J8ruVg+CcludNCMdnZbq55ojoEL6AskoTM5PjMxCS/JCRaRtsPM74MAyZDaFLFw11KKgU3pQKgJtUtHs1TAy4t6LSuLNa1ElInRrIY0GJSOcofZasJgphzSwimvJqgGl65mbd4vwexq2N3qJ1zGIPIixHJjULJbUiUoY6rRcBWTKkmMspZqowa8mEuio7Nx5x9KYyG3TB7Dq5Rf4GnK9gt+1oFxDx2vivR1zg3GR2AgQ4em0OrqvvqS+SJ0pzl3+D7Wi9DZAo3a0ni+lh/quf/1zXyVPP5nUVWmQT7TdI78jjIc55yNyptd60rB5Tvp8QjrzRShZ4P179ubtY9W5jP/Bn87/adyf9hpw+Kov9KFn6NR7+OmAsn7nMt+wz9fzh5f2xNX938Ayum6btIKAAA=" /></Footer>{/_ END_ACCOUNTING_INCOMESTATEMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveIncomeStatementsRequest`

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

Returns a list of `Invoice` objects.{/_ BEGIN_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListInvoicesRequest`

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
{/_ BEGIN_ACCOUNTING_INVOICE_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE9WXbXPaOBDHvwqjlwzYl1DIhJmbG57SkDmcNiGdpp2MZpEXo2BLjh4I0Ol3v7ExwUlpmiMm13tlS17/dyX9tFp9IwwMBlItSJMAY9IKw0VAKiSSPoakSfpiJjlDUiEQcw8iJE0yQBVgqfVgXmp96JMK0TaOpTLon3AMfX2qcEyaxI0S66oVfMzRdyeKa5fJGSoI0H34pTpO/yEVEnIxRT8Tf05kZVjNon7STD5rQyokBq3NREkbTC7wzqL+meZUyPsQ/QCrI9CryEKMUBgIqz4YcHNKVbWS2taXjMHHEA36XTDQRYPMcCkyrxNjYt103QmGsZNG4Pg4c1G4oAxnIWq3Xjs+PDquVzOV1PtfNAj/PCjf3o3k6KhMAxZSsOXBkM29Yf/euw3eeZ13c295VfeW06V3O/2jTAMoD4aD+vnwunbebR2cbzGgl43Px5/a3faZV2bLXs27vb73huxgMGTT0bJfO3vP7s9OP8695fXhoHtV84a9+tl7eXDeudCDzoUctByHVAgXBgMFyTA1aX79lu/ImOmECKrUlnKqH//QjyDA3MSsVgViXo3tKOTM0TUHIlhKAffaYTJyI/Q5uKkgTQXp5Z0FhfRvGUjnNg7WK8CleJh+0iQ977TldXrdx1S0ZsBDGIVImkZZ/AFj0vxKRhCCSDcBs0qhYIvEhUXqg0l6udabRsgFUm4wSgYqbDRCRSpEYSQNUu4nG8WAsTrdMSNqpIGQVEj6pBAl9D40DcxzXYsYyU0idWe5Qv8DKIjQoEpjzE0pjZMvT+Y563RQGG4WNB/PJmIn617txkctykLQejOSn5vcfK9sI+BEoZ4UCMBG7y3XX0YxiEX6JgwwswMTEUYyj0YM3KdSrG3zK5O92zj55lMweXq2EuNzzXZFaDO4tyFiwJmSWo5NqbsQEHGmS7VGvdS2mgvUutRBYVS6OQrA5cEZXTujtUadrp3RzBntyFAqejzvnTQaR04siqepCIY28FjFJqCRSuUny7hnfhSwKRcBzcoGjvoFVK0HWTBVa8fb4fLQXFq+msbX0+Oh0Yka1WmqeYYLrzXsf+q9TY7BOZuACJCqjBfBQqv5DKkcJwv3kjSUFnrU2pSXXE5aJLUPNaii11H2yzNuH8Ttlsdy1k8ifSWLHy1n0/SoKp2LxEsxUG5kqyss6dX4sNE+Otgznr8JlP+HRPfWWe8SAiz1kzjSQAqALFGkmeK60JrNuKeP4HfNgrtWXsUlvafEvZCb7M3ZoSrfW+76jEoWQ1KiVH2T83P/CWrrve515+C/KtS3ZprnlvGLnMgir9+J3o+Xr32Uy/9VYfTKq3sxF7H9F8833/8BQL5vdwUUAAA=" /></Footer>{/_ END_ACCOUNTING_INVOICE_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns an `Invoice` object with the given `id`.{/_ BEGIN_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveInvoicesRequest`

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

Updates an `Invoice` object with the given `id`.{/_ BEGIN_ACCOUNTING_INVOICE_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE82Wb2/aOhTGv0rll4gklzJWNdLVFS1spbqYraXTqqmyTpzTYEjs1H+AMvW7XznQAhud1rsi9V2Oc/L4+Dw/2/lOOFjMlL4nMQHOlZNWyIzUSaFSzElMenKqBEdSJ1AKCgWSmPRRZ3jQfko/aH/qkToxriyVtph+EJin5kzjLYlJVPjswElxKzCNRlqYiKspasgwevokuK2+IXWSCznBdCX+K5FlYrCq+ofQvzaW1EkJxtiRVi4bXeCdQ/Oc5kSqWY5phkECZllZjgVKC3mQgoVoQynQS6ldY34NKeZoMe2AhQ5a5FYouZp1ZG1p4igaYV6GVQVhitMIZQTaCp6jiVrN48Oj41awUqlm/4dl+d+N2vguUclRjWU8Z+Bq/SGf02FvRsfZO3r6bk4XVy26mCzoePJXjWVQ6w/7rcHwujnotBuDHQns8v3X4y8nnZNzWuOLbpOOr2d0yBv9IZ8ki17z/COfnZ99ntPF9WG/c9Wkw27r/KNqDE4vTP/0QvXbYUjqREiLmQa/TEPib983B1bMfNBoRidKTcx2fq+ADDf6sjQFShGULskFD00zhAIWSsLMhFwVUYGpgGitxy7vHGhk/6pMheMye+y/UPKp+SQmXXrWpqfdzjYT7SmIHJIcSWy1w58gJvE3kkAOstoCXBUlyPvqSVrgHjDutEbJ/WDqkKVgfaYwZh3kQiITFgu/9gILRepEuiJBXRUjUqbkY67GQllkIl0/u9K/Sxn46YwF67yOVRZyBoWn/SlMheGPA/clkhsvcueExvQTaCjQoq7WtC4pXM2y3IBbEeM5GLMu5PmUm4f6LtMp2ksnlg35c8spWuPVmKkMD0v5nNe0Pex96b7c6fUJyErUQnkT/o/7OOcjkBky/VIaftt+4xJWef47KGjgE7+o1WEv0LwRQD47wSfVLj4YSD/l65Cylg2WrLCr28P3J0eNPTCzyccrU1Hdwcy5ioaXI7ITCwvzjaE3C8YlZHjQ8/2sGvoKTHhFtlJ8vDKmU0HNEeyZiv2fGrvvEP/fsB2xEuzoTxB6A2R8Ra1ehwivFOztLtnjubCH22L7WPiVzTcPNw//AZ26up03DAAA" /></Footer>{/_ END_ACCOUNTING_INVOICE_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abVPiOhT+K0w+OryssurIzJ07CLriXaqruHf37uxkQnoogTapSYrgzv73O2kLVCyobOXF8RM0OT15Oc855zlJfyFKNDhCjlAFEUpFwDXjDsojT9jgogpq8IFgFFAeEZ9ZxANUQU2QDuSqE/Fc9bKB8kgFvi+kBvuUgWurMwkdVEElz0gXAs46DOxSVzJVomIAkjhQmrxS6ITvoDxyGe+DHStfpCQSLMSznnk03UqjPPKJUrorReB0r+A2ADVPZ5+LOxdsBwptoqKZueAB18Qt2ESTUkJTQUaq0trMGmxwQYNdJ5rUQQPVTPB41K7WvqqUSl1w/WI4g6INgxLwEpGaURdUab98tHd4tF+ItYSj/40d96/dnd5tW7QPd7BDXUyCnWaLDq1W487qOR+t2sehdX+zb933761e/8MOdshOs9Xcv2h9L1/Uq7sXKQL4+uDb0dfj+vG5tUPvT8pW7/ud1aK7zRbtt+8b5fNP9O787MvQuv++16zflK3Wyf75J7F7UbtSzdqVaFaLRZRHjGtwJDHLVKjy41eyIcZMzQUic8dC9NXDFxoecSCxMZFViM8KftB2GS2qcpF45F5wcqeKVHglD2xGSqFCHCrE17cBkYA/C0cUe74ztgATfLL9qIJOrLOqVTupP0RFdUCYS9ouoIqWATyCMar8GDvBZ8ahocEr2qCoZH6oN/+ol01cZrbnNiBcMz1K6ZLgCQ3Y2HpxL/aJ7qaIBJzdBoCZDVwbRMt0GY19GU2uTVzCw380kBI4NdOyg3AU08qUmj64jANmGjxjPR547VD/w0mnTDJuYrYJD5roQIVxoo210MRFeRT+YuIZn508ajJMNI18QD+NqtuASbAviSQeaJDGMj9/59PAdioBqg6E72cAtUuX6I6QXkcCEKMWqwhw/Ss9qn/aK/r89TEXB7YUq24iGpOGn+2bsflzQSq4JlQvAVcPPJFErU+YjQUfy74IxPH/wDcv25joJLBnwbwcclU3wyg51bfyIJkw0ztiM0WsT0aGmKhXBW/4aDNFsw3NTUalUKKjc/URJx6jKlc+2M8dB4pxUCpXA65lmBoyQP9kMDweDJcP9vF4MBwPhmvCFRIfDU9ODw4OtzSaG+xsj8toSWifcQfH9QcD9ZRjXUaon26h77vMwHg8xqzAdK9me2IHCouaSEnCpZZ32+V4UeZembq1S/mq4DBqM2lnS6Mmat89bRuT00YkoyXQbIG+Dli0uD8HswVaGW1xKbAAyla11fh68nIg1yTYTFtCQ9X33ZEx6OOYt0goNlCaCA3bMBdzJebDf75DTTGVGReEIe0S7gCW0WL+2EvDcy0cBKmu5EvRg9QFrM25yXDe0jcgwz6E0fPzb08EkhMXG/o1WpifvwK3hYwAusANFovFjpAuNJ1lev8gbMXRUg1jmBx7Yh8kE3aCRST2Q6WTi3HTA61qJjJ7PuGjZ8ToWedgnLqBYgPAomM4wQtrjHCSWIM0fuMHknaJAiykbcJqFtGduKCm+p5/HrQqvvMlYLQfFsu5C242K5tUMVVbiM+Nbjp7B8eHu+9JY2HSyJifbVvkX394n8HEe/TPPNK/rfi+EUXrNXEgcZzkisBOXFVmE9HNGPi4Vh2fqf4z+DYoX/dWUs++V60v8Zinz2pWUc7+KcNZ1g0aZrdoRrdgIehjjWPgDwbMUofkDROZtN6HwHhCYgyWBWKpDrKIMY0LhFUU4J7vihGkRZRNqc23qgDPmoQ955B7tie53vVTrIfme1JmbMSFgguW9sqMbk21e1oOWwXVW0Nm+5cMIHfKOOGUZXVROL6aMLrxWcce7n3Q77cTz42f674e3244C9m3yShjHEdKVwLh+XRko0D6GsXI0sH+daD9Oh/TfQMpskGn0VR48/dlG1gxbFEu2d7LsFc6Ld2k09ANoeoJTp5KJ0J5s9HmhVF8kbM2Gr55hDuPop2NNmq6SS9MDP+Jrsjyi36j7/Gnqutl4fPJzVuJqS+gPqv6Am8ZivX2vHS+N/78/T9nq8B0uDUAAA==" /></Footer>{/_ END_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LineItemsRemoteFieldClassesListInvoicesRequest`

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

<details><summary><code>client.accounting.invoices.<a href="/src/api/resources/accounting/resources/invoices/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Invoice` PATCHs.{/_ BEGIN_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.MetaPatchRetrieveInvoicesRequest`

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

Returns metadata for `Invoice` POSTs.{/_ BEGIN_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1abVPiOhT+K0w+OryssurIzJ07CLriXaqruHf37uxkQnoogTapSYrgzv73O2kLVCyobOXF8RM0OT15Oc855zlJfyFKNDhCjlAFEUpFwDXjDsojT9jgogpq8IFgFFAeEZ9ZxANUQU2QDuSqE/Fc9bKB8kgFvi+kBvuUgWurMwkdVEElz0gXAs46DOxSVzJVomIAkjhQmrxS6ITvoDxyGe+DHStfpCQSLMSznnk03UqjPPKJUrorReB0r+A2ADVPZ5+LOxdsBwptoqKZueAB18Qt2ESTUkJTQUaq0trMGmxwQYNdJ5rUQQPVTPB41K7WvqqUSl1w/WI4g6INgxLwEpGaURdUab98tHd4tF+ItYSj/40d96/dnd5tW7QPd7BDXUyCnWaLDq1W487qOR+t2sehdX+zb933761e/8MOdshOs9Xcv2h9L1/Uq7sXKQL4+uDb0dfj+vG5tUPvT8pW7/ud1aK7zRbtt+8b5fNP9O787MvQuv++16zflK3Wyf75J7F7UbtSzdqVaFaLRZRHjGtwJDHLVKjy41eyIcZMzQUic8dC9NXDFxoecSCxMZFViM8KftB2GS2qcpF45F5wcqeKVHglD2xGSqFCHCrE17cBkYA/C0cUe74ztgATfLL9qIJOrLOqVTupP0RFdUCYS9ouoIqWATyCMar8GDvBZ8ahocEr2qCoZH6oN/+ol01cZrbnNiBcMz1K6ZLgCQ3Y2HpxL/aJ7qaIBJzdBoCZDVwbRMt0GY19GU2uTVzCw380kBI4NdOyg3AU08qUmj64jANmGjxjPR547VD/w0mnTDJuYrYJD5roQIVxoo210MRFeRT+YuIZn508ajJMNI18QD+NqtuASbAviSQeaJDGMj9/59PAdioBqg6E72cAtUuX6I6QXkcCEKMWqwhw/Ss9qn/aK/r89TEXB7YUq24iGpOGn+2bsflzQSq4JlQvAVcPPJFErU+YjQUfy74IxPH/wDcv25joJLBnwbwcclU3wyg51bfyIJkw0ztiM0WsT0aGmKhXBW/4aDNFsw3NTUalUKKjc/URJx6jKlc+2M8dB4pxUCpXA65lmBoyQP9kMDweDJcP9vF4MBwPhmvCFRIfDU9ODw4OtzSaG+xsj8toSWifcQfH9QcD9ZRjXUaon26h77vMwHg8xqzAdK9me2IHCouaSEnCpZZ32+V4UeZembq1S/mq4DBqM2lnS6Mmat89bRuT00YkoyXQbIG+Dli0uD8HswVaGW1xKbAAyla11fh68nIg1yTYTFtCQ9X33ZEx6OOYt0goNlCaCA3bMBdzJebDf75DTTGVGReEIe0S7gCW0WL+2EvDcy0cBKmu5EvRg9QFrM25yXDe0jcgwz6E0fPzb08EkhMXG/o1WpifvwK3hYwAusANFovFjpAuNJ1lev8gbMXRUg1jmBx7Yh8kE3aCRST2Q6WTi3HTA61qJjJ7PuGjZ8ToWedgnLqBYgPAomM4wQtrjHCSWIM0fuMHknaJAiykbcJqFtGduKCm+p5/HrQqvvMlYLQfFsu5C242K5tUMVVbiM+Nbjp7B8eHu+9JY2HSyJifbVvkX394n8HEe/TPPNK/rfi+EUXrNXEgcZzkisBOXFVmE9HNGPi4Vh2fqf4z+DYoX/dWUs++V60v8Zinz2pWUc7+KcNZ1g0aZrdoRrdgIehjjWPgDwbMUofkDROZtN6HwHhCYgyWBWKpDrKIMY0LhFUU4J7vihGkRZRNqc23qgDPmoQ955B7tie53vVTrIfme1JmbMSFgguW9sqMbk21e1oOWwXVW0Nm+5cMIHfKOOGUZXVROL6aMLrxWcce7n3Q77cTz42f674e3244C9m3yShjHEdKVwLh+XRko0D6GsXI0sH+daD9Oh/TfQMpskGn0VR48/dlG1gxbFEu2d7LsFc6Ld2k09ANoeoJTp5KJ0J5s9HmhVF8kbM2Gr55hDuPop2NNmq6SS9MDP+Jrsjyi36j7/Gnqutl4fPJzVuJqS+gPqv6Am8ZivX2vHS+N/78/T9nq8B0uDUAAA==" /></Footer>{/_ END_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="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" /></Footer>{/_ END_ACCOUNTING_INVOICE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.invoices.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListInvoicesRequest`

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
await client.accounting.issues.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListIssuesRequest`

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

<details><summary><code>client.accounting.issues.<a href="/src/api/resources/accounting/resources/issues/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Issue</code></summary>
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

**request:** `Merge.accounting.RetrieveIssuesRequest`

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

## Accounting ItemFulfillments

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_ITEMFULFILLMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE4VU70/bMBD9VyZ/rNJkpXSISNNU2gJFi8ugTEMIRVf7mrp17NQ/KBTxv09JIyisZd/iu+d3713u/EwYOMy0eSIxAca0V06ojAQk1xwlicnQYX7q5VRImaNyJCBQCAo5kpgkaDL80n299qV7OSQBsb4otHHITwVKbs8NTklMorxEN70SU4E8mhlhI6Yf0ECG0euV5rS6QwIihVogr8k/I9kAm7X6D8cybUvVBVjrZkb7bHaFS492H+dC6ZVEnmFzAnajTGJpHWSTg4Noi6lpNlS7YqUHjhId8j446KND5oRWddWZc4WNo2iGsggrBSHHhwhVBMYJJtFGnfbxwdFxp1mzVNV/pJn83mrMlxM9OWqkGZMp+EYyZo90PFzReXZIe4ePdH3ToevFms4XXxtpBo1knHRG49v2qN9tjXYA0utvf45/n/RPLmiDrQdtOr9d0TFrJWO2mKyH7Ysztro4//VI17cHSf+mTceDzsWZbo16VzbpXemkG4YkIEI5zAyUNi2J7563A/XMUHTXXjh8jx7mkOFWVza/BArRLPxEChbadgg5rLWClQ2ZzqMcuYCIorMlW2qXHgyGRTW7VcOEVq89JzEZ0PMu7Q3670eh+wBCwkQiiZ3x+M/skvju4wb8FApD4TAnwd5UOn23Mbtg1X6l3gu+B7D0oJxwT3vSBnPtMC1n4v+ItAA3+xy2V4cFiTbVhqNJpVC4B+YMsIVQWVo/KALtHqRXYunLgqhcuXKGBITpvABVemXeOp1Xwa0mli5w8yhUvDnmmgSk1s4MgkOegnuL1Y3Z0YRtw/W3L/gbwZZhcl9Cll4Y5JdgIEeHphyK+5f7l7/l6o8gPAUAAA==" /></Footer>{/_ END_ACCOUNTING_ITEMFULFILLMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.itemFulfillments.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LinesRemoteFieldClassesListItemFulfillmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.itemFulfillments.<a href="/src/api/resources/accounting/resources/itemFulfillments/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_ITEMFULFILLMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE4VU70/bMBD9VyZ/rNJkpXSISNNU2gJFi8ugTEMIRVf7mrp17NQ/KBTxv09JIyisZd/iu+d3713u/EwYOMy0eSIxAca0V06ojAQk1xwlicnQYX7q5VRImaNyJCBQCAo5kpgkaDL80n299qV7OSQBsb4otHHITwVKbs8NTklMorxEN70SU4E8mhlhI6Yf0ECG0euV5rS6QwIihVogr8k/I9kAm7X6D8cybUvVBVjrZkb7bHaFS492H+dC6ZVEnmFzAnajTGJpHWSTg4Noi6lpNlS7YqUHjhId8j446KND5oRWddWZc4WNo2iGsggrBSHHhwhVBMYJJtFGnfbxwdFxp1mzVNV/pJn83mrMlxM9OWqkGZMp+EYyZo90PFzReXZIe4ePdH3ToevFms4XXxtpBo1knHRG49v2qN9tjXYA0utvf45/n/RPLmiDrQdtOr9d0TFrJWO2mKyH7Ysztro4//VI17cHSf+mTceDzsWZbo16VzbpXemkG4YkIEI5zAyUNi2J7563A/XMUHTXXjh8jx7mkOFWVza/BArRLPxEChbadgg5rLWClQ2ZzqMcuYCIorMlW2qXHgyGRTW7VcOEVq89JzEZ0PMu7Q3670eh+wBCwkQiiZ3x+M/skvju4wb8FApD4TAnwd5UOn23Mbtg1X6l3gu+B7D0oJxwT3vSBnPtMC1n4v+ItAA3+xy2V4cFiTbVhqNJpVC4B+YMsIVQWVo/KALtHqRXYunLgqhcuXKGBITpvABVemXeOp1Xwa0mli5w8yhUvDnmmgSk1s4MgkOegnuL1Y3Z0YRtw/W3L/gbwZZhcl9Cll4Y5JdgIEeHphyK+5f7l7/l6o8gPAUAAA==" /></Footer>{/_ END_ACCOUNTING_ITEMFULFILLMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.itemFulfillments.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListItemFulfillmentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ItemFulfillments.RequestOptions`

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

Returns a list of `Item` objects.{/_ BEGIN_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Ya3PaOBT9K4w+MoCbUMiEmc4OrzRkF5MmpE3ayWgu8sUIZMmRZAJ0+t93DOaVZ5OYdrufwPL1udI5R1fX/k4YWPSVnpIKAcZUJC2XPsmRQHkoSIW0LAYkRyDkLgRIKqSN2sdMdRWbqZ62SI6YKAyVtugdcRSeOdbYJxXiBHF0PpK8z9FzBpobh6kxavDRWT2S78+fITkiuByhl4A/BbIIzCdTvnMZ3zaW5EgIxtiBVpE/OMObCM1jmCOpbgV6PuZ7YBYzExigtCDyHlhwNpDyegH10Fi8Bg8FWvQaYKGBFpnlSiZZB9aGpuI4AxRhYT6DgodjB6UD2nIm0Dil4uH+wWEpn6DMs/9FffFhLzu86aneQZb6TFCIsu0um7jd1q079N+79fcTd3ZRcmejmTscvctSH7LtbrvU6V4VO43qXueBAHpevjz8XGvUTtwsmzWL7vDq1u2yvXaXjXqzVvHkI7s9Of40cWdX++3GRdHtNksnH9Vep35m2vUz1a4WCiRHuLToa4iXaUjl2/fNgcQzRxrNoKbUyGzHtwLwcYOXhSgQ8nwY9QRnBVMsQAAzJeHWFJgKnAA9Ds4aj57fRKCR/qN8VRiG/pJ/ruSKfFIhTfe46tabjW1PVMfABfQEkorVEd4zMal8IzJeQY5oDJRFGquxfUVDsIP1EPfW/6PQA4sehdiKxoKNDLmO795EXKN3ChoCtKjjPNc/cg8R1+ZMK6P6NtOYSgg4M5liuZSpRYZLNCZTR2k1iHRYXSWjy2S0WC7RZTKaJKN1JZSmh5PmUbl8UAhl+qQzjR63VMYsCi6RcotB7B0fJcZTsBqkgXmi7QAux4qzO08lGoaRZgMwSJX2UG+HvFnfSHJLQ80ZpqDxEZcgGWZAeplOiMvNlYrKpwJsX+ngAbWTtJSuc+5E3pfvqZdSqiROe1x7KVO2hN0JK09Z9zfa00V7HnGL6VDpojUxGjXzuv0EkW612/rcfEXtUEEIckpyj1cRnIQozWJws6rMOwB9r7i8vvDEv7QfiT4XIu4mVnB3K1LSuKRy0IBAswG4uF6XPLM+jHLETsMXG+JTxNlofvhmOjJGTMcZa9j8whv0or9frh3s7cIjv90ZjxvgqVNqdW+xk3fhli1nvKVunIOPG42KUJG38daQjmfiHLRWry67wL/Hl+Pi+fCXl+enZNy9VG/UqCUtMGZTVCRBXKoyHnPXHMD/vNa/bkf/hzfwFxhj0onytF4xlp1UjE2P+95k/53985qpFHbeF6VHHkxTZnUB+qsIfeGSL1GrdNYbI+WfbSB38Pp5t5j8UUf7mwvCVzVQmRS/4sR49z/i7ETQ58+Jn5LyVdo8++Xn+se/xwfB7IcVAAA=" /></Footer>{/_ END_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.items.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListItemsRequest`

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

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">create</a>({ ...params }) -> Merge.ItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates an `Item` object with the given values.{/_ BEGIN_ACCOUNTING_ITEM_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE82S207bQBCGXyXay8iHhpBGWKqqnAqJZIeDQSAUWZP1xNlkvevsrhMI4t0rJy6YFqhUgdQ7e3bmm5l//gdCwWAi1T3xCFAqc2GYSIhFUhkjJx4ZGkyJRSBjAaRIPOKjSrDWecqtdU6HxCI6zzKpDMY/GPJYnyicEY+4aZFt54LNGMbuXDHtUrlGBQm6TyX2bFdDLMKZWGJcwt+D7BPtcuTffotnbYhFMtDazJXMk/k5rnLUbzGXQm44xgnaU9D7yTimKAxwOwYDboVkqz3qtVixQ4wcDcZ9MNBHg9QwKcquc2My7bnuHHnm7CZwYly7KFxQhlGO2m01jw7aRy27pOy6f48S/q1RX6ymctquRwnlEeR1P6R3QTjcBIvkMOgd3gXby1awXW6DxfJLPUqg7od+axzeNMf9TmP8SkJ08fX66Krb746COt0OmsHiZhOEtOGHdDndDpujY7oZnZzdBdubA79/2QzCQWt0LBvj3rn2e+fS7zgOsQgTBhMFxZqaeLcP1UDpmbOc0WVXyqWujQVnAl+WDVNIsCLP/jaQMTvLp5xRRzcdSGErBWy0Q2XqphgzcJ+xtl7loDC6nB187bYbTrbz8E5DJsXTGYhHgk44vBq89EZnDYzDlCPxjMrxDzMT75aIYhOLZLmic9AYlVarhjLFaJGjMJUGIxY/f+dZDAbjCIoCDRx1BaANmLxwjrnPivpcMFPCJgVhlTOF8SkoSNGgeh5n8mi9pvYFJFgbCgOUmo8RuiBGJTG62Eu9XrNAt+ETpKYyzUDcE+uX6H8V9B8ErKgSZcWLfilVGXSYwTSqDlDOtGv1xgGuUcmPEb4gld5+R+hBcNIJeoP+f+XqT7hFgazcYvI4efwJZxwmicEGAAA=" /></Footer>{/_ END_ACCOUNTING_ITEM_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.ItemEndpointRequest`

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

Returns an `Item` object with the given `id`.{/_ BEGIN_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Ya3PaOBT9K4w+MoCbUMiEmc4OrzRkF5MmpE3ayWgu8sUIZMmRZAJ0+t93DOaVZ5OYdrufwPL1udI5R1fX/k4YWPSVnpIKAcZUJC2XPsmRQHkoSIW0LAYkRyDkLgRIKqSN2sdMdRWbqZ62SI6YKAyVtugdcRSeOdbYJxXiBHF0PpK8z9FzBpobh6kxavDRWT2S78+fITkiuByhl4A/BbIIzCdTvnMZ3zaW5EgIxtiBVpE/OMObCM1jmCOpbgV6PuZ7YBYzExigtCDyHlhwNpDyegH10Fi8Bg8FWvQaYKGBFpnlSiZZB9aGpuI4AxRhYT6DgodjB6UD2nIm0Dil4uH+wWEpn6DMs/9FffFhLzu86aneQZb6TFCIsu0um7jd1q079N+79fcTd3ZRcmejmTscvctSH7LtbrvU6V4VO43qXueBAHpevjz8XGvUTtwsmzWL7vDq1u2yvXaXjXqzVvHkI7s9Of40cWdX++3GRdHtNksnH9Vep35m2vUz1a4WCiRHuLToa4iXaUjl2/fNgcQzRxrNoKbUyGzHtwLwcYOXhSgQ8nwY9QRnBVMsQAAzJeHWFJgKnAA9Ds4aj57fRKCR/qN8VRiG/pJ/ruSKfFIhTfe46tabjW1PVMfABfQEkorVEd4zMal8IzJeQY5oDJRFGquxfUVDsIP1EPfW/6PQA4sehdiKxoKNDLmO795EXKN3ChoCtKjjPNc/cg8R1+ZMK6P6NtOYSgg4M5liuZSpRYZLNCZTR2k1iHRYXSWjy2S0WC7RZTKaJKN1JZSmh5PmUbl8UAhl+qQzjR63VMYsCi6RcotB7B0fJcZTsBqkgXmi7QAux4qzO08lGoaRZgMwSJX2UG+HvFnfSHJLQ80ZpqDxEZcgGWZAeplOiMvNlYrKpwJsX+ngAbWTtJSuc+5E3pfvqZdSqiROe1x7KVO2hN0JK09Z9zfa00V7HnGL6VDpojUxGjXzuv0EkW612/rcfEXtUEEIckpyj1cRnIQozWJws6rMOwB9r7i8vvDEv7QfiT4XIu4mVnB3K1LSuKRy0IBAswG4uF6XPLM+jHLETsMXG+JTxNlofvhmOjJGTMcZa9j8whv0or9frh3s7cIjv90ZjxvgqVNqdW+xk3fhli1nvKVunIOPG42KUJG38daQjmfiHLRWry67wL/Hl+Pi+fCXl+enZNy9VG/UqCUtMGZTVCRBXKoyHnPXHMD/vNa/bkf/hzfwFxhj0onytF4xlp1UjE2P+95k/53985qpFHbeF6VHHkxTZnUB+qsIfeGSL1GrdNYbI+WfbSB38Pp5t5j8UUf7mwvCVzVQmRS/4sR49z/i7ETQ58+Jn5LyVdo8++Xn+se/xwfB7IcVAAA=" /></Footer>{/_ END_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveItemsRequest`

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

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.ItemResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an `Item` object with the given `id`.{/_ BEGIN_ACCOUNTING_ITEM_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE82SW0/bQBCF/wrax8iXhhAQlqoqt0Ii2QFqEAgha7I7cTZZ7zp7SSCI/145sSC0FKlSH/pmz575dubseSYULOZKP5GIAKXKSctlTjxSKIaCRGRosSAegZInUCCJSIw6x4POq/agczEkHjGuLJW2yL5zFMyca5ySiIRFpfad5FOOLJxpbkKqVqghx/C1xZ9ue4hHBJcLZDX8M8hO6Ncj//JbHRtLPFKCMXamlctnV7h0aP7EXEi1Fshy9CdgdpMJLFBaED4DC+Eeydc71Ee1ageGAi2yPljoo0VquZL1rTNrSxOF4QxFGWwnCBiuQpQhaMupQBO2W6eHJ6dtv6Zsb/+W5eJrszFfTtTkpJHlVGTgGnFKH5N0uE7m+VHSO3pMNtftZLPYJPPFl0aWQyNO4/Y4vWuN+53m+ANB9uP49vSm2++OkgbdDFrJ/G6dpLQZp3Qx2QxbozO6Hp1fPiabu8O4f91K0kF7dKaa496ViXtXKu4EAfEIlxZzDdWahkT3z/uFOjOXjtNFV6mFORhLwSW+bxsWkOOePbu3gZL7pZsITgPTCqCAjZKwNgFVRVgg4xC+YX2zdKAxu54eHndPmkG5zfDWQ67k6zOQiCSddHgzeJ+Nzgq4gIlAElnt8Lcwk+ieyGoTj5RO0xkYzOqo7ZdKzWml0Vgoixlnb9+uZGCRZVA1GBBo9gDGgnVVcuxTWfU7yW0Ne6gIS8c1sgvQUKBFvR2HM/Lw4n3k9S1q9W/srUi1sZ8YOkjOO0lv0P+vLP1bJx9efgIDcmeHCgUAAA==" /></Footer>{/_ END_ACCOUNTING_ITEM_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.PatchedItemEndpointRequest`

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

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Item` PATCHs.{/_ BEGIN_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Ya3PaOBT9K4w+MoCbUMiEmc4OrzRkF5MmpE3ayWgu8sUIZMmRZAJ0+t93DOaVZ5OYdrufwPL1udI5R1fX/k4YWPSVnpIKAcZUJC2XPsmRQHkoSIW0LAYkRyDkLgRIKqSN2sdMdRWbqZ62SI6YKAyVtugdcRSeOdbYJxXiBHF0PpK8z9FzBpobh6kxavDRWT2S78+fITkiuByhl4A/BbIIzCdTvnMZ3zaW5EgIxtiBVpE/OMObCM1jmCOpbgV6PuZ7YBYzExigtCDyHlhwNpDyegH10Fi8Bg8FWvQaYKGBFpnlSiZZB9aGpuI4AxRhYT6DgodjB6UD2nIm0Dil4uH+wWEpn6DMs/9FffFhLzu86aneQZb6TFCIsu0um7jd1q079N+79fcTd3ZRcmejmTscvctSH7LtbrvU6V4VO43qXueBAHpevjz8XGvUTtwsmzWL7vDq1u2yvXaXjXqzVvHkI7s9Of40cWdX++3GRdHtNksnH9Vep35m2vUz1a4WCiRHuLToa4iXaUjl2/fNgcQzRxrNoKbUyGzHtwLwcYOXhSgQ8nwY9QRnBVMsQAAzJeHWFJgKnAA9Ds4aj57fRKCR/qN8VRiG/pJ/ruSKfFIhTfe46tabjW1PVMfABfQEkorVEd4zMal8IzJeQY5oDJRFGquxfUVDsIP1EPfW/6PQA4sehdiKxoKNDLmO795EXKN3ChoCtKjjPNc/cg8R1+ZMK6P6NtOYSgg4M5liuZSpRYZLNCZTR2k1iHRYXSWjy2S0WC7RZTKaJKN1JZSmh5PmUbl8UAhl+qQzjR63VMYsCi6RcotB7B0fJcZTsBqkgXmi7QAux4qzO08lGoaRZgMwSJX2UG+HvFnfSHJLQ80ZpqDxEZcgGWZAeplOiMvNlYrKpwJsX+ngAbWTtJSuc+5E3pfvqZdSqiROe1x7KVO2hN0JK09Z9zfa00V7HnGL6VDpojUxGjXzuv0EkW612/rcfEXtUEEIckpyj1cRnIQozWJws6rMOwB9r7i8vvDEv7QfiT4XIu4mVnB3K1LSuKRy0IBAswG4uF6XPLM+jHLETsMXG+JTxNlofvhmOjJGTMcZa9j8whv0or9frh3s7cIjv90ZjxvgqVNqdW+xk3fhli1nvKVunIOPG42KUJG38daQjmfiHLRWry67wL/Hl+Pi+fCXl+enZNy9VG/UqCUtMGZTVCRBXKoyHnPXHMD/vNa/bkf/hzfwFxhj0onytF4xlp1UjE2P+95k/53985qpFHbeF6VHHkxTZnUB+qsIfeGSL1GrdNYbI+WfbSB38Pp5t5j8UUf7mwvCVzVQmRS/4sR49z/i7ETQ58+Jn5LyVdo8++Xn+se/xwfB7IcVAAA=" /></Footer>{/_ END_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.MetaPatchRetrieveItemsRequest`

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

<details><summary><code>client.accounting.items.<a href="/src/api/resources/accounting/resources/items/client/Client.ts">metaPostRetrieve</a>() -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Item` POSTs.{/_ BEGIN_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE91Ya3PaOBT9K4w+MoCbUMiEmc4OrzRkF5MmpE3ayWgu8sUIZMmRZAJ0+t93DOaVZ5OYdrufwPL1udI5R1fX/k4YWPSVnpIKAcZUJC2XPsmRQHkoSIW0LAYkRyDkLgRIKqSN2sdMdRWbqZ62SI6YKAyVtugdcRSeOdbYJxXiBHF0PpK8z9FzBpobh6kxavDRWT2S78+fITkiuByhl4A/BbIIzCdTvnMZ3zaW5EgIxtiBVpE/OMObCM1jmCOpbgV6PuZ7YBYzExigtCDyHlhwNpDyegH10Fi8Bg8FWvQaYKGBFpnlSiZZB9aGpuI4AxRhYT6DgodjB6UD2nIm0Dil4uH+wWEpn6DMs/9FffFhLzu86aneQZb6TFCIsu0um7jd1q079N+79fcTd3ZRcmejmTscvctSH7LtbrvU6V4VO43qXueBAHpevjz8XGvUTtwsmzWL7vDq1u2yvXaXjXqzVvHkI7s9Of40cWdX++3GRdHtNksnH9Vep35m2vUz1a4WCiRHuLToa4iXaUjl2/fNgcQzRxrNoKbUyGzHtwLwcYOXhSgQ8nwY9QRnBVMsQAAzJeHWFJgKnAA9Ds4aj57fRKCR/qN8VRiG/pJ/ruSKfFIhTfe46tabjW1PVMfABfQEkorVEd4zMal8IzJeQY5oDJRFGquxfUVDsIP1EPfW/6PQA4sehdiKxoKNDLmO795EXKN3ChoCtKjjPNc/cg8R1+ZMK6P6NtOYSgg4M5liuZSpRYZLNCZTR2k1iHRYXSWjy2S0WC7RZTKaJKN1JZSmh5PmUbl8UAhl+qQzjR63VMYsCi6RcotB7B0fJcZTsBqkgXmi7QAux4qzO08lGoaRZgMwSJX2UG+HvFnfSHJLQ80ZpqDxEZcgGWZAeplOiMvNlYrKpwJsX+ngAbWTtJSuc+5E3pfvqZdSqiROe1x7KVO2hN0JK09Z9zfa00V7HnGL6VDpojUxGjXzuv0EkW612/rcfEXtUEEIckpyj1cRnIQozWJws6rMOwB9r7i8vvDEv7QfiT4XIu4mVnB3K1LSuKRy0IBAswG4uF6XPLM+jHLETsMXG+JTxNlofvhmOjJGTMcZa9j8whv0or9frh3s7cIjv90ZjxvgqVNqdW+xk3fhli1nvKVunIOPG42KUJG38daQjmfiHLRWry67wL/Hl+Pi+fCXl+enZNy9VG/UqCUtMGZTVCRBXKoyHnPXHMD/vNa/bkf/hzfwFxhj0onytF4xlp1UjE2P+95k/53985qpFHbeF6VHHkxTZnUB+qsIfeGSL1GrdNYbI+WfbSB38Pp5t5j8UUf7mwvCVzVQmRS/4sR49z/i7ETQ58+Jn5LyVdo8++Xn+se/xwfB7IcVAAA=" /></Footer>{/_ END_ACCOUNTING_ITEM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `JournalEntry` objects.{/_ BEGIN_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa2/iOhD9K8gfKx7bsrQq0tUVr3bpXdJuS/e2d1VZgzMEQ2KntsNrtf/9KiGUR6HbllCQ9hvY4+PHnDMzdn4SBgYdqUakSIAxGQjDhUPSxJM2uqRILmSgBLg1YdSIpAn43AIPSZE0UDmYKj2NSZWu6iRNdOD7Uhm0zzi6tv6isE2KJOeF1plA8DZHO9dRXOeY7KMCB3NPQzLtaAxJE5eLHtox+EsgE8NMvPSlv2G3NiRNfNDadJQMnM41Pgao12H2hBy4aDuYaYGerMxFD4UBN2ODgdwcUkZNoFa1hXuw0UWDdhUMVNEgM1yKeNaOMb4u5nIddP1stIKsjf0cihwow5mLOlfInx6dnBYyMUo0+9/Ucf86POg+tmTr5IA6zKUQHDSabGg16wOr63y2Kp+H1vi2YI17Y6vb+3RAHThoNBuFy+Z9/rJaOrxcYUBvju9Ov5er5QvrgI1reat7P7Ca7LDRZL3WuJ6/OGeDiy/fhtb4/qhRvc1bzVrh4lweXlaudaNyLRulbJakCRcGHQXhNjUp/vg53xBz5kwhlhwUZtG87oGDc8cy8Qn4POMHLZezrM5nwYOxFDDQWSa9nIc2h9yVC6YtlddWiBDCUv0YgELauzaj6vlR1o+oHB0hl+LJC6RIataXklWpVRfJUeoDd6HlIikaFeAzNpPij6kgvnKB2ZhnJL3QaqNmivvRTIs93clvirGa5vsEGgreCjiFnjRIQwKs76E+mM7qbm5PBIUhKT30JEmTRcwVOPNj49+Bb4NBm0K4QKNAaIhOMxyH5CG0ewy4QvsKFHhoUIXn9fArvYYJulOWsqeTocIMj95MOPBVOjLb9XdBgO27eerOuIspnLnmDb59o9ManCmpZdukqiMBHmc6lT8upMqBDpejU5Vww+Am49Gnyeh0Mpo/LtDpZDSejFakKxU9HdbOjo9PdqR4Jj0fxLKr9zEOzLcbBazHhUPjGoBHlLqCUZjwQou6QS8Lvu/ykFvTNS0bcNGXnOGKHn/yn6TJ7ICmWxeB10L1PDL5UofVBNUGTKD3IVRZaG4CbjAZWltodIgWp6oXCGuVmvXvte3QVRhgz1oDpVCw17MYPd+VI8Q3kDuqKmkQPOPiWtb7Snbx2VqT1wIMqQKzvJeEJMIU2txQIc0qmawX0PJRrhfYrHanPiou7ahWnywrttILOpzzNg5ZB4SD0wPggrmB5n2ksk0NDF+h2g3zUCTSFQe9qXS/BZz1oqogVUXdM9JPtvCc4VMsd8VtMNhZAlql6PcloLdr9IMy0wuUXcvPjYm5jYwyR8tLEa40GVbOYDPxPei2fXRcPjncoyTzh2STZNLG1MCGlXnjA7LKigzyDhEmlSS2ocUbcHDuBuPKwJ571EpGmOEctFwpTa+m//Tv+vmb7o5yxe4fIZKoFjZ3ej2MTyyhp6jIxTHi1M39Prf0Cewo+q66kW638F+OBzsK4x9c2/8mSL/mdrzcM7+RzW/O+xVv/5WqZ8Mo2To8Bt2r4vvtqnqnfHZelu8fQ7dwlbxDJZMhbYiU+e3rz5/2gWJvAvZ7q+pZOP94GWxK7v9kR6YS/BoT4j3/GLNPb/NJPphsVxhbfo/f4D63dwXHw6//AaYnNlPQIAAA" /></Footer>{/_ END_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.journalEntries.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListJournalEntriesRequest`

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

Creates a `JournalEntry` object with the given values.{/_ BEGIN_ACCOUNTING_JOURNALENTRY_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE81WbW8aORD+K8gfEexeQiEK0unEWxsisUkTEjWqImvwDovBa2/8AoQq//1klgS4hl7CkVM/rT1rPzP284xnfhAGFhOlH0mdAGPKSctlQkokVTEKUifnymkJoiOtfiQlAhmPIEVSJz3UCRYaL3sKjcsuKRHjskxpi/FnjiI2ZxqHpE7C1K8uO8mHHONwpLkJmZqihgTDly3l4XIPKRHB5QTjFfivQPKF5VXo/5j638aSEsnAGDvSyiWjK3xwaHZhTqSaCYwTLA/A5JEJTFFaEOUYLIQbSGWdQ71m82eIUaDFuA0W2miRWa7kyuvI2szUw3CEIguWEQQxTkOUIWjLmUATViunxyen1fIKZen9L5qIP4+K44eBGpwUacIEBVfs9dk86ndn0Tj5FLU+zaPFTTVaTBbRePJHkSZQ7PV71Yv+XeWi3Ti6eGUBva59O71ttpvnUZEtOpVofDeL+uyo12eTwaJbOf/CZudnX+fR4u64176pRP1O9fyLOrpoXZle60r1GkFASoRLi4kGf0xD6t9/bBqeNcOZVkYNbaH9KCHlzBQqtWqh6QyXaEyhhdJqENtg3RQS3Li0nDHIeDlzA8FZYCoBpLBQEmYmYCoNU4w5hC/O6LMzWqlV6bMzunJGW0ooTU/nnc+12kmQLdW/vHWu5AtxpE460VkjanXa23pqTIELGAgkdasd/pQApP6dMJVmIH36jPNsotKlA9S50NGLJcVUeWBlfC5RY8E6b9eYKouUaQSLMQW7tvF4PXZZvP5vNUgDy7CpN5N7v+7BcY3xJWhI0aJeBvbsffkNVlh5Em7NKBNgNsLZveT+qfQa8RHaa8ctHobZCK3xaNQ8OND4C86iRr972/kvjDGnNUrmhzhnI5AJUg2rkzDhDJ8iVUNqYf4Gfvekk028KFZPNV8C/kRyiTjJH5wHQmn9c6Z3E78+34dT/9VxNmkqNTGFNpqJVdlhRHApwA6VTtf4FJtjeeNmH5PDu3Wwk/T/M3lXJe9lLtFSSLdMhyC5RGY4GCk1oRk8CgVxsNkgNOL4ymxZrtAGvgJ25nZjuJTGYaD6j9mhoG5BuP2wOjG3177yS7YfQJ+n2Mplsvf+noqXTcx+AHPZztW8195u+w3pfyG9Dg+T/WvYcl4E6M3wuNY8OfqIYrBH6r/xvf/Ns30Hp9eQYKErLTBmD0OnR6QrRHqdEzqd8sicwIdW99+sH9tQ2sal0swvMq8ag+cT2PwdfHdHty3Ud0vhG2p1GAl4pPK/NnT7F/A9urV3s/8B6Xz/dP/0N31CILSmDwAA" /></Footer>{/_ END_ACCOUNTING_JOURNALENTRY_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `JournalEntry` object with the given `id`.{/_ BEGIN_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa2/iOhD9K8gfKx7bsrQq0tUVr3bpXdJuS/e2d1VZgzMEQ2KntsNrtf/9KiGUR6HbllCQ9hvY4+PHnDMzdn4SBgYdqUakSIAxGQjDhUPSxJM2uqRILmSgBLg1YdSIpAn43AIPSZE0UDmYKj2NSZWu6iRNdOD7Uhm0zzi6tv6isE2KJOeF1plA8DZHO9dRXOeY7KMCB3NPQzLtaAxJE5eLHtox+EsgE8NMvPSlv2G3NiRNfNDadJQMnM41Pgao12H2hBy4aDuYaYGerMxFD4UBN2ODgdwcUkZNoFa1hXuw0UWDdhUMVNEgM1yKeNaOMb4u5nIddP1stIKsjf0cihwow5mLOlfInx6dnBYyMUo0+9/Ucf86POg+tmTr5IA6zKUQHDSabGg16wOr63y2Kp+H1vi2YI17Y6vb+3RAHThoNBuFy+Z9/rJaOrxcYUBvju9Ov5er5QvrgI1reat7P7Ca7LDRZL3WuJ6/OGeDiy/fhtb4/qhRvc1bzVrh4lweXlaudaNyLRulbJakCRcGHQXhNjUp/vg53xBz5kwhlhwUZtG87oGDc8cy8Qn4POMHLZezrM5nwYOxFDDQWSa9nIc2h9yVC6YtlddWiBDCUv0YgELauzaj6vlR1o+oHB0hl+LJC6RIataXklWpVRfJUeoDd6HlIikaFeAzNpPij6kgvnKB2ZhnJL3QaqNmivvRTIs93clvirGa5vsEGgreCjiFnjRIQwKs76E+mM7qbm5PBIUhKT30JEmTRcwVOPNj49+Bb4NBm0K4QKNAaIhOMxyH5CG0ewy4QvsKFHhoUIXn9fArvYYJulOWsqeTocIMj95MOPBVOjLb9XdBgO27eerOuIspnLnmDb59o9ManCmpZdukqiMBHmc6lT8upMqBDpejU5Vww+Am49Gnyeh0Mpo/LtDpZDSejFakKxU9HdbOjo9PdqR4Jj0fxLKr9zEOzLcbBazHhUPjGoBHlLqCUZjwQou6QS8Lvu/ykFvTNS0bcNGXnOGKHn/yn6TJ7ICmWxeB10L1PDL5UofVBNUGTKD3IVRZaG4CbjAZWltodIgWp6oXCGuVmvXvte3QVRhgz1oDpVCw17MYPd+VI8Q3kDuqKmkQPOPiWtb7Snbx2VqT1wIMqQKzvJeEJMIU2txQIc0qmawX0PJRrhfYrHanPiou7ahWnywrttILOpzzNg5ZB4SD0wPggrmB5n2ksk0NDF+h2g3zUCTSFQe9qXS/BZz1oqogVUXdM9JPtvCc4VMsd8VtMNhZAlql6PcloLdr9IMy0wuUXcvPjYm5jYwyR8tLEa40GVbOYDPxPei2fXRcPjncoyTzh2STZNLG1MCGlXnjA7LKigzyDhEmlSS2ocUbcHDuBuPKwJ571EpGmOEctFwpTa+m//Tv+vmb7o5yxe4fIZKoFjZ3ej2MTyyhp6jIxTHi1M39Prf0Cewo+q66kW638F+OBzsK4x9c2/8mSL/mdrzcM7+RzW/O+xVv/5WqZ8Mo2To8Bt2r4vvtqnqnfHZelu8fQ7dwlbxDJZMhbYiU+e3rz5/2gWJvAvZ7q+pZOP94GWxK7v9kR6YS/BoT4j3/GLNPb/NJPphsVxhbfo/f4D63dwXHw6//AaYnNlPQIAAA" /></Footer>{/_ END_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveJournalEntriesRequest`

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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa2/iOhD9K8gfKx7bsrQq0tUVr3bpXdJuS/e2d1VZgzMEQ2KntsNrtf/9KiGUR6HbllCQ9hvY4+PHnDMzdn4SBgYdqUakSIAxGQjDhUPSxJM2uqRILmSgBLg1YdSIpAn43AIPSZE0UDmYKj2NSZWu6iRNdOD7Uhm0zzi6tv6isE2KJOeF1plA8DZHO9dRXOeY7KMCB3NPQzLtaAxJE5eLHtox+EsgE8NMvPSlv2G3NiRNfNDadJQMnM41Pgao12H2hBy4aDuYaYGerMxFD4UBN2ODgdwcUkZNoFa1hXuw0UWDdhUMVNEgM1yKeNaOMb4u5nIddP1stIKsjf0cihwow5mLOlfInx6dnBYyMUo0+9/Ucf86POg+tmTr5IA6zKUQHDSabGg16wOr63y2Kp+H1vi2YI17Y6vb+3RAHThoNBuFy+Z9/rJaOrxcYUBvju9Ov5er5QvrgI1reat7P7Ca7LDRZL3WuJ6/OGeDiy/fhtb4/qhRvc1bzVrh4lweXlaudaNyLRulbJakCRcGHQXhNjUp/vg53xBz5kwhlhwUZtG87oGDc8cy8Qn4POMHLZezrM5nwYOxFDDQWSa9nIc2h9yVC6YtlddWiBDCUv0YgELauzaj6vlR1o+oHB0hl+LJC6RIataXklWpVRfJUeoDd6HlIikaFeAzNpPij6kgvnKB2ZhnJL3QaqNmivvRTIs93clvirGa5vsEGgreCjiFnjRIQwKs76E+mM7qbm5PBIUhKT30JEmTRcwVOPNj49+Bb4NBm0K4QKNAaIhOMxyH5CG0ewy4QvsKFHhoUIXn9fArvYYJulOWsqeTocIMj95MOPBVOjLb9XdBgO27eerOuIspnLnmDb59o9ManCmpZdukqiMBHmc6lT8upMqBDpejU5Vww+Am49Gnyeh0Mpo/LtDpZDSejFakKxU9HdbOjo9PdqR4Jj0fxLKr9zEOzLcbBazHhUPjGoBHlLqCUZjwQou6QS8Lvu/ykFvTNS0bcNGXnOGKHn/yn6TJ7ICmWxeB10L1PDL5UofVBNUGTKD3IVRZaG4CbjAZWltodIgWp6oXCGuVmvXvte3QVRhgz1oDpVCw17MYPd+VI8Q3kDuqKmkQPOPiWtb7Snbx2VqT1wIMqQKzvJeEJMIU2txQIc0qmawX0PJRrhfYrHanPiou7ahWnywrttILOpzzNg5ZB4SD0wPggrmB5n2ksk0NDF+h2g3zUCTSFQe9qXS/BZz1oqogVUXdM9JPtvCc4VMsd8VtMNhZAlql6PcloLdr9IMy0wuUXcvPjYm5jYwyR8tLEa40GVbOYDPxPei2fXRcPjncoyTzh2STZNLG1MCGlXnjA7LKigzyDhEmlSS2ocUbcHDuBuPKwJ571EpGmOEctFwpTa+m//Tv+vmb7o5yxe4fIZKoFjZ3ej2MTyyhp6jIxTHi1M39Prf0Cewo+q66kW638F+OBzsK4x9c2/8mSL/mdrzcM7+RzW/O+xVv/5WqZ8Mo2To8Bt2r4vvtqnqnfHZelu8fQ7dwlbxDJZMhbYiU+e3rz5/2gWJvAvZ7q+pZOP94GWxK7v9kR6YS/BoT4j3/GLNPb/NJPphsVxhbfo/f4D63dwXHw6//AaYnNlPQIAAA" /></Footer>{/_ END_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.journalEntries.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LinesRemoteFieldClassesListJournalEntriesRequest`

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

Returns metadata for `JournalEntry` POSTs.{/_ BEGIN_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa2/iOhD9K8gfKx7bsrQq0tUVr3bpXdJuS/e2d1VZgzMEQ2KntsNrtf/9KiGUR6HbllCQ9hvY4+PHnDMzdn4SBgYdqUakSIAxGQjDhUPSxJM2uqRILmSgBLg1YdSIpAn43AIPSZE0UDmYKj2NSZWu6iRNdOD7Uhm0zzi6tv6isE2KJOeF1plA8DZHO9dRXOeY7KMCB3NPQzLtaAxJE5eLHtox+EsgE8NMvPSlv2G3NiRNfNDadJQMnM41Pgao12H2hBy4aDuYaYGerMxFD4UBN2ODgdwcUkZNoFa1hXuw0UWDdhUMVNEgM1yKeNaOMb4u5nIddP1stIKsjf0cihwow5mLOlfInx6dnBYyMUo0+9/Ucf86POg+tmTr5IA6zKUQHDSabGg16wOr63y2Kp+H1vi2YI17Y6vb+3RAHThoNBuFy+Z9/rJaOrxcYUBvju9Ov5er5QvrgI1reat7P7Ca7LDRZL3WuJ6/OGeDiy/fhtb4/qhRvc1bzVrh4lweXlaudaNyLRulbJakCRcGHQXhNjUp/vg53xBz5kwhlhwUZtG87oGDc8cy8Qn4POMHLZezrM5nwYOxFDDQWSa9nIc2h9yVC6YtlddWiBDCUv0YgELauzaj6vlR1o+oHB0hl+LJC6RIataXklWpVRfJUeoDd6HlIikaFeAzNpPij6kgvnKB2ZhnJL3QaqNmivvRTIs93clvirGa5vsEGgreCjiFnjRIQwKs76E+mM7qbm5PBIUhKT30JEmTRcwVOPNj49+Bb4NBm0K4QKNAaIhOMxyH5CG0ewy4QvsKFHhoUIXn9fArvYYJulOWsqeTocIMj95MOPBVOjLb9XdBgO27eerOuIspnLnmDb59o9ManCmpZdukqiMBHmc6lT8upMqBDpejU5Vww+Am49Gnyeh0Mpo/LtDpZDSejFakKxU9HdbOjo9PdqR4Jj0fxLKr9zEOzLcbBazHhUPjGoBHlLqCUZjwQou6QS8Lvu/ykFvTNS0bcNGXnOGKHn/yn6TJ7ICmWxeB10L1PDL5UofVBNUGTKD3IVRZaG4CbjAZWltodIgWp6oXCGuVmvXvte3QVRhgz1oDpVCw17MYPd+VI8Q3kDuqKmkQPOPiWtb7Snbx2VqT1wIMqQKzvJeEJMIU2txQIc0qmawX0PJRrhfYrHanPiou7ahWnywrttILOpzzNg5ZB4SD0wPggrmB5n2ksk0NDF+h2g3zUCTSFQe9qXS/BZz1oqogVUXdM9JPtvCc4VMsd8VtMNhZAlql6PcloLdr9IMy0wuUXcvPjYm5jYwyR8tLEa40GVbOYDPxPei2fXRcPjncoyTzh2STZNLG1MCGlXnjA7LKigzyDhEmlSS2ocUbcHDuBuPKwJ571EpGmOEctFwpTa+m//Tv+vmb7o5yxe4fIZKoFjZ3ej2MTyyhp6jIxTHi1M39Prf0Cewo+q66kW638F+OBzsK4x9c2/8mSL/mdrzcM7+RzW/O+xVv/5WqZ8Mo2To8Bt2r4vvtqnqnfHZelu8fQ7dwlbxDJZMhbYiU+e3rz5/2gWJvAvZ7q+pZOP94GWxK7v9kR6YS/BoT4j3/GLNPb/NJPphsVxhbfo/f4D63dwXHw6//AaYnNlPQIAAA" /></Footer>{/_ END_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VZa2/iOhD9K8gfKx7bsrQq0tUVr3bpXdJuS/e2d1VZgzMEQ2KntsNrtf/9KiGUR6HbllCQ9hvY4+PHnDMzdn4SBgYdqUakSIAxGQjDhUPSxJM2uqRILmSgBLg1YdSIpAn43AIPSZE0UDmYKj2NSZWu6iRNdOD7Uhm0zzi6tv6isE2KJOeF1plA8DZHO9dRXOeY7KMCB3NPQzLtaAxJE5eLHtox+EsgE8NMvPSlv2G3NiRNfNDadJQMnM41Pgao12H2hBy4aDuYaYGerMxFD4UBN2ODgdwcUkZNoFa1hXuw0UWDdhUMVNEgM1yKeNaOMb4u5nIddP1stIKsjf0cihwow5mLOlfInx6dnBYyMUo0+9/Ucf86POg+tmTr5IA6zKUQHDSabGg16wOr63y2Kp+H1vi2YI17Y6vb+3RAHThoNBuFy+Z9/rJaOrxcYUBvju9Ov5er5QvrgI1reat7P7Ca7LDRZL3WuJ6/OGeDiy/fhtb4/qhRvc1bzVrh4lweXlaudaNyLRulbJakCRcGHQXhNjUp/vg53xBz5kwhlhwUZtG87oGDc8cy8Qn4POMHLZezrM5nwYOxFDDQWSa9nIc2h9yVC6YtlddWiBDCUv0YgELauzaj6vlR1o+oHB0hl+LJC6RIataXklWpVRfJUeoDd6HlIikaFeAzNpPij6kgvnKB2ZhnJL3QaqNmivvRTIs93clvirGa5vsEGgreCjiFnjRIQwKs76E+mM7qbm5PBIUhKT30JEmTRcwVOPNj49+Bb4NBm0K4QKNAaIhOMxyH5CG0ewy4QvsKFHhoUIXn9fArvYYJulOWsqeTocIMj95MOPBVOjLb9XdBgO27eerOuIspnLnmDb59o9ManCmpZdukqiMBHmc6lT8upMqBDpejU5Vww+Am49Gnyeh0Mpo/LtDpZDSejFakKxU9HdbOjo9PdqR4Jj0fxLKr9zEOzLcbBazHhUPjGoBHlLqCUZjwQou6QS8Lvu/ykFvTNS0bcNGXnOGKHn/yn6TJ7ICmWxeB10L1PDL5UofVBNUGTKD3IVRZaG4CbjAZWltodIgWp6oXCGuVmvXvte3QVRhgz1oDpVCw17MYPd+VI8Q3kDuqKmkQPOPiWtb7Snbx2VqT1wIMqQKzvJeEJMIU2txQIc0qmawX0PJRrhfYrHanPiou7ahWnywrttILOpzzNg5ZB4SD0wPggrmB5n2ksk0NDF+h2g3zUCTSFQe9qXS/BZz1oqogVUXdM9JPtvCc4VMsd8VtMNhZAlql6PcloLdr9IMy0wuUXcvPjYm5jYwyR8tLEa40GVbOYDPxPei2fXRcPjncoyTzh2STZNLG1MCGlXnjA7LKigzyDhEmlSS2ocUbcHDuBuPKwJ571EpGmOEctFwpTa+m//Tv+vmb7o5yxe4fIZKoFjZ3ej2MTyyhp6jIxTHi1M39Prf0Cewo+q66kW638F+OBzsK4x9c2/8mSL/mdrzcM7+RzW/O+xVv/5WqZ8Mo2To8Bt2r4vvtqnqnfHZelu8fQ7dwlbxDJZMhbYiU+e3rz5/2gWJvAvZ7q+pZOP94GWxK7v9kR6YS/BoT4j3/GLNPb/NJPphsVxhbfo/f4D63dwXHw6//AaYnNlPQIAAA" /></Footer>{/_ END_ACCOUNTING_JOURNALENTRY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.journalEntries.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListJournalEntriesRequest`

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
await client.accounting.linkedAccounts.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListLinkedAccountsRequest`

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

## Accounting PaymentMethods

<details><summary><code>client.accounting.paymentMethods.<a href="/src/api/resources/accounting/resources/paymentMethods/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedPaymentMethodList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PaymentMethod` objects.{/_ BEGIN_ACCOUNTING_PAYMENTMETHOD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WTbU8iMRDHvwrpS7IPIiJxk8uFp1NItqjg5Ywxm6EdlkK3XdouKMbvflkgqHeeySW+uHvXmc78Z+bX6RNh4DDV5pFEBBjThXJCpcQjmeYoSUQu4TFD5WJ0M82JRyAXFDIkEYnRpFhpHZIqrcs+8Ygt8lwbh/ybQMnthcEpiUiYldF+ocRUIA9nRtiQ6RUaSDE8pPjTbQ7xiBRqgXwv/pHILtDf9/6LWV5bRzySg7VuZnSRzq5xWaD9k+ZC6bVEnqI/AbvrTGIJAKTPwUH4Ssk3O6n3fOUMHCU65F1w0EWHzAmt9lVnzuU2CsMZyjzYdhBwXIWoQjBOMIk2bNTPjptnDX+vsq3+NUnll1p1vpzoSbOapEwmUFTjMXug4/6aztMT2jl5oJubBt0sNnS+OKomKVTjcdwYjm/rw26rNnwnIBmd/jj73u62B7TKNr06nd+u6ZjV4jFbTDb9+uCcrQcXVw90c3scd2/qdNxrDM51bdi5tnHnWsetICAeEcphaqAc05Lo7um1Y78zFN2oEA7fRvczSPEVld2TQC78vJhIwQJbDyCDjVawtgHTWZghFxBSdLZUS+yyAINBvt3cLTCh1YE5iUiPXrRop9d9uwqtFQgJE4kkcqbA33aXRHdE2ASYE6uy5Wz7CRL3mJeWKkcq9bYfhHjEYKYdJuVDvbWSHNzsxSU4uS+NZSEM8kswkKFDU5a7f/bew3ZVCLZoa72wlaGSQn0SvxdZf0cwuZken7abtf+I5OFc5Bwc8gTc39IdQYqVvnLAmPscsKVisldMRju0q5Wgtgn/CNoPd/D++SfHONquGAYAAA==" /></Footer>{/_ END_ACCOUNTING_PAYMENTMETHOD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.paymentMethods.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListPaymentMethodsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethods.RequestOptions`

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

Returns a `PaymentMethod` object with the given `id`.{/_ BEGIN_ACCOUNTING_PAYMENTMETHOD_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9WTbU8iMRDHvwrpS7IPIiJxk8uFp1NItqjg5Ywxm6EdlkK3XdouKMbvflkgqHeeySW+uHvXmc78Z+bX6RNh4DDV5pFEBBjThXJCpcQjmeYoSUQu4TFD5WJ0M82JRyAXFDIkEYnRpFhpHZIqrcs+8Ygt8lwbh/ybQMnthcEpiUiYldF+ocRUIA9nRtiQ6RUaSDE8pPjTbQ7xiBRqgXwv/pHILtDf9/6LWV5bRzySg7VuZnSRzq5xWaD9k+ZC6bVEnqI/AbvrTGIJAKTPwUH4Ssk3O6n3fOUMHCU65F1w0EWHzAmt9lVnzuU2CsMZyjzYdhBwXIWoQjBOMIk2bNTPjptnDX+vsq3+NUnll1p1vpzoSbOapEwmUFTjMXug4/6aztMT2jl5oJubBt0sNnS+OKomKVTjcdwYjm/rw26rNnwnIBmd/jj73u62B7TKNr06nd+u6ZjV4jFbTDb9+uCcrQcXVw90c3scd2/qdNxrDM51bdi5tnHnWsetICAeEcphaqAc05Lo7um1Y78zFN2oEA7fRvczSPEVld2TQC78vJhIwQJbDyCDjVawtgHTWZghFxBSdLZUS+yyAINBvt3cLTCh1YE5iUiPXrRop9d9uwqtFQgJE4kkcqbA33aXRHdE2ASYE6uy5Wz7CRL3mJeWKkcq9bYfhHjEYKYdJuVDvbWSHNzsxSU4uS+NZSEM8kswkKFDU5a7f/bew3ZVCLZoa72wlaGSQn0SvxdZf0cwuZken7abtf+I5OFc5Bwc8gTc39IdQYqVvnLAmPscsKVisldMRju0q5Wgtgn/CNoPd/D++SfHONquGAYAAA==" /></Footer>{/_ END_ACCOUNTING_PAYMENTMETHOD_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.paymentMethods.retrieve("id");
```

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

**request:** `Merge.accounting.RetrievePaymentMethodsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentMethods.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Accounting PaymentTerms

<details><summary><code>client.accounting.paymentTerms.<a href="/src/api/resources/accounting/resources/paymentTerms/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedPaymentTermList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PaymentTerm` objects.{/_ BEGIN_ACCOUNTING_PAYMENTTERM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1U224aMRD9lciPiGVLCEFZqaq4NQFpTRJI1Qgha7CHxeBdL7YXEqL8e2WgubRppUppn/q2njlzPHPOeB8IB4eJNvckIsC5LjIns4SUSaoFKhKRS7hPMXMjNCkpE8glhRRJRGI0CR41n0qOmpc9Uia2yHNtHIrPEpWwFwZnJCJh6tFBkcmZRBHOjbQh12s0kGD4VBLMdjWkTJTMligO5L8j2QODQ+c/HH3aOlImOVjr5kYXyfwaVwXaX3EuM71RKBIMpmD3nSn044MKBDgIXzAFZk/1VszPIFChQ9EBBx10yJ3U2eHWuXO5jcJwjiqv7DqoCFyHmIVgnOQKbVivnR03zurBgWV3+yeWqI/V0mI11dNGiSVcMShK8Yjf0VFvQxfJCW2f3NHtTZ1ul1u6WH4osQRK8SiuD0a3tUGnWR28AWDD069nX1qdVp+W+LZbo4vbDR3xajziy+m2V+uf803/4uqObm+P485NjY669f65rg7a1zZuX+u4WamQMpGZw8SAH9OSaPzwMnDYGYpuWEiHr9G9FBJ8ocreEshlkBdTJXnF1iqQwlZnsLEVrtMwRSEhpOisZ2N2VYDBSr7b251gUmdPmpOIdOlFk7a7nder0FyDVDBVSCJnCvxpd0k0JgLuLfMLrpgo9n2vteToDZaWAXdy7cOZH7BM8sLwOVhk2gg0HmQw1Q6Zt+/1ieXg5s8hKfzjAYX2e+3E51aFNCguwUCKzkej8eSx/Ja2V4Xky5bWS3s0yJTM3knkZ9pgLzO7mR2fthrVfyO3kHb3lJnP/G35D98KrGOpFrtfAgP3p04MIcGjXuaAc/c+JnhGdmBkw70N67WktgH/bRhPHieP3wB7OUtayAYAAA==" /></Footer>{/_ END_ACCOUNTING_PAYMENTTERM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.paymentTerms.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListPaymentTermsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTerms.RequestOptions`

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

Returns a `PaymentTerm` object with the given `id`.{/_ BEGIN_ACCOUNTING_PAYMENTTERM_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1U224aMRD9lciPiGVLCEFZqaq4NQFpTRJI1Qgha7CHxeBdL7YXEqL8e2WgubRppUppn/q2njlzPHPOeB8IB4eJNvckIsC5LjIns4SUSaoFKhKRS7hPMXMjNCkpE8glhRRJRGI0CR41n0qOmpc9Uia2yHNtHIrPEpWwFwZnJCJh6tFBkcmZRBHOjbQh12s0kGD4VBLMdjWkTJTMligO5L8j2QODQ+c/HH3aOlImOVjr5kYXyfwaVwXaX3EuM71RKBIMpmD3nSn044MKBDgIXzAFZk/1VszPIFChQ9EBBx10yJ3U2eHWuXO5jcJwjiqv7DqoCFyHmIVgnOQKbVivnR03zurBgWV3+yeWqI/V0mI11dNGiSVcMShK8Yjf0VFvQxfJCW2f3NHtTZ1ul1u6WH4osQRK8SiuD0a3tUGnWR28AWDD069nX1qdVp+W+LZbo4vbDR3xajziy+m2V+uf803/4uqObm+P485NjY669f65rg7a1zZuX+u4WamQMpGZw8SAH9OSaPzwMnDYGYpuWEiHr9G9FBJ8ocreEshlkBdTJXnF1iqQwlZnsLEVrtMwRSEhpOisZ2N2VYDBSr7b251gUmdPmpOIdOlFk7a7nder0FyDVDBVSCJnCvxpd0k0JgLuLfMLrpgo9n2vteToDZaWAXdy7cOZH7BM8sLwOVhk2gg0HmQw1Q6Zt+/1ieXg5s8hKfzjAYX2e+3E51aFNCguwUCKzkej8eSx/Ja2V4Xky5bWS3s0yJTM3knkZ9pgLzO7mR2fthrVfyO3kHb3lJnP/G35D98KrGOpFrtfAgP3p04MIcGjXuaAc/c+JnhGdmBkw70N67WktgH/bRhPHieP3wB7OUtayAYAAA==" /></Footer>{/_ END_ACCOUNTING_PAYMENTTERM_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.paymentTerms.retrieve("id");
```

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

**request:** `Merge.accounting.RetrievePaymentTermsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PaymentTerms.RequestOptions`

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

Returns a list of `Payment` objects.{/_ BEGIN_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXa08bOxD9K5E/Rkn2QpogIl1VeVHCbRYKoYJbIWvinWyceO3F9gaSqv+98mbz4FEuXG2Bfls/9oxnzpkZ+zthYDFUek4aBBhTibRchqREIhWgIA1yAvMIpSUlAjH3IULSIH3UIRaa6+2F5kmPlIhJ4lhpi8EBRxGYQ40j0iBe5HaXE8lHHANvrLnxmJqhhhC99S/lUfoPKRHB5RSDDPwpkOXGcnbqe0O3bNypYzDGjrVKwvEpXidofoU5lepGYBBieQhmeTKBznUQ5QAseFtIZb2EemzO+RCgQItBByx00CKzXMnM6tja2DQ8b4wirqQnqAQ481B6oC1nAo1Xq+7v7u3XyhlKav0jDcXfO8XJ9VAN94o0ZIJCUuwP2K0/6N34k/CD3/5w6y/Oa/5iuvAn07+KNIRif9CvHQ8uq8ed5s7xIxvoWf1i/2ur0zryi2zRrfqTyxt/wHb6AzYdLnrVo0/s5ujwy62/uNztd86r/qBbO/qkdo7bp6bfPlX9ZqVCSoRLi6EG56YhjW/ftycyzRxoNOOWUlNzd38vghC34rIkBWJejpOh4KxiqhWIYKEk3JgKU5EXYcDB2+DRs+sENNLPKlSVSRyu4s+VXAefNEjXP2z67W7nriaaM+AChgJJw+oEH4iYNL4RpqQF5sTENAbcUqksulGiNUo2Tx2aKc7cpMZIWaSOs7sjGoMdb6Z4sPlO4gAsBhScDassCAqRU7EbapAGUiccDJIr99t1wjUGJ6AhQovaHfPqR+mxuPc508qokS105hIizkyhWq8VWonhEo0ptFFaDSIfUtbG6MoYrdZrdGWMZsZoWwml6f5t96Be36vEMn/OsrL1mUvsWYwqEMeCuxCv4np/w4bB+yvxVgVcglhFhXPIaUBFMch5+rVSycsZZlMuQ5qVYp4CP+C9ROw8fjn9SuJ8yHWQD8EnAuxI6WgN+1vIy2r4naC+3wzz0Z4lPGUohwj7aI1Doyatak/E128Oel+7r5Aad6ve8xNnohItQVCX9POnE2tN+OYOQmPUXAXPT7utcoy3bAwyRKqXmZNeZmiSpJLIzNII7VgFLxXUaybvl4SzadrjCsfSuZ6PxDaw5aXI6Plot97a23kPYlttyML2plp8THevq7a3bh9nEOLWXUGoJNi69+cjR2eDttrN1T3un9nFrHo2ebXO8gST77fppMT0nAtZd8yHhgxxRcVsxn2zB39AXXjO9e3+yjZl/5H1L+o2r5HyeST3BWqVj3YcUvn9XFh+Uw95eY/41XPxDevM/5PKv2qsCjm+3h3ew8f7n/MQzLFavCfur378BN06tIYRFAAA" /></Footer>{/_ END_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListPaymentsRequest`

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

Creates a `Payment` object with the given values.{/_ BEGIN_ACCOUNTING_PAYMENT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE92WYW/aSBCG/wrajwjbJTSNgnSqSKAN0WHShFRNq2g1rCdmYb3r7K4hUOW/n9YYCq1pmxwXVfcNm/E778w8Hu9XwsBirPScNAkwpjJpuYxJjSQqQkGa5ALmCUpLagRSHkKCpEl6qGOstNbhldZFl9SIydJUaYvRO44iMmca70iTBImL9jLJ7zhGwUhzEzA1RQ0xButHvLv8GVIjgssJRoX4z0SWgV7h+rtL97dxrlMwxo60yuLRJd5naHZpTqSaCYxi9IZgls4EutJBeBFYCDaUPL2UKrvnaohQoMWoDRbaaJFZrmSRdWRtappBMEKR+rkDP8JpgDIAbTkTaILDxvHB0fGhV6jk2d/SWPxVr47vh2p4VKUxExSyam/AHsJBdxaO49fh6euHcHF9GC4mi3A8eVWlMVR7g95hf3DT6Ldb9X5JAL168+n440n75DysskWnEY5vZuGA1XsDNhkuuo3z92x2fvbhIVzcHPTa141w0Dk8f6/q/dNL0zu9VL2W75Ma4dJirMGVaUjzy9fNGwUz7zSa0YlSE7Md300gxo2+LIcCKffSbCg4803DhwQWSsLM+EwlQYIRh+CbHr26z0Aj/VvFyh+n8ar/XMl180mTdMKzVnjaaW8z0ZoCFzAUSJpWZ/gDxKT5hTCVpCDnpEaYkhaYw4plWqNk87yYqeIMSY1oTJRFyiNSI1ZZEBQSB6O71CAN5F5oBNZF23mK5NY9dZ9xjdEFaEjQos6TQpoKjhG1igou0fiF+PI92bqiTIAxub2V0Y0G09TpGr94MeimyZKwopqtsF+mvn2slc08RHuV8bzYPUw8RGucGjX5vP1U7hp12Bp0P3aePuiiRW7XrXcbTVFzFeX7b3siWw0vJQMf2AhkjFRD0YQVKfl2pVmWtzddrliaoB2p6DuOit9Z6qiJKNhSttjEWS12Oc+9/XviVjfWiUqYFLkrNRwjs0vDvwrKTZSG/QbfqyY/l8gPGWeTfGtU+tLl3Q+a32S9JZz0+u7gzclR/b+FtAzIJ2E4VpmWIChKq+f7IXGbud2w7axizyD8hsdyVK4gxkrX5ckT7YESp0gLxdVHazrloTmCl+fkSYvrT+CiDJX/4Yb6hFrtBzen5L3Et/Kna0hjxC2VKudo9yZ6AaCeuQc+q5Gq7PHg6vR+PLfuHtDzz6373AB/ztH2abs/N/J4+/gPOY1xwekOAAA=" /></Footer>{/_ END_ACCOUNTING_PAYMENT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `Payment` object with the given `id`.{/_ BEGIN_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXa08bOxD9K5E/Rkn2QpogIl1VeVHCbRYKoYJbIWvinWyceO3F9gaSqv+98mbz4FEuXG2Bfls/9oxnzpkZ+zthYDFUek4aBBhTibRchqREIhWgIA1yAvMIpSUlAjH3IULSIH3UIRaa6+2F5kmPlIhJ4lhpi8EBRxGYQ40j0iBe5HaXE8lHHANvrLnxmJqhhhC99S/lUfoPKRHB5RSDDPwpkOXGcnbqe0O3bNypYzDGjrVKwvEpXidofoU5lepGYBBieQhmeTKBznUQ5QAseFtIZb2EemzO+RCgQItBByx00CKzXMnM6tja2DQ8b4wirqQnqAQ481B6oC1nAo1Xq+7v7u3XyhlKav0jDcXfO8XJ9VAN94o0ZIJCUuwP2K0/6N34k/CD3/5w6y/Oa/5iuvAn07+KNIRif9CvHQ8uq8ed5s7xIxvoWf1i/2ur0zryi2zRrfqTyxt/wHb6AzYdLnrVo0/s5ujwy62/uNztd86r/qBbO/qkdo7bp6bfPlX9ZqVCSoRLi6EG56YhjW/ftycyzRxoNOOWUlNzd38vghC34rIkBWJejpOh4KxiqhWIYKEk3JgKU5EXYcDB2+DRs+sENNLPKlSVSRyu4s+VXAefNEjXP2z67W7nriaaM+AChgJJw+oEH4iYNL4RpqQF5sTENAbcUqksulGiNUo2Tx2aKc7cpMZIWaSOs7sjGoMdb6Z4sPlO4gAsBhScDassCAqRU7EbapAGUiccDJIr99t1wjUGJ6AhQovaHfPqR+mxuPc508qokS105hIizkyhWq8VWonhEo0ptFFaDSIfUtbG6MoYrdZrdGWMZsZoWwml6f5t96Be36vEMn/OsrL1mUvsWYwqEMeCuxCv4np/w4bB+yvxVgVcglhFhXPIaUBFMch5+rVSycsZZlMuQ5qVYp4CP+C9ROw8fjn9SuJ8yHWQD8EnAuxI6WgN+1vIy2r4naC+3wzz0Z4lPGUohwj7aI1Doyatak/E128Oel+7r5Aad6ve8xNnohItQVCX9POnE2tN+OYOQmPUXAXPT7utcoy3bAwyRKqXmZNeZmiSpJLIzNII7VgFLxXUaybvl4SzadrjCsfSuZ6PxDaw5aXI6Plot97a23kPYlttyML2plp8THevq7a3bh9nEOLWXUGoJNi69+cjR2eDttrN1T3un9nFrHo2ebXO8gST77fppMT0nAtZd8yHhgxxRcVsxn2zB39AXXjO9e3+yjZl/5H1L+o2r5HyeST3BWqVj3YcUvn9XFh+Uw95eY/41XPxDevM/5PKv2qsCjm+3h3ew8f7n/MQzLFavCfur378BN06tIYRFAAA" /></Footer>{/_ END_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrievePaymentsRequest`

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

Updates a `Payment` object with the given `id`.{/_ BEGIN_ACCOUNTING_PAYMENT_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE7WUb0/bMBDGvwryy6pJVkqHiDRNhRYoWl3+FDSEkHW1j9StYwfboVDEd5+cdkAHbEOCd7Zzfu65+118Tzh4zIy9IykBzk2pvdQZqZPcCFQkJYdwl6P2pE6gkBRyJCnpo81wrf0YvtY+7JE6cWVRGOtR7EpUwu1bvCIpSfIQHZVaXkkUydhKl3BzgxYyTB6vRFfVHVInSuopiqX430QWgdHS9R/b8NkF1wU458fWlNn4GK9LdG9pTrWZKRQZRiNwC2cKQ+mgIgEekmdKkV1IvXYWahCo0KPogIcOeuReGr3MOva+cGmSjFEVceUgFniToE7AeskVuqTV3Frf3GpFS5Uq+3eWqW+N2uR6ZEabNZZxxaCs9Yf8lg57MzrJNujOxi2dn7bofDqnk+mXGsug1h/2W4PheXPQaTcGrwSwk68/t862O9sHtMbn3SadnM/okDf6Qz4dzXvNgz0+O9g/uqXz8/V+57RJh93WwZ5pDHaOXX/n2PTbcUzqRGqPmYVQpiPpxf3zg+XM7Fp0421jpm41vpdDhs/6soAChYyKcqQkj10zhhzmRsPMxdzkSY5CQvKkx06uS7DIfpjMxJMi+91/afRj80lKunS/TXe6ndWZaN+AVDBSSFJvS3wxxCS9INzkBeg7Uie8tBY1D0uLufHIpHhal4UAj4JBmDtvPCgGeRjGsLWgHVReWIgKR3cFkstw+7qUFsUhWMjRo62SQlEoiYJ5w5TU6OJlksV/srJjXIELbX0y+s/gy4f6a5Qo+pNSVvY+gBFF74IacxWhuNBvwaHtYe+s+340y789vE6PrxEr0EojqhdrtYcrLeJGe+B+lSre8jHoDJldMHo/ZT4NFpavqqxyvmD/FvQ3oByVkk+rUV8b6FDIx9B5ko0WfNjp1frX7c3G53J6jcmnkPjfnl8+/AJ4yee+BgcAAA==" /></Footer>{/_ END_ACCOUNTING_PAYMENT_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXa08bOxD9K5E/Rkn2QpogIl1VeVHCbRYKoYJbIWvinWyceO3F9gaSqv+98mbz4FEuXG2Bfls/9oxnzpkZ+zthYDFUek4aBBhTibRchqREIhWgIA1yAvMIpSUlAjH3IULSIH3UIRaa6+2F5kmPlIhJ4lhpi8EBRxGYQ40j0iBe5HaXE8lHHANvrLnxmJqhhhC99S/lUfoPKRHB5RSDDPwpkOXGcnbqe0O3bNypYzDGjrVKwvEpXidofoU5lepGYBBieQhmeTKBznUQ5QAseFtIZb2EemzO+RCgQItBByx00CKzXMnM6tja2DQ8b4wirqQnqAQ481B6oC1nAo1Xq+7v7u3XyhlKav0jDcXfO8XJ9VAN94o0ZIJCUuwP2K0/6N34k/CD3/5w6y/Oa/5iuvAn07+KNIRif9CvHQ8uq8ed5s7xIxvoWf1i/2ur0zryi2zRrfqTyxt/wHb6AzYdLnrVo0/s5ujwy62/uNztd86r/qBbO/qkdo7bp6bfPlX9ZqVCSoRLi6EG56YhjW/ftycyzRxoNOOWUlNzd38vghC34rIkBWJejpOh4KxiqhWIYKEk3JgKU5EXYcDB2+DRs+sENNLPKlSVSRyu4s+VXAefNEjXP2z67W7nriaaM+AChgJJw+oEH4iYNL4RpqQF5sTENAbcUqksulGiNUo2Tx2aKc7cpMZIWaSOs7sjGoMdb6Z4sPlO4gAsBhScDassCAqRU7EbapAGUiccDJIr99t1wjUGJ6AhQovaHfPqR+mxuPc508qokS105hIizkyhWq8VWonhEo0ptFFaDSIfUtbG6MoYrdZrdGWMZsZoWwml6f5t96Be36vEMn/OsrL1mUvsWYwqEMeCuxCv4np/w4bB+yvxVgVcglhFhXPIaUBFMch5+rVSycsZZlMuQ5qVYp4CP+C9ROw8fjn9SuJ8yHWQD8EnAuxI6WgN+1vIy2r4naC+3wzz0Z4lPGUohwj7aI1Doyatak/E128Oel+7r5Aad6ve8xNnohItQVCX9POnE2tN+OYOQmPUXAXPT7utcoy3bAwyRKqXmZNeZmiSpJLIzNII7VgFLxXUaybvl4SzadrjCsfSuZ6PxDaw5aXI6Plot97a23kPYlttyML2plp8THevq7a3bh9nEOLWXUGoJNi69+cjR2eDttrN1T3un9nFrHo2ebXO8gST77fppMT0nAtZd8yHhgxxRcVsxn2zB39AXXjO9e3+yjZl/5H1L+o2r5HyeST3BWqVj3YcUvn9XFh+Uw95eY/41XPxDevM/5PKv2qsCjm+3h3ew8f7n/MQzLFavCfur378BN06tIYRFAAA" /></Footer>{/_ END_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LineItemsRemoteFieldClassesListPaymentsRequest`

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

<details><summary><code>client.accounting.payments.<a href="/src/api/resources/accounting/resources/payments/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `Payment` PATCHs.{/_ BEGIN_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXa08bOxD9K5E/Rkn2QpogIl1VeVHCbRYKoYJbIWvinWyceO3F9gaSqv+98mbz4FEuXG2Bfls/9oxnzpkZ+zthYDFUek4aBBhTibRchqREIhWgIA1yAvMIpSUlAjH3IULSIH3UIRaa6+2F5kmPlIhJ4lhpi8EBRxGYQ40j0iBe5HaXE8lHHANvrLnxmJqhhhC99S/lUfoPKRHB5RSDDPwpkOXGcnbqe0O3bNypYzDGjrVKwvEpXidofoU5lepGYBBieQhmeTKBznUQ5QAseFtIZb2EemzO+RCgQItBByx00CKzXMnM6tja2DQ8b4wirqQnqAQ481B6oC1nAo1Xq+7v7u3XyhlKav0jDcXfO8XJ9VAN94o0ZIJCUuwP2K0/6N34k/CD3/5w6y/Oa/5iuvAn07+KNIRif9CvHQ8uq8ed5s7xIxvoWf1i/2ur0zryi2zRrfqTyxt/wHb6AzYdLnrVo0/s5ujwy62/uNztd86r/qBbO/qkdo7bp6bfPlX9ZqVCSoRLi6EG56YhjW/ftycyzRxoNOOWUlNzd38vghC34rIkBWJejpOh4KxiqhWIYKEk3JgKU5EXYcDB2+DRs+sENNLPKlSVSRyu4s+VXAefNEjXP2z67W7nriaaM+AChgJJw+oEH4iYNL4RpqQF5sTENAbcUqksulGiNUo2Tx2aKc7cpMZIWaSOs7sjGoMdb6Z4sPlO4gAsBhScDassCAqRU7EbapAGUiccDJIr99t1wjUGJ6AhQovaHfPqR+mxuPc508qokS105hIizkyhWq8VWonhEo0ptFFaDSIfUtbG6MoYrdZrdGWMZsZoWwml6f5t96Be36vEMn/OsrL1mUvsWYwqEMeCuxCv4np/w4bB+yvxVgVcglhFhXPIaUBFMch5+rVSycsZZlMuQ5qVYp4CP+C9ROw8fjn9SuJ8yHWQD8EnAuxI6WgN+1vIy2r4naC+3wzz0Z4lPGUohwj7aI1Doyatak/E128Oel+7r5Aad6ve8xNnohItQVCX9POnE2tN+OYOQmPUXAXPT7utcoy3bAwyRKqXmZNeZmiSpJLIzNII7VgFLxXUaybvl4SzadrjCsfSuZ6PxDaw5aXI6Plot97a23kPYlttyML2plp8THevq7a3bh9nEOLWXUGoJNi69+cjR2eDttrN1T3un9nFrHo2ebXO8gST77fppMT0nAtZd8yHhgxxRcVsxn2zB39AXXjO9e3+yjZl/5H1L+o2r5HyeST3BWqVj3YcUvn9XFh+Uw95eY/41XPxDevM/5PKv2qsCjm+3h3ew8f7n/MQzLFavCfur378BN06tIYRFAAA" /></Footer>{/_ END_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.MetaPatchRetrievePaymentsRequest`

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

Returns metadata for `Payment` POSTs.{/_ BEGIN_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXa08bOxD9K5E/Rkn2QpogIl1VeVHCbRYKoYJbIWvinWyceO3F9gaSqv+98mbz4FEuXG2Bfls/9oxnzpkZ+zthYDFUek4aBBhTibRchqREIhWgIA1yAvMIpSUlAjH3IULSIH3UIRaa6+2F5kmPlIhJ4lhpi8EBRxGYQ40j0iBe5HaXE8lHHANvrLnxmJqhhhC99S/lUfoPKRHB5RSDDPwpkOXGcnbqe0O3bNypYzDGjrVKwvEpXidofoU5lepGYBBieQhmeTKBznUQ5QAseFtIZb2EemzO+RCgQItBByx00CKzXMnM6tja2DQ8b4wirqQnqAQ481B6oC1nAo1Xq+7v7u3XyhlKav0jDcXfO8XJ9VAN94o0ZIJCUuwP2K0/6N34k/CD3/5w6y/Oa/5iuvAn07+KNIRif9CvHQ8uq8ed5s7xIxvoWf1i/2ur0zryi2zRrfqTyxt/wHb6AzYdLnrVo0/s5ujwy62/uNztd86r/qBbO/qkdo7bp6bfPlX9ZqVCSoRLi6EG56YhjW/ftycyzRxoNOOWUlNzd38vghC34rIkBWJejpOh4KxiqhWIYKEk3JgKU5EXYcDB2+DRs+sENNLPKlSVSRyu4s+VXAefNEjXP2z67W7nriaaM+AChgJJw+oEH4iYNL4RpqQF5sTENAbcUqksulGiNUo2Tx2aKc7cpMZIWaSOs7sjGoMdb6Z4sPlO4gAsBhScDassCAqRU7EbapAGUiccDJIr99t1wjUGJ6AhQovaHfPqR+mxuPc508qokS105hIizkyhWq8VWonhEo0ptFFaDSIfUtbG6MoYrdZrdGWMZsZoWwml6f5t96Be36vEMn/OsrL1mUvsWYwqEMeCuxCv4np/w4bB+yvxVgVcglhFhXPIaUBFMch5+rVSycsZZlMuQ5qVYp4CP+C9ROw8fjn9SuJ8yHWQD8EnAuxI6WgN+1vIy2r4naC+3wzz0Z4lPGUohwj7aI1Doyatak/E128Oel+7r5Aad6ve8xNnohItQVCX9POnE2tN+OYOQmPUXAXPT7utcoy3bAwyRKqXmZNeZmiSpJLIzNII7VgFLxXUaybvl4SzadrjCsfSuZ6PxDaw5aXI6Plot97a23kPYlttyML2plp8THevq7a3bh9nEOLWXUGoJNi69+cjR2eDttrN1T3un9nFrHo2ebXO8gST77fppMT0nAtZd8yHhgxxRcVsxn2zB39AXXjO9e3+yjZl/5H1L+o2r5HyeST3BWqVj3YcUvn9XFh+Uw95eY/41XPxDevM/5PKv2qsCjm+3h3ew8f7n/MQzLFavCfur378BN06tIYRFAAA" /></Footer>{/_ END_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE9VXa08bOxD9K5E/Rkn2QpogIl1VeVHCbRYKoYJbIWvinWyceO3F9gaSqv+98mbz4FEuXG2Bfls/9oxnzpkZ+zthYDFUek4aBBhTibRchqREIhWgIA1yAvMIpSUlAjH3IULSIH3UIRaa6+2F5kmPlIhJ4lhpi8EBRxGYQ40j0iBe5HaXE8lHHANvrLnxmJqhhhC99S/lUfoPKRHB5RSDDPwpkOXGcnbqe0O3bNypYzDGjrVKwvEpXidofoU5lepGYBBieQhmeTKBznUQ5QAseFtIZb2EemzO+RCgQItBByx00CKzXMnM6tja2DQ8b4wirqQnqAQ481B6oC1nAo1Xq+7v7u3XyhlKav0jDcXfO8XJ9VAN94o0ZIJCUuwP2K0/6N34k/CD3/5w6y/Oa/5iuvAn07+KNIRif9CvHQ8uq8ed5s7xIxvoWf1i/2ur0zryi2zRrfqTyxt/wHb6AzYdLnrVo0/s5ujwy62/uNztd86r/qBbO/qkdo7bp6bfPlX9ZqVCSoRLi6EG56YhjW/ftycyzRxoNOOWUlNzd38vghC34rIkBWJejpOh4KxiqhWIYKEk3JgKU5EXYcDB2+DRs+sENNLPKlSVSRyu4s+VXAefNEjXP2z67W7nriaaM+AChgJJw+oEH4iYNL4RpqQF5sTENAbcUqksulGiNUo2Tx2aKc7cpMZIWaSOs7sjGoMdb6Z4sPlO4gAsBhScDassCAqRU7EbapAGUiccDJIr99t1wjUGJ6AhQovaHfPqR+mxuPc508qokS105hIizkyhWq8VWonhEo0ptFFaDSIfUtbG6MoYrdZrdGWMZsZoWwml6f5t96Be36vEMn/OsrL1mUvsWYwqEMeCuxCv4np/w4bB+yvxVgVcglhFhXPIaUBFMch5+rVSycsZZlMuQ5qVYp4CP+C9ROw8fjn9SuJ8yHWQD8EnAuxI6WgN+1vIy2r4naC+3wzz0Z4lPGUohwj7aI1Doyatak/E128Oel+7r5Aad6ve8xNnohItQVCX9POnE2tN+OYOQmPUXAXPT7utcoy3bAwyRKqXmZNeZmiSpJLIzNII7VgFLxXUaybvl4SzadrjCsfSuZ6PxDaw5aXI6Plot97a23kPYlttyML2plp8THevq7a3bh9nEOLWXUGoJNi69+cjR2eDttrN1T3un9nFrHo2ebXO8gST77fppMT0nAtZd8yHhgxxRcVsxn2zB39AXXjO9e3+yjZl/5H1L+o2r5HyeST3BWqVj3YcUvn9XFh+Uw95eY/41XPxDevM/5PKv2qsCjm+3h3ew8f7n/MQzLFavCfur378BN06tIYRFAAA" /></Footer>{/_ END_ACCOUNTING_PAYMENT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.payments.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListPaymentsRequest`

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

Returns an `AccountingPhoneNumber` object with the given `id`.{/_ BEGIN_ACCOUNTING_PHONENUMBER_FETCH_SUPPORTED_FIELDS _ /}{/_ END_ACCOUNTING_PHONENUMBER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrievePhoneNumbersRequest`

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

## Accounting Projects

<details><summary><code>client.accounting.projects.<a href="/src/api/resources/accounting/resources/projects/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedProjectList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `Project` objects.{/_ BEGIN_ACCOUNTING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WTb2/aMBDGvwryS5SQUcpQI00T/9aChGkLnVZVlXU4RzAkdrAdoFT97pMDo7Tr9qqTKu3lnR//7nzP+ZFwsBgr/UBCApyrXFohY+KRVEWYkJBcajVHbolHIBMUUiQhGaCOsdQ8yEvNyx7xiMmzTGmL0TeBSWQuNE5JSILUqf1ciqnAKJhpYQKuVqghxuBwxZ8Wd4hHEiEXGO3hf4PshP6+61ehOzau6wyMsTOt8nh2jcsczZ+YC6nWCUYx+hMwu84STFFaSPwILARHJF/vUG/l3BsiTNBi1AELHbTIrVByX3VmbWbCIJhhklWKDioRrgKUAWgreIImqNfOThpndX9PKap/ZXHypVqeLydq0iizmCcM8vJgzDd03FvTeXxK26cbur2p0+1iS+eLT2UWQ3kwHtSH49vasNOsDt8QsNHnH2ffW51Wn5b5tluj89s1HfPqYMwXk22v1j/n6/7F1YZub08GnZsaHXfr/XNVHbavzaB9rQbNSoV4REiLsQb3TEPCu8fjxH5nKNpRLiy+VPdSiPFoKjtLIBN+lk8SwSumVoEUtkrC2lS4SoMUIwEBRWscjZllDhorWbGzxcCEkoeZk5B06UWTtrudl6vQXIFIYJIgCa3O8bfdJeEd4SrNQD4Qj3AlLRR/gGuMhGVSWWSJkMiExdQ5jpsMpdklXRyjRA0JKzZKM6tBGih6OkiEXCnBX3GEYU62cnOaq1xLx9hfkG6SHtGYuvJuK15GLAM7e06JiHhkhTJSmu37Pip173TLXGiMLkFDiha1e/b9k/eWfVe54IuWUgtTGkqHeR8fn7H+zkl2Mz353GpU/5Gj/72PI4ix1HNjKObwDhY6ItsT2Whn4molqGnAx/uWv2KNDvvhLbx/+gnzVwVQoQcAAA==" /></Footer>{/_ END_ACCOUNTING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.projects.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListProjectsRequest`

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

<details><summary><code>client.accounting.projects.<a href="/src/api/resources/accounting/resources/projects/client/Client.ts">retrieve</a>(id, { ...params }) -> Merge.Project</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a `Project` object with the given `id`.{/_ BEGIN_ACCOUNTING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+WTb2/aMBDGvwryS5SQUcpQI00T/9aChGkLnVZVlXU4RzAkdrAdoFT97pMDo7Tr9qqTKu3lnR//7nzP+ZFwsBgr/UBCApyrXFohY+KRVEWYkJBcajVHbolHIBMUUiQhGaCOsdQ8yEvNyx7xiMmzTGmL0TeBSWQuNE5JSILUqf1ciqnAKJhpYQKuVqghxuBwxZ8Wd4hHEiEXGO3hf4PshP6+61ehOzau6wyMsTOt8nh2jcsczZ+YC6nWCUYx+hMwu84STFFaSPwILARHJF/vUG/l3BsiTNBi1AELHbTIrVByX3VmbWbCIJhhklWKDioRrgKUAWgreIImqNfOThpndX9PKap/ZXHypVqeLydq0iizmCcM8vJgzDd03FvTeXxK26cbur2p0+1iS+eLT2UWQ3kwHtSH49vasNOsDt8QsNHnH2ffW51Wn5b5tluj89s1HfPqYMwXk22v1j/n6/7F1YZub08GnZsaHXfr/XNVHbavzaB9rQbNSoV4REiLsQb3TEPCu8fjxH5nKNpRLiy+VPdSiPFoKjtLIBN+lk8SwSumVoEUtkrC2lS4SoMUIwEBRWscjZllDhorWbGzxcCEkoeZk5B06UWTtrudl6vQXIFIYJIgCa3O8bfdJeEd4SrNQD4Qj3AlLRR/gGuMhGVSWWSJkMiExdQ5jpsMpdklXRyjRA0JKzZKM6tBGih6OkiEXCnBX3GEYU62cnOaq1xLx9hfkG6SHtGYuvJuK15GLAM7e06JiHhkhTJSmu37Pip173TLXGiMLkFDiha1e/b9k/eWfVe54IuWUgtTGkqHeR8fn7H+zkl2Mz353GpU/5Gj/72PI4ix1HNjKObwDhY6ItsT2Whn4molqGnAx/uWv2KNDvvhLbx/+gnzVwVQoQcAAA==" /></Footer>{/_ END_ACCOUNTING_PROJECT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.projects.retrieve("id");
```

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

**request:** `Merge.accounting.RetrieveProjectsRequest`

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

## Accounting PurchaseOrders

<details><summary><code>client.accounting.purchaseOrders.<a href="/src/api/resources/accounting/resources/purchaseOrders/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedPurchaseOrderList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `PurchaseOrder` objects.{/_ BEGIN_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW8aORDHvwrySwTsJRSiIJ1OPKUhOpY0IVWjKrIGe1gcdu2NHwhQ9bufFhYILZA2QSmK7h1rj/9jj+dnj/lGGFgMlJ6QCgHGlJNWyIDkSKQ4hqRCLp1mAzDY0Rw1yRGIhQ8Rkgppow4wU10OylQvWyRHjItjpS3yM4EhN+ca+6RCvCixzjsp+gK5N9DCeEyNUEOA3nJIvj8bQ3IkFHKIPBXfJTI3zKdz/+Ez6TaW5EgMxtiBVi4YXOGDQ7NNcyjVY4g8wHwPzHxmIUYoLYR5Dha8J0p5PZfa1JasgWOIFnkDLDTQIrNCydTrwNrYVDxvgGFcmM2gwHHkofRAW8FCNF6peHp8clrKpyoz7//QIPz7KHv/0FO9kywNWEjBZdtdNva7rUf/Pvjg1z+M/elNyZ8Op/798K8sDSDb7rZLne5tsdOoHnU2GNDr8pfTz7VG7cLPsmmz6N/fPvpddtTusmFv2ipefGSPF+efxv709rjduCn63Wbp4qM66tSvTLt+pdrVQoHkiJAWAw3JMg2pfP32tGGRM4JpZVTfZhoTCZFgJlMslzI1Z4REYzJ1lFZDuC7WiiDAJ0Gb7xjEIh+7XihYwRQLEMFUSXg0BaYiL0IuwFs6owtntFgu0YUzmjqjdRUqTU/HzbNy+aQQz9J/FnWh5HLjSIU0/fOqX2821vOpOgIRQi9EUrHa4U8AkMrXdYj+FRJbFqNCmqQkt6Wfo2FaxDPv22yExWhrZ5y2UpXCu9nswYG0wk62GmiMlEUq+FYLC2MK0c7VWGUhpKGQ+KylBjYUMqDp2STQbLV1Ulgaa8GQ5AhTUQwyWQdzWqNkk/lOihHqCQXONZpEShjjkHKwOD9pkCZhTHrWI0ali3qzwKURYBrBIqdgV20Jl+tfNAY7WDXNwpb+djFfCRgL1iVe56FZRmXz+kcoudLkLtF6cEIjvwQNEVrUSY7dfc/9InBnQoJkmAHJM50YF8DuBbnLEGxf6WgDeqlbSlc+35C1VWq8nLU945QmzrM2i3Q6CDZfxNuyKUVOSBY6I0ZIVZ9aGL8GyV/Db4nayyjy0V47kc791ZD4aE2iRs2DA407KPCr3dbn5lvdN88x8mSTNxvgmA1ABkj1fB83W80qS+rcjpR9x6TBeHd03uCaXNX5NEYtFN+G8o/7uYlbOVKC4e5bNcJIzZJ4klTS1KKO3uNd+8kJNqwpNTSZjkwCsJ/jYiWbnx8Y9KZ/XK6dHB3MwfHqQvXtj4RdFL9BobqLsf+BWgB1DQFmWtICY3Y/LCWKNFWk13OaRiPhmxM4oGJ0TxftgSF3SLfwn36LplC/N/hfhvkX1Go/eCdK+QOrqt/ZvzgHUL/+FlC/8dJcgLWPB+deqbn7/h9xWNv4qBcAAA==" /></Footer>{/_ END_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.purchaseOrders.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListPurchaseOrdersRequest`

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

Creates a `PurchaseOrder` object with the given values.{/_ BEGIN_ACCOUNTING_PURCHASEORDER_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE8WUbW8aORDHv0rkl4jdLaE0CtKpIoFriMSSJqRqVFXWYE8Wh7W9+AECVb/7ybtbCLmkvehyvTernfH47xn7N/ONMHCYabMmXQKMaa+cUBlpEqk55qRLLrxhM7A4NhwNaRIoRAoSSZeM0GR40NtuOuhdDEmTWF8U2jjkfwrMuT0zeEu6JJEhOvJK3ArkycwImzC9RAMZJtst0W25hzRJLtQceS3+M5EqMKpzf2SGZetIkxRgrZsZ7bPZJS482uc050qvcuQZRlOwVWY5SlQO8oiDg+SBUmQqqad8oQaOOTrkfXDQR4fMCa3qU2fOFbabJDPMi7jMIOa4TFAlYJxgOdqk0z4+PDruRLVKefp7muV/tBp3i6meHjVoxnIKvjGasPt0Mlyld9nb9PTtfbq57qSb+Sa9m79p0Awao8moM57ctMf9Xmv8RAC9evf5+NNJ/+Q8bbDNoJ3e3azSCWuNJmw+3Qzb5x/Y6vzs4326uTkc9a/b6WTQOf+gW+PTSzs6vdSjXhyTJhHKYWYglGlJ98u3h46amRTdlRcO96OHEjJ8cCvVk0AhosJPc8Fi245BwkYrWNmYaZlI5AKSFJ0NatQuPBiMi5Lc8sKEVts7D+f2JsNPg30QeksQOUxzJF1nPP6NXNL9QpiWBag1aRLmjUHFwi/esxmoDKmBqhJrPVJeGblQSIVDGQiQKHV56DogRB0aGcy6pagOPUWVl9OytQxK7ZAyg+CQU3A737Yvalvw3b8v+C7eOnA+BDrtIKcgQxsE0wCbC5XRut8FhqAlKq4N+Rq0Fl4Y5BdgQKJDU5X/fNF7de6MeC/hPYuyHOyj6CrL0rFN9R8o/Mj7e/MpyD56weYnWs/twVgF7dehbScbVbzR69vDdydHrf+Cu93FM2+dliUg/wN4vwm0B89Di7Bi99+sdsb1XH8xcr8MeQalK8jwYKgcMOZeh6KgSGtFelVxtFyK1B7BTzgapGe99HTQf6UJxjEXSzTrH+y8HKzfQNKvmHlcxHMTKXz3PQsPygm3/leT60nOXzK7vn7/Cx1Nwbl+CQAA" /></Footer>{/_ END_ACCOUNTING_PURCHASEORDER_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `PurchaseOrder` object with the given `id`.{/_ BEGIN_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW8aORDHvwrySwTsJRSiIJ1OPKUhOpY0IVWjKrIGe1gcdu2NHwhQ9bufFhYILZA2QSmK7h1rj/9jj+dnj/lGGFgMlJ6QCgHGlJNWyIDkSKQ4hqRCLp1mAzDY0Rw1yRGIhQ8Rkgppow4wU10OylQvWyRHjItjpS3yM4EhN+ca+6RCvCixzjsp+gK5N9DCeEyNUEOA3nJIvj8bQ3IkFHKIPBXfJTI3zKdz/+Ez6TaW5EgMxtiBVi4YXOGDQ7NNcyjVY4g8wHwPzHxmIUYoLYR5Dha8J0p5PZfa1JasgWOIFnkDLDTQIrNCydTrwNrYVDxvgGFcmM2gwHHkofRAW8FCNF6peHp8clrKpyoz7//QIPz7KHv/0FO9kywNWEjBZdtdNva7rUf/Pvjg1z+M/elNyZ8Op/798K8sDSDb7rZLne5tsdOoHnU2GNDr8pfTz7VG7cLPsmmz6N/fPvpddtTusmFv2ipefGSPF+efxv709rjduCn63Wbp4qM66tSvTLt+pdrVQoHkiJAWAw3JMg2pfP32tGGRM4JpZVTfZhoTCZFgJlMslzI1Z4REYzJ1lFZDuC7WiiDAJ0Gb7xjEIh+7XihYwRQLEMFUSXg0BaYiL0IuwFs6owtntFgu0YUzmjqjdRUqTU/HzbNy+aQQz9J/FnWh5HLjSIU0/fOqX2821vOpOgIRQi9EUrHa4U8AkMrXdYj+FRJbFqNCmqQkt6Wfo2FaxDPv22yExWhrZ5y2UpXCu9nswYG0wk62GmiMlEUq+FYLC2MK0c7VWGUhpKGQ+KylBjYUMqDp2STQbLV1Ulgaa8GQ5AhTUQwyWQdzWqNkk/lOihHqCQXONZpEShjjkHKwOD9pkCZhTHrWI0ali3qzwKURYBrBIqdgV20Jl+tfNAY7WDXNwpb+djFfCRgL1iVe56FZRmXz+kcoudLkLtF6cEIjvwQNEVrUSY7dfc/9InBnQoJkmAHJM50YF8DuBbnLEGxf6WgDeqlbSlc+35C1VWq8nLU945QmzrM2i3Q6CDZfxNuyKUVOSBY6I0ZIVZ9aGL8GyV/Db4nayyjy0V47kc791ZD4aE2iRs2DA407KPCr3dbn5lvdN88x8mSTNxvgmA1ABkj1fB83W80qS+rcjpR9x6TBeHd03uCaXNX5NEYtFN+G8o/7uYlbOVKC4e5bNcJIzZJ4klTS1KKO3uNd+8kJNqwpNTSZjkwCsJ/jYiWbnx8Y9KZ/XK6dHB3MwfHqQvXtj4RdFL9BobqLsf+BWgB1DQFmWtICY3Y/LCWKNFWk13OaRiPhmxM4oGJ0TxftgSF3SLfwn36LplC/N/hfhvkX1Go/eCdK+QOrqt/ZvzgHUL/+FlC/8dJcgLWPB+deqbn7/h9xWNv4qBcAAA==" /></Footer>{/_ END_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrievePurchaseOrdersRequest`

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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW8aORDHvwrySwTsJRSiIJ1OPKUhOpY0IVWjKrIGe1gcdu2NHwhQ9bufFhYILZA2QSmK7h1rj/9jj+dnj/lGGFgMlJ6QCgHGlJNWyIDkSKQ4hqRCLp1mAzDY0Rw1yRGIhQ8Rkgppow4wU10OylQvWyRHjItjpS3yM4EhN+ca+6RCvCixzjsp+gK5N9DCeEyNUEOA3nJIvj8bQ3IkFHKIPBXfJTI3zKdz/+Ez6TaW5EgMxtiBVi4YXOGDQ7NNcyjVY4g8wHwPzHxmIUYoLYR5Dha8J0p5PZfa1JasgWOIFnkDLDTQIrNCydTrwNrYVDxvgGFcmM2gwHHkofRAW8FCNF6peHp8clrKpyoz7//QIPz7KHv/0FO9kywNWEjBZdtdNva7rUf/Pvjg1z+M/elNyZ8Op/798K8sDSDb7rZLne5tsdOoHnU2GNDr8pfTz7VG7cLPsmmz6N/fPvpddtTusmFv2ipefGSPF+efxv709rjduCn63Wbp4qM66tSvTLt+pdrVQoHkiJAWAw3JMg2pfP32tGGRM4JpZVTfZhoTCZFgJlMslzI1Z4REYzJ1lFZDuC7WiiDAJ0Gb7xjEIh+7XihYwRQLEMFUSXg0BaYiL0IuwFs6owtntFgu0YUzmjqjdRUqTU/HzbNy+aQQz9J/FnWh5HLjSIU0/fOqX2821vOpOgIRQi9EUrHa4U8AkMrXdYj+FRJbFqNCmqQkt6Wfo2FaxDPv22yExWhrZ5y2UpXCu9nswYG0wk62GmiMlEUq+FYLC2MK0c7VWGUhpKGQ+KylBjYUMqDp2STQbLV1Ulgaa8GQ5AhTUQwyWQdzWqNkk/lOihHqCQXONZpEShjjkHKwOD9pkCZhTHrWI0ali3qzwKURYBrBIqdgV20Jl+tfNAY7WDXNwpb+djFfCRgL1iVe56FZRmXz+kcoudLkLtF6cEIjvwQNEVrUSY7dfc/9InBnQoJkmAHJM50YF8DuBbnLEGxf6WgDeqlbSlc+35C1VWq8nLU945QmzrM2i3Q6CDZfxNuyKUVOSBY6I0ZIVZ9aGL8GyV/Db4nayyjy0V47kc791ZD4aE2iRs2DA407KPCr3dbn5lvdN88x8mSTNxvgmA1ABkj1fB83W80qS+rcjpR9x6TBeHd03uCaXNX5NEYtFN+G8o/7uYlbOVKC4e5bNcJIzZJ4klTS1KKO3uNd+8kJNqwpNTSZjkwCsJ/jYiWbnx8Y9KZ/XK6dHB3MwfHqQvXtj4RdFL9BobqLsf+BWgB1DQFmWtICY3Y/LCWKNFWk13OaRiPhmxM4oGJ0TxftgSF3SLfwn36LplC/N/hfhvkX1Go/eCdK+QOrqt/ZvzgHUL/+FlC/8dJcgLWPB+deqbn7/h9xWNv4qBcAAA==" /></Footer>{/_ END_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.purchaseOrders.lineItemsRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LineItemsRemoteFieldClassesListPurchaseOrdersRequest`

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

Returns metadata for `PurchaseOrder` POSTs.{/_ BEGIN_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW8aORDHvwrySwTsJRSiIJ1OPKUhOpY0IVWjKrIGe1gcdu2NHwhQ9bufFhYILZA2QSmK7h1rj/9jj+dnj/lGGFgMlJ6QCgHGlJNWyIDkSKQ4hqRCLp1mAzDY0Rw1yRGIhQ8Rkgppow4wU10OylQvWyRHjItjpS3yM4EhN+ca+6RCvCixzjsp+gK5N9DCeEyNUEOA3nJIvj8bQ3IkFHKIPBXfJTI3zKdz/+Ez6TaW5EgMxtiBVi4YXOGDQ7NNcyjVY4g8wHwPzHxmIUYoLYR5Dha8J0p5PZfa1JasgWOIFnkDLDTQIrNCydTrwNrYVDxvgGFcmM2gwHHkofRAW8FCNF6peHp8clrKpyoz7//QIPz7KHv/0FO9kywNWEjBZdtdNva7rUf/Pvjg1z+M/elNyZ8Op/798K8sDSDb7rZLne5tsdOoHnU2GNDr8pfTz7VG7cLPsmmz6N/fPvpddtTusmFv2ipefGSPF+efxv709rjduCn63Wbp4qM66tSvTLt+pdrVQoHkiJAWAw3JMg2pfP32tGGRM4JpZVTfZhoTCZFgJlMslzI1Z4REYzJ1lFZDuC7WiiDAJ0Gb7xjEIh+7XihYwRQLEMFUSXg0BaYiL0IuwFs6owtntFgu0YUzmjqjdRUqTU/HzbNy+aQQz9J/FnWh5HLjSIU0/fOqX2821vOpOgIRQi9EUrHa4U8AkMrXdYj+FRJbFqNCmqQkt6Wfo2FaxDPv22yExWhrZ5y2UpXCu9nswYG0wk62GmiMlEUq+FYLC2MK0c7VWGUhpKGQ+KylBjYUMqDp2STQbLV1Ulgaa8GQ5AhTUQwyWQdzWqNkk/lOihHqCQXONZpEShjjkHKwOD9pkCZhTHrWI0ali3qzwKURYBrBIqdgV20Jl+tfNAY7WDXNwpb+djFfCRgL1iVe56FZRmXz+kcoudLkLtF6cEIjvwQNEVrUSY7dfc/9InBnQoJkmAHJM50YF8DuBbnLEGxf6WgDeqlbSlc+35C1VWq8nLU945QmzrM2i3Q6CDZfxNuyKUVOSBY6I0ZIVZ9aGL8GyV/Db4nayyjy0V47kc791ZD4aE2iRs2DA407KPCr3dbn5lvdN88x8mSTNxvgmA1ABkj1fB83W80qS+rcjpR9x6TBeHd03uCaXNX5NEYtFN+G8o/7uYlbOVKC4e5bNcJIzZJ4klTS1KKO3uNd+8kJNqwpNTSZjkwCsJ/jYiWbnx8Y9KZ/XK6dHB3MwfHqQvXtj4RdFL9BobqLsf+BWgB1DQFmWtICY3Y/LCWKNFWk13OaRiPhmxM4oGJ0TxftgSF3SLfwn36LplC/N/hfhvkX1Go/eCdK+QOrqt/ZvzgHUL/+FlC/8dJcgLWPB+deqbn7/h9xWNv4qBcAAA==" /></Footer>{/_ END_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+2YbW8aORDHvwrySwTsJRSiIJ1OPKUhOpY0IVWjKrIGe1gcdu2NHwhQ9bufFhYILZA2QSmK7h1rj/9jj+dnj/lGGFgMlJ6QCgHGlJNWyIDkSKQ4hqRCLp1mAzDY0Rw1yRGIhQ8Rkgppow4wU10OylQvWyRHjItjpS3yM4EhN+ca+6RCvCixzjsp+gK5N9DCeEyNUEOA3nJIvj8bQ3IkFHKIPBXfJTI3zKdz/+Ez6TaW5EgMxtiBVi4YXOGDQ7NNcyjVY4g8wHwPzHxmIUYoLYR5Dha8J0p5PZfa1JasgWOIFnkDLDTQIrNCydTrwNrYVDxvgGFcmM2gwHHkofRAW8FCNF6peHp8clrKpyoz7//QIPz7KHv/0FO9kywNWEjBZdtdNva7rUf/Pvjg1z+M/elNyZ8Op/798K8sDSDb7rZLne5tsdOoHnU2GNDr8pfTz7VG7cLPsmmz6N/fPvpddtTusmFv2ipefGSPF+efxv709rjduCn63Wbp4qM66tSvTLt+pdrVQoHkiJAWAw3JMg2pfP32tGGRM4JpZVTfZhoTCZFgJlMslzI1Z4REYzJ1lFZDuC7WiiDAJ0Gb7xjEIh+7XihYwRQLEMFUSXg0BaYiL0IuwFs6owtntFgu0YUzmjqjdRUqTU/HzbNy+aQQz9J/FnWh5HLjSIU0/fOqX2821vOpOgIRQi9EUrHa4U8AkMrXdYj+FRJbFqNCmqQkt6Wfo2FaxDPv22yExWhrZ5y2UpXCu9nswYG0wk62GmiMlEUq+FYLC2MK0c7VWGUhpKGQ+KylBjYUMqDp2STQbLV1Ulgaa8GQ5AhTUQwyWQdzWqNkk/lOihHqCQXONZpEShjjkHKwOD9pkCZhTHrWI0ali3qzwKURYBrBIqdgV20Jl+tfNAY7WDXNwpb+djFfCRgL1iVe56FZRmXz+kcoudLkLtF6cEIjvwQNEVrUSY7dfc/9InBnQoJkmAHJM50YF8DuBbnLEGxf6WgDeqlbSlc+35C1VWq8nLU945QmzrM2i3Q6CDZfxNuyKUVOSBY6I0ZIVZ9aGL8GyV/Db4nayyjy0V47kc791ZD4aE2iRs2DA407KPCr3dbn5lvdN88x8mSTNxvgmA1ABkj1fB83W80qS+rcjpR9x6TBeHd03uCaXNX5NEYtFN+G8o/7uYlbOVKC4e5bNcJIzZJ4klTS1KKO3uNd+8kJNqwpNTSZjkwCsJ/jYiWbnx8Y9KZ/XK6dHB3MwfHqQvXtj4RdFL9BobqLsf+BWgB1DQFmWtICY3Y/LCWKNFWk13OaRiPhmxM4oGJ0TxftgSF3SLfwn36LplC/N/hfhvkX1Go/eCdK+QOrqt/ZvzgHUL/+FlC/8dJcgLWPB+deqbn7/h9xWNv4qBcAAA==" /></Footer>{/_ END_ACCOUNTING_PURCHASEORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.purchaseOrders.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListPurchaseOrdersRequest`

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

## Accounting SalesOrders

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">list</a>({ ...params }) -> Merge.PaginatedSalesOrderList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `SalesOrder` objects.{/_ BEGIN_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31UYW/TMBD9K8gfq7ZhlIIWCaGyDraJpmMriAlN1tW+pl4d27XPa1fEf0dOw1a6wqc4d+/enZ+f/ZMJICytf2A5AyFsNKRMydqsshI1y9k1aAxjL9GzNgOnCqiQ5WyEvsQXg8eKF4PLc9ZmITpnPaH8qFDLcOZxxnKWVQndiUbNFMps7lXIhL1HDyVmjyWdWV3D2kwrs0DZkP+PZAvsNIPv/aZ0INZmDkKgubexnF/hMmL4F+fC2JVGWWJnCmE7mcYKDYHuSCDIdpg6fkt1KJb2IFEjoRwCwRAJBSlrmq5zIhfyLJujdt16gq7E+wxNBp6U0Biyfu/41dvjfqdhqbu/56V+d9S6W07t9G2Ll0JziK3RRKyLyfmquCtfFyev18Xma7/YLDbF3eJli5fQGk1G/fHkpjceDo7GBwD8+s33428fhh8uipbYnPaKu5tVMRFHo4lYTDfnvYtPYnVx9mVdbG5ejYZfe8XktH/xyR6NT67C6OTKjgbdLmszZQhLD2mbgeU/fu4GGs8USNdREf6NPq+gxB1VtkcCTnVcnGoluqHXhQo21sAqdIWtsgqlgqxAComNh2UEj11X27YWTFnzqDnL2WlxNihOTod/W2FwD0rDVCPLyUd85l2W/9gx/2dlMDV3YB5Yez8hMQivXN3vWVIRVoejfBb1TGmdLMa1Mhie45YRDCk60NRjZQl5ssZ/k9wBzf+JUPJ5KqRfbptLv5ckWHMP9SnuZaJRy5gY0VC6UAeKo1HEnVcilT/JKaL3aMR2GchWdS2uxRxMiX/aKXNvlahFUiHEend1fE/K5gmpgRVW9s9rxmOsd+vgoVac0KeDaYQQHoFQcqCnWKPtATF31WvW0ckngjBXzilTcpDSY0ijBAKKaUGWQKevB7FImOYNVvXE5MEEqL3LTaym6Nlt6rGMyqO8BA8VEvrkz9tft79+Azegx9bCBQAA" /></Footer>{/_ END_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListSalesOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrders.RequestOptions`

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

Creates a `SalesOrder` object with the given values.{/_ BEGIN_ACCOUNTING_SALESORDER_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE41TaU8bMRD9K8gfoz0aQlqxUlWFJIVEyoZCqIoQWk3sYePEx+KDhCD+e7UHIbT0+OQZ+82bw2+eCAWHuTaPJCFAqfbKcZWTgEjNUJCEXIJAOzUMDQkIFDwFiSQhEzQ5HvR2EQe98xEJiPVFoY1D9pWjYPbM4B1JSCxLdOgVv+PI4oXhNqb6AQ3kGO9CwrsqhgREcLVC1pD/jaQGhk3hv7jls3UkIAVY6xZG+3xxgfce7Z84V0qvBbIcwznYujKBEpUDETJwEO8xhaameu+u7IGhQIdsAA4G6JA6rlWTdeFcYZM4XqAooqqCiOFDjCoG4zgVaONu5/jw03E3bFiq7F+yXHxut5b3cz3/1MpyKjLwrcmMbtLZaJ0u86O0f7RJt1fddLvapsvVh1aWQ2sym3Sns+vOdNBrT98BZJcffxx/PxmcjNMW3Q476fJ6nc5oezKjq/l21Bmf0vX47Nsm3V4fTgZXnXQ27I5PdXvav7CT/oWe9KKIBIQrh7mBsk1Lkpun/YtGMym6S88dvkWPJOS4N5X6S6DgYeHngtPIdiKQsNUK1jaiWsYSGYc4RWdLtszeezAYFZVsq4FxrXYzJwkZpme9tD8cvJVC7wG4gLlAkjjj8TftkuSGUC0LUI8kINQbg4rWpnVaVvuAG7oAlWNmoG7LWo8Zqx3BFZZKkCj1y0Jl3nNW1fFY6ipzaCQJiEGpHWbUIDhkGbjXuwre2L5gr+92wYuCqzwDxgzaMpN14HxpOO1AlKcBuioxzZbzqiBnQFmoppMpL+doyG2Z495zg+wcDEh0aOoJvDb7YkZNNfW6vvEyKsDavd6rM+IO5c75j+h/Qm6fb59/Ajdzb527BAAA" /></Footer>{/_ END_ACCOUNTING_SALESORDER_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.SalesOrderEndpointRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrders.RequestOptions`

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

Returns a `SalesOrder` object with the given `id`.{/_ BEGIN_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31UYW/TMBD9K8gfq7ZhlIIWCaGyDraJpmMriAlN1tW+pl4d27XPa1fEf0dOw1a6wqc4d+/enZ+f/ZMJICytf2A5AyFsNKRMydqsshI1y9k1aAxjL9GzNgOnCqiQ5WyEvsQXg8eKF4PLc9ZmITpnPaH8qFDLcOZxxnKWVQndiUbNFMps7lXIhL1HDyVmjyWdWV3D2kwrs0DZkP+PZAvsNIPv/aZ0INZmDkKgubexnF/hMmL4F+fC2JVGWWJnCmE7mcYKDYHuSCDIdpg6fkt1KJb2IFEjoRwCwRAJBSlrmq5zIhfyLJujdt16gq7E+wxNBp6U0Biyfu/41dvjfqdhqbu/56V+d9S6W07t9G2Ll0JziK3RRKyLyfmquCtfFyev18Xma7/YLDbF3eJli5fQGk1G/fHkpjceDo7GBwD8+s33428fhh8uipbYnPaKu5tVMRFHo4lYTDfnvYtPYnVx9mVdbG5ejYZfe8XktH/xyR6NT67C6OTKjgbdLmszZQhLD2mbgeU/fu4GGs8USNdREf6NPq+gxB1VtkcCTnVcnGoluqHXhQo21sAqdIWtsgqlgqxAComNh2UEj11X27YWTFnzqDnL2WlxNihOTod/W2FwD0rDVCPLyUd85l2W/9gx/2dlMDV3YB5Yez8hMQivXN3vWVIRVoejfBb1TGmdLMa1Mhie45YRDCk60NRjZQl5ssZ/k9wBzf+JUPJ5KqRfbptLv5ckWHMP9SnuZaJRy5gY0VC6UAeKo1HEnVcilT/JKaL3aMR2GchWdS2uxRxMiX/aKXNvlahFUiHEend1fE/K5gmpgRVW9s9rxmOsd+vgoVac0KeDaYQQHoFQcqCnWKPtATF31WvW0ckngjBXzilTcpDSY0ijBAKKaUGWQKevB7FImOYNVvXE5MEEqL3LTaym6Nlt6rGMyqO8BA8VEvrkz9tft79+Azegx9bCBQAA" /></Footer>{/_ END_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.retrieve("id");
```

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

**request:** `Merge.accounting.RetrieveSalesOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">linesRemoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31UYW/TMBD9K8gfq7ZhlIIWCaGyDraJpmMriAlN1tW+pl4d27XPa1fEf0dOw1a6wqc4d+/enZ+f/ZMJICytf2A5AyFsNKRMydqsshI1y9k1aAxjL9GzNgOnCqiQ5WyEvsQXg8eKF4PLc9ZmITpnPaH8qFDLcOZxxnKWVQndiUbNFMps7lXIhL1HDyVmjyWdWV3D2kwrs0DZkP+PZAvsNIPv/aZ0INZmDkKgubexnF/hMmL4F+fC2JVGWWJnCmE7mcYKDYHuSCDIdpg6fkt1KJb2IFEjoRwCwRAJBSlrmq5zIhfyLJujdt16gq7E+wxNBp6U0Biyfu/41dvjfqdhqbu/56V+d9S6W07t9G2Ll0JziK3RRKyLyfmquCtfFyev18Xma7/YLDbF3eJli5fQGk1G/fHkpjceDo7GBwD8+s33428fhh8uipbYnPaKu5tVMRFHo4lYTDfnvYtPYnVx9mVdbG5ejYZfe8XktH/xyR6NT67C6OTKjgbdLmszZQhLD2mbgeU/fu4GGs8USNdREf6NPq+gxB1VtkcCTnVcnGoluqHXhQo21sAqdIWtsgqlgqxAComNh2UEj11X27YWTFnzqDnL2WlxNihOTod/W2FwD0rDVCPLyUd85l2W/9gx/2dlMDV3YB5Yez8hMQivXN3vWVIRVoejfBb1TGmdLMa1Mhie45YRDCk60NRjZQl5ssZ/k9wBzf+JUPJ5KqRfbptLv5ckWHMP9SnuZaJRy5gY0VC6UAeKo1HEnVcilT/JKaL3aMR2GchWdS2uxRxMiX/aKXNvlahFUiHEend1fE/K5gmpgRVW9s9rxmOsd+vgoVac0KeDaYQQHoFQcqCnWKPtATF31WvW0ckngjBXzilTcpDSY0ijBAKKaUGWQKevB7FImOYNVvXE5MEEqL3LTaym6Nlt6rGMyqO8BA8VEvrkz9tft79+Azegx9bCBQAA" /></Footer>{/_ END_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.linesRemoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.LinesRemoteFieldClassesListSalesOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrders.RequestOptions`

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

Returns metadata for `SalesOrder` POSTs.{/_ BEGIN_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31UYW/TMBD9K8gfq7ZhlIIWCaGyDraJpmMriAlN1tW+pl4d27XPa1fEf0dOw1a6wqc4d+/enZ+f/ZMJICytf2A5AyFsNKRMydqsshI1y9k1aAxjL9GzNgOnCqiQ5WyEvsQXg8eKF4PLc9ZmITpnPaH8qFDLcOZxxnKWVQndiUbNFMps7lXIhL1HDyVmjyWdWV3D2kwrs0DZkP+PZAvsNIPv/aZ0INZmDkKgubexnF/hMmL4F+fC2JVGWWJnCmE7mcYKDYHuSCDIdpg6fkt1KJb2IFEjoRwCwRAJBSlrmq5zIhfyLJujdt16gq7E+wxNBp6U0Biyfu/41dvjfqdhqbu/56V+d9S6W07t9G2Ll0JziK3RRKyLyfmquCtfFyev18Xma7/YLDbF3eJli5fQGk1G/fHkpjceDo7GBwD8+s33428fhh8uipbYnPaKu5tVMRFHo4lYTDfnvYtPYnVx9mVdbG5ejYZfe8XktH/xyR6NT67C6OTKjgbdLmszZQhLD2mbgeU/fu4GGs8USNdREf6NPq+gxB1VtkcCTnVcnGoluqHXhQo21sAqdIWtsgqlgqxAComNh2UEj11X27YWTFnzqDnL2WlxNihOTod/W2FwD0rDVCPLyUd85l2W/9gx/2dlMDV3YB5Yez8hMQivXN3vWVIRVoejfBb1TGmdLMa1Mhie45YRDCk60NRjZQl5ssZ/k9wBzf+JUPJ5KqRfbptLv5ckWHMP9SnuZaJRy5gY0VC6UAeKo1HEnVcilT/JKaL3aMR2GchWdS2uxRxMiX/aKXNvlahFUiHEend1fE/K5gmpgRVW9s9rxmOsd+vgoVac0KeDaYQQHoFQcqCnWKPtATF31WvW0ckngjBXzilTcpDSY0ijBAKKaUGWQKevB7FImOYNVvXE5MEEqL3LTaym6Nlt6rGMyqO8BA8VEvrkz9tft79+Azegx9bCBQAA" /></Footer>{/_ END_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**requestOptions:** `SalesOrders.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.salesOrders.<a href="/src/api/resources/accounting/resources/salesOrders/client/Client.ts">remoteFieldClassesList</a>({ ...params }) -> Merge.PaginatedRemoteFieldClassList</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns a list of `RemoteFieldClass` objects.{/_ BEGIN_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE31UYW/TMBD9K8gfq7ZhlIIWCaGyDraJpmMriAlN1tW+pl4d27XPa1fEf0dOw1a6wqc4d+/enZ+f/ZMJICytf2A5AyFsNKRMydqsshI1y9k1aAxjL9GzNgOnCqiQ5WyEvsQXg8eKF4PLc9ZmITpnPaH8qFDLcOZxxnKWVQndiUbNFMps7lXIhL1HDyVmjyWdWV3D2kwrs0DZkP+PZAvsNIPv/aZ0INZmDkKgubexnF/hMmL4F+fC2JVGWWJnCmE7mcYKDYHuSCDIdpg6fkt1KJb2IFEjoRwCwRAJBSlrmq5zIhfyLJujdt16gq7E+wxNBp6U0Biyfu/41dvjfqdhqbu/56V+d9S6W07t9G2Ll0JziK3RRKyLyfmquCtfFyev18Xma7/YLDbF3eJli5fQGk1G/fHkpjceDo7GBwD8+s33428fhh8uipbYnPaKu5tVMRFHo4lYTDfnvYtPYnVx9mVdbG5ejYZfe8XktH/xyR6NT67C6OTKjgbdLmszZQhLD2mbgeU/fu4GGs8USNdREf6NPq+gxB1VtkcCTnVcnGoluqHXhQo21sAqdIWtsgqlgqxAComNh2UEj11X27YWTFnzqDnL2WlxNihOTod/W2FwD0rDVCPLyUd85l2W/9gx/2dlMDV3YB5Yez8hMQivXN3vWVIRVoejfBb1TGmdLMa1Mhie45YRDCk60NRjZQl5ssZ/k9wBzf+JUPJ5KqRfbptLv5ckWHMP9SnuZaJRy5gY0VC6UAeKo1HEnVcilT/JKaL3aMR2GchWdS2uxRxMiX/aKXNvlahFUiHEend1fE/K5gmpgRVW9s9rxmOsd+vgoVac0KeDaYQQHoFQcqCnWKPtATF31WvW0ckngjBXzilTcpDSY0ijBAKKaUGWQKevB7FImOYNVvXE5MEEqL3LTaym6Nlt6rGMyqO8BA8VEvrkz9tft79+Azegx9bCBQAA" /></Footer>{/_ END_ACCOUNTING_SALESORDER_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.salesOrders.remoteFieldClassesList({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.RemoteFieldClassesListSalesOrdersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SalesOrders.RequestOptions`

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
await client.accounting.syncStatus.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListSyncStatusRequest`

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

Returns a list of `TaxRate` objects.{/_ BEGIN_ACCOUNTING_TAXRATE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1X227bOBD9FYOPhmw1cdMgBoqFL0nj7FpOY6ebbBEIY2os05ZIhaQUx0X/fUFJvqhOtslWzsNin0QNR4fkmTMz1DdCQaMv5CNpEqBUxFwz7hOLhMLDgDTJCBZXoJFYBCLmQIikSfoofay01u6V1mWPWETFUSSkRu+MYeCpc4kT0iR2aLxrMWcThp49lUzZVCQowUd7/Ultkn5DLBIwPkcvB/8nkMyxlu/6h1czrTSxSARK6akUsT+9wvsY1XOYcy4eAvR8rI1BZTsLMESuIah5oMHeQqrJDOopmzmDhwFq9LqgoYsaqWaC56tOtY5U07anGET1dAd1DxMbuQ1SMxqgso8aJ4fHJ0e1HCVd/TfXDz4eVGf3YzE+rro+DVyIq/0RXTij3oMz8987nfcLZ3l95CznS2c2f1d1faj2R/2jwei2Mei2DgZPOLjDDzcnX9rd9oVTpcvThjO7fXBG9KA/ovPxste4+EQfLs4/L5zl7WG/e91wRqdHF5/EwaBzpfqdK9Fv1evEIoxr9CWYYyrS/Ppt25Br5kyimraFmKuify8EH7d4yYICEatF8ThgtK4adQhhKTg8qDoVoR2ix8De4LnD+xgkun8IX9Rnkb/inwm+Jp80yalz3nI6p92iJloJsADGAZKmljHuiJg0vxKcTAxKgq6GhSuzbODmWBaRGAqNrglR8c2NQE83JuYRi2ihIdiA3JnZ+5hJ9C5BQogapVnw7rv1FIN9wfFxzKRXDoGXAeiJkOEath7x8rnzUFHJohTnTdlyUA9jloaqBLIc1MqguSrV2l6oGsGiI8JIcOTaLJ2NXP0YmUMUZnPxFWy5Lou2At/PTa3If2o+jURhYisHNg1DS+AKUg4CxpFpDIlFqPAwfYQR8Md0FHMt05FEj2kuNG75F8WCiwi5Qtc4ZEUjEYxm7675whhnIpYcAmPbJGUUSzoFhUJ6KLfwXyU/BQEqN4VYb0Fp0LEZGBLWIVK7YrVIgtwTMjtmurtX6vdzzOg8rW+VAc+PV4KQN7C1TMru9eTwQ/v44H9Ja9ySbBo31+izqLcfJFpWZ3ixsF6poiH4WGnHyuhXVTqBiL2te1s5kjJruO1Oa9WHf09uksZw9t9qJymRPa6BUl0ibTniirokYY46hr1Qt1uMX1CCn9L3qi5LNEusa2NuXpeqtFhvIeeVeu3/a2lSdrn9ExKsnDEOnDIIyr1hGWz3fOItDt/pfYa2GLsy+X0lmTcoRTkUGqTaT+9cTmvU+3L6i+2JqazwxnynP7xBb3quBf3r9PxZHu7jxvR2t6O/xFRUSvybNHi7P5P7ydVV/X1BLPfT4O6+/w37hA389xEAAA==" /></Footer>{/_ END_ACCOUNTING_TAXRATE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.taxRates.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListTaxRatesRequest`

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

Returns a `TaxRate` object with the given `id`.{/_ BEGIN_ACCOUNTING_TAXRATE_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1X227bOBD9FYOPhmw1cdMgBoqFL0nj7FpOY6ebbBEIY2os05ZIhaQUx0X/fUFJvqhOtslWzsNin0QNR4fkmTMz1DdCQaMv5CNpEqBUxFwz7hOLhMLDgDTJCBZXoJFYBCLmQIikSfoofay01u6V1mWPWETFUSSkRu+MYeCpc4kT0iR2aLxrMWcThp49lUzZVCQowUd7/Ultkn5DLBIwPkcvB/8nkMyxlu/6h1czrTSxSARK6akUsT+9wvsY1XOYcy4eAvR8rI1BZTsLMESuIah5oMHeQqrJDOopmzmDhwFq9LqgoYsaqWaC56tOtY5U07anGET1dAd1DxMbuQ1SMxqgso8aJ4fHJ0e1HCVd/TfXDz4eVGf3YzE+rro+DVyIq/0RXTij3oMz8987nfcLZ3l95CznS2c2f1d1faj2R/2jwei2Mei2DgZPOLjDDzcnX9rd9oVTpcvThjO7fXBG9KA/ovPxste4+EQfLs4/L5zl7WG/e91wRqdHF5/EwaBzpfqdK9Fv1evEIoxr9CWYYyrS/Ppt25Br5kyimraFmKuify8EH7d4yYICEatF8ThgtK4adQhhKTg8qDoVoR2ix8De4LnD+xgkun8IX9Rnkb/inwm+Jp80yalz3nI6p92iJloJsADGAZKmljHuiJg0vxKcTAxKgq6GhSuzbODmWBaRGAqNrglR8c2NQE83JuYRi2ihIdiA3JnZ+5hJ9C5BQogapVnw7rv1FIN9wfFxzKRXDoGXAeiJkOEath7x8rnzUFHJohTnTdlyUA9jloaqBLIc1MqguSrV2l6oGsGiI8JIcOTaLJ2NXP0YmUMUZnPxFWy5Lou2At/PTa3If2o+jURhYisHNg1DS+AKUg4CxpFpDIlFqPAwfYQR8Md0FHMt05FEj2kuNG75F8WCiwi5Qtc4ZEUjEYxm7675whhnIpYcAmPbJGUUSzoFhUJ6KLfwXyU/BQEqN4VYb0Fp0LEZGBLWIVK7YrVIgtwTMjtmurtX6vdzzOg8rW+VAc+PV4KQN7C1TMru9eTwQ/v44H9Ja9ySbBo31+izqLcfJFpWZ3ixsF6poiH4WGnHyuhXVTqBiL2te1s5kjJruO1Oa9WHf09uksZw9t9qJymRPa6BUl0ibTniirokYY46hr1Qt1uMX1CCn9L3qi5LNEusa2NuXpeqtFhvIeeVeu3/a2lSdrn9ExKsnDEOnDIIyr1hGWz3fOItDt/pfYa2GLsy+X0lmTcoRTkUGqTaT+9cTmvU+3L6i+2JqazwxnynP7xBb3quBf3r9PxZHu7jxvR2t6O/xFRUSvybNHi7P5P7ydVV/X1BLPfT4O6+/w37hA389xEAAA==" /></Footer>{/_ END_ACCOUNTING_TAXRATE_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveTaxRatesRequest`

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

Returns a list of `TrackingCategory` objects.{/_ BEGIN_ACCOUNTING_TRACKINGCATEGORY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VYa2/iOBT9K8gfEZBtGaiKtFrx6pTuEjotnW13VFnGuQSDY6e2A4XR/PeVA+HRZtulmzKjnY/Y1+feHN9zuMlXRIkBX6o5qiFCqYyEYcJHBRRIDziqob4idMKE30ziCoiEzCUBoBrqgvIhV1+fy9UvO6iAdBSGUhnwzhhwT58rGKIacgIbXYwEGzLwnJFi2qFyCor44KyPFIfxGVRAnIkJeCvwl0CWgcVV+U9+2m1tUAGFRGszUjLyR1fwEIH+J8yJkDMOng/FAdHLyjgEIAzhRY8Y4mwhFdUSKm3NPoMHHAx4LWJICwxQw6RYZR0ZE+qa44yAh6W4gpIHUweEQ5RhlIN2KuXT45PTSnGFEmf/Dfv816P8+GEgByd57FOOSZTv9umj2+/M3LH/wW1+eHQXNxV3MVm448kveeyTfLffrfT6d+Veq37USwnA19Xb08+NVuPCzdNFu+yO72Zunx51+3QyWHTKFx/p7OL806O7uDvutm7Kbr9dufgoj3rNK91tXsluvVRCBcSEAV8R+5ga1b583V5Y9cyZAj1qSDnRu/GdgPiwxcvyUkjIimE04IyWdLlEArKQgsx0icrACcBjxNng4euHiCjAf0hflsahn/DPpFiTj2qo7Z7X3Wa7tdsT9SlhnAw4oJpRETxrYlT7stYKNvMQUAEJ+0QWRYEwmG4UoiCQBrC9r91fOCRmtFlinlWLISbSsWwGCQgDje5t2EPEFHiXRJEADChbxv23QhqvXUaV1HJocq25IAGjOleuVnKNSDMBWueaIIwiPBvS18lwkgyXqxWcJMOrZLgpuVT49LF9Vq2elELx/ndCZRASYS8hIGKOqQKPGSws25wJwMxAoNN25WAM1CQ7PgiwD2AUEZrEZaacZ2IqGU1DTnZ2UccyUoLwOH4dGpK5dZcnoWGk6IhowFJ5oFIyPAnYPb1d9nono3bNukvPmCCCQo4IL9cLIXGPTPr0khMzlCpI6ddVWow3OQ/SoKtb2IPzPSl2wVxHzEA2DLpgtEXDOjbXFyhy6/3O53aWCobHEIQGrMCeWatmdznuFAMBHkZ8yDiPtbQjsLd6QJJnByxZTLeLeG5Qz1xDfwdbWS1aI54/9ZZDOU68MwXhSZXw/Bx2dz9rtyIc9LJgnd1/7aeI0Uk8c+RaoCdGhtna1QYfQ2MsbqLZQawptZl+qCFni/iesBVmw/sGtri0OXwzPK42To4OYHc/sUX9TD6UTf9fEx+2RnouI2/r9TsbMdgcuNGsJ69Tv09vp+Xr8f9jOIoJ7AhDaHy5WdG1Qkwom06Zq0/IjzAs/Qt7STWRQ9lFujG8ZgFvUvn7KrmAIsEeIhsFwthPSWrf5vxTqolH5tnOEivQ7zdAvDCN7sp9fzXfgpLZsGWRiq++4mTM1DvKMmvBvS6rt4hoz+v+S45kLsNPhxbv+ZfDQ5r2f+BuP7+5//Y3kt5CFesXAAA=" /></Footer>{/_ END_ACCOUNTING_TRACKINGCATEGORY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.trackingCategories.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListTrackingCategoriesRequest`

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

Returns a `TrackingCategory` object with the given `id`.{/_ BEGIN_ACCOUNTING_TRACKINGCATEGORY_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+VYa2/iOBT9K8gfEZBtGaiKtFrx6pTuEjotnW13VFnGuQSDY6e2A4XR/PeVA+HRZtulmzKjnY/Y1+feHN9zuMlXRIkBX6o5qiFCqYyEYcJHBRRIDziqob4idMKE30ziCoiEzCUBoBrqgvIhV1+fy9UvO6iAdBSGUhnwzhhwT58rGKIacgIbXYwEGzLwnJFi2qFyCor44KyPFIfxGVRAnIkJeCvwl0CWgcVV+U9+2m1tUAGFRGszUjLyR1fwEIH+J8yJkDMOng/FAdHLyjgEIAzhRY8Y4mwhFdUSKm3NPoMHHAx4LWJICwxQw6RYZR0ZE+qa44yAh6W4gpIHUweEQ5RhlIN2KuXT45PTSnGFEmf/Dfv816P8+GEgByd57FOOSZTv9umj2+/M3LH/wW1+eHQXNxV3MVm448kveeyTfLffrfT6d+Veq37USwnA19Xb08+NVuPCzdNFu+yO72Zunx51+3QyWHTKFx/p7OL806O7uDvutm7Kbr9dufgoj3rNK91tXsluvVRCBcSEAV8R+5ga1b583V5Y9cyZAj1qSDnRu/GdgPiwxcvyUkjIimE04IyWdLlEArKQgsx0icrACcBjxNng4euHiCjAf0hflsahn/DPpFiTj2qo7Z7X3Wa7tdsT9SlhnAw4oJpRETxrYlT7stYKNvMQUAEJ+0QWRYEwmG4UoiCQBrC9r91fOCRmtFlinlWLISbSsWwGCQgDje5t2EPEFHiXRJEADChbxv23QhqvXUaV1HJocq25IAGjOleuVnKNSDMBWueaIIwiPBvS18lwkgyXqxWcJMOrZLgpuVT49LF9Vq2elELx/ndCZRASYS8hIGKOqQKPGSws25wJwMxAoNN25WAM1CQ7PgiwD2AUEZrEZaacZ2IqGU1DTnZ2UccyUoLwOH4dGpK5dZcnoWGk6IhowFJ5oFIyPAnYPb1d9nono3bNukvPmCCCQo4IL9cLIXGPTPr0khMzlCpI6ddVWow3OQ/SoKtb2IPzPSl2wVxHzEA2DLpgtEXDOjbXFyhy6/3O53aWCobHEIQGrMCeWatmdznuFAMBHkZ8yDiPtbQjsLd6QJJnByxZTLeLeG5Qz1xDfwdbWS1aI54/9ZZDOU68MwXhSZXw/Bx2dz9rtyIc9LJgnd1/7aeI0Uk8c+RaoCdGhtna1QYfQ2MsbqLZQawptZl+qCFni/iesBVmw/sGtri0OXwzPK42To4OYHc/sUX9TD6UTf9fEx+2RnouI2/r9TsbMdgcuNGsJ69Tv09vp+Xr8f9jOIoJ7AhDaHy5WdG1Qkwom06Zq0/IjzAs/Qt7STWRQ9lFujG8ZgFvUvn7KrmAIsEeIhsFwthPSWrf5vxTqolH5tnOEivQ7zdAvDCN7sp9fzXfgpLZsGWRiq++4mTM1DvKMmvBvS6rt4hoz+v+S45kLsNPhxbv+ZfDQ5r2f+BuP7+5//Y3kt5CFesXAAA=" /></Footer>{/_ END_ACCOUNTING_TRACKINGCATEGORY_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveTrackingCategoriesRequest`

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

Returns a list of `Transaction` objects.{/_ BEGIN_ACCOUNTING_TRANSACTION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Wa2/aPBTHvwryS5TLKAPUSNPErSvVCFubTqumyjo4h2Bw7NR2gDLtu08JKW23rs9FVNP20o7P/1x+x8f5ShhYTJS+JQEBxlQuLZcJcUiqYhQkIJEGaYBZriRxCGQ8hBRJQMaoE6x19ya17ocRcYjJs0xpi/EJRxGbU40zEhA/LU67ueQzjrE/19z4TK1QQ4L+3sSdlTbEIYLLJcaV+HMiu4NuFfkPy+KzscQhGRhj51rlyfwcb3I0v9JcSrUWGCfoTsHsIhOYorQg3Bgs+A+UXL2TemqvyCFGgRbjAVgYoMWygpXXubWZCXx/jiLzygi8GFc+Sh+05Uyg8VvN46POccutVErvb2ki3jTqi5upmnbqNGGCQl4fR2wTRqN1uEheh/3Xm3B72Qq3y224WL6q0wTq42jcmkRXzcmg25g8cYBetD8ff+oNemdhnW2HzXBxtQ4j1hhHbDndjppn79j67PTjJtxeHY0Hl80wGrbO3qnGpH9uxv1zNe56HnEIlxYTDUWahgRfvj7cqHrmRKOZ95RamsfnRykk+KAuOyiQcTfLp4IzzzQ9SGGrJKyNx1Tqpxhz8O/16MVNDhrpe5Uob5Eld/XnSu6LTwIyDE+7YX84eNwT3RVwAVOBJLA6x5+amARfCMu1Rsluy8CZyA1fIVUzamFDHCLzdIqaOERjqizSgtbjFc3Azu+3eEwcYpUFQSEterVY3t+0wgR/2LK3GZLrQuEm5xrjD6AhRYu6iO/6m/NUwcecaWXUzNYGtxJSzkyt2W7VernhEo2p9VFaDeIwNPbO6J0z2my36J0zWjmjfSWUpseb4Um73fEy+QKwVJqBLFgxJS2woroPAAoukXKLqTkgOrbkMqHVNOVoXgZoiPYi56XUAYiFaE2hRk15e55hEXaj0afhfydRTeLi5di/FDRDzVVc0nmWE27YHGSCVEOV8U8X7w9G+THnbFkOr9pEFnkchum9rLujSi9nR+1ep/GidP8Vv0ewyv8Lmuclgz+L3AUkWBsVCZcZHwBaoUgrxbunbLXioenA7xiQfyu4z6jVYYAVSu4/Ts3/D+hZAr/vJ+P623cYCbDjMQwAAA==" /></Footer>{/_ END_ACCOUNTING_TRANSACTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.transactions.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListTransactionsRequest`

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

Returns a `Transaction` object with the given `id`.{/_ BEGIN_ACCOUNTING_TRANSACTION_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE92Wa2/aPBTHvwryS5TLKAPUSNPErSvVCFubTqumyjo4h2Bw7NR2gDLtu08JKW23rs9FVNP20o7P/1x+x8f5ShhYTJS+JQEBxlQuLZcJcUiqYhQkIJEGaYBZriRxCGQ8hBRJQMaoE6x19ya17ocRcYjJs0xpi/EJRxGbU40zEhA/LU67ueQzjrE/19z4TK1QQ4L+3sSdlTbEIYLLJcaV+HMiu4NuFfkPy+KzscQhGRhj51rlyfwcb3I0v9JcSrUWGCfoTsHsIhOYorQg3Bgs+A+UXL2TemqvyCFGgRbjAVgYoMWygpXXubWZCXx/jiLzygi8GFc+Sh+05Uyg8VvN46POccutVErvb2ki3jTqi5upmnbqNGGCQl4fR2wTRqN1uEheh/3Xm3B72Qq3y224WL6q0wTq42jcmkRXzcmg25g8cYBetD8ff+oNemdhnW2HzXBxtQ4j1hhHbDndjppn79j67PTjJtxeHY0Hl80wGrbO3qnGpH9uxv1zNe56HnEIlxYTDUWahgRfvj7cqHrmRKOZ95RamsfnRykk+KAuOyiQcTfLp4IzzzQ9SGGrJKyNx1Tqpxhz8O/16MVNDhrpe5Uob5Eld/XnSu6LTwIyDE+7YX84eNwT3RVwAVOBJLA6x5+amARfCMu1Rsluy8CZyA1fIVUzamFDHCLzdIqaOERjqizSgtbjFc3Azu+3eEwcYpUFQSEterVY3t+0wgR/2LK3GZLrQuEm5xrjD6AhRYu6iO/6m/NUwcecaWXUzNYGtxJSzkyt2W7VernhEo2p9VFaDeIwNPbO6J0z2my36J0zWjmjfSWUpseb4Um73fEy+QKwVJqBLFgxJS2woroPAAoukXKLqTkgOrbkMqHVNOVoXgZoiPYi56XUAYiFaE2hRk15e55hEXaj0afhfydRTeLi5di/FDRDzVVc0nmWE27YHGSCVEOV8U8X7w9G+THnbFkOr9pEFnkchum9rLujSi9nR+1ep/GidP8Vv0ewyv8Lmuclgz+L3AUkWBsVCZcZHwBaoUgrxbunbLXioenA7xiQfyu4z6jVYYAVSu4/Ts3/D+hZAr/vJ+P623cYCbDjMQwAAA==" /></Footer>{/_ END_ACCOUNTING_TRANSACTION_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveTransactionsRequest`

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

Returns a list of `VendorCredit` objects.{/_ BEGIN_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1WYW8aORD9K5E/Inb3CKVRkE4nEnIt0bG0CYkaVZE12MNi8NqO7QVC1f9+2l2SkGRJrid0vVb9uH7j55nneeP9Qhh4TLS9JW0CjOlMeaESUiep5ihJm1yi4toeW+TCkzoBI2JIkbRJH22Ce537PXudDz1SJy4zRluP/E+Bkrv3FsekTaI0jw4yJcYCeTSxwkVMz9FCgtH9lmBc7CF1IoWaIV+Tv0RSBgbr1J985rDLszbgnJ9YnSWTM7zJ0G3jnCm9kMgTDEbgyswkpqg8yICDh2iDKbAlVdVaXgNHiR55Fzx00SPzQqv1qRPvjWtH0QSlCYsMQo7zCFUE1gsm0UWt5uH+wWErWLMUp/9BE/l7oza9GenRQY0mTFLIav0hW8bD3iKeJm/i4zfLeHXRilezVTyd/VajCdT6w35rMLxqDrqdxqAigJ6//XR4edQ9Oo1rbHXSjKdXi3jIGv0hm41WvebpO7Y4ff9xGa+u9vvdi2Y8PGmdvtONwfGZ6x+f6X4nDEmdCOUxsZCX6Uj785fNhXXPxOjPM+HxcXQvhQQ3VCmvBIwITDaSgoWuGUIKK61g4UKm0yhFLiCK0bucjbqbDCyGpmjcQjCh1b3m+bmdYe/y5HEjdOYgJIwkkra3GT7rXNL+/Kj5O8bI27+EwhCMkQI5hTRvMlJ/JYxDUXB1kFBzLdh2fF6sUnbnv82o8pSy1asgplMD6rYSyqxFxSqxwvk0ywSvQhX66sIL1Fg9RVYJWUy1x1wNeAWmBvzkhZjqxDwsqX0udYlZYDOhErqedgJdVdhTsR8GIjVohebFACxv1WsqhSp4HnTekBWXbAIqwbuchGIyc2KOVI+ph2U55Ir9KktHaEmdPJaoQpFNAbz2IB+uorpEb0E5KGxw14dlkeQ6Z7vJhEX+ASyk6NHmPX/9tV7l3I+ZYLMjrWdub6DyxHdj4QfaoDQxvRjvvz06aPwy8xOIo2NWmEKD/9y0Wxz3L11V4aDtvvmRTHIOCe71lAdWqLkDf+SMdM1Iz0uHzOcidgfwUzpk+yNRGVP1UjwLfNa83/V1fcXHT9v/1+v8TXPkn7zEu54ou5kdn9Dq3cyMnCn4iX+Jf6AZ8YrZX3br/8FP3/V/9puNdf31b2ONIMnQEAAA" /></Footer>{/_ END_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accounting.vendorCredits.list({
    cursor: "cD0yMDIxLTAxLTA2KzAzJTNBMjQlM0E1My40MzQzMjYlMkIwMCUzQTAw",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Merge.accounting.ListVendorCreditsRequest`

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

Creates a `VendorCredit` object with the given values.{/_ BEGIN_ACCOUNTING_VENDORCREDIT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE81VYW8aORD9K8gfEbt7hNIoSFVFgGuIDtMmJEquqqzBHhYHr72xvUCo+t9PXiAhbYIaXXK6b97dmTcz783zficcPKbG3pEWAc5Nob3UKamRzAhUpEUuUQtjOxaF9KRGIJcUMiQtMkCbYqV9n1Npf+6TGnFFnhvrUfwpUQl3YnFCWiTJQnRUaDmRKJKplS7hZo4WUkzuU6JJmUNqREk9Q7EB3weyDow2rf/0GD670HUOzvmpNUU6PcPbAt1zmDNtFgpFitEY3LozhRlqDyoS4CHZQYrsGuqpd2EGgQo9ii546KJH7qXRm6pT73PXSpIpqjwuO4gFzhPUCVgvuUKXNBtHB4dHzWiDUlb/yFL1oV69uR2b8WGVpVwxKKqDEV/SUX9Bb9J3tPNuSVcXTbqarejN7I8qS6E6GA2aw9F1Y9ht14dPBLDz91dHl8fd41Na5ateg95cL+iI1wcjPhuv+o3TT3xxevJlSVfXB4PuRYOOes3TT6Y+7Jy5QefMDNpxTGpEao+phTCmI62v33dfbHaGoj8vpMfH0f0MUtxhZS0J5DLKi7GSPHaNGDJYGQ0LF3OTJRkKCQlF7wIac7cFWIzzcnFLwqTR95yHuu1R/7L3eBHac5AKxgpJy9sCf9lc0vq64wiWo5VGlA7IlUTBvGFKagxKc5PloO/CqbAWNQ9HXPIp6BSZhXLgbbAusjFaUiMWM+ORyQDqjQfFIAvVwqMFPgtVN+6UZaa3oB2UMzGxBp2X7iTfAtptIS2Kz2AhQ4+2HOChs7J8rNE/VNkm/6g9pdWXQvLZsTEzVxnqkP06oj3ARmvZ2MXk4P3xYf0t5HtCqv+ZQNuiz8uzPcRSPCfVOaRY6WsPnPvXUSkgsg0iO1/rNJ9L6g7hP9LpdywlNVeFk3NkZsI8LHdE3K/dS1XaYZTl4YuLc7gL/wWWoZ+W98J+N12hNa8jTUCK3u7Ge5Fl9gjwmy56qRL7Wf7bTE2lvFxeh+uAV8JtPfCXSc0e1nv0pE07ve7Lef+3+/5GdD+0dU/8tx//ABbvFUg1CgAA" /></Footer>{/_ END_ACCOUNTING_VENDORCREDIT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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

Returns a `VendorCredit` object with the given `id`.{/_ BEGIN_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1WYW8aORD9K5E/Inb3CKVRkE4nEnIt0bG0CYkaVZE12MNi8NqO7QVC1f9+2l2SkGRJrid0vVb9uH7j55nneeP9Qhh4TLS9JW0CjOlMeaESUiep5ihJm1yi4toeW+TCkzoBI2JIkbRJH22Ce537PXudDz1SJy4zRluP/E+Bkrv3FsekTaI0jw4yJcYCeTSxwkVMz9FCgtH9lmBc7CF1IoWaIV+Tv0RSBgbr1J985rDLszbgnJ9YnSWTM7zJ0G3jnCm9kMgTDEbgyswkpqg8yICDh2iDKbAlVdVaXgNHiR55Fzx00SPzQqv1qRPvjWtH0QSlCYsMQo7zCFUE1gsm0UWt5uH+wWErWLMUp/9BE/l7oza9GenRQY0mTFLIav0hW8bD3iKeJm/i4zfLeHXRilezVTyd/VajCdT6w35rMLxqDrqdxqAigJ6//XR4edQ9Oo1rbHXSjKdXi3jIGv0hm41WvebpO7Y4ff9xGa+u9vvdi2Y8PGmdvtONwfGZ6x+f6X4nDEmdCOUxsZCX6Uj785fNhXXPxOjPM+HxcXQvhQQ3VCmvBIwITDaSgoWuGUIKK61g4UKm0yhFLiCK0bucjbqbDCyGpmjcQjCh1b3m+bmdYe/y5HEjdOYgJIwkkra3GT7rXNL+/Kj5O8bI27+EwhCMkQI5hTRvMlJ/JYxDUXB1kFBzLdh2fF6sUnbnv82o8pSy1asgplMD6rYSyqxFxSqxwvk0ywSvQhX66sIL1Fg9RVYJWUy1x1wNeAWmBvzkhZjqxDwsqX0udYlZYDOhErqedgJdVdhTsR8GIjVohebFACxv1WsqhSp4HnTekBWXbAIqwbuchGIyc2KOVI+ph2U55Ir9KktHaEmdPJaoQpFNAbz2IB+uorpEb0E5KGxw14dlkeQ6Z7vJhEX+ASyk6NHmPX/9tV7l3I+ZYLMjrWdub6DyxHdj4QfaoDQxvRjvvz06aPwy8xOIo2NWmEKD/9y0Wxz3L11V4aDtvvmRTHIOCe71lAdWqLkDf+SMdM1Iz0uHzOcidgfwUzpk+yNRGVP1UjwLfNa83/V1fcXHT9v/1+v8TXPkn7zEu54ou5kdn9Dq3cyMnCn4iX+Jf6AZ8YrZX3br/8FP3/V/9puNdf31b2ONIMnQEAAA" /></Footer>{/_ END_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.RetrieveVendorCreditsRequest`

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

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">partialUpdate</a>(id, { ...params }) -> Merge.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates a `VendorCredit` object with the given `id`.{/_ BEGIN_ACCOUNTING_VENDORCREDIT_EDIT_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="EDIT" data="H4sIAAAAAAAAE71U204bMRD9FeTHaC8NISBWqqpcKCRSNlwWBELImngnGydee7G9SQji3ytvIhpaoGoFffPYM2fOnJnxI2FgMVP6gUQEGFOltFxmxCO5SlGQiFyhTJXuaEy5JR6BgseQI4nIAHWGO63nmJ3WaY94xJRFobTF9DtHkZoTjWMSkTB33n4p+ZhjGk40NyFTc9SQYfgc4o+rGOIRweUM0w34eyBrR39D/RfTPRvHugBj7ESrMpuc432J5i3MmVQLgWmG/gjMmpnAHKUF4adgIdxC8vUa6rU7V0OKAi2mXbDQRYvMciU3WSfWFiYKwwmKIqgYBCnOQ5QhaMuZQBM2G4e7B4dNf4NSZf9GM/G1Xpvej9TooEYzJiiUtUHClnHSW8TTbC/u7C3j1WUzXs1W8XT2pUYzqA2SQXOY3DSG3VZ9+IoDvdi/Prxqd9v9uMZWR414erOIE1YfJGw2WvUa/WO26J+cLePVze6ge9mIk6Nm/1jVh51zM+icq0ErCIhHuLSYaXBlGhLdPm5fbGYmRntRcosvvXs5ZLilyrolUHC/KEeCs8A0AshhpSQsTMBUHuaYcghjtMahUXNfgsagqAa3Eowr+ay5y9tKeldHLwehNQcuYCSQRFaX+Nvkkuh2ayNogZqrlHiEqbwA+eBOpdYomTvikk1AZkg1VNUJLtHNgCzzEWriEY25ski5Q7DKgqCQO2hnapAGKqo0XYfPq6Ujdy7uvuQa01PQkKNF7XjdPXmvqXtWcjZrKzUzO0PpGHyMzD9h/bXQ9HK8u98+qH+C4P8gqVuMlxYtwE7+qDmbubZuvj9eQf99J7b1pYV7MUEBD+7HoJvhoZXOjsUbbbtGrT6mUw7J/7RleKc3XDJRGj5HqsbUwvI/bMDd0w/5COivvAYAAA==" /></Footer>{/_ END_ACCOUNTING_VENDORCREDIT_EDIT_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.PatchedVendorCreditEndpointRequest`

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

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">applicationCreate</a>(id, { ...params }) -> Merge.VendorCreditResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new VendorCreditApplyLine to apply a vendor credit to an invoice{/_ BEGIN_ACCOUNTING_VENDORCREDIT_CREATE_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="POST" data="H4sIAAAAAAAAE81VYW8aORD9K8gfEbt7hNIoSFVFgGuIDtMmJEquqqzBHhYHr72xvUCo+t9PXiAhbYIaXXK6b97dmTcz783zficcPKbG3pEWAc5Nob3UKamRzAhUpEUuUQtjOxaF9KRGIJcUMiQtMkCbYqV9n1Npf+6TGnFFnhvrUfwpUQl3YnFCWiTJQnRUaDmRKJKplS7hZo4WUkzuU6JJmUNqREk9Q7EB3weyDow2rf/0GD670HUOzvmpNUU6PcPbAt1zmDNtFgpFitEY3LozhRlqDyoS4CHZQYrsGuqpd2EGgQo9ii546KJH7qXRm6pT73PXSpIpqjwuO4gFzhPUCVgvuUKXNBtHB4dHzWiDUlb/yFL1oV69uR2b8WGVpVwxKKqDEV/SUX9Bb9J3tPNuSVcXTbqarejN7I8qS6E6GA2aw9F1Y9ht14dPBLDz91dHl8fd41Na5ateg95cL+iI1wcjPhuv+o3TT3xxevJlSVfXB4PuRYOOes3TT6Y+7Jy5QefMDNpxTGpEao+phTCmI62v33dfbHaGoj8vpMfH0f0MUtxhZS0J5DLKi7GSPHaNGDJYGQ0LF3OTJRkKCQlF7wIac7cFWIzzcnFLwqTR95yHuu1R/7L3eBHac5AKxgpJy9sCf9lc0vq64wiWo5VGlA7IlUTBvGFKagxKc5PloO/CqbAWNQ9HXPIp6BSZhXLgbbAusjFaUiMWM+ORyQDqjQfFIAvVwqMFPgtVN+6UZaa3oB2UMzGxBp2X7iTfAtptIS2Kz2AhQ4+2HOChs7J8rNE/VNkm/6g9pdWXQvLZsTEzVxnqkP06oj3ARmvZ2MXk4P3xYf0t5HtCqv+ZQNuiz8uzPcRSPCfVOaRY6WsPnPvXUSkgsg0iO1/rNJ9L6g7hP9LpdywlNVeFk3NkZsI8LHdE3K/dS1XaYZTl4YuLc7gL/wWWoZ+W98J+N12hNa8jTUCK3u7Ge5Fl9gjwmy56qRL7Wf7bTE2lvFxeh+uAV8JtPfCXSc0e1nv0pE07ve7Lef+3+/5GdD+0dU/8tx//ABbvFUg1CgAA" /></Footer>{/_ END_ACCOUNTING_VENDORCREDIT_CREATE_SUPPORTED_FIELDS _ /}

</dd>
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
    appliedDate: new Date("2024-01-15T09:30:00.000Z"),
    appliedAmount: "applied_amount",
});
```

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

**requestOptions:** `VendorCredits.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accounting.vendorCredits.<a href="/src/api/resources/accounting/resources/vendorCredits/client/Client.ts">metaPatchRetrieve</a>(id, { ...params }) -> Merge.MetaResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns metadata for `VendorCredit` PATCHs.{/_ BEGIN_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1WYW8aORD9K5E/Inb3CKVRkE4nEnIt0bG0CYkaVZE12MNi8NqO7QVC1f9+2l2SkGRJrid0vVb9uH7j55nneeP9Qhh4TLS9JW0CjOlMeaESUiep5ihJm1yi4toeW+TCkzoBI2JIkbRJH22Ce537PXudDz1SJy4zRluP/E+Bkrv3FsekTaI0jw4yJcYCeTSxwkVMz9FCgtH9lmBc7CF1IoWaIV+Tv0RSBgbr1J985rDLszbgnJ9YnSWTM7zJ0G3jnCm9kMgTDEbgyswkpqg8yICDh2iDKbAlVdVaXgNHiR55Fzx00SPzQqv1qRPvjWtH0QSlCYsMQo7zCFUE1gsm0UWt5uH+wWErWLMUp/9BE/l7oza9GenRQY0mTFLIav0hW8bD3iKeJm/i4zfLeHXRilezVTyd/VajCdT6w35rMLxqDrqdxqAigJ6//XR4edQ9Oo1rbHXSjKdXi3jIGv0hm41WvebpO7Y4ff9xGa+u9vvdi2Y8PGmdvtONwfGZ6x+f6X4nDEmdCOUxsZCX6Uj785fNhXXPxOjPM+HxcXQvhQQ3VCmvBIwITDaSgoWuGUIKK61g4UKm0yhFLiCK0bucjbqbDCyGpmjcQjCh1b3m+bmdYe/y5HEjdOYgJIwkkra3GT7rXNL+/Kj5O8bI27+EwhCMkQI5hTRvMlJ/JYxDUXB1kFBzLdh2fF6sUnbnv82o8pSy1asgplMD6rYSyqxFxSqxwvk0ywSvQhX66sIL1Fg9RVYJWUy1x1wNeAWmBvzkhZjqxDwsqX0udYlZYDOhErqedgJdVdhTsR8GIjVohebFACxv1WsqhSp4HnTekBWXbAIqwbuchGIyc2KOVI+ph2U55Ir9KktHaEmdPJaoQpFNAbz2IB+uorpEb0E5KGxw14dlkeQ6Z7vJhEX+ASyk6NHmPX/9tV7l3I+ZYLMjrWdub6DyxHdj4QfaoDQxvRjvvz06aPwy8xOIo2NWmEKD/9y0Wxz3L11V4aDtvvmRTHIOCe71lAdWqLkDf+SMdM1Iz0uHzOcidgfwUzpk+yNRGVP1UjwLfNa83/V1fcXHT9v/1+v8TXPkn7zEu54ou5kdn9Dq3cyMnCn4iX+Jf6AZ8YrZX3br/8FP3/V/9puNdf31b2ONIMnQEAAA" /></Footer>{/_ END_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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

**request:** `Merge.accounting.MetaPatchRetrieveVendorCreditsRequest`

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

Returns metadata for `VendorCredit` POSTs.{/_ BEGIN_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}<Footer><MergeSupportedFieldsByIntegrationWidget requestType="GET" data="H4sIAAAAAAAAE+1WYW8aORD9K5E/Inb3CKVRkE4nEnIt0bG0CYkaVZE12MNi8NqO7QVC1f9+2l2SkGRJrid0vVb9uH7j55nneeP9Qhh4TLS9JW0CjOlMeaESUiep5ihJm1yi4toeW+TCkzoBI2JIkbRJH22Ce537PXudDz1SJy4zRluP/E+Bkrv3FsekTaI0jw4yJcYCeTSxwkVMz9FCgtH9lmBc7CF1IoWaIV+Tv0RSBgbr1J985rDLszbgnJ9YnSWTM7zJ0G3jnCm9kMgTDEbgyswkpqg8yICDh2iDKbAlVdVaXgNHiR55Fzx00SPzQqv1qRPvjWtH0QSlCYsMQo7zCFUE1gsm0UWt5uH+wWErWLMUp/9BE/l7oza9GenRQY0mTFLIav0hW8bD3iKeJm/i4zfLeHXRilezVTyd/VajCdT6w35rMLxqDrqdxqAigJ6//XR4edQ9Oo1rbHXSjKdXi3jIGv0hm41WvebpO7Y4ff9xGa+u9vvdi2Y8PGmdvtONwfGZ6x+f6X4nDEmdCOUxsZCX6Uj785fNhXXPxOjPM+HxcXQvhQQ3VCmvBIwITDaSgoWuGUIKK61g4UKm0yhFLiCK0bucjbqbDCyGpmjcQjCh1b3m+bmdYe/y5HEjdOYgJIwkkra3GT7rXNL+/Kj5O8bI27+EwhCMkQI5hTRvMlJ/JYxDUXB1kFBzLdh2fF6sUnbnv82o8pSy1asgplMD6rYSyqxFxSqxwvk0ywSvQhX66sIL1Fg9RVYJWUy1x1wNeAWmBvzkhZjqxDwsqX0udYlZYDOhErqedgJdVdhTsR8GIjVohebFACxv1WsqhSp4HnTekBWXbAIqwbuchGIyc2KOVI+ph2U55Ir9KktHaEmdPJaoQpFNAbz2IB+uorpEb0E5KGxw14dlkeQ6Z7vJhEX+ASyk6NHmPX/9tV7l3I+ZYLMjrWdub6DyxHdj4QfaoDQxvRjvvz06aPwy8xOIo2NWmEKD/9y0Wxz3L11V4aDtvvmRTHIOCe71lAdWqLkDf+SMdM1Iz0uHzOcidgfwUzpk+yNRGVP1UjwLfNa83/V1fcXHT9v/1+v8TXPkn7zEu54ou5kdn9Dq3cyMnCn4iX+Jf6AZ8YrZX3br/8FP3/V/9puNdf31b2ONIMnQEAAA" /></Footer>{/_ END_ACCOUNTING_VENDORCREDIT_FETCH_SUPPORTED_FIELDS _ /}

</dd>
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
