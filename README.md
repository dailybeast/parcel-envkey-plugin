# parcel-envkey-plugin

This package provides the ability to use Envkey safely for apps bundled with Parcel. Because this plugin loads the environment for the purpose of building client-side code a white-list of permitted keys must be specified via an `envkey.config.js` file - more details below.

## Installation

To install the plugin simply install this package and Parcel will take care of calling it at the appropriate time.

```
npm install --save parcel-envkey-plugin
```

## Configuration

For the plugin to setup the environment correctly it will attempt to load a config file located in the root directory of your project. This config file is a javascript file that exports a configuration object.

For example if your project is setup like:

```bash
├── app
│   ├── css
│   ├── images
│   ├── index.html
│   ├── js
│   │   ├── **/*.js
├── .gitignore
├── envkey.config.js <-- you create this file
├── node_modules
├── package.json
└── README.md
```

Your `envkey.config.js` file must export an object with a `permitted` key containing an array of the env vars that are safe to be bundled into a client side app.

```javascript
module.exports = {
  permitted: [
    'API_HOST',
    'WEBSOCKET_HOST',
    'WWW_DOMAIN'
  ]
}
```

That's it! Once this file is added to your project Parcel will load and export the correct environment.
