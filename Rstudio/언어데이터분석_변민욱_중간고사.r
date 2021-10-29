#1
# (1) :character
# (2) : numeric, nominal
# (3) : numeric, ordinal
# (4) : character
# (5) : numeric, nomianl

#2
# data frame과 matrix는 둘 모두 데이터를 2차원 형태로 제공해준다는 면에서 비슷하다.
#그러나 matrix는 모든 칼럼의 요소가 같은 형태가 들어가야하고 dataframe은 다른 형태가 들어가도 된다.
# 이와 더불어, Matrix는 구조적으로 연속된 데이터의 형태이고 Data Frame은 열에 따라서 구조가 달라지며, $colum의 이름으로 접근이 가능하고 새로운 colum을 추가하는 것도 가능하다.


# 3번
changeIntoCm = function(num) {
    numCm = num * 2.54
    paste("변환한 값은:", numCm, "cm입니다")
}
changeIntoCm(30)

# 4번
# language R install & load
install.packages("languageR") 
library(languageR)

# dataframe과 관련 있는 함수들을 통해 verbs 데이터에 대한 대략의 내용 살피기
head(verbs)
summary(verbs)
# ‘send’ 동사의 행(row)을 추출하여 ‘send.csv’에 저장
vSend = subset(verbs, Verb == "send")
write.csv(vSend, file="./send.csv")

#5-1
words = c("mild", "soccer", "philosophy", "element", "tragedy", "elf", "empowerment", "octopus","alternative", "burden")
wordsNchar = nchar(words)
wordsNcharMean = sum(wordsNchar) / length(words)
# 데이터를 살폈을 때 length가 7인 단어들이 있기 때문에, 
# 데이터를 기준으로 7개를 평균하기 위해서 내림을 사용하겠습니다
wordsNcharMeanFloor = print(floor(sum(wordsNchar) / length(words)))
paste("advanced:", words[which(nchar(words)>7)])
paste("intermediate: ", words[which(nchar(words)==7)])
paste("beginner: ", words[which(nchar(words)<7)])

#5-2
# vocaLevle = function(nchar(words)) {
# i = 0
# while(i <= length(words)){
#     if(nchar(words[i])>7){
#         paste("advanced:", words[i])
#     } elsif{
#         paste("intermediate:", words[i])
#     } else{
#     paste("beginner: ", words[i])
#     }
#     i = i +1
# }
# }



#6
NAME = c("Kim","Park","Choi","Yoon")
WEIGHT =c(56, 45, 67, 84)
HEIGHT = c(160, 165, 171, 180)
BLOOD TYPE = c("A","B","O","AB")
person_info = data.frame(NAME, WEIGHT, HEIGHT, BLOOD TYPE)
person_info

#7
#각 단어의 길이를 구해서 단어와 단어의 길이의 정보가 들어 있는 dataframe을 만들고, wordlength.csv에 저장
paragraph = c("A Fox one day spied a beautiful bunch of ripe grapes hanging from a vine trained along the branches of a tree. The grapes seemed ready to burst with juice, and the Fox's mouth watered as he gazed longingly at them.
The bunch hung from a high branch, and the Fox had to jump for it. The first time he jumped he missed it by a long way. So he walked off a short distance and took a running leap at it, only to fall short once more. Again and again he tried, but in vain. Now he sat down and looked at the grapes in disgust.")
paragraphWords = unlist(strsplit(paragraph, split=" "))
deletMarkWords = gsub("[[:punct:]]", "", paragraphWords) #특수문자 지우기
df_paragraph = data.frame(deletMarkWords,nchar(deletMarkWords))
write.csv(df_paragraph, file="./wordlength.csv") #root 폴더에 생성
deletMarkWords
   
# 모음 ‘a’가 들어 있는 단어만 찾아서 출력   
aWords = grep('a',deletMarkWords,value=TRUE)
print(aWordsResult)

#중복 제외한 전체 단어 알파벳 순과 역순으로 정렬하여 출력
uniqueWords = unique(deletMarkWords)
uniqueWordsSort = sort(uniqueWords)
uniqueWordsDecrease = sort(uniqueWords, decreasing=TRUE)
print(uniqueWordsSort)
print(uniqueWordsDecrease)

#전체 단어 개수와 중복을 제외한 단어의 개수 출력
countParagraphWords = length(deletMarkWords)
countUniqueParagraphWords = length(uniqueWords)
paste("전체 단어 개수: ",countParagraphWords, "개 입니다.")
paste("중복을 제거한 단어의 개수: ",countUniqueParagraphWords, "개 입니다.")

#8
# 파일 읽기
wf = read.csv(file="./w_frequency.csv", header = T, sep=",")

#Class가 ‘plant’인 단어와 ‘animal’인 단어의 행을 추출하고, 각각 plant와 animal 변수에 저장
plant = subset(wf, Class == "plant")
animal = subset(wf, Class == "animal")

# Frequency 열(column)의 정보를 활용하여 ‘plant’인 단어와 ‘animal’인 단어들의 출현 빈도의 합을 각각 구하기
plantFreSum = sum(plant['Frequency'])
animalFreSum = sum(animal['Frequency'])

#데이터에 plant 단어와 animal 단어의 출현 빈도 비율이 어떠한지를 분석(계산)할 수 있는 코드를 작성하고, 주석으로 간략하게 결과에 대한 설명도 덧붙이기
plantFreRatio = sum(plant['Frequency'])/nrow(plant)
print(plantFreRatio)
animalFreRatio = sum(animal['Frequency']) / nrow(animal)
print(animalFreRatio)
paste("plant 단어의 빈도수는: ",plantFreRatio, "입니다.")
paste("animal 단어의 출현 빈도는: ",animalFreRatio, "입니다.")
#plant 단어의 빈도수는 4.27265771428571이고 plant 단어의 빈도수는 4.27265771428571이기 때문에 
#이 데이터 속에서는 animal의 빈도가 높으며, 더 자주(빈도가 높게)출현한다고 결론을 내릴 수 있다. 

