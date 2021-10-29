# 얼마나 text안에 단어가 몇 개 있는지
# i라는 모음이 들어간 단어가 몇 개인지 
# strsplit() : 단어를 쪼갤 때 쓴다. 
# grepl()을 사용해서 i가 들어갔는지 check할 수 있다
# 모든 워드를 toupper()을 통해서 대문자로 바꾸기


text= c("Deep in the hundred acre wood where Christopher Robin plays, you will find the enchanted neighborhood of Christopher’s childhood days")
text_words= unlist(strsplit(text, split=" "))

#shows how many words the ‘text’ has
count_words = length(text_words) #20개가 있다
paste(count_words, "개의 단어가 존재합니다!")

#counts words with an ‘i’ vowel 
i_words = sum(grepl('i',text_words))
paste("i를 포함한 단어는",i_words, "개!")
#true는 1이기 때문에 합을 하면 수를 counting해준 것과 동일하다

#prints out each word in upper case letters and its number of characters

i = 0
while(i <= length(text_words)){
    num_char = nchar(text_words[i])
    upper_words = toupper(text_words[i])
    result = paste(upper_words, "의 글자수는" , num_char, "개 입니다")
    print(result)
    i = i +1
}









