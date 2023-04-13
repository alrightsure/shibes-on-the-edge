import { A } from "solid-start";

export default function NotFound() {
    return (
        <main class="text-center mx-auto text-white  p-4">
            <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Not Found</h1>
            <p class="leading-7 [&:not(:first-child)]:mt-6">No shibes here...</p>
            <span>
                <A href="/" class="border-b-2">Take me to the sibes</A>
            </span>
        </main>
    );
}
