\name{quite_Am}
\alias{quite_Am}
\docType{data}
\title{
\emph{quite} + ADJ in American English
}
\description{
Frequencies of 3049 adjectives in quite + ADJ construction in the US segment of the GloWbE corpus (Davies 2013). 
}
\usage{data(quite_Am)}
\format{
  A data frame with 3049 observations on the following 2 variables.
  \describe{
    \item{\code{Adj}}{a factor that represents the adjectives.}
    \item{\code{AmE}}{a numeric vector with frequencies of the adjectives in quite + ADJ construction in the US segment of the GloWbE.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Davies, M. (2013). Corpus of Global Web-Based English: 1.9 billion words from speakers in 20 countries. Available online at \url{http://corpus2.byu.edu/glowbe/}.
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(quite_Am)
head(quite_Am)
}
\keyword{datasets, quite, American English, distinctive collexeme analysis}
