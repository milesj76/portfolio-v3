<script lang="ts">
  import "../app.css";
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import { MenuIcon } from "lucide-svelte";
	import { goto } from "$app/navigation";
  
  import { GithubIcon } from "lucide-svelte";

  // function navigate(target) {
  //   goto(target)
  // }
</script>

<div class="text-black bg-white-100">
  <nav class="flex justify-between items-center px-4 py-4">
    <div class="flex items-baseline space-x-4" >
      <!-- <h1 class="text-3xl font-bold">mB</h1> -->
      <a href="/" class="tracking-tighter font-light text-base"><span class="font-bold text-3xl text-blue-dark">m</span>iles <span class="font-bold text-3xl text-blue-dark">B</span>urke</a>
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
          <MenuIcon class="h-16 w-16 text-blue-dark" />
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="right">
        <Sheet.Header>
          <!-- <Sheet.Title>Miles Burke</Sheet.Title> -->
          <Sheet.Description class="my-4">
            <a href="https://www.github.com/milesj76" target="_blank" class="w-10 hover:text-blue-light">
              <GithubIcon />
            </a>
          </Sheet.Description>
        </Sheet.Header>
        <form class="flex flex-col space-y-2">
          <Sheet.Close asChild let:builder>
            <a href="/">Home</a>
            <!-- <a href="/portfolio">Portfolio</a> -->
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
  <div class="mt-8 py-1.5 bg-blue-dark" />
  <footer class="py-6 px-4 space-y-4 text-center bg-black text-white-100 border-blue-dark">
    <div>
      I'm a developer with two years of professional experience. I build websites, apps and API's to make business better.
    </div>
    <div class="flex justify-center">
      <a href="https://www.github.com/milesj76" target="_blank" class="w-10 hover:text-green-400 duration-75">
        <GithubIcon />
      </a>
    </div>
    <div>
      <p>Created by Miles Burke using Sveltekit</p>
      <a href="https://www.flaticon.com/free-icons/technology" title="technology icons">Technology icons created by orvipixel - Flaticon</a>
    </div>
  </footer>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
</style>