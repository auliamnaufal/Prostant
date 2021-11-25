class SideProfile extends HTMLElement {
	connectedCallback() {
		this.render()
	}

	render() {
		this.innerHTML = `
			<div class="side_profile" id="sideProfile">
            <div class="side_profile-content">
              <img src="./public/icon/close_button.svg" alt="close button" class="close_class-profile" id="closeClassProfile">
    
              <div class="side_profile-body">
                <div class="side_profile-avatar">
                  <img src="./public/image/profile.jpeg" alt="avatar" class="profile_avatar-picture">
                  <h2 class="profile_avatar-name">Jeje Rashid</h2>
                  <p class="profile_avatar-email">jejerashid@gmail.com</p>
                </div>
                
                <div class="side_profile-level">
                  <h3 class="profile_level-heading">Your Level</h3>
                  <div class="level_detail">
                    <p class="profile_level-level">20</p>
                    <div class="profile_level-bar"></div>
                  </div>
                </div>
                
                <div class="side_profile-list">
                  <div class="profile_item">
                    <img src="./public/icon/trophy.svg" alt="trophy icon">
                    <h3>Exchange Reward</h3>
                  </div>
                  <div class="profile_item">
                    <img src="./public/icon/Premium.svg" alt="trophy icon">
                    <h3>Buy Premium</h3>
                  </div>
                </div>
  
                <div class="logout">
                  <h3>Logout</h3>
                </div>
              </div>
          </div>
		`
	}
}

customElements.define("side-profile-section", SideProfile)