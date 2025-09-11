var list = 
[
    {icon: '<i class="fa-brands fa-twitch"></i>', title: "TWITCH", description: "poggers"},
    {icon: '<i class="fa-brands fa-docker"></i>', title: "DOCKER", description: "poggers"},
    {icon: '<i class="fa-brands fa-github"></i>', title: "TWITCH", description: "poggers"}
];


for(var i = 0; i < list.length;i++) {
    var cards = `<div class="card">
            <div class="img-cont">
                ${list[i].icon}
            </div>
            <div class="title">
                ${list[i].title}
            </div>
            <div class="text-cont">
            ${list[i].description}
            </div>
            <div class="btn">
                <button type="button">Read more</button>
            </div>
        </div>`;

        document.getElementById("cards-list").innerHTML += cards;
}

