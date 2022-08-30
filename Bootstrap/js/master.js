// ******************************** start our work *************************

//select alllis
let ourworkSwithers = document.querySelectorAll(".our-work .swithcat li");
// select imgs
let ourworkimgs = document.querySelectorAll(".our-work img");
//loop onn lies
ourworkSwithers.forEach(li => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", mangeImages);
});


//remove class active from all lis and add to cuurent
function removeActive() {
    ourworkSwithers.forEach(li => {

        li.classList.remove("active");
        li.classList.remove("rounded-pill");
        this.classList.add("active");
        this.classList.add("rounded-pill");
    })
}
// mange images
function mangeImages() {
    ourworkimgs.forEach(img => {
        img.parentElement.parentElement.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach(el => {
        el.parentElement.parentElement.style.display = "block";
    })
}
// ******************************** end our work *************************