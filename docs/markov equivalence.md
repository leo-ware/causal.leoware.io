#discovery #assumptions 

Two graphs are Markov equivalent if they imply the same set of dependencies and independencies. Chains and forks are Markov equivalent (says Neal... Is this true?). Immoralities are special.

You get the skeleton of a graph by turning directed edges into undirected edges. (Does this assume that there are no immoralities?) You can use this to refer to a class of graphs.

Two graphs are Markov equivalent iff they have the same skeleton and the same immoralities. The *essential graph* is the immoralities and the skeleton, which specifies an equivalence class.

Math: For any distribution on two random variables, there an exists a [[structural model]] that is consistent with the data for each possible direction of causation.