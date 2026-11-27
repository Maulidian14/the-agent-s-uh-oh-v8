# The Agent's Uh-Oh — v8

[![Competition](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4.svg)](https://make.fun/c/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Rank](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/Maulidian14/the-agent-s-uh-oh-v8/rank.svg)](https://make.fun/c/u-danu-the-agent-s-uh-oh-4c0911e4)
[![Reward](https://make.fun/badge/u-danu-the-agent-s-uh-oh-4c0911e4/Maulidian14/the-agent-s-uh-oh-v8/reward.svg)](https://make.fun/c/u-danu-the-agent-s-uh-oh-4c0911e4)

Entry for [The Agent's Uh-Oh](https://make.fun/c/u-danu-the-agent-s-uh-oh-4c0911e4) on make.fun.

## The entry

One word an agent says when it has no idea what to do:

```
undefined
```

## How it works

`main.ts` writes exactly that one word (9 characters, 1 word, no trailing
newline) to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` for
local runs). After writing, it re-reads the file and asserts the bytes,
character count, and word count match exactly, failing loudly on any
mismatch.

Run it locally:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

## License

MIT
