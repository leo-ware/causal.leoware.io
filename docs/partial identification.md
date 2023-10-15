#identification #bounds

Make weaker assumptions, get stronger results. Partial identification is about bounding the ATE using extremely weak assumptions.

The **no assumptions bound** says that If $a < Y < b$, e.g. is the outcome is lower and upper bounded by a and b, then:
![[Pasted image 20211016234133.png]]

The length of this interval is $b - a$. Unfortunately, this interval will always contain 0. It will not tell you whether the effect is positive or negative.

General bounding technique here is to break up the causal estimand into the observational-counterfactual decomposition. Then, you do bounds on different terms.

![[Pasted image 20211016234504.png]]

You can do this for different sets of assumptions. You can assume that the effect of treatment is always positive or always negative.

Neal mentions bounding on the assumption that expected outcomes under both treatment and control conditions are better for the treatment group than the control group. This is called **monotone treatment selection**. E.g., positive self-selection. I can't think of circumstances under which this would make sense, but if you do assume that, then you can upper bound the causal effect by the associational effect.

Finally, there is the **optimal treatment selection** bound. If we assume that everyone in control would be better off in control, and everyone in treatment would be better off in treatment, then we can bound the ATE as follows:

![[Pasted image 20211016235632.png]]