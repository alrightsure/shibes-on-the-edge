import { createResource, Show } from "solid-js";
import { useRouteData } from "solid-start";

export function routeData() {
    const [shibes] = createResource(async () => {
        const response = await fetch("http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true");
        return (await response.json()) as string[];
    });

    return { shibes };
}

const Index = () => {
    const { shibes } = useRouteData<typeof routeData>();

    return (
        <main class="container p-8">
            <div class="bg-white rounded-2xl p-8 shadow-xl flex flex-col gap-6">
                <h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Shibe Test</h1>
                <Show when={shibes()}>{shibes => <img src={shibes()[0]} />}</Show>
                <p class="leading-7">If you're seeing a shibe, then the edge function is working!</p>
            </div>
        </main>
    );
};

export default Index;
