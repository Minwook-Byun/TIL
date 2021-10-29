\name{time_training}
\alias{time_training}
\docType{data}
\title{
English Speakers Trained on Chinese Time Expressions
}
\description{
Another fictitious data set that simulates the study by Boroditsky (2001). Contains experimental data about the effect of horizontal and vertical primes on processing of English time expressions by native English speakers trained on Chinese time expressions. 
}
\usage{data(time_training)}
\format{
  A data frame with 100 observations on the following 4 variables.
  \describe{
    \item{\code{Subj}}{a factor with subject IDs.}
    \item{\code{Lang}}{a factor with level \code{EN_trained} that describes the experimental group.}
    \item{\code{Prime}}{a factor that describes the primes with levels \code{Horiz} (horizontal) and \code{Vert} (vertical).}
    \item{\code{rt}}{a numeric vector with reaction times.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
%%  ~~ reference to a publication or URL from which the data were obtained ~~
}
\references{
Boroditsky, L. (2001). Does language shape thought?: Mandarin and English speakers' conceptions of time. \emph{Cognitive Psychology}, 43, 1-22.
}
\examples{
data(time_training)
boxplot(rt ~ Subj, data = time_training)
}
\keyword{datasets, conceptualization of time, linguistic relativity}
