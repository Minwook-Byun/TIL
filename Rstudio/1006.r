wf <- read.csv(file="C:/coding/TIL/Rstudio/w_frequency.csv", header = T, sep=",")
head(wf)
str(wf)

# wf = read.csv(file.choose(), header=T, sep=",")
# 파일을 선택하는 창이 하나 떠서 읽어올 수 있게됨.
View(wf)
# 데이터 프레임을 포여준다
dim(wf)
length(wf)

write.csv(wf,file="C:/coding/TIL/Rstudio/filename.csv")

# 특정 column를 추출하는 방법 
wf$Class #전체 데이터가 나온다 
wf_class = wf$Class # 달러로 => 벡터 형식으로 추출
head(wf_class)
wf_class1= wf["Class"] #대괄호 => 표 형식으로 

wf_cols = wf[, c("Length", "Class")] #여러가지 선택하는 방법 ,는 모든 데이터를 뽑겠다는 의미 
head(wf_cols)

wf_Cols_index = wf[4:5]
head(wf_Cols_index)

wf_Cols_index = wf[1:5]
head(wf_Cols_index)

wf_Cols_index = wf[c("Length", "Class")]
head(wf_Cols_index)

wf_rows = wf[2,]
wf_rows

wf_rows = wf[2:4, ]
wf_rows

wf_rows = wf[2,2]
wf_rows

wf_rows = wf[2:3, 2:3]
wf_rows

wf_rows = wf[c(2,5), c(2,5)]

wf_sub = subset(wf, Class == "plant")
head(wf_sub)

wf_sub = subset(wf, Length >= 5)
head(wf_sub)


wf_sub = wf[wf$Length > 8,]  #뒤에 , 까먹지 마세요

wf_sub = wf[wf$Frequency >= 5,] #5이상인 것들만 뽑혀서 
wf_subset = subset(wf, Length > 8 & Class == "animal")
head(wf_subset)

word = wf$word #word 정보만 추출

# languageR에서 동사만 추출해서 알파벳 순서로 저장해보자

#sort 
a = c(4,1,8,3) 
sort(a) #1 3 4 8
sort(a, decreasing = T) #8, 4, 3, 1


b= c(1,1,1,1,3,7)
unique(b) #1 3 7



install.packages("languageR")
library(languageR)
# head(verbs)

verbList = verbs$Verb
head(verbList)

uni_v_list = unique(verbList)
s_uni_v_list = sort(uni_v_list)
write.csv(s_uni_v_list, file="/v_list.csv")

'''
#doble object가 가능한 npnp로 되어 있냐, np pp로 되어있냐 둘 중에 뭐로 되어 있고 많은지 과제 
give라는 동사가 double으로? or sigle로 많이 사용되었나? 
1. 설치하고
2. 뒤에 딸려온 함수 실행해보고 
5번까지 코드 안에 작성이 되어 있어야 하구
txt가 아니라 csv이다!
