# wcparse

Parses and displays information from wondercard files from the Pokémon games.

![Screenshot](/img/screenshot.png?raw=true "Screenshot")

Currently supports the following file types:

- wc6/wc7
- wc6full/wc7full
- Decrypted Gen 7 BOSS
- wc5/pgf
- wc4/pcd/pgt (the non-encrypted parts)

If you don't have the file for the wondercard you want to view, you should be able to find it [here at Project Pokémon's Event Gallery](https://github.com/projectpokemon/EventsGallery).

### I have no idea what any of that means

Wondercards are basically DLC (downloadable content) that can be downloaded into the Pokémon games while participating in specific real-life events. They're templates of Pokémon, which can be redeemed ingame for "limited edition" event Pokémon. Using certain tools, these wondercards can be copied and extracted from the game. 

If you extract your wondercard, or download one from elsewhere, you might be curious what kind of Pokémon you'll get when you redeem them ingame. Does it have predefined stats, like nature, IVs, or EVs? Can it be either male or female, or is it always male or always female? Will I be wasting my time if I try to soft-reset for a shiny (different colored) Pokémon?

wcparse answers all of these questions and more. Open the wondercard file in wcparse, and you'll see all the information it contains. Its display is designed to be appealing, compact, and adaptable to different file types, making it easy to screenshot and share the information with others. Or you can view the full JSON output, if you're looking for even more details.

### Credits

- Porybox's [pkparse](https://github.com/porybox/pkparse) for part of the code
- [Pokesprite](https://github.com/msikma/pokesprite) for sprites
- Project Pokémon's research on wondercard structure
- Probably many more