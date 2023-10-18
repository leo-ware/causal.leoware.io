---
sidebar_position: "1"
---

Confounding is the idea that sometimes the data we collect from the world can be misleading because the things we see can be shaped by things we do not see. Oftentimes a correlation between two variables will be generated not by a direct causal relationship but by a third variables which influences both. This is an issue because it can cause us to make misguided decisions about how to best influence the system.
## The Perfect Doctor

Consider the example of the perfect doctor. The perfect doctor has an incredible intuitive understanding of his patients' conditions. He can determine immediately whether their symptoms represent a mild condition which will they will recover from shortly or a more severe condition that requires treatment. 

Suppose an administrator is trying to replicate the doctor's success in another hospital. She receives the following dataset.

| # Patients | Received Treatment | Rapid Recovery |
| --- | --- | --- |
| 9 | Yes | Yes |
| 15 | Yes | No |
| 48 | No | Yes |
| 0| No | No |

Among patients that received treatment, less than half experienced a rapid recovery. However, all patients that did not receive treatment made a rapid recovery. We know that there is a confounder here: the severity of the underlying condition. But, without this knowledge, the administrator might draw the wrong conclusion with disastrous results.

Confounding makes it difficult to measure causal effects. Incorrect measurements of causal effects lead to misguided action.