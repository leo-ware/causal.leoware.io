---
tags: ["discovery"]
---

import DocLink from '@site/src/components/DocLink'

We have some data, we want to make a causal graph

Two main approaches
- independence-based: requires the unappealing assumption of <DocLink to="faithfulness"/>
	- you can't do better than a [["markov equivalence"]] class
	- you're gonna be doing a lot of conditional independence tests = crap ton of data
	- algorithms
		- [[PC algorithm]] assumes no unobserved confounders, acyclicity is slow
		- [[FCI algorithm]] allows unobserved confounders
		- [[CCD algorithm]] allows cyclic graphs
		- [[SAT-base causal discovery]] is the chad
- semi-parametric
	- you can't do better than the [[markov equivalence]] class in the linear Gaussian noise setting
	- if you have a linear functional form with non-Gaussian noise,  or a nonlinear functional form with additive noise, you can get the direction
- intervention based

Neal recommends (Eberhardt, 2017) as a good review article