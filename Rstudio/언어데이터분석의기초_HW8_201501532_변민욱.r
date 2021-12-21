score = c(13.1, 15, 14, 14.4, 14, 11.6, 16.3, 15.7, 17.2, 14.9, 14.4, 17.2, 13.7, 13.9, 12.4, 13.8, 14.9, 13.3, 15.7, 13.7, 14.4, 16, 13.9, 14.7, 13.5, 13.4, 13.2, 12.7, 13.4, 12.3)
group = factor(c(rep("ke",6), rep("kn",6), rep("en",6), rep("ee",6), rep("ks",6)))
md = data.frame(score, group)


#1. check stats
summary(md)
#     score          group
#  Min.   :11.60   Length:30
#  1st Qu.:13.40   Class :character
#  Median :13.95   Mode  :character
#  Mean   :14.22
#  3rd Qu.:14.90
#  Max.   :17.20

# 2. draw a boxplot graph 
boxplot(subset(md$score, md$group == "ke"), 
subset(md$score, md$group == "kn"), 
subset(md$score, md$group == "en"), 
subset(md$score, md$group == "ee"), 
subset(md$score, md$group == "ks"), 
names = c('ke','kn','en','ee','ks'))

# 3. Do ANOVA tests 
md.aov = aov(score ~ group, data = md)

# 4. Do post-hoc test 
TukeyHSD(md.aov, conf.level = 0.95)