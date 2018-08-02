let contactsInfo = [
  {
  	name: "Ali",
  	number : "03032289212",
  	lastMsg : "blah blah",
  	lastSeen : `<i class="fas fa-clock"></i>`,
  	email : "sa248848@gmail.com",
  	img : `<i class="fas fa-user-circle"></i>`

 },

 {
 	name :"Zeeshan",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-check"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },

  {
 	name :"danish",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-clock"></i>`,
 	email : "12345@gmail.com",
 	img : `<img src="1.jpg" class="img1">`
 },


 {
 	name :"sarmad",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : `<i class="fas fa-check-double"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"annas",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-check"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"hamza",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : "2 hours ago",
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"ahmed",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen :`<i class="fas fa-check-double"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"babar",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : `<i class="fas fa-check-double"></i>`,
 	email : "12345@gmail.com",
 	img : `<i class="fas fa-user-circle"></i>`
 },


 {
 	name :"noman",
 	number : "03013462928",
 	lastMsg : "blah blah",
 	lastSeen : `<i class="fas fa-clock"></i>`,
 	email : "12345@gmail.com",
 	img : `<img src="2.jpg" class="img1">`
 }


];




function initilizar() {

	let userInfo = document.querySelector(".name-list");
	for (let i=0; i<10; i++) {
		userInfo.innerHTML += `<div class="list-item"> ${contactsInfo[i].img}<div class="names-flex"> <span class="spans-1"><span> ${contactsInfo[i].name}</span><span class="lastSeen1"> ${contactsInfo[i].lastSeen}</span></span> <span class="spans"> ${contactsInfo[i].lastMsg}</span></div></div>`;
	}

}
