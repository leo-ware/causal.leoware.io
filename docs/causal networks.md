## Assumptions
A few important caveats/constraints
- *Local Markov Assumption* says that a node is independent of its non-descendants, given its parents
- *Minimality Assumption* says nodes are only adjacent if they are dependent.
- *Causal Edges Assumption* edges denote causal effects

## Important Terms
![[Pasted image 20211006001856.png]]

In a chain or a fork, x1 and x3 are associated until you condition on x2. It blocks the path. In an immorality, conditioning on x2 associates x1 and x2. (x2 is a *collider*)

A path between two nodes is *blocked* if there is a chain or a fork with a known x2, or an immorality with an unknown x2.

(Sets of) nodes X and Y are *d-separated* by (set of) nodes Z if nodes in Z block all paths between X and Y. If nodes are d-separated, then they are independent by the local Markov assumption.

*Causal association* flows through directed paths.