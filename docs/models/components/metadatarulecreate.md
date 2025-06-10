# MetadataRuleCreate

## Example Usage

```typescript
import { MetadataRuleCreate } from "@cloudinary/structured-metadata/models/components";

let value: MetadataRuleCreate = {
  metadataFieldId: "abcdefghij",
  name: "My Rule",
  condition: {},
  result: {},
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `metadataFieldId`                                                                                | *string*                                                                                         | :heavy_check_mark:                                                                               | The ID of the metadata field this rule applies to.                                               |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | A descriptive name for the metadata rule.                                                        |
| `condition`                                                                                      | [components.MetadataRuleCreateCondition](../../models/components/metadatarulecreatecondition.md) | :heavy_check_mark:                                                                               | The condition that triggers this rule. Ensure it adheres to the metadata rule condition schema.  |
| `result`                                                                                         | [components.MetadataRuleCreateResult](../../models/components/metadatarulecreateresult.md)       | :heavy_check_mark:                                                                               | The result to apply when the condition is met, should adhere to the metadata rule result schema. |
| `state`                                                                                          | [components.MetadataRuleCreateState](../../models/components/metadatarulecreatestate.md)         | :heavy_minus_sign:                                                                               | The state of the rule.                                                                           |
| `position`                                                                                       | *number*                                                                                         | :heavy_minus_sign:                                                                               | The position/order of this rule relative to other rules.                                         |