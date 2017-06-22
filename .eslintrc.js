module.exports = {
  'parser': 'babel-eslint',
  'extends': 'airbnb',
  "plugins": [
    'react'
  ],
  'env': {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
    'jquery': true
  },
  'parserOptions': {
    'sourceType': 'module'
  },
  //FIXME: rm unnecessary global variables
  'globals': {
    'genedock': true,
    'canaryAccounts': true,
    'CodeMirror': true,
    'User': true,
    'Message': true,
    'joint': true,
    'jade': true,
    'CryptoJS': true,
    'JSEncrypt': true,
    'GeneDockAPI': true,
    'GeneDockGlobal': true // a object include following global variables{env, apiUrl, accountName, username, defaultRegion}
  },
  'rules': {
    'strict': 'off',
    'class-methods-use-this': 'off',
    'indent': ['error', 2, {'SwitchCase': 1}],
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'constructor-super': 'error',
    'func-names': 'off',
    'id-length': 'off',
    'quotes': ['warn', 'single' ],
    'jsx-quotes': ['error', 'prefer-double'],
    'linebreak-style': ['warn', 'unix'],
    'new-cap': ['error', {'newIsCap': true, 'capIsNew': false}],
    'no-case-declarations': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-console': ['warn', {
      allow: ['info', 'warn', 'error']
    }],
    'no-empty-pattern': 'error',
    'no-dupe-class-members': 'error',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-this-before-super': 'error',
    'no-undefined': 'error',
    'no-unused-expressions': 'off',
    'no-useless-concat': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'never'],
    'object-shorthand': 'warn',
    'prefer-arrow-callback': 'error',
    'prefer-reflect': 'off',
    'prefer-spread': 'error',
    'prefer-template': 'warn',
    'require-yield': 'error',
    'semi': ['warn', 'always'],
    'spaced-comment': 'off',
    'space-before-function-paren': ['error', "never"],
    'keyword-spacing': ['warn', {'before': true, 'after': true}],
    'space-in-parens': ['error', 'never'],
    'vars-on-top': 'off',
    'max-len': ['warn', 150],
    'key-spacing': ['warn', {
      'beforeColon': false,
      'afterColon': true
    }],
    'react/jsx-closing-bracket-location': ['warn', 'props-aligned'],
    'react/jsx-curly-spacing': ['error', 'never'],
    'react/jsx-handler-names': ['warn', {
      'eventHandlerPrefix': 'handle|toggle'
    }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-quotes': 'off',
    'react/jsx-no-bind': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': ['error', {'ignoreStateless': true}],
    'react/prefer-es6-class': 'warn',
    'react/prop-types': 'off',
    'react/sort-comp': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/forbid-prop-types': [1, { "forbid": ['any'] }]
  }
};
