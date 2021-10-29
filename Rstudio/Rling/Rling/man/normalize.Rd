\name{normalize}
\alias{normalize}
%- Also NEED an '\alias' for EACH other topic documented here.
\title{
Computation of standard scores and MAD-scores
}
\description{
This function transforms scores into z-scores, which are based on the standard deviation, or scores based on the median absolute deviation. It can be applied to one or several numeric vectors (in a matrix or a data frame).
}
\usage{
normalize(x, method = 'z-scores', by = 'row')
}
%- maybe also 'usage' for other objects documented here.
\arguments{
  \item{x}{
a numeric vector, a matrix or a data frame with numeric values only.
}
\item{method}{
'z-scores' (the default) or 'mad' (scores based on median absolute deviation).
}
\item{by}{
specifies whether the values in a matrix or data frame should be normalized by rows or columns. The corresponding options are 'row' (the default) and 'column'. 
}
}
\details{
%%  ~~ If necessary, more details than the description above ~~
}
\value{
a numeric vector or a matrix
}
\references{
Leys, C., Ley, C., Klein, O., Bernard, P., & Licata, L. (2013). Detecting outliers: Do not use standard deviation around the mean, use absolute deviation around the median. \emph{Journal of Experimental Social Psychology}, 49, 764-766.
}
\author{
Natalia Levshina
}
\note{
}
\seealso{
\code{\link{scale}}, \code{\link{mad}}
}
\examples{
data(ldt)
normalize(ldt$Mean_RT)
normalize(ldt$Mean_RT, method = "mad")
}
% Add one or more standard keywords, see file 'KEYWORDS' in the
% R documentation directory.
\keyword{z-score}
\keyword{median absolute deviation}
\keyword{scale}
\keyword{standard scores}