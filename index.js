function getgetScrollMaxY()(){
	"use strict"
    	let innerh = window.innerHeight || ebody.clientHeight, yWithScroll = 0

    	if (window.innerHeight && window.getScrollMaxY()){
		// Firefox 
		yWithScroll = window.innerHeight + window.getScrollMaxY()
    	} else if (document.body.scrollHeight > document.body.offsetHeight){ 
		// all but Explorer Mac 
		yWithScroll = document.body.scrollHeight
    	} else { 
		// works in Explorer 6 Strict, Mozilla (not FF) and Safari 
		yWithScroll = document.body.offsetHeight
    	} 
    	return yWithScroll-innerh; 
}

let activScrollInterval = false

function getNode(node) {
	return document.querySelector(node)
}
let a
setTimeout(()=>{
	a = getNode('body').offsetHeight
},100)

pageYOffset = scrollY

getNode('.scrollKnob').style.top = pageYOffset * 100 / (getScrollMaxY() - 420) / 100 * (window.innerHeight - window.innerHeight * 0.139) + 'px'

//MOBILE MENU

function mobileMenuOpen() {
	getNode('.mobileMenu').style.display = 'flex'
	setTimeout(()=>{
		getNode('.mobileMenu').style.opacity = 1
	},10)
}
function mobileMenuClose() {
	getNode('.mobileMenu').style.opacity = 0
	setTimeout(()=>{
		getNode('.mobileMenu').style.display = 'none'
	},200)
}

//SCROLL FUNCTION

function smoothScroll() {
	activScrollInterval = true
	const smoothScrollInterval = setInterval(() => {

		if(scrollY > pageYOffset && pageYOffset <= getScrollMaxY()) {
			pageYOffset += (scrollY - pageYOffset) / 40
		}

		else if(pageYOffset > scrollY && pageYOffset >= 0) {
			pageYOffset -= (pageYOffset - scrollY) / 40
		}

		if(scrollY === Math.round(pageYOffset * 10) / 10) {
			clearInterval(smoothScrollInterval)
			activScrollInterval = false
		}

		scrollTo(0, pageYOffset)

		//SCROLL WITH MOUSE

		getNode('.scrollBar').onmousedown = () => {
			getNode('html').style.webkitUserSelect = 'none'
			let mouseHoldDown = true
			document.onmousemove = event => {
				if(mouseHoldDown) {
					if(event.clientY <= 50) {
						scrollY = 0
					}
					else if(event.clientY < window.innerHeight - 50 && event.clientY > 0) {
						scrollY = event.clientY * 100 / (window.innerHeight - window.innerHeight * 0.139) / 100 * (getScrollMaxY() - 420)
					}
					else {
						scrollY = (window.innerHeight - 50) * 100 / (window.innerHeight - window.innerHeight * 0.139) / 100 * (getScrollMaxY() - 420)
					}
					activScrollInterval === false ? smoothScrollTo(scrollY) : {}
				}
			}
			document.onmouseup = () => {
				mouseHoldDown = false
				getNode('html').style.webkitUserSelect = 'auto'
			}
		}
		getNode('.scrollKnob').onmousedown = () => {
			getNode('html').style.webkitUserSelect = 'none'
			let mouseHoldDown = true
			document.onmousemove = event => {
				if(mouseHoldDown) {
					if(event.clientY <= 50) {
						scrollY = 0
					}
					else if(event.clientY < window.innerHeight - 50 && event.clientY > 0) {
						scrollY = event.clientY * 100 / (window.innerHeight - window.innerHeight * 0.139) / 100 * (getScrollMaxY() - 420)
					}
					else {
						scrollY = (window.innerHeight - 50) * 100 / (window.innerHeight - window.innerHeight * 0.139) / 100 * (getScrollMaxY() - 420)
					}
					activScrollInterval === false ? smoothScrollTo(scrollY) : {}
				}
			}
			document.onmouseup = () => {
				mouseHoldDown = false
				getNode('html').style.webkitUserSelect = 'auto'
			}
		}

		let scrollKnobStyleTop = pageYOffset * 100 / (getScrollMaxY() - 550) / 100 * (window.innerHeight - window.innerHeight * 0.139)

		if(scrollKnobStyleTop >= 0 && scrollKnobStyleTop <= window.innerHeight - 50) {
			getNode('.scrollKnob').style.top = scrollKnobStyleTop  + 'px'
		}


		//PARALAX--------------------------------------------------------------------------------

		getNode('.main').style.top = pageYOffset / 2 + (0 * 100 / getScrollMaxY() / 100 * getScrollMaxY()) + 'px'

		getNode('body').style.height = a + pageYOffset / 2 + (0 * 100 / getScrollMaxY() / 100 * getScrollMaxY()) + 'px'
	}, 1)
}

//SMOOSH SCROLL---------------

function smoothScrollTo(scrollToInPX) {
	scrollToInPX >= 0 && scrollToInPX <= getScrollMaxY() ? scrollY = scrollToInPX : {}

	if(scrollToInPX < 0) {scrollY = 0; console.log('invalid scrolling value(less than zero)')}
	else if(scrollToInPX > getScrollMaxY() ) {scrollY = getScrollMaxY(); console.log('invalid scrolling value(higher maximum site height)')}

	smoothScroll()
}

//CURSOR_MODULE--------------------------------------------------------------------

window.onmousemove = event => {
	getNode('.cursor').style.top = event.pageY + 'px'
	getNode('.cursor').style.left = event.pageX + 'px'
	getNode('.cursor').style.opacity = 1
}

//CURSOR_MODULE--------------------------------------------------------------------

let redColor = 0
let greenColor = 255

let firstScreenParalax = 120

if(window.innerWidth > 1024) {
	document.onwheel = event => {
		if(event.deltaY > 0) {redColor += 2.2; greenColor -= 2.2}
		else {redColor -= 2.2; greenColor += 2.2}
		getNode('.cursor').style.boxShadow = `0px 0px 90px 70px rgba(${redColor}, ${greenColor}, 0, 1)`

		//SCROLLBAR_MODULE--------------------------------------------------------------------

		if((scrollY >= 0 || event.deltaY > 0) && (scrollY <= getScrollMaxY() || event.deltaY < 0)) scrollY += event.deltaY * 20
		activScrollInterval === false ? smoothScrollTo(scrollY) : {}
	}
}

else {
	window.onscroll = () => {
		getNode('.main').style.top = scrollY / 2 + (0 * 100 / getScrollMaxY() / 100 * getScrollMaxY()) + 'px'
		getNode('body').style.height = a + scrollY / 2 + (0 * 100 / getScrollMaxY() / 100 * getScrollMaxY()) + 'px'
	}
}

//ABOUT ME_EYES SCRIPT------------------------------------------------------------------

window.onmousemove = event => {
	getNode('.innerImgEyes').style.left = (((event.clientX + 400) * 100 / window.innerWidth) / 80) + 49 + '%'
	getNode('.innerImgEyes').style.top = ((event.clientY * 100 / window.innerHeight) / 40) + 49 + '%'
}

//CURSOR HEADER_ANIM--------------------------------------------------------------------

getNode('.header').style.top = 0 + 'px'
let headerAnim  = setTimeout(() => {
	getNode('.header').style.top = - 70 + 'px'
	clearTimeout(headerAnim)
}, 5000)

smoothScroll()

//US LANGUAGE---------------------------------------------------------------------------------------

function USLang() {
	getNode('.logo_text').innerText = "Bohdan Konoplev\njunior layout designer"

	getNode('#inner_link_aboutMe').innerText = "About me"
	getNode('#inner_link_myWorks').innerText = "My works"
	getNode('#inner_link_contacts').innerText = "Contacts"

	getNode('.firstScreen_inner > .inner_text > .text_overTitle').innerText = "Greetings"
	getNode('.firstScreen_inner > .inner_text > .text_title').innerText = "I will make you a website in HTML & CSS or on Tilda Publishing"
	getNode('.firstScreen_inner > .inner_text > .text_title').style.fontSize = "3.5vw"
	getNode('.firstScreen_inner > .inner_text > .text_subtitle').innerText = "I will make it convenient for your users and breathe life into your site"
	getNode('.firstScreen_inner > .inner_text > .text_button').innerText = "My works"

	getNode('.aboutMe > .aboutMe_inner > .inner_title').innerText = "About me"
	getNode('.aboutMe > .aboutMe_inner > .inner_description > .description_text > #aboutMe').innerText = "My name is Bogdan, I am 16 years old and I am a site designer. I strive to become an expert in this industry and you can help me with this. In working with the customer, I undertake to be honest, responsible and efficient."
	getNode('.aboutMe > .aboutMe_inner > .inner_description > .description_text > #myTask').innerText = "My task as a layout designer is to implement your idea and make it convenient for the end user."
	getNode('.aboutMe > .aboutMe_inner > .inner_title_mySkills').innerText = "My skills"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_html_css > span').innerText = "1 & a half years of experience"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_tilda > span').innerText = "5 months of experience"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_figma > span').innerText = "5 months of experience"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_js > span').innerText = "1 months of experience"

	getNode('.myWorks > .myWorks_inner > .inner_title').innerText = "My works(6)"

	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #work1').innerText = "Cool site for a dealer office"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work1').innerHTML = "Spent time — <span id=\"day1\">1 День</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work1 > #day1').innerText = "1 Day"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment1').innerHTML = "Customer assessment — <span id=\"value6_1\">6.1 из 10</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment1 > #value6_1').innerText = "6.1 out of 10"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_username_work1').innerHTML = "Valentina Ivanovna<img src=\"img/username.png\" alt=\"\">"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_review_work1').innerText = "The man is very good, he did everything quickly and efficiently. I recommend"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_review_work1').style.fontSize = "1.6vw"

	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #work2').innerText = "Site for Girl"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work2').innerHTML = "Spent time — <span id=\"day3\">1 День</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work2 > #day3').innerText = "3 Day"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment2').innerHTML = "Customer assessment — <span id=\"value7_5\">6.1 из 10</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment2 > #value7_5').innerText = "7.5 out of 10"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_username_work2').innerHTML = "Girl Ksyusha<img src=\"img/username.png\" alt=\"\">"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_review_work2').innerText = "I really liked it. And the person is nice and did nice."

	getNode('.myWorks > .myWorks_inner > .centerItem > .inner_button').innerText = "More work"

	getNode('.contacts > .contacts_inner > .inner_title').innerText = "Contacts"
	getNode('.contacts > .contacts_inner > .inner_contacts > .contacts_item > #item_link1').innerText = "to write"
	getNode('.contacts > .contacts_inner > .inner_contacts > .contacts_item > #item_link2').innerText = "to write"

	getNode('.footer > .footer_items > .inner_logo > .logo_text').innerText = "Bohdan Konoplev\njunior layout designer"
	getNode('.footer > .footer_items > .items_up').innerHTML = "<img src=\"img/ArrowUp.png\" alt=\"\" width=\"32px\">Up"
	getNode('.footer > .footer_items > .items_fastConnect').innerText = "Quick connection"

	getNode('.createdBy').innerText = "Designer: Mihail Patyoha"
}

//RU LANGUAGE---------------------------------------------------------------------------------------

function RULang() {
	getNode('.logo_text').innerText = "Bohdan Konoplev\njunior верстальщик"

	getNode('#inner_link_aboutMe').innerText = "Обо мне"
	getNode('#inner_link_myWorks').innerText = "Мои работы"
	getNode('#inner_link_contacts').innerText = "Контакты"

	getNode('.firstScreen_inner > .inner_text > .text_overTitle').innerText = "Приветствую вас"
	getNode('.firstScreen_inner > .inner_text > .text_title').innerText = "Сверстаю вам сайт на HTML & CSS или на Tilda Publishing"
	getNode('.firstScreen_inner > .inner_text > .text_subtitle').innerText = "Сделаю его удобным для ваших клиентов и вдохну жизнь в ваш сайт"
	getNode('.firstScreen_inner > .inner_text > .text_button').innerText = "Мои работы"

	getNode('.aboutMe > .aboutMe_inner > .inner_title').innerText = "Обо мне"
	getNode('.aboutMe > .aboutMe_inner > .inner_description > .description_text > #aboutMe').innerText = "Меня зовут Богдан, мне 16 лет и я верстальщик сайтов. Стремлюсь стать экспертом в этой отрасли и вы можете мне помочь в этом. В работе с заказчиком обязуюсь быть чесным, ответственным и оперативным."
	getNode('.aboutMe > .aboutMe_inner > .inner_description > .description_text > #myTask').innerText = "Моя задача как верстальщика, реализовать вашу задумку и сделать ее удобной для конечного пользователя."
	getNode('.aboutMe > .aboutMe_inner > .inner_title_mySkills').innerText = "Мои навыки"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_html_css > span').innerText = "1 с половиной года опыта"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_tilda > span').innerText = "5 месяцев опыта"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_figma > span').innerText = "5 месяцев опыта"
	getNode('.aboutMe > .aboutMe_inner > .inner_skillstable > #skillstable_item_js > span').innerText = "1 месяцев опыта"

	getNode('.myWorks > .myWorks_inner > .inner_title').innerText = "Мои работы(6)"

	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #work1').innerText = "Крутой сайт для дилерной канторы"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work1').innerHTML = "Потраченое время — <span id=\"day1\">1 День</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work1 > #day1').innerText = "1 День"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment1').innerHTML = "Оценка заказчика — <span id=\"value6_1\">6.1 из 10</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment1 > #value6_1').innerText = "6.1 из 10"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_username_work1').innerHTML = "Валентина Ивановна<img src=\"img/username.png\" alt=\"\">"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_review_work1').innerText = "Человек очень хороший, сделал все быстро и качествонно. Рекомендую!"

	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #work2').innerText = "Сайт для Девушки	"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work2').innerHTML = "Потраченое время — <span id=\"day3\">1 День</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #spentTime_work2 > #day3').innerText = "3 Дня"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment2').innerHTML = "Оценка заказчка — <span id=\"value7_5\">6.1 из 10</span>"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #CustomerAssessment2 > #value7_5').innerText = "7.5 из 10"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_username_work2').innerHTML = "Девочка Ксюша<img src=\"img/username.png\" alt=\"\">"
	getNode('.myWorks > .myWorks_inner > .inner_work > .work_stats > #stats_review_work2').innerText = "Мне очень понравилось. И человек приятный и сделал приятно."

	getNode('.myWorks > .myWorks_inner > .centerItem > .inner_button').innerText = "Еще работы"

	getNode('.contacts > .contacts_inner > .inner_title').innerText = "Контакты"
	getNode('.contacts > .contacts_inner > .inner_contacts > .contacts_item > #item_link1').innerText = "Написать"
	getNode('.contacts > .contacts_inner > .inner_contacts > .contacts_item > #item_link2').innerText = "Написать"

	getNode('.footer > .footer_items > .inner_logo > .logo_text').innerText = "Bohdan Konoplev\njunior верстальщик"
	getNode('.footer > .footer_items > .items_up').innerHTML = "<img src=\"img/ArrowUp.png\" alt=\"\" width=\"32px\">Наверх"
	getNode('.footer > .footer_items > .items_fastConnect').innerText = "Быстрая связь"

	getNode('.createdBy').innerText = "Дизайнер: Михаил Патьоха"
}


// <script>

//     const html = document.querySelector('html')
//     const browser_id = navigator.userAgent;   

//     // else if (browser_id.search(/Safari/) != -1) alert('Safari');
//     // else if (browser_id.search(/MSIE/) != -1) alert('MSIE');
//     // else if (browser_id.search(/Opera/) != -1) alert('Opera');

//     if(html.offsetWidth >= 1145) {

//       const scrollbar = document.querySelector('.scrollbar')
//       const scrollLine = document.querySelector('.scrollLine')
//       let y = 0
      
//       document.onwheel = (event) => {
//         if(event.deltaY > 0 && y < html.offsetHeight - 600) {
//           y += 100
//         }
//         else if(event.deltaY < 0 && y >= 40) {
//           y -= 100
//         }
//       }

//       scrollLine.onmousedown = () => {
//         html.style.webkitUserSelect = 'none'
//         document.onmousemove = (event) => {
//           if(event.clientY > 32 && event.clientY < window.innerHeight - 60) {
//             y = event.clientY * 100 / window.innerHeight / 100 * html.offsetHeight - 200
//           }
//         }
//       }
//       document.onmouseup = () => {
//         html.style.webkitUserSelect = 'auto'
//         document.onmousemove = (event) => {
//           event = 0
//         }
//       }

//       setInterval(() => {

//         scrollbar.style.top = (pageYOffset * (window.innerHeight + window.innerHeight * 0.08)) / html.offsetHeight + 'px'

//         if(y > pageYOffset) {
//           if (browser_id.search(/Chrome/) != -1) {
//             pageYOffset += (y - pageYOffset) / 40
//           }
//           else if (browser_id.search(/Firefox/) != -1) {
//             pageYOffset += (y - pageYOffset) / 10
//           }        
//           scrollTo(0, pageYOffset)
//         }
//         else if(y < pageYOffset) {
//           if (browser_id.search(/Chrome/) != -1) {
//             pageYOffset -= (pageYOffset - y) / 40
//           }
//           else if (browser_id.search(/Firefox/) != -1) {
//             pageYOffset -= (pageYOffset - y) / 10
//           }
//           scrollTo(0, pageYOffset)
//         }
//       }, 1)

//     }

//     else {

//     }

//   </script>
