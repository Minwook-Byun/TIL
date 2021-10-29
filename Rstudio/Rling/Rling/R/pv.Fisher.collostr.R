pv.Fisher.collostr <-
function(a,b,c,d){
y<-c()
z<-length(a)
for (i in 1:z){
t<-rbind(c(a[i], b[i]), c(c[i], d[i]))
y1<-fisher.test(t)$p.value
y<-c(y, y1)
}
return(y)
}
