<script lang="ts">
  import "../app.css";
  import * as Sheet from "$lib/components/ui/sheet";
  import { Button } from "$lib/components/ui/button";
  import { MenuIcon } from "lucide-svelte";
</script>

<div>
  <nav>
    <div>Logo</div>

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
          <MenuIcon class="h-4 w-4" />
        </Button>
      </Sheet.Trigger>
      <Sheet.Content side="right">
        <Sheet.Header>
          <Sheet.Title>Miles Burke</Sheet.Title>
          <Sheet.Description>
            Add Social Media Links here
          </Sheet.Description>
        </Sheet.Header>
        <div class="flex flex-col">
          <a href="#">Home</a>
          <a href="#">Portfolio</a>
          <a href="#">About</a>
          <a href="#">Articles</a>
        </div>
        <Sheet.Footer>
          <Button></Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet.Root>
  </nav>

  <slot />
</div>