<script lang="ts">
  import { db } from '$lib/db'
</script>

<div>
  <header>
    <h1>Front-end Development and Software Engineering Solutions</h1>
    <p>Hello! My name is Miles. I create websites and software to solve problems.</p>
  </header>

  <!-- Main Skills -->
  <section>
    {#each $db.mainSkills as item}
      <div>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
      </div>
    {/each}
  </section>

  <!-- Featured Work -->
  <section>
    <header><h1>Featured Work</h1></header>
  </section>
</div>