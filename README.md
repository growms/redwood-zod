# README

This comes with [Enhancing Redwood: A Guide to Implementing Zod for Data Validation and Schema Sharing Between the API and Web Layers article](https://dev.to/growms/enhancing-redwood-a-guide-to-implementing-zod-for-data-validation-and-schema-sharing-between-the-api-and-web-layers-4do0).
This is a try into implementing [Zod](https://zod.dev/) as default validation feature for api and web layers in a [Redwood](https://redwoodjs.com) app.

> **Prerequisites**
>
> - A redwood project

**Boot**

```bash
yarn rw prisma migrate dev
yarn rw exec symlink-common
yarn rw dev
``````

