# 점수 데이터 넣어주기 
score = c(13.1, 15, 14, 14.4, 14, 11.6, 16.3, 15.7, 17.2, 14.9, 14.4, 17.2, 13.7, 13.9, 12.4, 13.8, 14.9, 13.3)

#그룹을 짓는 방법 => rep == repeat(반복된다)
group = c(rep("ke", 6), rep("kn",6), rep("en",6))
md = data.frame(score,group)
boxplot(score ~ group, data =  md)

md.aov = aov(score ~ group, data = md)
summary(md.aov)
#summary를 써줘야 p-value가 나온다. Pr(>F)의 부분이 p-value이다.
# F value는 8.98이고 p-value는 0.0027이결과로 나온다. 
#(F(2,15) = 8.98, p = 0.0027) 이렇게 결과를 적어주면 되고
# 어떤 그룹이 차이를 만들어내는지는 그렇지만 아직 모른다 -> tukey's HSD를 사용한다 

# pairwise t-test 
# – R syntax: pairwise.t.test(response(y의 값), factor(x의 값), p.adjust = method))
# pairwise.t.test(score, group, p.adjust=“bonferroni“) 본페로니 방식!
# 적어도 한 개는 잘못되었겠다 생각하고 조정을 해주는 것 !!
# p adj의 값을 집중해서 보자. 
md.aov = aov(score ~ group, data = md)
TukeyHSD(md.aov, conf.level = 0.95)

# 괒 

# t-test를 하고 ANOVA test를 실시, 이후에 Compare the p-value

# 샤피로 테스트 => normality test 
score = c(13.1, 15, 14, 14.4, 14, 11.6, 16.3, 15.7, 17.2, 14.9, 14.4, 17.2, 13.7, 13.9, 12.4, 13.8, 14.9, 13.3, 15.7, 13.7, 14.4, 16, 13.9, 14.7, 13.5, 13.4, 13.2, 12.7, 13.4, 12.3)
group = factor(c(rep("ke", 6), rep("kn",6), rep("en",6), rep("ee",6), rep("ks",6)))
md = data.frame(score, group)

shapiro.test(subset(md$score, md$group == "ee"))

# Variance homogeneity test -- Use Fligner-Killeen test
fligner.test(score ~ group, data = md)

# 요렇게 그려야 원하는 boxplot이 나온다 , names는 x축의 인덱스에 이름을 붙여준다 
kruskal.test(score ~ group, data = md)
pairwise.t.test(score, group, p.adjust = "bonferroni")
boxplot((subset(md$score, md$group == "ke"),(subset(md$score, md$group == "kn"), (subset(md$score, md$group == "en"), (subset(md$score, md$group == "ee"), (subset(md$score, md$group == "ks"))))

자료 = read.csv("speech_rate.csv")
# 자료 잘 들어왔음 
shapiro.test(subset(자료$rate, 자료$type == "comedian"))
shapiro.test(subset(자료$rate, 자료$type == "sports caster"))
shapiro.test(subset(자료$rate, 자료$type == "news anchor"))
shapiro.test(subset(자료$rate, 자료$type == "drama actor")) #normality 검증 

fligner.test(rate ~ type, data = 자료)
# 0.05보다 작기 때문에 homogeneity가 없다
# 그래서 oneway.test를 실행한다.
oneway.test(rate ~ type, data = 자료)

pairwise.t.test(자료$rate, 자료$type, p.adjust = "bonferroni")
# 드라마 actor와 comdian 의 차이가 있다.
boxplot(subset(자료$rate, 자료$type == "comedian"), subset(자료$rate, 자료$type == "sports caster"), subset(자료$rate, 자료$type == "news anchor"),subset(자료$rate, 자료$type == "drama actor"), names = c("c","s","n","d"))

# medium 값이 차이가 있고 0.05보다 작은 

install.packages("coin")
library(coin)

# distribution 그냥 쓰세요. ㅇㅋ? 
oneway_test(score ~ group, data = md, distribution = approximate(nresample = 9999))
# p-value가 낮게 나옴  

rw = read.csv("rating_writing.csv")

shapiro.test(rw$grammar)
shapiro.test(rw$contents)
shapiro.test(rw$fluency)

g = rw$grammar 
c = rw$contents
f = rw$fluency
score = c(g,c,f)

n = nrow(rw)
type = factor(c(rep("grammar",n),rep("contents",n),rep("fluency",n)))
rating_writing = data.frame(score, type)
head(rating_writing)

fligner.test(score ~ type, rating_writing) #homogeneity test 
oneway_test(score ~ type, data = rating_writing, distribution = approximate(nresample = 999999))
pairwise.t.test(rating_writing$score, data = rating_writing$type, p.adjust ="bonferroni")