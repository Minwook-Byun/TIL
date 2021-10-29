\name{caus_Dutch}
\alias{caus_Dutch}
\docType{data}
\title{
Dutch causative constructions
}
\description{
A data set with examples of two Dutch periphrastic causatives from newspaper corpora.
}
\usage{data(caus_Dutch)}
\format{
  A data frame with 100 observations on the following 7 variables.
  \describe{
    \item{\code{Cx}}{a factor with levels \code{doen_V} and \code{laten_V}}
    \item{\code{CrSem}}{a factor that contains the semantic class of the Causer with levels \code{Anim} (animate) and \code{Inanim} (inanimate).}
    \item{\code{CeSem}}{a factor that describes the semantic class of the Causee with levels \code{Anim} (animate) and \code{Inanim} (inanimate).}
    \item{\code{CdEv}}{a factor that describes the semantic domain of the caused event expressed by the Effected Predicate. The levels are  \code{Ment} (mental), \code{Phys} (physical) and \code{Soc} (social).}
    \item{\code{Neg}}{a factor with levels \code{No} (absence of negation) and \code{Yes} (presence of negation).}
    \item{\code{Coref}}{a factor with levels \code{No} (no coreferentiality) and \code{Yes} (coreferentiality).}
    \item{\code{Poss}}{a factor with levels \code{No} (no overt expression of possession) \code{Yes} (overt expression of possession)}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
%%  ~~ reference to a publication or URL from which the data were obtained ~~
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(caus_Dutch)
str(caus_Dutch)
}
\keyword{datasets}
