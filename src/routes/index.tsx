import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
	return (
		<div class="max-w-md flex flex-col gap-8 min-h-[80vh] p-8">
			<div class="mb-4">
				<img src="/logo.png" class="mx-auto h-32" alt="" />
			</div>
			<div class="links">
				<a href="https://wa.me/5588998551739" class="link link-primary">
					<svg
						class="w-8 h-8 fill-brand-2 mx-2"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M3.50002 12C3.50002 7.30558 7.3056 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.3278 20.5 8.77127 20.0182 7.45798 19.1861C7.21357 19.0313 6.91408 18.9899 6.63684 19.0726L3.75769 19.9319L4.84173 17.3953C4.96986 17.0955 4.94379 16.7521 4.77187 16.4751C3.9657 15.176 3.50002 13.6439 3.50002 12ZM12 1.5C6.20103 1.5 1.50002 6.20101 1.50002 12C1.50002 13.8381 1.97316 15.5683 2.80465 17.0727L1.08047 21.107C0.928048 21.4637 0.99561 21.8763 1.25382 22.1657C1.51203 22.4552 1.91432 22.5692 2.28599 22.4582L6.78541 21.1155C8.32245 21.9965 10.1037 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5ZM14.2925 14.1824L12.9783 15.1081C12.3628 14.7575 11.6823 14.2681 10.9997 13.5855C10.2901 12.8759 9.76402 12.1433 9.37612 11.4713L10.2113 10.7624C10.5697 10.4582 10.6678 9.94533 10.447 9.53028L9.38284 7.53028C9.23954 7.26097 8.98116 7.0718 8.68115 7.01654C8.38113 6.96129 8.07231 7.046 7.84247 7.24659L7.52696 7.52195C6.76823 8.18414 6.3195 9.2723 6.69141 10.3741C7.07698 11.5163 7.89983 13.314 9.58552 14.9997C11.3991 16.8133 13.2413 17.5275 14.3186 17.8049C15.1866 18.0283 16.008 17.7288 16.5868 17.2572L17.1783 16.7752C17.4313 16.5691 17.5678 16.2524 17.544 15.9269C17.5201 15.6014 17.3389 15.308 17.0585 15.1409L15.3802 14.1409C15.0412 13.939 14.6152 13.9552 14.2925 14.1824Z"
						/>
					</svg>
					<div>Agende sua consulta</div>
				</a>

				<a href="https://wa.me/5588997161113" class="link">
					<div>
						<svg
							viewBox="0 0 400 400"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="w-12 h-12 stroke-brand-3"
						>
							<path
								d="M222 76C210.988 106.84 171.627 128.31 147 132"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M236 44.053C123.346 20.1218 96.7679 144.026 136.104 167"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M256 54C302.745 75.4047 288.975 108.654 272.736 144"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M260.902 122C295.577 228.082 142 250.963 142 156.601"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M218.892 153C219.298 150.031 218.46 147.754 218 145"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M191 154C191 151.332 191 148.668 191 146"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M60 345.501C60 309.522 83.3747 224.325 163.582 228.248C185.925 229.341 191.24 351.835 206.062 345.501C232 334.416 223.446 254.231 243.571 224.158C340.019 219.027 341 340.572 341 359"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M296 271C288.365 253.665 267.103 230.409 247 228"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M163 232C139.27 246.396 128.966 267.837 120 292"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M93.0228 347.996C90.4525 330.039 91.6852 307.132 109.075 296.665C157.969 267.237 151.718 362.878 128.138 345.983"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M293.07 271.039C321.891 269.785 283.781 299.392 290.907 273.038"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M304 324.289C291.859 322.728 282.476 327.953 271 329"
								stroke-opacity="1"
								stroke-width="16"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<div>
						<div>Dr. Luiz de Gonzaga</div>
						<div class="text-brand-3 uppercase tracking-wider text-xs">
							Falar com Isabel
						</div>
					</div>
				</a>
				<a href="https://wa.me/5588996878000" class="link">
					<svg
						viewBox="0 0 400 400"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="w-12 h-12 stroke-brand-3"
					>
						<path
							d="M222 76C210.988 106.84 171.627 128.31 147 132"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M236 44.053C123.346 20.1218 96.7679 144.026 136.104 167"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M256 54C302.745 75.4047 288.975 108.654 272.736 144"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M260.902 122C295.577 228.082 142 250.963 142 156.601"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M218.892 153C219.298 150.031 218.46 147.754 218 145"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M191 154C191 151.332 191 148.668 191 146"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M60 345.501C60 309.522 83.3747 224.325 163.582 228.248C185.925 229.341 191.24 351.835 206.062 345.501C232 334.416 223.446 254.231 243.571 224.158C340.019 219.027 341 340.572 341 359"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M296 271C288.365 253.665 267.103 230.409 247 228"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M163 232C139.27 246.396 128.966 267.837 120 292"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M93.0228 347.996C90.4525 330.039 91.6852 307.132 109.075 296.665C157.969 267.237 151.718 362.878 128.138 345.983"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M293.07 271.039C321.891 269.785 283.781 299.392 290.907 273.038"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M304 324.289C291.859 322.728 282.476 327.953 271 329"
							stroke-opacity="1"
							stroke-width="16"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
					<div>
						<div>Dr. José Antero</div>
						<div class="text-brand-3 uppercase tracking-wider text-xs">
							Falar com Suelir
						</div>
					</div>
				</a>
				<a href="https://wa.me/5588988681568" class="link">
					<svg
						viewBox="0 0 24 24"
						class="w-8 h-8 mx-2 stroke-brand-3 stroke-[1.6px]"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
					>
						<g id="microscope">
							<line x1="6.75" y1="22.5" x2="19.16" y2="22.5" />

							<path d="M6.92,17.73a6.2,6.2,0,1,0,8.75-7" />

							<path
								d="M12.16,6.24h1.58a1.91,1.91,0,0,1,1.91,1.91V13a0,0,0,0,1,0,0h-5.4a0,0,0,0,1,0,0V8.15a1.91,1.91,0,0,1,1.91-1.91Z"
								transform="translate(10.59 -6.34) rotate(45)"
							/>

							<rect
								x="15.32"
								y="3.19"
								width="3.37"
								height="4.72"
								transform="translate(8.91 -10.4) rotate(45)"
							/>

							<line x1="16.3" y1="1.5" x2="21.07" y2="6.27" />

							<line x1="2.93" y1="17.73" x2="11.52" y2="17.73" />
						</g>
					</svg>

					<div class="mr-2">Laboratório Edgar Corrêa</div>
				</a>
			</div>
			{/* <div>
				<img src="/toro.png" class="w-16 mx-auto" alt="" />
			</div> */}
		</div>
	);
});

export const head: DocumentHead = {
	title: "HTC - Hospital Dr. Thomaz Corrêa",
	meta: [
		{
			name: "description",
			content: "O HTC é sempre com você",
		},
	],
};
