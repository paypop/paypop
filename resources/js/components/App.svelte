<script>
    import { io } from "socket.io-client"
    import QrCode from 'svelte-qrcode'
    import Spinner from './Spinner'

    const socket = io()
    const address = '54Z1ZKBihDmHFHu5dhhhqnLQ5CuP5YLVyWYKQWGiaMzd3L36AFhDL5QLajFk3GAZRwDj1FhTXRe7qfuLsKx9CVGkAYJiZsn'

    function copy() {
        navigator.clipboard.writeText(address)

        isPayed = true
    }

    let isPayed = false

    socket.on('tx', () => {
        isPayed = true
    })


</script>

<div class="container">
    <div>
        <b>Send 10 XMR to this address:</b>
    </div>

    <div on:click={copy} class="button-address">
        <div>{address}</div>
    </div>

    <div class="notification">
        Address copied
    </div>

    <QrCode value="{address}/" />

    {#if isPayed}
        <img src="/img/check.svg" alt="check" class="img-check">
    {:else }
        <Spinner />
    {/if}

</div>






