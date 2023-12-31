import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div class="min-h-screen grid place-items-center bg-brand-1">
			<Slot />
		</div>
	);
});
