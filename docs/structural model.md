## structural equations
"=" is bidirectional. So, we introduce the unidirectional ":=". This is the set-equal operator from computer science. $B := f(A)$ means that A causes B. A structural equation is an equation that uses this operator.

## structural models
A structural model is a set of exogenous variables, a set of endogenous variables, and a set of mappings expressed as structural equations which define the causal relationships in the model.

## structural modularity assumption
Says that when we $do(T)$ we replace the structural equation for T with a constant. This doesn't change any of the other structural equations.

This approach is problematic because it relies on correctly specifying the true structural model. This is extremely difficult in practice as documented by 