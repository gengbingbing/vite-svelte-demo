<script>
    import { link } from 'svelte-spa-router';
    const state = '/state';
    const prop = '/prop';
    const emit = '/emit';
    const bind = '/bind';
    const slot = '/slot';
    const lifeCycle = '/lifeCycle';
    const getDomEle = '/getDomEle';
    const netTick = '/netTick';
    const watchComputed = '/watchComputed';
    const forTem = '/forTem';
    const store = '/store';
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={state}>To state Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={prop}>To prop Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={emit}>To emit Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={bind}>To bind Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={slot}>To slot Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={lifeCycle}>To lifeCycle Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={getDomEle}>To getDomEle Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={netTick}>To netTick Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={watchComputed}>To watchComputed Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={forTem}>To forTem Page</a></p>
<!-- svelte-ignore a11y-missing-attribute -->
<p><a use:link={store}>To store Page</a></p>

<style>
    p {
        text-align: left;
        width: 300px;
    }
    a {
        font-size: 18px;
        color: blue;
    }
</style>