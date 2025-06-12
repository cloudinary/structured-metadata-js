# ListMetadataRulesResponse

metadata rules retrieved.

## Example Usage

```typescript
import { ListMetadataRulesResponse } from "@cloudinary/structured-metadata/models/operations";

let value: ListMetadataRulesResponse = {
  metadataRules: [
    {
      metadataFieldId: "smd-field-1",
      name: "My Rule",
      condition: {},
      result: {},
      state: "active",
      position: 1,
    },
    {
      metadataFieldId: "smd-field-1",
      name: "My Rule",
      condition: {},
      result: {},
      state: "active",
      position: 1,
      externalId: "1234567890",
      conditionSignature: "dGhlIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2c",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `metadataRules`                                                                      | [components.MetadataRuleResponse](../../models/components/metadataruleresponse.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |