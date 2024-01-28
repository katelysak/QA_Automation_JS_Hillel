/*
Tack1 https://jsonplaceholder.typicode.com/ 

Створіть дві асинхронні функції для здійснення запитів до сервера:

Перша функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/comments/1 і повертає об'єкт comments у вигляді Promise.

Друга функція робить запит на сервер за посиланням https://jsonplaceholder.typicode.com/posts/2 і повертає об'єкт posts у вигляді Promise.

Викликайте ці функції. Використовуйте методи Promise.all та Promise.allSettled, передаючи їм масив із викликами обох функцій. Виведіть результат виконання цих функцій.
*/

const fetchComments = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments/1');
    const data = await response.json();
    return data;
}
  
const fetchPosts = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await response.json();
    return data;
}
  
const main = async function() {
  try {
    const [comments, posts] = await Promise.all([fetchComments(), fetchPosts()]);
    console.log('Promise.all Result:', { comments, posts });
  
    const results = await Promise.allSettled([fetchComments(), fetchPosts()]);
    console.log('Promise.allSettled Result:', results);
  } catch (error) {
    console.error('Error:', error);
  }
}
  
main();

/*
Tack2(Не обовязково)

Створіть клас (контроллер), який буде мати в собі методи що реалізують функції з таску 1
*/ 