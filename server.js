var restify = require('restify');
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath();
 
const server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});



server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.get('/*', restify.plugins.serveStatic( {

  directory: pathToSwaggerUi,

  default: 'index.html'

}));

server.get('/echo/:name', function (req, res, next) {
  res.send(req.params);
  return next();
});
 
server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});
