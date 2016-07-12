Why is flow slow here? Make any little change, and this simple repo takes 8 seconds to check:

```
% time flow
No errors!
flow  0.07s user 0.02s system 1% cpu 8.474 total
```

Most of time is spent on the "merging inference" phase.