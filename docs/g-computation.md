#identification 

also called *conditional outcomes model (COM)*

The most literal interpretation of the potential outcomes framework. You train a model to predict outcome given treatment and covariates. This is called the *Q-model* Then, you predict everyone's outcome but if they were treated. Then, you predict everyone's outcome but if they were untreated. Then, you compare the means.

Alternative formulation: you get a model for $P(Y | X, T)$. Then, you marginalize on $X$. This gives you $P(Y | do(T))$. I think?

The tricky bit is correctly specifying a model for outcome given treatment and covariates. But also you could just use like a random forest or something right?

**Pitfalls and modifications**
- This method can underestimate the effect of T in high-dimensional data. One fix is to train one different model each on treatment and control. This is called grouped conditional outcomes model (GCOM).
- Unfortunately, GCOM can have higher variance than normal COM because it is not using the data efficiently. TARNet addresses the variance problem by training a single network with two heads: one for the treatment and one for the control group.
- X-learner remedies this in a super complicated way
	- Learn two models $\mu_0$, $\mu_1$ that predict Y given X for control and treatment groups respectively.
	- Get an estimate of the individualized treatment effect $\hat{\tau_i}$ for each unit by using the appropriate $\mu$ to estimate the counterfactual.
	- Train models $\tau_1$ and $\tau_0$ on treatment and control groups respectively to predict $\hat{\tau_i}$ given X.
	- Final estimate of individualized treatment effect is a weighted sum of $\tau_1$ and $\tau_0$, where the weights are determined by propensity score.

#question: [[chatton 2020 -  choosing covariates sim.pdf]] claims that you can do this for the ATT by just marginalizing using the treatment group, but I am skeptical. Won't the baseline characteristic of the population bias the model? e.g., if 90% of the study population is treated, and then the model will probably be better at predicting outcomes for treated guys than untreated guys. This means we will only be able to get ATE, not ATT and ATC? right?