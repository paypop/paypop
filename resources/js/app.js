import App from 'components/App'

const app = new App({
    target: document.querySelector('#app'),
    props: {
        name: 'world'
    }
})

export default app