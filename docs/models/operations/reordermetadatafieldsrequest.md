# ReorderMetadataFieldsRequest

## Example Usage

```typescript
import { ReorderMetadataFieldsRequest } from "@cloudinary/structured-metadata/models/operations";

let value: ReorderMetadataFieldsRequest = {
  orderBy: "label",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `orderBy`                                                    | [operations.OrderBy](../../models/operations/orderby.md)     | :heavy_check_mark:                                           | The field to order by.                                       |
| `direction`                                                  | [operations.Direction](../../models/operations/direction.md) | :heavy_minus_sign:                                           | The direction to order by.                                   |