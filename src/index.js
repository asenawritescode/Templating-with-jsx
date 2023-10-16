const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

const BaseHtml = require('./views/hello.jsx');

router.get('/', function (req, res) {
    res.send(BaseHtml({
        children: `
        <body class="flex items-center justify-center h-screen">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4">Hi there !<span class="text-2xl">😊</span></h1>
            </div>
        </body>`
    }))
});

router.get('/profile/:name', function (req, res) {
    res.send(BaseHtml({
        children: `
        <body class="flex items-center justify-center h-screen">
            <div class="text-center">
                <h1 class="text-4xl font-bold mb-4">Hi ${req.params.name} !<span class="text-2xl">😊</span></h1>
            </div>
        </body>`
    }))
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');