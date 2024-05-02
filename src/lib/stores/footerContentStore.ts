import { writable } from "svelte/store";

// import raw data from footer.json
import { default as footerContentRaw } from "$data/footer.json";

// create writable store, that can be updated with content from CMS as appropriate
export const footerContentStore = writable(footerContentRaw);

export default footerContentStore;
