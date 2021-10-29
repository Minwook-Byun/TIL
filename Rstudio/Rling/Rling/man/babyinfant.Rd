\name{babyinfant}
\alias{babyinfant}
\docType{data}
\title{
Babies and Infants
}
\description{
This data set contains collocates of word forms baby, babies, infant and infants from the year 2012 in the Corpus of Contemporary American English (Davies 2008 - ).
}
\usage{data(babyinfant)}
\format{
  A data frame with 1233 observations on the following 4 variables.
  \describe{
    \item{\code{Baby}}{a numeric vector}
    \item{\code{Babies}}{a numeric vector}
    \item{\code{Infant}}{a numeric vector}
    \item{\code{Infants}}{a numeric vector}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Davies, M. (2008 - ) The Corpus of Contemporary American English: 450 million words, 1990 - present. Available online at \url{http://corpus.byu.edu/coca/}.
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(babyinfant)
cor(babyinfant)
}
\keyword{datasets, word forms, baby, infant}
