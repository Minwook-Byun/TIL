Class_A = c(0, 21, 22, 40, 42, 47, 48, 48, 59, 61, 67, 68, 72, 80, 80, 83, 87, 88, 89, 93, 97, 98, 100, 100, 100)
Class_B = c(0, 0, 0, 0, 0, 0, 4, 8, 17, 22, 28, 38, 42, 44, 46, 58, 62, 62, 66, 67, 67, 72, 73, 73, 88, 88, 89, 100)
Class_C = c(10, 12, 18, 25, 33, 33, 34, 58, 62, 64, 66, 67, 67, 75, 78, 78, 79, 83, 86, 88, 89, 91, 91, 94)

john= 87
Lisa = 67
Kevin =75

#z 점수 구하는 함수
get_z = function(x,m,sd) {
    z_score = (x-m)/sd 
    print(z_score)
}

#각각의 z점수 구하기
john_z = get_z(john,mean(Class_A),sd(Class_A))
paste('존의 z점수:', john_z)

Lisa_z = get_z(Lisa,mean(Class_B),sd(Class_B))
paste('리사의 z점수:', Lisa_z)

Kevin_z = get_z(Kevin,mean(Class_C),sd(Class_C))
paste('케빈의 z점수:', Kevin_z)
#존의 z점수가 0.690475994603597, 리사의 z점수가 0.71048949127107, 케빈의 z점수가 0.486657265007229.
#그렇기 때문에 z점수를 통해 성적을 비교하면, 리사 , 존 , 케빈의 순서로 성적이 좋다.