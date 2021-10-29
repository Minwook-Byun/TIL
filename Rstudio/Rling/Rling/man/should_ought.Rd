\name{should_ought}
\alias{should_ought}
\docType{data}
\title{
\emph{should} and \emph{ought to} in the COCA
}
\description{
This data set contains co-occurrence frequencies of modal verbs should and ought to with selected infinitives over several decades in the Corpus of Contemporary American English (Davies 2008 - ).
}
\usage{data(should_ought)}
\format{
  A data frame with 244 observations on the following 4 variables.
  \describe{
    \item{\code{Verb}}{a factor with infinitives.}
    \item{\code{Year}}{a numeric vector that specifies the first year of a five-year period for which the frequencies were computed. The periods were as follows: 1990 - 1994, 1995 - 1999, 2000 - 2004 and 2005 - 2009.}
    \item{\code{should}}{a numeric vector with co-occurrence frequencies of the infinitives with should}
    \item{\code{ought_to}}{a numeric vector with co-occurrence frequencies of the infinitives with ought to}
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
data(should_ought)
head(should_ought)
}
\keyword{datasets, should, ought to, COCA}
