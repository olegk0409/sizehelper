// obfuscatorMinifier.js
const JavaScriptObfuscator = require('javascript-obfuscator');

function minify({ code }) {
  console.log('✅ [Custom Minifier] Obfuscating JS bundle...');

  const result = JavaScriptObfuscator.obfuscate(code, {
    compact: true,
    controlFlowFlattening: true,
    deadCodeInjection: true,
    stringArray: true,
    rotateStringArray: true,
    stringArrayEncoding: ['rc4'],
    stringArrayThreshold: 0.75,
    sourceMap: false
  });

  return { code: result.getObfuscatedCode() };
}

module.exports = minify;
module.exports.minify = minify;
module.exports.default = minify;
module.exports.default.minify = minify;