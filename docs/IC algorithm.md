We have a probability distribution $P$ over some set of observed variables $x_i$, and we want to recover the [[causal structure | latent structure]]. I.e., we want to recover as much as we can of the [[causal structure]] without the assumption of unobserved confounders.

Make a graph with all the nodes. We have three kinds of relationships between nodes.
- A *marked* directed edge means a direct causal relationship
- An unmarked directed edge means either a direct causal relationship or an unobserved common cause
- An undirected edge means either a directed edge going one way or directed edges going both ways

We can recover the graph using this algorithms
1. For each pair $(A, B)$, search for a set $S_{AB}$ such that $A$ and $B$ are independent conditional on $S_{AB}$. If there is no such set, draw an undirected edge from $A$ to $B$.
2. For each nonadjacent pair $(A, B)$ with a common neighbor $C$, mark directed edges from $A$ and $B$ to $C$ if $C$ is not in $S_{AB}$.
3. Recursively apply the following two rules as many times as possible:
	1. For each nonadjacent pair $(A, B)$ with a common neighbor $C$, if $A$ has a directed edge to $C$, and $C$ has an undirected edge with $B$, add a marked directed edge from $C$ to $B$.
	2. 