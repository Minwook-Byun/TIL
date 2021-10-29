\name{NSL}
\alias{NSL}
\docType{data}
\title{
Motion Events in Nicaraguan Sign Language
}
\description{
A fictitious data set with experimental data on encoding of motion events in Nicaraguan Sign Language. A simulation of the data from Senghas et al. (2004).
}
\usage{data(NSL)}
\format{
  A data frame with 27 observations on the following 2 variables.
  \describe{
    \item{\code{MannerPath}}{a numeric vector with proportions of separate expressions of manner and path by NSL signers.}
    \item{\code{Cohort}}{a factor with levels specifying the cohort of NSL signers: \code{1} (first cohort), \code{2} (second cohort), \code{3} (third cohort)}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
%%  ~~ reference to a publication or URL from which the data were obtained ~~
}
\references{
Senghas, A., Kita, S., & Ozyurek, A. (2004). Children creating core properties of language: Evidence from an emerging Sign Language in Nicaragua. \emph{Science}, 305(5691), 1779-1782.
}
\examples{
data(NSL)
aov(MannerPath ~ Cohort, data = NSL)
}
\keyword{datasets, motion events, sign language}
