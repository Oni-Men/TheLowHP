<script>
import marked from "marked";
import { onMount } from "svelte"; 

export let markdown;
let html = "";

onMount(() => {
	html = marked(markdown);
})

</script>

{@html html}
