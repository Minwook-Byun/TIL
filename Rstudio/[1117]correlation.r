toeic = c(850, 460, 580,720, 900, 940, 630, 550, 500, 820)
prof = c(8.2, 3.9, 6.7, 7.3, 8.9, 8.8, 5.7, 5.5, 5.3, 8.1)
cor.test(toeic, prof)
# cor가 0.96으로 
# 고쳐뜨아~ 

n_ldt = subset(ldt, ldt$Mean_RT < 1200) #싹다지울거야, 그래서 ldt로 해줬음 1200미만만 남겨 
summary(n_ldt)
summary(ldt)
cor.test(n_ldt$length, n_ldt$Mean_RT)
cor.test(Length, Mean_RT)