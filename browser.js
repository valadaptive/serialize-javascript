/*
Copyright (c) 2014, Yahoo! Inc. All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/

'use strict';

var createSerializer = require('./lib');

// Generate an internal UID to make the regexp pattern harder to guess.
var UID_LENGTH = 16;

if (!crypto || !crypto.getRandomValues) {
    throw new Error('Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11');
}

module.exports = createSerializer(crypto.getRandomValues(new Uint8Array(UID_LENGTH)));
