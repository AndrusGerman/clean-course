(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = filesToEvaluate.map( f => f.flagged);

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const today = new Date();
    
    // días transcurridos - elapsed time in days
    const elapsedTimeDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const countFiles = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModification = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const MaxClassesPerStudent = 6;

    // mal 
    //const fruit = ['apple']
    // Bien
    const fruitsNames = ['manzana','apple','pera']


   { // mal
    const write = true;
    const notEmpty = true;
    const fruit = true;
    const notValues = true;
    //bien 
    const canWrite = true;
    const isEmpty = true;
    const hasFruit = true;
    const hasValues = true;}


    {
        //bad
        const fruits =10
        const cars = 10;

        //good
        const maxFruits = 10;
        const minFruits = 10
        const totalFruits = 10;
        const totalOfCars = 10;
    }

    {
        //bad
        const createUserIfNotExistex = () =>{}
        const updateUserIfNotEmpty = () =>{}
        const sendEmailIfFieldsValid = () =>{};

        //good
        const createUser = ()=>{};
        const updateUser = ()=>{};
        const sendEmail = ()=>{};
    }
})();