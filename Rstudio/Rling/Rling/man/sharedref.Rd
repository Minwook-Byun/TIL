\name{sharedref}
\alias{sharedref}
\docType{data}
\title{
Shared Reference Expressions in Nicaraguan Sign Language
}
\description{
A fictituous data set with experimental data on shared reference expressions in Nicaraguan Sign Language. A simulation of the data from Senghas and Coppola (2001).
}
\usage{data(sharedref)}
\format{
  A data frame with 48 observations on the following 3 variables.
  \describe{
    \item{\code{mod}}{a numeric vector with average numbers of shared reference modulations per verb.}
    \item{\code{age}}{a factor that specifies the age when the signer joined the community, with levels \code{early}, \code{middle} and \code{late}}
    \item{\code{cohort}}{a factor that indicates the cohort the signer belongs to, with levels \code{1} and \code{2}}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
%%  ~~ reference to a publication or URL from which the data were obtained ~~
}
\references{
Senghas, A., & Coppola, M. (2001). Children creating language: How Nicaraguan Sign Language acquired a spatial grammar. \emph{Psychological Science}, 12(4), 323 - 328.
}
\examples{
data(sharedref)
aov(mod ~ age*cohort, data = sharedref)
}
\keyword{datasets, shared reference, sign language}
