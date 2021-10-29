\name{reg_coca}
\alias{reg_coca}
\docType{data}
\title{
Register Variation in the COCA
}
\description{
This data set contains relative frequencies (proportions) of different word classes in segments of the Corpus of Contemporary American English (Davies 2008 - ).
}
\usage{data(reg_coca)}
\format{
  A data frame with 42 observations on the following 12 variables.
  \describe{
    \item{\code{Reg}}{a factor that describes the metaregister with levels \code{Acad} (academic prose), \code{Fiction}, \code{Mag} (magazines), \code{News} (newspapers) and \code{Spok} (spoken subcorpus).}
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
Davies, M. (2008 - ) The Corpus of Contemporary American English: 450 million words, 1990 - present. Available online at \url{http://corpus.byu.edu/coca/}.
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(reg_coca)
cor(reg_coca[, -1])
}
\keyword{datasets, register variation, COCA}
