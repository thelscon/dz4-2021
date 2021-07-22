'use strict' ;

const userId = users[ users.findIndex( object => object.company.bs.includes( ' web ' ) ) ].id ;

const arrayNoToDo = todos.filter( objectTodos => userId === objectTodos.userId && objectTodos.completed === false ) ;

console.log( arrayNoToDo ) ;