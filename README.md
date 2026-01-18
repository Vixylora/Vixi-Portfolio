### Vixi's Portfolio

> [!Note]
> The website still under development, expect changes to happen

## Fonts used
###### don't ask why I have this many fonts!!
### Main
- Roboto
- Nunito
- Poppins
- Funnel Display
- Cairo play
### Decoration
- Rubik Glitch
- The Nautigal (Quotes)
- Elsie (Elegant)
- Cactus Classical Serif (Japanese classical style)
- Playfair Display (Fashion Magazines style)

## Component's usage
### Primary Button
- Variants: 1
  - "simple" - button container with a padding to the inner content. There is an **outline with transparent background** for the container and **simple solid background** for the inner button with the text font being **Roboto**

_Implementation_
```tsx
import { PrimaryButton } from "./components/index";

function YourFunction () {
    return(
        <>
            <PrimaryButton variant="simple" text="Your Text Here" />
        </>
    )
}
```