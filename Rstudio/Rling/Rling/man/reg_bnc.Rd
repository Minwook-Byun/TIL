\name{reg_bnc}
\alias{reg_bnc}
\docType{data}
\title{
Register variation in the British National Corpus
}
\description{
This is a data set with relative frequencies (proportions) of different word classes in 69 subcorpora of the British National Corpus (the BYU-BNC version).
}
\usage{data(reg_bnc)}
\format{
  A data frame with 69 observations on the following 12 variables.
  \describe{
    \item{\code{Reg}}{a factor that describes the metaregister with levels \code{Acad}, \code{Fiction}, \code{Misc}, \code{News}, \code{NonacProse} and \code{Spok}}
    \item{\code{Ncomm}}{a numeric vector with relative frequencies of common nouns.}
    \item{\code{Nprop}}{a numeric vector with relative frequencies of proper nouns.}
    \item{\code{Vpres}}{a numeric vector with relative frequencies of verbs in the present tense form, 3rd person singular.}
    \item{\code{Vpast}}{a numeric vector with relative frequencies of verbs in the past tense form.}
    \item{\code{P1}}{a numeric vector with relative frequencies of the first-person pronouns.}
    \item{\code{P2}}{a numeric vector with relative frequencies of the second-person pronouns.}
    \item{\code{Adj}}{a numeric vector with relative frequencies of adjectives.}
    \item{\code{ConjCoord}}{a numeric vector with relative frequencies of coordinating conjunctions.}
    \item{\code{ConjSub}}{a numeric vectorwith relative frequencies of subordinating conjunctions.}
    \item{\code{Interject}}{a numeric vector with relative frequencies of interjections.}
    \item{\code{Num}}{a numeric vector with relative frequencies of numerals.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
\url{http://corpus.byu.edu/bnc}
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(reg_bnc)
cor(reg_bnc[, -1])
}
\keyword{datasets, register variation}
