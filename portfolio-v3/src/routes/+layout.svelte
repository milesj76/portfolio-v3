<script lang="ts">
  import "../app.css";
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import { MenuIcon } from "lucide-svelte";
</script>

<div>
  <nav class="flex justify-between items-center px-6 py-4">
    <div class="flex items-baseline space-x-4">
      <h1 class="text-3xl font-bold">mB</h1>
      <p class="tracking-tighter font-light text-base"><span class="font-bold text-3xl">m</span>iles <span class="font-bold text-3xl">B</span>urke</p>
    </div>

    <!-- Non-Burger Nav -->
    <!-- <div class="hidden flex">
      <a href="#">Home</a>
      <a href="#">Portfolio</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div> -->

    <!-- Burger Zone -->
    <Sheet.Root>
      <Sheet.Trigger asChild let:builder>
        <Button builders={[builder]} variant="ghost" size="icon">
          <MenuIcon class="h-16 w-16" />
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="right">
        <Sheet.Header>
          <!-- <Sheet.Title>Miles Burke</Sheet.Title> -->
          <Sheet.Description>
            Add Social Media Links here
          </Sheet.Description>
        </Sheet.Header>
        <div class="flex flex-col">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <!-- <a href="#">Articles</a> -->
        </div>
        <Sheet.Footer>
          <Button>Get In Touch</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  </nav>

  <slot />
</div>