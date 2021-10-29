\name{doenLaten}
\alias{doenLaten}
\docType{data}
\title{
Dutch Causative Constructions with doen and laten
}
\description{
A sample of causative constructions with causative auxiliaries doen and laten from Dutch and Belgian (Flemish) newspapers.  
}
\usage{data(doenLaten)}
\format{
  A data frame with 455 observations on the following 5 variables.
  \describe{
    \item{\code{Aux}}{a factor that specifies the causative auxiliary with levels \code{laten} and \code{doen}.}
    \item{\code{Country}}{a factor with levels \code{NL} (the Netherlands) and \code{BE} (Belgium).}
    \item{\code{Causation}}{a factor that describes the type of causation with levels \code{Affective}, \code{Inducive}, \code{Physical} and \code{Volitional}}
    \item{\code{EPTrans}}{a factor that specifies the transitivity of the Effected Predicate with levels \code{Intr} (intransitive) and \code{Tr} (transitive).}
    \item{\code{EPTrans1}}{a factor with levels \code{Intr} and \code{Tr}. It is very similar to the previous one, except for a few observations.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Levshina, N. (2011). \emph{Doe wat je niet laten kan [Do what you cannot let]: A usage-based analysis of Dutch causative constructions}. PhD diss., University of Leuven.
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(doenLaten)
m.glm <- glm(Aux ~ Causation + EPTrans + Country, data = doenLaten, family = "binomial")
summary(m.glm)
}
\keyword{datasets, Dutch, causative constructions}
