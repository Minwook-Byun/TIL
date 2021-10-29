\name{ldt}
\alias{ldt}
\docType{data}
\title{
Lexical Decision Task data  
}
\description{
This data set contains 100 randomly selected words from the English Lexicon Project data (Balota et al. 2007), their lengths, mean reaction times and corpus frequencies.
}
\usage{data(ldt)}
\format{
  A data frame with 100 observations on the following 3 variables.
  \describe{
    \item{\code{Length}}{a numeric vector that displays word lengths in letters}
    \item{\code{Freq}}{a numeric vector with word frequencies according to the Hyperspace Analogue to Language frequency norms (Lund and Burgess 1996)}
    \item{\code{Mean_RT}}{a numeric vector with average reaction times in a lexical decision task (in milliseconds)}
  }
}
\details{
%%  ~~ If necessary, more details than the __description__ above ~~
}
\source{
\url{http://elexicon.wustl.edu/WordStart.asp}
}
\references{
Balota, D. A., Yap, M. J., Cortese, M. J., et al. (2007). The English Lexicon Project. \emph{Behavior Research Methods}, 39(3), 445 - 459.

Lund, K., & Burgess, C. (1996). Producing high-dimensional semantic spaces from lexical co-occurrences. \emph{Behavior Research Methods, Instruments, & Computers}, 28, 203 - 208.
}
\examples{
data(ldt)
plot(ldt) 
}
\keyword{datasets}
