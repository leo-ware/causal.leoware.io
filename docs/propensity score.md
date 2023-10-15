#identification 

The propensity score is the probability of receiving treatment given relevant covariates.

We only care about confounders in the first place because of how they influence P(T). The propensity score basically encodes all the relevant information here. If we condition on the true propensity score given some covariates W, then the remaining association can be attributed the causal effect, assuming positivity and unconfoundedness.

This might seem like it solves the [[positivity vs unconfoundedness tradeoff]] because it allows us to condense a (potentially) super high-dimensional W into a univariate propensity score. However, this is really just pushing the problem back, because we still face dimensionality issues when estimating the propensity score.

Also, d'apres Gary King propensity score matching is super overused and massively biased.
https://www.youtube.com/watch?v=rBv39pK1iEs

However, this isn't the only way to use propensity scores. There is also:
- matching
- stratification
- conditional adjustment
- inverse probability of weighting

**IPW**

In inverse probability weighting, we create a [[pseudodataset]] using the propensity score. There is trickiness here when trying to get the [[CATE]]

![[Pasted image 20211016230812.png]]