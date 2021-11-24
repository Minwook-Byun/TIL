library(languageR); data(ratings)

# print(ratings)
library(lattice)
bwplot(Frequency ~ Complex, data=ratings)
# “Does the complex word appear less frequently than simplex word?”
simplex = ratings[ratings$Complex== 'simplex', ]
complex = ratings[ratings$Complex == 'complex',]

freq_simplex = simplex$Frequency
print(freq_simplex)

freq_complex = complex$Frequency
print(freq_complex)

t.test(freq_simplex, freq_complex)
#95 percent confidence interval:
#0.3681708 1.9667788