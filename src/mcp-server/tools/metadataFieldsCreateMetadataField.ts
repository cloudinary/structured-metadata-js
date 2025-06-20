/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metadataFieldsCreateMetadataField } from "../../funcs/metadataFieldsCreateMetadataField.js";
import * as components from "../../models/components/index.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: components.MetadataField$inboundSchema,
};

export const tool$metadataFieldsCreateMetadataField: ToolDefinition<
  typeof args
> = {
  name: "create-metadata-field",
  description: `Creates a new structured metadata field in your account

Creates a new metadata field with the specified properties and configuration.`,
  scopes: ["admin"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metadataFieldsCreateMetadataField(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
