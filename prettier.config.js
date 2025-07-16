/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */

const config = {
  tabWidth: 2,
  printWidth: 200,
  semi: false,
  arrowParens: 'avoid',
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'all',
  bracketSpacing: true,
  embeddedLanguageFormatting: 'auto',
  endOfLine: 'lf',
  experimentalOperatorPosition: 'end',
  experimentalTernaries: false,
  jsxSingleQuote: true,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  objectWrap: 'preserve',
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  rangeEnd: Number.POSITIVE_INFINITY,
  rangeStart: 0,
  requirePragma: false,
  singleAttributePerLine: false,
  useTabs: false,
  vueIndentScriptAndStyle: false,
  plugins: ['prettier-plugin-astro'],
  // filepath: "",
}

export default config
