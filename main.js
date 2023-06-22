// Progress on Scroll
let prog = document.getElementById("progress")
let heiight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
window.addEventListener("scroll" , () => {
  let top = document.documentElement.scrollTop;
  prog.style.width = `${(top / heiight) * 100}%`
}) 


// Button Help You To Go Up.

let UPbtn = document.querySelector(`.UP`);

window.addEventListener("scroll" , function() {
    if (window.pageYOffset >= 600) {
        UPbtn.style.display = `block`; 
    } else {
        UPbtn.style.display = `none`; 
    }
})

UPbtn.onclick = function() {
    window.scrollTo({
        left : 0,
        top : 0,
        behavior : `smooth`
    })
}

// ###############################################################

// Fall Up The Progress When You Arrive

let Section = document.getElementById(`Our_Skills`);
let spans = document.querySelectorAll(`.prog span`);

window.addEventListener("scroll" , function () {
    if (window.scrollY >= Section.offsetTop - 100) {
      spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }   
})

// ###############################################################

// This Can Go Up The Number
let nums = document.querySelectorAll(".Our-Awesome .box h1");
let section = document.getElementById(`Stats`);
let started = false; // Function Started ? No

window.addEventListener("scroll" , function () {
    if (window.scrollY >= section.offsetTop - 200) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
})

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}

// ###############################################################
// Show the list on click.

let last = document.querySelector(`header .container .links .last`);
let list = document.querySelector(`header .container .list`);
let stat = true

last.addEventListener("click" , function() {
    list.classList.toggle("active")
})

// ###############################################################
// Change Photo On click
let photos = ["../template 3/images/video-preview.jpg" , "../template 3/images/تنزيل.jpg" , "../template 3/images/images.jpg" , "./images/images (1).jpg" , "../template 3/images/images (2).jpg" , "../template 3/images/images (3).jpg" , "../template 3/images/images (4).jpg"];

let getBtn = document.querySelectorAll(`.video .main-video-section .content ul li`);
let imageVideo = document.querySelector(`.video .main-video-section .right-part img`);

getBtn.forEach((el) => {
  el.onclick = function() {
    imageVideo.setAttribute("src" , photos[el.getAttribute("data-psi")])
  }
})

// ###############################################################

let Second = document.querySelectorAll(`.Latest .Latest-section .info .taime div h1`);
let result = 0;
let min = 0;
let h = 0;
let d = 0;

setInterval(function() {
  result += 1
  Second[3].innerHTML = result
  if (Second[3].innerHTML == 60) {
    result = 0;
    min += 1;
    Second[2].innerHTML = min;
    if (Second[2].innerHTML == 60) {
      min = 0;
      h += 1;
      Second[1].innerHTML = h;
      if (Second[1].innerHTML == 24) {
        h = 0;
        d += 1;
        Second[0].innerHTML = d;
      }
    }
  } 
} , 1000)


// // on scroll show
// ScrollReveal({ 
//   reset: false,
//   distance: `80px`,
//   duration: 2000,
//   delay: 200
// });

// ScrollReveal().reveal(`.toe`, { origin: `top` });
// ScrollReveal().reveal('.boe', { origin: `bottom`});
// ScrollReveal().reveal('.leo', { origin: `left` });
// ScrollReveal().reveal('.roe', { origin: `right` });

// ScrollReveal().reveal('.onesecondroe' , {delay: 500 , origin: 'right'})
// ScrollReveal().reveal('.twosecondroe' , {delay: 1000 , origin: 'right'})