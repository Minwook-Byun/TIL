\name{caus}
\alias{caus}
\docType{data}
\title{
English Causative Constructions
}
\description{
A data set with examples of nine English periphrastic causatives from the newspaper segment of the British National Corpus.
}
\usage{data(caus)}
\format{
  A data frame with 450 observations on the following 7 variables.
  \describe{
    \item{\code{Cx}}{a factor that describes the causative construction with levels \code{be_made_toV}, \code{cause_toV}, \code{get_toV}, \code{get_Ved}, \code{get_Ving}, \code{have_V}, \code{have_Ved}, \code{have_Ving} and \code{make_V}.}
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
\url{http://www.natcorp.ox.ac.uk/}
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(caus)
str(caus) 
}
\keyword{datasets, English causative constructions}
