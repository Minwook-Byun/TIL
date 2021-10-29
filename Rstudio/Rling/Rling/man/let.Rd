\name{let}
\alias{let}
\docType{data}
\title{
Let, Allow and Permit
}
\description{
A data set with exemplars of constructions let + V, allow + to V and permit + to V from the Corpus of Contemporary American English (Davies 2008 - )
}
\usage{data(let)}
\format{
  A data frame with 518 observations on the following 6 variables.
  \describe{
    \item{\code{Year}}{a numeric vector with the year when the utterance was produced.}
    \item{\code{Reg}}{a factor with levels \code{MAG} (magazines) and \code{SPOK} (spoken: TV and radio transcripts.)}
    \item{\code{Verb}}{a factor with levels \code{let}, \code{allow} and \code{permit}.}
    \item{\code{Neg}}{a factor with levels \code{No} (absence of negation) and \code{Yes} (presence of negation).}
    \item{\code{Permitter}}{a factor that describes the semantic class of the first argument (the Permitter) with levels \code{Anim} (animate), \code{Inanim} (inanimate) and \code{Undef} (undefined).}
    \item{\code{Imper}}{a factor with levels \code{No} (no imperative construction) and \code{Yes} (imperative construction).}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Davies, M. (2008 -) The Corpus of Contemporary American English: 450 million words, 1990-present. Available online at \url{http://corpus.byu.edu/coca/}.
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(let)
str(let)
}
\keyword{datasets, verbs of letting}
