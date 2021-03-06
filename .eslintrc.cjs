const rcNode = {
	root: true,
	env: { es2021: true, node: true },
	extends: ['eslint:recommended'],
	parserOptions: { sourceType: 'module', ecmaVersion: 13 },
	rules: {
		indent: [2, 'tab', { ignoreComments: true, SwitchCase: 1 }],
		linebreakStyle: [2],
		quotes: [2, 'single', { allowTemplateLiterals: true }],
		semi: [2],
		noUnusedVars: [2, { vars: 'all', args: 'none' }],
		noVar: [2],
		noConsole: [2],
	},
	globals: {
		ns: true,
	}
};


const parseKey = (raw, target) => { const key = raw.split(/(?=[A-Z])/).join('-').toLowerCase(); if(key != raw) { target[key] = target[raw]; delete target[raw]; } };
Object.keys(rcNode.rules).forEach((key) => parseKey(key, rcNode.rules));


module.exports = rcNode;