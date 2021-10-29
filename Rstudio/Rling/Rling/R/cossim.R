cossim <-
function(d){
nr <- nrow(d)
m <- matrix(NA, nr, nr )
rownames(m) <- rownames(d)
colnames(m) <- rownames(d)
for (i in 1:nr){
for (j in 1:nr){
cos <-crossprod(d[i,], d[j,]) / sqrt( crossprod(d[i,]) * crossprod(d[j,]))
m[i,j] <- cos
m[j,i] <- cos
}
}
return (m)
}
