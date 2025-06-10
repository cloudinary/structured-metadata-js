# Cloudinary Structured Metadata JS SDK

<!-- Start Summary [summary] -->
## Summary


<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Structured Metadata JS SDK](#cloudinary-structured-metadata-js-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Global Parameters](#global-parameters)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)

<!-- End Table of Contents [toc] -->

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @cloudinary/structured-metadata
```

### PNPM

```bash
pnpm add @cloudinary/structured-metadata
```

### Bun

```bash
bun add @cloudinary/structured-metadata
```

### Yarn

```bash
yarn add @cloudinary/structured-metadata zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "CloudinarySMD": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/structured-metadata",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--api-secret", "...",
        "--cloud-name", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "CloudinarySMD": {
      "command": "npx",
      "args": [
        "-y", "--package", "@cloudinary/structured-metadata",
        "--",
        "mcp", "start",
        "--api-key", "...",
        "--api-secret", "...",
        "--cloud-name", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/cloudinary/structured-metadata-js/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

For a full list of server arguments, run:

```sh
npx -y --package @cloudinary/structured-metadata -- mcp start --help
```
<!-- No SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
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

<!-- Start Global Parameters [global-parameters] -->
## Global Parameters

A parameter is configured globally. This parameter may be set on the SDK client instance itself during initialization. When configured as an option during SDK initialization, This global value will be used as the default on the operations that use it. When such operations are called, there is a place in each to override the global value, if needed.

For example, you can set `cloud_name` to `"<value>"` at SDK initialization and then you do not have to pass the same value on calls to operations like `createMetadataField`. But if you want to do so you may, which will locally override the global setting. See the example code below for a demonstration.


### Available Globals

The following global parameter is available.
Global parameters can also be set via environment variable.

| Name      | Type   | Description                                 | Environment           |
| --------- | ------ | ------------------------------------------- | --------------------- |
| cloudName | string | The cloud name of your product environment. | CLOUDINARY_CLOUD_NAME |

### Example

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
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
<!-- End Global Parameters [global-parameters] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                     | Type | Scheme      | Environment Variable                             |
| ------------------------ | ---- | ----------- | ------------------------------------------------ |
| `apiKey`<br/>`apiSecret` | http | Custom HTTP | `CLOUDINARY_API_KEY`<br/>`CLOUDINARY_API_SECRET` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
  cloudName: "<value>",
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
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>


### [metadataFields](docs/sdks/metadatafields/README.md)

* [createMetadataField](docs/sdks/metadatafields/README.md#createmetadatafield) - Creates a new structured metadata field in your account
* [listMetadataFields](docs/sdks/metadatafields/README.md#listmetadatafields) - Lists all structured metadata fields defined in your Cloudinary product environment
* [getMetadataField](docs/sdks/metadatafields/README.md#getmetadatafield) - Retrieves the definition of a specific structured metadata field by its identifier (external_id)
* [updateMetadataField](docs/sdks/metadatafields/README.md#updatemetadatafield) - Updates the configuration of an existing metadata field
* [deleteMetadataField](docs/sdks/metadatafields/README.md#deletemetadatafield) - Deletes a structured metadata field definition from your account
* [searchMetadataFieldDatasource](docs/sdks/metadatafields/README.md#searchmetadatafielddatasource) - Search across all metadata field datasources
* [reorderMetadataFields](docs/sdks/metadatafields/README.md#reordermetadatafields) - Reorder all metadata fields
* [reorderMetadataField](docs/sdks/metadatafields/README.md#reordermetadatafield) - Change position of metadata field
* [updateMetadataFieldDatasource](docs/sdks/metadatafields/README.md#updatemetadatafielddatasource) - Updates the allowed values (the datasource) for a specified metadata field
* [deleteMetadataFieldDatasource](docs/sdks/metadatafields/README.md#deletemetadatafielddatasource) - Removes one or more allowed values from a metadata field's datasource
* [searchDatasourceInMDField](docs/sdks/metadatafields/README.md#searchdatasourceinmdfield) - Search datasource values in a metadata field
* [restoreMetadataFieldDatasource](docs/sdks/metadatafields/README.md#restoremetadatafielddatasource) - Restore datasource values

### [metadataRules](docs/sdks/metadatarules/README.md)

* [createMetadataRule](docs/sdks/metadatarules/README.md#createmetadatarule) - Creates a new conditional metadata rule
* [listMetadataRules](docs/sdks/metadatarules/README.md#listmetadatarules) - Retrieves a list of all conditional metadata rules defined in your accountcloudinary
* [updateMetadataRule](docs/sdks/metadatarules/README.md#updatemetadatarule) - Updates an existing conditional metadata rule's definition
* [deleteMetadataRule](docs/sdks/metadatarules/README.md#deletemetadatarule) - Deletes a conditional metadata rule by its ID

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`metadataFieldsCreateMetadataField`](docs/sdks/metadatafields/README.md#createmetadatafield) - Creates a new structured metadata field in your account
- [`metadataFieldsDeleteMetadataField`](docs/sdks/metadatafields/README.md#deletemetadatafield) - Deletes a structured metadata field definition from your account
- [`metadataFieldsDeleteMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#deletemetadatafielddatasource) - Removes one or more allowed values from a metadata field's datasource
- [`metadataFieldsGetMetadataField`](docs/sdks/metadatafields/README.md#getmetadatafield) - Retrieves the definition of a specific structured metadata field by its identifier (external_id)
- [`metadataFieldsListMetadataFields`](docs/sdks/metadatafields/README.md#listmetadatafields) - Lists all structured metadata fields defined in your Cloudinary product environment
- [`metadataFieldsReorderMetadataField`](docs/sdks/metadatafields/README.md#reordermetadatafield) - Change position of metadata field
- [`metadataFieldsReorderMetadataFields`](docs/sdks/metadatafields/README.md#reordermetadatafields) - Reorder all metadata fields
- [`metadataFieldsRestoreMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#restoremetadatafielddatasource) - Restore datasource values
- [`metadataFieldsSearchDatasourceInMDField`](docs/sdks/metadatafields/README.md#searchdatasourceinmdfield) - Search datasource values in a metadata field
- [`metadataFieldsSearchMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#searchmetadatafielddatasource) - Search across all metadata field datasources
- [`metadataFieldsUpdateMetadataField`](docs/sdks/metadatafields/README.md#updatemetadatafield) - Updates the configuration of an existing metadata field
- [`metadataFieldsUpdateMetadataFieldDatasource`](docs/sdks/metadatafields/README.md#updatemetadatafielddatasource) - Updates the allowed values (the datasource) for a specified metadata field
- [`metadataRulesCreateMetadataRule`](docs/sdks/metadatarules/README.md#createmetadatarule) - Creates a new conditional metadata rule
- [`metadataRulesDeleteMetadataRule`](docs/sdks/metadatarules/README.md#deletemetadatarule) - Deletes a conditional metadata rule by its ID
- [`metadataRulesListMetadataRules`](docs/sdks/metadatarules/README.md#listmetadatarules) - Retrieves a list of all conditional metadata rules defined in your accountcloudinary
- [`metadataRulesUpdateMetadataRule`](docs/sdks/metadatarules/README.md#updatemetadatarule) - Updates an existing conditional metadata rule's definition

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  const result = await cloudinarySMD.metadataFields.createMetadataField({
    type: "set",
    label: "<value>",
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
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
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`CloudinarySMDError`](./src/models/errors/cloudinarysmderror.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";
import * as errors from "@cloudinary/structured-metadata/models/errors";

const cloudinarySMD = new CloudinarySMD({
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
  },
});

async function run() {
  try {
    const result = await cloudinarySMD.metadataFields.createMetadataField({
      type: "set",
      label: "<value>",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.CloudinarySMDError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (error instanceof errors.ApiError) {
        console.log(error.data$.error); // components.ErrorT
      }
    }
  }
}

run();

```

### Error Classes
**Primary errors:**
* [`CloudinarySMDError`](./src/models/errors/cloudinarysmderror.ts): The base class for HTTP error responses.
  * [`ApiError`](docs/models/errors/apierror.md): Generic error.

<details><summary>Less common errors (6)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/httpclienterrors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/httpclienterrors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/httpclienterrors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/httpclienterrors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/httpclienterrors.ts): Unrecognised or unexpected error.


**Inherit from [`CloudinarySMDError`](./src/models/errors/cloudinarysmderror.ts)**:
* [`ResponseValidationError`](./src/models/errors/responsevalidationerror.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                            | Variables | Description                                     |
| --- | --------------------------------- | --------- | ----------------------------------------------- |
| 0   | `https://{region}.cloudinary.com` | `region`  | Regional API endpoints for optimal performance. |
| 1   | `https://{host}`                  | `host`    | Custom domains for enterprise deployments.      |

If the selected server has variables, you may override its default values through the additional parameters made available in the SDK constructor:

| Variable | Parameter                     | Supported Values                            | Default                | Description                 |
| -------- | ----------------------------- | ------------------------------------------- | ---------------------- | --------------------------- |
| `region` | `region: models.ServerRegion` | - `"api"`<br/>- `"api-eu"`<br/>- `"api-ap"` | `"api"`                | Regional endpoint selection |
| `host`   | `host: string`                | string                                      | `"api.cloudinary.com"` | API host domain.            |

#### Example

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  serverIdx: 1,
  host: "trusting-wheel.name",
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
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

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const cloudinarySMD = new CloudinarySMD({
  serverURL: "https://api.cloudinary.com",
  cloudName: "<value>",
  security: {
    apiKey: "CLOUDINARY_API_KEY",
    apiSecret: "CLOUDINARY_API_SECRET",
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
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";
import { HTTPClient } from "@cloudinary/structured-metadata/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new CloudinarySMD({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { CloudinarySMD } from "@cloudinary/structured-metadata";

const sdk = new CloudinarySMD({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `CLOUDINARY_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->
