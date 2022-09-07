const sidenavMenu = (gsap) => {

	const header = document.querySelector('header')
	const main = document.querySelector('main')
	const searchForm = document.querySelector('.form-input-search')
	

	if(header){

		function menuContentResponsive(){
			let desktopScreen = window.innerWidth > 1023;
			let topBarNav = document.querySelector('.top-nav')
			var sidebarWidth = topBarNav.clientWidth
			//console.log(sidebarWidth);
			if(desktopScreen){
				gsap.to(main,{ marginLeft: sidebarWidth })
				header.classList.add('sidenav')
				header.classList.remove('mobilenav')
				searchForm.classList.add('desktop-search')
				searchForm.classList.remove('mobile-search')
			} else {
				header.classList.add('mobilenav')
				header.classList.remove('sidenav')
				searchForm.classList.add('mobile-search')
				searchForm.classList.remove('desktop-search')
				//gsap.to(main,{ marginLeft: 'initial' });
			}
		}

		menuContentResponsive();
		window.onresize = menuContentResponsive;
		

		if ('.mobilenav'){

			let btnMobileMenu = document.querySelector('.icon-mobile-nav')
			let btnMobileSearch = document.querySelector('.icon-mobile-search')
			let iconMenu = document.querySelector('.icon-menu')
			let iconSearch = document.querySelector('.icon-search')
			let topBarNav = document.querySelector('.top-nav')

			var topBarHeight = topBarNav.offsetHeight;
			var iconClose = document.querySelectorAll('header [class^="icon-close"]')

			gsap.to(iconClose, { alpha: 0, visibility: 'hidden'})

			btnMobileMenu.addEventListener('click', (event) => {
				let menuContent = document.querySelector('.menu-content')
				var submenuTrigger = document.querySelector('.submenu-trigger')
				var iconClose = document.querySelector('.icon-close')
				header.classList.toggle('show-menu')
				if (header.classList.contains('show-menu')){
					btnMobileMenu.setAttribute('aria-expanded', 'true')
					gsap.to(iconMenu, { alpha: 0, visibility: 'hidden' })
					gsap.to(iconClose, .5, { alpha: 1, visibility: 'visible' })
					gsap.to(menuContent, .3, { alpha: 1, visibility: 'visible', height: 'auto', top:topBarHeight })

					submenuTrigger.addEventListener('click', (event) => {
						var submenuTriggerId = submenuTrigger.id
						var submenuNav = document.getElementById(submenuTriggerId).nextElementSibling

						var backToMain = document.querySelector('.back')
						//console.log(menuContent)
			
						gsap.to(submenuNav, .6, { alpha: 1, visibility: 'visible', width: '100vw'} )
						backToMain.addEventListener('click', (event) => {
							gsap.to(submenuNav, .5, { alpha: 0, visibility: 'hidden', width: 0} )
						});
					});

				} else {
					btnMobileMenu.setAttribute('aria-expanded', 'false');
					gsap.to(iconMenu, .5, { alpha: 1, visibility: 'visible' })
					gsap.to(iconClose, .5, { alpha: 0, visibility: 'hidden' })
					gsap.to(menuContent, .1, { alpha: 0, visibility: 'hidden', height: 0, top:0 })
				}
			});
			

			// Mobile Search
			btnMobileSearch.addEventListener('click', (event) => {
				var iconClose = document.querySelector('.icon-close-search');
				var formMobileSearch = document.querySelector('.form-input-search.mobile-search')
				header.classList.toggle('show-search-mobile')
				if (header.classList.contains('show-search-mobile')){
					btnMobileSearch.setAttribute('aria-expanded', 'true')
					gsap.to(iconSearch, { alpha: 0, visibility: 'hidden' })
					gsap.to(iconClose, .5, { alpha: 1, visibility: 'visible'})
					gsap.to(formMobileSearch, .3, { alpha: 1, visibility: 'visible', height: 'auto', top:topBarHeight }) 
				} else {
					btnMobileSearch.setAttribute('aria-expanded', 'false')
					gsap.to(iconSearch, .5, { alpha: 1, visibility: 'visible' })
					gsap.to(iconClose, .5, { alpha: 0, visibility: 'hidden' })
					gsap.to(formMobileSearch, .1, { alpha: 0, visibility: 'hidden', height: 0, top:0 })
				}
			});
			
		}

	}

}

export { sidenavMenu };

