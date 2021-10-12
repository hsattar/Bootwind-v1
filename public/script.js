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
        description: "Breadcrumbs"
    },
    {
        name: "cards",
        description: "Breadcrumbs"
    },
    {
        name: "carousels",
        description: "Breadcrumbs"
    },
    {
        name: "collapse",
        description: "Breadcrumbs"
    },
    {
        name: "dropdowns",
        description: "Breadcrumbs"
    },
    {
        name: "forms",
        description: "Breadcrumbs"
    },
    {
        name: "jumbotrons",
        description: "Breadcrumbs"
    },
    {
        name: "list groups",
        description: "Breadcrumbs"
    },
    {
        name: "media objects",
        description: "Breadcrumbs"
    },
    {
        name: "modals",
        description: "Breadcrumbs"
    },
    {
        name: "navbars",
        description: "Breadcrumbs"
    },
    {
        name: "navs & tabs",
        description: "Breadcrumbs"
    },
    {
        name: "off canvas",
        description: "Breadcrumbs"
    },
    {
        name: "popovers",
        description: "Breadcrumbs"
    },
    {
        name: "progress bars",
        description: "Breadcrumbs"
    },
    {
        name: "scrollspys",
        description: "Breadcrumbs"
    },
    {
        name: "spinners",
        description: "Breadcrumbs"
    },
    {
        name: "toasts",
        description: "Breadcrumbs"
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