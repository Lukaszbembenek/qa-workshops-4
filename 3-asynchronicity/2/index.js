// Using fetch get data from url 'https://jsonplaceholder.typicode.com/todos/1'
// Returned object has async function .json() which returns json format of response
// Try to get that json value with .then chaining
// Try to solve this issue with async await
import fetch from 'node-fetch'

// fetch usage example:
fetch('https://jsonplaceholder.typicode.com/posts')
// function returning fetch example:
const getPosts = () => fetch('https://jsonplaceholder.typicode.com/posts')
