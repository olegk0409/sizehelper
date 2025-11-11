// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

config.transformer.minifierPath = path.resolve(__dirname, './obfuscatorMinifier.js');
config.transformer.minifierConfig = {};

module.exports = config;
