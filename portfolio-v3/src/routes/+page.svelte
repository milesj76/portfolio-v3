<script lang="ts">
  import { db } from '$lib/db'
  import Button from '$lib/components/ui/button/button.svelte';

  const featuredWork = [$db.portfolio.reuseTechnicianApp, $db.portfolio.reuseAuditApp, $db.portfolio.jsCalculator]
</script>

<div class="flex flex-col justify-center w-full mx-auto my-2 p-4 space-y-12">
  <header class="flex flex-col justify-center text-center space-y-2">
    <h1 class="text-4xl font-bold">Front-end Development</h1>
    <p class="text-lg">Hello! My name is Miles. I create websites and software to solve problems.</p>
  </header>

  <!-- Main Skills -->
  <section class="grid gap-4 mx-auto">
    {#each $db.mainSkills as item}
      <div class="grid grid-flow-col gap-6 bg-slate-100 py-8 px-6 rounded-md max-w-md">
        <img src={item.img} alt={item.imgAlt} class="w-24 h-24 xs:bg-red-500 my-auto" />
        <div>
          <h2 class="text-2xl font-bold mb-2">{item.title}</h2>
          <p>{item.desc}</p>
        </div>
      </div>
    {/each}
  </section>
  <hr>

  <!-- Featured Work -->
  <section class="space-y-4">
    <header class="text-4xl text-center font-bold"><h1>Featured Work</h1></header>
    <div class="space-y-8">
      {#each featuredWork as project }
        <article>
          <!-- ADD IMG FOR EACH PROJECT HERE -->
          <h2>{project.title}</h2>
          <p>{project.quickDesc}</p>
        </article>
      {/each}
    </div>
  </section>

  <Button class="w-40 self-center">Get In Touch</Button>
</div>