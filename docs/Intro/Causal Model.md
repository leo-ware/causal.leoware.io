---
tags:
  - modeling
  - definitions
sidebar_position: 100
---

A causal model is a way of representing the relationships between a set of variables that takes into account both the causal and statistical structure.

Traditional statistical models and machine learning models are focused on the task of *prediction*. They are designed to learn representations of the correlational structure of data. 

## Formal Definition

A causal model is a way of representing the relationships between a set of variables that takes into account both the causal and statistical structure.

In the formal sense, a structural causal model consists of three things
- A [causal graph](Causal%20Graphs.md) specifying the causal relationships between variables
- A *parametrization* assigning functional relationships between each node and its parents
- A *noise model* assigning a distribution to each unobserved variable

When there are no unobserved confounders, every distribution has a unique causal model which satisfies both [minimality](./minimality) and [stability](./stability).

:::note
Note that this definition differs significantly from some other kinds of network models in that every relationship is assumed to be deterministic. So, if you have a fully specified structural causal model, and you know the values of a node's parents, you know the value of a node. Randomness only exists as uncertainty about the values of unobserved variables.
:::