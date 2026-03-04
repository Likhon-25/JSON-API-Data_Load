const loadPost = () => {
    const url = "https://jsonplaceholder.typicode.com/posts";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            displayPost(data);
        })
};


// {
//     "userId": 10,
//     "id": 91,
//     "title": "aut amet sed",
//     "body": "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
// }
const displayPost = (posts) => {

    // *1. get the container & empty the container
    const postContainer = document.getElementById("post-container");
    postContainer.innerHTML = "";
    posts.forEach((post) => {
        //*2 create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
        <div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>
        `

        //*3. add to the container
        postContainer.append(postCard)
    })
}
// loadPost()


