import { webpackBundler } from "@payloadcms/bundler-webpack";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import {
	BlocksFeature,
	lexicalEditor,
	SlateToLexicalFeature,
} from "@payloadcms/richtext-lexical";
import dotenv from "dotenv";
import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import { buildConfig } from "payload/config";
import Article from "./collections/Article";
import Category from "./collections/Category";
import Media from "./collections/Media";
import AboutBlog from "./globals/AboutBlog";
import Portfolio from "./globals/Portfolio";
import { CodeBlock } from "./blocks/CodeBlock";

dotenv.config();

export default buildConfig({
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
	admin: {
		bundler: webpackBundler(),
	},
	collections: [Article, Media, Category],
	globals: [Portfolio, AboutBlog],
	plugins: [cloudinaryPlugin()],
	editor: lexicalEditor({
		features: ({ defaultFeatures }) => [
			...defaultFeatures,
			SlateToLexicalFeature({}),
			BlocksFeature({
				blocks: [CodeBlock],
			}),
		],
	}),
	db: mongooseAdapter({ url: process.env.MONGODB_URI }),
});
