bp <-
function(data){
y <- c()
for (v in 1:ncol(data)){
y1 <- prop.table(table(data[, v]))
names(y1) <- paste(colnames(data)[v], names(y1), sep='.')
y <- c(y, y1)
}
return(y)
}
