#identification 

https://www.youtube.com/watch?v=NLgB2WGGKUw

We've got a feature I, a treatment T, and an outcome O. We make some assumptions.
- I does not cause O
- I does cause T. (Is independent conditional on X, y, $\epsilon$)
- I is independent of other features.
Conclusion: any correlation between I and T is a causal effect of T on O.

Visually:

```foo
e ------------> O
		    |
X ----> T --|
	|
I --|
```

Basically, even if we can't *assign* treatment, we might be able to *nudge* treatment (or find data about a nudge). We can still get a causal effect even though some people ignore the nudge.

[[Natural Experiments]] are a subset of instrument variable designs