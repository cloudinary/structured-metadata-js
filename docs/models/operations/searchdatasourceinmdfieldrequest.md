# SearchDatasourceInMDFieldRequest

## Example Usage

```typescript
import { SearchDatasourceInMDFieldRequest } from "@cloudinary/structured-metadata/models/operations";

let value: SearchDatasourceInMDFieldRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `externalId`                                                                                                       | *string*                                                                                                           | :heavy_check_mark:                                                                                                 | The external ID of the metadata field to search the datasource for.                                                |
| `maxResults`                                                                                                       | *number*                                                                                                           | :heavy_minus_sign:                                                                                                 | The maximum number of results to return.                                                                           |
| `term`                                                                                                             | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The term to search for. can be any substring of the value.                                                         |
| `exactMatch`                                                                                                       | *boolean*                                                                                                          | :heavy_minus_sign:                                                                                                 | Whether to search for an exact match.                                                                              |
| `requestBody`                                                                                                      | [operations.SearchDatasourceInMDFieldRequestBody](../../models/operations/searchdatasourceinmdfieldrequestbody.md) | :heavy_check_mark:                                                                                                 | N/A                                                                                                                |