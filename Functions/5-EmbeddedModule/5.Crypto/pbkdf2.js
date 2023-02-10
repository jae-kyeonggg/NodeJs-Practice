const crypto = require('crypto');

console.time('time: ');

crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt: ', salt);
    crypto.pbkdf2('비밀번호', salt, 200000, 64, 'sha512', (err, key) => {
        console.log('password: ', key.toString('base64'));
    });
});

console.timeEnd('time: ');