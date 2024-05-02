import { writable } from "svelte/store";

// import data from homeContent.json
import { default as rawContentData } from "$data/home.json";

// create writable store, that can be updated with content from CMS as appropriate
export const homeContentStore = writable(rawContentData as HomeContent);
export default homeContentStore;
