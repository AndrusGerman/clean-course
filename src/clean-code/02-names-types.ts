(() => {
  const temperaturesCelsius = [33.6, 12.34];

  const serverIp = "123.123.123.123";

  const users = [
    { id: 1, email: "fernando@google.com" },
    { id: 2, email: "juan@google.com" },
    { id: 3, email: "melissa@google.com" },
  ];

  const emails = users.map((user) => user.email);

  const canJump = false;
  const canRun = true;
  const hasItems = true;
  const isLoading = false;


  const initialTime = new Date().getTime();
  //....
  // 3 doritos después
  //...
  // Tiempo al final
  const endTime = new Date().getTime() - initialTime;

  // Obtiene los libros
  function getBooks() {
    throw new Error("Function not implemented.");
  }

  // obtiene libros desde un URL
  function getBooksByUrl(url: string) {
    throw new Error("Function not implemented.");
  }

  // obtiene el área de un cuadrado basado en sus lados
  function getSquareArea(side: number) {
    throw new Error("Function not implemented.");
  }

  // imprime el trabajo
  function printJob() {
    throw new Error("Function not implemented.");
  }
})();
