module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import",
        "html"
    ],
    rules: {
      // 禁用import规则
      'import/extensions': 0,
      'import/first': 0,
      'import/no-unresolved': 0,
      'import/prefer-default-export': 0,
      'import/no-extraneous-dependencies': 0,

      "comma-dangle": [2, "never"],
      "eol-last": 0
    }
};
