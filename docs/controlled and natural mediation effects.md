We have a T which influences Y directly and via a set of mediating variables M. We want to measure what parts of the effect of T on Y are *direct* and which parts are *indirect*.


## controlled effects

Naive approach: you get the *controlled direct effect (CDE)* by setting the mediators constant and moving the treatment.

$$CDE = E(Y | do(T=1, M)) - E(Y | do(T=0, M))$$

- pros: all quantities we can measure with experiments
- cons:
	- we are limited to measuring the effect only for specific values of M
	- this doesn't give us a way to get the indirect effect.


## natural effects

A modification is called the *natural direct effect (NDE)*. Instead of setting M to an arbitrary value, you set it to the expected value, given $do(T=0)$.

$$MDE = E(Y | do(T=1, M=E(M | do(T=0)))) - E(Y | do(T=0, M=E(M | do(T=0))))$$

This isn't necessarily measurable in an experiment (depends on graph), but it is a lot nicer theoretically because it gives us a nice way to think about indirect effects.

We can extend this to calculate the *natural indirect effect (NIE)* by setting T=0 and then manipulating M to be either its expected value given that T=0 or its expected value given that T=1.

$$MDE = E(Y | do(T=0, M=E(M | do(T=1)))) - E(Y | do(T=0, M=E(M | do(T=0))))$$

The total effect $TE$ is equal to the sum of these. (proof?)


## measuring natural effects

If we have an adjustment set W such that:
- no W is a descendant of T
- W blocks all backdoor paths from M to Y

Then we can use the following experimental quantity,
![[Pasted image 20211017170233.png]]

Or, if we can use this expression if we make the above assumptions and also find ways to identify everything here:
![[Pasted image 20211017170434.png]]


## more
Neal recommends *Identifiability of Path Specific Effects* (Avin et al., 2005)
