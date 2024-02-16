# Merge Node Library

[![npm shield](https://img.shields.io/npm/v/@mergeapi/merge-node-client)](https://www.npmjs.com/package/@mergeapi/merge-node-client)

The Merge Node.js library provides access to the Merge API from JavaScript/TypeScript.

## Documentation

API reference documentation is available [here](https://docs.merge.dev/).

## Installation

```
npm install --save @mergeapi/merge-node-client
# or
yarn add @mergeapi/merge-node-client
```

## Instantiation

```typescript
import { MergeClient } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});
```

## Categories

This SDK contains the ATS, HRIS, CRM, Ticketing, Accounting, and File Storage categories. Even if you do not plan on using more than one Merge API category right now, the SDK provides upgrade-flexibility in case you find new Merge API categories useful in the future.

Each category is namespaced:

```typescript

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});

merge.ats. // APIs specific to the ATS Category

merge.hris. // APIs specific to the HRIS Category
```

## Usage

Below are code snippets of how you can use the Node SDK.

### Create Link Token

```typescript
import { MergeClient, Merge } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  // `accountToken` may be omitted if necessary (e.g., during the initial Link session)
  accountToken: 'YOUR_ACCOUNT_TOKEN', 
});

const linkTokenResponse = await merge.ats.linkToken.create({
    endUserEmailAddress: "john.smith@gmail.com",
    endUserOrganizationName: "acme",
    endUserOriginId: "1234",
    categories: [Merge.ats.CategoriesEnum.Ats],
    linkExpiryMins: 30,
});

console.log("Created link token", linkTokenResponse.linkToken)
```

### Retrieve Account Token Using Public Token

```ts
import { MergeClient, Merge } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY'
});

const accountTokenResponse = await merge.ats.accountToken.retrieve(publicToken)

console.log("Retrieved account token", accountTokenResponse.accountToken)
```

### Get Employee

```typescript
import { MergeClient, Merge } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});


employee = await merge.hris.employees.retrieve("0958cbc6-6040-430a-848e-aafacbadf4ae")
```

### Get Candidate

```typescript
import { MergeClient, Merge } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});


candidate = await merge.ats.candidates.retrieve(
  "521b18c2-4d01-4297-b451-19858d07c133"
)
```

### Filter Candidate

```typescript
import { MergeClient, Merge } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});

const candidatesResponse = await merge.ats.candidates.list({
  created_after: "2030-01-01"
})

console.log(candidatesResponse.results)
```

### Get Contact

```typescript
import { MergeClient, Merge } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});

contact = await merge.accounting.contacts.retrieve(
  "c640b80b-fac9-409f-aa19-1f9221aec445"
)
```

### Create Ticket

```typescript
import { MergeClient, Merge, TicketStatusEnum } from '@mergeapi/merge-node-client';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});

await merge.ticketing.tickets.create({
  model: {
    name: "Please add more integrations",
    assignees: ["17a54124-287f-494d-965e-3c5b330c9a68"],
    creator: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    due_date: "2022-10-11T00:00:00Z",
    status: TicketStatusEnum.Open,
  },
})
```

### File Download

```typescript
import { MergeClient, Merge } from '@mergeapi/merge-node-client';
import * as fs from 'fs/promises';

const merge = new MergeClient({
  apiKey: 'YOUR_API_KEY',
  accountToken: 'YOUR_ACCOUNT_TOKEN',
});

const listResponse = await merge.filestorage.files.list({
  name: "<FILE_NAME>"
})

const file = response.results[0]
const localFilepath = `<LOCAL_FILE_PATH>/${file.name}`

const response = await merge.filestorage.files.downloadRetrieve(file.id)
const fileStream = fs.createWriteStream(localFilepath);
await stream.pipeline(response, fileStream);
```

### Pagination

The SDK may return paginated results. Endpoints that return paginated results will 
include a `next` and `prev` property on the response. To get the next page, you can 
pass in the value of `next` to the cursor property on the request. Similarly, to 
get the previous page, you can pass in the value of `prev` to the cursor property on 
the request. 

Below is an example of iterating over all pages:
```typescript

// response contains the first page
let response = merge.hris.employees.list({
  createdAfter: "2030-01-01",
})

// if there is a next page, load it by passing `next` to the cursor argument
while (response.next != null) {
    response = merge.hris.employees.list({
        cursor: response.next, 
        created_after: "2030-01-01",
    })
}
```
## Contributing

While we value open-source contributions to this SDK, this library is generated programmatically. Additions made directly
to this library would have to be moved over to our generation code, otherwise they would be overwritten upon the next
generated release. Feel free to open a PR as a proof of concept, but know that we will not be able to merge it as-is. 
We suggest opening an issue first to discuss with us!

On the other hand, contributions to the README are always very welcome!
