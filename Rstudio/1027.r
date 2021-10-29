install.packages(C:/coding/TIL/Rstudio/Rling_1.0.tar.gz, repos = NULL, type="source")
data(ldt.Rdata)

mean(ldt$Lengt)
median()

myt = table(ldt$Legth)
names(myt)[myt == max(myt)] #names()열 이름 출력
## task 
myMode = function(x) {
    y = table(x)
    mode = names(y)[y == max(y)]
    cat("Mode: ", mode)
}
mymode(len)

var = c(2,3,4,5,6,7,7,8,10)

range(var)
min(var)
max(var)
var(var)


a = c(1,1,1,6,99,99,99,99)
var(a)

sd(a)
sqrt(var(a))

IQR(var)
IQR(a)

