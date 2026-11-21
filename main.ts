import { mkdirSync, writeFileSync } from 'node:fs';
import { Buffer } from 'node:buffer';

const poem = 'I kept the key you gave me in my pocket so long it learned the shape of my hand. Today I turned it — and the lock remembered me.';

// The poem is about agency: a key is given to the speaker, then used by the
// speaker's own hand. Keep the output newline-free so the file contains only the poem.
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', poem, 'utf8');

console.log(`Character count: ${[...poem].length}`);
console.log(`Byte length: ${Buffer.byteLength(poem, 'utf8')}`);
