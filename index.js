const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const mainContentEl = document.getElementById('main-content');


function append(){
    const main = mainContentEl;
    for (let i = 0; i <posts.length; i++) {
    let arrList = posts[i]
    let marginStyle = `margin-bottom: 25px`
    if(arrList === posts[posts.length - 1]){
        marginStyle = ``
    }
    let divValue = innerHtmlValue(marginStyle,arrList)
    main.innerHTML+= divValue
}
}
append()

function innerHtmlValue(Style,arr){
    let htmlValue =  `
            <div class="bg-center" style="${Style}">  
            <section class="section-one bg-center">
                <div class="user-info-container">
                    <img class="logo" src="${arr.avatar}" alt="a display picture of classic painter">
                    <div class="user-container">
                        <h3>${arr.name}</h3>
                        <p class="address regular-weight">${arr.location}</p>
                    </div>
                </div>
                <img class="img-main" src="${arr.post}" alt="a solo picture of a classic artist">
            </section>
            <section class="section-two bg-center">
                <div class="bottom-container">
                    <div class="btn">
                        <button>
                            <img class="likes-btn"src="images/icon-heart.png" alt="a heart logo" data-likes=${arr.likes}>
                        </button>
                        <button>
                            <img src="images/icon-comment.png" alt="a comment logo">
                        </button>
                        <button>
                            <img src="images/icon-dm.png" alt="a dm logo">
                        </button>
                    </div>
                    <article>
                        <p class="likes-Log">${arr.likes} likes</p>
                        <p>${arr.username} <span class="comment regular-weight">${arr.comment}</span></p>
                    </article>
                </div>
            </section>
        </div>
    `   

    
    return htmlValue
}


const allLikesBtn = document.querySelectorAll('.likes-btn')
const allLikesLog = document.querySelectorAll('.likes-Log')
const imgMainBtn = document.querySelectorAll('.img-main')
const postsLength = posts.length


for (let i = 0; i <posts.length; i++) {
    let arrLength = i
    UpdateLikes(arrLength)
}

function UpdateLikes(numLength){
    allLikesBtn[numLength].addEventListener("dblclick",dblClickHandler)
    imgMainBtn[numLength].addEventListener("dblclick",dblClickHandler)
}

function dblClickHandler(event) {
    const dblClickedBtn = event.target
    for(let i = 0; i <posts.length; i++){
    if(dblClickedBtn === allLikesBtn[i]){
       return appendLikes(i)
    } else if(dblClickedBtn === imgMainBtn[i]){
       return appendLikes(i)
    }
}}

function appendLikes(arrLength){
    let update = parseInt(posts[arrLength].likes)
        update++
        posts[arrLength].likes = update
        console.log(update)
        allLikesLog[arrLength].textContent = `${update} likes`
        return
}




