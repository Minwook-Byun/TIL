\name{fut}
\alias{fut}
\docType{data}
\title{
English Future Constructions
}
\description{
A data set with a set of verbs and their normalized frequencies in constructions will + Inf and going to + Inf from the 1820s to the 2000s. The frequencies are obtaned from the ngrams based on the Corpus of Historical American English (Davies 2011).
}
\usage{data(fut)}
\format{
  A data frame with 6973 observations on the following 4 variables.
  \describe{
    \item{\code{Verb}}{a factor with levels \code{accept}, \code{accompany}, \code{accomplish} and other frequent verbs.}
    \item{\code{Period}}{a numeric vector with decades, from the 1820s to the 2000s.}
    \item{\code{will}}{a numeric vector with frequencies of the verbs in the construction will + Infinitive.}
    \item{\code{goingto}}{a numeric vector with frequencies of the verbs in the construction going to + Infinitive.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Davies, M. (2011). N-grams and word frequency data from the Corpus of Historical American English (COHA). Available at \url{http://www.ngrams.info}.
}
\references{
}
\examples{
data(fut)
str(fut)
}
\keyword{datasets, future constructions}
