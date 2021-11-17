toeic = c(850, 460, 580,720, 900, 940, 630, 550, 500, 820)
prof = c(8.2, 3.9, 6.7, 7.3, 8.9, 8.8, 5.7, 5.5, 5.3, 8.1)
cor.test(toeic, prof)
# cor가 0.96으로 
# 고쳐뜨아~ 

n_ldt = subset(ldt, ldt$Mean_RT < 1200) #싹다지울거야, 그래서 ldt로 해줬음 1200미만만 남겨 
summary(n_ldt)
summary(ldt)
cor.test(n_ldt$length, n_ldt$Mean_RT) #오른쪽 아웃라이어가 삭제 되면서 상관계수가 0.588로 감소. 
cor.test(Length, Mean_RT)

x = seq(-4, 4, 0.1)
plot(x, dt(x, 20), type="l", lwd=2, col="blue",xlab="t-value", ylab="density", main="t-curve,df=20")
abline(v=c(-2,2), col="red")
pt(-2, df = 20) * 2 #한쪽만 구한 다음 *2를 해도 된다. 

CA = c(1773, 1765, 1771, 1758, 1729, 1740, 1772)
t.test(CA, mu = 1775)

#one Sample t-test(4)
group = rnorm(120, 173.5, 6)
t.test(group, mu = 175)
2 * (1-pt(abs(-34586),119)) #t vlaue를 계산할 때 pvalue를 사용한다 


CA = c(1773, 1765, 1771, 1758, 1729, 1740, 1772)
t.test(CA, 1775)

am = c(144, 147, 148, 172, 170, 133, 141, 144, 146, 148, 152, 149, 143, 138, 165, 143, 142, 155, 135, 144)
pm = c(133, 138, 139, 160, 165, 133, 140, 142, 144, 142, 139, 144, 139, 130, 164, 140, 128, 129, 133, 144) 

boxplot(am, pm) #pm이 peach가 낮은 듯 
plot(density(am), col = "red")
lines(density(pm), col="blue") #얘는 라인을 추가할 때만 앞에 plot이 있을 때 

t.test(am,pm, paired = T)
#data:  am and pm
#t = 4.6639, df = 19, p-value = 0.0001692(p값은 0.0001엄청 낮아서 차이가 유의하다)
#alternative hypothesis: true difference in means is not equal to 0
#95 percent confidence interval:
  #3.665678 9.634322
#sample estimates:
  #mean of the differences 
#6.65 

delta = c(011,9,9,12,5,0,1,2,2,6,13,5,4,8,1,3,14,26,2,0)
t.test(delta, mu = 0)