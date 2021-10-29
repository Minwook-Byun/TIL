\name{nerd}
\alias{nerd}
\docType{data}
\title{
Nerd and Geek
}
\description{
This data set contains corpus observations with nouns nerd and geek, coded for a number of variables.
}
\usage{data(nerd)}
\format{
  A data frame with 1316 observations on the following 5 variables.
  \describe{
    \item{\code{Noun}}{a factor with levels \code{geek} and \code{nerd}.}
    \item{\code{Num}}{a factor that describes the morphological number with levels \code{pl} and \code{sg}.}
    \item{\code{Century}}{a factor with levels \code{XX} and \code{XXI}.}
    \item{\code{Register}}{a factor with levels \code{ACAD} (academic), \code{MAG} (magazines), \code{NEWS} (newspapers) and \code{SPOK} (spoken).}
    \item{\code{Eval}}{a factor that describes positive or negative evaluation of nerds/geeks with levels \code{Neg} (negative), \code{Neutral} \code{Positive}}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
Course project by Eliane Lorenz and Maximilian Wachsmann for Corpus Linguistics course at the University of Jena, Germany (2012). 
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(nerd)
summary(glm(Noun ~ Num + Century + Register + Eval, data = nerd, family = binomial))
}
\keyword{datasets, nerd, geek}
