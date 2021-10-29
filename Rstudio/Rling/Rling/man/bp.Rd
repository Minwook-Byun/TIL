\name{bp}
\alias{bp}
%- Also NEED an '\alias' for EACH other topic documented here.
\title{
Behavioural Profiles
}
\description{
This function constructs Behavioural Profile vectors from categorical data.
}
\usage{
bp(x)
}
%- maybe also 'usage' for other objects documented here.
\arguments{
  \item{x}{
a data frame with individual observations as rows and binary or categorical variables as columns.
}
}
\details{
%%  ~~ If necessary, more details than the description above ~~
}
\value{
a numeric vector with concatenated proportions of each value of every variable in the data frame.
}
\references{
Divjak, D., & Gries, S. T. (2006). Ways of trying in Russian: clustering behavioral profiles. \emph{Corpus Linguistics and Linguistic Theory}, 2, 23-60.
}
\author{
Natalia Levshina
}
\note{
%%  ~~further notes~~
}

%% ~Make other sections like Warning with \section{Warning }{....} ~

\seealso{
%% ~~objects to See Also as \code{\link{help}}, ~~~
}
\examples{
data(caus)
cause_toV <- caus[caus$Cx == "cause_toV", -1]
cause_toV.bp <- bp(cause_toV)
}
\keyword{Behavioral Profiles}
\keyword{Behavioural Profiles}
