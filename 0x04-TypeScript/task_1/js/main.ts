// Define the Teacher interface
interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any; // Allow for additional attributes
  }
  
  // Initialize a Teacher object
  const initializeTeacher = (
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    location: string,
    additionalAttributes: { [key: string]: any }
  ): Teacher => {
    return {
      firstName,
      lastName,
      fullTimeEmployee,
      location,
      ...additionalAttributes,
    };
  };
  
  // Example usage
  const teacher3: Teacher = initializeTeacher(
    "John",
    "Doe",
    false,
    "London",
    { contract: false }
  );
  
  console.log(teacher3);
  
 
  // Define the Directors interface that extends Teacher
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  
  // Example usage
  const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    fullTimeEmployee: true,
    location: 'London',
    numberOfReports: 17,
  };
  
  console.log(director1);
  