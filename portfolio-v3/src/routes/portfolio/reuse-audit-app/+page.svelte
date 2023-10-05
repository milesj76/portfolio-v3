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
    <article>
        <h2>The Audit Flow</h2>

        <p>In general, the audit would consist of entering and scanning every computer in our inventory and compare our input to what the inventory claimed to say. It seemed important that this tool be made once and be used for as long as possible so I aimed to design it to be relatively quick to use but also to be completed over at least a week of time. We might have thousands of computers in inventory at once so one can't be sure of how long an audit might take.</p>

        <p>First a user would need to initiate an audit. Then, the user would scan a location and every computer in that location. After scanning everything, the user would initiate the reconciliation process. In reconciliation, the app would show the user discrepancies between what's been scanned and what hasn't. After reconciling the inventory, the user can complete the audit which saves a copy of every computer that was left missing. At audit completion, the program updates the active inventory with everything that was found and accounted for and removes everything that wasn't.</p>
    </article>

    <!-- Front End and Scanning-->
    <article>
        <h2>The Front End</h2>

        <p>My main goal was to find a way to use our barcode scanners for the majority of this process. After fiddling with some JavaScript, I found I could adjust some of the "key" events to prevent submitting or shifting focus from input fields. Knowing this, I knew I'd have to deploy a web app of some kind so I decided I'd build the site with my favorite web framework, Sveltekit. Sveltekit felt like a great choice because its syntax is very simple, makes MPAs simple to build and is one framework I'm most familiar with. I didn't want to spend too much time if I could avoid it.</p>

        <p>I used tailwindcss and DaisyUI for styling the site. I liked that DaisyUI had some basic themes and different styled components I could use right off the get go and this seemed like a good opportunity to try using it on a project. I've been pretty happy using tailwind for the last year now because I find styling a much faster process with it. Now, this wasn't going to be anything incredible, more functional than anything. I did want to make sure I used styles to help emphasize certain data and certain actions that the user could take. While beauty in the page is important, what was more important to me was making information on the screen clear.</p>
    </article>

    <!-- API -->
    <article>
        <h2>API From Scratch</h2>

        <p>I'd never really built an API until this project and what's more was that I wasn't connecting it to a proper database. This was only a series of Google Sheets so I used whatever tools would simplify interacting with Sheets. The result was an API built from scratch using Google Apps Script and their connected Sheets and Drive API's. It's hardly the way I wanted to make it but it's what seemed the most straightforward.</p>

        <p>Before I even began making endpoints, I started by constructing Sheets and functions to initiate an audit, save the state of the audit, log actions taken during the audit (especially for debugging), and copy the Inventory. After getting some of the foundation built, I plotted out each step of the audit process and built the entire process step by step.</p>
    </article>

    <!-- Version Control and clasp-->
    <article>
        <h2>Version Control and "clasp"</h2>

        <p>I knew that I'd have to write a ton of code for this process and I figured that I'd be bound to make some mistakes that would need patched later on. This was actually a little complicated because part of my code would rest in Google Apps Script. Luckily, I found the tool "clasp" which is a command line tool specifically made for my use case, building Apps Script projects in my local environment. This allowed me not only to push all my code easily into GitHub, but it also gave me an easy way to deploy new versions of my API after making updates.</p>

        <p>The result was a few scripts that I made to simplify updating my dev API with new code that I could instantly test in my dev environment. This also required me to create a dev environment that had unique settings separate from my production environment. Due to this having to interact with our actual inventory, it was important to handle my testing on a mock inventory before using the code on the real thing. It took a little bit of setup but ultimately was a fairly simple thing to build.</p>
    </article>

    <!-- Testing with Insomnia -->
    <article>
        <h2>Testing and Insomnia</h2>

        <p>I had to do a bit of custom testing since Google Apps Script was my API. There is no formal testing library from Google and I doubted anyone would do much more to this app after me so I decided to forgo automated tests. Most of my tests were fairly small and simple to verify my outputs. For my endpoints, I used Insomnia to test my requests and responses. I actually really enjoyed it especially compared to Postman, it felt simpler and cleaner in comparison.</p>

        <p>For much of my code, consistent small tests helped me write code in logical chunks. It was noticeable how I began to shift my code into logical, data manipulations and procedures. It definitely cleaned up my code, even driving me to use some class style code to group certain areas of code into a class, but instead trying to use JavaScript's prototypes. In this project, I had to house my code in classes/objects due to Google App Script exposing every file into the global scope.</p>
    </article>

    <!-- Deploying using Node.js -->
    <article>
        <h2>Deploying With Node</h2>

        <p>Because we're a used computer company, I figured we could just host the site on our own. We wouldn't be doing audits every hour and I also didn't want to leave our audit tool potentially open to the internet. I decided to deploy the site using Node.js on a spare computer we had with a quick way to spin it up and shut it down. We opened a local network port specifically for it and now turn the site on whenver it's time to audit. Another great experience for me because I've never really had the chance to deploy a local site before. I can see how the complexity would encourage most devs to using our many online deployment services. Lucky for me, Sveltekit has a fairly easy to use adapter system for deploying to different platforms.</p>
        
        <p>It also really paid off to have setup environment specific settings for this stage. With a few variable changes, my site and API were setup for production.</p>
    </article>

    <article>
        <h2>Project Takeaways</h2>

        <p>I think the major takeaways were all aspects that paid off over the long term. I realized that the beginnings to a project are incredibly time consuming, laying out the structure and fundamental pieces of code. But I also learned that if you think through your needs early on, it becomes much, much easier to work later on by several orders of magnitude. In fact, a month after deployment, I added an extra feature to "quick audit" some individual locations. I was surprised at how easy it was to add this feature because I was able to branch off of the master and switch back into dev mode, diving right back into the code. All of my links were housed in one ordered place and by simply switching one variable, all dependant functions were making requests to the correct paths.</p>

        <p>I also plotted a path to a reasonable Minimum Viable Product. There's never enough time to finish something so I tried my best to lay out the most important functions of the app. While the site itself didn't look the greatest, it handled all the basic use cases that I required and it was deployed within a month. I had the vast majority of what was needed built and set myself up to make improvements later on. In the case of this project, I didn't do much enhancement afterwards besides a few bug fixes and an added feature but I know I'm set to jump into this project at any point in the future to make improvements. This has been a crucial lesson in helping me charge forward into a first working version that I can build on. It builds momentum and is the real heart of software development.</p>
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