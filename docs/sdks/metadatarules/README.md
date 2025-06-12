# MetadataRules
(*metadataRules*)

## Overview

Enables you to set up dependencies and relationships between structured metadata fields and options.

### Available Operations

* [createMetadataRule](#createmetadatarule) - Creates a new conditional metadata rule
* [listMetadataRules](#listmetadatarules) - Retrieves a list of all conditional metadata rules defined in your accountcloudinary
* [updateMetadataRule](#updatemetadatarule) - Updates an existing conditional metadata rule's definition
* [deleteMetadataRule](#deletemetadatarule) - Deletes a conditional metadata rule by its ID

## createMetadataRule

Creates a new metadata rule with the specified properties and configuration.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinarySMD.metadataRules.createMetadataRule({
    metadataFieldId: "smd-field-1",
    name: "My Rule",
    condition: {},
    result: {},
    state: "active",
    position: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataRulesCreateMetadataRule } from "@cloudinary/structured-metadata/funcs/metadataRulesCreateMetadataRule.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await metadataRulesCreateMetadataRule(cloudinarySMD, {
    metadataFieldId: "smd-field-1",
    name: "My Rule",
    condition: {},
    result: {},
    state: "active",
    position: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataRulesCreateMetadataRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `metadataFieldId`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The ID of the metadata field this rule applies to.                                                                                                                             |
| `name`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | A descriptive name for the metadata rule.                                                                                                                                      |
| `condition`                                                                                                                                                                    | [components.MetadataRuleCreateCondition](../../models/components/metadatarulecreatecondition.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The condition that triggers this rule. Ensure it adheres to the metadata rule condition schema.                                                                                |
| `result`                                                                                                                                                                       | [components.MetadataRuleCreateResult](../../models/components/metadatarulecreateresult.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The result to apply when the condition is met, should adhere to the metadata rule result schema.                                                                               |
| `state`                                                                                                                                                                        | [components.MetadataRuleCreateState](../../models/components/metadatarulecreatestate.md)                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The state of the rule.                                                                                                                                                         |
| `position`                                                                                                                                                                     | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The position/order of this rule relative to other rules.                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetadataRuleResponse](../../models/components/metadataruleresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listMetadataRules

Retrieves a list of all metadata rules in the cloud.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinarySMD.metadataRules.listMetadataRules({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataRulesListMetadataRules } from "@cloudinary/structured-metadata/funcs/metadataRulesListMetadataRules.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await metadataRulesListMetadataRules(cloudinarySMD, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataRulesListMetadataRules failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMetadataRulesResponse](../../models/operations/listmetadatarulesresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateMetadataRule

Updates the properties and configuration of an existing metadata rule.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinarySMD.metadataRules.updateMetadataRule("<id>", {
    metadataFieldId: "smd-field-1",
    name: "My Rule",
    condition: {},
    result: {},
    state: "active",
    position: 1,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataRulesUpdateMetadataRule } from "@cloudinary/structured-metadata/funcs/metadataRulesUpdateMetadataRule.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await metadataRulesUpdateMetadataRule(cloudinarySMD, "<id>", {
    metadataFieldId: "smd-field-1",
    name: "My Rule",
    condition: {},
    result: {},
    state: "active",
    position: 1,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataRulesUpdateMetadataRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    | Example                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the metadata rule.                                                                                                                                    |                                                                                                                                                                                |
| `metadataRuleUpdate`                                                                                                                                                           | [components.MetadataRuleUpdate](../../models/components/metadataruleupdate.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            | [object Object]                                                                                                                                                                |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |                                                                                                                                                                                |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |                                                                                                                                                                                |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |                                                                                                                                                                                |

### Response

**Promise\<[components.MetadataRuleResponse](../../models/components/metadataruleresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## deleteMetadataRule

Permanently deletes a metadata rule.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinarySMD.metadataRules.deleteMetadataRule("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataRulesDeleteMetadataRule } from "@cloudinary/structured-metadata/funcs/metadataRulesDeleteMetadataRule.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const res = await metadataRulesDeleteMetadataRule(cloudinarySMD, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataRulesDeleteMetadataRule failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The unique identifier of the metadata rule.                                                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMetadataRuleResponse](../../models/operations/deletemetadataruleresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |