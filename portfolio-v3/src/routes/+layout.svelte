<script lang="ts">
  import "../app.css";
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import { MenuIcon } from "lucide-svelte";
	import { goto } from "$app/navigation";

  // function navigate(target) {
  //   goto(target)
  // }
</script>

<div class="">
  <nav class="flex justify-between items-center px-4 py-4">
    <div class="flex items-baseline space-x-4">
      <!-- <h1 class="text-3xl font-bold">mB</h1> -->
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
        <form class="flex flex-col space-y-2">
          <Sheet.Close asChild let:builder>
            <a href="/">Home</a>
            <a href="#">Portfolio</a>
            <a href="/about">About</a>
            <!-- <a href="#">Articles</a> -->
          </Sheet.Close>
        </form>
        <Sheet.Footer class='my-2'>
          <Button>Get In Touch</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  </nav>

  <main class="">
    <slot />
  </main>

  <!-- Footer -->
  <footer>
    <div>
      Little description of Miles
    </div>
    <div>
      Social media links
    </div>
    <div>
      <p>Created by Miles Burke using Sveltekit</p>
      <a href="https://www.flaticon.com/free-icons/technology" title="technology icons">Technology icons created by orvipixel - Flaticon</a>
    </div>
  </footer>
</div>