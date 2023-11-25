/* globel console, alert */


// [0] Break Example => 

var i, x ;

    MainLoop:

    for (i = 1; i < 5 ; i++ )
    {
        ChiledLoop:

        for (x = 15; x < 20; x++)
        {

            if (x === 19) 
            {

                
                break MainLoop;

            }

            console.log( i + " => " + x);
        }
    }


    // [1] Continue Example =>

    var w, z ;

    BigLoop:

    for(w = 1; w < 5; w++)
    {
        SubLoop:

        for(z = 15; z <= 20; z++)
        {

            if ( z === 19)
            {

                continue SubLoop;
            }

            console.log( w + " => " + z);
        }
    }
