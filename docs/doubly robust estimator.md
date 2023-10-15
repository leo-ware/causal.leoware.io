combination of [[g-computation]] and [[propensity score]] methods

Called doubly robust because it relies on both
- a model of the outcome (like in [[g-computation]])
- a model of the treatment allocation (like in [[propensity score]])

These methods are consistent if *either* of these is consistent. Consistent here means they converge to the correct answer with infinite data. Also, they theoretically converge faster than [[g-computation]] and [[propensity score]] methods.