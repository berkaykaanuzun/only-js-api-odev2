const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('userId')
console.log(myParam);

let postBox = document.querySelector("#post-box");
console.log(postBox.innerHTML);

const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  for (const post of data) {
    if(myParam == post.userId){
    postBox.innerHTML += `   <div class="posts my-5">
                            <h2>Title:${post.title}</h2>
                            <p>UserID:${post.userId}</p>
                            <p>ID:${post.id}</p>
                                <p>Body:${post.body}</p>
                                </div>`;
  }
}};
getPost();


