<!-- Start SDK Example Usage [usage] -->
```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    cloudinaryAuth: {
      apiKey: "CLOUDINARY_API_KEY",
      apiSecret: "CLOUDINARY_API_SECRET",
    },
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.createMetadataField({
    type: "set",
    label: "<value>",
  });

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->