import App from './components/App.svelte'

console.log(process.env)

const app = new App({
    target: document.querySelector('#app'),
    props: {
        address: 'ADDRESS'
    }
})


