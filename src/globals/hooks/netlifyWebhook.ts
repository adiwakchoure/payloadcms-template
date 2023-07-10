import { GlobalAfterChangeHook } from "payload/types";
import axios from "axios";

const netlifyWebhook: GlobalAfterChangeHook = async ({ doc }) => {
	// webhook from netlify to rebuild portfolio
	try {
		await axios.post(process.env.NETLIFYWEBHOOKURL);
	} catch (error) {
		console.error("Erro ao acionar o webhook:", error);
	}

	return doc;
};

export default netlifyWebhook;
