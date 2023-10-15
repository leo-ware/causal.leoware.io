#mediation

The classic approach to mediation is via linear structural equation models. What portion of the effect of T on Y goes via M? X is some pretreatment covariates. We can do these linear regressions:

$$M = \beta_1 T + \zeta_1 X + \alpha_1 + \epsilon_1$$
$$Y = \beta_2 T + \zeta_2 X + \gamma M + \alpha_2 + \epsilon_2$$

Then, if the $\beta$s are statistically significant, $\gamma$ can be interpreted as the mediation effect of $M$.

Note the original formulation included the stipulation that you get a statistically significant result if you regress $Y$ onto $T$ directly, but this is dumb (d'apres Imai) b/c then you miss the case where direct and mediated effects cancel out.

**Assumptions and Sensitivity Tests**
The big assumptions here (aside from the baggage from the linear estimators) are [[sequential ignorability]]. The easy ones are random assignment to treatment and positivity. The hard one is that M and Y are independent, given X and T. Cleverly, we can rephrase this as $\epsilon_1$ and $\epsilon_2$ being independent. Then, we express the estimated treatment effect as a function of the correlation between these two---testing the robustness of estimate to violations of the assumption. Equations and details are in [[imai generalized mediation]].