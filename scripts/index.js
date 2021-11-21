const assignmentListElement = document.querySelector(".assignment_list")

homeAssignmentData.forEach(as => {
	assignmentListElement.innerHTML += `
		<div class="assignment_item ${as.mapelClass}">
			<div class="assignment_item_header">
				<h3 class="assignment_item_title">
					${as.title}
				</h3>
				<p class="assignment_item_subject">${as.mapel}</p>
			</div>
			<div class="assignment_detail">
				<a href="#" class="see_detail">See Assignment</a>
			</div>
		</div>
	`
})