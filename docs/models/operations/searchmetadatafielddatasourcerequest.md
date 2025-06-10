# SearchMetadataFieldDatasourceRequest

## Example Usage

```typescript
import { SearchMetadataFieldDatasourceRequest } from "@cloudinary/structured-metadata/models/operations";

let value: SearchMetadataFieldDatasourceRequest = {};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `term`                                                     | *string*                                                   | :heavy_minus_sign:                                         | The term to search for. Can be any substring of the value. |
| `maxResults`                                               | *number*                                                   | :heavy_minus_sign:                                         | The maximum number of results to return.                   |