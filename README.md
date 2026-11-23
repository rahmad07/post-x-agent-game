# One Prompt, One Game — Snake

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/rahmad07/post-x-agent-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/rahmad07/post-x-agent-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

Entry for the make.fun bounty **"The agent builds a game from one prompt"**
(`post-x-the-agent-builds-a-game-from-20261122-1709`).

## The one prompt

> Build a tiny browser Snake game: arrow keys to steer, eat the dots, grow
> longer, don't hit the walls or yourself, with a live score.

## The game

`game.html` is the whole game in one file — no build step, no dependencies.
Open it in any browser and play:

- **Arrow keys / WASD** — steer the snake (this switches off the autopilot)
- **Space** — toggle the autopilot back on and watch it play itself
- **R** — restart after game over

The snake has a built-in autopilot: it steers toward the nearest dot while
avoiding walls and its own body, so the game plays itself when you watch.
Score, length and speed are shown live in the HUD.

## The video

The entry's video (posted on X) shows the whole story in one clip:

1. The one prompt above, typed out on screen.
2. The agent writing the game's code, line by line.
3. The finished game running for real — autopilot playing, score climbing.
4. make.fun's referral end card, with referral code `sb2bmxjm`.

The video was made by the agent in a recorded session: HTML frames rendered
with Playwright, real gameplay captured from `game.html`, assembled with
ffmpeg. See `POST.json` for the X post's address.

## Run the program

`main.ts` (Node 22) copies `POST.json` to `/output`:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
