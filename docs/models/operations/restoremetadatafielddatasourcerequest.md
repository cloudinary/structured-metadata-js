# RestoreMetadataFieldDatasourceRequest

## Example Usage

```typescript
import { RestoreMetadataFieldDatasourceRequest } from "@cloudinary/structured-metadata/models/operations";

let value: RestoreMetadataFieldDatasourceRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `externalId`                                                                                                                 | *string*                                                                                                                     | :heavy_check_mark:                                                                                                           | The external ID of the metadata field to restore the datasource values for.                                                  |
| `requestBody`                                                                                                                | [operations.RestoreMetadataFieldDatasourceRequestBody](../../models/operations/restoremetadatafielddatasourcerequestbody.md) | :heavy_check_mark:                                                                                                           | N/A                                                                                                                          |