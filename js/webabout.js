window.addEventListener('load', function () {
    // console.log("11111");
    let span = document.querySelectorAll("#web_list>li>h2");

    let newspan = document.createElement("span");

    newspan.innerHTML = "NEW"

    span[0].appendChild(newspan)

})