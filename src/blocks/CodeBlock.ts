import { Block } from "payload/types";

export const CodeBlock: Block = {
	slug: "codeblock",
	imageAltText: "A code block image",
	interfaceName: "Bloco de Código",
	labels: {
		singular: "Bloco de Código",
		plural: "Blocos de Código",
	},
	fields: [
		{
			name: "language",
			label: "Linguagem",
			type: "select",
			options: [
				{ label: "Typescript", value: "ts" },
				{ label: "Javascript", value: "js" },
				{ label: "C", value: "c" },
				{ label: "C#", value: "c#" },
			],
			defaultValue: "ts",
			required: true,
		},
		{
			name: "code",
			label: "Código",
			type: "textarea",
		},
	],
};
