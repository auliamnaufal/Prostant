class Statistic extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
		<section class="statistic">
			<div class="panel">
				<h2 class="panel_header">Finished Tasks</h2>
				<div class="panel_body">
					<ul class="value_list">
						<li class="value_item">20</li>
						<li class="value_item">16</li>
						<li class="value_item">12</li>
						<li class="value_item">8</li>
					</ul>

					<div class="body_list">
						<div class="body_item">
							<div
								class="item_data"
								style="
									background: linear-gradient(
										to top,
										#2cc369 70%,
										#ed8080 20% 40%
									);
								"
							></div>
							<h3 class="item_day">Sun</h3>
						</div>

						<div class="body_item">
							<div
								class="item_data"
								style="
									background: linear-gradient(
										to top,
										#2cc369 70%,
										#ed8080 20% 40%
									);
								"
							></div>
							<h3 class="item_day">Mon</h3>
						</div>

						<div class="body_item">
							<div
								class="item_data"
								style="
									background: linear-gradient(
										to top,
										#2cc369 30%,
										#ed8080 20% 40%
									);
								"
							></div>
							<h3 class="item_day">Tue</h3>
						</div>

						<div class="body_item">
							<div
								class="item_data"
								style="
									background: linear-gradient(
										to top,
										#2cc369 50%,
										#ed8080 20% 40%
									);
								"
							></div>
							<h3 class="item_day">Wed</h3>
						</div>

						<div class="body_item">
							<div
								class="item_data"
								style="
									background: linear-gradient(
										to top,
										#2cc369 90%,
										#ed8080 20% 40%
									);
								"
							></div>
							<h3 class="item_day">Thu</h3>
						</div>

						<div class="body_item">
							<div
								class="item_data"
								style="
									background: linear-gradient(
										to top,
										#2cc369 100%,
										#ed8080 20% 40%
									);
								"
							></div>
							<h3 class="item_day">Fri</h3>
						</div>

						<div class="body_item">
							<div
								class="item_data"
								style="
									background: linear-gradient(
										to top,
										#2cc369 10%,
										#ed8080 10% 40%
									);
								"
							></div>
							<h3 class="item_day">Sat</h3>
						</div>
					</div>

					<div class="statistic_detail">
						<h3 class="detail_red">Unfinished</h3>
						<h3 class="detail_green">Finished</h3>
					</div>
				</div>
			</div>
		</section>
		`
	}
}

customElements.define('statistic-section', Statistic)