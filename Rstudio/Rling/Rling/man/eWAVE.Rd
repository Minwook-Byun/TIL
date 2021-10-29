\name{eWAVE}
\alias{eWAVE}
\docType{data}
\title{
Varieties of English 
}
\description{
A data set of 76 world varieties of English and their syntactic, morphological and other features from from Electronic World Atlas of Varieties of English (Kortmann & Lunkenheimer 2013).
}
\usage{data(eWAVE)}
\format{
  A data frame with 76 observations on the following 24 variables.
  \describe{
    \item{\code{F1}}{a factor with levels \code{?} (missing information), \code{A} (the feature is pervasive or obligatory), \code{B} (the feature is neither pervasive, nor extremely rare), \code{C} (the feature exists, but it is extremely rare), \code{D} (the feature is absent) and \code{X} (the feature is non-applicable)}
    \item{\code{F7}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F48}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F59}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F88}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F91}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F111}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F121}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F128}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F145}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F154}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F170}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F180}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F185}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F200}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F201}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F211}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F216}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F225}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{F235}}{a factor with levels \code{?}, \code{A}, \code{B}, \code{C}, \code{D} and \code{X} (see above)}
    \item{\code{Region}}{a factor with levels \code{Africa}, \code{America}, \code{Australia}, \code{British Isles}, \code{Caribbean}, \code{Pacific}, \code{South and Southeast Asia} and \code{South Atlantic}}
    \item{\code{Type}}{a factor with levels \code{English-based Creoles}, \code{English-based Pidgins}, \code{High-contact L1 varieties}, \code{Indigenized L2 varieties} and \code{Traditional L1 varieties}}
    \item{\code{Lon}}{a numeric vector with longitudes}
    \item{\code{Lat}}{a numeric vector with latitudes}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
\url{http://ewave-atlas.org/}
}
\references{
Kortmann, B., & Lunkenheimer, K. (Eds.). (2013). \emph{The Electronic World Atlas of Varieties of English}. Leipzig: Max Planck Institute for Evolutionary Anthropology. Available at \url{http://ewave-atlas.org}.
}
\examples{
data(eWAVE)
str(eWAVE)
}
\keyword{datasets, varieties of English, eWAVE, coordinates, maps}
