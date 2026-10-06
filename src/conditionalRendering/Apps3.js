// // Refactor a series of ? : to if and variables 
// function Drink({ name }) {
//   return (
//     <section>
//       <h1>{name}</h1>
//       <dl>
//         <dt>Part of plant</dt>
//         <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
//         <dt>Caffeine content</dt>
//         <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
//         <dt>Age</dt>
//         <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
//       </dl>
//     </section>
//   );
// }

function Drink({ name }) {
    // Declare an object that holds the details for each drink
    let drinkDetails;
  
    if (name === 'tea') {
      drinkDetails = {
        partOfPlant: 'leaf',
        caffeineContent: '15–70 mg/cup',
        age: '4,000+ years',
      };
    } else if (name === 'coffee') {
      drinkDetails = {
        partOfPlant: 'bean',
        caffeineContent: '80–185 mg/cup',
        age: '1,000+ years',
      };
    }
  
    // Return the JSX with values from the `drinkDetails` object
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{drinkDetails.partOfPlant}</dd>
          <dt>Caffeine content</dt>
          <dd>{drinkDetails.caffeineContent}</dd>
          <dt>Age</dt>
          <dd>{drinkDetails.age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  