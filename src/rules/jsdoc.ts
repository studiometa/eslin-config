import type { Linter } from 'eslint';
import jsdocPlugin from 'eslint-plugin-jsdoc';

export const jsdoc = {
  files: ['**/*.js'],
  plugins: { jsdoc: jsdocPlugin },
  rules: {
    'jsdoc/require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: false,
          FunctionExpression: false,
        },
      },
    ],
    // Checks that @access tags use one of the following values:
    //
    // - "package", "private", "protected", "public"
    //
    // Also reports:
    //
    // - Mixing of @access with @public, @private, @protected, or @package on the same doc block.
    // - Use of multiple instances of @access (or the @public, etc. style tags) on the same doc block.
    'jsdoc/check-access': 'off',
    // Reports invalid alignment of JSDoc block asterisks.
    'jsdoc/check-alignment': 'error',
    // Ensures that (JavaScript) examples within JSDoc adhere to ESLint rules.
    'jsdoc/check-examples': 'off',
    // Reports invalid padding inside JSDoc blocks.
    'jsdoc/check-indentation': 'off',
    // Reports invalid alignment of JSDoc block lines.
    'jsdoc/check-line-alignment': 'off',
    // Ensures that parameter names in JSDoc match those in the function declaration.
    'jsdoc/check-param-names': 'warn',
    // Ensures that property names in JSDoc are not duplicated on the same block and that nested properties have defined roots.
    'jsdoc/check-property-names': 'warn',
    // Reports against syntax not encouraged for the mode (e.g., Google Closure Compiler in "jsdoc" or "typescript" mode).
    // Note that this rule will not check for types that are wholly invalid for a given mode, as that is covered by `valid-types`.
    'jsdoc/check-syntax': 'warn',
    // Reports invalid block tag names.
    'jsdoc/check-tag-names': 'warn',
    // Reports invalid types.
    'jsdoc/check-types': 'warn',
    // This rule checks the values for a handful of tags:
    //
    // - @version - Checks that there is a present and valid semver version value.
    // - @since - As with @version
    // - @license - Checks that there is a present and valid SPDX identifier or is present within an allowedLicenses option.
    // - @author - Checks there is a value present, and if the option allowedAuthors is present, ensure that the author value is one of these array items.
    'jsdoc/check-values': 'off',
    // Empty tag
    'jsdoc/empty-tags': 'off',
    // Reports an issue with any non-constructor function using @implements.
    'jsdoc/implements-on-classes': 'off',
    // Enforces a regular expression pattern on descriptions.
    'jsdoc/match-description': 'off',
    // Reports the name portion of a JSDoc tag if matching or not matching a given regular expression.
    'jsdoc/match-name': 'off',
    // Controls how and whether jsdoc blocks can be expressed as single or multiple line blocks.
    'jsdoc/multiline-blocks': 'warn',
    // Enforces a consistent padding of the block description.
    'jsdoc/newline-after-description': 'off',
    // This rule checks for multi-line-style comments which fail to meet the criteria of a jsdoc block, namely that it should begin with two asterisks, but which appear to be intended as jsdoc blocks due to the presence of whitespace followed by whitespace or asterisks, and an at-sign (@) and some non-whitespace (as with a jsdoc block tag).
    'jsdoc/no-bad-blocks': 'warn',
    // This rule reports defaults being used on the relevant portion of @param or @default. It also optionally reports the presence of the square-bracketed optional arguments at all.
    'jsdoc/no-defaults': 'off',
    // This rule lets you report when certain comment structures are always expected.
    'jsdoc/no-missing-syntax': 'off',
    // Prevents use of multiple asterisks at the beginning of lines.
    'jsdoc/no-multi-asterisks': 'warn',
    // Reports when certain comment structures are present.
    'jsdoc/no-restricted-syntax': 'off',
    // This rule reports types being used on @param or @returns.
    'jsdoc/no-types': 'off',
    // Checks that types in jsdoc comments are defined.
    'jsdoc/no-undefined-types': 'off',
    // Requires that each JSDoc line starts with an `*`.
    'jsdoc/require-asterisk-prefix': 'warn',
    // Requires that all functions have a description.
    //
    // - All functions must have an implicit description or have the option descriptionStyle set to tag.
    // - Every jsdoc block description (or description tag if descriptionStyle is "tag") must have a non-empty description that explains the purpose of the method.
    'jsdoc/require-description': 'off',
    // Requires that block description, explicit @description, and @param/@returns tag descriptions are written in complete sentences, i.e.,
    //
    // - Description must start with an uppercase alphabetical character.
    // - Paragraphs must start with an uppercase alphabetical character.
    // - Sentences must end with a period.
    // - Every line in a paragraph (except the first) which starts with an uppercase character must be preceded by a line ending with a period.
    // - A colon or semi-colon followed by two line breaks is still part of the containing paragraph (unlike normal dual line breaks).
    // - Text within inline tags {...} are not checked for sentence divisions.
    // - Periods after items within the abbreviations option array are not treated as sentence endings.
    // @todo enable when https://github.com/gajus/eslint-plugin-jsdoc/issues/779 is fixed
    'jsdoc/require-description-complete-sentence': 'off',
    // Requires that all functions have examples.
    //
    // - All functions must have one or more @example tags.
    // - Every example tag must have a non-empty description that explains the method's usage.
    'jsdoc/require-example': 'off',
    // Checks that:
    //
    // - All files have a @file, @fileoverview, or @overview tag.
    // - Duplicate file overview tags within a given file will be reported
    // - File overview tags will be reported which are not, as per the docs, "at the beginning of the file"–where beginning of the file is interpreted in this rule as being when the overview tag is not preceded by anything other than a comment.
    'jsdoc/require-file-overview': 'off',
    // Requires (or disallows) a hyphen before the `@param` description.
    'jsdoc/require-hyphen-before-param-description': ['warn', 'never'],
    // Checks for presence of jsdoc comments, on class declarations as well as functions.

    // `@param`

    // Requires that all function parameters are documented.
    'jsdoc/require-param': ['warn', { enableFixer: false }],
    // Requires that each `@param` tag has a `description` value.
    'jsdoc/require-param-description': 'off',
    // Requires that all function parameters have names.
    'jsdoc/require-param-name': 'warn',
    // Requires that each `@param` tag has a `type` value.
    'jsdoc/require-param-type': 'warn',

    // `@property`

    // Requires that all `@typedef` and `@namespace` tags have `@property` when their type is a plain `object`, `Object`, or `PlainObject`.
    'jsdoc/require-property': 'warn',
    // Requires that each `@property` tag has a `description` value.
    'jsdoc/require-property-description': 'off',
    // Requires that all function `@property` tags have names.
    'jsdoc/require-property-name': 'warn',
    // Requires that each `@property` tag has a `type` value.
    'jsdoc/require-property-type': 'warn',

    // `@returns`

    // Requires that returns are documented.
    'jsdoc/require-returns': 'warn',
    // Requires a return statement in function body if a `@returns` tag is specified in jsdoc comment.
    'jsdoc/require-returns-check': 'warn',
    // Requires that the `@returns` tag has a `description` value.
    'jsdoc/require-returns-description': 'off',
    // Requires that `@returns` tag has `type` value.
    'jsdoc/require-returns-type': 'warn',
    // Requires that throw statements are documented.
    'jsdoc/require-throws': 'off',
    // Requires that yields are documented.
    'jsdoc/require-yields': 'off',
    // Ensures that if a @yields is present that a yield (or yield with a value) is present in the function body (or that if a @next is present that there is a yield with a return value present).
    'jsdoc/require-yields-check': 'off',
    // Enforces lines (or no lines) between tags.
    'jsdoc/tag-lines': ['warn', 'never'],
    // Requires all types to be valid JSDoc, Closure, or TypeScript compiler types without syntax errors.
    'jsdoc/valid-types': 'warn',
  } as Record<string, Linter.RuleEntry>,
};
