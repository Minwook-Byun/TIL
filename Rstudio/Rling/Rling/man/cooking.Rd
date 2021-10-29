\name{cooking}
\alias{cooking}
\docType{data}
\title{
English Verbs of Cooking
}
\description{
A co-occurrence matrix of ten English verbs of cooking and their collocates in the magazine subcorpus of the Corpus of Contemporary American English (Davies 2008 - ), only imperative uses.
}
\usage{data(cooking)}
\format{
  A data frame with 2819 observations on the following 10 variables.
  \describe{
    \item{\code{Bake}}{a numeric vector}
    \item{\code{Boil}}{a numeric vector}
    \item{\code{Broil}}{a numeric vector}
    \item{\code{Cook}}{a numeric vector}
    \item{\code{Fry}}{a numeric vector}
    \item{\code{Grill}}{a numeric vector}
    \item{\code{Poach}}{a numeric vector}
    \item{\code{Roast}}{a numeric vector}
    \item{\code{Stew}}{a numeric vector}
    \item{\code{Simmer}}{a numeric vector}
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
data(cooking)
barplot(colSums(cooking), las = 2)
}
\keyword{datasets}
