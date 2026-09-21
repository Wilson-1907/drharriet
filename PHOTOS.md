# Where to place photographs

**Correct folder (required):**

```
C:\Users\user\Projects\dr-harriet-tsinale\public\images\
```

Do **not** put photos in `src/data/` — that folder is for TypeScript content only. Photos must be in `public/images/` so the website can load them.

| File | Status | Where it appears |
|------|--------|------------------|
| **photo1.jpeg** | ✓ loaded | Homepage hero |
| **photo2.jpeg** | ✓ loaded | About + The Academic |
| **photo3.jpeg** | ✓ loaded | ODeL / leadership |
| **photo4.jpeg** | ✓ loaded | Cisco section |
| **photo5.jpeg** | missing — using photo2 | The Educator |
| **photo6.jpeg** | ✓ loaded | Research |
| **photo7.jpeg** | missing — using photo11 | Experience |
| **photo8.jpeg** | ✓ loaded | Career journey |
| **photo9.jpeg** | ✓ loaded | Cisco credential |
| **photo10.jpeg** | missing — using photo2 | About secondary |
| **photo11.jpeg** | ✓ loaded | NCHE Namibia (1) |
| **photo12.jpeg** | ✓ loaded | NCHE Namibia (2) |

To add the three missing ones, save them as `photo5.jpeg`, `photo7.jpeg`, and `photo10.jpeg` in `public/images/`, then update the matching `src` lines in `src/data/images.ts`.
