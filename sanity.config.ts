// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schema from "./schemas/schema";

export default defineConfig({
  title: "mjukvare-cms",
  projectId: "ll3wkgw3",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schema,
  },
});
