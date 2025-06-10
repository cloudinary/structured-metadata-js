# MetadataRuleUpdate

## Example Usage

```typescript
import { MetadataRuleUpdate } from "@cloudinary/structured-metadata/models/components";

let value: MetadataRuleUpdate = {
  metadataFieldId: "abcdefghij",
  name: "My Rule",
  condition: {},
  result: {},
  externalId: "1234567890",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `metadataFieldId`                                                                                | *string*                                                                                         | :heavy_minus_sign:                                                                               | The ID of the metadata field this rule applies to.                                               |
| `name`                                                                                           | *string*                                                                                         | :heavy_minus_sign:                                                                               | A descriptive name for the metadata rule.                                                        |
| `condition`                                                                                      | [components.MetadataRuleUpdateCondition](../../models/components/metadataruleupdatecondition.md) | :heavy_minus_sign:                                                                               | The condition that triggers this rule. Ensure it adheres to the metadata rule condition schema.  |
| `result`                                                                                         | [components.MetadataRuleUpdateResult](../../models/components/metadataruleupdateresult.md)       | :heavy_minus_sign:                                                                               | The result to apply when the condition is met, should adhere to the metadata rule result schema. |
| `state`                                                                                          | [components.MetadataRuleUpdateState](../../models/components/metadataruleupdatestate.md)         | :heavy_minus_sign:                                                                               | The state of the rule.                                                                           |
| `position`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | The position/order of this rule relative to other rules.                                         |
| `externalId`                                                                                     | *string*                                                                                         | :heavy_minus_sign:                                                                               | The unique identifier of the metadata rule.                                                      |