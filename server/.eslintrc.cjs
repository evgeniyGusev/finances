module.exports = {
	parserOptions: {
		ecmaVersion: 2020,
	},

	plugins: ['prettier', 'import'],

	extends: ['airbnb-base', 'prettier'],

	ignorePatterns: ['node-modules', 'package-lock.json'],

	rules: {
		'consistent-return': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off'
	}
}
