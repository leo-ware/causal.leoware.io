#discovery 

polynomial time!

- identify the skeleton
	- condition on sets of size 0, 1...n
	- see what independencies arise
- identify the colliders
	- for every A - B - C path, if conditioning on B makes A and C dependent, then its a collider
- align edges based on the fact that there are no more colliders
	- if you have a path A -> B - C, then you can turn it into A -> B -> C
	- propagate these