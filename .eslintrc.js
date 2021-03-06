module.exports = {
  'plugins': ['react', '@typescript-eslint'],
  'extends': ['airbnb', 'plugin:react/recommended'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
    },
  },
  'env': {
    'jest': true,
    'es6': true,
    'node': true,
  },
  'rules': {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'pattern': {
          'mjs': 'never',
          'js': 'never',
          'jsx': 'never',
          'ts': 'never',
          'tsx': 'never',
          'json': 'never',
        },
      },
    ],
    'react/jsx-tag-spacing': ['error', {
      'closingSlash': 'never',
      'beforeSelfClosing': 'always',
      'afterOpening': 'never',
      'beforeClosing': 'allow',
    }],
    'react/no-array-index-key': ['off', 'never'],
    'comma-dangle': ['error', {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'always-multiline',
    }],
    'no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
        'allowTaggedTemplates': false,
      },
    ],
    'no-mixed-operators': [
      'off',
      {
        'groups': [['&', '|', '^', '~', '<<', '>>', '>>>'], ['&&', '||']],
        'allowSamePrecedence': true,
      },
    ],
    'operator-linebreak': ['error', 'after'],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'arrow-parens': ['off', 'as-needed', { 'requireForBlockBody': false }],
    'react/jsx-closing-tag-location': ['error'],
    'no-unused-vars': ['warn'],
    '@typescript-eslint/no-unused-vars': ['warn'],
    'padded-blocks': ['off'],
    'linebreak-style': ['off'],
    'import/no-cycle': ['error', { 'maxDepth': 1 }],
    'no-throw-literal': 'off',
    'no-else-return': ['error', { 'allowElseIf': true }],
    'no-plusplus': ['off'],
    'object-curly-spacing': ['error', 'always'],
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 5 }],
    'quote-props': ['off'],
    'dot-notation': ['off'],
    'object-shorthand': ['error', 'always'],
    'no-underscore-dangle': ['warn', {
      'allow': ['_storeData', '_retrieveData'],
      'allowAfterThis': true,
      'allowAfterSuper': true,
      'enforceInMethodNames': false,
    }],
    'no-param-reassign': ['warn', { 'props': false }],
    'semi': ['off', 'never', { 'omitLastInOneLineBlock': true }],
    'no-console': 'off',
    'brace-style': ['off', 'stroustrup', { 'allowSingleLine': true }],
    'no-useless-constructor': ['off', 'never'],
    'eol-last': ['off', 'never'],
    'import/prefer-default-export': ['off', 'never'],
    'one-var': ['off', 'never'],
    'prefer-const': ['off', 'never'],
    'array-callback-return': ['off'],
    'eqeqeq': ['warn', 'smart'],
    'no-trailing-spaces': ['off', 'always'],
    'react/jsx-first-prop-new-line': [1, 'multiline'],
    'react/jsx-max-props-per-line': [1,
      {
        'maximum': 1,
      },
    ],
    'max-len': ['warn', {
      'code': 111,
      'comments': 140,
      'tabWidth': 2,
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'ignoreRegExpLiterals': true,
    }],
    'max-params': ['error', 3],
    'spaced-comment': ['off', 'always', { 'exceptions': ['/', '//', '// '] }], //not working
    'arrow-body-style': ['off', 'as-needed'],
    'no-lonely-if': ['off'],
    'import/order': ['off', { 'newlines-between': 'ignore' }],
    'object-curly-newline': ['off', {
      'ObjectExpression': { 'minProperties': 4 },
      'ObjectPattern': { 'multiline': true },
      'ImportDeclaration': 'never',
      'ExportDeclaration': { 'multiline': false },
    }],
    'no-multi-spaces': ['warn', {
      'ignoreEOLComments': true,
      'exceptions': {
        'VariableDeclarator': true,
        'Property': true,
        'ImportDeclaration': true,
      },
    }],
    'no-use-before-define': ['error', {
      'functions': true,
      'classes': true,
      'variables': false,
    }],
    'quotes': ['off', 'single', { 'allowTemplateLiterals': true }], //disable temporary
    'implicit-arrow-linebreak': ['warn', 'beside'],
    'react/jsx-closing-bracket-location': [1, {
      selfClosing: 'tag-aligned',
      nonEmpty: 'after-props',
    }],
    'react/jsx-curly-brace-presence': [1, {
      'props': 'always',
      'children': 'ignore',
    }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx', 'ts', 'tsx', '.json'] }],
    'react/jsx-boolean-value': [0, 'never'],
    'react/destructuring-assignment': [0, 'never'],
    'react/jsx-one-expression-per-line': [0, { 'allow': 'single-child' }],
    'react/prop-types': [0, { 'ignore': [''] }],
    'react/display-name': [0, { 'ignoreTranspilerName': false }],
    'react/state-in-constructor': [1, 'always'],
    'react/no-unused-state': [0, 'always'], //turn on to check unused state variables
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/no-unresolved': [
      0,
      {
        'commonjs': true,
        'amd': false,
      },
    ],
    'react/sort-comp': [0, {
      order: [
        'static-methods',
        'lifecycle',
        'everything-else',
        'render',
      ],
      groups: {
        lifecycle: [
          'displayName',
          'propTypes',
          'contextTypes',
          'childContextTypes',
          'mixins',
          'statics',
          'defaultProps',
          'constructor',
          'getDefaultProps',
          'state',
          'getInitialState',
          'getChildContext',
          'getDerivedStateFromProps',
          'componentWillMount',
          'UNSAFE_componentWillMount',
          'componentDidMount',
          'componentWillReceiveProps',
          'UNSAFE_componentWillReceiveProps',
          'shouldComponentUpdate',
          'componentWillUpdate',
          'UNSAFE_componentWillUpdate',
          'getSnapshotBeforeUpdate',
          'componentDidUpdate',
          'componentDidCatch',
          'componentWillUnmount',
        ],
      },
    }],
  },
  'globals': {
    'fetch': false,
  },
  'settings': {
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
      },
    },
  },
};
