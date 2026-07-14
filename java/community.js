const addPostBtn = document.getElementById("addPostBtn");
const postText = document.getElementById("postText");
const imageInput = document.getElementById("imageInput");
const posts = document.getElementById("posts");

addPostBtn.addEventListener("click", addPost);

function addPost() {

    const text = postText.value.trim();

    if (text === "" && imageInput.files.length === 0) {
        alert("اكتب منشور أو اختر صورة");
        return;
    }

    const post = document.createElement("div");
    post.className = "post";

    let imageHTML = "";

    if (imageInput.files.length > 0) {

        const imageURL = URL.createObjectURL(imageInput.files[0]);

        imageHTML = `
            <img src="${imageURL}" class="post-image">
        `;
    }

    const currentTime = new Date().toLocaleString();

    post.innerHTML = `

        <div class="post-header">

            <div class="user">

                <div class="avatar">
                    OM
                </div>

                <div>

                    <h3>Omar Mohammed</h3>

                    <div class="time">
                        ${currentTime}
                    </div>

                </div>

            </div>

        </div>

        <div class="post-text">
            ${text}
        </div>

        ${imageHTML}

        <div class="actions">

            <i class="fa-regular fa-thumbs-up"></i>

            <i class="fa-regular fa-comment"></i>

            <i class="fa-solid fa-share"></i>


         <button class="delete-btn">Delete</button>

        </div>

    `;

    posts.prepend(post);

    postText.value = "";
    imageInput.value = "";

    const deleteBtn = post.querySelector(".delete-btn");

    deleteBtn.addEventListener("click", function () {
        post.remove();
    });
}