#1번 
edit = c("California is approaching an energy crossroads In three years its last nuclear plant will begin to power down and the state will lose its largest single source of emissions-free electricity A 2018 law requires state regulators to avoid any increase in greenhouse gases as a result of closing the Diablo Canyon nuclear power plant on the Central Coast But if they don’t move more quickly to replace its electricity with renewable energy from wind solar and geothermal the void will almost certainly be filled by burning more natural gas which increased last year to account for nearly half of California’s in-state electricity generation California can’t allow the retirement of Diablo Canyon’s nuclear reactors to prolong its reliance on gas plants or increase planet-warming and health-damaging emissions But the state’s preparations for shutdown of an around-the-clock power source that supplies more than 8% of California’s in-state electricity generation have not inspired confidence there have been no assurances that an uptick in carbon emissions will be avoided")
fairy = c("A Fox one day spied a beautiful bunch of ripe grapes hanging from a vine trained along the branches of a tree The grapes seemed ready to burst with juice and the Fox's mouth watered as he gazed longingly at them The bunch hung from a high branch and the Fox had to jump for it The first time he jumped he missed it by a long way So he walked off a short distance and took a running leap at it only to fall short once more Again and again he tried but in vain Now he sat down and looked at the grapes in disgust What a fool I am he said Here I am wearing myself out to get a bunch of sour grapes that are not worth gaping for And off he walked very very scornfully")

# (1) 두 데이터 모두 소문자로 변환하기 
edit = tolower(edit)
fairy = tolower(fairy)

#(2) 각 단어의 길이 구하기 
edit_words = unlist(strsplit(edit, split=" "))
print(nchar(edit_words))
edit_words_uni = unique(edit_words)

fairy_words = unlist(strsplit(fairy, split=" "))
print(nchar(fairy_words))
fairy_words_uni = unique(fairy_words)

#=======================unique 사용 판단 근거=======================================
#각각의 데이터를 살펴보면, editorial 의 경우에는 탄소배출 및 원자력에 관련한 이야기이며 
#fairytale의 경우에는 신포도와 관련한 여우의 이야기이다. 
# 영어의 경우에는 be 동사와 같은 어쩔 수 없이 반복되는 단어가 존재할 수 밖에 없는데 이후의 분석에서 다룰 단어의 길이에서 
# 두 데이터의 차이를 극명하게 만들기 위해서 unique text 로 전처리를 한 데이터를 사용한다. 

# (3) 단어와 단어 길이로 된 데이터 프레임 만들기
df_edit = data.frame(edit_words_uni,nchar(edit_words_uni))
# print(df_edit)
df_fairy = data.frame(fairy_words_uni,nchar(fairy_words_uni))
#print(df_fairy)

# (4) 각각 csv 파일로 만들기 
write.csv(df_edit, file="./edit_words.csv") 
write.csv(df_fairy, file="./fairy_words.csv") 


# ========2번================================
EDITDATA = df_edit$nchar.edit_words_uni
FAIRYDATA = df_fairy$nchar.fairy_words_uni

#mean 
edit_avg = mean(EDITDATA) 
print(edit_avg)
fairy_avg = mean(FAIRYDATA) 
print(fairy_avg)

#MEDIAN
edit_med = median(EDITDATA) 
print(edit_med)
fairy_med = median(FAIRYDATA) 
print(fairy_med)

#MODE
edit_mod = names(table(EDITDATA))[which(table(EDITDATA)==max(table(EDITDATA)))] 
print(edit_mod) 
fairy_mod = names(table(FAIRYDATA))[which(table(FAIRYDATA)==max(table(FAIRYDATA)))] 
print(fairy_mod) 

#range(min,max)
edit_range = max(EDITDATA) - min(EDITDATA)
print(edit_range)
fairy_range = max(FAIRYDATA) - min(FAIRYDATA)
print(fairy_range)

#variance
edit_var = var(EDITDATA)
print(edit_var)
fairy_var = var(FAIRYDATA)
print(fairy_var)

#skewness
install.packages("moments")
library(moments);skewness(EDITDATA) 
library(moments);skewness(FAIRYDATA)

#kurtosis 
library(moments);kurtosis(EDITDATA) 
library(moments);kurtosis(FAIRYDATA)

#boxplot 그리기 
boxplot(EDITDATA,FAIRYDATA,ylim=c(0,20),names=c("editorial","fairytale"))
title(main="editorial과 fairytale 텍스트 비교",xlab="data",ylab="number")

#histogram 그리기
hist(EDITDATA)
hist(FAIRYDATA)

# 두 데이터 모두 가장 긴 단어의 길이가 몇이고, 해당하는 단어가 무엇인지 
install.packages("dplyr")
library(dplyr)
df_edit  %>%  filter(nchar.edit_words_uni.==max(EDITDATA))
#1 around-the-clock                    16
df_fairy  %>%  filter(nchar.fairy_words_uni.==max(FAIRYDATA))
#1      scornfully                     10

# 귀무가설은 두 데이터의 단어의 길이가 차이가 없다. # 대립가설은 두 데이터 간의 길이의 차이가 있다. 
# 우선 정규성 검사를 통해서 데이터가 정규 분포인지 알아보자. 
# 위의 히스토그램으로 우선 파악 평균구간에 데이터가 많이 몰려 있나?를 개략적으로 파악할 수 있다. 
# 하지만 이 그래프만으로 데이터 분포가 정규분포라고 확신할 수는 없다. 

#qqnorm을 통한 정규성 가정을 따르는지 검토 
qqnorm(EDITDATA)
qqline(EDITDATA)
qqnorm(FAIRYDATA)
qqline(FAIRYDATA)

shapiro.test(EDITDATA) #p-value = 2.662e-05
shapiro.test(FAIRYDATA) # p-value = 0.0003855

#유의수준을 5%로 잡았을 때 두 데이터의 P-value 모두 유의수준보다 훨씬 못 미치기 때문에 두 데이터의 정규성을 가정할 수 없다

#정규분포를 따르지 않기 때문에 비모수 검정인 wilcox test를 실시 
wilcox.test(EDITDATA,FAIRYDATA,alternative="greater") #p-value = 0.0001217

formal=c(4.51,3.61,4.11,4.18,3.80,4.04,4.69,3.71,2.73,3.90,3.79,2.77,3.57,4.36,4.26,4.12,4.33,3.95,4.01,4.18)
informal=c(4.78,5.36,5.51,4.45,5.43,4.51,5.32,5.59,5.06,5.82,5.99,4.73,5.45,5.32,4.99,5.20,5.32,3.88,5.18,4.33)

# descriptive statistics
summary(formal)
summary(informal)

hist(formal)
hist(informal)

boxplot(formal)
boxplot(informal)

#(2) 데이터에 맞는 hypothesis testing 하기
# length(formal),length(informal) 모두 20이다. 따라서 정규성 검증이 필요하다
qqnorm(formal)
qqline(formal)
qqnorm(informal)
qqline(informal)

shapiro.test(formal) #0.03143
shapiro.test(informal) #0.5124

# formal이 정규분포를 따르지 않는다. 따라서 비모수 검정인 wilcox test를 실시해야 한다 
# 귀무가설 : formal = informal
# 대립가설 : formal ≠ informal
wilcox.test(formal, informal)
# p-value가  p-value = 1.191e-06 로 나왔다. 이는 0.05보다 작으므로 
# 귀무가설이 기각되고 대립가설이 채택된다. 

#4번 
#데이터 합치기 
utter_speed = c(4.51,3.61,4.11,4.18,3.80,4.04,4.69,3.71,2.73,3.90,3.79,2.77,3.57,4.36,4.26,4.12,4.33,3.95,4.01,4.18,4.78,5.36,5.51,4.45,5.43,4.51,5.32,5.59,5.06,5.82,5.99,4.73,5.45,5.32,4.99,5.20,5.32,3.88,5.18,4.33)

#정규분포인지 아닌지 살피기 
#(i)qqnorm으로 살피기
qqnorm(utter_speed)
qqline(utter_speed)

#(ii) shapiro test
shapiro.test(utter_speed) # 0.3112
#0.3112로 정규분포를 따른다.

#(2) 정규분포라면, 발화속도가 5이상인 사람은 몇 퍼센트인지
df_utterance = data.frame(speed=utter_speed)
more_than_5 = subset(df_utterance, speed>=5)
more_than_5_ratio = length(more_than_5) / length(utter_speed)*100 #2.5

#(3) 하위 10%의 발화속도, 이 구간에 해당하는 사람 
quantile(utter_speed, probs=c(0.1)) #하위 10% 3.7
nrow(subset(df_utterance, speed <= 3.7)) #4명

#5번
writing_data = read.csv(file = "rating_writing.csv", header = T, sep=",")
#(1) descriptive statistics
summary(writing_data)
# sentence는 boxplot이 데이터를 보여주기 적합하며,
boxplot(writing_data$sentence)
# 그외의 데이터는 histogram이 더 적합하다 
hist(writing_data$grammar)
hist(writing_data$contents)
hist(writing_data$fluency)

#(2) correlation test
# 우선 결측치는 없음 
x = writing_data$grammar
y = writing_data$fluency

cor.test(x,y)
# 상관계수의 값은 0.6465452
# 다소 높은 상관관계가 있음을 알 수 있다. 
#(3) 상관관계 plot그리기
result_lm = lm(y ~ x, data=writing_data)
print(result_lm)
plot(x ~ y, data=writing_data, xlim=c(0,5), ylim=c(0,5))
abline(result_lm, col='red') # 회귀선 추가
 
summary(result_lm)
#(4) grammar 점수가 3인 경우 fluecny 점수 예측하기 
predict(result_lm, newdata = data.frame(x = 3)) 

#6번
formality = read.csv(file = "formality.csv", header = T, sep=",")
summary(formality)

male = subset(formality, gender == "M")
female = subset(formality, gender == "F")

#성별은 영향을 줄까? 
hist(female$pitch)
hist(male$pitch)


#정규성 테스트 
qqnorm(female$pitch)
qqline(female$pitch)
qqnorm(male$pitch)
qqline(male$pitch)

shapiro.test(female$pitch) #p-value의 값이 0.5246로 0.05가 넘기 때문에 귀무가설을 채택. 즉, 정규성은 지닌다. 
shapiro.test(male$pitch) #p-value의 값이  0.02384로 0.05가 넘지 못하기 때문에 대립가설을 채택, 즉 정규성을 지니지 않는다. 

wilcox.test(female$pitch, male$pitch, alternative = "greater")
#귀무가설: female의 pitch = male의 pitch
#대립가설: female > male 
#이에 대한 결과로 p-value의 값이 3.382e-14로 0.05보다 작기 때문에 귀무가설이 기각되고
#대립가설인 female > male이 채택된다. 이를 통해서, gender 간의 pitch 차이는 유의미하며, 여성의 pitch가 남성의 pitch보다 높음을 알 수 있다

#그렇다면 다른 요소들은 어떠할까? 우선 시나리오 
cor(male$scenario, male$pitch) #-0.05156515로 시나리오는 영향을 주지 않는다. 
cor(female$scenario, female$pitch) #-0.1764301로 상관관계가 없다 

# attitude는 영향을 줄까? 
male_pol = subset(male, attitude == "pol")
male_inf = subset(male, attitude == "inf")

hist(male_pol$pitch)
hist(male_inf$pitch)

#단순 hist로만은 분석하기 힘드니 정규성을 확인한 후에 test를 진행
qqnorm(male_pol$pitch)
qqline(male_pol$pitch)
qqnorm(male_inf$pitch)
qqline(male_inf$pitch)

shapiro.test(male_pol$pitch) #p-value의 값이 0.05보다 작기 때문에 귀무가설을 기각하고 대립가설(정규분포를 따르지 않는다) 채택
shapiro.test(male_inf$pitch) #p-value의 값이 0.05보다 크기 때문에 정규성을 지닌다. 

#정규분포를 따르지 않기 때문에 비모수 검정인 wilcox test를 실시 
wilcox.test(male_pol$pitch,male_inf$pitch,alternative="greater") #0.9159
#0.05를 훨씬 상회하는 p-value가 나왔기 때문에 유의미한 차이가 없다. 


female_pol = subset(female, attitude == "pol")
female_inf = subset(female, attitude == "inf")

hist(female_pol$pitch)
hist(female_inf$pitch)

# 정규성 검정 
qqnorm(female_pol$pitch)
qqline(female_pol$pitch)
qqnorm(female_inf$pitch)
qqline(female_inf$pitch)

shapiro.test(female_pol$pitch) # p-value가 0.6709로 0.05보다 높으므로 정규성을 지닌다 
shapiro.test(female_inf$pitch) # p-value가 0.7829로 0.05보다 높으므로 정규성을 지닌다

# 등분산성 검정 
fligner.test(female_pol$pitch ~ female_inf$pitch) # p-value = 0.4152 이므로 귀무가설을 채택하며, 등분산성을 지닌다 

#t-test
t.test(female_pol$pitch, female_inf$pitch) # p-value = 0.008684
#등분산 T-test의 결과 p-value가 0.008684로 0.05보다 작으므로 두 집단의 평균의 차가 있다고 결론 낼 수 있다. 
#즉, 여성의 경우 pol과 inf가 fitch에 영향을 끼친다. 