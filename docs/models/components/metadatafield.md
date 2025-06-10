# MetadataField

## Example Usage

```typescript
import { MetadataField } from "@cloudinary/structured-metadata/models/components";

let value: MetadataField = {
  type: "set",
  label: "<value>",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `type`                                                                              | [components.Type](../../models/components/type.md)                                  | :heavy_check_mark:                                                                  | The type of the metadata field.                                                     |
| `externalId`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | The external ID of the metadata field.                                              |
| `label`                                                                             | *string*                                                                            | :heavy_check_mark:                                                                  | The label of the metadata field.                                                    |
| `mandatory`                                                                         | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the metadata field is mandatory.                                            |
| `defaultValue`                                                                      | *components.DefaultValue*                                                           | :heavy_minus_sign:                                                                  | The default value of the metadata field.                                            |
| `defaultDisabled`                                                                   | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the default value is disabled.                                              |
| `validation`                                                                        | [components.Validation](../../models/components/validation.md)                      | :heavy_minus_sign:                                                                  | The validation defined for the metadata field.                                      |
| `restrictions`                                                                      | [components.Restrictions](../../models/components/restrictions.md)                  | :heavy_minus_sign:                                                                  | The restrictions defined for the metadata field.                                    |
| `datasource`                                                                        | [components.Datasource](../../models/components/datasource.md)                      | :heavy_minus_sign:                                                                  | The datasource defined for the metadata field.                                      |
| `allowDynamicListValues`                                                            | *boolean*                                                                           | :heavy_minus_sign:                                                                  | Whether the metadata field allows adding new options to the datasource dynamically. |