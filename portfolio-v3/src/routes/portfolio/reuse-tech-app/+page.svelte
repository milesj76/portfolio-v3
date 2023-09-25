<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<div>
    <!-- Title -->
    <header>ReUse Computers Technician App</header>

    <!-- Quick Description -->
    <article>
        <p>I was the main developer of the ReUse Technician App and tried to use modern tools to very rapidly build an app that would use many of the same tools we had been using previously. This app was built in 2022 to facilitate the needs of the technicians at the small business I worked for, ReUse Computers. It was built to more efficiently handle the processes of handling incoming (and outgoing) shipments, inventory and work queues. It was built using a blend of Google Sheets, Google AppSheet and Google Apps Script (JavaScript). We saw a dramatic increase in productivity and organization and has since become a primary tool for every technician at ReUse Computers. It was built in about a month and it has continued to be updated and improved.</p>
    </article>
    
    <!-- Cover Image -->

    <!-- Quick Link to images -->

    <!-- Responsibilities -->
    <section>
        <h4>Responsibilities</h4>
        <ul>
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
        <h2>Improving Inventory Accuracy</h2>

        <p>What bothered me most about our inventory was not only how difficult it was to find a computer but how upon opening that computer, it rarely contained the parts it claimed to have. This would actually drive me mad. I would have to physically eyeball every shelf, scanning for a model that would match my order, pull it out and hope that it was in decent enough condition for sale. A little paper tag hung off the front with little pencil writings scarcely explaining what issues were known about the computer. This information was never submitted to our Google Sheet because it occurred to me that the techs felt it wasted too much time figuring out where to type this or how to format it.</p>

        <p>Our most obvious need was a way to update information as quickly and simply as possible. If it wasn't fast, the techs would never do it. If it was confusing, the techs would never do it. I knew that a simple app on everyone's phone that let you tap a few buttons to update info on a computer would be something everyone could do in no time. Not only that, but the data would be centralized and more consistent being kept in their proper columns. This also made us consider a shift to using barcodes so that we could quickly scan and pull up data. More efficiency.</p>

        <p>AppSheet had most of these features built into it and seemed to be primarily what it was made for. I immediately duplicated our inventory Sheet and began building off of it to start the app.</p>
    </article>

    <article>
        <h2>Handling The Shipping Process</h2>

        <p></p>
    </article>

</div>