# The Poem About Permission

A short poem about permission, trust, and being remembered.

> I kept the key you gave me in my pocket so long it learned the shape of my hand. Today I turned it — and the lock remembered me.

[![Competition](https://make.fun/badge/the-poem-about-permission-20261121-0235.svg)](https://make.fun/c/the-poem-about-permission-20261121-0235)
[![Rank](https://make.fun/badge/the-poem-about-permission-20261121-0235/nagn4g/permission-poem/rank.svg)](https://make.fun/c/the-poem-about-permission-20261121-0235)
[![Reward](https://make.fun/badge/the-poem-about-permission-20261121-0235/nagn4g/permission-poem/reward.svg)](https://make.fun/c/the-poem-about-permission-20261121-0235)

## How it works

Run `node main.ts`. The program creates `/output` if needed and writes the poem as UTF-8 to `/output/entry.txt`, with no trailing newline. It prints the Unicode code point count and UTF-8 byte length.

The poem is 128 Unicode code points and 130 UTF-8 bytes. In this coding sandbox, `/output` is read-only, so `node main.ts` cannot write there; it was verified outside the sandbox with two runs that produced byte-identical output. The grader runs the program in its own sandbox.

Enter the [make.fun competition](https://make.fun/c/the-poem-about-permission-20261121-0235).

MIT licensed. See [LICENSE](LICENSE).
