
**Positivity**: The probability of treatment has to be strictly greater than 0 and strictly less than 1 conditioned on covariates. If everyone in a subpopulation is given treatment (or not given treatment), then we can't say anything about the effect of treatment for them.

$$0 < P(T | X) < 1$$

To satisfy positivity, we want as few things in X as possible. We want to condition on fewer things. This way, there will be fewer subpopulations, and we will be sure to have both treatment and control units in both. However, to prevent confounders, we want to condition on lots of covariates. So, there is a tradeoff.

If you have a bad positivity violation, then your models are forced extrapolate from known conditional expectations to unknown ones. This is bad.

I still don't have a great intuition for the mechanisms here...