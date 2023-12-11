import Home from './views/Home.svelte';
import state from './views/state.svelte';
import prop from './views/propEmit/prop.svelte';
import emit from './views/propEmit/emit.svelte';
import bind from './views/bind.svelte';
import slot from './views/slot/slot.svelte';
import lifeCycle from './views/lifeCycle.svelte';
import getDomEle from './views/getDomEle.svelte';
import netTick from './views/netTick.svelte';
import watchComputed from './views/watchComputed.svelte';
import forTem from './views/forTem.svelte';
import store from './views/store/store.svelte';

const routes = {
    '/': Home,
    '/home': Home,
    '/state': state,
    '/prop': prop,
    '/emit': emit,
    '/bind': bind,
    '/slot': slot,
    '/lifeCycle': lifeCycle,
    '/getDomEle': getDomEle,
    '/netTick': netTick,
    '/watchComputed': watchComputed,
    '/forTem': forTem,
    '/store': store,
    // '/about/*': About,
    // '/detail/:type/:id': Detail,
}

export default routes;
