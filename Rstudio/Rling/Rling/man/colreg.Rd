\name{colreg}
\alias{colreg}
\docType{data}
\title{
Frequencies of Basic Colour Terms in the COCA
}
\description{
This data set contains frequencies of eleven Basic Colour Terms in different components of the Corpus of Contemporary American English (Davies 2008 - ). Only adjectival uses were counted.
}
\usage{data(colreg)}
\format{
  A data frame with 11 observations on the following 4 variables.
  \describe{
    \item{\code{spoken}}{a numeric vector}
    \item{\code{fiction}}{a numeric vector}
    \item{\code{academic}}{a numeric vector}
    \item{\code{press}}{a numeric vector}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Davies, M. (2008 - ) The Corpus of Contemporary American English: 450 million words. Available online at \url{http://corpus.byu.edu/coca/}.

The frequencies were obtained from \url{http://www.wordandphrase.info/frequencyList.asp.}
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(colreg)
barplot(rowSums(colreg), col = rownames(colreg), las = 2)
}
\keyword{datasets}
\keyword{Deviations of Proportions}
\keyword{dispersion}
\keyword{Basic Colour Terms}
\keyword{COCA}
\keyword{register}