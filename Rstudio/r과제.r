install.packages("languageR")
library(languageR)

head(verbs)
summary(verbs)

v_give = subset(verbs, Verb == "give")
write.csv(v_give, file="/v_give.txt")

pp_v_give = subset(v_give,RealizationOfRec == "PP")
print(pp_v_give)

#NP도 구해주자(1-PP해도 되는데 다른게 혹시 있을 수 있으니)
np_v_give = subset(v_give,RealizationOfRec == "NP")
print(np_v_give)

percentage_of_pp = nrow(pp_v_give) / nrow(v_give) *100
percentage_of_np = nrow(np_v_give) / nrow(v_give) *100
print(percentage_of_pp)
print(percentage_of_np)

