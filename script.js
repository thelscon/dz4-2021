'use strict' ;

const searchBS = 'web' ;

users.forEach ( function ( arrayUsers ) {
    
    if ( arrayUsers.company.bs.toLowerCase().includes ( searchBS.toLocaleLowerCase() ) ) {
        
        todos.forEach ( function ( arrayToDo ) {
            if ( arrayToDo.userId === arrayUsers.id && arrayToDo.completed === false ) {  
                console.log ( arrayToDo.title ) ;
            }
        } ) ;

    }

} ) ;


