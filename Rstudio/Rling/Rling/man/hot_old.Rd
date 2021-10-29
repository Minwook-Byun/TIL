\name{hot_old}
\alias{hot_old}
\docType{data}
\title{
\emph{hot} + N in 1810 - 1909
}
\description{
The data set contains nouns that were used in the construction hot + N during the period from 1810 to 1909. The source is COHA bigrams (Davies 2011).
}
\usage{data(hot_old)}
\format{
  A data frame with 534 observations on the following 2 variables.
  \describe{
    \item{\code{Noun}}{a factor with nouns.}
    \item{\code{Old}}{a numeric vector with co-occurrence frequencies.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Davies, M. (2011). N-grams and word frequency data from the Corpus of Historical American English (COHA). Available at \url{http://www.ngrams.info}.
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(hot_old)
head(hot_old)
}
\keyword{datasets, collexemes, hot}
