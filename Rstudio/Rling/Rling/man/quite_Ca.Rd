\name{quite_Ca}
\alias{quite_Ca}
\docType{data}
\title{
\emph{quite} + ADJ in Canadian English
}
\description{
Frequencies of 2040 adjectives in quite + ADJ construction in the Canadian segment of the GloWbE corpus (Davies 2013). 
}
\usage{data(quite_Ca)}
\format{
  A data frame with 2040 observations on the following 2 variables.
  \describe{
    \item{\code{Adj}}{a factor that represents the adjectives.}
    \item{\code{CE}}{a numeric vector with frequencies of the adjectives in quite + ADJ construction in the Canadian segment of the GloWbE.}
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
data(quite_Ca)
head(quite_Ca)
}
\keyword{datasets, Canadian English, quite, distinctive collexeme analysis}
