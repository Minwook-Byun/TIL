\name{LL.collostr}
\alias{LL.collostr}
%- Also NEED an '\alias' for EACH other topic documented here.
\title{
Computation of Log-Likelihood association scores in batch mode
}
\description{
This function computes log-likelihood association scores for a list of collexemes, based on four frequencies (see \emph{How to Do Lingusitics with R}, Ch. 10)
}
\usage{
LL.collostr(a, b, c, d)
}
%- maybe also 'usage' for other objects documented here.
\arguments{
  \item{a}{
a vector with observed frequencies of word X in construction Y. 
}
  \item{b}{
a vector with observed frequencies of all other words in construction Y. 
}
  \item{c}{
a vector with observed frequencies of word X in all other constructions. 
}
  \item{d}{
a vector with observed frequencies of all other words in all other constructions. 
}
}
\details{
The function helps one perform collostructional analysis or distinctive collexeme analysis for a large set of collexemes.
}
\value{
A numeric vector with log-likelihood ratios.
}
\references{
Dunning, T. (1993). Accurate Methods for the Statistics of Surprise and Coincidence. \emph{Computational Linguistics}, 19(1), 61-74.
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
data(ditr)
a <- ditr$Freq_VC
b <- ditr$Freq_V - a
c <- 667 - a
d <- 104162 - (a + b + c)
LL <- LL.collostr(a, b, c, d)
}
% Add one or more standard keywords, see file 'KEYWORDS' in the
% R documentation directory.
\keyword{collostructional analysis}
\keyword{log-likelihood ratio}
