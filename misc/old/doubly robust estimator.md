---
tags: []
---

import DocLink from '@site/src/components/DocLink'

combination of <DocLink to="g-computation"/> and <DocLink to="propensity score"/> methods

Called doubly robust because it relies on both
- a model of the outcome (like in <DocLink to="g-computation"/>)
- a model of the treatment allocation (like in <DocLink to="propensity score"/>)

These methods are consistent if *either* of these is consistent. Consistent here means they converge to the correct answer with infinite data. Also, they theoretically converge faster than <DocLink to="g-computation"/> and <DocLink to="propensity score"/> methods.