'use strict' ;

const searchBS = 'web' ;
let searchUserId;

users.forEach ( function ( arrayUsers ) {
    
    if ( arrayUsers.company.bs.toLowerCase().includes ( searchBS.toLocaleLowerCase() ) ) {

        console.log ( `Web-developer - ${arrayUsers.name}:` ) ;
        
        todos.forEach ( function ( arrayToDo ) {
            if ( arrayToDo.userId === arrayUsers.id && arrayToDo.completed === false ) {  
                console.log ( `\t${arrayToDo.title}` ) ;
            }
        } ) ;

    }

} ) ;


