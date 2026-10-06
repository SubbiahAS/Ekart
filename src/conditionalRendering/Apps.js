function Item({ name, isPacked }) 
{
  // // Conditionally returning JSX:
  // return <li className="item">{name}</li>;

  // // Using "if Else" condition:
  // if (isPacked){
  //   return <li className="item">{name} ✔</li>;
  // }
  // return <li className="item">{name}</li>;

// // Conditionally returning nothing with null:
//   if (isPacked){
//   return null;
//   }
//   return <li className="item">{name}</li>;

// // Ternary Operator:
//   return (
//    <li className="item">
//     {isPacked ?  name + ' ✔' : name}
//    </li> 
//   );
// }

// // Ternary Operator using <del>:
// return (
//   <li className="item">
//   {isPacked ? (<del>{name + ' ✔'}</del>) : (name)}
//  </li> 
//  );

// // Logical AND operator (&&):
// return (
//   <li className="item">
//     {name} {isPacked && ' ✔'}
//   </li>
// );

// // Conditionally assigning JSX to a variable:
// let content = name;
// if (isPacked) {
//   content = name + " ✔";
// }
// else {
//   content = name + " ✘";
// }
// return (
//   <li className="item">
//     {content}
//   </li>
// );

// Conditionally assigning JSX to a variable using <del>:
let content = name;
if (isPacked) {
  content =(<del>{name + " ✔"}</del>) 
}
else {
  content = name + " ✘";
}
return (
  <li className="item">
    {content}
  </li>
);

}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}
