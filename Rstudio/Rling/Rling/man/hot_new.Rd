\name{hot_new}
\alias{hot_new}
\docType{data}
\title{
\emph{hot} + N in 1910 - 2009 
}
\description{
The data set contains nouns that were used in the construction hot + N during the period from 1910 to 2009 and their frequencies. The source is COHA bigrams (Davies 2011).
}
\usage{data(hot_new)}
\format{
  A data frame with 796 observations on the following 2 variables.
  \describe{
    \item{\code{Noun}}{a factor with nouns.}
    \item{\code{New}}{a numeric vector with co-occurrence frequencies.}
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
data(hot_new)
head(hot_new)
}
\keyword{datasets, collexemes, hot}
