'use strict' ;

const searchBS = ' web ' ;
let searchUserId;

let arrayUsers = users.filter( object =>                                                            //находим искомых пользователей
    object.company.bs.toLowerCase().includes( searchBS.toLowerCase() ) ) ; 

arrayUsers.forEach( object => {                                                                     //для каждого пользователя.......... =>

    object.notComplete = {} ;

    let notCompleted = todos.filter( objectTodos =>                                                 //находим невыполненные задачи и .............. =>
        String( object.id ) === String( objectTodos.userId )  && objectTodos.completed === false 
    ) ;

    let key = 1 ;
    notCompleted.forEach( objectNotCompleted => {                                                   //добавляем невыполненные задачи этому пользователю
        object.notComplete[ key++ ] = objectNotCompleted.title ;
    } ) ;

} ) ;

arrayUsers.forEach( finalUser => {                                                                  //выводим результат
    console.log( `пользователь - ${finalUser.name}\nневыполненные задачи:` ) ;
    for( let key in finalUser.notComplete ) {
        console.log( `${key} - ${finalUser.notComplete[ key ]}` )
    }
} ) ;