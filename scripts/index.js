const assignmentListElement = document.querySelector(".assignment_list")

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