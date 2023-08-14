import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision";
// import project from "./sanity/schemas/project-schema";

import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "6p38hwxo",
    dataset: "production",
    title: "Hackathon",
    apiVersion: "2023-06-13",
    basePath: "/admin",
    plugins: [deskTool(),visionTool()],
    schema: {types:schemas}
})

export default config