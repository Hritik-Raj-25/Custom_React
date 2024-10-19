const mainContainer = document.getElementById('root')

const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to google'
}

function customRender(ReactElement, container) {
    const domElement = document.createElement(ReactElement.type)

    domElement.innerHTML = ReactElement.children
    for (const key in ReactElement.props) {
        if (key === 'children') continue;
        domElement.setAttribute(key, ReactElement.props[key])
    }
    container.appendChild(domElement)
}


customRender(ReactElement, mainContainer)