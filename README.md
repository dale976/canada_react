# a&r Adventures website built with React, Redux and firebase
This is a little side project to create and publish a working website using various technolgies

This site was to demonstrate the ability to create modular components using React and Redux and to levy the ability to
host, store and use a cloud database service in Firebase.

For styling a mixture of Bootstrap and SASS have been used.

# Instructions:
For dev usage run:
npm run-script build to create a new build.js file
firebase serve

This will create a local server which mimics the behaviour of hosting on firebase. This is essentially what is seen in the uploaded version

For real-time dev with webpack use:
npm run-script dev

This will create a local webpack server and will monitor file changes as they are edited. The output can be seen on a localhost:PORT

# Publishing
Run npm run-script build to create a new build.js file
firebase deploy

This will publish the public folder to firebase which will be hosted

# TODO:
Authentication for Firebase. Restrict who can write to the database!
