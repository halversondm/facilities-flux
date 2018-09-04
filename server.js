/* eslint no-console: 0 */
import express from 'express';
import webpack from 'webpack';
import middleware from 'webpack-dev-middleware';
import config from './webpack.config.js';

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = 3001;
const app = express();

if (isDeveloping) {
    const compiler = webpack(config);
    app.use(middleware(compiler, {
        publicPath: config.output.publicPath
    }));
    app.use(require("webpack-hot-middleware")(compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));

} else {
    app.use(express.static(__dirname + '/dist'));
}

//app.get('*', function response(req, res) {
//  res.sendFile(path.join(__dirname, 'dist/index.html'));
//});

app.listen(port, 'localhost', function onStart(err) {
    if (err) {
        console.log(err);
    }
    console.info('==> Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});