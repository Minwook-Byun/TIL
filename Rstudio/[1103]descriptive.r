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

# 관측값에 outlier같앙!! 하면서 ㅇ 을 찍어준다

mydata = read.csv("w_frequency.csv")
mydata_length = mydata$Length
# print(mydata_length)
mydata_length_table = table(mydata_length)
print(mydata_length_table)
hist(mydata_length)
# plot(mydata_length_table, type='b', ylab='빈도', xlab='b로 그린 Length')
# plot(mydata_length_table, type='p', ylab='빈도', xlab='p로 그린 Length')
# plot(mydata_length_table, type='c', ylab='빈도', xlab='c로 그린 Length')
# plot(mydata_length_table, type='o', ylab='빈도', xlab='o로 그린 Length')

# break 는 막대의 개수, ylim은 y축 범위 
hist(mydata_length, breaks=seq(0, 12, by=1), ylim=c(0,20), ylab="빈도", xlab="길이")

Rel_table = prop.table((mydata_length_table)*100); #상대빈도를 구해주는 table
반올림한_rel_table = round(prop.table(mydata_length_table)*100, 2)

hist(mydata_length, prob =T, breaks = seq(0,12, by=1), ylim = c(0, 0.3), ylab="상대빈도", xlab="길이")
lines(density(mydata_length, bw = 2))

#누적 = cumsum
누적합 = c(0, cumsum(mydata_length_table))
print(누적합)

plot(누적합, type="l", ylab="누계빈도", xlab="누계길이")

# 정규 분포 
rnorm(100, mean = 175, sd = 5)
dnorm(1)
dnorm(177, mean=175, sd = 5) #0.07365403

a = seq(-20, 20, by=0.1)
a
b= dnorm(a)
plot(a,b, type='l')

c = dnorm(a, mean=2.5, sd = 3)
plot(a, c, type='l')

x = seq(-3, 3, 0.01)
y = dnorm(x, 0, 1)
plot(x, y, type='l')

# pnorm(p, mean=0, sd=1, lower.tail=TRUR) #p=vector of probabilites
pnorm(1)
pnorm(1, lower.tail = F) #1-pnrom 

#quantile function 
qnorm(q, mean = 0 , sd = 1, lower.tail = T)
qnorm(0.5, mean = 175 , sd = 5)
qnorm(180, mean = 175 , sd = 5, lower.tail = F)

# install.packages("tigerstats")

a = seq(0, 1, by=0.05)
b = qnorm(a)
plot(a, b, type='l')

md = rnorm(10000, 175, 5)
hist(md, breaks=20, prob = T)
lines(density(md))

# 0점에서 10점까지 정규분포로 sd가 1.4가 나왔다. 
a = (0,10)
# 7.0 맞은 사람은 퍼센트 
# 4와 5점 사이의 사람은 몇 명?

# 90퍼센트 이상일 때 스코어??! 
qnorm(0.9)
#학생 245의 gkrwja vudrbsdl 3.29 sd 는 0.73 4.5akswja
#만약 15%가 장학금 - gpa 컷
# 1.5-2.0 학사경고. 몇명이냐
# 1.5 보다 낮으면 정학, 몇명? 
# 한계'
# 워드 파일에 코드 복붙해서 제출! 


 over_seven = pnrom(7, lower.tail = FALSE)
 qnorm(0.9, mean = 4.5, sd =1.4)