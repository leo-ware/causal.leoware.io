---
sidebar_position: 3
---

The notion of an *intervention* is very fundamental to causal inference. We can think of an intervention as reaching into a system and manually changing the value of some variable.

Symbolically, we represent interventions using the $\text{do}$-operator. This operators goes to the right of the bar in a conditional probability expression and indicates that we are intervening on that variable to set it to a specific value. So, $P(Y | \text{do}(X=1))$ represnts the distribution of $Y$ if we were to intervene on $X$ and set it to $1$.



To intervene on a variables is to change the mechanism by which its value is determined. This is a useful concept in the context of decision making in complex systems because it captures many of the ways we might try to infuence the functioning of the system.

:::tip
For example, suppose we are trying to evaluate the effect of restricting carbohydrate intake on weight loss in a certain population. The treatment (carbohydrate restriction) can be thought of as an intervention on the variable carbohydrate intake because it changes the mechanism by which this value is determined. Now, instead of individuals in the population choosing their carbohydrate intake based on lifestyle, preferences, mood, etc
:::

The cleanest way to do this in the real world is through randomized experiments.

Suppose a scientist wants to measure the effect of carbohydrate consumption on weigh gain in a certan population. 

In the context of causal graphs, we can think of an intervention as a kind of graph surgery. Here, the causal graph in our model represents the process by which "nature" generatede some data. Intervening on a variable involves severing the edges leading into the corresponding node and replacing them with a new parent representing our intervention.

