document.addEventListener("DOMContentLoaded", () => {
	let tabParent = document.querySelector(".create__details__container"),
	tabs = document.querySelectorAll(".create_button"),
	tabContent = document.querySelectorAll(".create__block-picture"),
	clickedTab = document.querySelectorAll(".create__summary"); 

	function hideTabContent() {
		tabContent.forEach(item => {
			item.style.display = 'none';
		})	
		tabs.forEach(item => {
			item.removeAttribute("open")
		})
	}
	function showTabContent(i = 0) {
		tabContent[i].style.display = "block";
		// tabs[i].setAttribute("open", open)
	} 
	hideTabContent();
	showTabContent(0);



	tabParent.addEventListener("click", (event) => {	
		const target = event.target; 

		if (target && target.classList.contains('create__summary')) {
			// console.log("hello")
			tabs.forEach((elem, num) => {
				if (elem === target.parentNode) {
					// adding function
					hideTabContent();
					showTabContent(num);
					// if () {
						// item.removeAttribute("open");
					// }
				}
			});
		} else {
			window.addEventListener("click", (e) => {
				const target = e.target; 

				if (target !== target.classList.contains('create__summary')) {
						// item.removeAttribute("open");
						tabs.forEach(item => item.removeAttribute("open"))
				}
			})
			// tabs.forEach(item => item.removeAttribute("open"))
		} 
	});

		// if (target && target.classList.contains("create__summary")) { 
		// 	console.log("this parent", target.parentNode)
		// }

		// console.log(clickedTab.parentNode)

		// var nums = clickedTab.forEach(item => {
		// 	// console.log(item.parentNode)
		// });
		// console.log(nums)

				// clickedTab.forEach(elem => {
				// 	if (item === elem) {
				// 		hideTabContent();
				// 		showTabContent(num);
				// 	}
				// });
/*
				tabs.forEach((item, num) => {
				clickedTab.forEach((elem, num) => {
					// console.log(elem.parentNode)
					if (item === elem.parentNode) {
						hideTabContent();
						showTabContent(num);

					}

				})
				// console.log(item)
				// console.log(num)


			});

*/

	/* =========== burger menu ============== */
	// какие навыки необхдимы программисту?
	const burgerBtn = document.querySelector(".nav__btn");
	const parentBody = document.querySelector("body");
	const mobile = document.querySelector(".mobile");
	const closeButton = document.querySelector(".closed");
	const burgerImage = document.querySelector(".burger__image");
	const body = document.querySelector("body");
	const mobileNav = document.querySelector(".mobile__nav");

	const blur = "15px"

	burgerBtn.addEventListener("click", () => {
		console.info("clicked")
		// mobile.style.backdropFilter = "	";
		if (!mobile.classList.contains("blur")) {
			mobile.classList.add("blur")
			mobileNav.style.opacity = "100%"	
			mobileNav.style.visibility = "visible"	
			console.log(this)
		}
		else { 
			// mobileNav.style.opacity = "0%";
			mobile.classList.remove('blur')
			// mobileNav.classList.remove("mobileOpacity")	
			mobileNav.style.opacity = "0%"	
			mobileNav.style.visibility = "hidden"	

		}
	})

	//  если был resize то выкл блюр
	window.addEventListener("resize", () => {
			mobileNav.style.opacity = "0%"		
		mobile.classList.remove("blur");
		burgerBtn.classList.remove("opened")
	});
	// если был scroll то выкл блюр
	window.addEventListener("scroll", () => {
			mobileNav.style.opacity = "0%"		
		mobile.classList.remove("blur");
		burgerBtn.classList.remove("opened")
	})


	// window.addEventListener("scroll", () => {if (mobile.classList.contains("navigation__mobile")) {mobile.classList.remove("navigation__mobile")}})

	// Blobs animation 

	/*
	1. получить единицу высоту body
	2. получить px высоту blobs элемента
	3. объеденить вместе высоту body + высоту blobs элемента = получим высоту полного движения для blobs 
	4. добавить к стлию @keyframes anim{
	0% {
		top: 	сюда;
		rotate: 0deg;
	}
	100% {
		top: и сюда кажется!;
		rotate: 360deg;
	}

	}
	*/

	/* const bodyHeight = document.querySelector("body").clientHeight,
	   blobs = document.querySelectorAll(".blobs");

	   */



});
