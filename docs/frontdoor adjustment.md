#identification 

We have a graph that looks like this:

![[Pasted image 20211016141801.png]]

We can't see W. So, the [[backdoor adjustment]] is not going to work. Instead, we can first estimate the causal effect of T on M. Then, we can calculate the effect of M on Y. Basically, instead of making assumptions/providing knowledge about confounders, we make assumptions about the ways in which T can influence M.

Here is the formula for that adjustment:

![[Pasted image 20211016142341.png]]

To do this though, we need to make some big, scary assumptions.

1. M completely mediates the effect of T on Y.
2. There are no unblocked backdoor paths from T to M.
3. All backdoor paths from M to Y are blocked by T.

I wonder if the two of these could be used together to sanity check each other/ think about the consistency of a candidate SCM.