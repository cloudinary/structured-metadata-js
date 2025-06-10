# DeleteMetadataFieldDatasourceRequestBody

## Example Usage

```typescript
import { DeleteMetadataFieldDatasourceRequestBody } from "@cloudinary/structured-metadata/models/operations";

let value: DeleteMetadataFieldDatasourceRequestBody = {
  externalIds: [
    "<value 1>",
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `externalIds`                                        | *string*[]                                           | :heavy_check_mark:                                   | The external IDs of the datasource values to delete. |