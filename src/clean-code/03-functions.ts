(() => {
  // función para obtener información de una película por Id
  function getMovieByID(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieCast(movieID: string) {
    console.log({ movieID });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioByID(ActorId: string) {
    console.log({ ActorId });
  }

  // Crear una película
  interface Movie {
    cast?: string[];
    description: string;
    rating?: number;
    title: string;
  }
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string): boolean {
    return fullName != "fernando";
  }
  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmountOld = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    let result;
    if (isDead) {
      result = 1500;
    } else {
      if (isSeparated) {
        result = 2500;
      } else {
        if (isRetired) {
          result = 3000;
        } else {
          result = 4000;
        }
      }
    }

    return result;
  };

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
