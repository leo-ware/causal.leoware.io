---
tags: []
---

import DocLink from '@site/src/components/DocLink'

Typically, the best way to determine the causal assumptions of a model is by reasoning about what makes sense in the context of the problem. However, there are some computational techniques that can try to infer the causal structure directly from the data. This is called *causal discovery*.

Causal discovery techniques require making lots of parametric assumptions, and they are not very robust. So, this approach is not recommended. Still, these techniques exist, and they are sometimes useful.

There are three main approaches to causal discovery:
- **Independence-based**: require the unappealing assumption of <DocLink to="faithfulness"/>
	- You can't do better than a <DocLink to="markov equivalence"/> class. So, the algorithm often won't be able to find the exact causal structure.
	- These algorithms rely on doing lots of conditional independence tests. These are computationally expensive, data hungry, and require parametric assumptions about the data.
	- Algorithms
		- <DocLink to="PC algorithm"/> assumes no unobserved confounders, acyclicity is slow
		- <DocLink to="FCI algorithm"/> allows unobserved confounders
		- <DocLink to="CCD algorithm"/> allows cyclic graphs
		- <DocLink to="SAT-based causal discovery"/> is the chad
- **Semi-parametric**
	- You can't do better than the <DocLink to="markov equivalence"/> class in the linear Gaussian noise setting
	- If you have a linear functional form with non-Gaussian noise, or a nonlinear functional form with additive noise, these algorithms can determine the direction of causality.
- **Intervention based** require the ability to simulate the data generating process

Neal recommends (Eberhardt, 2017) as a good review article