const {
    generateKeyPair
} = await import('node:crypto');

import { writeFile } from 'node:fs';


generateKeyPair('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: 'aes-256-cbc',
        passphrase: 'top secret'
    }
}, (err, publicKey, privateKey) => {
    // Handle errors and use the generated key pair.

    if (err) console.log("Error!", err);
    console.log({
        publicKey,
        privateKey,
    });

    writeFile('storage/keys/private.key', privateKey, 'utf8', () => console.log('private key ok'));
    writeFile('storage/keys/public.key', publicKey, 'utf8', () => console.log('public key ok'));
});