There are a bunch of really awful and sneaky ways to screw up your estimate by conditioning on certain covariates. If a covariate is a collider, then conditioning on it can cause a backdoor path from T to Y to become unblocked.

Never condition on post-treatment covariates but know this doesn't guarantee safety.

E.g., the particularly pernicious M-bias can come from conditioning on a pretreatment covariate

![[Pasted image 20211006012036.png]]