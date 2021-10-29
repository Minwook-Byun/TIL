\name{ditr}
\alias{ditr}
\docType{data}
\title{
Russian Ditransitive Construction
}
\description{
A data set with 47 Russian verbs and their frequencies in the syntactically parsed segment of the Russian National Corpus. 
}
\usage{data(ditr)}
\format{
  A data frame with 47 observations on the following 2 variables.
  \describe{
    \item{\code{Freq_VC}}{a numeric vector with the numbers of occurrences in the ditransitive construction.}
    \item{\code{Freq_V}}{a numeric vector with the total frequencies in the subcorpus.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
\url{http://ruscorpora.ru/en/}
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(ditr)
str(ditr)
}
\keyword{datasets, ditransitive construction, association measures}
