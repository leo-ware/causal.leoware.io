---
tags: ['#identification', '#go-deeper']
---

import DocLink from '@site/src/components/DocLink'

 

A technique for estimating <DocLink to="heterogeneous treatment effects"/>, kind of like decision trees, but predict treatment effect rather than outcome

sample splitting (honest estimation): determine the splits using half the data, calculate parameters for each treatment group using the other half
- costs bias, variance, MSE
- gives you a valid confidence interval

https://www.youtube.com/watch?v=oZoizsX3bts