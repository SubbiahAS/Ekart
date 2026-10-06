import { people } from './renderingLists/Data.js'
import { getImageUrl } from './renderingLists/Util.js';

export default function List() {
  // Array of unique course names
  const courses = ['Full Stack Developer', 'Frontend Developer Developer', 'Backend Developer', 'UI UX Designer'];

  return (
    <div>
      {courses.map((course) => {
        // Filter people by current course
        const coursePeople = people.filter((peop) => peop.course === course);

        return (
          <div key={course}>
            <h2>{course}</h2>
            <ul>
              {coursePeople.map((peop) => (
                <li key={peop.id}>
                  <img src={getImageUrl(peop)} alt={peop.name} />
                  <p>{peop.name}</p>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
