LL.collostr <-
function(a, b, c, d){
y<-c()
z<-length(a)
for (i in 1:z){
t <- rbind(c(a[i], b[i]), c(c[i], d[i]))
exp <- outer(rowSums(t), colSums(t), "*")/sum(t)
y1 <- 2*sum(t*ifelse(t==0, 0, log(t/exp)))
y<-c(y, y1)
}
return(y)
}
