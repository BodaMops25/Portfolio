function getNode(selector) {
	return document.querySelector(selector)
}

//EN LANGUAGE---------------------------------------------------------------------------------------

function ENLang() {
	document.documentElement.lang = 'en'

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
	document.documentElement.lang = 'ru'

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