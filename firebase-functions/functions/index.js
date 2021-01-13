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

//*****************************

//5 most recent comments function

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.aggregateComments = functions.firestore.document('posts/{postId}/comments/{commentId}').onWrite((change, context)=> {
        const afterData = change.after.data(); // data after the write

        if (afterData !== null) {
        const postId = context.params.postId;
        const commentId = context.params.commentId;

        console.log(commentId + ":"+ postId);

        // ref to parent doc
        const docRef = admin.firestore().collection('posts').doc(postId)

        // orders comments by created at time
        return docRef.collection('comments').orderBy('date', 'desc')
        .get()
        .then(querySnapshot=> {
            //creates a count of all the comments
            const commentCount = querySnapshot.size
            console.log(commentCount);
            // initializes array of recent comments
            const recentComments = [];

            // add 5 most recent comments to array
            querySnapshot.forEach(doc => {
                recentComments.push( doc.data() )
            })

            recentComments.splice(5)
            console.log(recentComments);

            // record last comment timestamp
            const lastActivity = recentComments[0].date 
            console.log(lastActivity);

            const data = { commentCount, recentComments, lastActivity } 
            console.log(data);

            // updates our posts method with our new data
            return docRef.update(data);
            
        })
        .catch(err=> console.log(err))
    }
});