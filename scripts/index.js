const assignmentListElement = document.querySelector(".assignment_list")
const assignmentClassList = document.querySelector(".class_item")

homeAssignmentData.forEach(assignment => {
	assignmentListElement.innerHTML += `
		<div class="assignment_item ${assignment.subjectClass}">
			<div class="assignment_item_header">
				<h3 class="assignment_item_title">
					${assignment.title}
				</h3>
				<p class="assignment_item_subject">${assignment.subject}</p>
			</div>
			<div class="assignment_detail">
				<a href="#" class="see_detail">See Assignment</a>
			</div>
		</div>
	`
})

homeClassScheadule.forEach(classItem => {
		assignmentClassList.innerHTML += `
		<div class="class_item-body">
			<div class="class_item-time">
				<p>${classItem.subject} (${classItem.start} - ${classItem.end})</p>
			</div>
			<div class="class_item-header ${classItem.ongoing ? "ongoing" : ""}">
				<h3 class="class_item-link">${classItem.link}</h3>
			</div>
			<a href="#" class="class_item-join">Join Class</a>
		</div>
	`
})

const openClassModalBtn = document.getElementById('openClassModal')
const classModal = document.getElementById('classModal')
const addClassBtn = document.getElementById('addClassBtn')
const closeClassModal = document.getElementById('closeClassModal')

openClassModalBtn.addEventListener('click', () => {
	classModal.style.display = 'block'
	document.querySelector('nav').style.zIndex = "-1"
})

window.addEventListener('click', (e) => {
	console.log(e.target)
	if (e.target == classModal) {
		classModal.style.display = 'none'
		document.querySelector('nav').style.zIndex = "0"
	}
})

addClassBtn.addEventListener('click', () => {
	classModal.style.display = 'none'
	document.querySelector('nav').style.zIndex = "0"

})

closeClassModal.addEventListener('click', () => {
	classModal.style.display = 'none'
	document.querySelector('nav').style.zIndex = "0"

})

const sideProfileElement = document.getElementById('sideProfile')
const sideProfileBtnElement = document.getElementById('profileBtn')

sideProfileBtnElement.addEventListener('click', () => {
	sideProfileElement.style.display = 'flex'
})

window.addEventListener('click', (e) => {
	if (e.target == sideProfileElement) {
		sideProfileElement.style.display = 'none'
	}
})
