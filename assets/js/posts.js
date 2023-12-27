const urlParams = new URLSearchParams(window.location.search);
const urlUserId = urlParams.get("userId");
console.log(urlUserId);

let postBox = document.querySelector("#post-box");
console.log(postBox.innerHTML);

const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  for (const post of data) {
    if (urlUserId == post.userId) {
      postBox.innerHTML += ` 
      <div class="col-lg-4 col-sm-6 d-flex justify-content-center">
      <div class="myCard posts my-3 my-lg-0">
        <div class="innerCard">
            <div class="frontSide">
                <p class="title title-top">User: ${post.userId}</p>
                <p><span class="card-title">Title: </span> 
                <br>
                ${post.title}
                </p>

            </div>
            <div class="backSide">
                <p class="title title-bottom">User: ${post.userId}</p>
                <p> <span class="card-title">Message:</span>
                <br>
                ${post.body}
                </p>
            </div>
        </div>
    </div>
  </div>
     `;
    }
  }
};
getPost();

if (urlUserId == "" || urlUserId < 1 || urlUserId > 10) {
  let promptUserId = prompt("Enter User ID");
  console.log(promptUserId);

  if (urlUserId < 1 || urlUserId > 10) {
    window.location.href =
      window.location.origin + "/posts.html?userId=" + promptUserId;
  }
}

$(".slick-slider").slick({
  slidesToShow: 3,
  infinite: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  // dots: false, Boolean
  // arrows: false, Boolean
});

// Image Slider Demo:
// https://codepen.io/vone8/pen/gOajmOo
