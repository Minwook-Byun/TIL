\name{ELP}
\alias{ELP}
\docType{data}
\title{
Data from the English Lexicon Project
}
\description{
880 nouns, adjectives and verbs from the English Lexicon Project data (Balota et al. 2007)
}
\usage{data(ELP)}
\format{
  A data frame with 880 observations on the following 5 variables.
  \describe{
    \item{\code{Word}}{a factor with lexical stimuli.}
    \item{\code{Length}}{a numeric vector with word lengths.}
    \item{\code{SUBTLWF}}{a numeric vector with frequencies in film subtitles.}
    \item{\code{POS}}{a factor with levels \code{JJ} (adjective) \code{NN} (noun) \code{VB} (verb)}
    \item{\code{Mean_RT}}{a numeric vector with mean reaction times in a lexical decision task}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
\url{http://elexicon.wustl.edu/WordStart.asp}
}
\references{
Balota, D. A., Yap, M. J., Cortese, M. J., et al. (2007). The English Lexicon Project. \emph{Behavior Research Methods}, 39(3), 445 - 459.
}
\examples{
data(ELP)
summary(lm(Mean_RT ~ Length + log(SUBTLWF) + POS, data = ELP))
}
\keyword{datasets, lexical decision task, frequency}
