// const functions = require('firebase-functions');
// const { Storage } = require('@google-cloud/storage');
// const gcconfig = {
//     projectId: 'foodgram-8dac2', 
//     keyFilename: 'foodgram-8dac2-firebase-adminsdk-5v8gm-86828464fe.json'
// };
// const gcs = new Storage(gcconfig);
// const os = require('os');
// const path = require('path');
// const spawn = require('child-process-promise').spawn;
// const cors = require('cors')({origin: true});
// const Busboy = require('busboy');
// const fs = require('fs');


// exports.onFileChange = functions.storage.object().onFinalize(event => {
//     const bucket = event.bucket;
//     const contentType = event.contentType;
//     const filePath = event.name;
//     console.log('file change detected, function executed started');

//     if (path.basename(filePath).startsWith('resized-')) {
//         console.log('We already renamed that file!');
//         return;
//     }

//     const destBucket = gcs.bucket(bucket);
//     const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
//     const metadata = { contentType: contentType }; 
//     return destBucket.file(filePath).download({
//         destination: tmpFilePath
//     }).then (() => {
//         return spawn('convert', [tmpFilePath, '-resize', '500x500', tmpFilePath]);
//     }).then(() => {
//         return destBucket.upload(tmpFilePath, {
//         destination: 'resized-' + path.basename(filePath),
//         metadata: metadata
//         });
//     });
// });
// For now, not needed