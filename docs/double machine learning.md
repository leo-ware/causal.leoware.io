#identification 

You get a models to predict $\hat{Y}$ and $\hat{T}$ given $\hat{W}$. Then, you "partial out" $W$ by training a model to predict $Y - \hat{Y}$ from $T - \hat{T}$.