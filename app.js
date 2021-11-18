const express = require( 'express' );
const app = express();

app.set( 'views', __dirname + '/views' ); 
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));

app.get('/cars', function( request, response ){
	response.render( 'cars' );
});

app.get('/cats', function( request, response ){
	response.render( 'cats' );
});

app.get('/cars/new', function( request, response ){
	response.render( 'form' );
});

app.listen( 8080, function(){
console.log('This server is running in port 8080');
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.get('/miau1', function( request, response ){

    let name = "mimido"
    let age = 5
    let sleep = ['under the bed','the kitchen'];

    let obj = { //Junta las ods variables
        name,
        age,
        sleep
}

	response.render( 'cat1', obj);
});




