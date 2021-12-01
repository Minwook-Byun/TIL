library(languageR); data(ratings)

# print(ratings)
library(lattice)
bwplot(Frequency ~ Complex, data=ratings)
# “Does the complex word appear less frequently than simplex word?”
simplex = ratings[ratings$Complex== 'simplex', ]
complex = ratings[ratings$Complex == 'complex',]

freq_simplex = simplex$Frequency
# print(freq_simplex)

freq_complex = complex$Frequency
# print(freq_complex)

t.test(freq_simplex, freq_complex)
# t = 3.1652, df = 12.62, p-value = 0.007698



