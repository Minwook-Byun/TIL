paragraph = c("When the sunlight strikes raindrops in the air, they act as a prism and form a rainbow. The rainbow is a division of white light into many beautiful colors. These take the shape of a long round arch, with its path high above, and its two ends apparently beyond the horizon. There is, according to legend, a boiling pot of gold at one end. People look, but no one ever finds it. When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow. Throughout the centuries people have explained the rainbow in various ways. Some have accepted it as a miracle without physical explanation. To the Hebrews it was a token that there would be no more universal floods. The Greeks used to imagine that it was a sign from the gods to foretell war or heavy rain. The Norsemen considered the rainbow as a bridge over which the gods passed from earth to their home in the sky. Others have tried to explain the phenomenon physically. Aristotle thought that the rainbow was caused by reflection of the sun's rays by the rain. Since then physicists have found that it is not reflection, but refraction by the raindrops which causes the rainbows. Many complicated ideas about the rainbow have been formed. The difference in the rainbow depends considerably upon the size of the drops, and the width of the colored band increases as the size of the drops increases. The actual primary rainbow observed is said to be the effect of super-imposition of a number of bows. If the red of the second bow falls upon the green of the first, the result is to give a bow with an abnormally wide yellow band, since red and green light when mixed form yellow. This is a very common type of bow, one showing mainly red and yellow, with little or no green or blue.")

#데이터를 가지고 분석을 해서 숫자를 뽑아내고 
# 워드 파일로 하나 & 보고서 파일 하나
paragraphWords = unlist(strsplit(paragraph, split=" "))
deletMarkWords = gsub("[[:punct:]]", "", paragraphWords)
updated_words = tolower(deletMarkWords) #소문자로 통일시키기
# print(updated_words) #추출한 데이터

#List up all the unique words
uniqueWords = unique(updated_words)

#Count each word frequency
freq = table(updated_words)
print(freq)
#Count number of letters/syllables for each word
df_paragraph_length = data.frame(updated_words,nchar(updated_words))
colnames(df_paragraph_length) = c("words","length")
print(df_paragraph_length)

#히스토그램 그리기 - 길이
myhist_length=hist(df_paragraph_length$length,xlab = "단어의 길이", ylab= "단어의 수",col ="yellow" ,xlim=c(0, 20), ylim=c(0, 100), main="단어길이 분석")

#계급값 분석
myhist_length$breaks[1:15]
myhist_length$counts[1:15]

#히스토그램 그리기 - 빈도
myhist_freq = hist(freq,xlab = "빈도", ylab= "빈도별 단어의 수",col ="green", breaks = seq(0,40,by=1))
#계급값 분석
myhist_freq$breaks[1:40]
myhist_freq$counts[1:40]
