Package.describe({
  name: 'rollypolly:meteor-notify',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'reactive client destop notification for meteor based on notifyjs',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rollymaduk/meteor-desktop-notify.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.use('jquery');
  api.use('coffeescript');
  api.versionsFrom('1.1.0.2');
  api.addFiles('lib/notify.js/notify.js','client');
  api.addAssets('public/img/Reminder-ring-WF.png','client');
  api.addFiles('notifyjs.coffee','client');
  api.export('Rp_notify_js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('rollypolly:meteor-notify');
  api.addFiles('impersonate-tests.js');
});
