#robustness

Question is how big would the unobserved confounders need to be to significantly alter our results. Typical result it to make some assumptions about how T, Y, observed covariates, unobserved covariates are related. Then, draw contour plots for what ATE/bias would look like under different levels of confounding (different levels of correlation between treatment/outcome with unobserved confounder).

We contextualize these results in a couple ways:
- formal benchmark: how much confounding before our ATE switches sign
- informal benchmark: how well correlated are our observed covariates with outcome/treatment?

Everything is very blue sky

Neal recommends
- (Cinelli & Hazlett, 2020) for better stuff about contextualization
- (Veitch & Zaveri, 2020) for arbitrary functional forms
- (Liu, Kuramoto & Stuart, 2013) for a literature review
- Rosenbaum is a big player here