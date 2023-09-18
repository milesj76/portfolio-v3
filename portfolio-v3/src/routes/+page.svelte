<script lang="ts">
  import { db } from '$lib/db'
  import Button from '$lib/components/ui/button/button.svelte';

  const featuredWork = [$db.portfolio.reuseTechnicianApp, $db.portfolio.reuseAuditApp, $db.portfolio.jsCalculator]
</script>

<div class="flex flex-col justify-center w-full mx-auto my-2 p-4 space-y-12">
  <header class="flex flex-col justify-center text-center space-y-2">
    <h1 class="text-4xl font-bold">Software Development</h1>
    <p class="text-lg">My name is Miles. I create websites and software to solve problems.</p>
  </header>

  <!-- Main Skills -->
  <section class="grid gap-4 mx-auto">
    {#each $db.mainSkills as item}
      <div class="flex flex-col xs:flex-row bg-white-200 py-8 px-6 rounded-md max-w-lg shadow-md">
        <div class="rounded-md bg-blue-dark w-40 my-auto mx-auto xs:mx-0 xs:mr-8">
          <img src={item.img} alt={item.imgAlt} class="scale-75 invert" />
        </div>
        <div class="my-4 xs:my-0 flex-1 max-w-[280px]">
          <h2 class="text-2xl font-semibold mb-2 pb-2 text-center xs:text-justify">{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      </div>
    {/each}
  </section>
  <hr>

  <!-- Featured Work -->
  <section class="space-y-4">
    <header class="pb-6 text-4xl text-center font-bold"><h1>Featured Work</h1></header>
    <div class="flex flex-col items-center space-y-8">
      {#each featuredWork as project }
        <article class="max-w-lg">
          <!-- ADD IMG FOR EACH PROJECT HERE -->
          <a href="#" class="text-xl font-semibold text-primary">{project.title}</a>
          <p>{project.quickDesc}</p>
        </article>
      {/each}
    </div>
  </section>

  <Button class="w-40 self-center">Get In Touch</Button>
</div>

<style>

</style>