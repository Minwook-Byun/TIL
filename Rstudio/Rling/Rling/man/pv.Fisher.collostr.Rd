\name{pv.Fisher.collostr}
\alias{pv.Fisher.collostr}
%- Also NEED an '\alias' for EACH other topic documented here.
\title{
Computation of the Fisher exact test p-values in batch mode
}
\description{
This function computes Fisher exact test p-values  for a list of collexemes, based on four frequencies (see \emph{How to Do Lingusitics with R}, Ch. 10)
}
\usage{
pv.Fisher.collostr(a, b, c, d)
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
A numeric vector with p-values.
}
\references{
Stefanowitsch, A., & Gries, S. (2003). Collostructions: Investigating the interaction of words and constructions. \emph{International Journal of Corpus Linguistics}, 8(2), 209-243.
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
pvF <- pv.Fisher.collostr(a, b, c, d)
}


% Add one or more standard keywords, see file 'KEYWORDS' in the
% R documentation directory.
\keyword{collostructional analysis}
\keyword{Fisher exact test}
