\name{sent}
\alias{sent}
\docType{data}
\title{
Semantic and syntactic properties of sentences
}
\description{
This is a fictitious data set with the clause type and semantic class of the subject in twenty sentences.
}
\usage{data(sent)}
\format{
  A data frame with 20 observations on the following 2 variables.
  \describe{
    \item{\code{clause}}{a factor with levels \code{Ditr}, \code{Intrans} and \code{Trans}, which specifies the type of clause.}
    \item{\code{subj}}{a factor with levels \code{Abstr}, \code{Animal}, \code{Hum} and \code{MatObj}, which describes the semantic class of the syntactic subject.}
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
data(sent)
pie(table(sent$clause))
barplot(table(sent$subj))
}
\keyword{datasets}
\keyword{proportion}
\keyword{pie chart}
\keyword{bar plot}
\keyword{dot chart}

