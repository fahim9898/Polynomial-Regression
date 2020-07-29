# Demo
![best](https://i.imgur.com/8192SIo.gif)
- [Live link](https://fahim9898.github.io/Polynomial-Regression/)
# Why Polynomial Regression?
- To understand the concept of polynomial regression, let’s try experimenting it on some random dataset first.
The random data looks like
![best](https://miro.medium.com/max/800/1*dJhMB97nyUB6_OgSECKxEQ.png)
- Let’s apply linear regression to this dataset. After fitting the model, the plot of the best fit line is :
![best2](https://miro.medium.com/max/800/1*yim5OMiku3dNMXEv3GiItg.png)
- We can see that a straight line is unable to capture all the points in the dataset. This is called as over-fitting/over-capacity.
That means, we cannot fit this data properly with a linear approach.
To overcome under-fitting, we need to increase the features(complexity) of the model.
Therefore we increase the complexity of model my adding more parameters to our equation
![best3](https://miro.medium.com/max/231/1*rL76rQ1hhrvPjAQFwvpN4w.png)

Fitting the model on these transformed features gives the below plot.
![best4](https://miro.medium.com/max/800/1*uJtlIlaT-o3DDh5VaGsy4A.png)

# Dependency
- p5.js
- tensorflow.js

# Credit
- [Tensorflow.js](https://www.tensorflow.org/js) 
- [Polynomial Regression](https://medium.com/data-science-group-iitr/linear-regression-back-to-basics-e4819829d78b)
