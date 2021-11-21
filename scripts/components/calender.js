class Calender extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
		<div class="calendar">
			<div class="calendar_header">
				<h2>November</h2>
			</div>

			<div class="calendar_body">
				<div class="calendar_days">
					<div>M</div>
					<div>T</div>
					<div>W</div>
					<div>T</div>
					<div>F</div>
					<div>S</div>
					<div>S</div>
				</div>
		
				<div class="calendar_dates">
					<div class="calendar_date calendar_date--grey"><span>27</span></div>
					<div class="calendar_date calendar_date--grey"><span>28</span></div>
					<div class="calendar_date calendar_date--grey"><span>29</span></div>
					<div class="calendar_date calendar_date--grey"><span>30</span></div>
					<div class="calendar_date"><span>1</span></div>
					<div class="calendar_date"><span>2</span></div>
					<div class="calendar_date"><span>3</span></div>
					<div class="calendar_date"><span>4</span></div>
					<div class="calendar_date"><span>5</span></div>
					<div class="calendar_date"><span>6</span></div>
					<div class="calendar_date"><span>7</span></div>
					<div class="calendar_date"><span>8</span></div>
					<div class="calendar_date"><span>9</span></div>
					<div class="calendar_date"><span>10</span></div>
					<div class="calendar_date"><span>11</span></div>
					<div class="calendar_date"><span>12</span></div>
					<div class="calendar_date"><span>13</span></div>
					<div class="calendar_date"><span>14</span></div>
					<div class="calendar_date"><span>15</span></div>
					<div class="calendar_date"><span>16</span></div>
					<div class="calendar_date"><span>17</span></div>
					<div class="calendar_date"><span>18</span></div>
					<div class="calendar_date calendar_date--current"><span>19</span></div>
					<div class="calendar_date"><span>20</span></div>
					<div class="calendar_date calendar_date--selected calendar_date--range-start"><span>21</span></div>
					<div class="calendar_date calendar_date--selected"><span>22</span></div>
					<div class="calendar_date calendar_date--selected"><span>23</span></div>
					<div class="calendar_date calendar_date--selected calendar_date--range-end"><span>24</span></div>
					<div class="calendar_date"><span>25</span></div>
					<div class="calendar_date"><span>26</span></div>
					<div class="calendar_date"><span>27</span></div>
					<div class="calendar_date"><span>28</span></div>
					<div class="calendar_date"><span>29</span></div>
					<div class="calendar_date"><span>30</span></div>
					<div class="calendar_date"><span>31</span></div>
				</div>
			</div>
			<div class="calendar_footer">
				<h3 class="holiday">Public Holiday</h3>
				<h3 class="current_day">Today</h3>
			</div>
	</div>
		`
	}
}

customElements.define("calender-section", Calender)