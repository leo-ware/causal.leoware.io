#mediation

[[imai-mediation-general-approach.pdf]] puts mediation analysis in the potential outcomes framework.

Solution: think about mediators the same way Rubin thinks about outcomes. $M_i(1)$ and $M_i(0)$ are the values of the mediator for unit $i$ under treatment and control.

Then, we make outcome for $i$ a function of both treatment and mediation: $Y_i(t, m)$

So, the **mediation effect** is given by,

$$\delta_i(t) = Y_i(t, M_i(1)) - Y_i(t, M_i(0))$$

This is saying: hold the treatment value constant and play with the mediator. The mediation effect is the different between the outcome under the treatment mediation value and the control mediation value, given the treatment.

The **direct effect** is given by,

$$\zeta_i(t) = Y_i(1, M_i(t)) - Y_i(0, M_i(t))$$

These are both functions of treatment status! The unit will have a different mediation and direct effect values depending on whether we fix the other to its treatment or control value.

So, the **total effect** of the treatment can be decomposed into these (proof is just algebra).

$$
\tau_i= Y_i(1, M_i(1)) - Y_i(0, M_i(0)) = {1 \over 2}\sum_{t = 0}^1 \{ \delta_i(t) + \zeta_i(t) \} 
$$

If you puts bars over everyone (take expected values), this still works.

Note: some (Rubin) consider this problematic because it introduces terms which are *in principle* unobservable. By definition, we can't intervene on the mediator value (cause then it would be another treatment). So, we can never observe $Y_i(1, M_i(0))$ or $Y_i(0, M_i(1))$.