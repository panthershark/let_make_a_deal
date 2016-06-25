# let_make_a_deal

Simulation for the popular and controversial Monte Hall / Let's Make a Deal problem.

The conflict arises b/c the statistical calculation changes depending on whether the host knows the answer to the problem ahead of time.

# Usage

### Let's Make a Deal 

This is literally the situation on Let's Make a Deal. Monte Hall never chose the car b/c he knew which door it was behind.

Run it with or without switching

```
node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=false
```

```
node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=true
```

### When The Host Does Not Know the Answer


```
node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=false
```

```
node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=true
```

# Results

### Let's Make a Deal

```
$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=false
runs: 100000
wins: 33628
winning percentage: 33.628%

$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=false
runs: 100000
wins: 33187
winning percentage: 33.187%

$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=false
runs: 100000
wins: 33302
winning percentage: 33.302%

$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=false
runs: 100000
wins: 33307
winning percentage: 33.306999999999995%
```

```
$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=true
runs: 100000
wins: 66676
winning percentage: 66.676%
$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=true
runs: 100000
wins: 66948
winning percentage: 66.948%
$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=true
runs: 100000
wins: 66430
winning percentage: 66.43%
$ node index.js --run_count=100000 --host_knows_answer=true --contestant_switches=true
runs: 100000
wins: 66695
winning percentage: 66.69500000000001%
```



### Host Does Not Know Answer
```
$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=false
runs: 100000
wins: 33248
winning percentage: 33.248%

$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=false
runs: 100000
wins: 33320
winning percentage: 33.32%

$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=false
runs: 100000
wins: 33463
winning percentage: 33.463%

$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=false
runs: 100000
wins: 33493
winning percentage: 33.493%
```

```
$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=true
runs: 100000
wins: 33288
winning percentage: 33.288000000000004%

$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=true
runs: 100000
wins: 32928
winning percentage: 32.928000000000004%

$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=true
runs: 100000
wins: 33222
winning percentage: 33.222%

$ node index.js --run_count=100000 --host_knows_answer=false --contestant_switches=true
runs: 100000
wins: 33128
winning percentage: 33.128%
```

