const MeCab = require('mecab-async');

if (process.platform==='win32') {
    MeCab.prototype._shellCommand = function(str) {
        return 'echo ' + str.replace(/&/g, '^^^&') + ' | ' + this.command;
    }
}

module.exports = MeCab;