# ListMetadataFieldsRequest

## Example Usage

```typescript
import { ListMetadataFieldsRequest } from "@cloudinary/structured-metadata/models/operations";

let value: ListMetadataFieldsRequest = {};
```

## Fields

| Field                                                                                                       | Type                                                                                                        | Required                                                                                                    | Description                                                                                                 |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `externalIds`                                                                                               | *string*[]                                                                                                  | :heavy_minus_sign:                                                                                          | The external IDs of the metadata fields to retrieve. if not provided, all metadata fields will be returned. |