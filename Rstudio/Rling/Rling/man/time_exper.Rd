\name{time_exper}
\alias{time_exper}
\docType{data}
\title{
Conceptualization of Time in English and Mandarin Chinese
}
\description{
A fictitious data set with experimental data about the effect of horizontal and vertical primes on processing of English time expressions by native English and native Mandarine Chinese speakers. A simulation of the study by Boroditsky (2001).
}
\usage{data(time_exper)}
\format{
  A data frame with 200 observations on the following 4 variables.
  \describe{
    \item{\code{Subj}}{a factor with subject IDs.}
    \item{\code{Lang}}{a factor that specifies the mother tongue with levels \code{CH} (Mandarin Chinese), \code{EN} (English).}
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
data(time_exper)
boxplot(rt ~ Subj, data = time_exper, xlab = "Subjects", ylab = "Reaction times, in ms", col = c(rep("grey", 10), rep("white", 10)))
legend("topright", c("Chinese", "English"), fill = c("grey", "white"))
}
\keyword{datasets, prime, linguistic relativity}
