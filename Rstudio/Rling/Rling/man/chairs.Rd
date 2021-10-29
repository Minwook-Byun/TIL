\name{chairs}
\alias{chairs}
\docType{data}
\title{
\emph{Stuhl} and \emph{Sessel} in online stores
}
\description{
This data set contains 188 exemplars of chairs categorized as either \emph{Stuhl} 'chair' or \emph{Sessel} 'armchair' in online furniture stores.
}
\usage{data(chairs)}
\format{
  A data frame with 188 observations on the following 19 variables.
  \describe{
    \item{\code{Shop}}{a factor that describes the online store with levels \code{ikea.de}, \code{Moebel-Profi.de} and \code{roller.de}.}
    \item{\code{WordDE}}{a factor that describes the specific lexical category.}
    \item{\code{Category}}{a factor that describes the more general lexical category (usually the last element of a composite noun), with levels \code{Sessel} and \code{Stuhl}.}
    \item{\code{Function}}{a factor with levels \code{Eat}, \code{NotSpec}, \code{Outdoor}, \code{Relax} and \code{Work}.}
    \item{\code{Age}}{a factor with levels \code{Adult} and \code{Children}.}
    \item{\code{Back}}{a factor with levels \code{Adjust}, \code{High}, \code{Low} and \code{Mid}.}
    \item{\code{Soft}}{a factor with levels \code{No}, \code{Pad} and \code{Yes}.}
    \item{\code{Arms}}{a factor with levels \code{No} and \code{Yes}.}
    \item{\code{Upholst}}{a factor with levels \code{No} and \code{Yes}.}
    \item{\code{MaterialSeat}}{a factor with levels \code{Fabric},  \code{Leather}, \code{Loom_natur},  \code{Metal},  \code{Paper}, \code{Plastic},  \code{Polyamide},  \code{Rattan},  \code{Steel} and  \code{Wood}.}
    \item{\code{SeatHeight}}{a factor with levels \code{Adjust},  \code{High} and \code{Norm}.}
    \item{\code{SeatDepth}}{a factor with levels \code{Adjust}, \code{Deep} and \code{Norm}.}
    \item{\code{Swivel}}{a factor with levels \code{No} and \code{Yes}}
    \item{\code{Roll}}{a factor with levels \code{No} and \code{Yes}.}
    \item{\code{Rock}}{a factor with levels \code{No} and \code{Rock}.}
    \item{\code{AddFunctions}}{a factor with levels \code{Bed},  \code{No} and \code{Table}.}
    \item{\code{Recline}}{a factor with levels \code{No} and \code{Yes}.}
    \item{\code{ReclineBack}}{a factor with levels \code{No} and \code{Yes}.}
    \item{\code{SaveSpace}}{a factor with levels \code{collapse},  \code{No} and \code{stack}.}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
%%  ~~ reference to a publication or URL from which the data were obtained ~~
}
\references{
%%  ~~ possibly secondary sources and usages ~~
}
\examples{
data(chairs)
str(chairs)
}
\keyword{datasets, lexical category}
