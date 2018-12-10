

 getPosts()
 function getPosts  ()  {
     fetch('http://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => console.log(posts))
}
