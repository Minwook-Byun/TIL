library(languageR) ; data(ratings)
library(lattice)

sim = ratings[ratings$Complex == "simplex",]
# | 곱하기 interaction으로 사용된다 

freq_animal = sim[sim$Class == "animal",]$Frequency
freq_plant = sim[sim$Class == "plant",]$Frequency

t.test(freq_animal, freq_plant)

# 컴플렉스랑 심플렉스 단어만 비교
# 는 과제랑 연관이 있는거구 

Data = library(languageR); data(ratings)
md = ratings 
par(mfrow=c(1,2))
boxplot(md$meanWeightRating, md$meanSizeRating, names = c("weight", "size"), ylab = "mean rating")
boxplot(md$meanWeightRating - md$meanSizeRating, names = "difference", ylab="평균 레이팅 차이")

# Sometimes, the function skewness() can be used to check the
# normality, but not in this case due to the bi-modality of data.

library(monents);skewness(md$meanWeightRating)
hist(md$meanWeightRating)

shapiro.test(md$meanWeightRating - md$meanSizeRating)

# Example task 2
am = c(144, 147, 148, 172, 170, 133, 141, 144, 146, 148, 152, 149, 143, 138,165, 143, 142, 155, 135, 144) 
pm = c(133, 138, 139, 160, 165, 133, 140, 142, 144, 142, 139, 144, 139, 130,164, 140, 128, 129, 133, 144) 
shapiro.test(am-pm)
wilcox.test(am, pm, paired = T)


# ---------------------------------------------------------
# 선형회귀

Data = library(languageR); data(ratings)
md = ratings 
cor(md$meanWeightRating, md$meanSizeRating) #0.9993231
lm.ratings = lm(meanSizeRating ~ meanWeightRating, data = ratings)
# data = ratings 는 attach 해주는 효과 ratings$meanWeightRating 요런 느낌
# lm.ratings 으로 출력해주면 됨 지금은 변수에 담겨 있음
coef(lm.ratings)

# 표 그리기
plot(ratings$meanWeightRating, ratings$meanSizeRating, col="red")
#(Intercept) y 절편  meanWeightRating # 기울기
    #    0.5269981        0.9264743
# 근데 그냥 그 순서대로 넣어주면 ㅇㅋ
abline(0.527, 0.926) # or abline(lm.ratings)

new.weight = data.frame(meanWeightRating = 2.5)
new.size = predict(lm.ratings, new.weight)
new.size #2.843184 

# task
am = c(144, 147, 148, 172, 170, 133, 141, 144, 146, 148, 152, 149, 143, 138,165, 143, 142, 155, 135, 144) 
pm = c(133, 138, 139, 160, 165, 133, 140, 142, 144, 142, 139, 144, 139, 130,164, 140, 128, 129, 133, 144) 

#관계가 있음? 
cor(am,pm) #0.8178049
lm_pitch = lm(pm~am)
print(lm_pitch)
# Call:
# lm(formula = pm ~ am)

# Coefficients:
# (Intercept)           am
#     19.0073       0.8266

#그냥 넣어주면 그 그래프 나옴 
abline(lm_pitch)

# 예측도 해보셈 
# What will be the evening pitch of a person whose morning pitch is 128 Hz?
예측_am = data.frame(am = 128) #data.frame -> predict하려면 어쩔 수 없음 
새로운_pm = predict(lm_pitch,예측_am)
새로운_pm #124.8097


plot(ratings$FreqSingular, ratings$FreqPlural)
abline(lm(FreqPlural ~ FreqSingular, data = ratings), col = "red")
ratings.x = subset (ratings, ratings$FreqSingular < 500) # cut-off outliers
abline(lm(FreqPlural ~ FreqSingular, data=ratings.x), col="green")

library(MASS)
abline(lmsreg(FreqPlural ~ FreqSingular, data=ratings), col="blue")

