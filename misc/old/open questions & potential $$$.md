---
tags: []
---

import DocLink from '@site/src/components/DocLink'


- why the "middle man" of specifying distance metrics in genetic <DocLink to="matching"/>? why don't we just find a set of weights on the control group which minimizes some balance criterion (easy, continuous optimization problem) and then use the resulting <DocLink to="pseudodataset"/>?
- generalized random forest package in python/wrapper around athey's stuff <DocLink to="causal trees & forests"/> https://github.com/grf-labs/grf
- programmatic aggregation of assumptions, esp in id---there will be several statistical estimands corresponding to a given causal one, can we compare the assumptions required for each? suggest tests? use them to check each other?
- applications in bioinfomatics --- esp gains from *much* faster algorithms
- experiment design tools: what kind of information would you need to make this graph identifiable
- shinystan but for python