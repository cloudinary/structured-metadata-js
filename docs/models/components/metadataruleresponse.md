# MetadataRuleResponse

## Example Usage

```typescript
import { MetadataRuleResponse } from "@cloudinary/structured-metadata/models/components";

let value: MetadataRuleResponse = {
  metadataFieldId: "abcdefghij",
  name: "My Rule",
  condition: {},
  result: {},
  externalId: "1234567890",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `metadataFieldId`                                                                                    | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the metadata field this rule applies to.                                                   |
| `name`                                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A descriptive name for the metadata rule.                                                            |
| `condition`                                                                                          | [components.MetadataRuleResponseCondition](../../models/components/metadataruleresponsecondition.md) | :heavy_minus_sign:                                                                                   | The condition that triggers this rule. Ensure it adheres to the metadata rule condition schema.      |
| `result`                                                                                             | [components.MetadataRuleResponseResult](../../models/components/metadataruleresponseresult.md)       | :heavy_minus_sign:                                                                                   | The result to apply when the condition is met, should adhere to the metadata rule result schema.     |
| `state`                                                                                              | [components.MetadataRuleResponseState](../../models/components/metadataruleresponsestate.md)         | :heavy_minus_sign:                                                                                   | The state of the rule.                                                                               |
| `position`                                                                                           | *number*                                                                                             | :heavy_minus_sign:                                                                                   | The position/order of this rule relative to other rules.                                             |
| `externalId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The unique identifier of the metadata rule.                                                          |
| `conditionSignature`                                                                                 | *string*                                                                                             | :heavy_minus_sign:                                                                                   | A signature representing the condition structure.                                                    |