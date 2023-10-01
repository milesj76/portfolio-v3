<script lang="ts">
    // import type { PageData } from './$types';
    
    // export let data: PageData;
</script>

<div class="flex flex-col justify-center w-full mx-auto my-6 p-4 max-w-3xl space-y-8">
    <!-- Title -->
    <header class="text-4xl font-bold">ReUse Inventory Audit Web App</header>

    <!-- Quick Description -->
    <article>
        <p>I was the sole developer of ReUse Computers' Inventory Audit Web App. After having improved our inventory systems with the last app I had worked on, we realized we needed a way to audit our inventory to keep it clean, fresh and accountable. Over an intense month of coding, I built a web app that integrated with our Google Sheet's Inventory.</p>
    </article>
    
    <!-- Cover Image -->

    <!-- Quick Link to images -->

    <!-- Responsibilities -->
    <section class="special-box">
        <h4 class="text-lg font-semibold mb-2">Responsibilities</h4>
        <ul class="w-full grid grid-cols-3 grid-flow-row list-disc px-4">
            <li>JavaScript</li>
            <li>Google Sheets API</li>
            <li>Sveltekit</li>
            <li>Responsive Design</li>
            <li>API Design</li>
            <li>REST API</li>
            <li>Testing</li>
            <li>API Endpoint Testing</li>
            <li>Visual Studio Code</li>
            <li>Node.js</li>
        </ul>
    </section>
    
    <!-- Updates -->
    <!-- <section>
        <h4>Updates</h4>
        <ul>
            <li></li>
        </ul>
    </section> -->
    
    <!-- Project In-depth -->
    <article>
        <p>Before this app, there didn't exist any sort of audit process or tools for ReUse Computers. As we were a small business, it just wasn't something we'd taken any time to establish. I took it upon myself to create a process and tooling to go along with it. With our new Technician's App having been put into use over the last six months, it felt proper to make a similarly simple and effective tool but instead for inventory auditing.</p>

        <p>I knew that the key to making auditing as simple a task as possible was to utilize our barcodes and barcode scanners. In particular, I needed a way to select a location like a shelf and then be able to scan in multiple ID's at once. This wasn't something feasible using AppSheet but I knew it was something I could do using HTML and JavaScript. The part that would be a new challenge for me was connecting the web page to the back end Sheet. Building an API seemed like an obvious solution. API building was an area I didn't have much experience with before but I figured if I kept it simple and straightforward I could make it work. Unfortunately for me, I wasn't sure I'd be able to use typical API tools. I had to construct this API primarily inside of Google App Script, which I wasn't super fond of.</p>

        <p>This project would be very JS heavy so I also wanted to be able to patch and update code into the future. I decided to structure my development around using GitHub and Google's "clasp" which allowed me to move a lot of my code out of Google App Script's web based IDE and into my native environment using VS Code, which I prefer. At the end, I went for using a local Node.js deployment that I could spin up for only our local environment since this would be something we'd only use when necessary.</p>
    </article>

    <!-- The Audit Process -->

    <!-- Front End -->

    <!-- API -->

    <!-- Version Control and clasp-->

    <!-- Testing with Insomnia -->

    <!-- Deploying using Node.js -->

    <article>
        <h2>Understanding The System</h2>

        <p>In the process of creating this app, I realized I had to understand how the current system was organized and divided. This would guide me to how I would connect our current data structures together with code. I want to emphasize this part of the project because I found this to be an extremely helpful learning experience. At this point, I hadn't really had the opportunity to work on existing structures and not on such a large and systematic scale. Seeing and organizing the project from macro and micro levels really taught me how to think about code and data structures as a system, how parts of the system interact and what a system requires to start and maintain operation.</p>

        <p>I've since taken this lesson into every project I've worked on since and it has dramatically improved my work on projects, especially those projects of higher complexity. This app will probably always have a special place in my memory.</p>

        <!-- Add image of the system blueprint I made -->
    </article>


    <!-- Call to action at bottom -->

</div>

<style>
    article {
        @apply space-y-6;
    }

    article > h2 {
        @apply text-2xl font-semibold;
    }

    article > p {
        /* @apply font-serif; */
        @apply tracking-wide leading-relaxed;
    }

    .special-box {
        @apply bg-white-200 py-4 px-8 rounded-md shadow-sm;
    }
</style>