\name{Rling-package}
\alias{Rling-package}
\alias{Rling}
\docType{package}
\title{
Rling: R for Linguists
}
\description{
This package contains the data sets and some functions described in the textbook \emph{How to Do Linguistics with R}.
}
\details{
\tabular{ll}{
Package: \tab Rling\cr
Type: \tab Package\cr
Version: \tab 1.0\cr
Date: \tab 2014-05-26\cr
License: GPL (>= 2)
}
To use this package, follow the recommendations in the textbook.
}
\author{
Natalia Levshina

Maintainer: Natalia Levshina <natalevs@gmail.com>
}
\references{
Levshina, Natalia. (In prep.) \emph{How to Do Linguistics with R}.
}
\keyword{ package }
\keyword{ linguistics }
\examples{
data(caus)
cause_toV <- caus[caus$Cx == "cause_toV", -1]
cause_toV.bp <- bp(cause_toV)
}
