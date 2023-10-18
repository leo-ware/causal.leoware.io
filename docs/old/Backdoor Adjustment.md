---
tags: []
---

import DocLink from '@site/src/components/DocLink'

If we block all the noncausal paths from $X$ to $Y$ by conditioning on $w$, then we can get an expression for $P(Y | do(X))$. We assume that $w$ is a <DocLink to="sufficient adjustment set"/>

$$
P(y | do(X)) = \sum_{w} P(y | X, w) P(w)
$$

This should be familiar. It's just saying that you need to control for confounders when you do your regression. This is the formal model that allows us to prove that intuition.