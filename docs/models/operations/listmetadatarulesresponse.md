# ListMetadataRulesResponse

metadata rules retrieved.

## Example Usage

```typescript
import { ListMetadataRulesResponse } from "@cloudinary/structured-metadata/models/operations";

let value: ListMetadataRulesResponse = {
  metadataRules: [
    {
      metadataFieldId: "abcdefghij",
      name: "My Rule",
      condition: {},
      result: {},
      externalId: "1234567890",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `metadataRules`                                                                      | [components.MetadataRuleResponse](../../models/components/metadataruleresponse.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |