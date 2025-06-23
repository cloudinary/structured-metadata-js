# MetadataFields
(*metadataFields*)

## Overview

Enables you to manage structured metadata fields.

### Available Operations

* [createMetadataField](#createmetadatafield) - Creates a new structured metadata field in your account
* [listMetadataFields](#listmetadatafields) - Lists all structured metadata fields defined in your Cloudinary product environment
* [getMetadataField](#getmetadatafield) - Retrieves the definition of a specific structured metadata field by its identifier (external_id)
* [updateMetadataField](#updatemetadatafield) - Updates the configuration of an existing metadata field
* [deleteMetadataField](#deletemetadatafield) - Deletes a structured metadata field definition from your account
* [searchMetadataFieldDatasource](#searchmetadatafielddatasource) - Search across all metadata field datasources
* [reorderMetadataFields](#reordermetadatafields) - Reorder all metadata fields
* [reorderMetadataField](#reordermetadatafield) - Change position of metadata field
* [updateMetadataFieldDatasource](#updatemetadatafielddatasource) - Updates the allowed values (the datasource) for a specified metadata field
* [deleteMetadataFieldDatasource](#deletemetadatafielddatasource) - Removes one or more allowed values from a metadata field's datasource
* [searchDatasourceInMDField](#searchdatasourceinmdfield) - Search datasource values in a metadata field
* [restoreMetadataFieldDatasource](#restoremetadatafielddatasource) - Restore datasource values

## createMetadataField

Creates a new metadata field with the specified properties and configuration.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.createMetadataField({
    type: "set",
    label: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsCreateMetadataField } from "@cloudinary/structured-metadata/funcs/metadataFieldsCreateMetadataField.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsCreateMetadataField(cloudinarySMD, {
    type: "set",
    label: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsCreateMetadataField failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                                                                                         | [components.Type](../../models/components/type.md)                                                                                                                             | :heavy_check_mark:                                                                                                                                                             | The type of the metadata field.                                                                                                                                                |
| `label`                                                                                                                                                                        | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The label of the metadata field.                                                                                                                                               |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The external ID of the metadata field.                                                                                                                                         |
| `mandatory`                                                                                                                                                                    | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether the metadata field is mandatory.                                                                                                                                       |
| `defaultValue`                                                                                                                                                                 | *components.DefaultValue*                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | The default value of the metadata field.                                                                                                                                       |
| `defaultDisabled`                                                                                                                                                              | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether the default value is disabled.                                                                                                                                         |
| `validation`                                                                                                                                                                   | [components.Validation](../../models/components/validation.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | The validation defined for the metadata field.                                                                                                                                 |
| `restrictions`                                                                                                                                                                 | [components.Restrictions](../../models/components/restrictions.md)                                                                                                             | :heavy_minus_sign:                                                                                                                                                             | The restrictions defined for the metadata field.                                                                                                                               |
| `datasource`                                                                                                                                                                   | [components.Datasource](../../models/components/datasource.md)                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | The datasource defined for the metadata field.                                                                                                                                 |
| `allowDynamicListValues`                                                                                                                                                       | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether the metadata field allows adding new options to the datasource dynamically.                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetadataField](../../models/components/metadatafield.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 403    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## listMetadataFields

Retrieves a list of all metadata fields in the product environment based on the provided filters.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.listMetadataFields();

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsListMetadataFields } from "@cloudinary/structured-metadata/funcs/metadataFieldsListMetadataFields.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsListMetadataFields(cloudinarySMD);
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsListMetadataFields failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalIds`                                                                                                                                                                  | *string*[]                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                             | The external IDs of the metadata fields to retrieve. if not provided, all metadata fields will be returned.                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListMetadataFieldsResponse](../../models/operations/listmetadatafieldsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 403         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## getMetadataField

Retrieves detailed information about the specified metadata field.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.getMetadataField("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsGetMetadataField } from "@cloudinary/structured-metadata/funcs/metadataFieldsGetMetadataField.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsGetMetadataField(cloudinarySMD, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsGetMetadataField failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to retrieve.                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetadataField](../../models/components/metadatafield.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 403, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateMetadataField

Updates the properties and configuration of the specified metadata field.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.updateMetadataField("<id>", {
    type: "date",
    label: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsUpdateMetadataField } from "@cloudinary/structured-metadata/funcs/metadataFieldsUpdateMetadataField.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsUpdateMetadataField(cloudinarySMD, "<id>", {
    type: "date",
    label: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsUpdateMetadataField failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to retrieve.                                                                                                                             |
| `metadataField`                                                                                                                                                                | [components.MetadataField](../../models/components/metadatafield.md)                                                                                                           | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetadataField](../../models/components/metadatafield.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## deleteMetadataField

Permanently deletes the specified metadata field and all its associated data.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.deleteMetadataField("<id>");

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsDeleteMetadataField } from "@cloudinary/structured-metadata/funcs/metadataFieldsDeleteMetadataField.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsDeleteMetadataField(cloudinarySMD, "<id>");
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsDeleteMetadataField failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to retrieve.                                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteMetadataFieldResponse](../../models/operations/deletemetadatafieldresponse.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |

## searchMetadataFieldDatasource

Performs a search across all metadata field datasources to find matching values.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.searchMetadataFieldDatasource({});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsSearchMetadataFieldDatasource } from "@cloudinary/structured-metadata/funcs/metadataFieldsSearchMetadataFieldDatasource.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsSearchMetadataFieldDatasource(cloudinarySMD, {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsSearchMetadataFieldDatasource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `term`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The term to search for. Can be any substring of the value.                                                                                                                     |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of results to return.                                                                                                                                       |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.SearchMetadataFieldDatasourceResponse[]](../../models/.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401              | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## reorderMetadataFields

Changes the display order of all metadata fields based on specified criteria.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.reorderMetadataFields({
    orderBy: "external_id",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsReorderMetadataFields } from "@cloudinary/structured-metadata/funcs/metadataFieldsReorderMetadataFields.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsReorderMetadataFields(cloudinarySMD, {
    orderBy: "external_id",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsReorderMetadataFields failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `orderBy`                                                                                                                                                                      | [operations.OrderBy](../../models/operations/orderby.md)                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The field to order by.                                                                                                                                                         |
| `direction`                                                                                                                                                                    | [operations.Direction](../../models/operations/direction.md)                                                                                                                   | :heavy_minus_sign:                                                                                                                                                             | The direction to order by.                                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReorderMetadataFieldsResponse](../../models/operations/reordermetadatafieldsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## reorderMetadataField

Changes the display position of a specific metadata field within the list.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.reorderMetadataField("<id>", {
    position: 33651,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsReorderMetadataField } from "@cloudinary/structured-metadata/funcs/metadataFieldsReorderMetadataField.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsReorderMetadataField(cloudinarySMD, "<id>", {
    position: 33651,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsReorderMetadataField failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to reorder.                                                                                                                              |
| `requestBody`                                                                                                                                                                  | [operations.ReorderMetadataFieldRequestBody](../../models/operations/reordermetadatafieldrequestbody.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ReorderMetadataFieldResponse](../../models/operations/reordermetadatafieldresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## updateMetadataFieldDatasource

Updates the values in a metadata field's datasource, including adding, modifying, or changing the order of values.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.updateMetadataFieldDatasource("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsUpdateMetadataFieldDatasource } from "@cloudinary/structured-metadata/funcs/metadataFieldsUpdateMetadataFieldDatasource.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsUpdateMetadataFieldDatasource(cloudinarySMD, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsUpdateMetadataFieldDatasource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to update the datasource for.                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.UpdateMetadataFieldDatasourceRequestBody](../../models/operations/updatemetadatafielddatasourcerequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateMetadataFieldDatasourceResponse](../../models/operations/updatemetadatafielddatasourceresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## deleteMetadataFieldDatasource

Removes specific values from a metadata field's datasource by their external IDs.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.deleteMetadataFieldDatasource("<id>", {
    externalIds: [
      "<value 1>",
      "<value 2>",
    ],
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsDeleteMetadataFieldDatasource } from "@cloudinary/structured-metadata/funcs/metadataFieldsDeleteMetadataFieldDatasource.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsDeleteMetadataFieldDatasource(cloudinarySMD, "<id>", {
    externalIds: [
      "<value 1>",
      "<value 2>",
    ],
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsDeleteMetadataFieldDatasource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to update the datasource for.                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.DeleteMetadataFieldDatasourceRequestBody](../../models/operations/deletemetadatafielddatasourcerequestbody.md)                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetadataFieldDatasourceValuesArray](../../models/components/metadatafielddatasourcevaluesarray.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 400, 401, 404    | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## searchDatasourceInMDField

Performs a search within a specific metadata field's datasource to find matching values, with support for exact or partial matches.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.searchDatasourceInMDField("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsSearchDatasourceInMDField } from "@cloudinary/structured-metadata/funcs/metadataFieldsSearchDatasourceInMDField.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsSearchDatasourceInMDField(cloudinarySMD, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsSearchDatasourceInMDField failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to search the datasource for.                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.SearchDatasourceInMDFieldRequestBody](../../models/operations/searchdatasourceinmdfieldrequestbody.md)                                                             | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `maxResults`                                                                                                                                                                   | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The maximum number of results to return.                                                                                                                                       |
| `term`                                                                                                                                                                         | *string*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | The term to search for. can be any substring of the value.                                                                                                                     |
| `exactMatch`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Whether to search for an exact match.                                                                                                                                          |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetadataFieldDatasourceValuesArray](../../models/components/metadatafielddatasourcevaluesarray.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ApiError  | 401, 404         | application/json |
| errors.SDKError  | 4XX, 5XX         | \*/\*            |

## restoreMetadataFieldDatasource

Restores datasource values that have been deleted.

### Example Usage

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.restoreMetadataFieldDatasource("<id>", {});

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { CloudinarySMDCore } from "@cloudinary/structured-metadata/core.js";
import { metadataFieldsRestoreMetadataFieldDatasource } from "@cloudinary/structured-metadata/funcs/metadataFieldsRestoreMetadataFieldDatasource.js";

// Use `CloudinarySMDCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const cloudinarySMD = new CloudinarySMDCore({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const res = await metadataFieldsRestoreMetadataFieldDatasource(cloudinarySMD, "<id>", {});
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("metadataFieldsRestoreMetadataFieldDatasource failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                                                                                   | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The external ID of the metadata field to restore the datasource values for.                                                                                                    |
| `requestBody`                                                                                                                                                                  | [operations.RestoreMetadataFieldDatasourceRequestBody](../../models/operations/restoremetadatafielddatasourcerequestbody.md)                                                   | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.MetadataFieldDatasourceValuesArray](../../models/components/metadatafielddatasourcevaluesarray.md)\>**

### Errors

| Error Type         | Status Code        | Content Type       |
| ------------------ | ------------------ | ------------------ |
| errors.ApiError    | 400, 401, 403, 404 | application/json   |
| errors.SDKError    | 4XX, 5XX           | \*/\*              |