let navMain=document.querySelector(".main-nav"),navToggle=document.querySelector(".main-nav__toggle"),navList=document.querySelector(".main-nav__list");navMain.classList.remove("main-nav--nojs"),navList.classList.remove("main-nav__list--nojs"),navToggle.addEventListener("click",(function(){navMain.classList.contains("main-nav--closed")?(navMain.classList.remove("main-nav--closed"),navMain.classList.add("main-nav--opened")):(navMain.classList.add("main-nav--closed"),navMain.classList.remove("main-nav--opened")),navList.classList.contains("main-nav__list--closed")?(navList.classList.remove("main-nav__list--closed"),navList.classList.add("main-nav__list--opened")):(navList.classList.add("main-nav__list--closed"),navList.classList.remove("main-nav__list--opened"))}));