#sampling 

A way to sample from a cdf

![[Pasted image 20211017160736.png]]

```python
cdf = np.array([1, 2, 3, 4, 5])
cdf /= np.sum(cdf)
sample = cdf.searchsorted(np.random.uniform())
```