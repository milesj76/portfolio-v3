<script lang="ts">
    import type { PageData } from './$types';
    import { db } from '$lib/db';
    import orderList from '$lib/img/tech-app/orderList.png'
    import inventoryDetail from '$lib/img/tech-app/inventoryDetail.png'
    import receivingScript from '$lib/img/tech-app/receivingScript.png'
    
    // export let data: PageData;
</script>

<div class="flex flex-col justify-center w-full mx-auto my-6 p-4 max-w-3xl 2xl:max-w-[80rem] space-y-8">
    <!-- Title -->
    <header class="text-4xl font-bold">ReUse Computers Technician App</header>

    <!-- Quick Description -->
    <article>
        <p>I was the main developer of the ReUse Technician App and used modern tools to very rapidly build an app that would use many of the same tools we had been using previously. This app was built in 2022 to facilitate the needs of the technicians at the small business I worked for, ReUse Computers. It was built to more efficiently handle the processes of handling incoming (and outgoing) shipments, inventory and work queues. It was built using a blend of Google Sheets, Google AppSheet and Google Apps Script (JavaScript). We saw a dramatic increase in productivity and organization and has since become a primary tool for every technician at ReUse Computers. It was built in about a month and it has continued to be updated and improved.</p>
    </article>
    
    <!-- Cover Image -->
    <section class="special-box">
        <img src={$db.portfolio.reuseTechnicianApp.coverImg} alt="ReUse Technician App Dashboard">
    </section>

    <!-- Quick Link to images -->

    <!-- Responsibilities -->
    <section class="special-box">
        <h4 class="text-lg font-semibold mb-2">Responsibilities</h4>
        <ul class="w-full grid grid-cols-3 grid-flow-row list-disc px-4">
            <li>JavaScript</li>
            <li>Google Sheets API</li>
            <li>AppSheet</li>
            <li>System Design</li>
            <li>Backend Design</li>
            <li>Testing</li>
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
        <p>I first started working for ReUse Computers in early 2022 as a new Computer Technician. The job was relatively simple: take used computers and refurbish them using extra parts to complete orders. By the time I joined, it was probably the largest the company had been. This was a small business that had been operating for seven or eight years and many of our operations were still a bit rudimentary. Our inventory was a Google Sheet with slightly accurate information about the computers we owned. It worked for a time and was the result of scrappy techs who spent most of their time trying to keep up with orders. </p>

        <p>I first started working for ReUse Computers in early 2022 as a Computer Technician. At the time, many of our "systems" we used to deal with inventory and orders was a simple Google Sheet. Technically, it "worked" but its inefficiencies started to bother me and drove me to consider new ideas on how we'd manage all the work we techs would have to do. Soon after I started, our sales had a dry spell and I took to finding ways to improve our workflow.</p>
        
        <!-- Explain the tech and your dev process -->
        <p>One of our techs showed me Google's AppSheet and it would allow us to rapidly build an app around the Sheets we were already using. It was also connected to a scripting feature that used JavaScript for more advanced, customizable features. I figured that these would be enough to put together something better than what we had in a short amount of time, which turned out to be true. About four or five weeks later, I had deployed an app for us to use.</p>
    </article>

    <article>
        <h2>Understanding The System</h2>

        <p>In the process of creating this app, I realized I had to understand how the current system was organized and divided. This would guide me to how I would connect our current data structures together with code. I want to emphasize this part of the project because I found this to be an extremely helpful learning experience. At this point, I hadn't really had the opportunity to work on existing structures and not on such a large and systematic scale. Seeing and organizing the project from macro and micro levels really taught me how to think about code and data structures as a system, how parts of the system interact and what a system requires to start and maintain operation.</p>

        <p>I've since taken this lesson into every project I've worked on since and it has dramatically improved my work on projects, especially those projects of higher complexity. This app will probably always have a special place in my memory.</p>

        <!-- Add image of the system blueprint I made -->
    </article>

    <article>
        <h2>Improving Inventory Accuracy</h2>

        <p>What bothered me most about our inventory was not only how difficult it was to find a computer but how upon opening that computer, it rarely contained the parts it claimed to have. This would actually drive me mad. I would have to physically eyeball every shelf, scanning for a model that would match my order, pull it out and hope that it was in decent enough condition for sale. A little paper tag hung off the front with little pencil writings scarcely explaining what issues were known about the computer. This information was never submitted to our Google Sheet because it occurred to me that the techs felt it wasted too much time figuring out where to type this or how to format it.</p>

        <p>Our most obvious need was a way to update information as quickly and simply as possible. If it wasn't fast, the techs would never do it. If it was confusing, the techs would never do it. I knew that a simple app on everyone's phone that let you tap a few buttons to update info on a computer would be something everyone could do in no time. Not only that, but the data would be centralized and more consistent being kept in their proper columns. This also made us consider a shift to using barcodes so that we could quickly scan and pull up data. More efficiency.</p>

        <p>AppSheet had most of these features built into it and seemed to be primarily what it was made for. I immediately duplicated our inventory Sheet and began building off of it to start the app.</p>
    </article>

    <section class="special-box space-y-8 text-center">
        <img src={inventoryDetail} alt="Iventory item details">
        <p>An computer in inventory and it's details.</p>
    </section>

    <article>
        <h2>Handling The Shipping Process</h2>

        <p>As I started thinking about the basic CRUD functions needed to use the inventory, it occurred to me that I needed to address adding and removing computers from the inventory. What I decided to do was to create a Receiving queue. Previously, every computer that would be added directly to the inventory and had a shipping status. The inventory needed to stay accurate and lean so we weren't wading through useless data so it made more sense to separate data by their "state" in our process. The added benefit of having this Receiving queue was that we could get a snapshot of what we received and archive it for future reference. This has been instrumental in helping us solve inventory and returns issues as time has gone on.</p>

        <p>This Receiving queue I also designed to pre-assign each incoming computer a unique ID. My boss had already picked a tag system that would scale infinitely (i.e. 1000A, 1000B, 1000C...) so I used JavaScript to create scripts to generate new IDs and assign them. At the time of check in, a person would have to verify some information on the computer before it would be added into the inventory. This would not only move the computer's data into the inventory but would also record the state and time of check in and add it to the Receiving Archive. AppSheet has some weaknesses though and has trouble dealing with special instances of user input. I threw together a quick sort of form in another Google Sheet so that we could easily add any number of computers that we'd purchased and all of their purchase/computer details. This also required some back side JavaScript but has made the whole process of adding new computers much, much simpler. I originally wanted to make a website form instead but it was taking too much time to figure out how to connect such a thing to Google's services securely.</p>

        <p>As for the outgoing items, we already had a shipping manifest Sheet made that was connected to a Google Form. Luckily, that integrated very easily into the application and worked very similarly to the way it had originally. We've since made upgrades to it and can now scan and auto-fill in the majority of the needed data. This all has made it possible to allow many people to get involved in these processes while still maintaining data standards and logging historical data.</p>
    </article>

    <section class="special-box space-y-8 text-center">
        <img src={receivingScript} alt="Some code that handles data in the receiving process.">
        <p>Some example of code that handles data in the receiving process.</p>
    </section>

    <article>
        <h2>Integrating Orders</h2>

        <p>Originally, I had only intended to create a highly accurate inventory with an extremely smooth and intuitive experience. As the app progressed towards completion, we techs had the idea to also use the app to simplify working on our orders. This would mean incorporating another Sheet and also virtualizing our order "check list" to provide verification of certain parts of our work. With this, we could automate many manual actions (writing our progress, noting order peripherals to be shipped, etc.) and, in turn, make us more efficient at our work.</p>

        <p>This, again, was a matter of taking a Google Sheet that already existed, integrating it into the AppSheet system and adjusting it to facilitate common functions our technicians would be using. This feature existing alongside the Inventory made the technician's process so much smoother. Now, one could claim an order, its details emphasized in the UI to easily identify and understand, find the related model of computer with the click of a button, see highly accurate information about what was in the computer and where to find it, claim it, and get right to refurbishing.</p>

        <p>On top of this, once it was time to ship the order, we had every order detail to be sure we weren't missing anything and, with a click, add the shipment to our outgoing manifest. The process from start to finish became simpler, less manual and more accurate. All of the main parts of the refurbishing process integrated together to make a vastly simpler experience.</p>
    </article>

    <section class="special-box space-y-8 text-center">
        <img src={orderList} alt="List of computer orders">
        <p>The list of orders that need to be fulfilled by the techs.</p>
    </section>

    <article>
        <h2>Logistical Upgrades</h2>

        <p>Though this wasn't so much code related, it was critical to improving our process. Clearly, the business had always been small and scrappy, running on mostly processes that were made up on the spot under tight time and resource constraints. For example, our inventory shelves all had numbers, but only the entirety of the shelf had a number, not each of its four or five shelves. Now that updating information was simple, we decided make locations more granular by emphasizing shelf (going from shelf "A1" to "A1-1, A1-2, A1-3, etc."). This dramtically reduced search time for computers by reducing the number to look through from 40-50 down to about seven.</p>

        <p>We also decided to try implementing barcodes as this would allow us to search by scan. This seemed like an obvious improvement and with some work and tuning, we had an entire barcode printing system with barcode tagged shelves.</p>

        <p>To my surprise, one logistical issue we had turned out to be a perfect demonstration of data structures and their value. Our smallest computers, known as micros, had a unique form factor that didn't seem to make use of our shelf space efficiently. Because most computers tend to be tall and slender, naturally the shelves would be left tall and allow each computer to sit side by side like a bookshelf. The micros were so short, however, that to place them on the shelves in the same fashion would give up almost half of the allocated shelf space. At the time, the solution was to stack the micros to get more out of the space. The only problem was that micros at the bottom of each stack tended to stay on bottom as getting them out was difficult. With the go ahead from my boss, I restructured the shelf space to be shorter in order to unstack these micros and instead lay them on each shelf as books. This gave us all the benfit of finding and grabbing every micro with ease while also maximizing space. It occurred to me afterwards that this was the value of properly structuring data to improve efficiency in algorithmically using said data. Of course, this made me so much more excited to learn about programming and I believe to be a great way to help someone understand the value and utility of data structures.</p>
    </article>

    <article>
        <h2>The Working Product</h2>
        
        <p>After four or five weeks, I had deployed the app and converted our systems over to our new Google Sheets. In full, the app now provided a more inuitive interface and way to interact with our data. All of the main areas of our production were handled, receiving computers and parts, the inventory of computers, the orders to be fulfilled and outgoing shipments. What was able to be handled by AppSheet I had made actions and what couldn't be handled by AppSheet I wrote scripts with JavaScript.</p>

        <p>Since then, we made other improvements to help keep track of different types of issues pertinent to the business. This app made a significant impact on how work was done at ReUse and has since been a central part of getting work done. I have a hard time believing we actually worked without the app. The inventory became highly accurate giving us insight into its quality and what parts we hard available. Finding a computer is extremely simple and shelf space is always easy to maximize.</p>

        <p>What I loved most about this project was that it was the first time I was making a tool that would be utilized by other people. Knowing that it was going to be used everyday really forced me to think through what was most important that I really nail and handle with tech. The tight time constraints really helped me as well in making decisions and forgoing certain ideas for the program. I ended up really enjoying the scrappy nature of the app because despite its simplicity, it made an enormous difference in how work was done afterwards. It's what learning to program was always about for me and it was so cool to get to enjoy the fruits of my work for myself.</p>
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
        @apply bg-white-200 p-8 rounded-md shadow-sm;
    }
</style>