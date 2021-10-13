let componentCards = [
    {
        name: "alerts",
        description: "Alerts Are Used To Warn The User About Something"
    },
    {
        name: "accordians",
        description: "Accordians Can Be Used For FAQ's"
    },
    {
        name: "badges",
        description: "Badges Are Used To Display Extra Information To The User"
    },
    {
        name: "breadcrumbs",
        description: "Breadcrumbs Help The User navigate between pages"
    },
    {
        name: "buttons",
        description: "buttons are for the user to click which will trigger something"
    },
    {
        name: "cards",
        description: "cards are used to display information like this"
    },
    {
        name: "carousels",
        description: "carousels are a slideshow, most cases will involve images"
    },
    {
        name: "collapse",
        description: "a collapse is used to hide or display information"
    },
    {
        name: "dropdowns",
        description: "a dropdown will present the user with more options"
    },
    {
        name: "forms",
        description: "a form is used for the vistor to send a message to the owner"
    },
    {
        name: "jumbotrons",
        description: "a jumbotron is a box used to indicate text which requires extra attention"
    },
    {
        name: "list groups",
        description: "a collection of a group of items"
    },
    {
        name: "media objects",
        description: "displays an image to the side of a a heading and text"
    },
    {
        name: "modals",
        description: "a custom pop up message displayed to the user"
    },
    {
        name: "navbars",
        description: "found at the top of the page showing the main pages of a website"
    },
    {
        name: "navs & tabs",
        description: "can be used to help seperate different sections of content"
    },
    {
        name: "off canvas",
        description: "add a hidden sidebar for extra navigation links"
    },
    {
        name: "popovers",
        description: "displays extra information when clicking an element"
    },
    {
        name: "progress bars",
        description: "helps indicate to the user that something is happening"
    },
    {
        name: "scrollspys",
        description: "helps indicate what section the user is viewing"
    },
    {
        name: "spinners",
        description: "helps indicate to the user that something is loading"
    },
    {
        name: "tables",
        description: "tables are used to show a group of related information"
    },
    {
        name: "toasts",
        description: "a small notification similar to mobile push notifications"
    }
]

let componentCardsContainer = document.getElementById('component-cards')

componentCards.forEach(component => {
    let newComponent = document.createElement('a')
    newComponent.setAttribute('href', `./${component.name}.html`)
    newComponent.innerHTML = `
    <div class="border p-3 rounded-md shadow-md hover:bg-gray-900 hover:text-gray-100 cursor-pointer h-24 sm:h-32 md:h-36 mx-3">
    <p class="font-bold text-xl mb-2">${component.name}</p>
    <p>${component.description}</p>
    </div>
    </a>`
    componentCardsContainer.appendChild(newComponent)
})