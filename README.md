 ## Sidenav Menu ☱

Responsive Menu Navigation, for sites that keep the main side menu options always visible on desktop, vertical responsive submenu options, in this snnippet we transform the sidebar to a top navigation menu bar on mobile, with the search option at top bar menu mobile and outside the sidebar, in main content top.

If you’re working on craft CMS, this can used for develop a vertical menu with channels or structurs for plenty of sub-categories. This snippet helps to build Sidebar navigation providing a starting with a simple template.


### Usage:


The HTML structure is composed by 3 main elements: a <header> element, containing the website logo, the search form, the navigation trigger (.menu-mobile - mobile version only) and the top navigation, and a <main> element containing the page main content (div.content-wrapper) and the sidebar navigation (nav.cd-side-nav).

Import function:

    import { sideNavMenu  } from  "sidenav-menu"; 
	
Call function on window load and resize:

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

** Example:**

```html
    <div class="menu-content" role="none">
        <ul class="primary-nav" role="menubar" aria-label="Main Navigation Content Items">
            <li>
                <button role="menuitem" id="Submenu" class="submenu-trigger">Submenu</button>
                <ul id="itemsSubmenu" class="submenu-nav" role="menubar">
                    <li class="back">
                        <button>Back to Main Menu</button>
                    </li>
                    <li class="overview-item"><a href="">Submenu Main Link Item</a></li>
                    <li><a href="">Sumenu Simple Link Item</a></li>
                </ul>
            </li>
            <li>
                <a href="" role="menuitem">Main Link Item</a>
            </li>
        </ul>
    </div>
```
	
🥽 This is the Resul on Mobile:

<img src="https://github.com/arisbeth/sidenav-menu/blob/main/src/assets/mobile.png" width="150" alt="Mobile Top Bar Menu">

🥽 This is Result on desktop

<img src="https://github.com/arisbeth/sidenav-menu/blob/main/src/assets/desktop.png" width="300" alt="Desktop Side Navigation Menu">

### How it works: ⚙⚙⚙

# sidenav-menu
