normalize <-
function(m, method = 'z-scores', by = 'row'){
  if (is.data.frame(m)){m <- as.matrix(m)}
  BYs <- c('row', 'col')
  by <- pmatch(by, BYs)
  if (is.na(by))
    stop('no object for scaling')
  
  if (!is(m, 'matrix'))
  {
    vec <- 1
    m <- matrix(m, nrow = 1, ncol = length(m))
  }
  else {vec <- 0}
  
  m1 <- matrix(0, nrow = nrow(m), ncol = ncol(m))
  
  METHODS <- c('z-scores', 'mad')
  method <- pmatch(method, METHODS)
  if (is.na(method)) 
    stop('no such method')
  if (method == -1) 
    stop('ambiguous method')
  
  if (method == 1) {
    fun1 <- mean
    fun2 <- sd 
  }
  
  else if (method == 2){
    fun1 <- median
    fun2 <- mad
  } 
  
  
  if (by == 1) {
    for (i in 1:nrow(m)){
      v <- as.numeric(m[i, ])
      scores <- (v - fun1(v, na.rm = TRUE))/fun2(v, na.rm = TRUE)
      m1[i, ] <- scores 
    }
  }
  
  else if (by == 2) {
    for (j in 1:ncol(m)){
      v <- as.numeric(m[, j])
      scores <- (v - fun1(v, na.rm = TRUE))/fun2(v, na.rm = TRUE)
      m1[,j] <- scores 
    }
  }
  
  if (vec ==1){
    m1 <- as.vector(m1)
  }
  rownames(m1) <- rownames(m)
  colnames(m1) <- colnames(m)
  return (m1)
}