const pageTurnBtn = document.querySelectorAll('.nextprev-btn');

pageTurnBtn.forEach((element,index) => {
    element.onclick = () => {
        const pageTurnId = element.getAttribute('data-page');
        const pageTurn = document.getElementById(pageTurnId);

        if(pageTurn.classList.contains("turn")){
            pageTurn.classList.remove('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 -index;
            },500);
        }
        else{
            pageTurn.classList.add('turn');
            setTimeout(()=>{
                pageTurn.style.zIndex = 20 + index;
            },500);
        }
    }
})


//contact me button when click
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector('.btn.contact-me');

contactMeBtn.onclick = () => {
    pages.forEach((page,index)=>{
        setTimeout(()=>{
            page.classList.add('turn');

            setTimeout(()=>{
                page.style.zIndex = 20 + index;
            },500)
        },(index+1)*200+100)
    })
}


//create reverse index function
const totalPages = pages.length;
let pageNumber = 0;

function reverseIndex(){
    pageNumber--;
    if(pageNumber < 0){
        pageNumber= totalPages - 1;
    }
}


//back profile button when click
const backProfileBtn = document.querySelector('.back-profile');

backProfileBtn.onclick = () => {
    pages.forEach(( page, index)=>{
        
        setTimeout(()=>{
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            },500)
        },(index+1)*200+100)
    })
}

//opening animation

const coverRight= document.querySelector('.cover.cover-right');
const pageLeft= document.querySelector('.book-page.page-left');

//opening animation (cover Right animation)
setTimeout(() => {
    coverRight.classList.add('turn');
},2100)

setTimeout(() => {
    coverRight.style.zIndex = -1;
},2800)


//opening animation (page Left or profile page animation)
setTimeout(() => {
    pageLeft.style.zIndex = -1;
},3200)

//opening animation (all page Right animation)
pages.forEach(( page, index)=>{
        
    setTimeout(()=>{
        reverseIndex();
        pages[pageNumber].classList.remove('turn');

        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].style.zIndex = 10 + index;
        },500)
    },(index+1)*200+2100)
})


function sendWhatsapp(){
    var phonenumber = "+919029388374";

       var name = document.getElementById("name").value;
       var email = document.getElementById("email").value;
       var message = document.getElementById("message").value;

       var url = "https://wa.me/" + phonenumber + "?text="
       +"*Name :* "+name+"%0a"
       +"*Email :* "+email+"%0a"
       +"*Message :* "+message

       window.open(url, '_blank').focus();
}












