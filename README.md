 ## Sidenav Menu ☱

Responsive Menu Navigation, for sites that keep the main side menu options always visible on desktop, vertical responsive submenu options, in this snnippet we transform the sidebar to a top navigation menu bar on mobile, with the search option at top bar menu mobile and outside the sidebar, in main content top.

If you’re working on craft CMS, this can used for develop a vertical menu with channels or structurs for plenty of sub-categories. This snippet helps to build Sidebar navigation providing a starting with a simple template.


### Usage:


The HTML structure is composed by 2 main elements: a <header> element, containing the website logo, the search form, the navigation trigger (.menu-mobile - mobile version only) and the top navigation, and a <main> element containing the page main content (div.content-wrapper) and the sidebar navigation (nav.cd-side-nav).

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

**Example:**


	
🥽 This is the Resul on Mobile:

🥽 This is Result on desktop



### How it works: ⚙⚙⚙

# sidenav-menu
