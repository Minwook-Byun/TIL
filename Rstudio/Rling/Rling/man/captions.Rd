\name{captions}
\alias{captions}
\docType{data}
\title{
Captions
}
\description{
A data set with fictitious vocabulary test scores of learners of Spanish, who were exposed to four experimental conditions. Inspired by the study by Winke et al. (2010), who investigated the effect of captions on vocabulary learning.
}
\usage{data(captions)}
\format{
  A data frame with 47 observations on the following 2 variables.
  \describe{
    \item{\code{test}}{a numeric vector with vocabulary test scores.}
    \item{\code{cap_group}}{a factor that describes the experimental conditions with levels \code{cap_both} (captions presented both times), \code{cap_first} (captions presented only the first time), \code{cap_second} (captions presented only the second time) and \code{no_cap} (no captions).}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
%%  ~~ reference to a publication or URL from which the data were obtained ~~
}
\references{
Winke, P., Gass, S., & Sydorenko, T. (2010). The effects of captioning videos used for foreign language listening activities. \emph{Language Learning and Technology}, 14(1), 65-86.
}
\examples{
data(captions)
boxplot(test ~ cap_group, data = captions)
}
\keyword{datasets, captions, vocabulary test}
