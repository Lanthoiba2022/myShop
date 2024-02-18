import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import path, { dirname } from "path";
import { Users } from "./collections/Users";
import dotenv from "dotenv"
import { Products } from "./collections/Products/Products";
import { Media } from "./collections/Media";

dotenv.config({
    path: path.resolve(__dirname,"../.env"),
})

export default buildConfig ({
    serverURL: process.env.NEXT_PUBLIC_SERVER_URL || "",
    collections: [Users, Products, Media],
    routes: {
        admin: "/sell"
    },
    admin: {
        user: "users",
        bundler: webpackBundler(),
        meta: {
            titleSuffix: "-mySHOP",
            favicon: "/images/favicon.ico",
            ogImage: "/images/thumbnail.jpg",
        },
    },
    rateLimit: {
        max: 2000,
    },
    editor: slateEditor({}),
    db: mongooseAdapter({
        url: process.env.MONGODB_URL!,
    }),
    typescript: {
        outputFile: path.resolve(__dirname,"payload-types.ts"),
    },
})