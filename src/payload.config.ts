import cloudinaryPlugin from "payload-cloudinary-plugin/dist/plugins";
import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Article from "./collections/Article";
import Category from "./collections/Category";
import Media from "./collections/Media";
import Portfolio from "./globals/Portfolio";

dotenv.config();

export default buildConfig({
	serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
	collections: [Article, Media, Category],
	globals: [Portfolio],
	plugins: [cloudinaryPlugin()],
});
