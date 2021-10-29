\name{pym_low}
\alias{pym_low}
\docType{data}
\title{
Low-frequency nouns
}
\description{
A data set with 51 low-frequency nouns and their formal features and experimental data from Paivio et al. (1968).
}
\usage{data(pym_low)}
\format{
  A data frame with 51 observations on the following 5 variables.
  \describe{
    \item{\code{syl}}{a numeric vector with word lengths in syllables.}
    \item{\code{let}}{a numeric vector with word lengths in letters.}
    \item{\code{imag}}{a numeric vector with mean imagery scores, from 1 (the lowest) to 7 (the highest).}
    \item{\code{conc}}{a numeric vector with mean concreteness scores, from 1 (the lowest) to 7 (the highest).}
    \item{\code{assoc}}{a numeric vector with average numbers of associations.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Friendly, M. (1996). Paivio et al. Word List Generator, Online application. Retrieved April 28, 2013, from \url{http://www.datavis.ca/online/paivio/}.
}
\references{
Paivio, A., Juille, J. C., & Madigan, S. (1968). Concreteness, imagery, and meaningfulness values for 925 nouns . \emph{Journal of Experimental Psychology}, 76(1, Pt. 2), 1-25.
}
\examples{
data(pym_low)
plot(density(pym_low$conc)) 
}
\keyword{datasets, frequency, psycholinguistics}
