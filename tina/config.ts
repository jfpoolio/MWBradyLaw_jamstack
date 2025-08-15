import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "practiceAreas",
        label: "Practice Areas",
        path: "src/content/practice-areas",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "slug",
            label: "URL Slug",
            required: true,
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            description: "Show this practice area prominently on the homepage",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Order in which this appears on the site (lower numbers first)",
          },
          {
            type: "image",
            name: "image",
            label: "Hero Image",
            description: "Main image for this practice area page",
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
                description: "Title tag for search engines",
              },
              {
                type: "string",
                name: "description",
                label: "Meta Description",
                description: "Description for search engines (160 characters max)",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords",
                list: true,
                description: "Keywords for this practice area",
              },
            ],
          },
          {
            type: "string",
            name: "team",
            label: "Team Members",
            list: true,
            description: "Team members who work in this practice area",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/practice-areas/${document._sys.filename}`,
        },
      },
      {
        name: "team",
        label: "Team Members",
        path: "src/content/team",
        format: "md",
        fields: [
          {
            type: "string",
            name: "name",
            label: "Full Name",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Job Title",
            required: true,
          },
          {
            type: "string",
            name: "bio",
            label: "Short Bio",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Profile Photo",
          },
          {
            type: "string",
            name: "email",
            label: "Email Address",
          },
          {
            type: "string",
            name: "phone",
            label: "Phone Number",
          },
          {
            type: "string",
            name: "practiceAreas",
            label: "Practice Areas",
            list: true,
            description: "Practice areas this team member works in",
          },
          {
            type: "number",
            name: "order",
            label: "Display Order",
            description: "Order in which this person appears on the team page",
          },
          {
            type: "boolean",
            name: "featured",
            label: "Featured",
            description: "Show this team member prominently",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Full Biography",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/team/${document._sys.filename}`,
        },
      },
      {
        name: "pages",
        label: "Pages",
        path: "src/content/pages",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Page Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "object",
            name: "seo",
            label: "SEO Settings",
            fields: [
              {
                type: "string",
                name: "title",
                label: "SEO Title",
              },
              {
                type: "string",
                name: "description",
                label: "Meta Description",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords",
                list: true,
              },
            ],
          },
          {
            type: "datetime",
            name: "lastModified",
            label: "Last Modified",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Page Content",
            isBody: true,
          },
        ],
        ui: {
          router: ({ document }) => `/${document._sys.filename}`,
        },
      },
    ],
  },
});

