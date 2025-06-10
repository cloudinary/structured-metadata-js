# Value

## Example Usage

```typescript
import { Value } from "@cloudinary/structured-metadata/models/operations";

let value: Value = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `externalId`                                         | *string*                                             | :heavy_minus_sign:                                   | The external ID of the datasource value.             |
| `value`                                              | *string*                                             | :heavy_minus_sign:                                   | The value of the option.                             |
| `position`                                           | *number*                                             | :heavy_minus_sign:                                   | The position of the option.                          |
| `state`                                              | [operations.State](../../models/operations/state.md) | :heavy_minus_sign:                                   | The state of the option.                             |