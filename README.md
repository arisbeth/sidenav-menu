 ## Sidenav Menu ☱

Responsive Menu Navigation, for sites that keep the main side menu options always visible on desktop, vertical responsive submenu options, in this snnippet we transform the sidebar to a top navigation menu bar on mobile, with the search option at top bar menu mobile and outside the sidebar, in main content top.

If you’re working on craft CMS, this can used for develop a vertical menu with channels or structures for plenty of sub-categories. This snippet helps to build Sidebar navigation providing a starting with a simple template.


### Usage:


The HTML structure is composed by thismain elements: 

``` <header> ```  is the main navigation content  ```.top-nav```  containing contains menu navigation and search triggers for mobile version only and the website logo for both versions. ``` <main> ``` element containing the page main content and top search input for desktop version. The ```<nav>```  or  ```.main-nav``` element, contains the main navigation items in  ```.menu-content``` and submenu content items for horizontal expand in desktop and on top of all the content for mobile version.

Import function:

``` js/components/sidenav.js```

```js
import { sideNavMenu  } from  "sidenav-menu"; 
```	
Call function on window load and resize:
```js
window.addEventListener('DOMContentLoaded', () => {
	// Navigation function when fonts are loaded
	if (typeof document.fonts == 'undefined') {
		sideNavMenu();
	} else {
		document.fonts.ready.then(function () {
			sidenNavMenu();
		})
	}
})

window.addEventListener('resize', () => {
	sidenNavMenu();
})
```
Get Styles ```/main.scss```:

You can change the variables without any problem but the general styles of the main elements are important to control the structure and its behavior when the breakpoint changes

```scss
// General
html {
	body    {...}
	main    {...}
}
```
HTML Structure




```html
<header>

	<div class="top-nav">
		...
	</div>

	<nav class="main-nav">
		<div class="menu-content">
			<ul class="primary-nav">
				<li>
					<button id="Submenu" class="submenu-trigger">Submenu</button>
					<ul id="itemsSubmenu" class="submenu-nav">
						<li class="back">
							<button>Back to Main Menu</button>
						</li>
						<li class="overview-item">
							<a href="">Submenu Main Link Item</a>
						</li>
						<li>
							<a href="">Sumenu Simple Link Item</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="">Main Link Item</a>
				</li>
			</ul>
		</div>
	</nav>

</header>
```


** Example: **

<table>
  <tr>
	<th align="center">📱 This is the Resul on Mobile</th>
	<th align="center">🖥 This is Result on Desktop</th>
  </tr>
  <tr>
	<td align="center"><img src="https://github.com/arisbeth/sidenav-menu/blob/main/src/assets/mobile.png" height="250" alt="Mobile Top Bar Menu"></td>
	<td align="center"><img src="https://github.com/arisbeth/sidenav-menu/blob/main/src/assets/desktop.png" height="250" alt="Desktop Side Navigation Menu"></td>
  </tr>
</table>



### How it works: ⚙⚙⚙

The ```nav.main-nav``` element has the key content. This element adapts according to the class that you add to ```<header>``` via js. Whether it's ```.sidenav``` or ```.mobilenav```, the content of the lists ```.primary-nav``` and ```.submenu-nav``` is styled according to the class of that parent. 
