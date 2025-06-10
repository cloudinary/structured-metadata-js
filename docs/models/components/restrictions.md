# Restrictions

The restrictions defined for the metadata field.

## Example Usage

```typescript
import { Restrictions } from "@cloudinary/structured-metadata/models/components";

let value: Restrictions = {};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `readonlyUi`                                                                                                      | *boolean*                                                                                                         | :heavy_minus_sign:                                                                                                | Whether the metadata field is read-only in the UI. when true, the metadata field can only be updated via the API. |