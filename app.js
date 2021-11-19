const miaus =[
    {
        name: "Kitty",
        age: 5,
        sleep:
            ['under the bed', 'kitchen'],
        image:'./images/image0.jfif'
    }, 

    {
        name: "Milly",
        age: 7,
        sleep:
            ['chair', 'laundrymachine'],
        image:'./images/images.jfif'
    }, 

    {
        name: "Pilly",
        age: 3,
        sleep: 
        ['tv', 'gym'],
        image:'./images/Tabby_cat_with_blue_eyes-3336579.jpg'
    } 
]

const express = require( 'express' );
const app = express();

app.set( 'views', __dirname + '/views' ); 
app.set( 'view engine', 'ejs' );
app.use(express.static(__dirname + "/static"));

app.get('/cars', function( request, response ){
	response.render( 'cars' );
});

app.get('/cats', function( request, response ){
	response.render( 'cats' , {miaus});
});

app.get('/cars/new', function( request, response ){
	response.render( 'form' );
});

app.listen( 8080, function(){
console.log('This server is running in port 8080');
});
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.get('/:name', function( request, response ){
    let name = String( request.params.name );

    let result = miaus.find( cat =>{
        if(cat.name === name){
            return cat
        }
    });


    if(result === undefined){
        response.render('cat1', {found:false});
    }
    else{
        response.render( 'cat1', {found: true, miaus: result});
    }

})


/*app.get('/:name', function( request, response ){ //Error on the result

    let name2 = String( request.params.name );
    console.log("AAAAAAA "+ name2);

    let result = miaus.find( miau => {
        if( miau.name === name2 ){
            
            return miau;
            
        }
        console.log(result);
        if( result === undefined ){
            response.render( 'cat1', { found: false } );
        }
        else{
            response.render( 'cat1', { found: true, miaus: result } );
        }
    })

});*/


