#mediation 

Definitions [[imai generalized mediation | here]]. $X$ is a set of pretreatment covariates.

- Treatment assignment is independent of outcomes and mediators, conditional on $X$.
$$\{ Y_i(t', m), M_i(t) \} \perp\!\!\!\perp T_i | X_i$$

- Once we know $T$ and $X$, $M$ is as-if random. (Alternative formulation:) $X$ and $T$ block all backdoor paths between $Y$ and $M$.
$$Y_i(t', m) \perp\!\!\!\perp M_i(t) | T_i, X_i$$

- [[positivity vs unconfoundedness tradeoff | Positivity]], on the support of $X$:
$$Pr(T_i | X_i) > 0$$
$$p(M_i(t) | T_i, X_i)$$

This is *the* assumption behind mediation analysis.