\name{cossim}
\alias{cossim}
%- Also NEED an '\alias' for EACH other topic documented here.
\title{
Cosine Similarity Measure for Two and More Vectors
}
\description{
This function computes cosine similarity scores for more than two vectors, returning a matrix of cosine similarity scores.
}
\usage{
cossim(x)
}
%- maybe also 'usage' for other objects documented here.
\arguments{
  \item{x}{
a matrix with vectors as rows, e.g. distributional vectors of weighted co-occurrence frequencies.
}
}
\details{
%%  ~~ If necessary, more details than the description above ~~
}
\value{
a symmetric matrix with cosine similarity scores. 
}
\references{
%% ~put references to the literature/web site here ~
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
test = rbind(V1 = 1:100, V2 = rep(1, 100), V3 = rep(50, 100))
cossim(test)
}
% Add one or more standard keywords, see file 'KEYWORDS' in the
% R documentation directory.
\keyword{cosine similarity }
\keyword{Vector Space Models}% __ONLY ONE__ keyword per line
