/*
 * Tracking barbatus:typescript@0.6.5_1
 */
Package.describe({
  name: 'nathantreid:typescript',
  version: '0.0.1',
  summary: 'TypeScript for Meteor',
  git: 'https://github.com/nathantreid/meteor-typescript',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: 'typescript',
  use: ['nathantreid:typescript-compiler'],
  sources: ['plugin.js']
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1');

  api.use('isobuild:compiler-plugin@1.0.0');
  api.use('nathantreid:typescript-compiler@0.0.1');

  api.imply('modules@0.7.7');

  api.imply('barbatus:typescript-runtime@1.0.0');
});

Package.onTest(function(api) {
  api.use('tinytest@1.0.12');
  api.use('barbatus:typescript');

  api.addFiles('tests/runtime-tests.ts', 'client');
  api.addFiles('tests/runtime-react-tests.tsx', 'client');
});
