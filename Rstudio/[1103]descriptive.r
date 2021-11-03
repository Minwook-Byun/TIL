# 복붙 시 "" 주의하기! 코드 에디터는 잘못이 ~~ 없어요~~~ 
install.packages("C:/coding/TIL/Rstudio/Rling_1.0.tar.gz", repos=NULL, type="source") 
library(Rling)
a = data(ldt)
print(a)

md = ldt$Length

A = c(12,15,23,24,30,31,33,36,50,73)
B = c(6,22,26,33,35,47,54,55,62,63)
C = c(2,3,6,8,13,14,19,23,60,69)
D = c(1,22,36,37,45,46,48,51,52,69)

# boxplot 
rater =data.frame(A,B,C,D)
boxplot(rater, main="variability", xlab = "Rater", ylab="Scores")

# 나 이거 jpeg로 저장할거임~!!
jpeg("my_graphs.jpg")
boxplot(rater)
hist(A) 
hist(B)
hist(C)
hist(D)
dev.off()
# 여기까지만 저장할 거임~~ 

# 관측값에 outlier같앙!! 하면서 ㅇ 을 찍어준다. 

