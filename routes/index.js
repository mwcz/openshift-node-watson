/* GET home page. */
function createIndexMiddleware({ assistant }) {
    return function(req, res, next) {

        // if you want access to AssistantV2 or IamAuthenticator, you need to
        // `require` them in this file.  CJS modules are singletons so there's
        // no overhead for that.  But I assume you want the instantiated
        // `assistant`, so that's what I'm passing in to this createIndexRouter
        // function.

        console.log({ assistant });

        res.render('index', { title: 'Express' });
    };
}

module.exports = { createIndexMiddleware };
