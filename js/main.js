let userName = localStorage.getItem("userName")
// jquery of project
$(document).ready(function(){
    
  $(".sign-out").each(function(){
    $(this).on("click", ()=>{
      localStorage.setItem("userName", "")
      window.open('../logIn.html', '_self');
    })
  })
  $(".accountName").each(function(){
    $(this).text(userName)
  })
  $(".list-lang-footer").hover(function(){
      $(".ul-lang-footer").css('display', 'block');
      }, function(){
      $(".ul-lang-footer").css('display', 'none')
    });
    $(".list-lang-footer").on("click",function(){
      $(".ul-lang-footer").css('display', 'block');
      });

    $(".ul-lang-footer").hover(function(){
      $(this).css('display', 'block');
      }, function(){
      $(this).css('display', 'none')
    });

  //   ul-lang-nav
  $(".list-lang-nav").hover(function(){
    $(".ul-lang-nav").css('display', 'block');
    $(".op-dark-slide-nav").css('display', 'block')
    }, function(){
    $(".ul-lang-nav").css('display', 'none')
    $(".op-dark-slide-nav").css('display', 'none')
  });

  $(".list-lang-nav").on("click",function(){
    $(".ul-lang-nav").css('display', 'block');
    $(".op-dark-slide-nav").css('display', 'block')
    });

  $(".ul-lang-nav").hover(function(){
    $(this).css('display', 'block');
    $(".op-dark-slide-nav").css('display', 'block')
    }, function(){
    $(this).css('display', 'none')
  });


  //   ul-account-nav
  $(".acc-div-info").hover(function(){
    $(".ul-account-nav").css('display', 'block');
    $(".op-dark-slide-nav").css('display', 'block')
    }, function(){
    $(".ul-account-nav").css('display', 'none')
    $(".op-dark-slide-nav").css('display', 'none')
  });

  $(".acc-div-info").on("click",function(){
    $(".ul-account-nav").css('display', 'block');
    $(".op-dark-slide-nav").css('display', 'block')
    });

  $(".ul-account-nav").hover(function(){
    $(this).css('display', 'block');
    $(".op-dark-slide-nav").css('display', 'block')
    }, function(){
    $(this).css('display', 'none')
  });

    // when click on all button 
    $("#all-btn-cat").on("click", function() {
      $(".widow-left").removeClass("hidden").addClass("appear");
      $(".op-dark-slide").removeClass("disp-none")
      $(".all-ul").removeClass("disp-none")
      $(".close-icon").removeClass("disp-none").addClass("d-flex")
      $("body").css("overflow", "hidden");
    });
    
    $("#closeAll").on("click", function() {
      $(".widow-left").removeClass("appear").addClass("hidden");
      $(".op-dark-slide").addClass("disp-none")
      $(".all-ul").addClass("disp-none")
      $(".close-icon").removeClass("d-flex") .addClass("disp-none")
      $("body").css("overflow", "scroll");
    });

     // when click on all button second all icon
     $("#all-btn-cat-2").on("click", function() {
      $(".widow-left").removeClass("hidden").addClass("appear");
      $(".op-dark-slide").removeClass("disp-none")
      $(".all-ul").removeClass("disp-none")
      $(".close-icon").removeClass("disp-none").addClass("d-flex")
      $("body").css("overflow", "hidden");
    });
  // fuction sign in button if the user is not sign
  if(userName.length <= 0){
    $(".ul-account-nav").prepend(
      `
        <div class="w-25 m-auto">
          <button type="button" class="btn btn-warning fs-8 fw-bold w-100 mb-2"><a href="../logIn.html" class="d-block text-dark link-nav-style">Sign in</a></button>
          <p class="fs-8">
            new customer? 
            <a href="../createAcc.html">Start here</>
          </p>
        </div>
        <hr>
      `
    )
  }

  // function to scroll to top when click on back to top 
  $('#back-top').on( 'click' , scrollToTop)
    function scrollToTop() {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      })
    }
})

// api 
async function getData(){
    await fetch('./js/jsonFile.json')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for(i = 0; i < data.length; i++){
          // fuction add clothes category in section
          if(data[i].category.name === "clothes"){
            $("#clothes-sec").text(`${data[i].category.name}`)
            $(".track").append(`
                <div class="card-container">
                  <div class="card">
                    <img src="${data[i].image}" class="w-100">           
                  </div>
                </div>
            `)
          }
          if(data[i].category.name === "shoes"){
            $("#shoes-sec").text(`${data[i].category.name}`)
            $(".track-1").append(`
                <div class="card-container">
                  <div class="card">
                    <img src="${data[i].image}" class="w-100">           
                  </div>
                  <h3 class="fs-7 pt-1"><span class="fw-bold">Price:</span> ${data[i].price}$</h3>
                </div>
            `)
          }
        }
        
    })
    .catch(function (error) {
        console.log(error);
    })

}
getData();

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const carousel = document.querySelector(".carousel-container");
const track = document.querySelector(".track");
let width = carousel.offsetWidth;
let index = 0;

const prev1 = document.querySelector(".prev-1");
const next1 = document.querySelector(".next-1");
const carousel1 = document.querySelector(".carousel-container-1");
const track1 = document.querySelector(".track-1");
let width1 = carousel.offsetWidth;
let index1 = 0;

window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
});
next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * -width + "px)";
  if (track.offsetWidth - index * width < index * width) {
    next.classList.add("hide");
  }
});

prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * -width + "px)";
});


window.addEventListener("resize", function () {
  width1 = carousel1.offsetWidth;
});
next1.addEventListener("click", function (e) {
  console.log("pass")
  e.preventDefault();
  index1 = index1 + 1;
  prev1.classList.add("show");
  track1.style.transform = "translateX(" + index1 * -width1 + "px)";
  if (track1.offsetWidth - index1 * width1 < index1 * width1) {
    next1.classList.add("hide");
  }
});

prev1.addEventListener("click", function () {
  index1 = index1 - 1;
  next1.classList.remove("hide");
  if (index1 === 0) {
    prev1.classList.remove("show");
  }
  track1.style.transform = "translateX(" + index * -width1 + "px)";
});


