# UpdateMetadataFieldRequest

## Example Usage

```typescript
import { UpdateMetadataFieldRequest } from "@cloudinary/structured-metadata/models/operations";

let value: UpdateMetadataFieldRequest = {
  externalId: "<id>",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `externalId`                                                         | *string*                                                             | :heavy_check_mark:                                                   | The external ID of the metadata field to retrieve.                   |
| `metadataField`                                                      | [components.MetadataField](../../models/components/metadatafield.md) | :heavy_check_mark:                                                   | N/A                                                                  |